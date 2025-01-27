import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

import { stripTypenames } from "../utils/helpers";
import { useAuthStore } from "../stores/authStores";

const API_URL = import.meta.env.VITE_API_URL;

const httpLink = new HttpLink({
  uri: API_URL,
});

const getTokenFromStorage = () => {
  const data = localStorage.getItem("@auth");

  if (data) {
    const { token } = JSON.parse(data);

    return token ?? null;
  }

  return null;
};

const authMiddlewareLink: ApolloLink = new ApolloLink((operation, forward) => {
  const token = getTokenFromStorage();
  const headers = operation.getContext().headers || {};

  operation.setContext({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

const removeTypenameMiddleware = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const variables = Object.keys(operation.variables);

    if (!variables.includes("file")) {
      operation.variables = stripTypenames(operation.variables, "__typename");
    }
  }

  return forward(operation);
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: Infinity,
    retryIf: error => {
      return !!error;
    },
  },
});

export const client = new ApolloClient({
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        for (const { message, locations, path, extensions } of graphQLErrors ?? []) {
          const store = useAuthStore();
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
          store.logout()
        }
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    retryLink,
    authMiddlewareLink,
    removeTypenameMiddleware,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});
