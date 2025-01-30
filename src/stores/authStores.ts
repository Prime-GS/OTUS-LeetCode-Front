import { defineStore } from "pinia";

import { ME } from "../graphql/queries";
import { client } from "../core/apollo";
import type { IUser } from "../graphql/types/users";

export const useAuthStore = defineStore("auth", {
  state: (): { token: null | string; user: IUser | null; loading: boolean } => ({
    token: null,
    user: null,
    loading: false,
  }),
  getters: {
    isLoggendIn: state => !!state.user && !!state.token,
  },
  actions: {
    hasAnyRole(roles: string[]): boolean {
      console.log(this.user);

      if (!this.user?.roles) {
        return false;
      }

      const check = this.user.roles.filter(role => roles.includes(role));

      if (check.length === 0) {
        return false;
      }
      return true;
    },

    setUser(user: IUser | null) {
      this.user = user;
    },

    updateUser(user: IUser) {
      this.setUser(user);
      this.saveToStorage();
    },

    setToken(token: string | null) {
      this.token = token;
    },

    getToken() {
      return this.token;
    },

    setLoading(loading: boolean) {
      this.loading = loading;
    },

    login(user: IUser, token: string, remember?: boolean) {
      this.setUser(user);
      this.setToken(token);

      if (remember) {
        this.saveToStorage();
      }
    },

    logout() {
      this.setUser(null);
      this.setToken(null);

      this.clearStorage();
    },

    clearStorage() {
      window.localStorage.removeItem("@auth");
    },

    loadFromStorage() {
      const data = window.localStorage.getItem("@auth");

      if (data) {
        const { token } = JSON.parse(data);
        if (token) {
          this.setToken(token);
          this.setLoading(true);

          client
            .query({ query: ME })
            .then(response => {
              console.log("RESPONSE", response);

              this.setUser(response.data.me);
            })
            .finally(() => {
              this.setLoading(false);
            });
        }
      }
    },

    saveToStorage() {
      const data = {
        token: this.token,
      };

      window.localStorage.setItem("@auth", JSON.stringify(data));
    },
  },
  
});
