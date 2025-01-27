import type { IListResponse, IPaginationInput, ISearchInput } from "./common";

export interface ITag {
  id: number;
  title: string;
  description: string | null;
  updatedAt: Date;
}

export interface ITagInput {
  id?: number;
  title: string;
  description?: string;
}

export interface IGetTagsData {
  Tags: IListResponse<ITag>;
}

export interface IGetTagsVariables {
  pagination?: IPaginationInput;
  filter?: ISearchInput;
}

export interface IGetTagByIdData {
  Tag: ITag;
}

export interface IGetTagByIdVariables {
  id: number;
}

export interface ICreateTagData {
  createTag: ITag;
}

export interface ICreateTagVariables {
  input: ITagInput;
}
