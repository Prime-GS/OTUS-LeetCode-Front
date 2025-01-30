import { GET_TAGS } from "../../queries";
import type { IGetTagsData, IGetTagsVariables } from "../../types/tags";
import type { IPaginationInput, ISearchInput } from "../../types/common";
import { useQuery } from "@vue/apollo-composable";

export const useTags = (pagination?: IPaginationInput, filter?: ISearchInput) => {
  const { result, ...q } = useQuery<IGetTagsData, IGetTagsVariables>(
    GET_TAGS,
    {
      pagination,
      filter,
    },
    { fetchPolicy: "network-only" },
  );

  const tags = result.value?.Tags.data ?? [];
  const total = result.value?.Tags.total ?? 0;

  return {
    tags,
    total,
    ...q,
  };
};
