import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    chats: <T = Array<Chat | null>>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    game: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    games: <T = Array<Game | null>>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    gamesConnection: <T = GameConnection>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    party: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    parties: <T = Array<Party | null>>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partiesConnection: <T = PartyConnection>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGame: <T = Game>(args: { data: GameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGame: <T = Game | null>(args: { data: GameUpdateInput, where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyGames: <T = BatchPayload>(args: { data: GameUpdateManyMutationInput, where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGame: <T = Game>(args: { where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGame: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyGames: <T = BatchPayload>(args: { where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createParty: <T = Party>(args: { data: PartyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateParty: <T = Party | null>(args: { data: PartyUpdateInput, where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyParties: <T = BatchPayload>(args: { data: PartyUpdateManyMutationInput, where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertParty: <T = Party>(args: { where: PartyWhereUniqueInput, create: PartyCreateInput, update: PartyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteParty: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyParties: <T = BatchPayload>(args: { where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    game: <T = GameSubscriptionPayload | null>(args: { where?: GameSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    party: <T = PartySubscriptionPayload | null>(args: { where?: PartySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Chat: (where?: ChatWhereInput) => Promise<boolean>
  Game: (where?: GameWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Party: (where?: PartyWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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

type AggregateLocation {
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
  count: Long!
}

type Chat {
  id: ID!
  party: Party!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ChatConnection {
  pageInfo: PageInfo!
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  id: ID
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
  id: ID
  party: PartyCreateOneInput!
  messages: MessageCreateManyWithoutChatInput
}

input ChatCreateWithoutMessagesInput {
  id: ID
  party: PartyCreateOneInput!
  members: UserCreateManyWithoutChatsInput
}

type ChatEdge {
  node: Chat!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChatScalarWhereInput!]
  OR: [ChatScalarWhereInput!]
  NOT: [ChatScalarWhereInput!]
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
  AND: [ChatSubscriptionWhereInput!]
  OR: [ChatSubscriptionWhereInput!]
  NOT: [ChatSubscriptionWhereInput!]
}

input ChatUpdateInput {
  party: PartyUpdateOneRequiredInput
  members: UserUpdateManyWithoutChatsInput
  messages: MessageUpdateManyWithoutChatInput
}

input ChatUpdateManyWithoutMembersInput {
  create: [ChatCreateWithoutMembersInput!]
  delete: [ChatWhereUniqueInput!]
  connect: [ChatWhereUniqueInput!]
  set: [ChatWhereUniqueInput!]
  disconnect: [ChatWhereUniqueInput!]
  update: [ChatUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChatUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ChatScalarWhereInput!]
}

input ChatUpdateOneRequiredWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
  connect: ChatWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  party: PartyWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChatWhereInput!]
  OR: [ChatWhereInput!]
  NOT: [ChatWhereInput!]
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

type Game {
  id: ID!
  title: String!
  cover: String
  type: GameType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  id: ID
  title: String!
  cover: String
  type: GameType!
}

input GameCreateManyInput {
  create: [GameCreateInput!]
  connect: [GameWhereUniqueInput!]
}

type GameEdge {
  node: Game!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cover: String
  cover_not: String
  cover_in: [String!]
  cover_not_in: [String!]
  cover_lt: String
  cover_lte: String
  cover_gt: String
  cover_gte: String
  cover_contains: String
  cover_not_contains: String
  cover_starts_with: String
  cover_not_starts_with: String
  cover_ends_with: String
  cover_not_ends_with: String
  type: GameType
  type_not: GameType
  type_in: [GameType!]
  type_not_in: [GameType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
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
  update: [GameUpdateWithWhereUniqueNestedInput!]
  upsert: [GameUpsertWithWhereUniqueNestedInput!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  set: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cover: String
  cover_not: String
  cover_in: [String!]
  cover_not_in: [String!]
  cover_lt: String
  cover_lte: String
  cover_gt: String
  cover_gte: String
  cover_contains: String
  cover_not_contains: String
  cover_starts_with: String
  cover_not_starts_with: String
  cover_ends_with: String
  cover_not_ends_with: String
  type: GameType
  type_not: GameType
  type_in: [GameType!]
  type_not_in: [GameType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
  title: String
}

type Location {
  id: ID!
  placeName: String!
  latitude: Float!
  longitude: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  placeName: String!
  latitude: Float!
  longitude: Float!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  placeName_ASC
  placeName_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  placeName: String!
  latitude: Float!
  longitude: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  placeName: String
  latitude: Float
  longitude: Float
}

input LocationUpdateInput {
  placeName: String
  latitude: Float
  longitude: Float
}

input LocationUpdateManyMutationInput {
  placeName: String
  latitude: Float
  longitude: Float
}

input LocationUpdateOneRequiredInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  placeName: String
  placeName_not: String
  placeName_in: [String!]
  placeName_not_in: [String!]
  placeName_lt: String
  placeName_lte: String
  placeName_gt: String
  placeName_gte: String
  placeName_contains: String
  placeName_not_contains: String
  placeName_starts_with: String
  placeName_not_starts_with: String
  placeName_ends_with: String
  placeName_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  author: User!
  chat: Chat!
  content: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  author: UserCreateOneWithoutUnreadMessagesInput!
  chat: ChatCreateOneWithoutMessagesInput!
  content: String!
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  id: ID
  chat: ChatCreateOneWithoutMessagesInput!
  content: String!
}

input MessageCreateWithoutChatInput {
  id: ID
  author: UserCreateOneWithoutUnreadMessagesInput!
  content: String!
}

type MessageEdge {
  node: Message!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  author: UserUpdateOneRequiredWithoutUnreadMessagesInput
  chat: ChatUpdateOneRequiredWithoutMessagesInput
  content: String
}

input MessageUpdateManyDataInput {
  content: String
}

input MessageUpdateManyMutationInput {
  content: String
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutAuthorDataInput {
  chat: ChatUpdateOneRequiredWithoutMessagesInput
  content: String
}

input MessageUpdateWithoutChatDataInput {
  author: UserUpdateOneRequiredWithoutUnreadMessagesInput
  content: String
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChatDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChatDataInput!
  create: MessageCreateWithoutChatInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  chat: ChatWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChat(data: ChatCreateInput!): Chat!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createParty(data: PartyCreateInput!): Party!
  updateParty(data: PartyUpdateInput!, where: PartyWhereUniqueInput!): Party
  updateManyParties(data: PartyUpdateManyMutationInput!, where: PartyWhereInput): BatchPayload!
  upsertParty(where: PartyWhereUniqueInput!, create: PartyCreateInput!, update: PartyUpdateInput!): Party!
  deleteParty(where: PartyWhereUniqueInput!): Party
  deleteManyParties(where: PartyWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Party {
  id: ID!
  title: String!
  description: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
  location: Location!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  colorTint: String!
  isPublic: Boolean
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  start: DateTime!
  end: DateTime!
}

type PartyConnection {
  pageInfo: PageInfo!
  edges: [PartyEdge]!
  aggregate: AggregateParty!
}

input PartyCreateInput {
  id: ID
  title: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  members: UserCreateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
}

input PartyCreateManyWithoutMembersInput {
  create: [PartyCreateWithoutMembersInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateOneInput {
  create: PartyCreateInput
  connect: PartyWhereUniqueInput
}

input PartyCreateWithoutMembersInput {
  id: ID
  title: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  start: DateTime
  end: DateTime
}

type PartyEdge {
  node: Party!
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
  colorTint_ASC
  colorTint_DESC
  isPublic_ASC
  isPublic_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
}

type PartyPreviousValues {
  id: ID!
  title: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  colorTint: String!
  isPublic: Boolean
  start: DateTime!
  end: DateTime!
}

input PartyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  colorTint: String
  colorTint_not: String
  colorTint_in: [String!]
  colorTint_not_in: [String!]
  colorTint_lt: String
  colorTint_lte: String
  colorTint_gt: String
  colorTint_gte: String
  colorTint_contains: String
  colorTint_not_contains: String
  colorTint_starts_with: String
  colorTint_not_starts_with: String
  colorTint_ends_with: String
  colorTint_not_ends_with: String
  isPublic: Boolean
  isPublic_not: Boolean
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [PartyScalarWhereInput!]
  OR: [PartyScalarWhereInput!]
  NOT: [PartyScalarWhereInput!]
}

type PartySubscriptionPayload {
  mutation: MutationType!
  node: Party
  updatedFields: [String!]
  previousValues: PartyPreviousValues
}

input PartySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyWhereInput
  AND: [PartySubscriptionWhereInput!]
  OR: [PartySubscriptionWhereInput!]
  NOT: [PartySubscriptionWhereInput!]
}

input PartyUpdateDataInput {
  title: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
}

input PartyUpdateInput {
  title: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
}

input PartyUpdateManyDataInput {
  title: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
}

input PartyUpdateManyMutationInput {
  title: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
}

input PartyUpdateManyWithoutMembersInput {
  create: [PartyCreateWithoutMembersInput!]
  delete: [PartyWhereUniqueInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [PartyScalarWhereInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
}

input PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput!
  data: PartyUpdateManyDataInput!
}

input PartyUpdateOneRequiredInput {
  create: PartyCreateInput
  update: PartyUpdateDataInput
  upsert: PartyUpsertNestedInput
  connect: PartyWhereUniqueInput
}

input PartyUpdateWithoutMembersDataInput {
  title: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
}

input PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutMembersDataInput!
}

input PartyUpsertNestedInput {
  update: PartyUpdateDataInput!
  create: PartyCreateInput!
}

input PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutMembersDataInput!
  create: PartyCreateWithoutMembersInput!
}

input PartyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  location: LocationWhereInput
  games_every: GameWhereInput
  games_some: GameWhereInput
  games_none: GameWhereInput
  colorTint: String
  colorTint_not: String
  colorTint_in: [String!]
  colorTint_not_in: [String!]
  colorTint_lt: String
  colorTint_lte: String
  colorTint_gt: String
  colorTint_gte: String
  colorTint_contains: String
  colorTint_not_contains: String
  colorTint_starts_with: String
  colorTint_not_starts_with: String
  colorTint_ends_with: String
  colorTint_not_ends_with: String
  isPublic: Boolean
  isPublic_not: Boolean
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [PartyWhereInput!]
  OR: [PartyWhereInput!]
  NOT: [PartyWhereInput!]
}

input PartyWhereUniqueInput {
  id: ID
}

type Query {
  chat(where: ChatWhereUniqueInput!): Chat
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  party(where: PartyWhereUniqueInput!): Party
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum SocialMediaType {
  FACEBOOK
  SPOTIFY
  TWITTER
}

type Subscription {
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  pendingInvitations(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  unreadMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat!]
  createdAt: DateTime!
  updatedAt: DateTime!
  lastOnline: DateTime
  deleted: Boolean!
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingInvitations: UserCreateManyWithoutPendingInvitationsInput
  unreadMessages: MessageCreateManyWithoutAuthorInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserCreateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutPartiesInput {
  create: [UserCreateWithoutPartiesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutPendingInvitationsInput {
  create: [UserCreateWithoutPendingInvitationsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUnreadMessagesInput {
  create: UserCreateWithoutUnreadMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingInvitations: UserCreateManyWithoutPendingInvitationsInput
  unreadMessages: MessageCreateManyWithoutAuthorInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserCreateWithoutFriendsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  pendingInvitations: UserCreateManyWithoutPendingInvitationsInput
  unreadMessages: MessageCreateManyWithoutAuthorInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserCreateWithoutPartiesInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  friends: UserCreateManyWithoutFriendsInput
  pendingInvitations: UserCreateManyWithoutPendingInvitationsInput
  unreadMessages: MessageCreateManyWithoutAuthorInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserCreateWithoutPendingInvitationsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  unreadMessages: MessageCreateManyWithoutAuthorInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserCreateWithoutUnreadMessagesInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingInvitations: UserCreateManyWithoutPendingInvitationsInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  lastOnline_ASC
  lastOnline_DESC
  deleted_ASC
  deleted_DESC
  provider_ASC
  provider_DESC
  avatar_ASC
  avatar_DESC
  thirdPartyId_ASC
  thirdPartyId_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  lastOnline: DateTime
  deleted: Boolean!
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lastOnline: DateTime
  lastOnline_not: DateTime
  lastOnline_in: [DateTime!]
  lastOnline_not_in: [DateTime!]
  lastOnline_lt: DateTime
  lastOnline_lte: DateTime
  lastOnline_gt: DateTime
  lastOnline_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  provider: SocialMediaType
  provider_not: SocialMediaType
  provider_in: [SocialMediaType!]
  provider_not_in: [SocialMediaType!]
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  thirdPartyId: String
  thirdPartyId_not: String
  thirdPartyId_in: [String!]
  thirdPartyId_not_in: [String!]
  thirdPartyId_lt: String
  thirdPartyId_lte: String
  thirdPartyId_gt: String
  thirdPartyId_gte: String
  thirdPartyId_contains: String
  thirdPartyId_not_contains: String
  thirdPartyId_starts_with: String
  thirdPartyId_not_starts_with: String
  thirdPartyId_ends_with: String
  thirdPartyId_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateManyDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateManyMutationInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChatsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChatsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriendsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriendsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutPartiesInput {
  create: [UserCreateWithoutPartiesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutPartiesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutPartiesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutPendingInvitationsInput {
  create: [UserCreateWithoutPendingInvitationsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutPendingInvitationsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutPendingInvitationsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUnreadMessagesInput {
  create: UserCreateWithoutUnreadMessagesInput
  update: UserUpdateWithoutUnreadMessagesDataInput
  upsert: UserUpsertWithoutUnreadMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChatsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateWithoutFriendsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateWithoutPartiesDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  friends: UserUpdateManyWithoutFriendsInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateWithoutPendingInvitationsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  unreadMessages: MessageUpdateManyWithoutAuthorInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateWithoutUnreadMessagesDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingInvitations: UserUpdateManyWithoutPendingInvitationsInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
}

input UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChatsDataInput!
}

input UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriendsDataInput!
}

input UserUpdateWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPartiesDataInput!
}

input UserUpdateWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPendingInvitationsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutUnreadMessagesInput {
  update: UserUpdateWithoutUnreadMessagesDataInput!
  create: UserCreateWithoutUnreadMessagesInput!
}

input UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChatsDataInput!
  create: UserCreateWithoutChatsInput!
}

input UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPartiesDataInput!
  create: UserCreateWithoutPartiesInput!
}

input UserUpsertWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPendingInvitationsDataInput!
  create: UserCreateWithoutPendingInvitationsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  parties_every: PartyWhereInput
  parties_some: PartyWhereInput
  parties_none: PartyWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  pendingInvitations_every: UserWhereInput
  pendingInvitations_some: UserWhereInput
  pendingInvitations_none: UserWhereInput
  unreadMessages_every: MessageWhereInput
  unreadMessages_some: MessageWhereInput
  unreadMessages_none: MessageWhereInput
  chats_every: ChatWhereInput
  chats_some: ChatWhereInput
  chats_none: ChatWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lastOnline: DateTime
  lastOnline_not: DateTime
  lastOnline_in: [DateTime!]
  lastOnline_not_in: [DateTime!]
  lastOnline_lt: DateTime
  lastOnline_lte: DateTime
  lastOnline_gt: DateTime
  lastOnline_gte: DateTime
  deleted: Boolean
  deleted_not: Boolean
  provider: SocialMediaType
  provider_not: SocialMediaType
  provider_in: [SocialMediaType!]
  provider_not_in: [SocialMediaType!]
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  thirdPartyId: String
  thirdPartyId_not: String
  thirdPartyId_in: [String!]
  thirdPartyId_not_in: [String!]
  thirdPartyId_lt: String
  thirdPartyId_lte: String
  thirdPartyId_gt: String
  thirdPartyId_gte: String
  thirdPartyId_contains: String
  thirdPartyId_not_contains: String
  thirdPartyId_starts_with: String
  thirdPartyId_not_starts_with: String
  thirdPartyId_ends_with: String
  thirdPartyId_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
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

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'placeName_ASC' |
  'placeName_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'longitude_ASC' |
  'longitude_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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
  'colorTint_ASC' |
  'colorTint_DESC' |
  'isPublic_ASC' |
  'isPublic_DESC' |
  'start_ASC' |
  'start_DESC' |
  'end_ASC' |
  'end_DESC'

export type SocialMediaType =   'FACEBOOK' |
  'SPOTIFY' |
  'TWITTER'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'lastOnline_ASC' |
  'lastOnline_DESC' |
  'deleted_ASC' |
  'deleted_DESC' |
  'provider_ASC' |
  'provider_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'thirdPartyId_ASC' |
  'thirdPartyId_DESC'

export interface ChatCreateInput {
  id?: ID_Input | null
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
  id?: ID_Input | null
  party: PartyCreateOneInput
  messages?: MessageCreateManyWithoutChatInput | null
}

export interface ChatCreateWithoutMessagesInput {
  id?: ID_Input | null
  party: PartyCreateOneInput
  members?: UserCreateManyWithoutChatsInput | null
}

export interface ChatScalarWhereInput {
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
  AND?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  OR?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
  NOT?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
}

export interface ChatSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ChatWhereInput | null
  AND?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
  OR?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
  NOT?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null
}

export interface ChatUpdateInput {
  party?: PartyUpdateOneRequiredInput | null
  members?: UserUpdateManyWithoutChatsInput | null
  messages?: MessageUpdateManyWithoutChatInput | null
}

export interface ChatUpdateManyWithoutMembersInput {
  create?: ChatCreateWithoutMembersInput[] | ChatCreateWithoutMembersInput | null
  delete?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  connect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  set?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  disconnect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null
  update?: ChatUpdateWithWhereUniqueWithoutMembersInput[] | ChatUpdateWithWhereUniqueWithoutMembersInput | null
  upsert?: ChatUpsertWithWhereUniqueWithoutMembersInput[] | ChatUpsertWithWhereUniqueWithoutMembersInput | null
  deleteMany?: ChatScalarWhereInput[] | ChatScalarWhereInput | null
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput | null
  update?: ChatUpdateWithoutMessagesDataInput | null
  upsert?: ChatUpsertWithoutMessagesInput | null
  connect?: ChatWhereUniqueInput | null
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
  party?: PartyWhereInput | null
  members_every?: UserWhereInput | null
  members_some?: UserWhereInput | null
  members_none?: UserWhereInput | null
  messages_every?: MessageWhereInput | null
  messages_some?: MessageWhereInput | null
  messages_none?: MessageWhereInput | null
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
  AND?: ChatWhereInput[] | ChatWhereInput | null
  OR?: ChatWhereInput[] | ChatWhereInput | null
  NOT?: ChatWhereInput[] | ChatWhereInput | null
}

export interface ChatWhereUniqueInput {
  id?: ID_Input | null
}

export interface GameCreateInput {
  id?: ID_Input | null
  title: String
  cover?: String | null
  type: GameType
}

export interface GameCreateManyInput {
  create?: GameCreateInput[] | GameCreateInput | null
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
}

export interface GameScalarWhereInput {
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
  AND?: GameScalarWhereInput[] | GameScalarWhereInput | null
  OR?: GameScalarWhereInput[] | GameScalarWhereInput | null
  NOT?: GameScalarWhereInput[] | GameScalarWhereInput | null
}

export interface GameSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: GameWhereInput | null
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null
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
  update?: GameUpdateWithWhereUniqueNestedInput[] | GameUpdateWithWhereUniqueNestedInput | null
  upsert?: GameUpsertWithWhereUniqueNestedInput[] | GameUpsertWithWhereUniqueNestedInput | null
  delete?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  set?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  disconnect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null
  deleteMany?: GameScalarWhereInput[] | GameScalarWhereInput | null
  updateMany?: GameUpdateManyWithWhereNestedInput[] | GameUpdateManyWithWhereNestedInput | null
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
  AND?: GameWhereInput[] | GameWhereInput | null
  OR?: GameWhereInput[] | GameWhereInput | null
  NOT?: GameWhereInput[] | GameWhereInput | null
}

export interface GameWhereUniqueInput {
  id?: ID_Input | null
  title?: String | null
}

export interface LocationCreateInput {
  id?: ID_Input | null
  placeName: String
  latitude: Float
  longitude: Float
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LocationWhereInput | null
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
}

export interface LocationUpdateDataInput {
  placeName?: String | null
  latitude?: Float | null
  longitude?: Float | null
}

export interface LocationUpdateInput {
  placeName?: String | null
  latitude?: Float | null
  longitude?: Float | null
}

export interface LocationUpdateManyMutationInput {
  placeName?: String | null
  latitude?: Float | null
  longitude?: Float | null
}

export interface LocationUpdateOneRequiredInput {
  create?: LocationCreateInput | null
  update?: LocationUpdateDataInput | null
  upsert?: LocationUpsertNestedInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationWhereInput {
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
  placeName?: String | null
  placeName_not?: String | null
  placeName_in?: String[] | String | null
  placeName_not_in?: String[] | String | null
  placeName_lt?: String | null
  placeName_lte?: String | null
  placeName_gt?: String | null
  placeName_gte?: String | null
  placeName_contains?: String | null
  placeName_not_contains?: String | null
  placeName_starts_with?: String | null
  placeName_not_starts_with?: String | null
  placeName_ends_with?: String | null
  placeName_not_ends_with?: String | null
  latitude?: Float | null
  latitude_not?: Float | null
  latitude_in?: Float[] | Float | null
  latitude_not_in?: Float[] | Float | null
  latitude_lt?: Float | null
  latitude_lte?: Float | null
  latitude_gt?: Float | null
  latitude_gte?: Float | null
  longitude?: Float | null
  longitude_not?: Float | null
  longitude_in?: Float[] | Float | null
  longitude_not_in?: Float[] | Float | null
  longitude_lt?: Float | null
  longitude_lte?: Float | null
  longitude_gt?: Float | null
  longitude_gte?: Float | null
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
  AND?: LocationWhereInput[] | LocationWhereInput | null
  OR?: LocationWhereInput[] | LocationWhereInput | null
  NOT?: LocationWhereInput[] | LocationWhereInput | null
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface MessageCreateInput {
  id?: ID_Input | null
  author: UserCreateOneWithoutUnreadMessagesInput
  chat: ChatCreateOneWithoutMessagesInput
  content: String
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateWithoutAuthorInput {
  id?: ID_Input | null
  chat: ChatCreateOneWithoutMessagesInput
  content: String
}

export interface MessageCreateWithoutChatInput {
  id?: ID_Input | null
  author: UserCreateOneWithoutUnreadMessagesInput
  content: String
}

export interface MessageScalarWhereInput {
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
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MessageWhereInput | null
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null
}

export interface MessageUpdateInput {
  author?: UserUpdateOneRequiredWithoutUnreadMessagesInput | null
  chat?: ChatUpdateOneRequiredWithoutMessagesInput | null
  content?: String | null
}

export interface MessageUpdateManyDataInput {
  content?: String | null
}

export interface MessageUpdateManyMutationInput {
  content?: String | null
}

export interface MessageUpdateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutAuthorInput[] | MessageUpdateWithWhereUniqueWithoutAuthorInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutAuthorInput[] | MessageUpsertWithWhereUniqueWithoutAuthorInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
}

export interface MessageUpdateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[] | MessageUpdateWithWhereUniqueWithoutChatInput | null
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[] | MessageUpsertWithWhereUniqueWithoutChatInput | null
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput
  data: MessageUpdateManyDataInput
}

export interface MessageUpdateWithoutAuthorDataInput {
  chat?: ChatUpdateOneRequiredWithoutMessagesInput | null
  content?: String | null
}

export interface MessageUpdateWithoutChatDataInput {
  author?: UserUpdateOneRequiredWithoutUnreadMessagesInput | null
  content?: String | null
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutAuthorDataInput
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutChatDataInput
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutAuthorDataInput
  create: MessageCreateWithoutAuthorInput
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutChatDataInput
  create: MessageCreateWithoutChatInput
}

export interface MessageWhereInput {
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
  author?: UserWhereInput | null
  chat?: ChatWhereInput | null
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
  AND?: MessageWhereInput[] | MessageWhereInput | null
  OR?: MessageWhereInput[] | MessageWhereInput | null
  NOT?: MessageWhereInput[] | MessageWhereInput | null
}

export interface MessageWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartyCreateInput {
  id?: ID_Input | null
  title: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  members?: UserCreateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyCreateManyWithoutMembersInput {
  create?: PartyCreateWithoutMembersInput[] | PartyCreateWithoutMembersInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateOneInput {
  create?: PartyCreateInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateWithoutMembersInput {
  id?: ID_Input | null
  title: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyScalarWhereInput {
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
  colorTint?: String | null
  colorTint_not?: String | null
  colorTint_in?: String[] | String | null
  colorTint_not_in?: String[] | String | null
  colorTint_lt?: String | null
  colorTint_lte?: String | null
  colorTint_gt?: String | null
  colorTint_gte?: String | null
  colorTint_contains?: String | null
  colorTint_not_contains?: String | null
  colorTint_starts_with?: String | null
  colorTint_not_starts_with?: String | null
  colorTint_ends_with?: String | null
  colorTint_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  start?: DateTime | null
  start_not?: DateTime | null
  start_in?: DateTime[] | DateTime | null
  start_not_in?: DateTime[] | DateTime | null
  start_lt?: DateTime | null
  start_lte?: DateTime | null
  start_gt?: DateTime | null
  start_gte?: DateTime | null
  end?: DateTime | null
  end_not?: DateTime | null
  end_in?: DateTime[] | DateTime | null
  end_not_in?: DateTime[] | DateTime | null
  end_lt?: DateTime | null
  end_lte?: DateTime | null
  end_gt?: DateTime | null
  end_gte?: DateTime | null
  AND?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  OR?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  NOT?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
}

export interface PartySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyWhereInput | null
  AND?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  OR?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
  NOT?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null
}

export interface PartyUpdateDataInput {
  title?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyUpdateInput {
  title?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyUpdateManyDataInput {
  title?: String | null
  description?: String | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyUpdateManyMutationInput {
  title?: String | null
  description?: String | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyUpdateManyWithoutMembersInput {
  create?: PartyCreateWithoutMembersInput[] | PartyCreateWithoutMembersInput | null
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  update?: PartyUpdateWithWhereUniqueWithoutMembersInput[] | PartyUpdateWithWhereUniqueWithoutMembersInput | null
  upsert?: PartyUpsertWithWhereUniqueWithoutMembersInput[] | PartyUpsertWithWhereUniqueWithoutMembersInput | null
  deleteMany?: PartyScalarWhereInput[] | PartyScalarWhereInput | null
  updateMany?: PartyUpdateManyWithWhereNestedInput[] | PartyUpdateManyWithWhereNestedInput | null
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput
  data: PartyUpdateManyDataInput
}

export interface PartyUpdateOneRequiredInput {
  create?: PartyCreateInput | null
  update?: PartyUpdateDataInput | null
  upsert?: PartyUpsertNestedInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyUpdateWithoutMembersDataInput {
  title?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
}

export interface PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutMembersDataInput
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput
  create: PartyCreateInput
}

export interface PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutMembersDataInput
  create: PartyCreateWithoutMembersInput
}

export interface PartyWhereInput {
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
  author?: UserWhereInput | null
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
  location?: LocationWhereInput | null
  games_every?: GameWhereInput | null
  games_some?: GameWhereInput | null
  games_none?: GameWhereInput | null
  colorTint?: String | null
  colorTint_not?: String | null
  colorTint_in?: String[] | String | null
  colorTint_not_in?: String[] | String | null
  colorTint_lt?: String | null
  colorTint_lte?: String | null
  colorTint_gt?: String | null
  colorTint_gte?: String | null
  colorTint_contains?: String | null
  colorTint_not_contains?: String | null
  colorTint_starts_with?: String | null
  colorTint_not_starts_with?: String | null
  colorTint_ends_with?: String | null
  colorTint_not_ends_with?: String | null
  isPublic?: Boolean | null
  isPublic_not?: Boolean | null
  members_every?: UserWhereInput | null
  members_some?: UserWhereInput | null
  members_none?: UserWhereInput | null
  start?: DateTime | null
  start_not?: DateTime | null
  start_in?: DateTime[] | DateTime | null
  start_not_in?: DateTime[] | DateTime | null
  start_lt?: DateTime | null
  start_lte?: DateTime | null
  start_gt?: DateTime | null
  start_gte?: DateTime | null
  end?: DateTime | null
  end_not?: DateTime | null
  end_in?: DateTime[] | DateTime | null
  end_not_in?: DateTime[] | DateTime | null
  end_lt?: DateTime | null
  end_lte?: DateTime | null
  end_gt?: DateTime | null
  end_gte?: DateTime | null
  AND?: PartyWhereInput[] | PartyWhereInput | null
  OR?: PartyWhereInput[] | PartyWhereInput | null
  NOT?: PartyWhereInput[] | PartyWhereInput | null
}

export interface PartyWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingInvitations?: UserCreateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageCreateManyWithoutAuthorInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserCreateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutFriendsInput {
  create?: UserCreateWithoutFriendsInput[] | UserCreateWithoutFriendsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput[] | UserCreateWithoutPartiesInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutPendingInvitationsInput {
  create?: UserCreateWithoutPendingInvitationsInput[] | UserCreateWithoutPendingInvitationsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutUnreadMessagesInput {
  create?: UserCreateWithoutUnreadMessagesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutChatsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingInvitations?: UserCreateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageCreateManyWithoutAuthorInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserCreateWithoutFriendsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  pendingInvitations?: UserCreateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageCreateManyWithoutAuthorInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserCreateWithoutPartiesInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingInvitations?: UserCreateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageCreateManyWithoutAuthorInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserCreateWithoutPendingInvitationsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  unreadMessages?: MessageCreateManyWithoutAuthorInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserCreateWithoutUnreadMessagesInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingInvitations?: UserCreateManyWithoutPendingInvitationsInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserScalarWhereInput {
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
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
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
  lastOnline?: DateTime | null
  lastOnline_not?: DateTime | null
  lastOnline_in?: DateTime[] | DateTime | null
  lastOnline_not_in?: DateTime[] | DateTime | null
  lastOnline_lt?: DateTime | null
  lastOnline_lte?: DateTime | null
  lastOnline_gt?: DateTime | null
  lastOnline_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  provider?: SocialMediaType | null
  provider_not?: SocialMediaType | null
  provider_in?: SocialMediaType[] | SocialMediaType | null
  provider_not_in?: SocialMediaType[] | SocialMediaType | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  thirdPartyId?: String | null
  thirdPartyId_not?: String | null
  thirdPartyId_in?: String[] | String | null
  thirdPartyId_not_in?: String[] | String | null
  thirdPartyId_lt?: String | null
  thirdPartyId_lte?: String | null
  thirdPartyId_gt?: String | null
  thirdPartyId_gte?: String | null
  thirdPartyId_contains?: String | null
  thirdPartyId_not_contains?: String | null
  thirdPartyId_starts_with?: String | null
  thirdPartyId_not_starts_with?: String | null
  thirdPartyId_ends_with?: String | null
  thirdPartyId_not_ends_with?: String | null
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
}

export interface UserUpdateDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateManyDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutChatsInput[] | UserUpdateWithWhereUniqueWithoutChatsInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutChatsInput[] | UserUpsertWithWhereUniqueWithoutChatsInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutFriendsInput {
  create?: UserCreateWithoutFriendsInput[] | UserCreateWithoutFriendsInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutFriendsInput[] | UserUpdateWithWhereUniqueWithoutFriendsInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput[] | UserUpsertWithWhereUniqueWithoutFriendsInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput[] | UserCreateWithoutPartiesInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutPartiesInput[] | UserUpdateWithWhereUniqueWithoutPartiesInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutPartiesInput[] | UserUpsertWithWhereUniqueWithoutPartiesInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutPendingInvitationsInput {
  create?: UserCreateWithoutPendingInvitationsInput[] | UserCreateWithoutPendingInvitationsInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutPendingInvitationsInput[] | UserUpdateWithWhereUniqueWithoutPendingInvitationsInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutPendingInvitationsInput[] | UserUpsertWithWhereUniqueWithoutPendingInvitationsInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutUnreadMessagesInput {
  create?: UserCreateWithoutUnreadMessagesInput | null
  update?: UserUpdateWithoutUnreadMessagesDataInput | null
  upsert?: UserUpsertWithoutUnreadMessagesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithoutChatsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateWithoutFriendsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateWithoutPartiesDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateWithoutPendingInvitationsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  unreadMessages?: MessageUpdateManyWithoutAuthorInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateWithoutUnreadMessagesDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingInvitations?: UserUpdateManyWithoutPendingInvitationsInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutChatsDataInput
}

export interface UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFriendsDataInput
}

export interface UserUpdateWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPartiesDataInput
}

export interface UserUpdateWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPendingInvitationsDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutUnreadMessagesInput {
  update: UserUpdateWithoutUnreadMessagesDataInput
  create: UserCreateWithoutUnreadMessagesInput
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutChatsDataInput
  create: UserCreateWithoutChatsInput
}

export interface UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFriendsDataInput
  create: UserCreateWithoutFriendsInput
}

export interface UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPartiesDataInput
  create: UserCreateWithoutPartiesInput
}

export interface UserUpsertWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPendingInvitationsDataInput
  create: UserCreateWithoutPendingInvitationsInput
}

export interface UserWhereInput {
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
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
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
  parties_every?: PartyWhereInput | null
  parties_some?: PartyWhereInput | null
  parties_none?: PartyWhereInput | null
  friends_every?: UserWhereInput | null
  friends_some?: UserWhereInput | null
  friends_none?: UserWhereInput | null
  pendingInvitations_every?: UserWhereInput | null
  pendingInvitations_some?: UserWhereInput | null
  pendingInvitations_none?: UserWhereInput | null
  unreadMessages_every?: MessageWhereInput | null
  unreadMessages_some?: MessageWhereInput | null
  unreadMessages_none?: MessageWhereInput | null
  chats_every?: ChatWhereInput | null
  chats_some?: ChatWhereInput | null
  chats_none?: ChatWhereInput | null
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
  lastOnline?: DateTime | null
  lastOnline_not?: DateTime | null
  lastOnline_in?: DateTime[] | DateTime | null
  lastOnline_not_in?: DateTime[] | DateTime | null
  lastOnline_lt?: DateTime | null
  lastOnline_lte?: DateTime | null
  lastOnline_gt?: DateTime | null
  lastOnline_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  provider?: SocialMediaType | null
  provider_not?: SocialMediaType | null
  provider_in?: SocialMediaType[] | SocialMediaType | null
  provider_not_in?: SocialMediaType[] | SocialMediaType | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  thirdPartyId?: String | null
  thirdPartyId_not?: String | null
  thirdPartyId_in?: String[] | String | null
  thirdPartyId_not_in?: String[] | String | null
  thirdPartyId_lt?: String | null
  thirdPartyId_lte?: String | null
  thirdPartyId_gt?: String | null
  thirdPartyId_gte?: String | null
  thirdPartyId_contains?: String | null
  thirdPartyId_not_contains?: String | null
  thirdPartyId_starts_with?: String | null
  thirdPartyId_not_starts_with?: String | null
  thirdPartyId_ends_with?: String | null
  thirdPartyId_not_ends_with?: String | null
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface Node {
  id: ID_Output
}

export interface AggregateChat {
  count: Int
}

export interface AggregateGame {
  count: Int
}

export interface AggregateLocation {
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

export interface Chat {
  id: ID_Output
  party: Party
  members?: Array<User> | null
  messages?: Array<Message> | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ChatConnection {
  pageInfo: PageInfo
  edges: Array<ChatEdge | null>
  aggregate: AggregateChat
}

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

export interface Game {
  id: ID_Output
  title: String
  cover?: String | null
  type: GameType
  createdAt: DateTime
  updatedAt: DateTime
}

export interface GameConnection {
  pageInfo: PageInfo
  edges: Array<GameEdge | null>
  aggregate: AggregateGame
}

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

export interface Location {
  id: ID_Output
  placeName: String
  latitude: Float
  longitude: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LocationConnection {
  pageInfo: PageInfo
  edges: Array<LocationEdge | null>
  aggregate: AggregateLocation
}

export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  placeName: String
  latitude: Float
  longitude: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

export interface Message {
  id: ID_Output
  author: User
  chat: Chat
  content: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MessageConnection {
  pageInfo: PageInfo
  edges: Array<MessageEdge | null>
  aggregate: AggregateMessage
}

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

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Party {
  id: ID_Output
  title: String
  description: String
  author: User
  createdAt: DateTime
  updatedAt: DateTime
  location: Location
  games?: Array<Game> | null
  colorTint: String
  isPublic?: Boolean | null
  members?: Array<User> | null
  start: DateTime
  end: DateTime
}

export interface PartyConnection {
  pageInfo: PageInfo
  edges: Array<PartyEdge | null>
  aggregate: AggregateParty
}

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
  colorTint: String
  isPublic?: Boolean | null
  start: DateTime
  end: DateTime
}

export interface PartySubscriptionPayload {
  mutation: MutationType
  node?: Party | null
  updatedFields?: Array<String> | null
  previousValues?: PartyPreviousValues | null
}

export interface User {
  id: ID_Output
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: Array<Party> | null
  friends?: Array<User> | null
  pendingInvitations?: Array<User> | null
  unreadMessages?: Array<Message> | null
  chats?: Array<Chat> | null
  createdAt: DateTime
  updatedAt: DateTime
  lastOnline?: DateTime | null
  deleted: Boolean
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  firstName: String
  lastName: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  lastOnline?: DateTime | null
  deleted: Boolean
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
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
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string