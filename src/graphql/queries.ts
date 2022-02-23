/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      body
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $id: ID
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
