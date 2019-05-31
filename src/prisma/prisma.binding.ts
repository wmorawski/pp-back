import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import { Options } from 'graphql-binding';
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding';

export interface Query {
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    partyInvitations: <T = Array<PartyInvitation | null>>(args: { where?: PartyInvitationWhereInput | null, orderBy?: PartyInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    chats: <T = Array<Chat | null>>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    playlists: <T = Array<Playlist | null>>(args: { where?: PlaylistWhereInput | null, orderBy?: PlaylistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    albums: <T = Array<Album | null>>(args: { where?: AlbumWhereInput | null, orderBy?: AlbumOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    images: <T = Array<Image | null>>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    games: <T = Array<Game | null>>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    artists: <T = Array<Artist | null>>(args: { where?: ArtistWhereInput | null, orderBy?: ArtistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    tracks: <T = Array<Track | null>>(args: { where?: TrackWhereInput | null, orderBy?: TrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    parties: <T = Array<Party | null>>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    partyInvitation: <T = PartyInvitation | null>(args: { where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    playlist: <T = Playlist | null>(args: { where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    album: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    game: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    artist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    track: <T = Track | null>(args: { where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    party: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    partyInvitationsConnection: <T = PartyInvitationConnection>(args: { where?: PartyInvitationWhereInput | null, orderBy?: PartyInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    playlistsConnection: <T = PlaylistConnection>(args: { where?: PlaylistWhereInput | null, orderBy?: PlaylistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    albumsConnection: <T = AlbumConnection>(args: { where?: AlbumWhereInput | null, orderBy?: AlbumOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    gamesConnection: <T = GameConnection>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    artistsConnection: <T = ArtistConnection>(args: { where?: ArtistWhereInput | null, orderBy?: ArtistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    tracksConnection: <T = TrackConnection>(args: { where?: TrackWhereInput | null, orderBy?: TrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    partiesConnection: <T = PartyConnection>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
  }

export interface Mutation {
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createPartyInvitation: <T = PartyInvitation>(args: { data: PartyInvitationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createPlaylist: <T = Playlist>(args: { data: PlaylistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createAlbum: <T = Album>(args: { data: AlbumCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createGame: <T = Game>(args: { data: GameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createArtist: <T = Artist>(args: { data: ArtistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createTrack: <T = Track>(args: { data: TrackCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createParty: <T = Party>(args: { data: PartyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updatePartyInvitation: <T = PartyInvitation | null>(args: { data: PartyInvitationUpdateInput, where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updatePlaylist: <T = Playlist | null>(args: { data: PlaylistUpdateInput, where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateAlbum: <T = Album | null>(args: { data: AlbumUpdateInput, where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateGame: <T = Game | null>(args: { data: GameUpdateInput, where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateArtist: <T = Artist | null>(args: { data: ArtistUpdateInput, where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateTrack: <T = Track | null>(args: { data: TrackUpdateInput, where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateParty: <T = Party | null>(args: { data: PartyUpdateInput, where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deletePartyInvitation: <T = PartyInvitation | null>(args: { where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deletePlaylist: <T = Playlist | null>(args: { where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteAlbum: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteGame: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteArtist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteTrack: <T = Track | null>(args: { where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteParty: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertPartyInvitation: <T = PartyInvitation>(args: { where: PartyInvitationWhereUniqueInput, create: PartyInvitationCreateInput, update: PartyInvitationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertPlaylist: <T = Playlist>(args: { where: PlaylistWhereUniqueInput, create: PlaylistCreateInput, update: PlaylistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertAlbum: <T = Album>(args: { where: AlbumWhereUniqueInput, create: AlbumCreateInput, update: AlbumUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertGame: <T = Game>(args: { where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertArtist: <T = Artist>(args: { where: ArtistWhereUniqueInput, create: ArtistCreateInput, update: ArtistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertTrack: <T = Track>(args: { where: TrackWhereUniqueInput, create: TrackCreateInput, update: TrackUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertParty: <T = Party>(args: { where: PartyWhereUniqueInput, create: PartyCreateInput, update: PartyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyPartyInvitations: <T = BatchPayload>(args: { data: PartyInvitationUpdateManyMutationInput, where?: PartyInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyPlaylists: <T = BatchPayload>(args: { data: PlaylistUpdateManyMutationInput, where?: PlaylistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyGames: <T = BatchPayload>(args: { data: GameUpdateManyMutationInput, where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyArtists: <T = BatchPayload>(args: { data: ArtistUpdateManyMutationInput, where?: ArtistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyTracks: <T = BatchPayload>(args: { data: TrackUpdateManyMutationInput, where?: TrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyParties: <T = BatchPayload>(args: { data: PartyUpdateManyMutationInput, where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyPartyInvitations: <T = BatchPayload>(args: { where?: PartyInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyPlaylists: <T = BatchPayload>(args: { where?: PlaylistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyAlbums: <T = BatchPayload>(args: { where?: AlbumWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyGames: <T = BatchPayload>(args: { where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyArtists: <T = BatchPayload>(args: { where?: ArtistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyTracks: <T = BatchPayload>(args: { where?: TrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyParties: <T = BatchPayload>(args: { where?: PartyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
  }

export interface Subscription {
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    partyInvitation: <T = PartyInvitationSubscriptionPayload | null>(args: { where?: PartyInvitationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    playlist: <T = PlaylistSubscriptionPayload | null>(args: { where?: PlaylistSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    album: <T = AlbumSubscriptionPayload | null>(args: { where?: AlbumSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    game: <T = GameSubscriptionPayload | null>(args: { where?: GameSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    artist: <T = ArtistSubscriptionPayload | null>(args: { where?: ArtistSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    track: <T = TrackSubscriptionPayload | null>(args: { where?: TrackSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    party: <T = PartySubscriptionPayload | null>(args: { where?: PartySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>>;
  }

export interface Exists {
  Message: (where?: MessageWhereInput) => Promise<boolean>;
  PartyInvitation: (where?: PartyInvitationWhereInput) => Promise<boolean>;
  Chat: (where?: ChatWhereInput) => Promise<boolean>;
  Playlist: (where?: PlaylistWhereInput) => Promise<boolean>;
  Album: (where?: AlbumWhereInput) => Promise<boolean>;
  Image: (where?: ImageWhereInput) => Promise<boolean>;
  Location: (where?: LocationWhereInput) => Promise<boolean>;
  Game: (where?: GameWhereInput) => Promise<boolean>;
  Artist: (where?: ArtistWhereInput) => Promise<boolean>;
  Track: (where?: TrackWhereInput) => Promise<boolean>;
  User: (where?: UserWhereInput) => Promise<boolean>;
  Party: (where?: PartyWhereInput) => Promise<boolean>;
}

export interface Prisma {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>;
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
},         infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
},                   infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export type BindingConstructor<T> = new(options: BasePrismaOptions) => T;
/**
 * Type Defs
*/

const typeDefs = `type AggregateAlbum {
  count: Int!
}

type AggregateArtist {
  count: Int!
}

type AggregateChat {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateImage {
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

type AggregatePartyInvitation {
  count: Int!
}

type AggregatePlaylist {
  count: Int!
}

type AggregateTrack {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Album implements Node {
  id: ID!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
}

"""A connection to a list of items."""
type AlbumConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlbumEdge]!
  aggregate: AggregateAlbum!
}

input AlbumCreateInput {
  id: ID
  images: ImageCreateManyInput
  artists: ArtistCreateManyInput
}

input AlbumCreateOneInput {
  create: AlbumCreateInput
  connect: AlbumWhereUniqueInput
}

"""An edge in a connection."""
type AlbumEdge {
  """The item at the end of the edge."""
  node: Album!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlbumOrderByInput {
  id_ASC
  id_DESC
}

type AlbumPreviousValues {
  id: ID!
}

type AlbumSubscriptionPayload {
  mutation: MutationType!
  node: Album
  updatedFields: [String!]
  previousValues: AlbumPreviousValues
}

input AlbumSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumSubscriptionWhereInput!]

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
  node: AlbumWhereInput
}

input AlbumUpdateDataInput {
  images: ImageUpdateManyInput
  artists: ArtistUpdateManyInput
}

input AlbumUpdateInput {
  images: ImageUpdateManyInput
  artists: ArtistUpdateManyInput
}

input AlbumUpdateOneRequiredInput {
  create: AlbumCreateInput
  connect: AlbumWhereUniqueInput
  update: AlbumUpdateDataInput
  upsert: AlbumUpsertNestedInput
}

input AlbumUpsertNestedInput {
  update: AlbumUpdateDataInput!
  create: AlbumCreateInput!
}

input AlbumWhereInput {
  """Logical AND on all given filters."""
  AND: [AlbumWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlbumWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlbumWhereInput!]
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
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
  artists_every: ArtistWhereInput
  artists_some: ArtistWhereInput
  artists_none: ArtistWhereInput
}

input AlbumWhereUniqueInput {
  id: ID
}

type Artist implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type ArtistConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  id: ID
  name: String!
}

input ArtistCreateManyInput {
  create: [ArtistCreateInput!]
  connect: [ArtistWhereUniqueInput!]
}

"""An edge in a connection."""
type ArtistEdge {
  """The item at the end of the edge."""
  node: Artist!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type ArtistPreviousValues {
  id: ID!
  name: String!
}

input ArtistScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistScalarWhereInput!]
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
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistSubscriptionWhereInput!]

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
  node: ArtistWhereInput
}

input ArtistUpdateDataInput {
  name: String
}

input ArtistUpdateInput {
  name: String
}

input ArtistUpdateManyDataInput {
  name: String
}

input ArtistUpdateManyInput {
  create: [ArtistCreateInput!]
  connect: [ArtistWhereUniqueInput!]
  set: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  delete: [ArtistWhereUniqueInput!]
  update: [ArtistUpdateWithWhereUniqueNestedInput!]
  updateMany: [ArtistUpdateManyWithWhereNestedInput!]
  deleteMany: [ArtistScalarWhereInput!]
  upsert: [ArtistUpsertWithWhereUniqueNestedInput!]
}

input ArtistUpdateManyMutationInput {
  name: String
}

input ArtistUpdateManyWithWhereNestedInput {
  where: ArtistScalarWhereInput!
  data: ArtistUpdateManyDataInput!
}

input ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput!
  data: ArtistUpdateDataInput!
}

input ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput!
  update: ArtistUpdateDataInput!
  create: ArtistCreateInput!
}

input ArtistWhereInput {
  """Logical AND on all given filters."""
  AND: [ArtistWhereInput!]

  """Logical OR on all given filters."""
  OR: [ArtistWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ArtistWhereInput!]
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
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input ArtistWhereUniqueInput {
  id: ID
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
  id: ID
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

type Image implements Node {
  id: ID!
  height: Int!
  width: Int!
  url: String!
}

"""A connection to a list of items."""
type ImageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  id: ID
  height: Int!
  width: Int!
  url: String!
}

input ImageCreateManyInput {
  create: [ImageCreateInput!]
  connect: [ImageWhereUniqueInput!]
}

"""An edge in a connection."""
type ImageEdge {
  """The item at the end of the edge."""
  node: Image!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  height_ASC
  height_DESC
  width_ASC
  width_DESC
  url_ASC
  url_DESC
}

type ImagePreviousValues {
  id: ID!
  height: Int!
  width: Int!
  url: String!
}

input ImageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageScalarWhereInput!]
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
  height: Int

  """All values that are not equal to given value."""
  height_not: Int

  """All values that are contained in given list."""
  height_in: [Int!]

  """All values that are not contained in given list."""
  height_not_in: [Int!]

  """All values less than the given value."""
  height_lt: Int

  """All values less than or equal the given value."""
  height_lte: Int

  """All values greater than the given value."""
  height_gt: Int

  """All values greater than or equal the given value."""
  height_gte: Int
  width: Int

  """All values that are not equal to given value."""
  width_not: Int

  """All values that are contained in given list."""
  width_in: [Int!]

  """All values that are not contained in given list."""
  width_not_in: [Int!]

  """All values less than the given value."""
  width_lt: Int

  """All values less than or equal the given value."""
  width_lte: Int

  """All values greater than the given value."""
  width_gt: Int

  """All values greater than or equal the given value."""
  width_gte: Int
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageSubscriptionWhereInput!]

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
  node: ImageWhereInput
}

input ImageUpdateDataInput {
  height: Int
  width: Int
  url: String
}

input ImageUpdateInput {
  height: Int
  width: Int
  url: String
}

input ImageUpdateManyDataInput {
  height: Int
  width: Int
  url: String
}

input ImageUpdateManyInput {
  create: [ImageCreateInput!]
  connect: [ImageWhereUniqueInput!]
  set: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueNestedInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
  deleteMany: [ImageScalarWhereInput!]
  upsert: [ImageUpsertWithWhereUniqueNestedInput!]
}

input ImageUpdateManyMutationInput {
  height: Int
  width: Int
  url: String
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateDataInput!
}

input ImageUpsertWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageWhereInput!]
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
  height: Int

  """All values that are not equal to given value."""
  height_not: Int

  """All values that are contained in given list."""
  height_in: [Int!]

  """All values that are not contained in given list."""
  height_not_in: [Int!]

  """All values less than the given value."""
  height_lt: Int

  """All values less than or equal the given value."""
  height_lte: Int

  """All values greater than the given value."""
  height_gt: Int

  """All values greater than or equal the given value."""
  height_gte: Int
  width: Int

  """All values that are not equal to given value."""
  width_not: Int

  """All values that are contained in given list."""
  width_in: [Int!]

  """All values that are not contained in given list."""
  width_not_in: [Int!]

  """All values less than the given value."""
  width_lt: Int

  """All values less than or equal the given value."""
  width_lte: Int

  """All values greater than the given value."""
  width_gt: Int

  """All values greater than or equal the given value."""
  width_gte: Int
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input ImageWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  placeName: String!
  latitude: Float!
  longitude: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

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
  node: LocationWhereInput
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
  connect: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
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
  placeName: String

  """All values that are not equal to given value."""
  placeName_not: String

  """All values that are contained in given list."""
  placeName_in: [String!]

  """All values that are not contained in given list."""
  placeName_not_in: [String!]

  """All values less than the given value."""
  placeName_lt: String

  """All values less than or equal the given value."""
  placeName_lte: String

  """All values greater than the given value."""
  placeName_gt: String

  """All values greater than or equal the given value."""
  placeName_gte: String

  """All values containing the given string."""
  placeName_contains: String

  """All values not containing the given string."""
  placeName_not_contains: String

  """All values starting with the given string."""
  placeName_starts_with: String

  """All values not starting with the given string."""
  placeName_not_starts_with: String

  """All values ending with the given string."""
  placeName_ends_with: String

  """All values not ending with the given string."""
  placeName_not_ends_with: String
  latitude: Float

  """All values that are not equal to given value."""
  latitude_not: Float

  """All values that are contained in given list."""
  latitude_in: [Float!]

  """All values that are not contained in given list."""
  latitude_not_in: [Float!]

  """All values less than the given value."""
  latitude_lt: Float

  """All values less than or equal the given value."""
  latitude_lte: Float

  """All values greater than the given value."""
  latitude_gt: Float

  """All values greater than or equal the given value."""
  latitude_gte: Float
  longitude: Float

  """All values that are not equal to given value."""
  longitude_not: Float

  """All values that are contained in given list."""
  longitude_in: [Float!]

  """All values that are not contained in given list."""
  longitude_not_in: [Float!]

  """All values less than the given value."""
  longitude_lt: Float

  """All values less than or equal the given value."""
  longitude_lte: Float

  """All values greater than the given value."""
  longitude_gt: Float

  """All values greater than or equal the given value."""
  longitude_gte: Float
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

input LocationWhereUniqueInput {
  id: ID
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
  id: ID
  content: String!
  author: UserCreateOneInput!
  chat: ChatCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatInput {
  id: ID
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
  createMessage(data: MessageCreateInput!): Message!
  createPartyInvitation(data: PartyInvitationCreateInput!): PartyInvitation!
  createChat(data: ChatCreateInput!): Chat!
  createPlaylist(data: PlaylistCreateInput!): Playlist!
  createAlbum(data: AlbumCreateInput!): Album!
  createImage(data: ImageCreateInput!): Image!
  createLocation(data: LocationCreateInput!): Location!
  createGame(data: GameCreateInput!): Game!
  createArtist(data: ArtistCreateInput!): Artist!
  createTrack(data: TrackCreateInput!): Track!
  createUser(data: UserCreateInput!): User!
  createParty(data: PartyCreateInput!): Party!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updatePartyInvitation(data: PartyInvitationUpdateInput!, where: PartyInvitationWhereUniqueInput!): PartyInvitation
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updatePlaylist(data: PlaylistUpdateInput!, where: PlaylistWhereUniqueInput!): Playlist
  updateAlbum(data: AlbumUpdateInput!, where: AlbumWhereUniqueInput!): Album
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateTrack(data: TrackUpdateInput!, where: TrackWhereUniqueInput!): Track
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateParty(data: PartyUpdateInput!, where: PartyWhereUniqueInput!): Party
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deletePartyInvitation(where: PartyInvitationWhereUniqueInput!): PartyInvitation
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deletePlaylist(where: PlaylistWhereUniqueInput!): Playlist
  deleteAlbum(where: AlbumWhereUniqueInput!): Album
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteTrack(where: TrackWhereUniqueInput!): Track
  deleteUser(where: UserWhereUniqueInput!): User
  deleteParty(where: PartyWhereUniqueInput!): Party
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertPartyInvitation(where: PartyInvitationWhereUniqueInput!, create: PartyInvitationCreateInput!, update: PartyInvitationUpdateInput!): PartyInvitation!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  upsertPlaylist(where: PlaylistWhereUniqueInput!, create: PlaylistCreateInput!, update: PlaylistUpdateInput!): Playlist!
  upsertAlbum(where: AlbumWhereUniqueInput!, create: AlbumCreateInput!, update: AlbumUpdateInput!): Album!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  upsertTrack(where: TrackWhereUniqueInput!, create: TrackCreateInput!, update: TrackUpdateInput!): Track!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertParty(where: PartyWhereUniqueInput!, create: PartyCreateInput!, update: PartyUpdateInput!): Party!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyPartyInvitations(data: PartyInvitationUpdateManyMutationInput!, where: PartyInvitationWhereInput): BatchPayload!
  updateManyPlaylists(data: PlaylistUpdateManyMutationInput!, where: PlaylistWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  updateManyArtists(data: ArtistUpdateManyMutationInput!, where: ArtistWhereInput): BatchPayload!
  updateManyTracks(data: TrackUpdateManyMutationInput!, where: TrackWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyParties(data: PartyUpdateManyMutationInput!, where: PartyWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyPartyInvitations(where: PartyInvitationWhereInput): BatchPayload!
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  deleteManyPlaylists(where: PlaylistWhereInput): BatchPayload!
  deleteManyAlbums(where: AlbumWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyGames(where: GameWhereInput): BatchPayload!
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  deleteManyTracks(where: TrackWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyParties(where: PartyWhereInput): BatchPayload!
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
  normalizedTitle: String!
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
  inviteSecret: String!
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
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  colorTint: String!
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  members: UserCreateManyWithoutPartiesInput
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
  normalizedTitle: String!
  description: String!
  colorTint: String!
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
}

"""An edge in a connection."""
type PartyEdge {
  """The item at the end of the edge."""
  node: Party!

  """A cursor for use in pagination."""
  cursor: String!
}

type PartyInvitation implements Node {
  id: ID!
  invitedBy: User!
  user: User!
  party: Party!
  invitedUserId: String!
  partyId: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type PartyInvitationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PartyInvitationEdge]!
  aggregate: AggregatePartyInvitation!
}

input PartyInvitationCreateInput {
  id: ID
  invitedUserId: String!
  partyId: String!
  invitedBy: UserCreateOneInput!
  user: UserCreateOneWithoutPendingPartyInvitationsInput!
  party: PartyCreateOneInput!
}

input PartyInvitationCreateManyWithoutUserInput {
  create: [PartyInvitationCreateWithoutUserInput!]
  connect: [PartyInvitationWhereUniqueInput!]
}

input PartyInvitationCreateWithoutUserInput {
  id: ID
  invitedUserId: String!
  partyId: String!
  invitedBy: UserCreateOneInput!
  party: PartyCreateOneInput!
}

"""An edge in a connection."""
type PartyInvitationEdge {
  """The item at the end of the edge."""
  node: PartyInvitation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PartyInvitationOrderByInput {
  id_ASC
  id_DESC
  invitedUserId_ASC
  invitedUserId_DESC
  partyId_ASC
  partyId_DESC
  createdAt_ASC
  createdAt_DESC
}

type PartyInvitationPreviousValues {
  id: ID!
  invitedUserId: String!
  partyId: String!
  createdAt: DateTime!
}

input PartyInvitationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PartyInvitationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyInvitationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyInvitationScalarWhereInput!]
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
  invitedUserId: String

  """All values that are not equal to given value."""
  invitedUserId_not: String

  """All values that are contained in given list."""
  invitedUserId_in: [String!]

  """All values that are not contained in given list."""
  invitedUserId_not_in: [String!]

  """All values less than the given value."""
  invitedUserId_lt: String

  """All values less than or equal the given value."""
  invitedUserId_lte: String

  """All values greater than the given value."""
  invitedUserId_gt: String

  """All values greater than or equal the given value."""
  invitedUserId_gte: String

  """All values containing the given string."""
  invitedUserId_contains: String

  """All values not containing the given string."""
  invitedUserId_not_contains: String

  """All values starting with the given string."""
  invitedUserId_starts_with: String

  """All values not starting with the given string."""
  invitedUserId_not_starts_with: String

  """All values ending with the given string."""
  invitedUserId_ends_with: String

  """All values not ending with the given string."""
  invitedUserId_not_ends_with: String
  partyId: String

  """All values that are not equal to given value."""
  partyId_not: String

  """All values that are contained in given list."""
  partyId_in: [String!]

  """All values that are not contained in given list."""
  partyId_not_in: [String!]

  """All values less than the given value."""
  partyId_lt: String

  """All values less than or equal the given value."""
  partyId_lte: String

  """All values greater than the given value."""
  partyId_gt: String

  """All values greater than or equal the given value."""
  partyId_gte: String

  """All values containing the given string."""
  partyId_contains: String

  """All values not containing the given string."""
  partyId_not_contains: String

  """All values starting with the given string."""
  partyId_starts_with: String

  """All values not starting with the given string."""
  partyId_not_starts_with: String

  """All values ending with the given string."""
  partyId_ends_with: String

  """All values not ending with the given string."""
  partyId_not_ends_with: String
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
}

type PartyInvitationSubscriptionPayload {
  mutation: MutationType!
  node: PartyInvitation
  updatedFields: [String!]
  previousValues: PartyInvitationPreviousValues
}

input PartyInvitationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PartyInvitationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyInvitationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyInvitationSubscriptionWhereInput!]

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
  node: PartyInvitationWhereInput
}

input PartyInvitationUpdateInput {
  invitedUserId: String
  partyId: String
  invitedBy: UserUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutPendingPartyInvitationsInput
  party: PartyUpdateOneRequiredInput
}

input PartyInvitationUpdateManyDataInput {
  invitedUserId: String
  partyId: String
}

input PartyInvitationUpdateManyMutationInput {
  invitedUserId: String
  partyId: String
}

input PartyInvitationUpdateManyWithoutUserInput {
  create: [PartyInvitationCreateWithoutUserInput!]
  connect: [PartyInvitationWhereUniqueInput!]
  set: [PartyInvitationWhereUniqueInput!]
  disconnect: [PartyInvitationWhereUniqueInput!]
  delete: [PartyInvitationWhereUniqueInput!]
  update: [PartyInvitationUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [PartyInvitationUpdateManyWithWhereNestedInput!]
  deleteMany: [PartyInvitationScalarWhereInput!]
  upsert: [PartyInvitationUpsertWithWhereUniqueWithoutUserInput!]
}

input PartyInvitationUpdateManyWithWhereNestedInput {
  where: PartyInvitationScalarWhereInput!
  data: PartyInvitationUpdateManyDataInput!
}

input PartyInvitationUpdateWithoutUserDataInput {
  invitedUserId: String
  partyId: String
  invitedBy: UserUpdateOneRequiredInput
  party: PartyUpdateOneRequiredInput
}

input PartyInvitationUpdateWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput!
  data: PartyInvitationUpdateWithoutUserDataInput!
}

input PartyInvitationUpsertWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput!
  update: PartyInvitationUpdateWithoutUserDataInput!
  create: PartyInvitationCreateWithoutUserInput!
}

input PartyInvitationWhereInput {
  """Logical AND on all given filters."""
  AND: [PartyInvitationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PartyInvitationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PartyInvitationWhereInput!]
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
  invitedUserId: String

  """All values that are not equal to given value."""
  invitedUserId_not: String

  """All values that are contained in given list."""
  invitedUserId_in: [String!]

  """All values that are not contained in given list."""
  invitedUserId_not_in: [String!]

  """All values less than the given value."""
  invitedUserId_lt: String

  """All values less than or equal the given value."""
  invitedUserId_lte: String

  """All values greater than the given value."""
  invitedUserId_gt: String

  """All values greater than or equal the given value."""
  invitedUserId_gte: String

  """All values containing the given string."""
  invitedUserId_contains: String

  """All values not containing the given string."""
  invitedUserId_not_contains: String

  """All values starting with the given string."""
  invitedUserId_starts_with: String

  """All values not starting with the given string."""
  invitedUserId_not_starts_with: String

  """All values ending with the given string."""
  invitedUserId_ends_with: String

  """All values not ending with the given string."""
  invitedUserId_not_ends_with: String
  partyId: String

  """All values that are not equal to given value."""
  partyId_not: String

  """All values that are contained in given list."""
  partyId_in: [String!]

  """All values that are not contained in given list."""
  partyId_not_in: [String!]

  """All values less than the given value."""
  partyId_lt: String

  """All values less than or equal the given value."""
  partyId_lte: String

  """All values greater than the given value."""
  partyId_gt: String

  """All values greater than or equal the given value."""
  partyId_gte: String

  """All values containing the given string."""
  partyId_contains: String

  """All values not containing the given string."""
  partyId_not_contains: String

  """All values starting with the given string."""
  partyId_starts_with: String

  """All values not starting with the given string."""
  partyId_not_starts_with: String

  """All values ending with the given string."""
  partyId_ends_with: String

  """All values not ending with the given string."""
  partyId_not_ends_with: String
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
  invitedBy: UserWhereInput
  user: UserWhereInput
  party: PartyWhereInput
}

input PartyInvitationWhereUniqueInput {
  id: ID
}

enum PartyOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  normalizedTitle_ASC
  normalizedTitle_DESC
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
  inviteSecret_ASC
  inviteSecret_DESC
}

type PartyPreviousValues {
  id: ID!
  title: String!
  normalizedTitle: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  colorTint: String!
  isPublic: Boolean
  start: DateTime!
  end: DateTime!
  inviteSecret: String!
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
  normalizedTitle: String

  """All values that are not equal to given value."""
  normalizedTitle_not: String

  """All values that are contained in given list."""
  normalizedTitle_in: [String!]

  """All values that are not contained in given list."""
  normalizedTitle_not_in: [String!]

  """All values less than the given value."""
  normalizedTitle_lt: String

  """All values less than or equal the given value."""
  normalizedTitle_lte: String

  """All values greater than the given value."""
  normalizedTitle_gt: String

  """All values greater than or equal the given value."""
  normalizedTitle_gte: String

  """All values containing the given string."""
  normalizedTitle_contains: String

  """All values not containing the given string."""
  normalizedTitle_not_contains: String

  """All values starting with the given string."""
  normalizedTitle_starts_with: String

  """All values not starting with the given string."""
  normalizedTitle_not_starts_with: String

  """All values ending with the given string."""
  normalizedTitle_ends_with: String

  """All values not ending with the given string."""
  normalizedTitle_not_ends_with: String
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
  colorTint: String

  """All values that are not equal to given value."""
  colorTint_not: String

  """All values that are contained in given list."""
  colorTint_in: [String!]

  """All values that are not contained in given list."""
  colorTint_not_in: [String!]

  """All values less than the given value."""
  colorTint_lt: String

  """All values less than or equal the given value."""
  colorTint_lte: String

  """All values greater than the given value."""
  colorTint_gt: String

  """All values greater than or equal the given value."""
  colorTint_gte: String

  """All values containing the given string."""
  colorTint_contains: String

  """All values not containing the given string."""
  colorTint_not_contains: String

  """All values starting with the given string."""
  colorTint_starts_with: String

  """All values not starting with the given string."""
  colorTint_not_starts_with: String

  """All values ending with the given string."""
  colorTint_ends_with: String

  """All values not ending with the given string."""
  colorTint_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  start: DateTime

  """All values that are not equal to given value."""
  start_not: DateTime

  """All values that are contained in given list."""
  start_in: [DateTime!]

  """All values that are not contained in given list."""
  start_not_in: [DateTime!]

  """All values less than the given value."""
  start_lt: DateTime

  """All values less than or equal the given value."""
  start_lte: DateTime

  """All values greater than the given value."""
  start_gt: DateTime

  """All values greater than or equal the given value."""
  start_gte: DateTime
  end: DateTime

  """All values that are not equal to given value."""
  end_not: DateTime

  """All values that are contained in given list."""
  end_in: [DateTime!]

  """All values that are not contained in given list."""
  end_not_in: [DateTime!]

  """All values less than the given value."""
  end_lt: DateTime

  """All values less than or equal the given value."""
  end_lte: DateTime

  """All values greater than the given value."""
  end_gt: DateTime

  """All values greater than or equal the given value."""
  end_gte: DateTime
  inviteSecret: String

  """All values that are not equal to given value."""
  inviteSecret_not: String

  """All values that are contained in given list."""
  inviteSecret_in: [String!]

  """All values that are not contained in given list."""
  inviteSecret_not_in: [String!]

  """All values less than the given value."""
  inviteSecret_lt: String

  """All values less than or equal the given value."""
  inviteSecret_lte: String

  """All values greater than the given value."""
  inviteSecret_gt: String

  """All values greater than or equal the given value."""
  inviteSecret_gte: String

  """All values containing the given string."""
  inviteSecret_contains: String

  """All values not containing the given string."""
  inviteSecret_not_contains: String

  """All values starting with the given string."""
  inviteSecret_starts_with: String

  """All values not starting with the given string."""
  inviteSecret_not_starts_with: String

  """All values ending with the given string."""
  inviteSecret_ends_with: String

  """All values not ending with the given string."""
  inviteSecret_not_ends_with: String
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
  normalizedTitle: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  members: UserUpdateManyWithoutPartiesInput
}

input PartyUpdateInput {
  title: String
  normalizedTitle: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  members: UserUpdateManyWithoutPartiesInput
}

input PartyUpdateManyDataInput {
  title: String
  normalizedTitle: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
}

input PartyUpdateManyMutationInput {
  title: String
  normalizedTitle: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
}

input PartyUpdateManyWithoutMembersInput {
  create: [PartyCreateWithoutMembersInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  delete: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutMembersInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
  deleteMany: [PartyScalarWhereInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutMembersInput!]
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

input PartyUpdateWithoutMembersDataInput {
  title: String
  normalizedTitle: String
  description: String
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
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
  normalizedTitle: String

  """All values that are not equal to given value."""
  normalizedTitle_not: String

  """All values that are contained in given list."""
  normalizedTitle_in: [String!]

  """All values that are not contained in given list."""
  normalizedTitle_not_in: [String!]

  """All values less than the given value."""
  normalizedTitle_lt: String

  """All values less than or equal the given value."""
  normalizedTitle_lte: String

  """All values greater than the given value."""
  normalizedTitle_gt: String

  """All values greater than or equal the given value."""
  normalizedTitle_gte: String

  """All values containing the given string."""
  normalizedTitle_contains: String

  """All values not containing the given string."""
  normalizedTitle_not_contains: String

  """All values starting with the given string."""
  normalizedTitle_starts_with: String

  """All values not starting with the given string."""
  normalizedTitle_not_starts_with: String

  """All values ending with the given string."""
  normalizedTitle_ends_with: String

  """All values not ending with the given string."""
  normalizedTitle_not_ends_with: String
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
  colorTint: String

  """All values that are not equal to given value."""
  colorTint_not: String

  """All values that are contained in given list."""
  colorTint_in: [String!]

  """All values that are not contained in given list."""
  colorTint_not_in: [String!]

  """All values less than the given value."""
  colorTint_lt: String

  """All values less than or equal the given value."""
  colorTint_lte: String

  """All values greater than the given value."""
  colorTint_gt: String

  """All values greater than or equal the given value."""
  colorTint_gte: String

  """All values containing the given string."""
  colorTint_contains: String

  """All values not containing the given string."""
  colorTint_not_contains: String

  """All values starting with the given string."""
  colorTint_starts_with: String

  """All values not starting with the given string."""
  colorTint_not_starts_with: String

  """All values ending with the given string."""
  colorTint_ends_with: String

  """All values not ending with the given string."""
  colorTint_not_ends_with: String
  isPublic: Boolean

  """All values that are not equal to given value."""
  isPublic_not: Boolean
  start: DateTime

  """All values that are not equal to given value."""
  start_not: DateTime

  """All values that are contained in given list."""
  start_in: [DateTime!]

  """All values that are not contained in given list."""
  start_not_in: [DateTime!]

  """All values less than the given value."""
  start_lt: DateTime

  """All values less than or equal the given value."""
  start_lte: DateTime

  """All values greater than the given value."""
  start_gt: DateTime

  """All values greater than or equal the given value."""
  start_gte: DateTime
  end: DateTime

  """All values that are not equal to given value."""
  end_not: DateTime

  """All values that are contained in given list."""
  end_in: [DateTime!]

  """All values that are not contained in given list."""
  end_not_in: [DateTime!]

  """All values less than the given value."""
  end_lt: DateTime

  """All values less than or equal the given value."""
  end_lte: DateTime

  """All values greater than the given value."""
  end_gt: DateTime

  """All values greater than or equal the given value."""
  end_gte: DateTime
  inviteSecret: String

  """All values that are not equal to given value."""
  inviteSecret_not: String

  """All values that are contained in given list."""
  inviteSecret_in: [String!]

  """All values that are not contained in given list."""
  inviteSecret_not_in: [String!]

  """All values less than the given value."""
  inviteSecret_lt: String

  """All values less than or equal the given value."""
  inviteSecret_lte: String

  """All values greater than the given value."""
  inviteSecret_gt: String

  """All values greater than or equal the given value."""
  inviteSecret_gte: String

  """All values containing the given string."""
  inviteSecret_contains: String

  """All values not containing the given string."""
  inviteSecret_not_contains: String

  """All values starting with the given string."""
  inviteSecret_starts_with: String

  """All values not starting with the given string."""
  inviteSecret_not_starts_with: String

  """All values ending with the given string."""
  inviteSecret_ends_with: String

  """All values not ending with the given string."""
  inviteSecret_not_ends_with: String
  author: UserWhereInput
  location: LocationWhereInput
  games_every: GameWhereInput
  games_some: GameWhereInput
  games_none: GameWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
}

input PartyWhereUniqueInput {
  id: ID
  inviteSecret: String
}

type Playlist implements Node {
  id: ID!
  playlist_id: String
  name: String!
  tracks(where: TrackWhereInput, orderBy: TrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Track!]
  isTemporary: Boolean
}

"""A connection to a list of items."""
type PlaylistConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaylistEdge]!
  aggregate: AggregatePlaylist!
}

input PlaylistCreateInput {
  id: ID
  playlist_id: String
  name: String!
  isTemporary: Boolean
  tracks: TrackCreateManyInput
}

"""An edge in a connection."""
type PlaylistEdge {
  """The item at the end of the edge."""
  node: Playlist!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaylistOrderByInput {
  id_ASC
  id_DESC
  playlist_id_ASC
  playlist_id_DESC
  name_ASC
  name_DESC
  isTemporary_ASC
  isTemporary_DESC
}

type PlaylistPreviousValues {
  id: ID!
  playlist_id: String
  name: String!
  isTemporary: Boolean
}

type PlaylistSubscriptionPayload {
  mutation: MutationType!
  node: Playlist
  updatedFields: [String!]
  previousValues: PlaylistPreviousValues
}

input PlaylistSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaylistSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaylistSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaylistSubscriptionWhereInput!]

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
  node: PlaylistWhereInput
}

input PlaylistUpdateInput {
  playlist_id: String
  name: String
  isTemporary: Boolean
  tracks: TrackUpdateManyInput
}

input PlaylistUpdateManyMutationInput {
  playlist_id: String
  name: String
  isTemporary: Boolean
}

input PlaylistWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaylistWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaylistWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaylistWhereInput!]
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
  playlist_id: String

  """All values that are not equal to given value."""
  playlist_id_not: String

  """All values that are contained in given list."""
  playlist_id_in: [String!]

  """All values that are not contained in given list."""
  playlist_id_not_in: [String!]

  """All values less than the given value."""
  playlist_id_lt: String

  """All values less than or equal the given value."""
  playlist_id_lte: String

  """All values greater than the given value."""
  playlist_id_gt: String

  """All values greater than or equal the given value."""
  playlist_id_gte: String

  """All values containing the given string."""
  playlist_id_contains: String

  """All values not containing the given string."""
  playlist_id_not_contains: String

  """All values starting with the given string."""
  playlist_id_starts_with: String

  """All values not starting with the given string."""
  playlist_id_not_starts_with: String

  """All values ending with the given string."""
  playlist_id_ends_with: String

  """All values not ending with the given string."""
  playlist_id_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  isTemporary: Boolean

  """All values that are not equal to given value."""
  isTemporary_not: Boolean
  tracks_every: TrackWhereInput
  tracks_some: TrackWhereInput
  tracks_none: TrackWhereInput
}

input PlaylistWhereUniqueInput {
  id: ID
  playlist_id: String
}

type Query {
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  partyInvitations(where: PartyInvitationWhereInput, orderBy: PartyInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyInvitation]!
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  playlists(where: PlaylistWhereInput, orderBy: PlaylistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Playlist]!
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  tracks(where: TrackWhereInput, orderBy: TrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Track]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  message(where: MessageWhereUniqueInput!): Message
  partyInvitation(where: PartyInvitationWhereUniqueInput!): PartyInvitation
  chat(where: ChatWhereUniqueInput!): Chat
  playlist(where: PlaylistWhereUniqueInput!): Playlist
  album(where: AlbumWhereUniqueInput!): Album
  image(where: ImageWhereUniqueInput!): Image
  location(where: LocationWhereUniqueInput!): Location
  game(where: GameWhereUniqueInput!): Game
  artist(where: ArtistWhereUniqueInput!): Artist
  track(where: TrackWhereUniqueInput!): Track
  user(where: UserWhereUniqueInput!): User
  party(where: PartyWhereUniqueInput!): Party
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  partyInvitationsConnection(where: PartyInvitationWhereInput, orderBy: PartyInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyInvitationConnection!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  playlistsConnection(where: PlaylistWhereInput, orderBy: PlaylistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaylistConnection!
  albumsConnection(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlbumConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  tracksConnection(where: TrackWhereInput, orderBy: TrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrackConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum SocialMediaType {
  FACEBOOK
  SPOTIFY
  TWITTER
}

type Subscription {
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  partyInvitation(where: PartyInvitationSubscriptionWhereInput): PartyInvitationSubscriptionPayload
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  playlist(where: PlaylistSubscriptionWhereInput): PlaylistSubscriptionPayload
  album(where: AlbumSubscriptionWhereInput): AlbumSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  track(where: TrackSubscriptionWhereInput): TrackSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
}

type Track implements Node {
  id: ID!
  name: String!
  album: Album!
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
  duration: Int!
  preview_url: String!
}

"""A connection to a list of items."""
type TrackConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TrackEdge]!
  aggregate: AggregateTrack!
}

input TrackCreateInput {
  id: ID
  name: String!
  duration: Int!
  preview_url: String!
  album: AlbumCreateOneInput!
  artists: ArtistCreateManyInput
}

input TrackCreateManyInput {
  create: [TrackCreateInput!]
  connect: [TrackWhereUniqueInput!]
}

"""An edge in a connection."""
type TrackEdge {
  """The item at the end of the edge."""
  node: Track!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TrackOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  duration_ASC
  duration_DESC
  preview_url_ASC
  preview_url_DESC
}

type TrackPreviousValues {
  id: ID!
  name: String!
  duration: Int!
  preview_url: String!
}

input TrackScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TrackScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrackScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrackScalarWhereInput!]
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
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  preview_url: String

  """All values that are not equal to given value."""
  preview_url_not: String

  """All values that are contained in given list."""
  preview_url_in: [String!]

  """All values that are not contained in given list."""
  preview_url_not_in: [String!]

  """All values less than the given value."""
  preview_url_lt: String

  """All values less than or equal the given value."""
  preview_url_lte: String

  """All values greater than the given value."""
  preview_url_gt: String

  """All values greater than or equal the given value."""
  preview_url_gte: String

  """All values containing the given string."""
  preview_url_contains: String

  """All values not containing the given string."""
  preview_url_not_contains: String

  """All values starting with the given string."""
  preview_url_starts_with: String

  """All values not starting with the given string."""
  preview_url_not_starts_with: String

  """All values ending with the given string."""
  preview_url_ends_with: String

  """All values not ending with the given string."""
  preview_url_not_ends_with: String
}

type TrackSubscriptionPayload {
  mutation: MutationType!
  node: Track
  updatedFields: [String!]
  previousValues: TrackPreviousValues
}

input TrackSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TrackSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrackSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrackSubscriptionWhereInput!]

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
  node: TrackWhereInput
}

input TrackUpdateDataInput {
  name: String
  duration: Int
  preview_url: String
  album: AlbumUpdateOneRequiredInput
  artists: ArtistUpdateManyInput
}

input TrackUpdateInput {
  name: String
  duration: Int
  preview_url: String
  album: AlbumUpdateOneRequiredInput
  artists: ArtistUpdateManyInput
}

input TrackUpdateManyDataInput {
  name: String
  duration: Int
  preview_url: String
}

input TrackUpdateManyInput {
  create: [TrackCreateInput!]
  connect: [TrackWhereUniqueInput!]
  set: [TrackWhereUniqueInput!]
  disconnect: [TrackWhereUniqueInput!]
  delete: [TrackWhereUniqueInput!]
  update: [TrackUpdateWithWhereUniqueNestedInput!]
  updateMany: [TrackUpdateManyWithWhereNestedInput!]
  deleteMany: [TrackScalarWhereInput!]
  upsert: [TrackUpsertWithWhereUniqueNestedInput!]
}

input TrackUpdateManyMutationInput {
  name: String
  duration: Int
  preview_url: String
}

input TrackUpdateManyWithWhereNestedInput {
  where: TrackScalarWhereInput!
  data: TrackUpdateManyDataInput!
}

input TrackUpdateWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput!
  data: TrackUpdateDataInput!
}

input TrackUpsertWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput!
  update: TrackUpdateDataInput!
  create: TrackCreateInput!
}

input TrackWhereInput {
  """Logical AND on all given filters."""
  AND: [TrackWhereInput!]

  """Logical OR on all given filters."""
  OR: [TrackWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TrackWhereInput!]
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
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  preview_url: String

  """All values that are not equal to given value."""
  preview_url_not: String

  """All values that are contained in given list."""
  preview_url_in: [String!]

  """All values that are not contained in given list."""
  preview_url_not_in: [String!]

  """All values less than the given value."""
  preview_url_lt: String

  """All values less than or equal the given value."""
  preview_url_lte: String

  """All values greater than the given value."""
  preview_url_gt: String

  """All values greater than or equal the given value."""
  preview_url_gte: String

  """All values containing the given string."""
  preview_url_contains: String

  """All values not containing the given string."""
  preview_url_not_contains: String

  """All values starting with the given string."""
  preview_url_starts_with: String

  """All values not starting with the given string."""
  preview_url_not_starts_with: String

  """All values ending with the given string."""
  preview_url_ends_with: String

  """All values not ending with the given string."""
  preview_url_not_ends_with: String
  album: AlbumWhereInput
  artists_every: ArtistWhereInput
  artists_some: ArtistWhereInput
  artists_none: ArtistWhereInput
}

input TrackWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  pendingFriendInvitations(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  pendingPartyInvitations(where: PartyInvitationWhereInput, orderBy: PartyInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyInvitation!]
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat!]
  createdAt: DateTime!
  updatedAt: DateTime!
  lastOnline: DateTime
  deleted: Boolean!
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
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
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyInput
  pendingFriendInvitations: UserCreateManyInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
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

input UserCreateManyWithoutPartiesInput {
  create: [UserCreateWithoutPartiesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPendingPartyInvitationsInput {
  create: UserCreateWithoutPendingPartyInvitationsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyInput
  pendingFriendInvitations: UserCreateManyInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
}

input UserCreateWithoutPartiesInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  friends: UserCreateManyInput
  pendingFriendInvitations: UserCreateManyInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
}

input UserCreateWithoutPendingPartyInvitationsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyInput
  pendingFriendInvitations: UserCreateManyInput
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
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
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
  resetToken: String
  resetTokenExpiry: DateTime
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
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
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
  lastOnline: DateTime

  """All values that are not equal to given value."""
  lastOnline_not: DateTime

  """All values that are contained in given list."""
  lastOnline_in: [DateTime!]

  """All values that are not contained in given list."""
  lastOnline_not_in: [DateTime!]

  """All values less than the given value."""
  lastOnline_lt: DateTime

  """All values less than or equal the given value."""
  lastOnline_lte: DateTime

  """All values greater than the given value."""
  lastOnline_gt: DateTime

  """All values greater than or equal the given value."""
  lastOnline_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  provider: SocialMediaType

  """All values that are not equal to given value."""
  provider_not: SocialMediaType

  """All values that are contained in given list."""
  provider_in: [SocialMediaType!]

  """All values that are not contained in given list."""
  provider_not_in: [SocialMediaType!]
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  thirdPartyId: String

  """All values that are not equal to given value."""
  thirdPartyId_not: String

  """All values that are contained in given list."""
  thirdPartyId_in: [String!]

  """All values that are not contained in given list."""
  thirdPartyId_not_in: [String!]

  """All values less than the given value."""
  thirdPartyId_lt: String

  """All values less than or equal the given value."""
  thirdPartyId_lte: String

  """All values greater than the given value."""
  thirdPartyId_gt: String

  """All values greater than or equal the given value."""
  thirdPartyId_gte: String

  """All values containing the given string."""
  thirdPartyId_contains: String

  """All values not containing the given string."""
  thirdPartyId_not_contains: String

  """All values starting with the given string."""
  thirdPartyId_starts_with: String

  """All values not starting with the given string."""
  thirdPartyId_not_starts_with: String

  """All values ending with the given string."""
  thirdPartyId_ends_with: String

  """All values not ending with the given string."""
  thirdPartyId_not_ends_with: String
  resetToken: String

  """All values that are not equal to given value."""
  resetToken_not: String

  """All values that are contained in given list."""
  resetToken_in: [String!]

  """All values that are not contained in given list."""
  resetToken_not_in: [String!]

  """All values less than the given value."""
  resetToken_lt: String

  """All values less than or equal the given value."""
  resetToken_lte: String

  """All values greater than the given value."""
  resetToken_gt: String

  """All values greater than or equal the given value."""
  resetToken_gte: String

  """All values containing the given string."""
  resetToken_contains: String

  """All values not containing the given string."""
  resetToken_not_contains: String

  """All values starting with the given string."""
  resetToken_starts_with: String

  """All values not starting with the given string."""
  resetToken_not_starts_with: String

  """All values ending with the given string."""
  resetToken_ends_with: String

  """All values not ending with the given string."""
  resetToken_not_ends_with: String
  resetTokenExpiry: DateTime

  """All values that are not equal to given value."""
  resetTokenExpiry_not: DateTime

  """All values that are contained in given list."""
  resetTokenExpiry_in: [DateTime!]

  """All values that are not contained in given list."""
  resetTokenExpiry_not_in: [DateTime!]

  """All values less than the given value."""
  resetTokenExpiry_lt: DateTime

  """All values less than or equal the given value."""
  resetTokenExpiry_lte: DateTime

  """All values greater than the given value."""
  resetTokenExpiry_gt: DateTime

  """All values greater than or equal the given value."""
  resetTokenExpiry_gte: DateTime
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
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyInput
  pendingFriendInvitations: UserUpdateManyInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
}

input UserUpdateInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyInput
  pendingFriendInvitations: UserUpdateManyInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
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
  resetToken: String
  resetTokenExpiry: DateTime
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
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
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

input UserUpdateManyWithoutPartiesInput {
  create: [UserCreateWithoutPartiesInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutPartiesInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutPartiesInput!]
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

input UserUpdateOneRequiredWithoutPendingPartyInvitationsInput {
  create: UserCreateWithoutPendingPartyInvitationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPendingPartyInvitationsDataInput
  upsert: UserUpsertWithoutPendingPartyInvitationsInput
}

input UserUpdateWithoutChatsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyInput
  pendingFriendInvitations: UserUpdateManyInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
}

input UserUpdateWithoutPartiesDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  friends: UserUpdateManyInput
  pendingFriendInvitations: UserUpdateManyInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
}

input UserUpdateWithoutPendingPartyInvitationsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyInput
  pendingFriendInvitations: UserUpdateManyInput
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

input UserUpdateWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPartiesDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPendingPartyInvitationsInput {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput!
  create: UserCreateWithoutPendingPartyInvitationsInput!
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

input UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPartiesDataInput!
  create: UserCreateWithoutPartiesInput!
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
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
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
  lastOnline: DateTime

  """All values that are not equal to given value."""
  lastOnline_not: DateTime

  """All values that are contained in given list."""
  lastOnline_in: [DateTime!]

  """All values that are not contained in given list."""
  lastOnline_not_in: [DateTime!]

  """All values less than the given value."""
  lastOnline_lt: DateTime

  """All values less than or equal the given value."""
  lastOnline_lte: DateTime

  """All values greater than the given value."""
  lastOnline_gt: DateTime

  """All values greater than or equal the given value."""
  lastOnline_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  provider: SocialMediaType

  """All values that are not equal to given value."""
  provider_not: SocialMediaType

  """All values that are contained in given list."""
  provider_in: [SocialMediaType!]

  """All values that are not contained in given list."""
  provider_not_in: [SocialMediaType!]
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  thirdPartyId: String

  """All values that are not equal to given value."""
  thirdPartyId_not: String

  """All values that are contained in given list."""
  thirdPartyId_in: [String!]

  """All values that are not contained in given list."""
  thirdPartyId_not_in: [String!]

  """All values less than the given value."""
  thirdPartyId_lt: String

  """All values less than or equal the given value."""
  thirdPartyId_lte: String

  """All values greater than the given value."""
  thirdPartyId_gt: String

  """All values greater than or equal the given value."""
  thirdPartyId_gte: String

  """All values containing the given string."""
  thirdPartyId_contains: String

  """All values not containing the given string."""
  thirdPartyId_not_contains: String

  """All values starting with the given string."""
  thirdPartyId_starts_with: String

  """All values not starting with the given string."""
  thirdPartyId_not_starts_with: String

  """All values ending with the given string."""
  thirdPartyId_ends_with: String

  """All values not ending with the given string."""
  thirdPartyId_not_ends_with: String
  resetToken: String

  """All values that are not equal to given value."""
  resetToken_not: String

  """All values that are contained in given list."""
  resetToken_in: [String!]

  """All values that are not contained in given list."""
  resetToken_not_in: [String!]

  """All values less than the given value."""
  resetToken_lt: String

  """All values less than or equal the given value."""
  resetToken_lte: String

  """All values greater than the given value."""
  resetToken_gt: String

  """All values greater than or equal the given value."""
  resetToken_gte: String

  """All values containing the given string."""
  resetToken_contains: String

  """All values not containing the given string."""
  resetToken_not_contains: String

  """All values starting with the given string."""
  resetToken_starts_with: String

  """All values not starting with the given string."""
  resetToken_not_starts_with: String

  """All values ending with the given string."""
  resetToken_ends_with: String

  """All values not ending with the given string."""
  resetToken_not_ends_with: String
  resetTokenExpiry: DateTime

  """All values that are not equal to given value."""
  resetTokenExpiry_not: DateTime

  """All values that are contained in given list."""
  resetTokenExpiry_in: [DateTime!]

  """All values that are not contained in given list."""
  resetTokenExpiry_not_in: [DateTime!]

  """All values less than the given value."""
  resetTokenExpiry_lt: DateTime

  """All values less than or equal the given value."""
  resetTokenExpiry_lte: DateTime

  """All values greater than the given value."""
  resetTokenExpiry_gt: DateTime

  """All values greater than or equal the given value."""
  resetTokenExpiry_gte: DateTime
  parties_every: PartyWhereInput
  parties_some: PartyWhereInput
  parties_none: PartyWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  pendingFriendInvitations_every: UserWhereInput
  pendingFriendInvitations_some: UserWhereInput
  pendingFriendInvitations_none: UserWhereInput
  pendingPartyInvitations_every: PartyInvitationWhereInput
  pendingPartyInvitations_some: PartyInvitationWhereInput
  pendingPartyInvitations_none: PartyInvitationWhereInput
  chats_every: ChatWhereInput
  chats_some: ChatWhereInput
  chats_none: ChatWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`;

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs});

/**
 * Types
*/

export type AlbumOrderByInput =   'id_ASC' |
  'id_DESC';

export type ArtistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC';

export type ChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC';

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
  'updatedAt_DESC';

export type GameType =   'BOARD' |
  'PC' |
  'CONSOLE';

export type ImageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'height_ASC' |
  'height_DESC' |
  'width_ASC' |
  'width_DESC' |
  'url_ASC' |
  'url_DESC';

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
  'updatedAt_DESC';

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'content_ASC' |
  'content_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC';

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED';

export type PartyInvitationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'invitedUserId_ASC' |
  'invitedUserId_DESC' |
  'partyId_ASC' |
  'partyId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC';

export type PartyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'normalizedTitle_ASC' |
  'normalizedTitle_DESC' |
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
  'end_DESC' |
  'inviteSecret_ASC' |
  'inviteSecret_DESC';

export type PlaylistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'playlist_id_ASC' |
  'playlist_id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'isTemporary_ASC' |
  'isTemporary_DESC';

export type SocialMediaType =   'FACEBOOK' |
  'SPOTIFY' |
  'TWITTER';

export type TrackOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'preview_url_ASC' |
  'preview_url_DESC';

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
  'thirdPartyId_DESC' |
  'resetToken_ASC' |
  'resetToken_DESC' |
  'resetTokenExpiry_ASC' |
  'resetTokenExpiry_DESC';

export interface AlbumCreateInput {
  id?: ID_Input | null;
  images?: ImageCreateManyInput | null;
  artists?: ArtistCreateManyInput | null;
}

export interface AlbumCreateOneInput {
  create?: AlbumCreateInput | null;
  connect?: AlbumWhereUniqueInput | null;
}

export interface AlbumSubscriptionWhereInput {
  AND?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null;
  OR?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null;
  NOT?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: AlbumWhereInput | null;
}

export interface AlbumUpdateDataInput {
  images?: ImageUpdateManyInput | null;
  artists?: ArtistUpdateManyInput | null;
}

export interface AlbumUpdateInput {
  images?: ImageUpdateManyInput | null;
  artists?: ArtistUpdateManyInput | null;
}

export interface AlbumUpdateOneRequiredInput {
  create?: AlbumCreateInput | null;
  connect?: AlbumWhereUniqueInput | null;
  update?: AlbumUpdateDataInput | null;
  upsert?: AlbumUpsertNestedInput | null;
}

export interface AlbumUpsertNestedInput {
  update: AlbumUpdateDataInput;
  create: AlbumCreateInput;
}

export interface AlbumWhereInput {
  AND?: AlbumWhereInput[] | AlbumWhereInput | null;
  OR?: AlbumWhereInput[] | AlbumWhereInput | null;
  NOT?: AlbumWhereInput[] | AlbumWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  images_every?: ImageWhereInput | null;
  images_some?: ImageWhereInput | null;
  images_none?: ImageWhereInput | null;
  artists_every?: ArtistWhereInput | null;
  artists_some?: ArtistWhereInput | null;
  artists_none?: ArtistWhereInput | null;
}

export interface AlbumWhereUniqueInput {
  id?: ID_Input | null;
}

export interface ArtistCreateInput {
  id?: ID_Input | null;
  name: String;
}

export interface ArtistCreateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput | null;
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null;
}

export interface ArtistScalarWhereInput {
  AND?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null;
  OR?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null;
  NOT?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  name?: String | null;
  name_not?: String | null;
  name_in?: String[] | String | null;
  name_not_in?: String[] | String | null;
  name_lt?: String | null;
  name_lte?: String | null;
  name_gt?: String | null;
  name_gte?: String | null;
  name_contains?: String | null;
  name_not_contains?: String | null;
  name_starts_with?: String | null;
  name_not_starts_with?: String | null;
  name_ends_with?: String | null;
  name_not_ends_with?: String | null;
}

export interface ArtistSubscriptionWhereInput {
  AND?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null;
  OR?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null;
  NOT?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: ArtistWhereInput | null;
}

export interface ArtistUpdateDataInput {
  name?: String | null;
}

export interface ArtistUpdateInput {
  name?: String | null;
}

export interface ArtistUpdateManyDataInput {
  name?: String | null;
}

export interface ArtistUpdateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput | null;
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null;
  set?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null;
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null;
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null;
  update?: ArtistUpdateWithWhereUniqueNestedInput[] | ArtistUpdateWithWhereUniqueNestedInput | null;
  updateMany?: ArtistUpdateManyWithWhereNestedInput[] | ArtistUpdateManyWithWhereNestedInput | null;
  deleteMany?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null;
  upsert?: ArtistUpsertWithWhereUniqueNestedInput[] | ArtistUpsertWithWhereUniqueNestedInput | null;
}

export interface ArtistUpdateManyMutationInput {
  name?: String | null;
}

export interface ArtistUpdateManyWithWhereNestedInput {
  where: ArtistScalarWhereInput;
  data: ArtistUpdateManyDataInput;
}

export interface ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput;
  data: ArtistUpdateDataInput;
}

export interface ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput;
  update: ArtistUpdateDataInput;
  create: ArtistCreateInput;
}

export interface ArtistWhereInput {
  AND?: ArtistWhereInput[] | ArtistWhereInput | null;
  OR?: ArtistWhereInput[] | ArtistWhereInput | null;
  NOT?: ArtistWhereInput[] | ArtistWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  name?: String | null;
  name_not?: String | null;
  name_in?: String[] | String | null;
  name_not_in?: String[] | String | null;
  name_lt?: String | null;
  name_lte?: String | null;
  name_gt?: String | null;
  name_gte?: String | null;
  name_contains?: String | null;
  name_not_contains?: String | null;
  name_starts_with?: String | null;
  name_not_starts_with?: String | null;
  name_ends_with?: String | null;
  name_not_ends_with?: String | null;
}

export interface ArtistWhereUniqueInput {
  id?: ID_Input | null;
}

export interface ChatCreateInput {
  id?: ID_Input | null;
  party: PartyCreateOneInput;
  members?: UserCreateManyWithoutChatsInput | null;
  messages?: MessageCreateManyWithoutChatInput | null;
}

export interface ChatCreateManyWithoutMembersInput {
  create?: ChatCreateWithoutMembersInput[] | ChatCreateWithoutMembersInput | null;
  connect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null;
}

export interface ChatCreateOneWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput | null;
  connect?: ChatWhereUniqueInput | null;
}

export interface ChatCreateWithoutMembersInput {
  id?: ID_Input | null;
  party: PartyCreateOneInput;
  messages?: MessageCreateManyWithoutChatInput | null;
}

export interface ChatCreateWithoutMessagesInput {
  id?: ID_Input | null;
  party: PartyCreateOneInput;
  members?: UserCreateManyWithoutChatsInput | null;
}

export interface ChatScalarWhereInput {
  AND?: ChatScalarWhereInput[] | ChatScalarWhereInput | null;
  OR?: ChatScalarWhereInput[] | ChatScalarWhereInput | null;
  NOT?: ChatScalarWhereInput[] | ChatScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
}

export interface ChatSubscriptionWhereInput {
  AND?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null;
  OR?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null;
  NOT?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: ChatWhereInput | null;
}

export interface ChatUpdateInput {
  party?: PartyUpdateOneRequiredInput | null;
  members?: UserUpdateManyWithoutChatsInput | null;
  messages?: MessageUpdateManyWithoutChatInput | null;
}

export interface ChatUpdateManyWithoutMembersInput {
  create?: ChatCreateWithoutMembersInput[] | ChatCreateWithoutMembersInput | null;
  connect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null;
  set?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null;
  disconnect?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null;
  delete?: ChatWhereUniqueInput[] | ChatWhereUniqueInput | null;
  update?: ChatUpdateWithWhereUniqueWithoutMembersInput[] | ChatUpdateWithWhereUniqueWithoutMembersInput | null;
  deleteMany?: ChatScalarWhereInput[] | ChatScalarWhereInput | null;
  upsert?: ChatUpsertWithWhereUniqueWithoutMembersInput[] | ChatUpsertWithWhereUniqueWithoutMembersInput | null;
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput | null;
  connect?: ChatWhereUniqueInput | null;
  update?: ChatUpdateWithoutMessagesDataInput | null;
  upsert?: ChatUpsertWithoutMessagesInput | null;
}

export interface ChatUpdateWithoutMembersDataInput {
  party?: PartyUpdateOneRequiredInput | null;
  messages?: MessageUpdateManyWithoutChatInput | null;
}

export interface ChatUpdateWithoutMessagesDataInput {
  party?: PartyUpdateOneRequiredInput | null;
  members?: UserUpdateManyWithoutChatsInput | null;
}

export interface ChatUpdateWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput;
  data: ChatUpdateWithoutMembersDataInput;
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput;
  create: ChatCreateWithoutMessagesInput;
}

export interface ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput;
  update: ChatUpdateWithoutMembersDataInput;
  create: ChatCreateWithoutMembersInput;
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[] | ChatWhereInput | null;
  OR?: ChatWhereInput[] | ChatWhereInput | null;
  NOT?: ChatWhereInput[] | ChatWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  party?: PartyWhereInput | null;
  members_every?: UserWhereInput | null;
  members_some?: UserWhereInput | null;
  members_none?: UserWhereInput | null;
  messages_every?: MessageWhereInput | null;
  messages_some?: MessageWhereInput | null;
  messages_none?: MessageWhereInput | null;
}

export interface ChatWhereUniqueInput {
  id?: ID_Input | null;
}

export interface GameCreateInput {
  id?: ID_Input | null;
  title: String;
  cover?: String | null;
  type: GameType;
}

export interface GameCreateManyInput {
  create?: GameCreateInput[] | GameCreateInput | null;
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
}

export interface GameScalarWhereInput {
  AND?: GameScalarWhereInput[] | GameScalarWhereInput | null;
  OR?: GameScalarWhereInput[] | GameScalarWhereInput | null;
  NOT?: GameScalarWhereInput[] | GameScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  cover?: String | null;
  cover_not?: String | null;
  cover_in?: String[] | String | null;
  cover_not_in?: String[] | String | null;
  cover_lt?: String | null;
  cover_lte?: String | null;
  cover_gt?: String | null;
  cover_gte?: String | null;
  cover_contains?: String | null;
  cover_not_contains?: String | null;
  cover_starts_with?: String | null;
  cover_not_starts_with?: String | null;
  cover_ends_with?: String | null;
  cover_not_ends_with?: String | null;
  type?: GameType | null;
  type_not?: GameType | null;
  type_in?: GameType[] | GameType | null;
  type_not_in?: GameType[] | GameType | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
}

export interface GameSubscriptionWhereInput {
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: GameWhereInput | null;
}

export interface GameUpdateDataInput {
  title?: String | null;
  cover?: String | null;
  type?: GameType | null;
}

export interface GameUpdateInput {
  title?: String | null;
  cover?: String | null;
  type?: GameType | null;
}

export interface GameUpdateManyDataInput {
  title?: String | null;
  cover?: String | null;
  type?: GameType | null;
}

export interface GameUpdateManyInput {
  create?: GameCreateInput[] | GameCreateInput | null;
  connect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
  set?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
  disconnect?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
  delete?: GameWhereUniqueInput[] | GameWhereUniqueInput | null;
  update?: GameUpdateWithWhereUniqueNestedInput[] | GameUpdateWithWhereUniqueNestedInput | null;
  updateMany?: GameUpdateManyWithWhereNestedInput[] | GameUpdateManyWithWhereNestedInput | null;
  deleteMany?: GameScalarWhereInput[] | GameScalarWhereInput | null;
  upsert?: GameUpsertWithWhereUniqueNestedInput[] | GameUpsertWithWhereUniqueNestedInput | null;
}

export interface GameUpdateManyMutationInput {
  title?: String | null;
  cover?: String | null;
  type?: GameType | null;
}

export interface GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput;
  data: GameUpdateManyDataInput;
}

export interface GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;
  data: GameUpdateDataInput;
}

export interface GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;
  update: GameUpdateDataInput;
  create: GameCreateInput;
}

export interface GameWhereInput {
  AND?: GameWhereInput[] | GameWhereInput | null;
  OR?: GameWhereInput[] | GameWhereInput | null;
  NOT?: GameWhereInput[] | GameWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  cover?: String | null;
  cover_not?: String | null;
  cover_in?: String[] | String | null;
  cover_not_in?: String[] | String | null;
  cover_lt?: String | null;
  cover_lte?: String | null;
  cover_gt?: String | null;
  cover_gte?: String | null;
  cover_contains?: String | null;
  cover_not_contains?: String | null;
  cover_starts_with?: String | null;
  cover_not_starts_with?: String | null;
  cover_ends_with?: String | null;
  cover_not_ends_with?: String | null;
  type?: GameType | null;
  type_not?: GameType | null;
  type_in?: GameType[] | GameType | null;
  type_not_in?: GameType[] | GameType | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
}

export interface GameWhereUniqueInput {
  id?: ID_Input | null;
  title?: String | null;
}

export interface ImageCreateInput {
  id?: ID_Input | null;
  height: Int;
  width: Int;
  url: String;
}

export interface ImageCreateManyInput {
  create?: ImageCreateInput[] | ImageCreateInput | null;
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput | null;
}

export interface ImageScalarWhereInput {
  AND?: ImageScalarWhereInput[] | ImageScalarWhereInput | null;
  OR?: ImageScalarWhereInput[] | ImageScalarWhereInput | null;
  NOT?: ImageScalarWhereInput[] | ImageScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  height?: Int | null;
  height_not?: Int | null;
  height_in?: Int[] | Int | null;
  height_not_in?: Int[] | Int | null;
  height_lt?: Int | null;
  height_lte?: Int | null;
  height_gt?: Int | null;
  height_gte?: Int | null;
  width?: Int | null;
  width_not?: Int | null;
  width_in?: Int[] | Int | null;
  width_not_in?: Int[] | Int | null;
  width_lt?: Int | null;
  width_lte?: Int | null;
  width_gt?: Int | null;
  width_gte?: Int | null;
  url?: String | null;
  url_not?: String | null;
  url_in?: String[] | String | null;
  url_not_in?: String[] | String | null;
  url_lt?: String | null;
  url_lte?: String | null;
  url_gt?: String | null;
  url_gte?: String | null;
  url_contains?: String | null;
  url_not_contains?: String | null;
  url_starts_with?: String | null;
  url_not_starts_with?: String | null;
  url_ends_with?: String | null;
  url_not_ends_with?: String | null;
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null;
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null;
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: ImageWhereInput | null;
}

export interface ImageUpdateDataInput {
  height?: Int | null;
  width?: Int | null;
  url?: String | null;
}

export interface ImageUpdateInput {
  height?: Int | null;
  width?: Int | null;
  url?: String | null;
}

export interface ImageUpdateManyDataInput {
  height?: Int | null;
  width?: Int | null;
  url?: String | null;
}

export interface ImageUpdateManyInput {
  create?: ImageCreateInput[] | ImageCreateInput | null;
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput | null;
  set?: ImageWhereUniqueInput[] | ImageWhereUniqueInput | null;
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput | null;
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput | null;
  update?: ImageUpdateWithWhereUniqueNestedInput[] | ImageUpdateWithWhereUniqueNestedInput | null;
  updateMany?: ImageUpdateManyWithWhereNestedInput[] | ImageUpdateManyWithWhereNestedInput | null;
  deleteMany?: ImageScalarWhereInput[] | ImageScalarWhereInput | null;
  upsert?: ImageUpsertWithWhereUniqueNestedInput[] | ImageUpsertWithWhereUniqueNestedInput | null;
}

export interface ImageUpdateManyMutationInput {
  height?: Int | null;
  width?: Int | null;
  url?: String | null;
}

export interface ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput;
  data: ImageUpdateManyDataInput;
}

export interface ImageUpdateWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput;
  data: ImageUpdateDataInput;
}

export interface ImageUpsertWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput;
  update: ImageUpdateDataInput;
  create: ImageCreateInput;
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput | null;
  OR?: ImageWhereInput[] | ImageWhereInput | null;
  NOT?: ImageWhereInput[] | ImageWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  height?: Int | null;
  height_not?: Int | null;
  height_in?: Int[] | Int | null;
  height_not_in?: Int[] | Int | null;
  height_lt?: Int | null;
  height_lte?: Int | null;
  height_gt?: Int | null;
  height_gte?: Int | null;
  width?: Int | null;
  width_not?: Int | null;
  width_in?: Int[] | Int | null;
  width_not_in?: Int[] | Int | null;
  width_lt?: Int | null;
  width_lte?: Int | null;
  width_gt?: Int | null;
  width_gte?: Int | null;
  url?: String | null;
  url_not?: String | null;
  url_in?: String[] | String | null;
  url_not_in?: String[] | String | null;
  url_lt?: String | null;
  url_lte?: String | null;
  url_gt?: String | null;
  url_gte?: String | null;
  url_contains?: String | null;
  url_not_contains?: String | null;
  url_starts_with?: String | null;
  url_not_starts_with?: String | null;
  url_ends_with?: String | null;
  url_not_ends_with?: String | null;
}

export interface ImageWhereUniqueInput {
  id?: ID_Input | null;
}

export interface LocationCreateInput {
  id?: ID_Input | null;
  placeName: String;
  latitude: Float;
  longitude: Float;
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput | null;
  connect?: LocationWhereUniqueInput | null;
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null;
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null;
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: LocationWhereInput | null;
}

export interface LocationUpdateDataInput {
  placeName?: String | null;
  latitude?: Float | null;
  longitude?: Float | null;
}

export interface LocationUpdateInput {
  placeName?: String | null;
  latitude?: Float | null;
  longitude?: Float | null;
}

export interface LocationUpdateManyMutationInput {
  placeName?: String | null;
  latitude?: Float | null;
  longitude?: Float | null;
}

export interface LocationUpdateOneRequiredInput {
  create?: LocationCreateInput | null;
  connect?: LocationWhereUniqueInput | null;
  update?: LocationUpdateDataInput | null;
  upsert?: LocationUpsertNestedInput | null;
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput;
  create: LocationCreateInput;
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput | null;
  OR?: LocationWhereInput[] | LocationWhereInput | null;
  NOT?: LocationWhereInput[] | LocationWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  placeName?: String | null;
  placeName_not?: String | null;
  placeName_in?: String[] | String | null;
  placeName_not_in?: String[] | String | null;
  placeName_lt?: String | null;
  placeName_lte?: String | null;
  placeName_gt?: String | null;
  placeName_gte?: String | null;
  placeName_contains?: String | null;
  placeName_not_contains?: String | null;
  placeName_starts_with?: String | null;
  placeName_not_starts_with?: String | null;
  placeName_ends_with?: String | null;
  placeName_not_ends_with?: String | null;
  latitude?: Float | null;
  latitude_not?: Float | null;
  latitude_in?: Float[] | Float | null;
  latitude_not_in?: Float[] | Float | null;
  latitude_lt?: Float | null;
  latitude_lte?: Float | null;
  latitude_gt?: Float | null;
  latitude_gte?: Float | null;
  longitude?: Float | null;
  longitude_not?: Float | null;
  longitude_in?: Float[] | Float | null;
  longitude_not_in?: Float[] | Float | null;
  longitude_lt?: Float | null;
  longitude_lte?: Float | null;
  longitude_gt?: Float | null;
  longitude_gte?: Float | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null;
}

export interface MessageCreateInput {
  id?: ID_Input | null;
  content: String;
  author: UserCreateOneInput;
  chat: ChatCreateOneWithoutMessagesInput;
}

export interface MessageCreateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null;
}

export interface MessageCreateWithoutChatInput {
  id?: ID_Input | null;
  content: String;
  author: UserCreateOneInput;
}

export interface MessageScalarWhereInput {
  AND?: MessageScalarWhereInput[] | MessageScalarWhereInput | null;
  OR?: MessageScalarWhereInput[] | MessageScalarWhereInput | null;
  NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  content?: String | null;
  content_not?: String | null;
  content_in?: String[] | String | null;
  content_not_in?: String[] | String | null;
  content_lt?: String | null;
  content_lte?: String | null;
  content_gt?: String | null;
  content_gte?: String | null;
  content_contains?: String | null;
  content_not_contains?: String | null;
  content_starts_with?: String | null;
  content_not_starts_with?: String | null;
  content_ends_with?: String | null;
  content_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null;
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null;
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: MessageWhereInput | null;
}

export interface MessageUpdateInput {
  content?: String | null;
  author?: UserUpdateOneRequiredInput | null;
  chat?: ChatUpdateOneRequiredWithoutMessagesInput | null;
}

export interface MessageUpdateManyDataInput {
  content?: String | null;
}

export interface MessageUpdateManyMutationInput {
  content?: String | null;
}

export interface MessageUpdateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null;
  set?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null;
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null;
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null;
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[] | MessageUpdateWithWhereUniqueWithoutChatInput | null;
  updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput | null;
  deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput | null;
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[] | MessageUpsertWithWhereUniqueWithoutChatInput | null;
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
}

export interface MessageUpdateWithoutChatDataInput {
  content?: String | null;
  author?: UserUpdateOneRequiredInput | null;
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutChatDataInput;
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutChatDataInput;
  create: MessageCreateWithoutChatInput;
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput | null;
  OR?: MessageWhereInput[] | MessageWhereInput | null;
  NOT?: MessageWhereInput[] | MessageWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  content?: String | null;
  content_not?: String | null;
  content_in?: String[] | String | null;
  content_not_in?: String[] | String | null;
  content_lt?: String | null;
  content_lte?: String | null;
  content_gt?: String | null;
  content_gte?: String | null;
  content_contains?: String | null;
  content_not_contains?: String | null;
  content_starts_with?: String | null;
  content_not_starts_with?: String | null;
  content_ends_with?: String | null;
  content_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  author?: UserWhereInput | null;
  chat?: ChatWhereInput | null;
}

export interface MessageWhereUniqueInput {
  id?: ID_Input | null;
}

export interface PartyCreateInput {
  id?: ID_Input | null;
  title: String;
  normalizedTitle: String;
  description: String;
  colorTint: String;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret: String;
  author: UserCreateOneInput;
  location: LocationCreateOneInput;
  games?: GameCreateManyInput | null;
  members?: UserCreateManyWithoutPartiesInput | null;
}

export interface PartyCreateManyWithoutMembersInput {
  create?: PartyCreateWithoutMembersInput[] | PartyCreateWithoutMembersInput | null;
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null;
}

export interface PartyCreateOneInput {
  create?: PartyCreateInput | null;
  connect?: PartyWhereUniqueInput | null;
}

export interface PartyCreateWithoutMembersInput {
  id?: ID_Input | null;
  title: String;
  normalizedTitle: String;
  description: String;
  colorTint: String;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret: String;
  author: UserCreateOneInput;
  location: LocationCreateOneInput;
  games?: GameCreateManyInput | null;
}

export interface PartyInvitationCreateInput {
  id?: ID_Input | null;
  invitedUserId: String;
  partyId: String;
  invitedBy: UserCreateOneInput;
  user: UserCreateOneWithoutPendingPartyInvitationsInput;
  party: PartyCreateOneInput;
}

export interface PartyInvitationCreateManyWithoutUserInput {
  create?: PartyInvitationCreateWithoutUserInput[] | PartyInvitationCreateWithoutUserInput | null;
  connect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null;
}

export interface PartyInvitationCreateWithoutUserInput {
  id?: ID_Input | null;
  invitedUserId: String;
  partyId: String;
  invitedBy: UserCreateOneInput;
  party: PartyCreateOneInput;
}

export interface PartyInvitationScalarWhereInput {
  AND?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null;
  OR?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null;
  NOT?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  invitedUserId?: String | null;
  invitedUserId_not?: String | null;
  invitedUserId_in?: String[] | String | null;
  invitedUserId_not_in?: String[] | String | null;
  invitedUserId_lt?: String | null;
  invitedUserId_lte?: String | null;
  invitedUserId_gt?: String | null;
  invitedUserId_gte?: String | null;
  invitedUserId_contains?: String | null;
  invitedUserId_not_contains?: String | null;
  invitedUserId_starts_with?: String | null;
  invitedUserId_not_starts_with?: String | null;
  invitedUserId_ends_with?: String | null;
  invitedUserId_not_ends_with?: String | null;
  partyId?: String | null;
  partyId_not?: String | null;
  partyId_in?: String[] | String | null;
  partyId_not_in?: String[] | String | null;
  partyId_lt?: String | null;
  partyId_lte?: String | null;
  partyId_gt?: String | null;
  partyId_gte?: String | null;
  partyId_contains?: String | null;
  partyId_not_contains?: String | null;
  partyId_starts_with?: String | null;
  partyId_not_starts_with?: String | null;
  partyId_ends_with?: String | null;
  partyId_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
}

export interface PartyInvitationSubscriptionWhereInput {
  AND?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null;
  OR?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null;
  NOT?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: PartyInvitationWhereInput | null;
}

export interface PartyInvitationUpdateInput {
  invitedUserId?: String | null;
  partyId?: String | null;
  invitedBy?: UserUpdateOneRequiredInput | null;
  user?: UserUpdateOneRequiredWithoutPendingPartyInvitationsInput | null;
  party?: PartyUpdateOneRequiredInput | null;
}

export interface PartyInvitationUpdateManyDataInput {
  invitedUserId?: String | null;
  partyId?: String | null;
}

export interface PartyInvitationUpdateManyMutationInput {
  invitedUserId?: String | null;
  partyId?: String | null;
}

export interface PartyInvitationUpdateManyWithoutUserInput {
  create?: PartyInvitationCreateWithoutUserInput[] | PartyInvitationCreateWithoutUserInput | null;
  connect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null;
  set?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null;
  disconnect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null;
  delete?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null;
  update?: PartyInvitationUpdateWithWhereUniqueWithoutUserInput[] | PartyInvitationUpdateWithWhereUniqueWithoutUserInput | null;
  updateMany?: PartyInvitationUpdateManyWithWhereNestedInput[] | PartyInvitationUpdateManyWithWhereNestedInput | null;
  deleteMany?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null;
  upsert?: PartyInvitationUpsertWithWhereUniqueWithoutUserInput[] | PartyInvitationUpsertWithWhereUniqueWithoutUserInput | null;
}

export interface PartyInvitationUpdateManyWithWhereNestedInput {
  where: PartyInvitationScalarWhereInput;
  data: PartyInvitationUpdateManyDataInput;
}

export interface PartyInvitationUpdateWithoutUserDataInput {
  invitedUserId?: String | null;
  partyId?: String | null;
  invitedBy?: UserUpdateOneRequiredInput | null;
  party?: PartyUpdateOneRequiredInput | null;
}

export interface PartyInvitationUpdateWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput;
  data: PartyInvitationUpdateWithoutUserDataInput;
}

export interface PartyInvitationUpsertWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput;
  update: PartyInvitationUpdateWithoutUserDataInput;
  create: PartyInvitationCreateWithoutUserInput;
}

export interface PartyInvitationWhereInput {
  AND?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null;
  OR?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null;
  NOT?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  invitedUserId?: String | null;
  invitedUserId_not?: String | null;
  invitedUserId_in?: String[] | String | null;
  invitedUserId_not_in?: String[] | String | null;
  invitedUserId_lt?: String | null;
  invitedUserId_lte?: String | null;
  invitedUserId_gt?: String | null;
  invitedUserId_gte?: String | null;
  invitedUserId_contains?: String | null;
  invitedUserId_not_contains?: String | null;
  invitedUserId_starts_with?: String | null;
  invitedUserId_not_starts_with?: String | null;
  invitedUserId_ends_with?: String | null;
  invitedUserId_not_ends_with?: String | null;
  partyId?: String | null;
  partyId_not?: String | null;
  partyId_in?: String[] | String | null;
  partyId_not_in?: String[] | String | null;
  partyId_lt?: String | null;
  partyId_lte?: String | null;
  partyId_gt?: String | null;
  partyId_gte?: String | null;
  partyId_contains?: String | null;
  partyId_not_contains?: String | null;
  partyId_starts_with?: String | null;
  partyId_not_starts_with?: String | null;
  partyId_ends_with?: String | null;
  partyId_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  invitedBy?: UserWhereInput | null;
  user?: UserWhereInput | null;
  party?: PartyWhereInput | null;
}

export interface PartyInvitationWhereUniqueInput {
  id?: ID_Input | null;
}

export interface PartyScalarWhereInput {
  AND?: PartyScalarWhereInput[] | PartyScalarWhereInput | null;
  OR?: PartyScalarWhereInput[] | PartyScalarWhereInput | null;
  NOT?: PartyScalarWhereInput[] | PartyScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  normalizedTitle?: String | null;
  normalizedTitle_not?: String | null;
  normalizedTitle_in?: String[] | String | null;
  normalizedTitle_not_in?: String[] | String | null;
  normalizedTitle_lt?: String | null;
  normalizedTitle_lte?: String | null;
  normalizedTitle_gt?: String | null;
  normalizedTitle_gte?: String | null;
  normalizedTitle_contains?: String | null;
  normalizedTitle_not_contains?: String | null;
  normalizedTitle_starts_with?: String | null;
  normalizedTitle_not_starts_with?: String | null;
  normalizedTitle_ends_with?: String | null;
  normalizedTitle_not_ends_with?: String | null;
  description?: String | null;
  description_not?: String | null;
  description_in?: String[] | String | null;
  description_not_in?: String[] | String | null;
  description_lt?: String | null;
  description_lte?: String | null;
  description_gt?: String | null;
  description_gte?: String | null;
  description_contains?: String | null;
  description_not_contains?: String | null;
  description_starts_with?: String | null;
  description_not_starts_with?: String | null;
  description_ends_with?: String | null;
  description_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  colorTint?: String | null;
  colorTint_not?: String | null;
  colorTint_in?: String[] | String | null;
  colorTint_not_in?: String[] | String | null;
  colorTint_lt?: String | null;
  colorTint_lte?: String | null;
  colorTint_gt?: String | null;
  colorTint_gte?: String | null;
  colorTint_contains?: String | null;
  colorTint_not_contains?: String | null;
  colorTint_starts_with?: String | null;
  colorTint_not_starts_with?: String | null;
  colorTint_ends_with?: String | null;
  colorTint_not_ends_with?: String | null;
  isPublic?: Boolean | null;
  isPublic_not?: Boolean | null;
  start?: DateTime | null;
  start_not?: DateTime | null;
  start_in?: DateTime[] | DateTime | null;
  start_not_in?: DateTime[] | DateTime | null;
  start_lt?: DateTime | null;
  start_lte?: DateTime | null;
  start_gt?: DateTime | null;
  start_gte?: DateTime | null;
  end?: DateTime | null;
  end_not?: DateTime | null;
  end_in?: DateTime[] | DateTime | null;
  end_not_in?: DateTime[] | DateTime | null;
  end_lt?: DateTime | null;
  end_lte?: DateTime | null;
  end_gt?: DateTime | null;
  end_gte?: DateTime | null;
  inviteSecret?: String | null;
  inviteSecret_not?: String | null;
  inviteSecret_in?: String[] | String | null;
  inviteSecret_not_in?: String[] | String | null;
  inviteSecret_lt?: String | null;
  inviteSecret_lte?: String | null;
  inviteSecret_gt?: String | null;
  inviteSecret_gte?: String | null;
  inviteSecret_contains?: String | null;
  inviteSecret_not_contains?: String | null;
  inviteSecret_starts_with?: String | null;
  inviteSecret_not_starts_with?: String | null;
  inviteSecret_ends_with?: String | null;
  inviteSecret_not_ends_with?: String | null;
}

export interface PartySubscriptionWhereInput {
  AND?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null;
  OR?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null;
  NOT?: PartySubscriptionWhereInput[] | PartySubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: PartyWhereInput | null;
}

export interface PartyUpdateDataInput {
  title?: String | null;
  normalizedTitle?: String | null;
  description?: String | null;
  colorTint?: String | null;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret?: String | null;
  author?: UserUpdateOneRequiredInput | null;
  location?: LocationUpdateOneRequiredInput | null;
  games?: GameUpdateManyInput | null;
  members?: UserUpdateManyWithoutPartiesInput | null;
}

export interface PartyUpdateInput {
  title?: String | null;
  normalizedTitle?: String | null;
  description?: String | null;
  colorTint?: String | null;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret?: String | null;
  author?: UserUpdateOneRequiredInput | null;
  location?: LocationUpdateOneRequiredInput | null;
  games?: GameUpdateManyInput | null;
  members?: UserUpdateManyWithoutPartiesInput | null;
}

export interface PartyUpdateManyDataInput {
  title?: String | null;
  normalizedTitle?: String | null;
  description?: String | null;
  colorTint?: String | null;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret?: String | null;
}

export interface PartyUpdateManyMutationInput {
  title?: String | null;
  normalizedTitle?: String | null;
  description?: String | null;
  colorTint?: String | null;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret?: String | null;
}

export interface PartyUpdateManyWithoutMembersInput {
  create?: PartyCreateWithoutMembersInput[] | PartyCreateWithoutMembersInput | null;
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null;
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null;
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null;
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null;
  update?: PartyUpdateWithWhereUniqueWithoutMembersInput[] | PartyUpdateWithWhereUniqueWithoutMembersInput | null;
  updateMany?: PartyUpdateManyWithWhereNestedInput[] | PartyUpdateManyWithWhereNestedInput | null;
  deleteMany?: PartyScalarWhereInput[] | PartyScalarWhereInput | null;
  upsert?: PartyUpsertWithWhereUniqueWithoutMembersInput[] | PartyUpsertWithWhereUniqueWithoutMembersInput | null;
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput;
  data: PartyUpdateManyDataInput;
}

export interface PartyUpdateOneRequiredInput {
  create?: PartyCreateInput | null;
  connect?: PartyWhereUniqueInput | null;
  update?: PartyUpdateDataInput | null;
  upsert?: PartyUpsertNestedInput | null;
}

export interface PartyUpdateWithoutMembersDataInput {
  title?: String | null;
  normalizedTitle?: String | null;
  description?: String | null;
  colorTint?: String | null;
  isPublic?: Boolean | null;
  start?: DateTime | null;
  end?: DateTime | null;
  inviteSecret?: String | null;
  author?: UserUpdateOneRequiredInput | null;
  location?: LocationUpdateOneRequiredInput | null;
  games?: GameUpdateManyInput | null;
}

export interface PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;
  data: PartyUpdateWithoutMembersDataInput;
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput;
  create: PartyCreateInput;
}

export interface PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;
  update: PartyUpdateWithoutMembersDataInput;
  create: PartyCreateWithoutMembersInput;
}

export interface PartyWhereInput {
  AND?: PartyWhereInput[] | PartyWhereInput | null;
  OR?: PartyWhereInput[] | PartyWhereInput | null;
  NOT?: PartyWhereInput[] | PartyWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  normalizedTitle?: String | null;
  normalizedTitle_not?: String | null;
  normalizedTitle_in?: String[] | String | null;
  normalizedTitle_not_in?: String[] | String | null;
  normalizedTitle_lt?: String | null;
  normalizedTitle_lte?: String | null;
  normalizedTitle_gt?: String | null;
  normalizedTitle_gte?: String | null;
  normalizedTitle_contains?: String | null;
  normalizedTitle_not_contains?: String | null;
  normalizedTitle_starts_with?: String | null;
  normalizedTitle_not_starts_with?: String | null;
  normalizedTitle_ends_with?: String | null;
  normalizedTitle_not_ends_with?: String | null;
  description?: String | null;
  description_not?: String | null;
  description_in?: String[] | String | null;
  description_not_in?: String[] | String | null;
  description_lt?: String | null;
  description_lte?: String | null;
  description_gt?: String | null;
  description_gte?: String | null;
  description_contains?: String | null;
  description_not_contains?: String | null;
  description_starts_with?: String | null;
  description_not_starts_with?: String | null;
  description_ends_with?: String | null;
  description_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  colorTint?: String | null;
  colorTint_not?: String | null;
  colorTint_in?: String[] | String | null;
  colorTint_not_in?: String[] | String | null;
  colorTint_lt?: String | null;
  colorTint_lte?: String | null;
  colorTint_gt?: String | null;
  colorTint_gte?: String | null;
  colorTint_contains?: String | null;
  colorTint_not_contains?: String | null;
  colorTint_starts_with?: String | null;
  colorTint_not_starts_with?: String | null;
  colorTint_ends_with?: String | null;
  colorTint_not_ends_with?: String | null;
  isPublic?: Boolean | null;
  isPublic_not?: Boolean | null;
  start?: DateTime | null;
  start_not?: DateTime | null;
  start_in?: DateTime[] | DateTime | null;
  start_not_in?: DateTime[] | DateTime | null;
  start_lt?: DateTime | null;
  start_lte?: DateTime | null;
  start_gt?: DateTime | null;
  start_gte?: DateTime | null;
  end?: DateTime | null;
  end_not?: DateTime | null;
  end_in?: DateTime[] | DateTime | null;
  end_not_in?: DateTime[] | DateTime | null;
  end_lt?: DateTime | null;
  end_lte?: DateTime | null;
  end_gt?: DateTime | null;
  end_gte?: DateTime | null;
  inviteSecret?: String | null;
  inviteSecret_not?: String | null;
  inviteSecret_in?: String[] | String | null;
  inviteSecret_not_in?: String[] | String | null;
  inviteSecret_lt?: String | null;
  inviteSecret_lte?: String | null;
  inviteSecret_gt?: String | null;
  inviteSecret_gte?: String | null;
  inviteSecret_contains?: String | null;
  inviteSecret_not_contains?: String | null;
  inviteSecret_starts_with?: String | null;
  inviteSecret_not_starts_with?: String | null;
  inviteSecret_ends_with?: String | null;
  inviteSecret_not_ends_with?: String | null;
  author?: UserWhereInput | null;
  location?: LocationWhereInput | null;
  games_every?: GameWhereInput | null;
  games_some?: GameWhereInput | null;
  games_none?: GameWhereInput | null;
  members_every?: UserWhereInput | null;
  members_some?: UserWhereInput | null;
  members_none?: UserWhereInput | null;
}

export interface PartyWhereUniqueInput {
  id?: ID_Input | null;
  inviteSecret?: String | null;
}

export interface PlaylistCreateInput {
  id?: ID_Input | null;
  playlist_id?: String | null;
  name: String;
  isTemporary?: Boolean | null;
  tracks?: TrackCreateManyInput | null;
}

export interface PlaylistSubscriptionWhereInput {
  AND?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null;
  OR?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null;
  NOT?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: PlaylistWhereInput | null;
}

export interface PlaylistUpdateInput {
  playlist_id?: String | null;
  name?: String | null;
  isTemporary?: Boolean | null;
  tracks?: TrackUpdateManyInput | null;
}

export interface PlaylistUpdateManyMutationInput {
  playlist_id?: String | null;
  name?: String | null;
  isTemporary?: Boolean | null;
}

export interface PlaylistWhereInput {
  AND?: PlaylistWhereInput[] | PlaylistWhereInput | null;
  OR?: PlaylistWhereInput[] | PlaylistWhereInput | null;
  NOT?: PlaylistWhereInput[] | PlaylistWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  playlist_id?: String | null;
  playlist_id_not?: String | null;
  playlist_id_in?: String[] | String | null;
  playlist_id_not_in?: String[] | String | null;
  playlist_id_lt?: String | null;
  playlist_id_lte?: String | null;
  playlist_id_gt?: String | null;
  playlist_id_gte?: String | null;
  playlist_id_contains?: String | null;
  playlist_id_not_contains?: String | null;
  playlist_id_starts_with?: String | null;
  playlist_id_not_starts_with?: String | null;
  playlist_id_ends_with?: String | null;
  playlist_id_not_ends_with?: String | null;
  name?: String | null;
  name_not?: String | null;
  name_in?: String[] | String | null;
  name_not_in?: String[] | String | null;
  name_lt?: String | null;
  name_lte?: String | null;
  name_gt?: String | null;
  name_gte?: String | null;
  name_contains?: String | null;
  name_not_contains?: String | null;
  name_starts_with?: String | null;
  name_not_starts_with?: String | null;
  name_ends_with?: String | null;
  name_not_ends_with?: String | null;
  isTemporary?: Boolean | null;
  isTemporary_not?: Boolean | null;
  tracks_every?: TrackWhereInput | null;
  tracks_some?: TrackWhereInput | null;
  tracks_none?: TrackWhereInput | null;
}

export interface PlaylistWhereUniqueInput {
  id?: ID_Input | null;
  playlist_id?: String | null;
}

export interface TrackCreateInput {
  id?: ID_Input | null;
  name: String;
  duration: Int;
  preview_url: String;
  album: AlbumCreateOneInput;
  artists?: ArtistCreateManyInput | null;
}

export interface TrackCreateManyInput {
  create?: TrackCreateInput[] | TrackCreateInput | null;
  connect?: TrackWhereUniqueInput[] | TrackWhereUniqueInput | null;
}

export interface TrackScalarWhereInput {
  AND?: TrackScalarWhereInput[] | TrackScalarWhereInput | null;
  OR?: TrackScalarWhereInput[] | TrackScalarWhereInput | null;
  NOT?: TrackScalarWhereInput[] | TrackScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  name?: String | null;
  name_not?: String | null;
  name_in?: String[] | String | null;
  name_not_in?: String[] | String | null;
  name_lt?: String | null;
  name_lte?: String | null;
  name_gt?: String | null;
  name_gte?: String | null;
  name_contains?: String | null;
  name_not_contains?: String | null;
  name_starts_with?: String | null;
  name_not_starts_with?: String | null;
  name_ends_with?: String | null;
  name_not_ends_with?: String | null;
  duration?: Int | null;
  duration_not?: Int | null;
  duration_in?: Int[] | Int | null;
  duration_not_in?: Int[] | Int | null;
  duration_lt?: Int | null;
  duration_lte?: Int | null;
  duration_gt?: Int | null;
  duration_gte?: Int | null;
  preview_url?: String | null;
  preview_url_not?: String | null;
  preview_url_in?: String[] | String | null;
  preview_url_not_in?: String[] | String | null;
  preview_url_lt?: String | null;
  preview_url_lte?: String | null;
  preview_url_gt?: String | null;
  preview_url_gte?: String | null;
  preview_url_contains?: String | null;
  preview_url_not_contains?: String | null;
  preview_url_starts_with?: String | null;
  preview_url_not_starts_with?: String | null;
  preview_url_ends_with?: String | null;
  preview_url_not_ends_with?: String | null;
}

export interface TrackSubscriptionWhereInput {
  AND?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null;
  OR?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null;
  NOT?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: TrackWhereInput | null;
}

export interface TrackUpdateDataInput {
  name?: String | null;
  duration?: Int | null;
  preview_url?: String | null;
  album?: AlbumUpdateOneRequiredInput | null;
  artists?: ArtistUpdateManyInput | null;
}

export interface TrackUpdateInput {
  name?: String | null;
  duration?: Int | null;
  preview_url?: String | null;
  album?: AlbumUpdateOneRequiredInput | null;
  artists?: ArtistUpdateManyInput | null;
}

export interface TrackUpdateManyDataInput {
  name?: String | null;
  duration?: Int | null;
  preview_url?: String | null;
}

export interface TrackUpdateManyInput {
  create?: TrackCreateInput[] | TrackCreateInput | null;
  connect?: TrackWhereUniqueInput[] | TrackWhereUniqueInput | null;
  set?: TrackWhereUniqueInput[] | TrackWhereUniqueInput | null;
  disconnect?: TrackWhereUniqueInput[] | TrackWhereUniqueInput | null;
  delete?: TrackWhereUniqueInput[] | TrackWhereUniqueInput | null;
  update?: TrackUpdateWithWhereUniqueNestedInput[] | TrackUpdateWithWhereUniqueNestedInput | null;
  updateMany?: TrackUpdateManyWithWhereNestedInput[] | TrackUpdateManyWithWhereNestedInput | null;
  deleteMany?: TrackScalarWhereInput[] | TrackScalarWhereInput | null;
  upsert?: TrackUpsertWithWhereUniqueNestedInput[] | TrackUpsertWithWhereUniqueNestedInput | null;
}

export interface TrackUpdateManyMutationInput {
  name?: String | null;
  duration?: Int | null;
  preview_url?: String | null;
}

export interface TrackUpdateManyWithWhereNestedInput {
  where: TrackScalarWhereInput;
  data: TrackUpdateManyDataInput;
}

export interface TrackUpdateWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;
  data: TrackUpdateDataInput;
}

export interface TrackUpsertWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;
  update: TrackUpdateDataInput;
  create: TrackCreateInput;
}

export interface TrackWhereInput {
  AND?: TrackWhereInput[] | TrackWhereInput | null;
  OR?: TrackWhereInput[] | TrackWhereInput | null;
  NOT?: TrackWhereInput[] | TrackWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  name?: String | null;
  name_not?: String | null;
  name_in?: String[] | String | null;
  name_not_in?: String[] | String | null;
  name_lt?: String | null;
  name_lte?: String | null;
  name_gt?: String | null;
  name_gte?: String | null;
  name_contains?: String | null;
  name_not_contains?: String | null;
  name_starts_with?: String | null;
  name_not_starts_with?: String | null;
  name_ends_with?: String | null;
  name_not_ends_with?: String | null;
  duration?: Int | null;
  duration_not?: Int | null;
  duration_in?: Int[] | Int | null;
  duration_not_in?: Int[] | Int | null;
  duration_lt?: Int | null;
  duration_lte?: Int | null;
  duration_gt?: Int | null;
  duration_gte?: Int | null;
  preview_url?: String | null;
  preview_url_not?: String | null;
  preview_url_in?: String[] | String | null;
  preview_url_not_in?: String[] | String | null;
  preview_url_lt?: String | null;
  preview_url_lte?: String | null;
  preview_url_gt?: String | null;
  preview_url_gte?: String | null;
  preview_url_contains?: String | null;
  preview_url_not_contains?: String | null;
  preview_url_starts_with?: String | null;
  preview_url_not_starts_with?: String | null;
  preview_url_ends_with?: String | null;
  preview_url_not_ends_with?: String | null;
  album?: AlbumWhereInput | null;
  artists_every?: ArtistWhereInput | null;
  artists_some?: ArtistWhereInput | null;
  artists_none?: ArtistWhereInput | null;
}

export interface TrackWhereUniqueInput {
  id?: ID_Input | null;
}

export interface UserCreateInput {
  id?: ID_Input | null;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyCreateManyWithoutMembersInput | null;
  friends?: UserCreateManyInput | null;
  pendingFriendInvitations?: UserCreateManyInput | null;
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null;
  chats?: ChatCreateManyWithoutMembersInput | null;
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
}

export interface UserCreateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
}

export interface UserCreateManyWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput[] | UserCreateWithoutPartiesInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutPendingPartyInvitationsInput {
  create?: UserCreateWithoutPendingPartyInvitationsInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutChatsInput {
  id?: ID_Input | null;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyCreateManyWithoutMembersInput | null;
  friends?: UserCreateManyInput | null;
  pendingFriendInvitations?: UserCreateManyInput | null;
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null;
}

export interface UserCreateWithoutPartiesInput {
  id?: ID_Input | null;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  friends?: UserCreateManyInput | null;
  pendingFriendInvitations?: UserCreateManyInput | null;
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null;
  chats?: ChatCreateManyWithoutMembersInput | null;
}

export interface UserCreateWithoutPendingPartyInvitationsInput {
  id?: ID_Input | null;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyCreateManyWithoutMembersInput | null;
  friends?: UserCreateManyInput | null;
  pendingFriendInvitations?: UserCreateManyInput | null;
  chats?: ChatCreateManyWithoutMembersInput | null;
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  email?: String | null;
  email_not?: String | null;
  email_in?: String[] | String | null;
  email_not_in?: String[] | String | null;
  email_lt?: String | null;
  email_lte?: String | null;
  email_gt?: String | null;
  email_gte?: String | null;
  email_contains?: String | null;
  email_not_contains?: String | null;
  email_starts_with?: String | null;
  email_not_starts_with?: String | null;
  email_ends_with?: String | null;
  email_not_ends_with?: String | null;
  firstName?: String | null;
  firstName_not?: String | null;
  firstName_in?: String[] | String | null;
  firstName_not_in?: String[] | String | null;
  firstName_lt?: String | null;
  firstName_lte?: String | null;
  firstName_gt?: String | null;
  firstName_gte?: String | null;
  firstName_contains?: String | null;
  firstName_not_contains?: String | null;
  firstName_starts_with?: String | null;
  firstName_not_starts_with?: String | null;
  firstName_ends_with?: String | null;
  firstName_not_ends_with?: String | null;
  lastName?: String | null;
  lastName_not?: String | null;
  lastName_in?: String[] | String | null;
  lastName_not_in?: String[] | String | null;
  lastName_lt?: String | null;
  lastName_lte?: String | null;
  lastName_gt?: String | null;
  lastName_gte?: String | null;
  lastName_contains?: String | null;
  lastName_not_contains?: String | null;
  lastName_starts_with?: String | null;
  lastName_not_starts_with?: String | null;
  lastName_ends_with?: String | null;
  lastName_not_ends_with?: String | null;
  password?: String | null;
  password_not?: String | null;
  password_in?: String[] | String | null;
  password_not_in?: String[] | String | null;
  password_lt?: String | null;
  password_lte?: String | null;
  password_gt?: String | null;
  password_gte?: String | null;
  password_contains?: String | null;
  password_not_contains?: String | null;
  password_starts_with?: String | null;
  password_not_starts_with?: String | null;
  password_ends_with?: String | null;
  password_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  lastOnline?: DateTime | null;
  lastOnline_not?: DateTime | null;
  lastOnline_in?: DateTime[] | DateTime | null;
  lastOnline_not_in?: DateTime[] | DateTime | null;
  lastOnline_lt?: DateTime | null;
  lastOnline_lte?: DateTime | null;
  lastOnline_gt?: DateTime | null;
  lastOnline_gte?: DateTime | null;
  deleted?: Boolean | null;
  deleted_not?: Boolean | null;
  provider?: SocialMediaType | null;
  provider_not?: SocialMediaType | null;
  provider_in?: SocialMediaType[] | SocialMediaType | null;
  provider_not_in?: SocialMediaType[] | SocialMediaType | null;
  avatar?: String | null;
  avatar_not?: String | null;
  avatar_in?: String[] | String | null;
  avatar_not_in?: String[] | String | null;
  avatar_lt?: String | null;
  avatar_lte?: String | null;
  avatar_gt?: String | null;
  avatar_gte?: String | null;
  avatar_contains?: String | null;
  avatar_not_contains?: String | null;
  avatar_starts_with?: String | null;
  avatar_not_starts_with?: String | null;
  avatar_ends_with?: String | null;
  avatar_not_ends_with?: String | null;
  thirdPartyId?: String | null;
  thirdPartyId_not?: String | null;
  thirdPartyId_in?: String[] | String | null;
  thirdPartyId_not_in?: String[] | String | null;
  thirdPartyId_lt?: String | null;
  thirdPartyId_lte?: String | null;
  thirdPartyId_gt?: String | null;
  thirdPartyId_gte?: String | null;
  thirdPartyId_contains?: String | null;
  thirdPartyId_not_contains?: String | null;
  thirdPartyId_starts_with?: String | null;
  thirdPartyId_not_starts_with?: String | null;
  thirdPartyId_ends_with?: String | null;
  thirdPartyId_not_ends_with?: String | null;
  resetToken?: String | null;
  resetToken_not?: String | null;
  resetToken_in?: String[] | String | null;
  resetToken_not_in?: String[] | String | null;
  resetToken_lt?: String | null;
  resetToken_lte?: String | null;
  resetToken_gt?: String | null;
  resetToken_gte?: String | null;
  resetToken_contains?: String | null;
  resetToken_not_contains?: String | null;
  resetToken_starts_with?: String | null;
  resetToken_not_starts_with?: String | null;
  resetToken_ends_with?: String | null;
  resetToken_not_ends_with?: String | null;
  resetTokenExpiry?: DateTime | null;
  resetTokenExpiry_not?: DateTime | null;
  resetTokenExpiry_in?: DateTime[] | DateTime | null;
  resetTokenExpiry_not_in?: DateTime[] | DateTime | null;
  resetTokenExpiry_lt?: DateTime | null;
  resetTokenExpiry_lte?: DateTime | null;
  resetTokenExpiry_gt?: DateTime | null;
  resetTokenExpiry_gte?: DateTime | null;
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: UserWhereInput | null;
}

export interface UserUpdateDataInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyUpdateManyWithoutMembersInput | null;
  friends?: UserUpdateManyInput | null;
  pendingFriendInvitations?: UserUpdateManyInput | null;
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null;
  chats?: ChatUpdateManyWithoutMembersInput | null;
}

export interface UserUpdateInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyUpdateManyWithoutMembersInput | null;
  friends?: UserUpdateManyInput | null;
  pendingFriendInvitations?: UserUpdateManyInput | null;
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null;
  chats?: ChatUpdateManyWithoutMembersInput | null;
}

export interface UserUpdateManyDataInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput | null;
}

export interface UserUpdateManyMutationInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
}

export interface UserUpdateManyWithoutChatsInput {
  create?: UserCreateWithoutChatsInput[] | UserCreateWithoutChatsInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  update?: UserUpdateWithWhereUniqueWithoutChatsInput[] | UserUpdateWithWhereUniqueWithoutChatsInput | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  upsert?: UserUpsertWithWhereUniqueWithoutChatsInput[] | UserUpsertWithWhereUniqueWithoutChatsInput | null;
}

export interface UserUpdateManyWithoutPartiesInput {
  create?: UserCreateWithoutPartiesInput[] | UserCreateWithoutPartiesInput | null;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null;
  update?: UserUpdateWithWhereUniqueWithoutPartiesInput[] | UserUpdateWithWhereUniqueWithoutPartiesInput | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null;
  upsert?: UserUpsertWithWhereUniqueWithoutPartiesInput[] | UserUpsertWithWhereUniqueWithoutPartiesInput | null;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
  update?: UserUpdateDataInput | null;
  upsert?: UserUpsertNestedInput | null;
}

export interface UserUpdateOneRequiredWithoutPendingPartyInvitationsInput {
  create?: UserCreateWithoutPendingPartyInvitationsInput | null;
  connect?: UserWhereUniqueInput | null;
  update?: UserUpdateWithoutPendingPartyInvitationsDataInput | null;
  upsert?: UserUpsertWithoutPendingPartyInvitationsInput | null;
}

export interface UserUpdateWithoutChatsDataInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyUpdateManyWithoutMembersInput | null;
  friends?: UserUpdateManyInput | null;
  pendingFriendInvitations?: UserUpdateManyInput | null;
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null;
}

export interface UserUpdateWithoutPartiesDataInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  friends?: UserUpdateManyInput | null;
  pendingFriendInvitations?: UserUpdateManyInput | null;
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null;
  chats?: ChatUpdateManyWithoutMembersInput | null;
}

export interface UserUpdateWithoutPendingPartyInvitationsDataInput {
  email?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  password?: String | null;
  lastOnline?: DateTime | null;
  deleted?: Boolean | null;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
  parties?: PartyUpdateManyWithoutMembersInput | null;
  friends?: UserUpdateManyInput | null;
  pendingFriendInvitations?: UserUpdateManyInput | null;
  chats?: ChatUpdateManyWithoutMembersInput | null;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutChatsDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutPartiesDataInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpsertWithoutPendingPartyInvitationsInput {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput;
  create: UserCreateWithoutPendingPartyInvitationsInput;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutChatsDataInput;
  create: UserCreateWithoutChatsInput;
}

export interface UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutPartiesDataInput;
  create: UserCreateWithoutPartiesInput;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null;
  OR?: UserWhereInput[] | UserWhereInput | null;
  NOT?: UserWhereInput[] | UserWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  email?: String | null;
  email_not?: String | null;
  email_in?: String[] | String | null;
  email_not_in?: String[] | String | null;
  email_lt?: String | null;
  email_lte?: String | null;
  email_gt?: String | null;
  email_gte?: String | null;
  email_contains?: String | null;
  email_not_contains?: String | null;
  email_starts_with?: String | null;
  email_not_starts_with?: String | null;
  email_ends_with?: String | null;
  email_not_ends_with?: String | null;
  firstName?: String | null;
  firstName_not?: String | null;
  firstName_in?: String[] | String | null;
  firstName_not_in?: String[] | String | null;
  firstName_lt?: String | null;
  firstName_lte?: String | null;
  firstName_gt?: String | null;
  firstName_gte?: String | null;
  firstName_contains?: String | null;
  firstName_not_contains?: String | null;
  firstName_starts_with?: String | null;
  firstName_not_starts_with?: String | null;
  firstName_ends_with?: String | null;
  firstName_not_ends_with?: String | null;
  lastName?: String | null;
  lastName_not?: String | null;
  lastName_in?: String[] | String | null;
  lastName_not_in?: String[] | String | null;
  lastName_lt?: String | null;
  lastName_lte?: String | null;
  lastName_gt?: String | null;
  lastName_gte?: String | null;
  lastName_contains?: String | null;
  lastName_not_contains?: String | null;
  lastName_starts_with?: String | null;
  lastName_not_starts_with?: String | null;
  lastName_ends_with?: String | null;
  lastName_not_ends_with?: String | null;
  password?: String | null;
  password_not?: String | null;
  password_in?: String[] | String | null;
  password_not_in?: String[] | String | null;
  password_lt?: String | null;
  password_lte?: String | null;
  password_gt?: String | null;
  password_gte?: String | null;
  password_contains?: String | null;
  password_not_contains?: String | null;
  password_starts_with?: String | null;
  password_not_starts_with?: String | null;
  password_ends_with?: String | null;
  password_not_ends_with?: String | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  lastOnline?: DateTime | null;
  lastOnline_not?: DateTime | null;
  lastOnline_in?: DateTime[] | DateTime | null;
  lastOnline_not_in?: DateTime[] | DateTime | null;
  lastOnline_lt?: DateTime | null;
  lastOnline_lte?: DateTime | null;
  lastOnline_gt?: DateTime | null;
  lastOnline_gte?: DateTime | null;
  deleted?: Boolean | null;
  deleted_not?: Boolean | null;
  provider?: SocialMediaType | null;
  provider_not?: SocialMediaType | null;
  provider_in?: SocialMediaType[] | SocialMediaType | null;
  provider_not_in?: SocialMediaType[] | SocialMediaType | null;
  avatar?: String | null;
  avatar_not?: String | null;
  avatar_in?: String[] | String | null;
  avatar_not_in?: String[] | String | null;
  avatar_lt?: String | null;
  avatar_lte?: String | null;
  avatar_gt?: String | null;
  avatar_gte?: String | null;
  avatar_contains?: String | null;
  avatar_not_contains?: String | null;
  avatar_starts_with?: String | null;
  avatar_not_starts_with?: String | null;
  avatar_ends_with?: String | null;
  avatar_not_ends_with?: String | null;
  thirdPartyId?: String | null;
  thirdPartyId_not?: String | null;
  thirdPartyId_in?: String[] | String | null;
  thirdPartyId_not_in?: String[] | String | null;
  thirdPartyId_lt?: String | null;
  thirdPartyId_lte?: String | null;
  thirdPartyId_gt?: String | null;
  thirdPartyId_gte?: String | null;
  thirdPartyId_contains?: String | null;
  thirdPartyId_not_contains?: String | null;
  thirdPartyId_starts_with?: String | null;
  thirdPartyId_not_starts_with?: String | null;
  thirdPartyId_ends_with?: String | null;
  thirdPartyId_not_ends_with?: String | null;
  resetToken?: String | null;
  resetToken_not?: String | null;
  resetToken_in?: String[] | String | null;
  resetToken_not_in?: String[] | String | null;
  resetToken_lt?: String | null;
  resetToken_lte?: String | null;
  resetToken_gt?: String | null;
  resetToken_gte?: String | null;
  resetToken_contains?: String | null;
  resetToken_not_contains?: String | null;
  resetToken_starts_with?: String | null;
  resetToken_not_starts_with?: String | null;
  resetToken_ends_with?: String | null;
  resetToken_not_ends_with?: String | null;
  resetTokenExpiry?: DateTime | null;
  resetTokenExpiry_not?: DateTime | null;
  resetTokenExpiry_in?: DateTime[] | DateTime | null;
  resetTokenExpiry_not_in?: DateTime[] | DateTime | null;
  resetTokenExpiry_lt?: DateTime | null;
  resetTokenExpiry_lte?: DateTime | null;
  resetTokenExpiry_gt?: DateTime | null;
  resetTokenExpiry_gte?: DateTime | null;
  parties_every?: PartyWhereInput | null;
  parties_some?: PartyWhereInput | null;
  parties_none?: PartyWhereInput | null;
  friends_every?: UserWhereInput | null;
  friends_some?: UserWhereInput | null;
  friends_none?: UserWhereInput | null;
  pendingFriendInvitations_every?: UserWhereInput | null;
  pendingFriendInvitations_some?: UserWhereInput | null;
  pendingFriendInvitations_none?: UserWhereInput | null;
  pendingPartyInvitations_every?: PartyInvitationWhereInput | null;
  pendingPartyInvitations_some?: PartyInvitationWhereInput | null;
  pendingPartyInvitations_none?: PartyInvitationWhereInput | null;
  chats_every?: ChatWhereInput | null;
  chats_some?: ChatWhereInput | null;
  chats_none?: ChatWhereInput | null;
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null;
  email?: String | null;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface AggregateAlbum {
  count: Int;
}

export interface AggregateArtist {
  count: Int;
}

export interface AggregateChat {
  count: Int;
}

export interface AggregateGame {
  count: Int;
}

export interface AggregateImage {
  count: Int;
}

export interface AggregateLocation {
  count: Int;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateParty {
  count: Int;
}

export interface AggregatePartyInvitation {
  count: Int;
}

export interface AggregatePlaylist {
  count: Int;
}

export interface AggregateTrack {
  count: Int;
}

export interface AggregateUser {
  count: Int;
}

export interface Album extends Node {
  id: ID_Output;
  images?: Image[] | null;
  artists?: Artist[] | null;
}

/*
 * A connection to a list of items.

 */
export interface AlbumConnection {
  pageInfo: PageInfo;
  edges: Array<AlbumEdge | null>;
  aggregate: AggregateAlbum;
}

/*
 * An edge in a connection.

 */
export interface AlbumEdge {
  node: Album;
  cursor: String;
}

export interface AlbumPreviousValues {
  id: ID_Output;
}

export interface AlbumSubscriptionPayload {
  mutation: MutationType;
  node?: Album | null;
  updatedFields?: String[] | null;
  previousValues?: AlbumPreviousValues | null;
}

export interface Artist extends Node {
  id: ID_Output;
  name: String;
}

/*
 * A connection to a list of items.

 */
export interface ArtistConnection {
  pageInfo: PageInfo;
  edges: Array<ArtistEdge | null>;
  aggregate: AggregateArtist;
}

/*
 * An edge in a connection.

 */
export interface ArtistEdge {
  node: Artist;
  cursor: String;
}

export interface ArtistPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ArtistSubscriptionPayload {
  mutation: MutationType;
  node?: Artist | null;
  updatedFields?: String[] | null;
  previousValues?: ArtistPreviousValues | null;
}

export interface BatchPayload {
  count: Long;
}

export interface Chat extends Node {
  id: ID_Output;
  party: Party;
  members?: User[] | null;
  messages?: Message[] | null;
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface ChatConnection {
  pageInfo: PageInfo;
  edges: Array<ChatEdge | null>;
  aggregate: AggregateChat;
}

/*
 * An edge in a connection.

 */
export interface ChatEdge {
  node: Chat;
  cursor: String;
}

export interface ChatPreviousValues {
  id: ID_Output;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface ChatSubscriptionPayload {
  mutation: MutationType;
  node?: Chat | null;
  updatedFields?: String[] | null;
  previousValues?: ChatPreviousValues | null;
}

export interface Game extends Node {
  id: ID_Output;
  title: String;
  cover?: String | null;
  type: GameType;
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface GameConnection {
  pageInfo: PageInfo;
  edges: Array<GameEdge | null>;
  aggregate: AggregateGame;
}

/*
 * An edge in a connection.

 */
export interface GameEdge {
  node: Game;
  cursor: String;
}

export interface GamePreviousValues {
  id: ID_Output;
  title: String;
  cover?: String | null;
  type: GameType;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GameSubscriptionPayload {
  mutation: MutationType;
  node?: Game | null;
  updatedFields?: String[] | null;
  previousValues?: GamePreviousValues | null;
}

export interface Image extends Node {
  id: ID_Output;
  height: Int;
  width: Int;
  url: String;
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo;
  edges: Array<ImageEdge | null>;
  aggregate: AggregateImage;
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image;
  cursor: String;
}

export interface ImagePreviousValues {
  id: ID_Output;
  height: Int;
  width: Int;
  url: String;
}

export interface ImageSubscriptionPayload {
  mutation: MutationType;
  node?: Image | null;
  updatedFields?: String[] | null;
  previousValues?: ImagePreviousValues | null;
}

export interface Location extends Node {
  id: ID_Output;
  placeName: String;
  latitude: Float;
  longitude: Float;
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo;
  edges: Array<LocationEdge | null>;
  aggregate: AggregateLocation;
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location;
  cursor: String;
}

export interface LocationPreviousValues {
  id: ID_Output;
  placeName: String;
  latitude: Float;
  longitude: Float;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface LocationSubscriptionPayload {
  mutation: MutationType;
  node?: Location | null;
  updatedFields?: String[] | null;
  previousValues?: LocationPreviousValues | null;
}

export interface Message extends Node {
  id: ID_Output;
  author: User;
  chat: Chat;
  content: String;
  createdAt: DateTime;
  updatedAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo;
  edges: Array<MessageEdge | null>;
  aggregate: AggregateMessage;
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessagePreviousValues {
  id: ID_Output;
  content: String;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node?: Message | null;
  updatedFields?: String[] | null;
  previousValues?: MessagePreviousValues | null;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String | null;
  endCursor?: String | null;
}

export interface Party extends Node {
  id: ID_Output;
  title: String;
  normalizedTitle: String;
  description: String;
  author: User;
  createdAt: DateTime;
  updatedAt: DateTime;
  location: Location;
  games?: Game[] | null;
  colorTint: String;
  isPublic?: Boolean | null;
  members?: User[] | null;
  start: DateTime;
  end: DateTime;
  inviteSecret: String;
}

/*
 * A connection to a list of items.

 */
export interface PartyConnection {
  pageInfo: PageInfo;
  edges: Array<PartyEdge | null>;
  aggregate: AggregateParty;
}

/*
 * An edge in a connection.

 */
export interface PartyEdge {
  node: Party;
  cursor: String;
}

export interface PartyInvitation extends Node {
  id: ID_Output;
  invitedBy: User;
  user: User;
  party: Party;
  invitedUserId: String;
  partyId: String;
  createdAt: DateTime;
}

/*
 * A connection to a list of items.

 */
export interface PartyInvitationConnection {
  pageInfo: PageInfo;
  edges: Array<PartyInvitationEdge | null>;
  aggregate: AggregatePartyInvitation;
}

/*
 * An edge in a connection.

 */
export interface PartyInvitationEdge {
  node: PartyInvitation;
  cursor: String;
}

export interface PartyInvitationPreviousValues {
  id: ID_Output;
  invitedUserId: String;
  partyId: String;
  createdAt: DateTime;
}

export interface PartyInvitationSubscriptionPayload {
  mutation: MutationType;
  node?: PartyInvitation | null;
  updatedFields?: String[] | null;
  previousValues?: PartyInvitationPreviousValues | null;
}

export interface PartyPreviousValues {
  id: ID_Output;
  title: String;
  normalizedTitle: String;
  description: String;
  createdAt: DateTime;
  updatedAt: DateTime;
  colorTint: String;
  isPublic?: Boolean | null;
  start: DateTime;
  end: DateTime;
  inviteSecret: String;
}

export interface PartySubscriptionPayload {
  mutation: MutationType;
  node?: Party | null;
  updatedFields?: String[] | null;
  previousValues?: PartyPreviousValues | null;
}

export interface Playlist extends Node {
  id: ID_Output;
  playlist_id?: String | null;
  name: String;
  tracks?: Track[] | null;
  isTemporary?: Boolean | null;
}

/*
 * A connection to a list of items.

 */
export interface PlaylistConnection {
  pageInfo: PageInfo;
  edges: Array<PlaylistEdge | null>;
  aggregate: AggregatePlaylist;
}

/*
 * An edge in a connection.

 */
export interface PlaylistEdge {
  node: Playlist;
  cursor: String;
}

export interface PlaylistPreviousValues {
  id: ID_Output;
  playlist_id?: String | null;
  name: String;
  isTemporary?: Boolean | null;
}

export interface PlaylistSubscriptionPayload {
  mutation: MutationType;
  node?: Playlist | null;
  updatedFields?: String[] | null;
  previousValues?: PlaylistPreviousValues | null;
}

export interface Track extends Node {
  id: ID_Output;
  name: String;
  album: Album;
  artists?: Artist[] | null;
  duration: Int;
  preview_url: String;
}

/*
 * A connection to a list of items.

 */
export interface TrackConnection {
  pageInfo: PageInfo;
  edges: Array<TrackEdge | null>;
  aggregate: AggregateTrack;
}

/*
 * An edge in a connection.

 */
export interface TrackEdge {
  node: Track;
  cursor: String;
}

export interface TrackPreviousValues {
  id: ID_Output;
  name: String;
  duration: Int;
  preview_url: String;
}

export interface TrackSubscriptionPayload {
  mutation: MutationType;
  node?: Track | null;
  updatedFields?: String[] | null;
  previousValues?: TrackPreviousValues | null;
}

export interface User extends Node {
  id: ID_Output;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  parties?: Party[] | null;
  friends?: User[] | null;
  pendingFriendInvitations?: User[] | null;
  pendingPartyInvitations?: PartyInvitation[] | null;
  chats?: Chat[] | null;
  createdAt: DateTime;
  updatedAt: DateTime;
  lastOnline?: DateTime | null;
  deleted: Boolean;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: Array<UserEdge | null>;
  aggregate: AggregateUser;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  createdAt: DateTime;
  updatedAt: DateTime;
  lastOnline?: DateTime | null;
  deleted: Boolean;
  provider?: SocialMediaType | null;
  avatar?: String | null;
  thirdPartyId?: String | null;
  resetToken?: String | null;
  resetTokenExpiry?: DateTime | null;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node?: User | null;
  updatedFields?: String[] | null;
  previousValues?: UserPreviousValues | null;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type DateTime = Date | string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;
