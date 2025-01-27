import type { IListResponse, IPaginationInput, ISearchInput } from './common'

export interface IUser {
  id: number
  firstName: string
  lastName: string | null
  middleName: string | null
  fullName: string
  email: string
  roles: string[]
}

export interface IUserInput {
  firstName: string
  lastName?: string
  middleName?: string
  email: string
  password: string
  roles?: string[]
}

export interface IGetUsersData {
  users: IListResponse<IUser>
}

export interface IGetUsersVariables {
  pagination?: IPaginationInput
  filter?: ISearchInput
}

export interface IGetUserByIdData {
  user: IUser
}

export interface IGetUserByIdVariables {
  id: number
}

export interface ICreateUserData {
  createUser: IUser
}

export interface ICreateUserVariables {
  input: IUserInput
}
