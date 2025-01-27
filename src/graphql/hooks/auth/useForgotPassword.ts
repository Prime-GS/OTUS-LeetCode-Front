import { useMutation } from "@vue/apollo-composable";
import { FORGOT_PASSWORD } from "../../queries/auth";
import type { IForgotPasswordData, IForgotPasswordVariables } from "../../types/auth";

export function useForgotPassword() {
  return useMutation<IForgotPasswordData, IForgotPasswordVariables>(FORGOT_PASSWORD);
}
