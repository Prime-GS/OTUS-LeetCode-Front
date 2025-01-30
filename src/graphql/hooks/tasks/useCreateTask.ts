import { useMutation } from "@vue/apollo-composable";
import { CREATE_TASK, GET_TASKS } from "../../queries";
import type { ICreateTaskData, ICreateTaskVariables } from "../../types/tasks";

export const useCreateTask = () => {
  return useMutation<ICreateTaskData, ICreateTaskVariables>(CREATE_TASK, {
    refetchQueries: [GET_TASKS],
  });
};
