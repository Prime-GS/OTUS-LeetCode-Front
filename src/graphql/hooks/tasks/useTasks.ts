import { GET_TASKS } from "../../queries";
import type { IGetTasksData, IGetTasksVariables } from "../../types/tasks";
import type { IPaginationInput, ISearchInput } from "../../types/common";
import { useQuery } from "@vue/apollo-composable";

export const useTasks = (pagination?: IPaginationInput, filter?: ISearchInput) => {
  const data = useQuery<IGetTasksData, IGetTasksVariables>(
    GET_TASKS,
    {
      pagination,
      filter,
    },
    { fetchPolicy: "network-only" },
  );
  
  return {
    ...data,
  };
};
