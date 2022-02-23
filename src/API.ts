/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateMessage: OnCreateMessageSubscription;
  onUpdateMessage: OnUpdateMessageSubscription;
  onDeleteMessage: OnDeleteMessageSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
};

export type CreateMessageInput = {
  id?: string | null;
  body: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type ModelMessageConditionInput = {
  body?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
  messageSenderUserId?: ModelIDInput | null;
  messageRecepientUserId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  senderUser?: User | null;
  recepientUser?: User | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type User = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageInput = {
  id: string;
  body?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelUserConditionInput = {
  appUserId?: ModelIntInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  imageUrl?: ModelStringInput | null;
  schoolName?: ModelStringInput | null;
  grades?: ModelStringInput | null;
  role?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
  id: string;
  appUserId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string | null;
  schoolName?: string | null;
  grades?: string | null;
  role?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  body?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
  messageSenderUserId?: ModelIDInput | null;
  messageRecepientUserId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  appUserId?: ModelIntInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  imageUrl?: ModelStringInput | null;
  schoolName?: ModelStringInput | null;
  grades?: ModelStringInput | null;
  role?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    messageSenderUserId?: string | null;
    messageRecepientUserId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  senderUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  recepientUser?: {
    __typename: "User";
    id: string;
    appUserId: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    schoolName: string;
    grades: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  body: string;
  createdAt: string;
  updatedAt: string;
  messageSenderUserId?: string | null;
  messageRecepientUserId?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  appUserId: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  schoolName: string;
  grades: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    id?: string,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($id: ID, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listMessages(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            body
            createdAt
            updatedAt
            messageSenderUserId
            messageRecepientUserId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    id?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($id: ID, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  >;

  OnUpdateMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  >;

  OnDeleteMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          senderUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          recepientUser {
            __typename
            id
            appUserId
            firstName
            lastName
            imageUrl
            schoolName
            grades
            role
            createdAt
            updatedAt
          }
          body
          createdAt
          updatedAt
          messageSenderUserId
          messageRecepientUserId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  >;

  OnCreateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  >;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  >;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          appUserId
          firstName
          lastName
          imageUrl
          schoolName
          grades
          role
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  >;
}
