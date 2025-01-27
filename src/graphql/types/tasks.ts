import type { IListResponse, IPaginationInput, ISearchInput } from "./common";
import type { ITag } from "./tags";

export enum TaskDifficulty {
  EASY = "легко",
  MEDIUM = "средне",
  HARD = "сложно",
  SENIOR = "сеньор",
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  difficulty: TaskDifficulty;
  result: string;
  input: string | null;
  tags: ITag[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITaskInput {
  title: string;
  description: string;
  difficulty: TaskDifficulty;
  result: string;
  input?: string;
  tagIds?: number[];
}

export interface IGetTasksData {
  tasks: IListResponse<ITask>;
}

export interface IGetTasksVariables {
  pagination?: IPaginationInput;
  filter?: ISearchInput;
}

export interface IGetTaskByIdData {
  task: ITask;
}

export interface IGetTaskByIdVariables {
  id: number;
}

export interface ICreateTaskData {
  createTask: ITask;
}

export interface ICreateTaskVariables {
  input: ITaskInput;
}
