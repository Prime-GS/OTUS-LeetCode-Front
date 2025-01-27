import { useMutation } from '@vue/apollo-composable'
import { DELETE_USER, GET_USERS } from '../../queries/users'
import type { IDeleteVariables } from '../../types/common'

export const useDeleteUser = () => {
  return useMutation<boolean, IDeleteVariables>(DELETE_USER, {
    refetchQueries: [GET_USERS],
  })
}
