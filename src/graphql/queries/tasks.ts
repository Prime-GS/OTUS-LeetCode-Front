import gql from "graphql-tag";

export const TASK_FRAGMENT = gql`
  fragment TaskFragment on Task {
    id
    title
    description
    difficulty
    result
    input 
    tags
    createdAt
    updatedAt
  }
`;

export const GET_TASKS = gql`
  query GetTasksQuery($pagination: PaginationInput, $filter: FilterInput) {
    tasks(pagination: $pagination, filter: $filter) {
      data {
        ...TaskFragment
      }
      total
    }
  }
  ${TASK_FRAGMENT}
`;

export const GET_TASK_BY_ID = gql`
  query GetTaskByIdQuery($id: Int!) {
    task(id: $id) {
      ...TaskFragment
    }
  }
  ${TASK_FRAGMENT}
`;

export const CREATE_TASK = gql`
  mutation CreateTaskMutation($input: TASKInput!) {
    createTask(input: $input) {
      ...TaskFragment
    }
  }
  ${TASK_FRAGMENT}
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;
