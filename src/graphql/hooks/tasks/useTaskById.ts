import { useQuery } from "@vue/apollo-composable";
import { GET_TAG_BY_ID } from "../../queries";
import type { IGetTagByIdData, IGetTagByIdVariables } from "../../types/tags";

export const useTagById = (id: number) => {
  const { result, ...q } = useQuery<IGetTagByIdData, IGetTagByIdVariables>(
    GET_TAG_BY_ID,
    { id },
    {
      fetchPolicy: "network-only",
    },
  );

  const tag = result.value?.Tag;

  return {
    tag,
    ...q,
  };
};
