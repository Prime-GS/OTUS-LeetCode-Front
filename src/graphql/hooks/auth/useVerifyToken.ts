import { useMutation } from "@vue/apollo-composable";
import { VERIFY_TOKEN } from "../../queries/auth";
import type { IVerifyTokenData, IVerifyTokenVariables } from "../../types/auth";

export function useVerifyToken() {
  return useMutation<IVerifyTokenData, IVerifyTokenVariables>(VERIFY_TOKEN);
}
