import { useQuery } from "@vue/apollo-composable";
import { GET_USER_BY_ID } from "../../queries/users";
import type { IGetUserByIdData, IGetUserByIdVariables } from "../../types/users";

export const useUserById = (id: number) => {
  const { result, ...q } = useQuery<IGetUserByIdData, IGetUserByIdVariables>(
    GET_USER_BY_ID,
    { id },
    {
      fetchPolicy: "network-only",
    },
  );

  const user = result.value?.user;

  return {
    user,
    ...q,
  };
};
