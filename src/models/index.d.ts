import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageMetaData = {
  readOnlyFields;
}

type UserMetaData = {
  readOnlyFields;
}

export declare class Message {
  readonly id: string;
  readonly senderUser?: User;
  readonly recepientUser?: User;
  readonly body: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly messageSenderUserId?: string;
  readonly messageRecepientUserId?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class User {
  readonly id: string;
  readonly appUserId: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly imageUrl: string;
  readonly schoolName: string;
  readonly grades: string;
  readonly role: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}