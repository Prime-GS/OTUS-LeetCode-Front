import { useMutation } from "@vue/apollo-composable";
import { LOGIN } from "../../queries/auth";
import type { ILoginData, ILoginVariables } from "../../types/auth";

export const useLogin = () => {
  return useMutation<ILoginData, ILoginVariables>(LOGIN);
};
