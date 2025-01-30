import { useMutation } from "@vue/apollo-composable";
import { CREATE_TAG, GET_TAGS } from "../../queries";
import type { ICreateTagData, ICreateTagVariables } from "../../types/tags";

export const useCreateTag = () => {
  return useMutation<ICreateTagData, ICreateTagVariables>(CREATE_TAG, {
    refetchQueries: [GET_TAGS],
  });
};
