import { useMutation } from "@vue/apollo-composable";
import { CREATE_USER, GET_USERS } from "../../queries/users";
import type { ICreateUserData, ICreateUserVariables } from "../../types/users";

export const useCreateUser = () => {
  return useMutation<ICreateUserData, ICreateUserVariables>(CREATE_USER, {
    refetchQueries: [GET_USERS],
  });
};
