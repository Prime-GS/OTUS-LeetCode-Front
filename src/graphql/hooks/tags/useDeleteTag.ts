import { useMutation } from '@vue/apollo-composable'
import { DELETE_TAG, GET_TAGS } from '../../queries'
import type { IDeleteVariables } from '../../types/common'

export const useDeleteTag = () => {
  return useMutation<boolean, IDeleteVariables>(DELETE_TAG, {
    refetchQueries: [GET_TAGS],
  })
}
