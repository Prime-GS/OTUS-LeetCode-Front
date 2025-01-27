export interface IListResponse<T> {
  data: T[]
  total: number
}

export interface IPaginationInput {
  limit: number
  offset: number
}

export interface ISearchInput {
  query: string
}

export interface IDeleteVariables {
  id: number
}
