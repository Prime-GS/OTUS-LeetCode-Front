import { useMutation } from '@vue/apollo-composable'
import { DELETE_TASK, GET_TASKS } from '../../queries'
import type { IDeleteVariables } from '../../types/common'

export const useDeleteTask = () => {
  return useMutation<boolean, IDeleteVariables>(DELETE_TASK, {
    refetchQueries: [GET_TASKS],
  })
}
