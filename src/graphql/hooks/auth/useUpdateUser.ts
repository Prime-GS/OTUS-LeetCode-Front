import { useMutation } from '@vue/apollo-composable'
import { ME, UPDATE_USER } from '../../queries/auth'
import type { IUpdateUserData, IUpdateUserVariables } from '../../types/auth'

export const useUpdateUser = () => {
  return useMutation<IUpdateUserData, IUpdateUserVariables>(UPDATE_USER, {
    refetchQueries: [ME],
  })
}
