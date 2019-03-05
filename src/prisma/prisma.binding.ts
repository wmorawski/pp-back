import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    chats: <T = Array<Chat | null>>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    parties: <T = Array<Party | null>>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    games: <T = Array<Game | null>>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    party: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    game: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partiesConnection: <T = PartyConnection>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    gamesConnection: <T = GameConnection>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createParty: <T = Party>(args: { data: PartyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGame: <T = Game>(args: { data: GameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateParty: <T = Party | null>(args: { data: PartyUpdateInput, where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateGame: <T = Game | null>(args: { data: GameUpdateInput, where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteParty: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteGame: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertParty: <T = Party>(args: { where: PartyWhereUniqueInput, create: PartyCreateInput, update: PartyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGame: <T = Game>(args: { where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyParties: <T = BatchPayload>(args: { data: PartyUpdateManyMutationInput, where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGames: <T = BatchPayload>(args: { data: GameUpdateManyMutationInput, where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyParties: <T = BatchPayload>(args: { where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGames: <T = BatchPayload>(args: { where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    party: <T = PartySubscriptionPayload | null>(args: { where?: PartySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    game: <T = GameSubscriptionPayload | null>(args: { where?: GameSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Chat: (where?: ChatWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Party: (where?: PartyWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Game: (where?: GameWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChat {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateParty {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Chat implements Node {
  id: ID!
  party: Party!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ChatConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  party: PartyCreateOneInput!
  members: UserCreateManyWithoutChatsInput
  messages: MessageCreateManyWithoutChatInput
}

input ChatCreateManyWithoutMembersInput {
  create: [ChatCreateWithoutMembersInput!]
  connect: [ChatWhereUniqueInput!]
}

input ChatCreateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatCreateWithoutMembersInput {
  party: PartyCreateOneInput!
  messages: MessageCreateManyWithoutChatInput
}

input ChatCreateWithoutMessagesInput {
  party: PartyCreateOneInput!
  members: UserCreateManyWithoutChatsInput
}

"""An edge in a connection."""
type ChatEdge {
  """The item at the end of the edge."""
  node: Chat!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ChatScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
}

input ChatUpdateInput {
  party: PartyUpdateOneRequiredInput
  members: UserUpdateManyWithoutChatsInput
  messages: MessageUpdateManyWithoutChatInput
}

input ChatUpdateManyWithoutMembersInput {
  create: [ChatCreateWithoutMembersInput!]
  connect: [ChatWhereUniqueInput!]
  set: [ChatWhereUniqueInput!]
  disconnect: [ChatWhereUniqueInput!]
  delete: [ChatWhereUniqueInput!]
  update: [ChatUpdateWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ChatScalarWhereInput!]
  upsert: [ChatUpsertWithWhereUniqueWithoutMembersInput!]
}

input ChatUpdateOneRequiredWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
}

input ChatUpdateWithoutMembersDataInput {
  party: PartyUpdateOneRequiredInput
  messages: MessageUpdateManyWithoutChatInput
}

input ChatUpdateWithoutMessagesDataInput {
  party: PartyUpdateOneRequiredInput
  members: UserUpdateManyWithoutChatsInput
}

input ChatUpdateWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput!
  data: ChatUpdateWithoutMembersDataInput!
}

input ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput!
  create: ChatCreateWithoutMessagesInput!
}

input ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput!
  update: ChatUpdateWithoutMembersDataInput!
  create: ChatCreateWithoutMembersInput!
}

input ChatWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  party: PartyWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

type Game implements Node {
  id: ID!
  title: String!
  cover: String
  type: GameType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type GameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  title: String!
  cover: String
  type: GameType!
}

input GameCreateManyInput {
  create: [GameCreateInput!]
  connect: [GameWhereUniqueInput!]
}

"""An edge in a connection."""
type GameEdge {
  """The item at the end of the edge."""
  node: Game!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cover_ASC
  cover_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
  title: String!
  cover: String
  type: GameType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input GameScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [GameScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  cover: String

  """All values that are not equal to given value."""
  cover_not: String

  """All values that are contained in given list."""
  cover_in: [String!]

  """All values that are not contained in given list."""
  cover_not_in: [String!]

  """All values less than the given value."""
  cover_lt: String

  """All values less than or equal the given value."""
  cover_lte: String

  """All values greater than the given value."""
  cover_gt: String

  """All values greater than or equal the given value."""
  cover_gte: String

  """All values containing the given string."""
  cover_contains: String

  """All values not containing the given string."""
  cover_not_contains: String

  """All values starting with the given string."""
  cover_starts_with: String

  """All values not starting with the given string."""
  cover_not_starts_with: String

  """All values ending with the given string."""
  cover_ends_with: String

  """All values not ending with the given string."""
  cover_not_ends_with: String
  type: GameType

  """All values that are not equal to given value."""
  type_not: GameType

  """All values that are contained in given list."""
  type_in: [GameType!]

  """All values that are not contained in given list."""
  type_not_in: [GameType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GameWhereInput
}

enum GameType {
  BOARD
  PC
  CONSOLE
}

input GameUpdateDataInput {
  title: String
  cover: String
  type: GameType
}

input GameUpdateInput {
  title: String
  cover: String
  type: GameType
}

input GameUpdateManyDataInput {
  title: String
  cover: String
  type: GameType
}

input GameUpdateManyInput {
  create: [GameCreateInput!]
  connect: [GameWhereUniqueInput!]
  set: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  delete: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueNestedInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
  deleteMany: [GameScalarWhereInput!]
  upsert: [GameUpsertWithWhereUniqueNestedInput!]
}

input GameUpdateManyMutationInput {
  title: String
  cover: String
  type: GameType
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  data: GameUpdateDataInput!
}

input GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  update: GameUpdateDataInput!
  create: GameCreateInput!
}

input GameWhereInput {
  """Logical AND on all given filters."""
  AND: [GameWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  cover: String

  """All values that are not equal to given value."""
  cover_not: String

  """All values that are contained in given list."""
  cover_in: [String!]

  """All values that are not contained in given list."""
  cover_not_in: [String!]

  """All values less than the given value."""
  cover_lt: String

  """All values less than or equal the given value."""
  cover_lte: String

  """All values greater than the given value."""
  cover_gt: String

  """All values greater than or equal the given value."""
  cover_gte: String

  """All values containing the given string."""
  cover_contains: String

  """All values not containing the given string."""
  cover_not_contains: String

  """All values starting with the given string."""
  cover_starts_with: String

  """All values not starting with the given string."""
  cover_not_starts_with: String

  """All values ending with the given string."""
  cover_ends_with: String

  """All values not ending with the given string."""
  cover_not_ends_with: String
  type: GameType

  """All values that are not equal to given value."""
  type_not: GameType

  """All values that are contained in given list."""
  type_in: [GameType!]

  """All values that are not contained in given list."""
  type_not_in: [GameType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input GameWhereUniqueInput {
  id: ID
  title: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  author: User!
  chat: Chat!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  content: String!
  author: UserCreateOneInput!
  chat: ChatCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatInput {
  content: String!
  author: UserCreateOneInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  content: String
  author: UserUpdateOneRequiredInput
  chat: ChatUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  content: String
}

input MessageUpdateManyMutationInput {
  content: String
}

input MessageUpdateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
  deleteMany: [MessageScalarWhereInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutChatDataInput {
  content: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChatDataInput!
}

input MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChatDataInput!
  create: MessageCreateWithoutChatInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: UserWhereInput
  chat: ChatWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChat(data: ChatCreateInput!): Chat!
  createMessage(data: MessageCreateInput!): Message!
  createParty(data: PartyCreateInput!): Party!
  createUser(data: UserCreateInput!): User!
  createGame(data: GameCreateInput!): Game!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateParty(data: PartyUpdateInput!, where: PartyWhereUniqueInput!): Party
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteParty(where: PartyWhereUniqueInput!): Party
  deleteUser(where: UserWhereUniqueInput!): User
  deleteGame(where: GameWhereUniqueInput!): Game
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertParty(where: PartyWhereUniqueInput!, create: PartyCreateInput!, update: PartyUpdateInput!): Party!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyParties(data: PartyUpdateManyMutationInput!, where: PartyWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyParties(where: PartyWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyGames(where: GameWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Party implements Node {
  id: ID!
  title: String!
  description: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  isPublic: Boolean!
}

"""A connection to a list of items."""
type PartyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PartyEdge]!
  aggregate: AggregateParty!
}

input PartyCreateInput {
  title: String!
  description: String!
  isPublic: Boolean
  author: UserCreateOneWithoutPartiesInput!
  games: GameCreateManyInput
}

input PartyCreateManyWithoutAuthorInput {
  create: [PartyCreateWithoutAuthorInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateOneInput {
  create: PartyCreateInput
  connect: PartyWhereUniqueInput
}

input PartyCreateWithoutAuthorInput {
  title: String!
  description: String!
  isPublic: Boolean
  games: GameCreateManyInput
}

"""An edge in a connection."""
type PartyEdge {
  """The item at the end of the edge."""
  node: Party!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PartyOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublic_ASC
  isPublic_DESC
}

type PartyPreviousValues {
  id: ID!
  title: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublic: Boolean!
}

input PartyScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PartyScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
}

type PartySubscriptionPayload {
  mutation: MutationType!
  node: Party
  updatedFields: [String!]
  previousValues: PartyPreviousValues
}

input PartySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PartySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PartyWhereInput
}

input PartyUpdateDataInput {
  title: String
  description: String
  isPublic: Boolean
  author: UserUpdateOneRequiredWithoutPartiesInput
  games: GameUpdateManyInput
}

input PartyUpdateInput {
  title: String
  description: String
  isPublic: Boolean
  author: UserUpdateOneRequiredWithoutPartiesInput
  games: GameUpdateManyInput
}

input PartyUpdateManyDataInput {
  title: String
  description: String
  isPublic: Boolean
}

input PartyUpdateManyMutationInput {
  title: String
  description: String
  isPublic: Boolean
}

input PartyUpdateManyWithoutAuthorInput {
  create: [PartyCreateWithoutAuthorInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  delete: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutAuthorInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
  deleteMany: [PartyScalarWhereInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput!
  data: PartyUpdateManyDataInput!
}

input PartyUpdateOneRequiredInput {
  create: PartyCreateInput
  connect: PartyWhereUniqueInput
  update: PartyUpdateDataInput
  upsert: PartyUpsertNestedInput
}

input PartyUpdateWithoutAuthorDataInput {
  title: String
  description: String
  isPublic: Boolean
  games: GameUpdateManyInput
}

input PartyUpdateWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutAuthorDataInput!
}

input PartyUpsertNestedInput {
  update: PartyUpdateDataInput!
  create: PartyCreateInput!
}

input PartyUpsertWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutAuthorDataInput!
  create: PartyCreateWithoutAuthorInput!
}

input PartyWhereInput {
  """Logical AND on all given filters."""
  AND: [PartyWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  author: UserWhereInput
  games_every: GameWhereInput
  games_some: GameWhereInput
  games_none: GameWhereInput
}

input PartyWhereUniqueInput {
  id: ID
}

type Query {
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  chat(where: ChatWhereUniqueInput!): Chat
  message(where: MessageWhereUniqueInput!): Message
  party(where: PartyWhereUniqueInput!): Party
  user(where: UserWhereUniqueInput!): User
  game(where: GameWhereUniqueInput!): Game
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  email: String!
  password: String!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  password: String!
  deleted: Boolean
  parties: PartyCreateManyWithoutAuthorInput
  friends: UserCreateManyInput
  chats: ChatCreateManyWithoutMembersInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPartiesInput {
  create: UserCreateWithoutPartiesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatsInput {
  username: String!
  email: String!
  password: String!
  deleted: Boolean
  parties: PartyCreateManyWithoutAuthorInput
  friends: UserCreateManyInput
}

input UserCreateWithoutPartiesInput {
  username: String!
  email: String!
  password: String!
  deleted: Boolean
  friends: UserCreateManyInput
  chats: ChatCreateManyWithoutMembersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  username: String
  email: String
  password: String
  deleted: Boolean
  parties: PartyUpdateManyWithoutAuthorInput
  friends: UserUpdateManyInput
  chats: ChatUpdateManyWithoutMembersInput
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  deleted: Boolean
  parties: PartyUpdateManyWithoutAuthorInput
  friends: UserUpdateManyInput
  chats: ChatUpdateManyWithoutMembersInput
}

input UserUpdateManyDataInput {
  username: String
  email: String
  password: String
  deleted: Boolean
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
  deleted: Boolean
}

input UserUpdateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChatsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChatsInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutPartiesInput {
  create: UserCreateWithoutPartiesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPartiesDataInput
  upsert: UserUpsertWithoutPartiesInput
}

input UserUpdateWithoutChatsDataInput {
  username: String
  email: String
  password: String
  deleted: Boolean
  parties: PartyUpdateManyWithoutAuthorInput
  friends: UserUpdateManyInput
}

input UserUpdateWithoutPartiesDataInput {
  username: String
  email: String
  password: String
  deleted: Boolean
  friends: UserUpdateManyInput
  chats: ChatUpdateManyWithoutMembersInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChatsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPartiesInput {
  update: UserUpdateWithoutPartiesDataInput!
  create: UserCreateWithoutPartiesInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChatsDataInput!
  create: UserCreateWithoutChatsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  parties_every: PartyWhereInput
  parties_some: PartyWhereInput
  parties_none: PartyWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  chats_every: ChatWhereInput
  chats_some: ChatWhereInput
  chats_none: ChatWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type GameOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'cover_ASC' |
  'cover_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type GameType =   'BOARD' |
  'PC' |
  'CONSOLE'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'content_ASC' |
  'content_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PartyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublic_ASC' |
  'isPublic_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export interface ChatCreateInput {
  party: PartyCreateOneInput
  members?: UserCreateManyWithoutChatsInput | null
  messages?: MessageCreateManyWithoutChatInput | null
}

export interface ChatCreateManyWithoutMembersInput {
  create?: ChatCreateWithoutMembersInput[] | ChatCreateWithoutMembersInput | null
  connect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
}

export interface ChatCreateOneWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput | null
  connect?: ChatWhereUniqueInput | null
}

export interface ChatCreateWithoutMembersInput {
  party: PartyCreateOneInput
  messages?: MessageCreateManyWithoutChatInput | null
}

export interface ChatCreateWithoutMessagesInput {
  party: PartyCreateOneInput
  members?: UserCreateManyWithoutChatsInput | null
}

export interface ChatScalarWhereInput {
  AND?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  OR?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  NOT?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ChatSubscriptionWhereInput {
  AND?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
  OR?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
  NOT?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ChatWhereInput | null
}

export interface ChatUpdateInput {
  party?: PartyUpdateOneRequiredInput | null
  members?: UserUpdateManyWithoutChatsInput | null
  messages?: MessageUpdateManyWithoutChatInput | null
}

export interface ChatUpdateManyWithoutMembersInput {
  create?: ChatCreateWithoutMembersInput[] | ChatCreateWithoutMembersInput | null
  connect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  set?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  disconnect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  delete?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  update?: ChatUpdateWithWhereUniqueWithoutMembersInput[] | ChatUpdateWithWhereUniqueWithoutMembersInput | null
  deleteMany?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  upsert?: ChatUpsertWithWhereUniqueWithoutMembersInput[] | ChatUpsertWithWhereUniqueWithoutMembersInput | null
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput | null
  connect?: ChatWhereUniqueInput | null
  update?: ChatUpdateWithoutMessagesDataInput | null
  upsert?: ChatUpsertWithoutMessagesInput | null
}

export interface ChatUpdateWithoutMembersDataInput {
  party?: PartyUpdateOneRequiredInput | null
  messages?: MessageUpdateManyWithoutChatInput | null
}

export interface ChatUpdateWithoutMessagesDataInput {
  party?: PartyUpdateOneRequiredInput | null
  members?: UserUpdateManyWithoutChatsInput | null
}

export interface ChatUpdateWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput
  data: ChatUpdateWithoutMembersDataInput
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput
  create: ChatCreateWithoutMessagesInput
}

export interface ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput
  update: ChatUpdateWithoutMembersDataInput
  create: ChatCreateWithoutMembersInput
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[] | ChatWhereInput | null
  OR?: ChatWhereInput[] | ChatWhereInput | null
  NOT?: ChatWhereInput[] | ChatWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  party?: PartyWhereInput | null
  members_every?: UserWhereInput | null
  members_some?: UserWhereInput | null
  members_none?: UserWhereInput | null
  messages_every?: MessageWhereInput | null
  messages_some?: MessageWhereInput | null
  messages_none?: MessageWhereInput | null
}

export interface ChatWhereUniqueInput {
  id?: ID_Input | null
}

export interface GameCreateInput {
  title: String
  cover?: String | null
  type: GameType
}

export interface GameCreateManyInput {
  create?: GameCreateInput[] | GameCreateInput | null
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
}

export interface GameScalarWhereInput {
  AND?: GameScalarWhereInput[] | GameScalarWhereInput | null
  OR?: GameScalarWhereInput[] | GameScalarWhereInput | null
  NOT?: GameScalarWhereInput[] | GameScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  cover?: String | null
  cover_not?: String | null
  cover_in?: String[] | String | null
  cover_not_in?: String[] | String | null
  cover_lt?: String | null
  cover_lte?: String | null
  cover_gt?: String | null
  cover_gte?: String | null
  cover_contains?: String | null
  cover_not_contains?: String | null
  cover_starts_with?: String | null
  cover_not_starts_with?: String | null
  cover_ends_with?: String | null
  cover_not_ends_with?: String | null
  type?: GameType | null
  type_not?: GameType | null
  type_in?: GameType[] | GameType | null
  type_not_in?: GameType[] | GameType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface GameSubscriptionWhereInput {
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: GameWhereInput | null
}

export interface GameUpdateDataInput {
  title?: String | null
  cover?: String | null
  type?: GameType | null
}

export interface GameUpdateInput {
  title?: String | null
  cover?: String | null
  type?: GameType | null
}

export interface GameUpdateManyDataInput {
  title?: String | null
  cover?: String | null
  type?: GameType | null
}

export interface GameUpdateManyInput {
  create?: GameCreateInput[] | GameCreateInput | null
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  set?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  disconnect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  delete?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  update?: GameUpdateWithWhereUniqueNestedInput[] | GameUpdateWithWhereUniqueNestedInput | null
  updateMany?: GameUpdateManyWithWhereNestedInput[] | GameUpdateManyWithWhereNestedInput | null
  deleteMany?: GameScalarWhereInput[] | GameScalarWhereInput | null
  upsert?: GameUpsertWithWhereUniqueNestedInput[] | GameUpsertWithWhereUniqueNestedInput | null
}

export interface GameUpdateManyMutationInput {
  title?: String | null
  cover?: String | null
  type?: GameType | null
}

export interface GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput
  data: GameUpdateManyDataInput
}

export interface GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput
  data: GameUpdateDataInput
}

export interface GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput
  update: GameUpdateDataInput
  create: GameCreateInput
}

export interface GameWhereInput {
  AND?: GameWhereInput[] | GameWhereInput | null
  OR?: GameWhereInput[] | GameWhereInput | null
  NOT?: GameWhereInput[] | GameWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  cover?: String | null
  cover_not?: String | null
  cover_in?: String[] | String | null
  cover_not_in?: String[] | String | null
  cover_lt?: String | null
  cover_lte?: String | null
  cover_gt?: String | null
  cover_gte?: String | null
  cover_contains?: String | null
  cover_not_contains?: String | null
  cover_starts_with?: String | null
  cover_not_starts_with?: String | null
  cover_ends_with?: String | null
  cover_not_ends_with?: String | null
  type?: GameType | null
  type_not?: GameType | null
  type_in?: GameType[] | GameType | null
  type_not_in?: GameType[] | GameType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface GameWhereUniqueInput {
  id?: ID_Input | null
  title?: String | null
}

export interface MessageCreateInput {
  content: String
  author: UserCreateOneInput
  chat: ChatCreateOneWithoutMessagesInput
}

export interface MessageCreateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateWithoutChatInput {
  content: String
  author: UserCreateOneInput
}

export interface MessageScalarWhereInput {
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MessageWhereInput | null
}

export interface MessageUpdateInput {
  content?: String | null
  author?: UserUpdateOneRequiredInput | null
  chat?: ChatUpdateOneRequiredWithoutMessagesInput | null
}

export interface MessageUpdateManyDataInput {
  content?: String | null
}

export interface MessageUpdateManyMutationInput {
  content?: String | null
}

export interface MessageUpdateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[] | MessageUpdateWithWhereUniqueWithoutChatInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[] | MessageUpsertWithWhereUniqueWithoutChatInput | null
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput
  data: MessageUpdateManyDataInput
}

export interface MessageUpdateWithoutChatDataInput {
  content?: String | null
  author?: UserUpdateOneRequiredInput | null
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutChatDataInput
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutChatDataInput
  create: MessageCreateWithoutChatInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput | null
  OR?: MessageWhereInput[] | MessageWhereInput | null
  NOT?: MessageWhereInput[] | MessageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  author?: UserWhereInput | null
  chat?: ChatWhereInput | null
}

export interface MessageWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartyCreateInput {
  title: String
  description: String
  isPublic?: Boolean | null
  author: UserCreateOneWithoutPartiesInput
  games?: GameCreateManyInput | null
}

export interface PartyCreateManyWithoutAuthorInput {
  create?: PartyCreateWithoutAuthorInput[] | PartyCreateWithoutAuthorInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateOneInput {
  create?: PartyCreateInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateWithoutAuthorInput {
  title: String
  description: String
  isPublic?: Boolean | null
  games?: GameCreateManyInput | null
}

export interface PartyScalarWhereInput {
  AND?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  OR?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  NOT?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
}

export interface PartySubscriptionWhereInput {
  AND?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  OR?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  NOT?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyWhereInput | null
}

export interface PartyUpdateDataInput {
  title?: String | null
  description?: String | null
  isPublic?: Boolean | null
  author?: UserUpdateOneRequiredWithoutPartiesInput | null
  games?: GameUpdateManyInput | null
}

export interface PartyUpdateInput {
  title?: String | null
  description?: String | null
  isPublic?: Boolean | null
  author?: UserUpdateOneRequiredWithoutPartiesInput | null
  games?: GameUpdateManyInput | null
}

export interface PartyUpdateManyDataInput {
  title?: String | null
  description?: String | null
  isPublic?: Boolean | null
}

export interface PartyUpdateManyMutationInput {
  title?: String | null
  description?: String | null
  isPublic?: Boolean | null
}

export interface PartyUpdateManyWithoutAuthorInput {
  create?: PartyCreateWithoutAuthorInput[] | PartyCreateWithoutAuthorInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  update?: PartyUpdateWithWhereUniqueWithoutAuthorInput[] | PartyUpdateWithWhereUniqueWithoutAuthorInput | null
  updateMany?: PartyUpdateManyWithWhereNestedInput[] | PartyUpdateManyWithWhereNestedInput | null
  deleteMany?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  upsert?: PartyUpsertWithWhereUniqueWithoutAuthorInput[] | PartyUpsertWithWhereUniqueWithoutAuthorInput | null
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput
  data: PartyUpdateManyDataInput
}

export interface PartyUpdateOneRequiredInput {
  create?: PartyCreateInput | null
  connect?: PartyWhereUniqueInput | null
  update?: PartyUpdateDataInput | null
  upsert?: PartyUpsertNestedInput | null
}

export interface PartyUpdateWithoutAuthorDataInput {
  title?: String | null
  description?: String | null
  isPublic?: Boolean | null
  games?: GameUpdateManyInput | null
}

export interface PartyUpdateWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutAuthorDataInput
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput
  create: PartyCreateInput
}

export interface PartyUpsertWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutAuthorDataInput
  create: PartyCreateWithoutAuthorInput
}

export interface PartyWhereInput {
  AND?: PartyWhereInput[] | PartyWhereInput | null
  OR?: PartyWhereInput[] | PartyWhereInput | null
  NOT?: PartyWhereInput[] | PartyWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  author?: UserWhereInput | null
  games_every?: GameWhereInput | null
  games_some?: GameWhereInput | null
  games_none?: GameWhereInput | null
}

export interface PartyWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  username: String
  email: String
  password: String
  deleted?: Boolean | null
  parties?: PartyCreateManyWithoutAuthorInput | null
  friends?: UserCreateManyInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutChatsInput {
  username: String
  email: String
  password: String
  deleted?: Boolean | null
  parties?: PartyCreateManyWithoutAuthorInput | null
  friends?: UserCreateManyInput | null
}

export interface UserCreateWithoutPartiesInput {
  username: String
  email: String
  password: String
  deleted?: Boolean | null
  friends?: UserCreateManyInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
  parties?: PartyUpdateManyWithoutAuthorInput | null
  friends?: UserUpdateManyInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
}

export interface UserUpdateInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
  parties?: PartyUpdateManyWithoutAuthorInput | null
  friends?: UserUpdateManyInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
}

export interface UserUpdateManyDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
}

export interface UserUpdateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutChatsInput[] | UserUpdateWithWhereUniqueWithoutChatsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutChatsInput[] | UserUpsertWithWhereUniqueWithoutChatsInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneRequiredWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutPartiesDataInput | null
  upsert?: UserUpsertWithoutPartiesInput | null
}

export interface UserUpdateWithoutChatsDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
  parties?: PartyUpdateManyWithoutAuthorInput | null
  friends?: UserUpdateManyInput | null
}

export interface UserUpdateWithoutPartiesDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  deleted?: Boolean | null
  friends?: UserUpdateManyInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutChatsDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutPartiesInput {
  update: UserUpdateWithoutPartiesDataInput
  create: UserCreateWithoutPartiesInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutChatsDataInput
  create: UserCreateWithoutChatsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  parties_every?: PartyWhereInput | null
  parties_some?: PartyWhereInput | null
  parties_none?: PartyWhereInput | null
  friends_every?: UserWhereInput | null
  friends_some?: UserWhereInput | null
  friends_none?: UserWhereInput | null
  chats_every?: ChatWhereInput | null
  chats_some?: ChatWhereInput | null
  chats_none?: ChatWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  username?: String | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateChat {
  count: Int
}

export interface AggregateGame {
  count: Int
}

export interface AggregateMessage {
  count: Int
}

export interface AggregateParty {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Chat extends Node {
  id: ID_Output
  party: Party
  members?: Array<User> | null
  messages?: Array<Message> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ChatConnection {
  pageInfo: PageInfo
  edges: Array<ChatEdge | null>
  aggregate: AggregateChat
}

/*
 * An edge in a connection.

 */
export interface ChatEdge {
  node: Chat
  cursor: String
}

export interface ChatPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ChatSubscriptionPayload {
  mutation: MutationType
  node?: Chat | null
  updatedFields?: Array<String> | null
  previousValues?: ChatPreviousValues | null
}

export interface Game extends Node {
  id: ID_Output
  title: String
  cover?: String | null
  type: GameType
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface GameConnection {
  pageInfo: PageInfo
  edges: Array<GameEdge | null>
  aggregate: AggregateGame
}

/*
 * An edge in a connection.

 */
export interface GameEdge {
  node: Game
  cursor: String
}

export interface GamePreviousValues {
  id: ID_Output
  title: String
  cover?: String | null
  type: GameType
  createdAt: DateTime
  updatedAt: DateTime
}

export interface GameSubscriptionPayload {
  mutation: MutationType
  node?: Game | null
  updatedFields?: Array<String> | null
  previousValues?: GamePreviousValues | null
}

export interface Message extends Node {
  id: ID_Output
  author: User
  chat: Chat
  content: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: Array<MessageEdge | null>
  aggregate: AggregateMessage
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  content: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message | null
  updatedFields?: Array<String> | null
  previousValues?: MessagePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Party extends Node {
  id: ID_Output
  title: String
  description: String
  author: User
  createdAt: DateTime
  updatedAt: DateTime
  games?: Array<Game> | null
  isPublic: Boolean
}

/*
 * A connection to a list of items.

 */
export interface PartyConnection {
  pageInfo: PageInfo
  edges: Array<PartyEdge | null>
  aggregate: AggregateParty
}

/*
 * An edge in a connection.

 */
export interface PartyEdge {
  node: Party
  cursor: String
}

export interface PartyPreviousValues {
  id: ID_Output
  title: String
  description: String
  createdAt: DateTime
  updatedAt: DateTime
  isPublic: Boolean
}

export interface PartySubscriptionPayload {
  mutation: MutationType
  node?: Party | null
  updatedFields?: Array<String> | null
  previousValues?: PartyPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  username: String
  email: String
  password: String
  parties?: Array<Party> | null
  friends?: Array<User> | null
  chats?: Array<Chat> | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  email: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string