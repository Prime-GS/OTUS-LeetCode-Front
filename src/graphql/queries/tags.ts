import gql from "graphql-tag";

export const TAG_FRAGMENT = gql`
  fragment TagFragment on Tag {
    id
    title
    description
    createdAt
    updatedAt
  }
`;

export const GET_TAGS = gql`
  query GetTagsQuery($pagination: PaginationInput, $filter: FilterInput) {
    tags(pagination: $pagination, filter: $filter) {
      data {
        ...TagFragment
      }
      total
    }
  }
  ${TAG_FRAGMENT}
`;

export const GET_TAG_BY_ID = gql`
  query GetTagByIdQuery($id: Int!) {
    tag(id: $id) {
      ...TagFragment
    }
  }
  ${TAG_FRAGMENT} 
`;

export const CREATE_TAG = gql`
  mutation CreateTagMutation($input: TagInput!) {
    createTag(input: $input) {
      ...TagFragment
    }
  }
  ${TAG_FRAGMENT}
`;

export const DELETE_TAG = gql`
  mutation DeleteTag($id: Int!) {
    deleteTag(id: $id)
  }
`;
