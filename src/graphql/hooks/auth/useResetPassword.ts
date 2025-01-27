import { useMutation } from "@vue/apollo-composable";
import { ME, RESET_PASSWORD } from "../../queries/auth";
import type { IResetPasswordData, IResetPasswordVariables } from "../../types/auth";

export function useResetPassword() {
  return useMutation<IResetPasswordData, IResetPasswordVariables>(RESET_PASSWORD, {
    refetchQueries: [ME],
  });
}
