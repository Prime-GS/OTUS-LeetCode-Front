import { GET_USERS } from '../../queries/users'
import type { IGetUsersData, IGetUsersVariables } from '../../types/users'
import type { IPaginationInput, ISearchInput } from '../../types/common'
import { useQuery } from '@vue/apollo-composable'

export const useUsers = (pagination?: IPaginationInput, filter?: ISearchInput) => {
  const { result, ...q } = useQuery<IGetUsersData, IGetUsersVariables>(
    GET_USERS,
    {
      pagination,
      filter,
    },
    { fetchPolicy: 'network-only' },
  )

  const users = result.value?.users.data ?? []
  const total = result.value?.users.total ?? 0

  return {
    users,
    total,
    ...q,
  }
}
