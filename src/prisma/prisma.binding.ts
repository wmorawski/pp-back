import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    album: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    albums: <T = Array<Album | null>>(args: { where?: AlbumWhereInput | null, orderBy?: AlbumOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    albumsConnection: <T = AlbumConnection>(args: { where?: AlbumWhereInput | null, orderBy?: AlbumOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    artists: <T = Array<Artist | null>>(args: { where?: ArtistWhereInput | null, orderBy?: ArtistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    artistsConnection: <T = ArtistConnection>(args: { where?: ArtistWhereInput | null, orderBy?: ArtistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    chats: <T = Array<Chat | null>>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput | null, orderBy?: ChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    friendInvitation: <T = FriendInvitation | null>(args: { where: FriendInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    friendInvitations: <T = Array<FriendInvitation | null>>(args: { where?: FriendInvitationWhereInput | null, orderBy?: FriendInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    friendInvitationsConnection: <T = FriendInvitationConnection>(args: { where?: FriendInvitationWhereInput | null, orderBy?: FriendInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    game: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    games: <T = Array<Game | null>>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    gamesConnection: <T = GameConnection>(args: { where?: GameWhereInput | null, orderBy?: GameOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    images: <T = Array<Image | null>>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    messages: <T = Array<Message | null>>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput | null, orderBy?: MessageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    party: <T = Party | null>(args: { where: PartyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    parties: <T = Array<Party | null>>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partiesConnection: <T = PartyConnection>(args: { where?: PartyWhereInput | null, orderBy?: PartyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyCart: <T = PartyCart | null>(args: { where: PartyCartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    partyCarts: <T = Array<PartyCart | null>>(args: { where?: PartyCartWhereInput | null, orderBy?: PartyCartOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyCartsConnection: <T = PartyCartConnection>(args: { where?: PartyCartWhereInput | null, orderBy?: PartyCartOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyCartItem: <T = PartyCartItem | null>(args: { where: PartyCartItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    partyCartItems: <T = Array<PartyCartItem | null>>(args: { where?: PartyCartItemWhereInput | null, orderBy?: PartyCartItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyCartItemsConnection: <T = PartyCartItemConnection>(args: { where?: PartyCartItemWhereInput | null, orderBy?: PartyCartItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyInvitation: <T = PartyInvitation | null>(args: { where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    partyInvitations: <T = Array<PartyInvitation | null>>(args: { where?: PartyInvitationWhereInput | null, orderBy?: PartyInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partyInvitationsConnection: <T = PartyInvitationConnection>(args: { where?: PartyInvitationWhereInput | null, orderBy?: PartyInvitationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partySavedTrack: <T = PartySavedTrack | null>(args: { where: PartySavedTrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    partySavedTracks: <T = Array<PartySavedTrack | null>>(args: { where?: PartySavedTrackWhereInput | null, orderBy?: PartySavedTrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    partySavedTracksConnection: <T = PartySavedTrackConnection>(args: { where?: PartySavedTrackWhereInput | null, orderBy?: PartySavedTrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    playlist: <T = Playlist | null>(args: { where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    playlists: <T = Array<Playlist | null>>(args: { where?: PlaylistWhereInput | null, orderBy?: PlaylistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    playlistsConnection: <T = PlaylistConnection>(args: { where?: PlaylistWhereInput | null, orderBy?: PlaylistOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    track: <T = Track | null>(args: { where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tracks: <T = Array<Track | null>>(args: { where?: TrackWhereInput | null, orderBy?: TrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tracksConnection: <T = TrackConnection>(args: { where?: TrackWhereInput | null, orderBy?: TrackOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createAlbum: <T = Album>(args: { data: AlbumCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlbum: <T = Album | null>(args: { data: AlbumUpdateInput, where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyAlbums: <T = BatchPayload>(args: { data: AlbumUpdateManyMutationInput, where?: AlbumWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlbum: <T = Album>(args: { where: AlbumWhereUniqueInput, create: AlbumCreateInput, update: AlbumUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlbum: <T = Album | null>(args: { where: AlbumWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyAlbums: <T = BatchPayload>(args: { where?: AlbumWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createArtist: <T = Artist>(args: { data: ArtistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateArtist: <T = Artist | null>(args: { data: ArtistUpdateInput, where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyArtists: <T = BatchPayload>(args: { data: ArtistUpdateManyMutationInput, where?: ArtistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertArtist: <T = Artist>(args: { where: ArtistWhereUniqueInput, create: ArtistCreateInput, update: ArtistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteArtist: <T = Artist | null>(args: { where: ArtistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyArtists: <T = BatchPayload>(args: { where?: ArtistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFriendInvitation: <T = FriendInvitation>(args: { data: FriendInvitationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFriendInvitation: <T = FriendInvitation | null>(args: { data: FriendInvitationUpdateInput, where: FriendInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFriendInvitations: <T = BatchPayload>(args: { data: FriendInvitationUpdateManyMutationInput, where?: FriendInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFriendInvitation: <T = FriendInvitation>(args: { where: FriendInvitationWhereUniqueInput, create: FriendInvitationCreateInput, update: FriendInvitationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFriendInvitation: <T = FriendInvitation | null>(args: { where: FriendInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFriendInvitations: <T = BatchPayload>(args: { where?: FriendInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGame: <T = Game>(args: { data: GameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGame: <T = Game | null>(args: { data: GameUpdateInput, where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyGames: <T = BatchPayload>(args: { data: GameUpdateManyMutationInput, where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGame: <T = Game>(args: { where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGame: <T = Game | null>(args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyGames: <T = BatchPayload>(args: { where?: GameWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    createPartyCart: <T = PartyCart>(args: { data: PartyCartCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePartyCart: <T = PartyCart | null>(args: { data: PartyCartUpdateInput, where: PartyCartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPartyCart: <T = PartyCart>(args: { where: PartyCartWhereUniqueInput, create: PartyCartCreateInput, update: PartyCartUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePartyCart: <T = PartyCart | null>(args: { where: PartyCartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPartyCarts: <T = BatchPayload>(args: { where?: PartyCartWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPartyCartItem: <T = PartyCartItem>(args: { data: PartyCartItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePartyCartItem: <T = PartyCartItem | null>(args: { data: PartyCartItemUpdateInput, where: PartyCartItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPartyCartItems: <T = BatchPayload>(args: { data: PartyCartItemUpdateManyMutationInput, where?: PartyCartItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPartyCartItem: <T = PartyCartItem>(args: { where: PartyCartItemWhereUniqueInput, create: PartyCartItemCreateInput, update: PartyCartItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePartyCartItem: <T = PartyCartItem | null>(args: { where: PartyCartItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPartyCartItems: <T = BatchPayload>(args: { where?: PartyCartItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPartyInvitation: <T = PartyInvitation>(args: { data: PartyInvitationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePartyInvitation: <T = PartyInvitation | null>(args: { data: PartyInvitationUpdateInput, where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPartyInvitations: <T = BatchPayload>(args: { data: PartyInvitationUpdateManyMutationInput, where?: PartyInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPartyInvitation: <T = PartyInvitation>(args: { where: PartyInvitationWhereUniqueInput, create: PartyInvitationCreateInput, update: PartyInvitationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePartyInvitation: <T = PartyInvitation | null>(args: { where: PartyInvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPartyInvitations: <T = BatchPayload>(args: { where?: PartyInvitationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPartySavedTrack: <T = PartySavedTrack>(args: { data: PartySavedTrackCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePartySavedTrack: <T = PartySavedTrack | null>(args: { data: PartySavedTrackUpdateInput, where: PartySavedTrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPartySavedTracks: <T = BatchPayload>(args: { data: PartySavedTrackUpdateManyMutationInput, where?: PartySavedTrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPartySavedTrack: <T = PartySavedTrack>(args: { where: PartySavedTrackWhereUniqueInput, create: PartySavedTrackCreateInput, update: PartySavedTrackUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePartySavedTrack: <T = PartySavedTrack | null>(args: { where: PartySavedTrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPartySavedTracks: <T = BatchPayload>(args: { where?: PartySavedTrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlaylist: <T = Playlist>(args: { data: PlaylistCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlaylist: <T = Playlist | null>(args: { data: PlaylistUpdateInput, where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyPlaylists: <T = BatchPayload>(args: { data: PlaylistUpdateManyMutationInput, where?: PlaylistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlaylist: <T = Playlist>(args: { where: PlaylistWhereUniqueInput, create: PlaylistCreateInput, update: PlaylistUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlaylist: <T = Playlist | null>(args: { where: PlaylistWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyPlaylists: <T = BatchPayload>(args: { where?: PlaylistWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTrack: <T = Track>(args: { data: TrackCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTrack: <T = Track | null>(args: { data: TrackUpdateInput, where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyTracks: <T = BatchPayload>(args: { data: TrackUpdateManyMutationInput, where?: TrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTrack: <T = Track>(args: { where: TrackWhereUniqueInput, create: TrackCreateInput, update: TrackUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTrack: <T = Track | null>(args: { where: TrackWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyTracks: <T = BatchPayload>(args: { where?: TrackWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    album: <T = AlbumSubscriptionPayload | null>(args: { where?: AlbumSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    artist: <T = ArtistSubscriptionPayload | null>(args: { where?: ArtistSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    friendInvitation: <T = FriendInvitationSubscriptionPayload | null>(args: { where?: FriendInvitationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    game: <T = GameSubscriptionPayload | null>(args: { where?: GameSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    party: <T = PartySubscriptionPayload | null>(args: { where?: PartySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    partyCart: <T = PartyCartSubscriptionPayload | null>(args: { where?: PartyCartSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    partyCartItem: <T = PartyCartItemSubscriptionPayload | null>(args: { where?: PartyCartItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    partyInvitation: <T = PartyInvitationSubscriptionPayload | null>(args: { where?: PartyInvitationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    partySavedTrack: <T = PartySavedTrackSubscriptionPayload | null>(args: { where?: PartySavedTrackSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    playlist: <T = PlaylistSubscriptionPayload | null>(args: { where?: PlaylistSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    track: <T = TrackSubscriptionPayload | null>(args: { where?: TrackSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Album: (where?: AlbumWhereInput) => Promise<boolean>
  Artist: (where?: ArtistWhereInput) => Promise<boolean>
  Chat: (where?: ChatWhereInput) => Promise<boolean>
  FriendInvitation: (where?: FriendInvitationWhereInput) => Promise<boolean>
  Game: (where?: GameWhereInput) => Promise<boolean>
  Image: (where?: ImageWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Party: (where?: PartyWhereInput) => Promise<boolean>
  PartyCart: (where?: PartyCartWhereInput) => Promise<boolean>
  PartyCartItem: (where?: PartyCartItemWhereInput) => Promise<boolean>
  PartyInvitation: (where?: PartyInvitationWhereInput) => Promise<boolean>
  PartySavedTrack: (where?: PartySavedTrackWhereInput) => Promise<boolean>
  Playlist: (where?: PlaylistWhereInput) => Promise<boolean>
  Track: (where?: TrackWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateAlbum {
  count: Int!
}

type AggregateArtist {
  count: Int!
}

type AggregateChat {
  count: Int!
}

type AggregateFriendInvitation {
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

type AggregatePartyCart {
  count: Int!
}

type AggregatePartyCartItem {
  count: Int!
}

type AggregatePartyInvitation {
  count: Int!
}

type AggregatePartySavedTrack {
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

type Album {
  id: ID!
  spotifyId: ID!
  uri: String!
  name: String!
  releaseDate: String!
  imageUrl: String!
}

type AlbumConnection {
  pageInfo: PageInfo!
  edges: [AlbumEdge]!
  aggregate: AggregateAlbum!
}

input AlbumCreateInput {
  id: ID
  spotifyId: ID!
  uri: String!
  name: String!
  releaseDate: String!
  imageUrl: String!
}

input AlbumCreateOneInput {
  create: AlbumCreateInput
  connect: AlbumWhereUniqueInput
}

type AlbumEdge {
  node: Album!
  cursor: String!
}

enum AlbumOrderByInput {
  id_ASC
  id_DESC
  spotifyId_ASC
  spotifyId_DESC
  uri_ASC
  uri_DESC
  name_ASC
  name_DESC
  releaseDate_ASC
  releaseDate_DESC
  imageUrl_ASC
  imageUrl_DESC
}

type AlbumPreviousValues {
  id: ID!
  spotifyId: ID!
  uri: String!
  name: String!
  releaseDate: String!
  imageUrl: String!
}

type AlbumSubscriptionPayload {
  mutation: MutationType!
  node: Album
  updatedFields: [String!]
  previousValues: AlbumPreviousValues
}

input AlbumSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AlbumWhereInput
  AND: [AlbumSubscriptionWhereInput!]
  OR: [AlbumSubscriptionWhereInput!]
  NOT: [AlbumSubscriptionWhereInput!]
}

input AlbumUpdateDataInput {
  spotifyId: ID
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

input AlbumUpdateInput {
  spotifyId: ID
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

input AlbumUpdateManyMutationInput {
  spotifyId: ID
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

input AlbumUpdateOneRequiredInput {
  create: AlbumCreateInput
  update: AlbumUpdateDataInput
  upsert: AlbumUpsertNestedInput
  connect: AlbumWhereUniqueInput
}

input AlbumUpsertNestedInput {
  update: AlbumUpdateDataInput!
  create: AlbumCreateInput!
}

input AlbumWhereInput {
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
  spotifyId: ID
  spotifyId_not: ID
  spotifyId_in: [ID!]
  spotifyId_not_in: [ID!]
  spotifyId_lt: ID
  spotifyId_lte: ID
  spotifyId_gt: ID
  spotifyId_gte: ID
  spotifyId_contains: ID
  spotifyId_not_contains: ID
  spotifyId_starts_with: ID
  spotifyId_not_starts_with: ID
  spotifyId_ends_with: ID
  spotifyId_not_ends_with: ID
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  releaseDate: String
  releaseDate_not: String
  releaseDate_in: [String!]
  releaseDate_not_in: [String!]
  releaseDate_lt: String
  releaseDate_lte: String
  releaseDate_gt: String
  releaseDate_gte: String
  releaseDate_contains: String
  releaseDate_not_contains: String
  releaseDate_starts_with: String
  releaseDate_not_starts_with: String
  releaseDate_ends_with: String
  releaseDate_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  AND: [AlbumWhereInput!]
  OR: [AlbumWhereInput!]
  NOT: [AlbumWhereInput!]
}

input AlbumWhereUniqueInput {
  id: ID
}

type Artist {
  id: ID!
  spotifyId: ID!
  uri: String!
  name: String!
}

type ArtistConnection {
  pageInfo: PageInfo!
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  id: ID
  spotifyId: ID!
  uri: String!
  name: String!
}

input ArtistCreateManyInput {
  create: [ArtistCreateInput!]
  connect: [ArtistWhereUniqueInput!]
}

type ArtistEdge {
  node: Artist!
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  spotifyId_ASC
  spotifyId_DESC
  uri_ASC
  uri_DESC
  name_ASC
  name_DESC
}

type ArtistPreviousValues {
  id: ID!
  spotifyId: ID!
  uri: String!
  name: String!
}

input ArtistScalarWhereInput {
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
  spotifyId: ID
  spotifyId_not: ID
  spotifyId_in: [ID!]
  spotifyId_not_in: [ID!]
  spotifyId_lt: ID
  spotifyId_lte: ID
  spotifyId_gt: ID
  spotifyId_gte: ID
  spotifyId_contains: ID
  spotifyId_not_contains: ID
  spotifyId_starts_with: ID
  spotifyId_not_starts_with: ID
  spotifyId_ends_with: ID
  spotifyId_not_ends_with: ID
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ArtistScalarWhereInput!]
  OR: [ArtistScalarWhereInput!]
  NOT: [ArtistScalarWhereInput!]
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArtistWhereInput
  AND: [ArtistSubscriptionWhereInput!]
  OR: [ArtistSubscriptionWhereInput!]
  NOT: [ArtistSubscriptionWhereInput!]
}

input ArtistUpdateDataInput {
  spotifyId: ID
  uri: String
  name: String
}

input ArtistUpdateInput {
  spotifyId: ID
  uri: String
  name: String
}

input ArtistUpdateManyDataInput {
  spotifyId: ID
  uri: String
  name: String
}

input ArtistUpdateManyInput {
  create: [ArtistCreateInput!]
  update: [ArtistUpdateWithWhereUniqueNestedInput!]
  upsert: [ArtistUpsertWithWhereUniqueNestedInput!]
  delete: [ArtistWhereUniqueInput!]
  connect: [ArtistWhereUniqueInput!]
  set: [ArtistWhereUniqueInput!]
  disconnect: [ArtistWhereUniqueInput!]
  deleteMany: [ArtistScalarWhereInput!]
  updateMany: [ArtistUpdateManyWithWhereNestedInput!]
}

input ArtistUpdateManyMutationInput {
  spotifyId: ID
  uri: String
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
  spotifyId: ID
  spotifyId_not: ID
  spotifyId_in: [ID!]
  spotifyId_not_in: [ID!]
  spotifyId_lt: ID
  spotifyId_lte: ID
  spotifyId_gt: ID
  spotifyId_gte: ID
  spotifyId_contains: ID
  spotifyId_not_contains: ID
  spotifyId_starts_with: ID
  spotifyId_not_starts_with: ID
  spotifyId_ends_with: ID
  spotifyId_not_ends_with: ID
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ArtistWhereInput!]
  OR: [ArtistWhereInput!]
  NOT: [ArtistWhereInput!]
}

input ArtistWhereUniqueInput {
  id: ID
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

type FriendInvitation {
  id: ID!
  invitedBy: User!
  user: User!
  createdAt: DateTime!
  invitedUserId: String!
}

type FriendInvitationConnection {
  pageInfo: PageInfo!
  edges: [FriendInvitationEdge]!
  aggregate: AggregateFriendInvitation!
}

input FriendInvitationCreateInput {
  id: ID
  invitedBy: UserCreateOneInput!
  user: UserCreateOneWithoutPendingFriendInvitationsInput!
  invitedUserId: String!
}

input FriendInvitationCreateManyWithoutUserInput {
  create: [FriendInvitationCreateWithoutUserInput!]
  connect: [FriendInvitationWhereUniqueInput!]
}

input FriendInvitationCreateWithoutUserInput {
  id: ID
  invitedBy: UserCreateOneInput!
  invitedUserId: String!
}

type FriendInvitationEdge {
  node: FriendInvitation!
  cursor: String!
}

enum FriendInvitationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  invitedUserId_ASC
  invitedUserId_DESC
}

type FriendInvitationPreviousValues {
  id: ID!
  createdAt: DateTime!
  invitedUserId: String!
}

input FriendInvitationScalarWhereInput {
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
  invitedUserId: String
  invitedUserId_not: String
  invitedUserId_in: [String!]
  invitedUserId_not_in: [String!]
  invitedUserId_lt: String
  invitedUserId_lte: String
  invitedUserId_gt: String
  invitedUserId_gte: String
  invitedUserId_contains: String
  invitedUserId_not_contains: String
  invitedUserId_starts_with: String
  invitedUserId_not_starts_with: String
  invitedUserId_ends_with: String
  invitedUserId_not_ends_with: String
  AND: [FriendInvitationScalarWhereInput!]
  OR: [FriendInvitationScalarWhereInput!]
  NOT: [FriendInvitationScalarWhereInput!]
}

type FriendInvitationSubscriptionPayload {
  mutation: MutationType!
  node: FriendInvitation
  updatedFields: [String!]
  previousValues: FriendInvitationPreviousValues
}

input FriendInvitationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FriendInvitationWhereInput
  AND: [FriendInvitationSubscriptionWhereInput!]
  OR: [FriendInvitationSubscriptionWhereInput!]
  NOT: [FriendInvitationSubscriptionWhereInput!]
}

input FriendInvitationUpdateInput {
  invitedBy: UserUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutPendingFriendInvitationsInput
  invitedUserId: String
}

input FriendInvitationUpdateManyDataInput {
  invitedUserId: String
}

input FriendInvitationUpdateManyMutationInput {
  invitedUserId: String
}

input FriendInvitationUpdateManyWithoutUserInput {
  create: [FriendInvitationCreateWithoutUserInput!]
  delete: [FriendInvitationWhereUniqueInput!]
  connect: [FriendInvitationWhereUniqueInput!]
  set: [FriendInvitationWhereUniqueInput!]
  disconnect: [FriendInvitationWhereUniqueInput!]
  update: [FriendInvitationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [FriendInvitationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [FriendInvitationScalarWhereInput!]
  updateMany: [FriendInvitationUpdateManyWithWhereNestedInput!]
}

input FriendInvitationUpdateManyWithWhereNestedInput {
  where: FriendInvitationScalarWhereInput!
  data: FriendInvitationUpdateManyDataInput!
}

input FriendInvitationUpdateWithoutUserDataInput {
  invitedBy: UserUpdateOneRequiredInput
  invitedUserId: String
}

input FriendInvitationUpdateWithWhereUniqueWithoutUserInput {
  where: FriendInvitationWhereUniqueInput!
  data: FriendInvitationUpdateWithoutUserDataInput!
}

input FriendInvitationUpsertWithWhereUniqueWithoutUserInput {
  where: FriendInvitationWhereUniqueInput!
  update: FriendInvitationUpdateWithoutUserDataInput!
  create: FriendInvitationCreateWithoutUserInput!
}

input FriendInvitationWhereInput {
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
  invitedBy: UserWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  invitedUserId: String
  invitedUserId_not: String
  invitedUserId_in: [String!]
  invitedUserId_not_in: [String!]
  invitedUserId_lt: String
  invitedUserId_lte: String
  invitedUserId_gt: String
  invitedUserId_gte: String
  invitedUserId_contains: String
  invitedUserId_not_contains: String
  invitedUserId_starts_with: String
  invitedUserId_not_starts_with: String
  invitedUserId_ends_with: String
  invitedUserId_not_ends_with: String
  AND: [FriendInvitationWhereInput!]
  OR: [FriendInvitationWhereInput!]
  NOT: [FriendInvitationWhereInput!]
}

input FriendInvitationWhereUniqueInput {
  id: ID
}

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

type Image {
  id: ID!
  height: Int!
  width: Int!
  url: String!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  id: ID
  height: Int!
  width: Int!
  url: String!
}

type ImageEdge {
  node: Image!
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

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  height: Int
  width: Int
  url: String
}

input ImageUpdateManyMutationInput {
  height: Int
  width: Int
  url: String
}

input ImageWhereInput {
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
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
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
  author: UserCreateOneInput!
  chat: ChatCreateOneWithoutMessagesInput!
  content: String!
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatInput {
  id: ID
  author: UserCreateOneInput!
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
  author: UserUpdateOneRequiredInput
  chat: ChatUpdateOneRequiredWithoutMessagesInput
  content: String
}

input MessageUpdateManyDataInput {
  content: String
}

input MessageUpdateManyMutationInput {
  content: String
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

input MessageUpdateWithoutChatDataInput {
  author: UserUpdateOneRequiredInput
  content: String
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
  createAlbum(data: AlbumCreateInput!): Album!
  updateAlbum(data: AlbumUpdateInput!, where: AlbumWhereUniqueInput!): Album
  updateManyAlbums(data: AlbumUpdateManyMutationInput!, where: AlbumWhereInput): BatchPayload!
  upsertAlbum(where: AlbumWhereUniqueInput!, create: AlbumCreateInput!, update: AlbumUpdateInput!): Album!
  deleteAlbum(where: AlbumWhereUniqueInput!): Album
  deleteManyAlbums(where: AlbumWhereInput): BatchPayload!
  createArtist(data: ArtistCreateInput!): Artist!
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateManyArtists(data: ArtistUpdateManyMutationInput!, where: ArtistWhereInput): BatchPayload!
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  createChat(data: ChatCreateInput!): Chat!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  createFriendInvitation(data: FriendInvitationCreateInput!): FriendInvitation!
  updateFriendInvitation(data: FriendInvitationUpdateInput!, where: FriendInvitationWhereUniqueInput!): FriendInvitation
  updateManyFriendInvitations(data: FriendInvitationUpdateManyMutationInput!, where: FriendInvitationWhereInput): BatchPayload!
  upsertFriendInvitation(where: FriendInvitationWhereUniqueInput!, create: FriendInvitationCreateInput!, update: FriendInvitationUpdateInput!): FriendInvitation!
  deleteFriendInvitation(where: FriendInvitationWhereUniqueInput!): FriendInvitation
  deleteManyFriendInvitations(where: FriendInvitationWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
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
  createPartyCart(data: PartyCartCreateInput!): PartyCart!
  updatePartyCart(data: PartyCartUpdateInput!, where: PartyCartWhereUniqueInput!): PartyCart
  upsertPartyCart(where: PartyCartWhereUniqueInput!, create: PartyCartCreateInput!, update: PartyCartUpdateInput!): PartyCart!
  deletePartyCart(where: PartyCartWhereUniqueInput!): PartyCart
  deleteManyPartyCarts(where: PartyCartWhereInput): BatchPayload!
  createPartyCartItem(data: PartyCartItemCreateInput!): PartyCartItem!
  updatePartyCartItem(data: PartyCartItemUpdateInput!, where: PartyCartItemWhereUniqueInput!): PartyCartItem
  updateManyPartyCartItems(data: PartyCartItemUpdateManyMutationInput!, where: PartyCartItemWhereInput): BatchPayload!
  upsertPartyCartItem(where: PartyCartItemWhereUniqueInput!, create: PartyCartItemCreateInput!, update: PartyCartItemUpdateInput!): PartyCartItem!
  deletePartyCartItem(where: PartyCartItemWhereUniqueInput!): PartyCartItem
  deleteManyPartyCartItems(where: PartyCartItemWhereInput): BatchPayload!
  createPartyInvitation(data: PartyInvitationCreateInput!): PartyInvitation!
  updatePartyInvitation(data: PartyInvitationUpdateInput!, where: PartyInvitationWhereUniqueInput!): PartyInvitation
  updateManyPartyInvitations(data: PartyInvitationUpdateManyMutationInput!, where: PartyInvitationWhereInput): BatchPayload!
  upsertPartyInvitation(where: PartyInvitationWhereUniqueInput!, create: PartyInvitationCreateInput!, update: PartyInvitationUpdateInput!): PartyInvitation!
  deletePartyInvitation(where: PartyInvitationWhereUniqueInput!): PartyInvitation
  deleteManyPartyInvitations(where: PartyInvitationWhereInput): BatchPayload!
  createPartySavedTrack(data: PartySavedTrackCreateInput!): PartySavedTrack!
  updatePartySavedTrack(data: PartySavedTrackUpdateInput!, where: PartySavedTrackWhereUniqueInput!): PartySavedTrack
  updateManyPartySavedTracks(data: PartySavedTrackUpdateManyMutationInput!, where: PartySavedTrackWhereInput): BatchPayload!
  upsertPartySavedTrack(where: PartySavedTrackWhereUniqueInput!, create: PartySavedTrackCreateInput!, update: PartySavedTrackUpdateInput!): PartySavedTrack!
  deletePartySavedTrack(where: PartySavedTrackWhereUniqueInput!): PartySavedTrack
  deleteManyPartySavedTracks(where: PartySavedTrackWhereInput): BatchPayload!
  createPlaylist(data: PlaylistCreateInput!): Playlist!
  updatePlaylist(data: PlaylistUpdateInput!, where: PlaylistWhereUniqueInput!): Playlist
  updateManyPlaylists(data: PlaylistUpdateManyMutationInput!, where: PlaylistWhereInput): BatchPayload!
  upsertPlaylist(where: PlaylistWhereUniqueInput!, create: PlaylistCreateInput!, update: PlaylistUpdateInput!): Playlist!
  deletePlaylist(where: PlaylistWhereUniqueInput!): Playlist
  deleteManyPlaylists(where: PlaylistWhereInput): BatchPayload!
  createTrack(data: TrackCreateInput!): Track!
  updateTrack(data: TrackUpdateInput!, where: TrackWhereUniqueInput!): Track
  updateManyTracks(data: TrackUpdateManyMutationInput!, where: TrackWhereInput): BatchPayload!
  upsertTrack(where: TrackWhereUniqueInput!, create: TrackCreateInput!, update: TrackUpdateInput!): Track!
  deleteTrack(where: TrackWhereUniqueInput!): Track
  deleteManyTracks(where: TrackWhereInput): BatchPayload!
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
  playlist(where: PlaylistWhereInput, orderBy: PlaylistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Playlist!]
  savedTracks(where: PartySavedTrackWhereInput, orderBy: PartySavedTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartySavedTrack!]
  cart: PartyCart!
}

type PartyCart {
  id: ID!
  party: Party!
  items(where: PartyCartItemWhereInput, orderBy: PartyCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyCartItem!]
}

type PartyCartConnection {
  pageInfo: PageInfo!
  edges: [PartyCartEdge]!
  aggregate: AggregatePartyCart!
}

input PartyCartCreateInput {
  id: ID
  party: PartyCreateOneWithoutCartInput!
  items: PartyCartItemCreateManyWithoutCartInput
}

input PartyCartCreateOneWithoutItemsInput {
  create: PartyCartCreateWithoutItemsInput
  connect: PartyCartWhereUniqueInput
}

input PartyCartCreateOneWithoutPartyInput {
  create: PartyCartCreateWithoutPartyInput
  connect: PartyCartWhereUniqueInput
}

input PartyCartCreateWithoutItemsInput {
  id: ID
  party: PartyCreateOneWithoutCartInput!
}

input PartyCartCreateWithoutPartyInput {
  id: ID
  items: PartyCartItemCreateManyWithoutCartInput
}

type PartyCartEdge {
  node: PartyCart!
  cursor: String!
}

type PartyCartItem {
  id: ID!
  cart: PartyCart!
  user: User!
  name: String!
  description: String
  price: Float!
  status: PartyCartItemStatus!
  quantity: Int!
}

type PartyCartItemConnection {
  pageInfo: PageInfo!
  edges: [PartyCartItemEdge]!
  aggregate: AggregatePartyCartItem!
}

input PartyCartItemCreateInput {
  id: ID
  cart: PartyCartCreateOneWithoutItemsInput!
  user: UserCreateOneWithoutCartItemsInput!
  name: String!
  description: String
  price: Float!
  status: PartyCartItemStatus!
  quantity: Int
}

input PartyCartItemCreateManyWithoutCartInput {
  create: [PartyCartItemCreateWithoutCartInput!]
  connect: [PartyCartItemWhereUniqueInput!]
}

input PartyCartItemCreateManyWithoutUserInput {
  create: [PartyCartItemCreateWithoutUserInput!]
  connect: [PartyCartItemWhereUniqueInput!]
}

input PartyCartItemCreateWithoutCartInput {
  id: ID
  user: UserCreateOneWithoutCartItemsInput!
  name: String!
  description: String
  price: Float!
  status: PartyCartItemStatus!
  quantity: Int
}

input PartyCartItemCreateWithoutUserInput {
  id: ID
  cart: PartyCartCreateOneWithoutItemsInput!
  name: String!
  description: String
  price: Float!
  status: PartyCartItemStatus!
  quantity: Int
}

type PartyCartItemEdge {
  node: PartyCartItem!
  cursor: String!
}

enum PartyCartItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  status_ASC
  status_DESC
  quantity_ASC
  quantity_DESC
}

type PartyCartItemPreviousValues {
  id: ID!
  name: String!
  description: String
  price: Float!
  status: PartyCartItemStatus!
  quantity: Int!
}

input PartyCartItemScalarWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
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
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  status: PartyCartItemStatus
  status_not: PartyCartItemStatus
  status_in: [PartyCartItemStatus!]
  status_not_in: [PartyCartItemStatus!]
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [PartyCartItemScalarWhereInput!]
  OR: [PartyCartItemScalarWhereInput!]
  NOT: [PartyCartItemScalarWhereInput!]
}

enum PartyCartItemStatus {
  PENDING
  ACCEPTED
  REJECTED
}

type PartyCartItemSubscriptionPayload {
  mutation: MutationType!
  node: PartyCartItem
  updatedFields: [String!]
  previousValues: PartyCartItemPreviousValues
}

input PartyCartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyCartItemWhereInput
  AND: [PartyCartItemSubscriptionWhereInput!]
  OR: [PartyCartItemSubscriptionWhereInput!]
  NOT: [PartyCartItemSubscriptionWhereInput!]
}

input PartyCartItemUpdateInput {
  cart: PartyCartUpdateOneRequiredWithoutItemsInput
  user: UserUpdateOneRequiredWithoutCartItemsInput
  name: String
  description: String
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

input PartyCartItemUpdateManyDataInput {
  name: String
  description: String
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

input PartyCartItemUpdateManyMutationInput {
  name: String
  description: String
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

input PartyCartItemUpdateManyWithoutCartInput {
  create: [PartyCartItemCreateWithoutCartInput!]
  delete: [PartyCartItemWhereUniqueInput!]
  connect: [PartyCartItemWhereUniqueInput!]
  set: [PartyCartItemWhereUniqueInput!]
  disconnect: [PartyCartItemWhereUniqueInput!]
  update: [PartyCartItemUpdateWithWhereUniqueWithoutCartInput!]
  upsert: [PartyCartItemUpsertWithWhereUniqueWithoutCartInput!]
  deleteMany: [PartyCartItemScalarWhereInput!]
  updateMany: [PartyCartItemUpdateManyWithWhereNestedInput!]
}

input PartyCartItemUpdateManyWithoutUserInput {
  create: [PartyCartItemCreateWithoutUserInput!]
  delete: [PartyCartItemWhereUniqueInput!]
  connect: [PartyCartItemWhereUniqueInput!]
  set: [PartyCartItemWhereUniqueInput!]
  disconnect: [PartyCartItemWhereUniqueInput!]
  update: [PartyCartItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PartyCartItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PartyCartItemScalarWhereInput!]
  updateMany: [PartyCartItemUpdateManyWithWhereNestedInput!]
}

input PartyCartItemUpdateManyWithWhereNestedInput {
  where: PartyCartItemScalarWhereInput!
  data: PartyCartItemUpdateManyDataInput!
}

input PartyCartItemUpdateWithoutCartDataInput {
  user: UserUpdateOneRequiredWithoutCartItemsInput
  name: String
  description: String
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

input PartyCartItemUpdateWithoutUserDataInput {
  cart: PartyCartUpdateOneRequiredWithoutItemsInput
  name: String
  description: String
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

input PartyCartItemUpdateWithWhereUniqueWithoutCartInput {
  where: PartyCartItemWhereUniqueInput!
  data: PartyCartItemUpdateWithoutCartDataInput!
}

input PartyCartItemUpdateWithWhereUniqueWithoutUserInput {
  where: PartyCartItemWhereUniqueInput!
  data: PartyCartItemUpdateWithoutUserDataInput!
}

input PartyCartItemUpsertWithWhereUniqueWithoutCartInput {
  where: PartyCartItemWhereUniqueInput!
  update: PartyCartItemUpdateWithoutCartDataInput!
  create: PartyCartItemCreateWithoutCartInput!
}

input PartyCartItemUpsertWithWhereUniqueWithoutUserInput {
  where: PartyCartItemWhereUniqueInput!
  update: PartyCartItemUpdateWithoutUserDataInput!
  create: PartyCartItemCreateWithoutUserInput!
}

input PartyCartItemWhereInput {
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
  cart: PartyCartWhereInput
  user: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
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
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  status: PartyCartItemStatus
  status_not: PartyCartItemStatus
  status_in: [PartyCartItemStatus!]
  status_not_in: [PartyCartItemStatus!]
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [PartyCartItemWhereInput!]
  OR: [PartyCartItemWhereInput!]
  NOT: [PartyCartItemWhereInput!]
}

input PartyCartItemWhereUniqueInput {
  id: ID
}

enum PartyCartOrderByInput {
  id_ASC
  id_DESC
}

type PartyCartPreviousValues {
  id: ID!
}

type PartyCartSubscriptionPayload {
  mutation: MutationType!
  node: PartyCart
  updatedFields: [String!]
  previousValues: PartyCartPreviousValues
}

input PartyCartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyCartWhereInput
  AND: [PartyCartSubscriptionWhereInput!]
  OR: [PartyCartSubscriptionWhereInput!]
  NOT: [PartyCartSubscriptionWhereInput!]
}

input PartyCartUpdateInput {
  party: PartyUpdateOneRequiredWithoutCartInput
  items: PartyCartItemUpdateManyWithoutCartInput
}

input PartyCartUpdateOneRequiredWithoutItemsInput {
  create: PartyCartCreateWithoutItemsInput
  update: PartyCartUpdateWithoutItemsDataInput
  upsert: PartyCartUpsertWithoutItemsInput
  connect: PartyCartWhereUniqueInput
}

input PartyCartUpdateOneRequiredWithoutPartyInput {
  create: PartyCartCreateWithoutPartyInput
  update: PartyCartUpdateWithoutPartyDataInput
  upsert: PartyCartUpsertWithoutPartyInput
  connect: PartyCartWhereUniqueInput
}

input PartyCartUpdateWithoutItemsDataInput {
  party: PartyUpdateOneRequiredWithoutCartInput
}

input PartyCartUpdateWithoutPartyDataInput {
  items: PartyCartItemUpdateManyWithoutCartInput
}

input PartyCartUpsertWithoutItemsInput {
  update: PartyCartUpdateWithoutItemsDataInput!
  create: PartyCartCreateWithoutItemsInput!
}

input PartyCartUpsertWithoutPartyInput {
  update: PartyCartUpdateWithoutPartyDataInput!
  create: PartyCartCreateWithoutPartyInput!
}

input PartyCartWhereInput {
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
  items_every: PartyCartItemWhereInput
  items_some: PartyCartItemWhereInput
  items_none: PartyCartItemWhereInput
  AND: [PartyCartWhereInput!]
  OR: [PartyCartWhereInput!]
  NOT: [PartyCartWhereInput!]
}

input PartyCartWhereUniqueInput {
  id: ID
}

type PartyConnection {
  pageInfo: PageInfo!
  edges: [PartyEdge]!
  aggregate: AggregateParty!
}

input PartyCreateInput {
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  members: UserCreateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String!
  playlist: PlaylistCreateManyWithoutPartiesInput
  savedTracks: PartySavedTrackCreateManyWithoutPartyInput
  cart: PartyCartCreateOneWithoutPartyInput!
}

input PartyCreateManyWithoutMembersInput {
  create: [PartyCreateWithoutMembersInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateManyWithoutPlaylistInput {
  create: [PartyCreateWithoutPlaylistInput!]
  connect: [PartyWhereUniqueInput!]
}

input PartyCreateOneInput {
  create: PartyCreateInput
  connect: PartyWhereUniqueInput
}

input PartyCreateOneWithoutCartInput {
  create: PartyCreateWithoutCartInput
  connect: PartyWhereUniqueInput
}

input PartyCreateOneWithoutSavedTracksInput {
  create: PartyCreateWithoutSavedTracksInput
  connect: PartyWhereUniqueInput
}

input PartyCreateWithoutCartInput {
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  members: UserCreateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String!
  playlist: PlaylistCreateManyWithoutPartiesInput
  savedTracks: PartySavedTrackCreateManyWithoutPartyInput
}

input PartyCreateWithoutMembersInput {
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String!
  playlist: PlaylistCreateManyWithoutPartiesInput
  savedTracks: PartySavedTrackCreateManyWithoutPartyInput
  cart: PartyCartCreateOneWithoutPartyInput!
}

input PartyCreateWithoutPlaylistInput {
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  members: UserCreateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String!
  savedTracks: PartySavedTrackCreateManyWithoutPartyInput
  cart: PartyCartCreateOneWithoutPartyInput!
}

input PartyCreateWithoutSavedTracksInput {
  id: ID
  title: String!
  normalizedTitle: String!
  description: String!
  author: UserCreateOneInput!
  location: LocationCreateOneInput!
  games: GameCreateManyInput
  colorTint: String!
  isPublic: Boolean
  members: UserCreateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String!
  playlist: PlaylistCreateManyWithoutPartiesInput
  cart: PartyCartCreateOneWithoutPartyInput!
}

type PartyEdge {
  node: Party!
  cursor: String!
}

type PartyInvitation {
  id: ID!
  invitedBy: User!
  user: User!
  party: Party!
  invitedUserId: String!
  partyId: String!
  createdAt: DateTime!
}

type PartyInvitationConnection {
  pageInfo: PageInfo!
  edges: [PartyInvitationEdge]!
  aggregate: AggregatePartyInvitation!
}

input PartyInvitationCreateInput {
  id: ID
  invitedBy: UserCreateOneInput!
  user: UserCreateOneWithoutPendingPartyInvitationsInput!
  party: PartyCreateOneInput!
  invitedUserId: String!
  partyId: String!
}

input PartyInvitationCreateManyWithoutUserInput {
  create: [PartyInvitationCreateWithoutUserInput!]
  connect: [PartyInvitationWhereUniqueInput!]
}

input PartyInvitationCreateWithoutUserInput {
  id: ID
  invitedBy: UserCreateOneInput!
  party: PartyCreateOneInput!
  invitedUserId: String!
  partyId: String!
}

type PartyInvitationEdge {
  node: PartyInvitation!
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
  invitedUserId: String
  invitedUserId_not: String
  invitedUserId_in: [String!]
  invitedUserId_not_in: [String!]
  invitedUserId_lt: String
  invitedUserId_lte: String
  invitedUserId_gt: String
  invitedUserId_gte: String
  invitedUserId_contains: String
  invitedUserId_not_contains: String
  invitedUserId_starts_with: String
  invitedUserId_not_starts_with: String
  invitedUserId_ends_with: String
  invitedUserId_not_ends_with: String
  partyId: String
  partyId_not: String
  partyId_in: [String!]
  partyId_not_in: [String!]
  partyId_lt: String
  partyId_lte: String
  partyId_gt: String
  partyId_gte: String
  partyId_contains: String
  partyId_not_contains: String
  partyId_starts_with: String
  partyId_not_starts_with: String
  partyId_ends_with: String
  partyId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PartyInvitationScalarWhereInput!]
  OR: [PartyInvitationScalarWhereInput!]
  NOT: [PartyInvitationScalarWhereInput!]
}

type PartyInvitationSubscriptionPayload {
  mutation: MutationType!
  node: PartyInvitation
  updatedFields: [String!]
  previousValues: PartyInvitationPreviousValues
}

input PartyInvitationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyInvitationWhereInput
  AND: [PartyInvitationSubscriptionWhereInput!]
  OR: [PartyInvitationSubscriptionWhereInput!]
  NOT: [PartyInvitationSubscriptionWhereInput!]
}

input PartyInvitationUpdateInput {
  invitedBy: UserUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutPendingPartyInvitationsInput
  party: PartyUpdateOneRequiredInput
  invitedUserId: String
  partyId: String
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
  delete: [PartyInvitationWhereUniqueInput!]
  connect: [PartyInvitationWhereUniqueInput!]
  set: [PartyInvitationWhereUniqueInput!]
  disconnect: [PartyInvitationWhereUniqueInput!]
  update: [PartyInvitationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PartyInvitationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PartyInvitationScalarWhereInput!]
  updateMany: [PartyInvitationUpdateManyWithWhereNestedInput!]
}

input PartyInvitationUpdateManyWithWhereNestedInput {
  where: PartyInvitationScalarWhereInput!
  data: PartyInvitationUpdateManyDataInput!
}

input PartyInvitationUpdateWithoutUserDataInput {
  invitedBy: UserUpdateOneRequiredInput
  party: PartyUpdateOneRequiredInput
  invitedUserId: String
  partyId: String
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
  invitedBy: UserWhereInput
  user: UserWhereInput
  party: PartyWhereInput
  invitedUserId: String
  invitedUserId_not: String
  invitedUserId_in: [String!]
  invitedUserId_not_in: [String!]
  invitedUserId_lt: String
  invitedUserId_lte: String
  invitedUserId_gt: String
  invitedUserId_gte: String
  invitedUserId_contains: String
  invitedUserId_not_contains: String
  invitedUserId_starts_with: String
  invitedUserId_not_starts_with: String
  invitedUserId_ends_with: String
  invitedUserId_not_ends_with: String
  partyId: String
  partyId_not: String
  partyId_in: [String!]
  partyId_not_in: [String!]
  partyId_lt: String
  partyId_lte: String
  partyId_gt: String
  partyId_gte: String
  partyId_contains: String
  partyId_not_contains: String
  partyId_starts_with: String
  partyId_not_starts_with: String
  partyId_ends_with: String
  partyId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PartyInvitationWhereInput!]
  OR: [PartyInvitationWhereInput!]
  NOT: [PartyInvitationWhereInput!]
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

type PartySavedTrack {
  id: ID!
  spotifyId: String!
  durationMs: Int!
  explicit: Boolean!
  name: String!
  previewUrl: String
  uri: String!
  party: Party!
  stringArtists: String!
  length: String!
  popularity: Int!
  album: Album!
}

type PartySavedTrackConnection {
  pageInfo: PageInfo!
  edges: [PartySavedTrackEdge]!
  aggregate: AggregatePartySavedTrack!
}

input PartySavedTrackCreateInput {
  id: ID
  spotifyId: String!
  durationMs: Int!
  explicit: Boolean!
  name: String!
  previewUrl: String
  uri: String!
  party: PartyCreateOneWithoutSavedTracksInput!
  stringArtists: String!
  length: String!
  popularity: Int!
  album: AlbumCreateOneInput!
}

input PartySavedTrackCreateManyInput {
  create: [PartySavedTrackCreateInput!]
  connect: [PartySavedTrackWhereUniqueInput!]
}

input PartySavedTrackCreateManyWithoutPartyInput {
  create: [PartySavedTrackCreateWithoutPartyInput!]
  connect: [PartySavedTrackWhereUniqueInput!]
}

input PartySavedTrackCreateWithoutPartyInput {
  id: ID
  spotifyId: String!
  durationMs: Int!
  explicit: Boolean!
  name: String!
  previewUrl: String
  uri: String!
  stringArtists: String!
  length: String!
  popularity: Int!
  album: AlbumCreateOneInput!
}

type PartySavedTrackEdge {
  node: PartySavedTrack!
  cursor: String!
}

enum PartySavedTrackOrderByInput {
  id_ASC
  id_DESC
  spotifyId_ASC
  spotifyId_DESC
  durationMs_ASC
  durationMs_DESC
  explicit_ASC
  explicit_DESC
  name_ASC
  name_DESC
  previewUrl_ASC
  previewUrl_DESC
  uri_ASC
  uri_DESC
  stringArtists_ASC
  stringArtists_DESC
  length_ASC
  length_DESC
  popularity_ASC
  popularity_DESC
}

type PartySavedTrackPreviousValues {
  id: ID!
  spotifyId: String!
  durationMs: Int!
  explicit: Boolean!
  name: String!
  previewUrl: String
  uri: String!
  stringArtists: String!
  length: String!
  popularity: Int!
}

input PartySavedTrackScalarWhereInput {
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
  spotifyId: String
  spotifyId_not: String
  spotifyId_in: [String!]
  spotifyId_not_in: [String!]
  spotifyId_lt: String
  spotifyId_lte: String
  spotifyId_gt: String
  spotifyId_gte: String
  spotifyId_contains: String
  spotifyId_not_contains: String
  spotifyId_starts_with: String
  spotifyId_not_starts_with: String
  spotifyId_ends_with: String
  spotifyId_not_ends_with: String
  durationMs: Int
  durationMs_not: Int
  durationMs_in: [Int!]
  durationMs_not_in: [Int!]
  durationMs_lt: Int
  durationMs_lte: Int
  durationMs_gt: Int
  durationMs_gte: Int
  explicit: Boolean
  explicit_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  previewUrl: String
  previewUrl_not: String
  previewUrl_in: [String!]
  previewUrl_not_in: [String!]
  previewUrl_lt: String
  previewUrl_lte: String
  previewUrl_gt: String
  previewUrl_gte: String
  previewUrl_contains: String
  previewUrl_not_contains: String
  previewUrl_starts_with: String
  previewUrl_not_starts_with: String
  previewUrl_ends_with: String
  previewUrl_not_ends_with: String
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  stringArtists: String
  stringArtists_not: String
  stringArtists_in: [String!]
  stringArtists_not_in: [String!]
  stringArtists_lt: String
  stringArtists_lte: String
  stringArtists_gt: String
  stringArtists_gte: String
  stringArtists_contains: String
  stringArtists_not_contains: String
  stringArtists_starts_with: String
  stringArtists_not_starts_with: String
  stringArtists_ends_with: String
  stringArtists_not_ends_with: String
  length: String
  length_not: String
  length_in: [String!]
  length_not_in: [String!]
  length_lt: String
  length_lte: String
  length_gt: String
  length_gte: String
  length_contains: String
  length_not_contains: String
  length_starts_with: String
  length_not_starts_with: String
  length_ends_with: String
  length_not_ends_with: String
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  AND: [PartySavedTrackScalarWhereInput!]
  OR: [PartySavedTrackScalarWhereInput!]
  NOT: [PartySavedTrackScalarWhereInput!]
}

type PartySavedTrackSubscriptionPayload {
  mutation: MutationType!
  node: PartySavedTrack
  updatedFields: [String!]
  previousValues: PartySavedTrackPreviousValues
}

input PartySavedTrackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartySavedTrackWhereInput
  AND: [PartySavedTrackSubscriptionWhereInput!]
  OR: [PartySavedTrackSubscriptionWhereInput!]
  NOT: [PartySavedTrackSubscriptionWhereInput!]
}

input PartySavedTrackUpdateDataInput {
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl: String
  uri: String
  party: PartyUpdateOneRequiredWithoutSavedTracksInput
  stringArtists: String
  length: String
  popularity: Int
  album: AlbumUpdateOneRequiredInput
}

input PartySavedTrackUpdateInput {
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl: String
  uri: String
  party: PartyUpdateOneRequiredWithoutSavedTracksInput
  stringArtists: String
  length: String
  popularity: Int
  album: AlbumUpdateOneRequiredInput
}

input PartySavedTrackUpdateManyDataInput {
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl: String
  uri: String
  stringArtists: String
  length: String
  popularity: Int
}

input PartySavedTrackUpdateManyInput {
  create: [PartySavedTrackCreateInput!]
  update: [PartySavedTrackUpdateWithWhereUniqueNestedInput!]
  upsert: [PartySavedTrackUpsertWithWhereUniqueNestedInput!]
  delete: [PartySavedTrackWhereUniqueInput!]
  connect: [PartySavedTrackWhereUniqueInput!]
  set: [PartySavedTrackWhereUniqueInput!]
  disconnect: [PartySavedTrackWhereUniqueInput!]
  deleteMany: [PartySavedTrackScalarWhereInput!]
  updateMany: [PartySavedTrackUpdateManyWithWhereNestedInput!]
}

input PartySavedTrackUpdateManyMutationInput {
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl: String
  uri: String
  stringArtists: String
  length: String
  popularity: Int
}

input PartySavedTrackUpdateManyWithoutPartyInput {
  create: [PartySavedTrackCreateWithoutPartyInput!]
  delete: [PartySavedTrackWhereUniqueInput!]
  connect: [PartySavedTrackWhereUniqueInput!]
  set: [PartySavedTrackWhereUniqueInput!]
  disconnect: [PartySavedTrackWhereUniqueInput!]
  update: [PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput!]
  upsert: [PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput!]
  deleteMany: [PartySavedTrackScalarWhereInput!]
  updateMany: [PartySavedTrackUpdateManyWithWhereNestedInput!]
}

input PartySavedTrackUpdateManyWithWhereNestedInput {
  where: PartySavedTrackScalarWhereInput!
  data: PartySavedTrackUpdateManyDataInput!
}

input PartySavedTrackUpdateWithoutPartyDataInput {
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl: String
  uri: String
  stringArtists: String
  length: String
  popularity: Int
  album: AlbumUpdateOneRequiredInput
}

input PartySavedTrackUpdateWithWhereUniqueNestedInput {
  where: PartySavedTrackWhereUniqueInput!
  data: PartySavedTrackUpdateDataInput!
}

input PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput {
  where: PartySavedTrackWhereUniqueInput!
  data: PartySavedTrackUpdateWithoutPartyDataInput!
}

input PartySavedTrackUpsertWithWhereUniqueNestedInput {
  where: PartySavedTrackWhereUniqueInput!
  update: PartySavedTrackUpdateDataInput!
  create: PartySavedTrackCreateInput!
}

input PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput {
  where: PartySavedTrackWhereUniqueInput!
  update: PartySavedTrackUpdateWithoutPartyDataInput!
  create: PartySavedTrackCreateWithoutPartyInput!
}

input PartySavedTrackWhereInput {
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
  spotifyId: String
  spotifyId_not: String
  spotifyId_in: [String!]
  spotifyId_not_in: [String!]
  spotifyId_lt: String
  spotifyId_lte: String
  spotifyId_gt: String
  spotifyId_gte: String
  spotifyId_contains: String
  spotifyId_not_contains: String
  spotifyId_starts_with: String
  spotifyId_not_starts_with: String
  spotifyId_ends_with: String
  spotifyId_not_ends_with: String
  durationMs: Int
  durationMs_not: Int
  durationMs_in: [Int!]
  durationMs_not_in: [Int!]
  durationMs_lt: Int
  durationMs_lte: Int
  durationMs_gt: Int
  durationMs_gte: Int
  explicit: Boolean
  explicit_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  previewUrl: String
  previewUrl_not: String
  previewUrl_in: [String!]
  previewUrl_not_in: [String!]
  previewUrl_lt: String
  previewUrl_lte: String
  previewUrl_gt: String
  previewUrl_gte: String
  previewUrl_contains: String
  previewUrl_not_contains: String
  previewUrl_starts_with: String
  previewUrl_not_starts_with: String
  previewUrl_ends_with: String
  previewUrl_not_ends_with: String
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  party: PartyWhereInput
  stringArtists: String
  stringArtists_not: String
  stringArtists_in: [String!]
  stringArtists_not_in: [String!]
  stringArtists_lt: String
  stringArtists_lte: String
  stringArtists_gt: String
  stringArtists_gte: String
  stringArtists_contains: String
  stringArtists_not_contains: String
  stringArtists_starts_with: String
  stringArtists_not_starts_with: String
  stringArtists_ends_with: String
  stringArtists_not_ends_with: String
  length: String
  length_not: String
  length_in: [String!]
  length_not_in: [String!]
  length_lt: String
  length_lte: String
  length_gt: String
  length_gte: String
  length_contains: String
  length_not_contains: String
  length_starts_with: String
  length_not_starts_with: String
  length_ends_with: String
  length_not_ends_with: String
  popularity: Int
  popularity_not: Int
  popularity_in: [Int!]
  popularity_not_in: [Int!]
  popularity_lt: Int
  popularity_lte: Int
  popularity_gt: Int
  popularity_gte: Int
  album: AlbumWhereInput
  AND: [PartySavedTrackWhereInput!]
  OR: [PartySavedTrackWhereInput!]
  NOT: [PartySavedTrackWhereInput!]
}

input PartySavedTrackWhereUniqueInput {
  id: ID
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
  normalizedTitle: String
  normalizedTitle_not: String
  normalizedTitle_in: [String!]
  normalizedTitle_not_in: [String!]
  normalizedTitle_lt: String
  normalizedTitle_lte: String
  normalizedTitle_gt: String
  normalizedTitle_gte: String
  normalizedTitle_contains: String
  normalizedTitle_not_contains: String
  normalizedTitle_starts_with: String
  normalizedTitle_not_starts_with: String
  normalizedTitle_ends_with: String
  normalizedTitle_not_ends_with: String
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
  inviteSecret: String
  inviteSecret_not: String
  inviteSecret_in: [String!]
  inviteSecret_not_in: [String!]
  inviteSecret_lt: String
  inviteSecret_lte: String
  inviteSecret_gt: String
  inviteSecret_gte: String
  inviteSecret_contains: String
  inviteSecret_not_contains: String
  inviteSecret_starts_with: String
  inviteSecret_not_starts_with: String
  inviteSecret_ends_with: String
  inviteSecret_not_ends_with: String
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
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String
  playlist: PlaylistUpdateManyWithoutPartiesInput
  savedTracks: PartySavedTrackUpdateManyWithoutPartyInput
  cart: PartyCartUpdateOneRequiredWithoutPartyInput
}

input PartyUpdateInput {
  title: String
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String
  playlist: PlaylistUpdateManyWithoutPartiesInput
  savedTracks: PartySavedTrackUpdateManyWithoutPartyInput
  cart: PartyCartUpdateOneRequiredWithoutPartyInput
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
  delete: [PartyWhereUniqueInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [PartyScalarWhereInput!]
  updateMany: [PartyUpdateManyWithWhereNestedInput!]
}

input PartyUpdateManyWithoutPlaylistInput {
  create: [PartyCreateWithoutPlaylistInput!]
  delete: [PartyWhereUniqueInput!]
  connect: [PartyWhereUniqueInput!]
  set: [PartyWhereUniqueInput!]
  disconnect: [PartyWhereUniqueInput!]
  update: [PartyUpdateWithWhereUniqueWithoutPlaylistInput!]
  upsert: [PartyUpsertWithWhereUniqueWithoutPlaylistInput!]
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

input PartyUpdateOneRequiredWithoutCartInput {
  create: PartyCreateWithoutCartInput
  update: PartyUpdateWithoutCartDataInput
  upsert: PartyUpsertWithoutCartInput
  connect: PartyWhereUniqueInput
}

input PartyUpdateOneRequiredWithoutSavedTracksInput {
  create: PartyCreateWithoutSavedTracksInput
  update: PartyUpdateWithoutSavedTracksDataInput
  upsert: PartyUpsertWithoutSavedTracksInput
  connect: PartyWhereUniqueInput
}

input PartyUpdateWithoutCartDataInput {
  title: String
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String
  playlist: PlaylistUpdateManyWithoutPartiesInput
  savedTracks: PartySavedTrackUpdateManyWithoutPartyInput
}

input PartyUpdateWithoutMembersDataInput {
  title: String
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  start: DateTime
  end: DateTime
  inviteSecret: String
  playlist: PlaylistUpdateManyWithoutPartiesInput
  savedTracks: PartySavedTrackUpdateManyWithoutPartyInput
  cart: PartyCartUpdateOneRequiredWithoutPartyInput
}

input PartyUpdateWithoutPlaylistDataInput {
  title: String
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String
  savedTracks: PartySavedTrackUpdateManyWithoutPartyInput
  cart: PartyCartUpdateOneRequiredWithoutPartyInput
}

input PartyUpdateWithoutSavedTracksDataInput {
  title: String
  normalizedTitle: String
  description: String
  author: UserUpdateOneRequiredInput
  location: LocationUpdateOneRequiredInput
  games: GameUpdateManyInput
  colorTint: String
  isPublic: Boolean
  members: UserUpdateManyWithoutPartiesInput
  start: DateTime
  end: DateTime
  inviteSecret: String
  playlist: PlaylistUpdateManyWithoutPartiesInput
  cart: PartyCartUpdateOneRequiredWithoutPartyInput
}

input PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutMembersDataInput!
}

input PartyUpdateWithWhereUniqueWithoutPlaylistInput {
  where: PartyWhereUniqueInput!
  data: PartyUpdateWithoutPlaylistDataInput!
}

input PartyUpsertNestedInput {
  update: PartyUpdateDataInput!
  create: PartyCreateInput!
}

input PartyUpsertWithoutCartInput {
  update: PartyUpdateWithoutCartDataInput!
  create: PartyCreateWithoutCartInput!
}

input PartyUpsertWithoutSavedTracksInput {
  update: PartyUpdateWithoutSavedTracksDataInput!
  create: PartyCreateWithoutSavedTracksInput!
}

input PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutMembersDataInput!
  create: PartyCreateWithoutMembersInput!
}

input PartyUpsertWithWhereUniqueWithoutPlaylistInput {
  where: PartyWhereUniqueInput!
  update: PartyUpdateWithoutPlaylistDataInput!
  create: PartyCreateWithoutPlaylistInput!
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
  normalizedTitle: String
  normalizedTitle_not: String
  normalizedTitle_in: [String!]
  normalizedTitle_not_in: [String!]
  normalizedTitle_lt: String
  normalizedTitle_lte: String
  normalizedTitle_gt: String
  normalizedTitle_gte: String
  normalizedTitle_contains: String
  normalizedTitle_not_contains: String
  normalizedTitle_starts_with: String
  normalizedTitle_not_starts_with: String
  normalizedTitle_ends_with: String
  normalizedTitle_not_ends_with: String
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
  inviteSecret: String
  inviteSecret_not: String
  inviteSecret_in: [String!]
  inviteSecret_not_in: [String!]
  inviteSecret_lt: String
  inviteSecret_lte: String
  inviteSecret_gt: String
  inviteSecret_gte: String
  inviteSecret_contains: String
  inviteSecret_not_contains: String
  inviteSecret_starts_with: String
  inviteSecret_not_starts_with: String
  inviteSecret_ends_with: String
  inviteSecret_not_ends_with: String
  playlist_every: PlaylistWhereInput
  playlist_some: PlaylistWhereInput
  playlist_none: PlaylistWhereInput
  savedTracks_every: PartySavedTrackWhereInput
  savedTracks_some: PartySavedTrackWhereInput
  savedTracks_none: PartySavedTrackWhereInput
  cart: PartyCartWhereInput
  AND: [PartyWhereInput!]
  OR: [PartyWhereInput!]
  NOT: [PartyWhereInput!]
}

input PartyWhereUniqueInput {
  id: ID
  inviteSecret: String
}

type Playlist {
  id: ID!
  spotifyId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  uri: String!
  spotifyExternalUrl: String!
  user: User!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  name: String!
  imageUrl: String!
  tracks(where: PartySavedTrackWhereInput, orderBy: PartySavedTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartySavedTrack!]
  importable: Boolean!
}

type PlaylistConnection {
  pageInfo: PageInfo!
  edges: [PlaylistEdge]!
  aggregate: AggregatePlaylist!
}

input PlaylistCreateInput {
  id: ID
  spotifyId: ID!
  uri: String!
  spotifyExternalUrl: String!
  user: UserCreateOneInput!
  parties: PartyCreateManyWithoutPlaylistInput
  name: String!
  imageUrl: String!
  tracks: PartySavedTrackCreateManyInput
  importable: Boolean
}

input PlaylistCreateManyWithoutPartiesInput {
  create: [PlaylistCreateWithoutPartiesInput!]
  connect: [PlaylistWhereUniqueInput!]
}

input PlaylistCreateWithoutPartiesInput {
  id: ID
  spotifyId: ID!
  uri: String!
  spotifyExternalUrl: String!
  user: UserCreateOneInput!
  name: String!
  imageUrl: String!
  tracks: PartySavedTrackCreateManyInput
  importable: Boolean
}

type PlaylistEdge {
  node: Playlist!
  cursor: String!
}

enum PlaylistOrderByInput {
  id_ASC
  id_DESC
  spotifyId_ASC
  spotifyId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  uri_ASC
  uri_DESC
  spotifyExternalUrl_ASC
  spotifyExternalUrl_DESC
  name_ASC
  name_DESC
  imageUrl_ASC
  imageUrl_DESC
  importable_ASC
  importable_DESC
}

type PlaylistPreviousValues {
  id: ID!
  spotifyId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  uri: String!
  spotifyExternalUrl: String!
  name: String!
  imageUrl: String!
  importable: Boolean!
}

input PlaylistScalarWhereInput {
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
  spotifyId: ID
  spotifyId_not: ID
  spotifyId_in: [ID!]
  spotifyId_not_in: [ID!]
  spotifyId_lt: ID
  spotifyId_lte: ID
  spotifyId_gt: ID
  spotifyId_gte: ID
  spotifyId_contains: ID
  spotifyId_not_contains: ID
  spotifyId_starts_with: ID
  spotifyId_not_starts_with: ID
  spotifyId_ends_with: ID
  spotifyId_not_ends_with: ID
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
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  spotifyExternalUrl: String
  spotifyExternalUrl_not: String
  spotifyExternalUrl_in: [String!]
  spotifyExternalUrl_not_in: [String!]
  spotifyExternalUrl_lt: String
  spotifyExternalUrl_lte: String
  spotifyExternalUrl_gt: String
  spotifyExternalUrl_gte: String
  spotifyExternalUrl_contains: String
  spotifyExternalUrl_not_contains: String
  spotifyExternalUrl_starts_with: String
  spotifyExternalUrl_not_starts_with: String
  spotifyExternalUrl_ends_with: String
  spotifyExternalUrl_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  importable: Boolean
  importable_not: Boolean
  AND: [PlaylistScalarWhereInput!]
  OR: [PlaylistScalarWhereInput!]
  NOT: [PlaylistScalarWhereInput!]
}

type PlaylistSubscriptionPayload {
  mutation: MutationType!
  node: Playlist
  updatedFields: [String!]
  previousValues: PlaylistPreviousValues
}

input PlaylistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaylistWhereInput
  AND: [PlaylistSubscriptionWhereInput!]
  OR: [PlaylistSubscriptionWhereInput!]
  NOT: [PlaylistSubscriptionWhereInput!]
}

input PlaylistUpdateInput {
  spotifyId: ID
  uri: String
  spotifyExternalUrl: String
  user: UserUpdateOneRequiredInput
  parties: PartyUpdateManyWithoutPlaylistInput
  name: String
  imageUrl: String
  tracks: PartySavedTrackUpdateManyInput
  importable: Boolean
}

input PlaylistUpdateManyDataInput {
  spotifyId: ID
  uri: String
  spotifyExternalUrl: String
  name: String
  imageUrl: String
  importable: Boolean
}

input PlaylistUpdateManyMutationInput {
  spotifyId: ID
  uri: String
  spotifyExternalUrl: String
  name: String
  imageUrl: String
  importable: Boolean
}

input PlaylistUpdateManyWithoutPartiesInput {
  create: [PlaylistCreateWithoutPartiesInput!]
  delete: [PlaylistWhereUniqueInput!]
  connect: [PlaylistWhereUniqueInput!]
  set: [PlaylistWhereUniqueInput!]
  disconnect: [PlaylistWhereUniqueInput!]
  update: [PlaylistUpdateWithWhereUniqueWithoutPartiesInput!]
  upsert: [PlaylistUpsertWithWhereUniqueWithoutPartiesInput!]
  deleteMany: [PlaylistScalarWhereInput!]
  updateMany: [PlaylistUpdateManyWithWhereNestedInput!]
}

input PlaylistUpdateManyWithWhereNestedInput {
  where: PlaylistScalarWhereInput!
  data: PlaylistUpdateManyDataInput!
}

input PlaylistUpdateWithoutPartiesDataInput {
  spotifyId: ID
  uri: String
  spotifyExternalUrl: String
  user: UserUpdateOneRequiredInput
  name: String
  imageUrl: String
  tracks: PartySavedTrackUpdateManyInput
  importable: Boolean
}

input PlaylistUpdateWithWhereUniqueWithoutPartiesInput {
  where: PlaylistWhereUniqueInput!
  data: PlaylistUpdateWithoutPartiesDataInput!
}

input PlaylistUpsertWithWhereUniqueWithoutPartiesInput {
  where: PlaylistWhereUniqueInput!
  update: PlaylistUpdateWithoutPartiesDataInput!
  create: PlaylistCreateWithoutPartiesInput!
}

input PlaylistWhereInput {
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
  spotifyId: ID
  spotifyId_not: ID
  spotifyId_in: [ID!]
  spotifyId_not_in: [ID!]
  spotifyId_lt: ID
  spotifyId_lte: ID
  spotifyId_gt: ID
  spotifyId_gte: ID
  spotifyId_contains: ID
  spotifyId_not_contains: ID
  spotifyId_starts_with: ID
  spotifyId_not_starts_with: ID
  spotifyId_ends_with: ID
  spotifyId_not_ends_with: ID
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
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  spotifyExternalUrl: String
  spotifyExternalUrl_not: String
  spotifyExternalUrl_in: [String!]
  spotifyExternalUrl_not_in: [String!]
  spotifyExternalUrl_lt: String
  spotifyExternalUrl_lte: String
  spotifyExternalUrl_gt: String
  spotifyExternalUrl_gte: String
  spotifyExternalUrl_contains: String
  spotifyExternalUrl_not_contains: String
  spotifyExternalUrl_starts_with: String
  spotifyExternalUrl_not_starts_with: String
  spotifyExternalUrl_ends_with: String
  spotifyExternalUrl_not_ends_with: String
  user: UserWhereInput
  parties_every: PartyWhereInput
  parties_some: PartyWhereInput
  parties_none: PartyWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  tracks_every: PartySavedTrackWhereInput
  tracks_some: PartySavedTrackWhereInput
  tracks_none: PartySavedTrackWhereInput
  importable: Boolean
  importable_not: Boolean
  AND: [PlaylistWhereInput!]
  OR: [PlaylistWhereInput!]
  NOT: [PlaylistWhereInput!]
}

input PlaylistWhereUniqueInput {
  id: ID
  spotifyId: ID
}

type Query {
  album(where: AlbumWhereUniqueInput!): Album
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album]!
  albumsConnection(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlbumConnection!
  artist(where: ArtistWhereUniqueInput!): Artist
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  chat(where: ChatWhereUniqueInput!): Chat
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  friendInvitation(where: FriendInvitationWhereUniqueInput!): FriendInvitation
  friendInvitations(where: FriendInvitationWhereInput, orderBy: FriendInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FriendInvitation]!
  friendInvitationsConnection(where: FriendInvitationWhereInput, orderBy: FriendInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FriendInvitationConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  party(where: PartyWhereUniqueInput!): Party
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party]!
  partiesConnection(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyConnection!
  partyCart(where: PartyCartWhereUniqueInput!): PartyCart
  partyCarts(where: PartyCartWhereInput, orderBy: PartyCartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyCart]!
  partyCartsConnection(where: PartyCartWhereInput, orderBy: PartyCartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyCartConnection!
  partyCartItem(where: PartyCartItemWhereUniqueInput!): PartyCartItem
  partyCartItems(where: PartyCartItemWhereInput, orderBy: PartyCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyCartItem]!
  partyCartItemsConnection(where: PartyCartItemWhereInput, orderBy: PartyCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyCartItemConnection!
  partyInvitation(where: PartyInvitationWhereUniqueInput!): PartyInvitation
  partyInvitations(where: PartyInvitationWhereInput, orderBy: PartyInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyInvitation]!
  partyInvitationsConnection(where: PartyInvitationWhereInput, orderBy: PartyInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyInvitationConnection!
  partySavedTrack(where: PartySavedTrackWhereUniqueInput!): PartySavedTrack
  partySavedTracks(where: PartySavedTrackWhereInput, orderBy: PartySavedTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartySavedTrack]!
  partySavedTracksConnection(where: PartySavedTrackWhereInput, orderBy: PartySavedTrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartySavedTrackConnection!
  playlist(where: PlaylistWhereUniqueInput!): Playlist
  playlists(where: PlaylistWhereInput, orderBy: PlaylistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Playlist]!
  playlistsConnection(where: PlaylistWhereInput, orderBy: PlaylistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaylistConnection!
  track(where: TrackWhereUniqueInput!): Track
  tracks(where: TrackWhereInput, orderBy: TrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Track]!
  tracksConnection(where: TrackWhereInput, orderBy: TrackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrackConnection!
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
  album(where: AlbumSubscriptionWhereInput): AlbumSubscriptionPayload
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  friendInvitation(where: FriendInvitationSubscriptionWhereInput): FriendInvitationSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  party(where: PartySubscriptionWhereInput): PartySubscriptionPayload
  partyCart(where: PartyCartSubscriptionWhereInput): PartyCartSubscriptionPayload
  partyCartItem(where: PartyCartItemSubscriptionWhereInput): PartyCartItemSubscriptionPayload
  partyInvitation(where: PartyInvitationSubscriptionWhereInput): PartyInvitationSubscriptionPayload
  partySavedTrack(where: PartySavedTrackSubscriptionWhereInput): PartySavedTrackSubscriptionPayload
  playlist(where: PlaylistSubscriptionWhereInput): PlaylistSubscriptionPayload
  track(where: TrackSubscriptionWhereInput): TrackSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Track {
  id: ID!
  name: String!
  album: Album!
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist!]
  duration: Int!
  preview_url: String
}

type TrackConnection {
  pageInfo: PageInfo!
  edges: [TrackEdge]!
  aggregate: AggregateTrack!
}

input TrackCreateInput {
  id: ID
  name: String!
  album: AlbumCreateOneInput!
  artists: ArtistCreateManyInput
  duration: Int!
  preview_url: String
}

type TrackEdge {
  node: Track!
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
  preview_url: String
}

type TrackSubscriptionPayload {
  mutation: MutationType!
  node: Track
  updatedFields: [String!]
  previousValues: TrackPreviousValues
}

input TrackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TrackWhereInput
  AND: [TrackSubscriptionWhereInput!]
  OR: [TrackSubscriptionWhereInput!]
  NOT: [TrackSubscriptionWhereInput!]
}

input TrackUpdateInput {
  name: String
  album: AlbumUpdateOneRequiredInput
  artists: ArtistUpdateManyInput
  duration: Int
  preview_url: String
}

input TrackUpdateManyMutationInput {
  name: String
  duration: Int
  preview_url: String
}

input TrackWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  album: AlbumWhereInput
  artists_every: ArtistWhereInput
  artists_some: ArtistWhereInput
  artists_none: ArtistWhereInput
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  preview_url: String
  preview_url_not: String
  preview_url_in: [String!]
  preview_url_not_in: [String!]
  preview_url_lt: String
  preview_url_lte: String
  preview_url_gt: String
  preview_url_gte: String
  preview_url_contains: String
  preview_url_not_contains: String
  preview_url_starts_with: String
  preview_url_not_starts_with: String
  preview_url_ends_with: String
  preview_url_not_ends_with: String
  AND: [TrackWhereInput!]
  OR: [TrackWhereInput!]
  NOT: [TrackWhereInput!]
}

input TrackWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties(where: PartyWhereInput, orderBy: PartyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Party!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  pendingFriendInvitations(where: FriendInvitationWhereInput, orderBy: FriendInvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FriendInvitation!]
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
  isPrivate: Boolean!
  cartItems(where: PartyCartItemWhereInput, orderBy: PartyCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyCartItem!]
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
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
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

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartItemsInput {
  create: UserCreateWithoutCartItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPendingFriendInvitationsInput {
  create: UserCreateWithoutPendingFriendInvitationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPendingPartyInvitationsInput {
  create: UserCreateWithoutPendingPartyInvitationsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCartItemsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
}

input UserCreateWithoutChatsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
}

input UserCreateWithoutFriendsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
}

input UserCreateWithoutPartiesInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  friends: UserCreateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
}

input UserCreateWithoutPendingFriendInvitationsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingPartyInvitations: PartyInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
}

input UserCreateWithoutPendingPartyInvitationsInput {
  id: ID
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  parties: PartyCreateManyWithoutMembersInput
  friends: UserCreateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationCreateManyWithoutUserInput
  chats: ChatCreateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemCreateManyWithoutUserInput
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
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  isPrivate_ASC
  isPrivate_DESC
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
  isPrivate: Boolean!
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
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: DateTime
  resetTokenExpiry_not: DateTime
  resetTokenExpiry_in: [DateTime!]
  resetTokenExpiry_not_in: [DateTime!]
  resetTokenExpiry_lt: DateTime
  resetTokenExpiry_lte: DateTime
  resetTokenExpiry_gt: DateTime
  resetTokenExpiry_gte: DateTime
  isPrivate: Boolean
  isPrivate_not: Boolean
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
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
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
  isPrivate: Boolean
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
  isPrivate: Boolean
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

input UserUpdateOneRequiredWithoutCartItemsInput {
  create: UserCreateWithoutCartItemsInput
  update: UserUpdateWithoutCartItemsDataInput
  upsert: UserUpsertWithoutCartItemsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPendingFriendInvitationsInput {
  create: UserCreateWithoutPendingFriendInvitationsInput
  update: UserUpdateWithoutPendingFriendInvitationsDataInput
  upsert: UserUpsertWithoutPendingFriendInvitationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPendingPartyInvitationsInput {
  create: UserCreateWithoutPendingPartyInvitationsInput
  update: UserUpdateWithoutPendingPartyInvitationsDataInput
  upsert: UserUpsertWithoutPendingPartyInvitationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCartItemsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
}

input UserUpdateWithoutChatsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
}

input UserUpdateWithoutFriendsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
}

input UserUpdateWithoutPartiesDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  friends: UserUpdateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
}

input UserUpdateWithoutPendingFriendInvitationsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingPartyInvitations: PartyInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
}

input UserUpdateWithoutPendingPartyInvitationsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  parties: PartyUpdateManyWithoutMembersInput
  friends: UserUpdateManyWithoutFriendsInput
  pendingFriendInvitations: FriendInvitationUpdateManyWithoutUserInput
  chats: ChatUpdateManyWithoutMembersInput
  lastOnline: DateTime
  deleted: Boolean
  provider: SocialMediaType
  avatar: String
  thirdPartyId: String
  resetToken: String
  resetTokenExpiry: DateTime
  isPrivate: Boolean
  cartItems: PartyCartItemUpdateManyWithoutUserInput
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

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCartItemsInput {
  update: UserUpdateWithoutCartItemsDataInput!
  create: UserCreateWithoutCartItemsInput!
}

input UserUpsertWithoutPendingFriendInvitationsInput {
  update: UserUpdateWithoutPendingFriendInvitationsDataInput!
  create: UserCreateWithoutPendingFriendInvitationsInput!
}

input UserUpsertWithoutPendingPartyInvitationsInput {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput!
  create: UserCreateWithoutPendingPartyInvitationsInput!
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
  pendingFriendInvitations_every: FriendInvitationWhereInput
  pendingFriendInvitations_some: FriendInvitationWhereInput
  pendingFriendInvitations_none: FriendInvitationWhereInput
  pendingPartyInvitations_every: PartyInvitationWhereInput
  pendingPartyInvitations_some: PartyInvitationWhereInput
  pendingPartyInvitations_none: PartyInvitationWhereInput
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
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: DateTime
  resetTokenExpiry_not: DateTime
  resetTokenExpiry_in: [DateTime!]
  resetTokenExpiry_not_in: [DateTime!]
  resetTokenExpiry_lt: DateTime
  resetTokenExpiry_lte: DateTime
  resetTokenExpiry_gt: DateTime
  resetTokenExpiry_gte: DateTime
  isPrivate: Boolean
  isPrivate_not: Boolean
  cartItems_every: PartyCartItemWhereInput
  cartItems_some: PartyCartItemWhereInput
  cartItems_none: PartyCartItemWhereInput
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

export type AlbumOrderByInput =   'id_ASC' |
  'id_DESC' |
  'spotifyId_ASC' |
  'spotifyId_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'name_ASC' |
  'name_DESC' |
  'releaseDate_ASC' |
  'releaseDate_DESC' |
  'imageUrl_ASC' |
  'imageUrl_DESC'

export type ArtistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'spotifyId_ASC' |
  'spotifyId_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'name_ASC' |
  'name_DESC'

export type ChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type FriendInvitationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'invitedUserId_ASC' |
  'invitedUserId_DESC'

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

export type ImageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'height_ASC' |
  'height_DESC' |
  'width_ASC' |
  'width_DESC' |
  'url_ASC' |
  'url_DESC'

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

export type PartyCartItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'price_ASC' |
  'price_DESC' |
  'status_ASC' |
  'status_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type PartyCartItemStatus =   'PENDING' |
  'ACCEPTED' |
  'REJECTED'

export type PartyCartOrderByInput =   'id_ASC' |
  'id_DESC'

export type PartyInvitationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'invitedUserId_ASC' |
  'invitedUserId_DESC' |
  'partyId_ASC' |
  'partyId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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
  'inviteSecret_DESC'

export type PartySavedTrackOrderByInput =   'id_ASC' |
  'id_DESC' |
  'spotifyId_ASC' |
  'spotifyId_DESC' |
  'durationMs_ASC' |
  'durationMs_DESC' |
  'explicit_ASC' |
  'explicit_DESC' |
  'name_ASC' |
  'name_DESC' |
  'previewUrl_ASC' |
  'previewUrl_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'stringArtists_ASC' |
  'stringArtists_DESC' |
  'length_ASC' |
  'length_DESC' |
  'popularity_ASC' |
  'popularity_DESC'

export type PlaylistOrderByInput =   'id_ASC' |
  'id_DESC' |
  'spotifyId_ASC' |
  'spotifyId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'spotifyExternalUrl_ASC' |
  'spotifyExternalUrl_DESC' |
  'name_ASC' |
  'name_DESC' |
  'imageUrl_ASC' |
  'imageUrl_DESC' |
  'importable_ASC' |
  'importable_DESC'

export type SocialMediaType =   'FACEBOOK' |
  'SPOTIFY' |
  'TWITTER'

export type TrackOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'preview_url_ASC' |
  'preview_url_DESC'

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
  'resetTokenExpiry_DESC' |
  'isPrivate_ASC' |
  'isPrivate_DESC'

export interface AlbumCreateInput {
  id?: ID_Input | null
  spotifyId: ID_Output
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

export interface AlbumCreateOneInput {
  create?: AlbumCreateInput | null
  connect?: AlbumWhereUniqueInput | null
}

export interface AlbumSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AlbumWhereInput | null
  AND?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null
  OR?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null
  NOT?: AlbumSubscriptionWhereInput[] | AlbumSubscriptionWhereInput | null
}

export interface AlbumUpdateDataInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
  releaseDate?: String | null
  imageUrl?: String | null
}

export interface AlbumUpdateInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
  releaseDate?: String | null
  imageUrl?: String | null
}

export interface AlbumUpdateManyMutationInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
  releaseDate?: String | null
  imageUrl?: String | null
}

export interface AlbumUpdateOneRequiredInput {
  create?: AlbumCreateInput | null
  update?: AlbumUpdateDataInput | null
  upsert?: AlbumUpsertNestedInput | null
  connect?: AlbumWhereUniqueInput | null
}

export interface AlbumUpsertNestedInput {
  update: AlbumUpdateDataInput
  create: AlbumCreateInput
}

export interface AlbumWhereInput {
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
  spotifyId?: ID_Input | null
  spotifyId_not?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  spotifyId_not_in?: ID_Output[] | ID_Output | null
  spotifyId_lt?: ID_Input | null
  spotifyId_lte?: ID_Input | null
  spotifyId_gt?: ID_Input | null
  spotifyId_gte?: ID_Input | null
  spotifyId_contains?: ID_Input | null
  spotifyId_not_contains?: ID_Input | null
  spotifyId_starts_with?: ID_Input | null
  spotifyId_not_starts_with?: ID_Input | null
  spotifyId_ends_with?: ID_Input | null
  spotifyId_not_ends_with?: ID_Input | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  releaseDate?: String | null
  releaseDate_not?: String | null
  releaseDate_in?: String[] | String | null
  releaseDate_not_in?: String[] | String | null
  releaseDate_lt?: String | null
  releaseDate_lte?: String | null
  releaseDate_gt?: String | null
  releaseDate_gte?: String | null
  releaseDate_contains?: String | null
  releaseDate_not_contains?: String | null
  releaseDate_starts_with?: String | null
  releaseDate_not_starts_with?: String | null
  releaseDate_ends_with?: String | null
  releaseDate_not_ends_with?: String | null
  imageUrl?: String | null
  imageUrl_not?: String | null
  imageUrl_in?: String[] | String | null
  imageUrl_not_in?: String[] | String | null
  imageUrl_lt?: String | null
  imageUrl_lte?: String | null
  imageUrl_gt?: String | null
  imageUrl_gte?: String | null
  imageUrl_contains?: String | null
  imageUrl_not_contains?: String | null
  imageUrl_starts_with?: String | null
  imageUrl_not_starts_with?: String | null
  imageUrl_ends_with?: String | null
  imageUrl_not_ends_with?: String | null
  AND?: AlbumWhereInput[] | AlbumWhereInput | null
  OR?: AlbumWhereInput[] | AlbumWhereInput | null
  NOT?: AlbumWhereInput[] | AlbumWhereInput | null
}

export interface AlbumWhereUniqueInput {
  id?: ID_Input | null
}

export interface ArtistCreateInput {
  id?: ID_Input | null
  spotifyId: ID_Output
  uri: String
  name: String
}

export interface ArtistCreateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput | null
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null
}

export interface ArtistScalarWhereInput {
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
  spotifyId?: ID_Input | null
  spotifyId_not?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  spotifyId_not_in?: ID_Output[] | ID_Output | null
  spotifyId_lt?: ID_Input | null
  spotifyId_lte?: ID_Input | null
  spotifyId_gt?: ID_Input | null
  spotifyId_gte?: ID_Input | null
  spotifyId_contains?: ID_Input | null
  spotifyId_not_contains?: ID_Input | null
  spotifyId_starts_with?: ID_Input | null
  spotifyId_not_starts_with?: ID_Input | null
  spotifyId_ends_with?: ID_Input | null
  spotifyId_not_ends_with?: ID_Input | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  AND?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null
  OR?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null
  NOT?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null
}

export interface ArtistSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ArtistWhereInput | null
  AND?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null
  OR?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null
  NOT?: ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput | null
}

export interface ArtistUpdateDataInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
}

export interface ArtistUpdateInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
}

export interface ArtistUpdateManyDataInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
}

export interface ArtistUpdateManyInput {
  create?: ArtistCreateInput[] | ArtistCreateInput | null
  update?: ArtistUpdateWithWhereUniqueNestedInput[] | ArtistUpdateWithWhereUniqueNestedInput | null
  upsert?: ArtistUpsertWithWhereUniqueNestedInput[] | ArtistUpsertWithWhereUniqueNestedInput | null
  delete?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null
  connect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null
  set?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null
  disconnect?: ArtistWhereUniqueInput[] | ArtistWhereUniqueInput | null
  deleteMany?: ArtistScalarWhereInput[] | ArtistScalarWhereInput | null
  updateMany?: ArtistUpdateManyWithWhereNestedInput[] | ArtistUpdateManyWithWhereNestedInput | null
}

export interface ArtistUpdateManyMutationInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  name?: String | null
}

export interface ArtistUpdateManyWithWhereNestedInput {
  where: ArtistScalarWhereInput
  data: ArtistUpdateManyDataInput
}

export interface ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput
  data: ArtistUpdateDataInput
}

export interface ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput
  update: ArtistUpdateDataInput
  create: ArtistCreateInput
}

export interface ArtistWhereInput {
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
  spotifyId?: ID_Input | null
  spotifyId_not?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  spotifyId_not_in?: ID_Output[] | ID_Output | null
  spotifyId_lt?: ID_Input | null
  spotifyId_lte?: ID_Input | null
  spotifyId_gt?: ID_Input | null
  spotifyId_gte?: ID_Input | null
  spotifyId_contains?: ID_Input | null
  spotifyId_not_contains?: ID_Input | null
  spotifyId_starts_with?: ID_Input | null
  spotifyId_not_starts_with?: ID_Input | null
  spotifyId_ends_with?: ID_Input | null
  spotifyId_not_ends_with?: ID_Input | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  AND?: ArtistWhereInput[] | ArtistWhereInput | null
  OR?: ArtistWhereInput[] | ArtistWhereInput | null
  NOT?: ArtistWhereInput[] | ArtistWhereInput | null
}

export interface ArtistWhereUniqueInput {
  id?: ID_Input | null
}

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

export interface FriendInvitationCreateInput {
  id?: ID_Input | null
  invitedBy: UserCreateOneInput
  user: UserCreateOneWithoutPendingFriendInvitationsInput
  invitedUserId: String
}

export interface FriendInvitationCreateManyWithoutUserInput {
  create?: FriendInvitationCreateWithoutUserInput[] | FriendInvitationCreateWithoutUserInput | null
  connect?: FriendInvitationWhereUniqueInput[] | FriendInvitationWhereUniqueInput | null
}

export interface FriendInvitationCreateWithoutUserInput {
  id?: ID_Input | null
  invitedBy: UserCreateOneInput
  invitedUserId: String
}

export interface FriendInvitationScalarWhereInput {
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
  invitedUserId?: String | null
  invitedUserId_not?: String | null
  invitedUserId_in?: String[] | String | null
  invitedUserId_not_in?: String[] | String | null
  invitedUserId_lt?: String | null
  invitedUserId_lte?: String | null
  invitedUserId_gt?: String | null
  invitedUserId_gte?: String | null
  invitedUserId_contains?: String | null
  invitedUserId_not_contains?: String | null
  invitedUserId_starts_with?: String | null
  invitedUserId_not_starts_with?: String | null
  invitedUserId_ends_with?: String | null
  invitedUserId_not_ends_with?: String | null
  AND?: FriendInvitationScalarWhereInput[] | FriendInvitationScalarWhereInput | null
  OR?: FriendInvitationScalarWhereInput[] | FriendInvitationScalarWhereInput | null
  NOT?: FriendInvitationScalarWhereInput[] | FriendInvitationScalarWhereInput | null
}

export interface FriendInvitationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FriendInvitationWhereInput | null
  AND?: FriendInvitationSubscriptionWhereInput[] | FriendInvitationSubscriptionWhereInput | null
  OR?: FriendInvitationSubscriptionWhereInput[] | FriendInvitationSubscriptionWhereInput | null
  NOT?: FriendInvitationSubscriptionWhereInput[] | FriendInvitationSubscriptionWhereInput | null
}

export interface FriendInvitationUpdateInput {
  invitedBy?: UserUpdateOneRequiredInput | null
  user?: UserUpdateOneRequiredWithoutPendingFriendInvitationsInput | null
  invitedUserId?: String | null
}

export interface FriendInvitationUpdateManyDataInput {
  invitedUserId?: String | null
}

export interface FriendInvitationUpdateManyMutationInput {
  invitedUserId?: String | null
}

export interface FriendInvitationUpdateManyWithoutUserInput {
  create?: FriendInvitationCreateWithoutUserInput[] | FriendInvitationCreateWithoutUserInput | null
  delete?: FriendInvitationWhereUniqueInput[] | FriendInvitationWhereUniqueInput | null
  connect?: FriendInvitationWhereUniqueInput[] | FriendInvitationWhereUniqueInput | null
  set?: FriendInvitationWhereUniqueInput[] | FriendInvitationWhereUniqueInput | null
  disconnect?: FriendInvitationWhereUniqueInput[] | FriendInvitationWhereUniqueInput | null
  update?: FriendInvitationUpdateWithWhereUniqueWithoutUserInput[] | FriendInvitationUpdateWithWhereUniqueWithoutUserInput | null
  upsert?: FriendInvitationUpsertWithWhereUniqueWithoutUserInput[] | FriendInvitationUpsertWithWhereUniqueWithoutUserInput | null
  deleteMany?: FriendInvitationScalarWhereInput[] | FriendInvitationScalarWhereInput | null
  updateMany?: FriendInvitationUpdateManyWithWhereNestedInput[] | FriendInvitationUpdateManyWithWhereNestedInput | null
}

export interface FriendInvitationUpdateManyWithWhereNestedInput {
  where: FriendInvitationScalarWhereInput
  data: FriendInvitationUpdateManyDataInput
}

export interface FriendInvitationUpdateWithoutUserDataInput {
  invitedBy?: UserUpdateOneRequiredInput | null
  invitedUserId?: String | null
}

export interface FriendInvitationUpdateWithWhereUniqueWithoutUserInput {
  where: FriendInvitationWhereUniqueInput
  data: FriendInvitationUpdateWithoutUserDataInput
}

export interface FriendInvitationUpsertWithWhereUniqueWithoutUserInput {
  where: FriendInvitationWhereUniqueInput
  update: FriendInvitationUpdateWithoutUserDataInput
  create: FriendInvitationCreateWithoutUserInput
}

export interface FriendInvitationWhereInput {
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
  invitedBy?: UserWhereInput | null
  user?: UserWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  invitedUserId?: String | null
  invitedUserId_not?: String | null
  invitedUserId_in?: String[] | String | null
  invitedUserId_not_in?: String[] | String | null
  invitedUserId_lt?: String | null
  invitedUserId_lte?: String | null
  invitedUserId_gt?: String | null
  invitedUserId_gte?: String | null
  invitedUserId_contains?: String | null
  invitedUserId_not_contains?: String | null
  invitedUserId_starts_with?: String | null
  invitedUserId_not_starts_with?: String | null
  invitedUserId_ends_with?: String | null
  invitedUserId_not_ends_with?: String | null
  AND?: FriendInvitationWhereInput[] | FriendInvitationWhereInput | null
  OR?: FriendInvitationWhereInput[] | FriendInvitationWhereInput | null
  NOT?: FriendInvitationWhereInput[] | FriendInvitationWhereInput | null
}

export interface FriendInvitationWhereUniqueInput {
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

export interface ImageCreateInput {
  id?: ID_Input | null
  height: Int
  width: Int
  url: String
}

export interface ImageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ImageWhereInput | null
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
}

export interface ImageUpdateInput {
  height?: Int | null
  width?: Int | null
  url?: String | null
}

export interface ImageUpdateManyMutationInput {
  height?: Int | null
  width?: Int | null
  url?: String | null
}

export interface ImageWhereInput {
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
  height?: Int | null
  height_not?: Int | null
  height_in?: Int[] | Int | null
  height_not_in?: Int[] | Int | null
  height_lt?: Int | null
  height_lte?: Int | null
  height_gt?: Int | null
  height_gte?: Int | null
  width?: Int | null
  width_not?: Int | null
  width_in?: Int[] | Int | null
  width_not_in?: Int[] | Int | null
  width_lt?: Int | null
  width_lte?: Int | null
  width_gt?: Int | null
  width_gte?: Int | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  AND?: ImageWhereInput[] | ImageWhereInput | null
  OR?: ImageWhereInput[] | ImageWhereInput | null
  NOT?: ImageWhereInput[] | ImageWhereInput | null
}

export interface ImageWhereUniqueInput {
  id?: ID_Input | null
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
  author: UserCreateOneInput
  chat: ChatCreateOneWithoutMessagesInput
  content: String
}

export interface MessageCreateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[] | MessageCreateWithoutChatInput | null
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput | null
}

export interface MessageCreateWithoutChatInput {
  id?: ID_Input | null
  author: UserCreateOneInput
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
  author?: UserUpdateOneRequiredInput | null
  chat?: ChatUpdateOneRequiredWithoutMessagesInput | null
  content?: String | null
}

export interface MessageUpdateManyDataInput {
  content?: String | null
}

export interface MessageUpdateManyMutationInput {
  content?: String | null
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

export interface MessageUpdateWithoutChatDataInput {
  author?: UserUpdateOneRequiredInput | null
  content?: String | null
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

export interface PartyCartCreateInput {
  id?: ID_Input | null
  party: PartyCreateOneWithoutCartInput
  items?: PartyCartItemCreateManyWithoutCartInput | null
}

export interface PartyCartCreateOneWithoutItemsInput {
  create?: PartyCartCreateWithoutItemsInput | null
  connect?: PartyCartWhereUniqueInput | null
}

export interface PartyCartCreateOneWithoutPartyInput {
  create?: PartyCartCreateWithoutPartyInput | null
  connect?: PartyCartWhereUniqueInput | null
}

export interface PartyCartCreateWithoutItemsInput {
  id?: ID_Input | null
  party: PartyCreateOneWithoutCartInput
}

export interface PartyCartCreateWithoutPartyInput {
  id?: ID_Input | null
  items?: PartyCartItemCreateManyWithoutCartInput | null
}

export interface PartyCartItemCreateInput {
  id?: ID_Input | null
  cart: PartyCartCreateOneWithoutItemsInput
  user: UserCreateOneWithoutCartItemsInput
  name: String
  description?: String | null
  price: Float
  status: PartyCartItemStatus
  quantity?: Int | null
}

export interface PartyCartItemCreateManyWithoutCartInput {
  create?: PartyCartItemCreateWithoutCartInput[] | PartyCartItemCreateWithoutCartInput | null
  connect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
}

export interface PartyCartItemCreateManyWithoutUserInput {
  create?: PartyCartItemCreateWithoutUserInput[] | PartyCartItemCreateWithoutUserInput | null
  connect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
}

export interface PartyCartItemCreateWithoutCartInput {
  id?: ID_Input | null
  user: UserCreateOneWithoutCartItemsInput
  name: String
  description?: String | null
  price: Float
  status: PartyCartItemStatus
  quantity?: Int | null
}

export interface PartyCartItemCreateWithoutUserInput {
  id?: ID_Input | null
  cart: PartyCartCreateOneWithoutItemsInput
  name: String
  description?: String | null
  price: Float
  status: PartyCartItemStatus
  quantity?: Int | null
}

export interface PartyCartItemScalarWhereInput {
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
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
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
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  status?: PartyCartItemStatus | null
  status_not?: PartyCartItemStatus | null
  status_in?: PartyCartItemStatus[] | PartyCartItemStatus | null
  status_not_in?: PartyCartItemStatus[] | PartyCartItemStatus | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  AND?: PartyCartItemScalarWhereInput[] | PartyCartItemScalarWhereInput | null
  OR?: PartyCartItemScalarWhereInput[] | PartyCartItemScalarWhereInput | null
  NOT?: PartyCartItemScalarWhereInput[] | PartyCartItemScalarWhereInput | null
}

export interface PartyCartItemSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyCartItemWhereInput | null
  AND?: PartyCartItemSubscriptionWhereInput[] | PartyCartItemSubscriptionWhereInput | null
  OR?: PartyCartItemSubscriptionWhereInput[] | PartyCartItemSubscriptionWhereInput | null
  NOT?: PartyCartItemSubscriptionWhereInput[] | PartyCartItemSubscriptionWhereInput | null
}

export interface PartyCartItemUpdateInput {
  cart?: PartyCartUpdateOneRequiredWithoutItemsInput | null
  user?: UserUpdateOneRequiredWithoutCartItemsInput | null
  name?: String | null
  description?: String | null
  price?: Float | null
  status?: PartyCartItemStatus | null
  quantity?: Int | null
}

export interface PartyCartItemUpdateManyDataInput {
  name?: String | null
  description?: String | null
  price?: Float | null
  status?: PartyCartItemStatus | null
  quantity?: Int | null
}

export interface PartyCartItemUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  price?: Float | null
  status?: PartyCartItemStatus | null
  quantity?: Int | null
}

export interface PartyCartItemUpdateManyWithoutCartInput {
  create?: PartyCartItemCreateWithoutCartInput[] | PartyCartItemCreateWithoutCartInput | null
  delete?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  connect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  set?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  disconnect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  update?: PartyCartItemUpdateWithWhereUniqueWithoutCartInput[] | PartyCartItemUpdateWithWhereUniqueWithoutCartInput | null
  upsert?: PartyCartItemUpsertWithWhereUniqueWithoutCartInput[] | PartyCartItemUpsertWithWhereUniqueWithoutCartInput | null
  deleteMany?: PartyCartItemScalarWhereInput[] | PartyCartItemScalarWhereInput | null
  updateMany?: PartyCartItemUpdateManyWithWhereNestedInput[] | PartyCartItemUpdateManyWithWhereNestedInput | null
}

export interface PartyCartItemUpdateManyWithoutUserInput {
  create?: PartyCartItemCreateWithoutUserInput[] | PartyCartItemCreateWithoutUserInput | null
  delete?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  connect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  set?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  disconnect?: PartyCartItemWhereUniqueInput[] | PartyCartItemWhereUniqueInput | null
  update?: PartyCartItemUpdateWithWhereUniqueWithoutUserInput[] | PartyCartItemUpdateWithWhereUniqueWithoutUserInput | null
  upsert?: PartyCartItemUpsertWithWhereUniqueWithoutUserInput[] | PartyCartItemUpsertWithWhereUniqueWithoutUserInput | null
  deleteMany?: PartyCartItemScalarWhereInput[] | PartyCartItemScalarWhereInput | null
  updateMany?: PartyCartItemUpdateManyWithWhereNestedInput[] | PartyCartItemUpdateManyWithWhereNestedInput | null
}

export interface PartyCartItemUpdateManyWithWhereNestedInput {
  where: PartyCartItemScalarWhereInput
  data: PartyCartItemUpdateManyDataInput
}

export interface PartyCartItemUpdateWithoutCartDataInput {
  user?: UserUpdateOneRequiredWithoutCartItemsInput | null
  name?: String | null
  description?: String | null
  price?: Float | null
  status?: PartyCartItemStatus | null
  quantity?: Int | null
}

export interface PartyCartItemUpdateWithoutUserDataInput {
  cart?: PartyCartUpdateOneRequiredWithoutItemsInput | null
  name?: String | null
  description?: String | null
  price?: Float | null
  status?: PartyCartItemStatus | null
  quantity?: Int | null
}

export interface PartyCartItemUpdateWithWhereUniqueWithoutCartInput {
  where: PartyCartItemWhereUniqueInput
  data: PartyCartItemUpdateWithoutCartDataInput
}

export interface PartyCartItemUpdateWithWhereUniqueWithoutUserInput {
  where: PartyCartItemWhereUniqueInput
  data: PartyCartItemUpdateWithoutUserDataInput
}

export interface PartyCartItemUpsertWithWhereUniqueWithoutCartInput {
  where: PartyCartItemWhereUniqueInput
  update: PartyCartItemUpdateWithoutCartDataInput
  create: PartyCartItemCreateWithoutCartInput
}

export interface PartyCartItemUpsertWithWhereUniqueWithoutUserInput {
  where: PartyCartItemWhereUniqueInput
  update: PartyCartItemUpdateWithoutUserDataInput
  create: PartyCartItemCreateWithoutUserInput
}

export interface PartyCartItemWhereInput {
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
  cart?: PartyCartWhereInput | null
  user?: UserWhereInput | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
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
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  status?: PartyCartItemStatus | null
  status_not?: PartyCartItemStatus | null
  status_in?: PartyCartItemStatus[] | PartyCartItemStatus | null
  status_not_in?: PartyCartItemStatus[] | PartyCartItemStatus | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  AND?: PartyCartItemWhereInput[] | PartyCartItemWhereInput | null
  OR?: PartyCartItemWhereInput[] | PartyCartItemWhereInput | null
  NOT?: PartyCartItemWhereInput[] | PartyCartItemWhereInput | null
}

export interface PartyCartItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartyCartSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyCartWhereInput | null
  AND?: PartyCartSubscriptionWhereInput[] | PartyCartSubscriptionWhereInput | null
  OR?: PartyCartSubscriptionWhereInput[] | PartyCartSubscriptionWhereInput | null
  NOT?: PartyCartSubscriptionWhereInput[] | PartyCartSubscriptionWhereInput | null
}

export interface PartyCartUpdateInput {
  party?: PartyUpdateOneRequiredWithoutCartInput | null
  items?: PartyCartItemUpdateManyWithoutCartInput | null
}

export interface PartyCartUpdateOneRequiredWithoutItemsInput {
  create?: PartyCartCreateWithoutItemsInput | null
  update?: PartyCartUpdateWithoutItemsDataInput | null
  upsert?: PartyCartUpsertWithoutItemsInput | null
  connect?: PartyCartWhereUniqueInput | null
}

export interface PartyCartUpdateOneRequiredWithoutPartyInput {
  create?: PartyCartCreateWithoutPartyInput | null
  update?: PartyCartUpdateWithoutPartyDataInput | null
  upsert?: PartyCartUpsertWithoutPartyInput | null
  connect?: PartyCartWhereUniqueInput | null
}

export interface PartyCartUpdateWithoutItemsDataInput {
  party?: PartyUpdateOneRequiredWithoutCartInput | null
}

export interface PartyCartUpdateWithoutPartyDataInput {
  items?: PartyCartItemUpdateManyWithoutCartInput | null
}

export interface PartyCartUpsertWithoutItemsInput {
  update: PartyCartUpdateWithoutItemsDataInput
  create: PartyCartCreateWithoutItemsInput
}

export interface PartyCartUpsertWithoutPartyInput {
  update: PartyCartUpdateWithoutPartyDataInput
  create: PartyCartCreateWithoutPartyInput
}

export interface PartyCartWhereInput {
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
  items_every?: PartyCartItemWhereInput | null
  items_some?: PartyCartItemWhereInput | null
  items_none?: PartyCartItemWhereInput | null
  AND?: PartyCartWhereInput[] | PartyCartWhereInput | null
  OR?: PartyCartWhereInput[] | PartyCartWhereInput | null
  NOT?: PartyCartWhereInput[] | PartyCartWhereInput | null
}

export interface PartyCartWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartyCreateInput {
  id?: ID_Input | null
  title: String
  normalizedTitle: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  members?: UserCreateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret: String
  playlist?: PlaylistCreateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackCreateManyWithoutPartyInput | null
  cart: PartyCartCreateOneWithoutPartyInput
}

export interface PartyCreateManyWithoutMembersInput {
  create?: PartyCreateWithoutMembersInput[] | PartyCreateWithoutMembersInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateManyWithoutPlaylistInput {
  create?: PartyCreateWithoutPlaylistInput[] | PartyCreateWithoutPlaylistInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
}

export interface PartyCreateOneInput {
  create?: PartyCreateInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateOneWithoutCartInput {
  create?: PartyCreateWithoutCartInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateOneWithoutSavedTracksInput {
  create?: PartyCreateWithoutSavedTracksInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyCreateWithoutCartInput {
  id?: ID_Input | null
  title: String
  normalizedTitle: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  members?: UserCreateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret: String
  playlist?: PlaylistCreateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackCreateManyWithoutPartyInput | null
}

export interface PartyCreateWithoutMembersInput {
  id?: ID_Input | null
  title: String
  normalizedTitle: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret: String
  playlist?: PlaylistCreateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackCreateManyWithoutPartyInput | null
  cart: PartyCartCreateOneWithoutPartyInput
}

export interface PartyCreateWithoutPlaylistInput {
  id?: ID_Input | null
  title: String
  normalizedTitle: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  members?: UserCreateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret: String
  savedTracks?: PartySavedTrackCreateManyWithoutPartyInput | null
  cart: PartyCartCreateOneWithoutPartyInput
}

export interface PartyCreateWithoutSavedTracksInput {
  id?: ID_Input | null
  title: String
  normalizedTitle: String
  description: String
  author: UserCreateOneInput
  location: LocationCreateOneInput
  games?: GameCreateManyInput | null
  colorTint: String
  isPublic?: Boolean | null
  members?: UserCreateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret: String
  playlist?: PlaylistCreateManyWithoutPartiesInput | null
  cart: PartyCartCreateOneWithoutPartyInput
}

export interface PartyInvitationCreateInput {
  id?: ID_Input | null
  invitedBy: UserCreateOneInput
  user: UserCreateOneWithoutPendingPartyInvitationsInput
  party: PartyCreateOneInput
  invitedUserId: String
  partyId: String
}

export interface PartyInvitationCreateManyWithoutUserInput {
  create?: PartyInvitationCreateWithoutUserInput[] | PartyInvitationCreateWithoutUserInput | null
  connect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null
}

export interface PartyInvitationCreateWithoutUserInput {
  id?: ID_Input | null
  invitedBy: UserCreateOneInput
  party: PartyCreateOneInput
  invitedUserId: String
  partyId: String
}

export interface PartyInvitationScalarWhereInput {
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
  invitedUserId?: String | null
  invitedUserId_not?: String | null
  invitedUserId_in?: String[] | String | null
  invitedUserId_not_in?: String[] | String | null
  invitedUserId_lt?: String | null
  invitedUserId_lte?: String | null
  invitedUserId_gt?: String | null
  invitedUserId_gte?: String | null
  invitedUserId_contains?: String | null
  invitedUserId_not_contains?: String | null
  invitedUserId_starts_with?: String | null
  invitedUserId_not_starts_with?: String | null
  invitedUserId_ends_with?: String | null
  invitedUserId_not_ends_with?: String | null
  partyId?: String | null
  partyId_not?: String | null
  partyId_in?: String[] | String | null
  partyId_not_in?: String[] | String | null
  partyId_lt?: String | null
  partyId_lte?: String | null
  partyId_gt?: String | null
  partyId_gte?: String | null
  partyId_contains?: String | null
  partyId_not_contains?: String | null
  partyId_starts_with?: String | null
  partyId_not_starts_with?: String | null
  partyId_ends_with?: String | null
  partyId_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  AND?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null
  OR?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null
  NOT?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null
}

export interface PartyInvitationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartyInvitationWhereInput | null
  AND?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null
  OR?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null
  NOT?: PartyInvitationSubscriptionWhereInput[] | PartyInvitationSubscriptionWhereInput | null
}

export interface PartyInvitationUpdateInput {
  invitedBy?: UserUpdateOneRequiredInput | null
  user?: UserUpdateOneRequiredWithoutPendingPartyInvitationsInput | null
  party?: PartyUpdateOneRequiredInput | null
  invitedUserId?: String | null
  partyId?: String | null
}

export interface PartyInvitationUpdateManyDataInput {
  invitedUserId?: String | null
  partyId?: String | null
}

export interface PartyInvitationUpdateManyMutationInput {
  invitedUserId?: String | null
  partyId?: String | null
}

export interface PartyInvitationUpdateManyWithoutUserInput {
  create?: PartyInvitationCreateWithoutUserInput[] | PartyInvitationCreateWithoutUserInput | null
  delete?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null
  connect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null
  set?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null
  disconnect?: PartyInvitationWhereUniqueInput[] | PartyInvitationWhereUniqueInput | null
  update?: PartyInvitationUpdateWithWhereUniqueWithoutUserInput[] | PartyInvitationUpdateWithWhereUniqueWithoutUserInput | null
  upsert?: PartyInvitationUpsertWithWhereUniqueWithoutUserInput[] | PartyInvitationUpsertWithWhereUniqueWithoutUserInput | null
  deleteMany?: PartyInvitationScalarWhereInput[] | PartyInvitationScalarWhereInput | null
  updateMany?: PartyInvitationUpdateManyWithWhereNestedInput[] | PartyInvitationUpdateManyWithWhereNestedInput | null
}

export interface PartyInvitationUpdateManyWithWhereNestedInput {
  where: PartyInvitationScalarWhereInput
  data: PartyInvitationUpdateManyDataInput
}

export interface PartyInvitationUpdateWithoutUserDataInput {
  invitedBy?: UserUpdateOneRequiredInput | null
  party?: PartyUpdateOneRequiredInput | null
  invitedUserId?: String | null
  partyId?: String | null
}

export interface PartyInvitationUpdateWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput
  data: PartyInvitationUpdateWithoutUserDataInput
}

export interface PartyInvitationUpsertWithWhereUniqueWithoutUserInput {
  where: PartyInvitationWhereUniqueInput
  update: PartyInvitationUpdateWithoutUserDataInput
  create: PartyInvitationCreateWithoutUserInput
}

export interface PartyInvitationWhereInput {
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
  invitedBy?: UserWhereInput | null
  user?: UserWhereInput | null
  party?: PartyWhereInput | null
  invitedUserId?: String | null
  invitedUserId_not?: String | null
  invitedUserId_in?: String[] | String | null
  invitedUserId_not_in?: String[] | String | null
  invitedUserId_lt?: String | null
  invitedUserId_lte?: String | null
  invitedUserId_gt?: String | null
  invitedUserId_gte?: String | null
  invitedUserId_contains?: String | null
  invitedUserId_not_contains?: String | null
  invitedUserId_starts_with?: String | null
  invitedUserId_not_starts_with?: String | null
  invitedUserId_ends_with?: String | null
  invitedUserId_not_ends_with?: String | null
  partyId?: String | null
  partyId_not?: String | null
  partyId_in?: String[] | String | null
  partyId_not_in?: String[] | String | null
  partyId_lt?: String | null
  partyId_lte?: String | null
  partyId_gt?: String | null
  partyId_gte?: String | null
  partyId_contains?: String | null
  partyId_not_contains?: String | null
  partyId_starts_with?: String | null
  partyId_not_starts_with?: String | null
  partyId_ends_with?: String | null
  partyId_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  AND?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null
  OR?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null
  NOT?: PartyInvitationWhereInput[] | PartyInvitationWhereInput | null
}

export interface PartyInvitationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PartySavedTrackCreateInput {
  id?: ID_Input | null
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl?: String | null
  uri: String
  party: PartyCreateOneWithoutSavedTracksInput
  stringArtists: String
  length: String
  popularity: Int
  album: AlbumCreateOneInput
}

export interface PartySavedTrackCreateManyInput {
  create?: PartySavedTrackCreateInput[] | PartySavedTrackCreateInput | null
  connect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
}

export interface PartySavedTrackCreateManyWithoutPartyInput {
  create?: PartySavedTrackCreateWithoutPartyInput[] | PartySavedTrackCreateWithoutPartyInput | null
  connect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
}

export interface PartySavedTrackCreateWithoutPartyInput {
  id?: ID_Input | null
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl?: String | null
  uri: String
  stringArtists: String
  length: String
  popularity: Int
  album: AlbumCreateOneInput
}

export interface PartySavedTrackScalarWhereInput {
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
  spotifyId?: String | null
  spotifyId_not?: String | null
  spotifyId_in?: String[] | String | null
  spotifyId_not_in?: String[] | String | null
  spotifyId_lt?: String | null
  spotifyId_lte?: String | null
  spotifyId_gt?: String | null
  spotifyId_gte?: String | null
  spotifyId_contains?: String | null
  spotifyId_not_contains?: String | null
  spotifyId_starts_with?: String | null
  spotifyId_not_starts_with?: String | null
  spotifyId_ends_with?: String | null
  spotifyId_not_ends_with?: String | null
  durationMs?: Int | null
  durationMs_not?: Int | null
  durationMs_in?: Int[] | Int | null
  durationMs_not_in?: Int[] | Int | null
  durationMs_lt?: Int | null
  durationMs_lte?: Int | null
  durationMs_gt?: Int | null
  durationMs_gte?: Int | null
  explicit?: Boolean | null
  explicit_not?: Boolean | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  previewUrl?: String | null
  previewUrl_not?: String | null
  previewUrl_in?: String[] | String | null
  previewUrl_not_in?: String[] | String | null
  previewUrl_lt?: String | null
  previewUrl_lte?: String | null
  previewUrl_gt?: String | null
  previewUrl_gte?: String | null
  previewUrl_contains?: String | null
  previewUrl_not_contains?: String | null
  previewUrl_starts_with?: String | null
  previewUrl_not_starts_with?: String | null
  previewUrl_ends_with?: String | null
  previewUrl_not_ends_with?: String | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  stringArtists?: String | null
  stringArtists_not?: String | null
  stringArtists_in?: String[] | String | null
  stringArtists_not_in?: String[] | String | null
  stringArtists_lt?: String | null
  stringArtists_lte?: String | null
  stringArtists_gt?: String | null
  stringArtists_gte?: String | null
  stringArtists_contains?: String | null
  stringArtists_not_contains?: String | null
  stringArtists_starts_with?: String | null
  stringArtists_not_starts_with?: String | null
  stringArtists_ends_with?: String | null
  stringArtists_not_ends_with?: String | null
  length?: String | null
  length_not?: String | null
  length_in?: String[] | String | null
  length_not_in?: String[] | String | null
  length_lt?: String | null
  length_lte?: String | null
  length_gt?: String | null
  length_gte?: String | null
  length_contains?: String | null
  length_not_contains?: String | null
  length_starts_with?: String | null
  length_not_starts_with?: String | null
  length_ends_with?: String | null
  length_not_ends_with?: String | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  AND?: PartySavedTrackScalarWhereInput[] | PartySavedTrackScalarWhereInput | null
  OR?: PartySavedTrackScalarWhereInput[] | PartySavedTrackScalarWhereInput | null
  NOT?: PartySavedTrackScalarWhereInput[] | PartySavedTrackScalarWhereInput | null
}

export interface PartySavedTrackSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PartySavedTrackWhereInput | null
  AND?: PartySavedTrackSubscriptionWhereInput[] | PartySavedTrackSubscriptionWhereInput | null
  OR?: PartySavedTrackSubscriptionWhereInput[] | PartySavedTrackSubscriptionWhereInput | null
  NOT?: PartySavedTrackSubscriptionWhereInput[] | PartySavedTrackSubscriptionWhereInput | null
}

export interface PartySavedTrackUpdateDataInput {
  spotifyId?: String | null
  durationMs?: Int | null
  explicit?: Boolean | null
  name?: String | null
  previewUrl?: String | null
  uri?: String | null
  party?: PartyUpdateOneRequiredWithoutSavedTracksInput | null
  stringArtists?: String | null
  length?: String | null
  popularity?: Int | null
  album?: AlbumUpdateOneRequiredInput | null
}

export interface PartySavedTrackUpdateInput {
  spotifyId?: String | null
  durationMs?: Int | null
  explicit?: Boolean | null
  name?: String | null
  previewUrl?: String | null
  uri?: String | null
  party?: PartyUpdateOneRequiredWithoutSavedTracksInput | null
  stringArtists?: String | null
  length?: String | null
  popularity?: Int | null
  album?: AlbumUpdateOneRequiredInput | null
}

export interface PartySavedTrackUpdateManyDataInput {
  spotifyId?: String | null
  durationMs?: Int | null
  explicit?: Boolean | null
  name?: String | null
  previewUrl?: String | null
  uri?: String | null
  stringArtists?: String | null
  length?: String | null
  popularity?: Int | null
}

export interface PartySavedTrackUpdateManyInput {
  create?: PartySavedTrackCreateInput[] | PartySavedTrackCreateInput | null
  update?: PartySavedTrackUpdateWithWhereUniqueNestedInput[] | PartySavedTrackUpdateWithWhereUniqueNestedInput | null
  upsert?: PartySavedTrackUpsertWithWhereUniqueNestedInput[] | PartySavedTrackUpsertWithWhereUniqueNestedInput | null
  delete?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  connect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  set?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  disconnect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  deleteMany?: PartySavedTrackScalarWhereInput[] | PartySavedTrackScalarWhereInput | null
  updateMany?: PartySavedTrackUpdateManyWithWhereNestedInput[] | PartySavedTrackUpdateManyWithWhereNestedInput | null
}

export interface PartySavedTrackUpdateManyMutationInput {
  spotifyId?: String | null
  durationMs?: Int | null
  explicit?: Boolean | null
  name?: String | null
  previewUrl?: String | null
  uri?: String | null
  stringArtists?: String | null
  length?: String | null
  popularity?: Int | null
}

export interface PartySavedTrackUpdateManyWithoutPartyInput {
  create?: PartySavedTrackCreateWithoutPartyInput[] | PartySavedTrackCreateWithoutPartyInput | null
  delete?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  connect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  set?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  disconnect?: PartySavedTrackWhereUniqueInput[] | PartySavedTrackWhereUniqueInput | null
  update?: PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput[] | PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput | null
  upsert?: PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput[] | PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput | null
  deleteMany?: PartySavedTrackScalarWhereInput[] | PartySavedTrackScalarWhereInput | null
  updateMany?: PartySavedTrackUpdateManyWithWhereNestedInput[] | PartySavedTrackUpdateManyWithWhereNestedInput | null
}

export interface PartySavedTrackUpdateManyWithWhereNestedInput {
  where: PartySavedTrackScalarWhereInput
  data: PartySavedTrackUpdateManyDataInput
}

export interface PartySavedTrackUpdateWithoutPartyDataInput {
  spotifyId?: String | null
  durationMs?: Int | null
  explicit?: Boolean | null
  name?: String | null
  previewUrl?: String | null
  uri?: String | null
  stringArtists?: String | null
  length?: String | null
  popularity?: Int | null
  album?: AlbumUpdateOneRequiredInput | null
}

export interface PartySavedTrackUpdateWithWhereUniqueNestedInput {
  where: PartySavedTrackWhereUniqueInput
  data: PartySavedTrackUpdateDataInput
}

export interface PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput {
  where: PartySavedTrackWhereUniqueInput
  data: PartySavedTrackUpdateWithoutPartyDataInput
}

export interface PartySavedTrackUpsertWithWhereUniqueNestedInput {
  where: PartySavedTrackWhereUniqueInput
  update: PartySavedTrackUpdateDataInput
  create: PartySavedTrackCreateInput
}

export interface PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput {
  where: PartySavedTrackWhereUniqueInput
  update: PartySavedTrackUpdateWithoutPartyDataInput
  create: PartySavedTrackCreateWithoutPartyInput
}

export interface PartySavedTrackWhereInput {
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
  spotifyId?: String | null
  spotifyId_not?: String | null
  spotifyId_in?: String[] | String | null
  spotifyId_not_in?: String[] | String | null
  spotifyId_lt?: String | null
  spotifyId_lte?: String | null
  spotifyId_gt?: String | null
  spotifyId_gte?: String | null
  spotifyId_contains?: String | null
  spotifyId_not_contains?: String | null
  spotifyId_starts_with?: String | null
  spotifyId_not_starts_with?: String | null
  spotifyId_ends_with?: String | null
  spotifyId_not_ends_with?: String | null
  durationMs?: Int | null
  durationMs_not?: Int | null
  durationMs_in?: Int[] | Int | null
  durationMs_not_in?: Int[] | Int | null
  durationMs_lt?: Int | null
  durationMs_lte?: Int | null
  durationMs_gt?: Int | null
  durationMs_gte?: Int | null
  explicit?: Boolean | null
  explicit_not?: Boolean | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  previewUrl?: String | null
  previewUrl_not?: String | null
  previewUrl_in?: String[] | String | null
  previewUrl_not_in?: String[] | String | null
  previewUrl_lt?: String | null
  previewUrl_lte?: String | null
  previewUrl_gt?: String | null
  previewUrl_gte?: String | null
  previewUrl_contains?: String | null
  previewUrl_not_contains?: String | null
  previewUrl_starts_with?: String | null
  previewUrl_not_starts_with?: String | null
  previewUrl_ends_with?: String | null
  previewUrl_not_ends_with?: String | null
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  party?: PartyWhereInput | null
  stringArtists?: String | null
  stringArtists_not?: String | null
  stringArtists_in?: String[] | String | null
  stringArtists_not_in?: String[] | String | null
  stringArtists_lt?: String | null
  stringArtists_lte?: String | null
  stringArtists_gt?: String | null
  stringArtists_gte?: String | null
  stringArtists_contains?: String | null
  stringArtists_not_contains?: String | null
  stringArtists_starts_with?: String | null
  stringArtists_not_starts_with?: String | null
  stringArtists_ends_with?: String | null
  stringArtists_not_ends_with?: String | null
  length?: String | null
  length_not?: String | null
  length_in?: String[] | String | null
  length_not_in?: String[] | String | null
  length_lt?: String | null
  length_lte?: String | null
  length_gt?: String | null
  length_gte?: String | null
  length_contains?: String | null
  length_not_contains?: String | null
  length_starts_with?: String | null
  length_not_starts_with?: String | null
  length_ends_with?: String | null
  length_not_ends_with?: String | null
  popularity?: Int | null
  popularity_not?: Int | null
  popularity_in?: Int[] | Int | null
  popularity_not_in?: Int[] | Int | null
  popularity_lt?: Int | null
  popularity_lte?: Int | null
  popularity_gt?: Int | null
  popularity_gte?: Int | null
  album?: AlbumWhereInput | null
  AND?: PartySavedTrackWhereInput[] | PartySavedTrackWhereInput | null
  OR?: PartySavedTrackWhereInput[] | PartySavedTrackWhereInput | null
  NOT?: PartySavedTrackWhereInput[] | PartySavedTrackWhereInput | null
}

export interface PartySavedTrackWhereUniqueInput {
  id?: ID_Input | null
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
  normalizedTitle?: String | null
  normalizedTitle_not?: String | null
  normalizedTitle_in?: String[] | String | null
  normalizedTitle_not_in?: String[] | String | null
  normalizedTitle_lt?: String | null
  normalizedTitle_lte?: String | null
  normalizedTitle_gt?: String | null
  normalizedTitle_gte?: String | null
  normalizedTitle_contains?: String | null
  normalizedTitle_not_contains?: String | null
  normalizedTitle_starts_with?: String | null
  normalizedTitle_not_starts_with?: String | null
  normalizedTitle_ends_with?: String | null
  normalizedTitle_not_ends_with?: String | null
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
  inviteSecret?: String | null
  inviteSecret_not?: String | null
  inviteSecret_in?: String[] | String | null
  inviteSecret_not_in?: String[] | String | null
  inviteSecret_lt?: String | null
  inviteSecret_lte?: String | null
  inviteSecret_gt?: String | null
  inviteSecret_gte?: String | null
  inviteSecret_contains?: String | null
  inviteSecret_not_contains?: String | null
  inviteSecret_starts_with?: String | null
  inviteSecret_not_starts_with?: String | null
  inviteSecret_ends_with?: String | null
  inviteSecret_not_ends_with?: String | null
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
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  playlist?: PlaylistUpdateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackUpdateManyWithoutPartyInput | null
  cart?: PartyCartUpdateOneRequiredWithoutPartyInput | null
}

export interface PartyUpdateInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  playlist?: PlaylistUpdateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackUpdateManyWithoutPartyInput | null
  cart?: PartyCartUpdateOneRequiredWithoutPartyInput | null
}

export interface PartyUpdateManyDataInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
}

export interface PartyUpdateManyMutationInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
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

export interface PartyUpdateManyWithoutPlaylistInput {
  create?: PartyCreateWithoutPlaylistInput[] | PartyCreateWithoutPlaylistInput | null
  delete?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  connect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  set?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  disconnect?: PartyWhereUniqueInput[] | PartyWhereUniqueInput | null
  update?: PartyUpdateWithWhereUniqueWithoutPlaylistInput[] | PartyUpdateWithWhereUniqueWithoutPlaylistInput | null
  upsert?: PartyUpsertWithWhereUniqueWithoutPlaylistInput[] | PartyUpsertWithWhereUniqueWithoutPlaylistInput | null
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

export interface PartyUpdateOneRequiredWithoutCartInput {
  create?: PartyCreateWithoutCartInput | null
  update?: PartyUpdateWithoutCartDataInput | null
  upsert?: PartyUpsertWithoutCartInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyUpdateOneRequiredWithoutSavedTracksInput {
  create?: PartyCreateWithoutSavedTracksInput | null
  update?: PartyUpdateWithoutSavedTracksDataInput | null
  upsert?: PartyUpsertWithoutSavedTracksInput | null
  connect?: PartyWhereUniqueInput | null
}

export interface PartyUpdateWithoutCartDataInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  playlist?: PlaylistUpdateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackUpdateManyWithoutPartyInput | null
}

export interface PartyUpdateWithoutMembersDataInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  playlist?: PlaylistUpdateManyWithoutPartiesInput | null
  savedTracks?: PartySavedTrackUpdateManyWithoutPartyInput | null
  cart?: PartyCartUpdateOneRequiredWithoutPartyInput | null
}

export interface PartyUpdateWithoutPlaylistDataInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  savedTracks?: PartySavedTrackUpdateManyWithoutPartyInput | null
  cart?: PartyCartUpdateOneRequiredWithoutPartyInput | null
}

export interface PartyUpdateWithoutSavedTracksDataInput {
  title?: String | null
  normalizedTitle?: String | null
  description?: String | null
  author?: UserUpdateOneRequiredInput | null
  location?: LocationUpdateOneRequiredInput | null
  games?: GameUpdateManyInput | null
  colorTint?: String | null
  isPublic?: Boolean | null
  members?: UserUpdateManyWithoutPartiesInput | null
  start?: DateTime | null
  end?: DateTime | null
  inviteSecret?: String | null
  playlist?: PlaylistUpdateManyWithoutPartiesInput | null
  cart?: PartyCartUpdateOneRequiredWithoutPartyInput | null
}

export interface PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutMembersDataInput
}

export interface PartyUpdateWithWhereUniqueWithoutPlaylistInput {
  where: PartyWhereUniqueInput
  data: PartyUpdateWithoutPlaylistDataInput
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput
  create: PartyCreateInput
}

export interface PartyUpsertWithoutCartInput {
  update: PartyUpdateWithoutCartDataInput
  create: PartyCreateWithoutCartInput
}

export interface PartyUpsertWithoutSavedTracksInput {
  update: PartyUpdateWithoutSavedTracksDataInput
  create: PartyCreateWithoutSavedTracksInput
}

export interface PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutMembersDataInput
  create: PartyCreateWithoutMembersInput
}

export interface PartyUpsertWithWhereUniqueWithoutPlaylistInput {
  where: PartyWhereUniqueInput
  update: PartyUpdateWithoutPlaylistDataInput
  create: PartyCreateWithoutPlaylistInput
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
  normalizedTitle?: String | null
  normalizedTitle_not?: String | null
  normalizedTitle_in?: String[] | String | null
  normalizedTitle_not_in?: String[] | String | null
  normalizedTitle_lt?: String | null
  normalizedTitle_lte?: String | null
  normalizedTitle_gt?: String | null
  normalizedTitle_gte?: String | null
  normalizedTitle_contains?: String | null
  normalizedTitle_not_contains?: String | null
  normalizedTitle_starts_with?: String | null
  normalizedTitle_not_starts_with?: String | null
  normalizedTitle_ends_with?: String | null
  normalizedTitle_not_ends_with?: String | null
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
  inviteSecret?: String | null
  inviteSecret_not?: String | null
  inviteSecret_in?: String[] | String | null
  inviteSecret_not_in?: String[] | String | null
  inviteSecret_lt?: String | null
  inviteSecret_lte?: String | null
  inviteSecret_gt?: String | null
  inviteSecret_gte?: String | null
  inviteSecret_contains?: String | null
  inviteSecret_not_contains?: String | null
  inviteSecret_starts_with?: String | null
  inviteSecret_not_starts_with?: String | null
  inviteSecret_ends_with?: String | null
  inviteSecret_not_ends_with?: String | null
  playlist_every?: PlaylistWhereInput | null
  playlist_some?: PlaylistWhereInput | null
  playlist_none?: PlaylistWhereInput | null
  savedTracks_every?: PartySavedTrackWhereInput | null
  savedTracks_some?: PartySavedTrackWhereInput | null
  savedTracks_none?: PartySavedTrackWhereInput | null
  cart?: PartyCartWhereInput | null
  AND?: PartyWhereInput[] | PartyWhereInput | null
  OR?: PartyWhereInput[] | PartyWhereInput | null
  NOT?: PartyWhereInput[] | PartyWhereInput | null
}

export interface PartyWhereUniqueInput {
  id?: ID_Input | null
  inviteSecret?: String | null
}

export interface PlaylistCreateInput {
  id?: ID_Input | null
  spotifyId: ID_Output
  uri: String
  spotifyExternalUrl: String
  user: UserCreateOneInput
  parties?: PartyCreateManyWithoutPlaylistInput | null
  name: String
  imageUrl: String
  tracks?: PartySavedTrackCreateManyInput | null
  importable?: Boolean | null
}

export interface PlaylistCreateManyWithoutPartiesInput {
  create?: PlaylistCreateWithoutPartiesInput[] | PlaylistCreateWithoutPartiesInput | null
  connect?: PlaylistWhereUniqueInput[] | PlaylistWhereUniqueInput | null
}

export interface PlaylistCreateWithoutPartiesInput {
  id?: ID_Input | null
  spotifyId: ID_Output
  uri: String
  spotifyExternalUrl: String
  user: UserCreateOneInput
  name: String
  imageUrl: String
  tracks?: PartySavedTrackCreateManyInput | null
  importable?: Boolean | null
}

export interface PlaylistScalarWhereInput {
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
  spotifyId?: ID_Input | null
  spotifyId_not?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  spotifyId_not_in?: ID_Output[] | ID_Output | null
  spotifyId_lt?: ID_Input | null
  spotifyId_lte?: ID_Input | null
  spotifyId_gt?: ID_Input | null
  spotifyId_gte?: ID_Input | null
  spotifyId_contains?: ID_Input | null
  spotifyId_not_contains?: ID_Input | null
  spotifyId_starts_with?: ID_Input | null
  spotifyId_not_starts_with?: ID_Input | null
  spotifyId_ends_with?: ID_Input | null
  spotifyId_not_ends_with?: ID_Input | null
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
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  spotifyExternalUrl?: String | null
  spotifyExternalUrl_not?: String | null
  spotifyExternalUrl_in?: String[] | String | null
  spotifyExternalUrl_not_in?: String[] | String | null
  spotifyExternalUrl_lt?: String | null
  spotifyExternalUrl_lte?: String | null
  spotifyExternalUrl_gt?: String | null
  spotifyExternalUrl_gte?: String | null
  spotifyExternalUrl_contains?: String | null
  spotifyExternalUrl_not_contains?: String | null
  spotifyExternalUrl_starts_with?: String | null
  spotifyExternalUrl_not_starts_with?: String | null
  spotifyExternalUrl_ends_with?: String | null
  spotifyExternalUrl_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  imageUrl?: String | null
  imageUrl_not?: String | null
  imageUrl_in?: String[] | String | null
  imageUrl_not_in?: String[] | String | null
  imageUrl_lt?: String | null
  imageUrl_lte?: String | null
  imageUrl_gt?: String | null
  imageUrl_gte?: String | null
  imageUrl_contains?: String | null
  imageUrl_not_contains?: String | null
  imageUrl_starts_with?: String | null
  imageUrl_not_starts_with?: String | null
  imageUrl_ends_with?: String | null
  imageUrl_not_ends_with?: String | null
  importable?: Boolean | null
  importable_not?: Boolean | null
  AND?: PlaylistScalarWhereInput[] | PlaylistScalarWhereInput | null
  OR?: PlaylistScalarWhereInput[] | PlaylistScalarWhereInput | null
  NOT?: PlaylistScalarWhereInput[] | PlaylistScalarWhereInput | null
}

export interface PlaylistSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PlaylistWhereInput | null
  AND?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null
  OR?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null
  NOT?: PlaylistSubscriptionWhereInput[] | PlaylistSubscriptionWhereInput | null
}

export interface PlaylistUpdateInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  spotifyExternalUrl?: String | null
  user?: UserUpdateOneRequiredInput | null
  parties?: PartyUpdateManyWithoutPlaylistInput | null
  name?: String | null
  imageUrl?: String | null
  tracks?: PartySavedTrackUpdateManyInput | null
  importable?: Boolean | null
}

export interface PlaylistUpdateManyDataInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  spotifyExternalUrl?: String | null
  name?: String | null
  imageUrl?: String | null
  importable?: Boolean | null
}

export interface PlaylistUpdateManyMutationInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  spotifyExternalUrl?: String | null
  name?: String | null
  imageUrl?: String | null
  importable?: Boolean | null
}

export interface PlaylistUpdateManyWithoutPartiesInput {
  create?: PlaylistCreateWithoutPartiesInput[] | PlaylistCreateWithoutPartiesInput | null
  delete?: PlaylistWhereUniqueInput[] | PlaylistWhereUniqueInput | null
  connect?: PlaylistWhereUniqueInput[] | PlaylistWhereUniqueInput | null
  set?: PlaylistWhereUniqueInput[] | PlaylistWhereUniqueInput | null
  disconnect?: PlaylistWhereUniqueInput[] | PlaylistWhereUniqueInput | null
  update?: PlaylistUpdateWithWhereUniqueWithoutPartiesInput[] | PlaylistUpdateWithWhereUniqueWithoutPartiesInput | null
  upsert?: PlaylistUpsertWithWhereUniqueWithoutPartiesInput[] | PlaylistUpsertWithWhereUniqueWithoutPartiesInput | null
  deleteMany?: PlaylistScalarWhereInput[] | PlaylistScalarWhereInput | null
  updateMany?: PlaylistUpdateManyWithWhereNestedInput[] | PlaylistUpdateManyWithWhereNestedInput | null
}

export interface PlaylistUpdateManyWithWhereNestedInput {
  where: PlaylistScalarWhereInput
  data: PlaylistUpdateManyDataInput
}

export interface PlaylistUpdateWithoutPartiesDataInput {
  spotifyId?: ID_Input | null
  uri?: String | null
  spotifyExternalUrl?: String | null
  user?: UserUpdateOneRequiredInput | null
  name?: String | null
  imageUrl?: String | null
  tracks?: PartySavedTrackUpdateManyInput | null
  importable?: Boolean | null
}

export interface PlaylistUpdateWithWhereUniqueWithoutPartiesInput {
  where: PlaylistWhereUniqueInput
  data: PlaylistUpdateWithoutPartiesDataInput
}

export interface PlaylistUpsertWithWhereUniqueWithoutPartiesInput {
  where: PlaylistWhereUniqueInput
  update: PlaylistUpdateWithoutPartiesDataInput
  create: PlaylistCreateWithoutPartiesInput
}

export interface PlaylistWhereInput {
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
  spotifyId?: ID_Input | null
  spotifyId_not?: ID_Input | null
  spotifyId_in?: ID_Output[] | ID_Output | null
  spotifyId_not_in?: ID_Output[] | ID_Output | null
  spotifyId_lt?: ID_Input | null
  spotifyId_lte?: ID_Input | null
  spotifyId_gt?: ID_Input | null
  spotifyId_gte?: ID_Input | null
  spotifyId_contains?: ID_Input | null
  spotifyId_not_contains?: ID_Input | null
  spotifyId_starts_with?: ID_Input | null
  spotifyId_not_starts_with?: ID_Input | null
  spotifyId_ends_with?: ID_Input | null
  spotifyId_not_ends_with?: ID_Input | null
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
  uri?: String | null
  uri_not?: String | null
  uri_in?: String[] | String | null
  uri_not_in?: String[] | String | null
  uri_lt?: String | null
  uri_lte?: String | null
  uri_gt?: String | null
  uri_gte?: String | null
  uri_contains?: String | null
  uri_not_contains?: String | null
  uri_starts_with?: String | null
  uri_not_starts_with?: String | null
  uri_ends_with?: String | null
  uri_not_ends_with?: String | null
  spotifyExternalUrl?: String | null
  spotifyExternalUrl_not?: String | null
  spotifyExternalUrl_in?: String[] | String | null
  spotifyExternalUrl_not_in?: String[] | String | null
  spotifyExternalUrl_lt?: String | null
  spotifyExternalUrl_lte?: String | null
  spotifyExternalUrl_gt?: String | null
  spotifyExternalUrl_gte?: String | null
  spotifyExternalUrl_contains?: String | null
  spotifyExternalUrl_not_contains?: String | null
  spotifyExternalUrl_starts_with?: String | null
  spotifyExternalUrl_not_starts_with?: String | null
  spotifyExternalUrl_ends_with?: String | null
  spotifyExternalUrl_not_ends_with?: String | null
  user?: UserWhereInput | null
  parties_every?: PartyWhereInput | null
  parties_some?: PartyWhereInput | null
  parties_none?: PartyWhereInput | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  imageUrl?: String | null
  imageUrl_not?: String | null
  imageUrl_in?: String[] | String | null
  imageUrl_not_in?: String[] | String | null
  imageUrl_lt?: String | null
  imageUrl_lte?: String | null
  imageUrl_gt?: String | null
  imageUrl_gte?: String | null
  imageUrl_contains?: String | null
  imageUrl_not_contains?: String | null
  imageUrl_starts_with?: String | null
  imageUrl_not_starts_with?: String | null
  imageUrl_ends_with?: String | null
  imageUrl_not_ends_with?: String | null
  tracks_every?: PartySavedTrackWhereInput | null
  tracks_some?: PartySavedTrackWhereInput | null
  tracks_none?: PartySavedTrackWhereInput | null
  importable?: Boolean | null
  importable_not?: Boolean | null
  AND?: PlaylistWhereInput[] | PlaylistWhereInput | null
  OR?: PlaylistWhereInput[] | PlaylistWhereInput | null
  NOT?: PlaylistWhereInput[] | PlaylistWhereInput | null
}

export interface PlaylistWhereUniqueInput {
  id?: ID_Input | null
  spotifyId?: ID_Input | null
}

export interface TrackCreateInput {
  id?: ID_Input | null
  name: String
  album: AlbumCreateOneInput
  artists?: ArtistCreateManyInput | null
  duration: Int
  preview_url?: String | null
}

export interface TrackSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TrackWhereInput | null
  AND?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null
  OR?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null
  NOT?: TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput | null
}

export interface TrackUpdateInput {
  name?: String | null
  album?: AlbumUpdateOneRequiredInput | null
  artists?: ArtistUpdateManyInput | null
  duration?: Int | null
  preview_url?: String | null
}

export interface TrackUpdateManyMutationInput {
  name?: String | null
  duration?: Int | null
  preview_url?: String | null
}

export interface TrackWhereInput {
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
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  album?: AlbumWhereInput | null
  artists_every?: ArtistWhereInput | null
  artists_some?: ArtistWhereInput | null
  artists_none?: ArtistWhereInput | null
  duration?: Int | null
  duration_not?: Int | null
  duration_in?: Int[] | Int | null
  duration_not_in?: Int[] | Int | null
  duration_lt?: Int | null
  duration_lte?: Int | null
  duration_gt?: Int | null
  duration_gte?: Int | null
  preview_url?: String | null
  preview_url_not?: String | null
  preview_url_in?: String[] | String | null
  preview_url_not_in?: String[] | String | null
  preview_url_lt?: String | null
  preview_url_lte?: String | null
  preview_url_gt?: String | null
  preview_url_gte?: String | null
  preview_url_contains?: String | null
  preview_url_not_contains?: String | null
  preview_url_starts_with?: String | null
  preview_url_not_starts_with?: String | null
  preview_url_ends_with?: String | null
  preview_url_not_ends_with?: String | null
  AND?: TrackWhereInput[] | TrackWhereInput | null
  OR?: TrackWhereInput[] | TrackWhereInput | null
  NOT?: TrackWhereInput[] | TrackWhereInput | null
}

export interface TrackWhereUniqueInput {
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
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
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

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutCartItemsInput {
  create?: UserCreateWithoutCartItemsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPendingFriendInvitationsInput {
  create?: UserCreateWithoutPendingFriendInvitationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPendingPartyInvitationsInput {
  create?: UserCreateWithoutPendingPartyInvitationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCartItemsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
}

export interface UserCreateWithoutChatsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutFriendsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutPartiesInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutPendingFriendInvitationsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingPartyInvitations?: PartyInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutPendingPartyInvitationsInput {
  id?: ID_Input | null
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: PartyCreateManyWithoutMembersInput | null
  friends?: UserCreateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationCreateManyWithoutUserInput | null
  chats?: ChatCreateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemCreateManyWithoutUserInput | null
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
  resetToken?: String | null
  resetToken_not?: String | null
  resetToken_in?: String[] | String | null
  resetToken_not_in?: String[] | String | null
  resetToken_lt?: String | null
  resetToken_lte?: String | null
  resetToken_gt?: String | null
  resetToken_gte?: String | null
  resetToken_contains?: String | null
  resetToken_not_contains?: String | null
  resetToken_starts_with?: String | null
  resetToken_not_starts_with?: String | null
  resetToken_ends_with?: String | null
  resetToken_not_ends_with?: String | null
  resetTokenExpiry?: DateTime | null
  resetTokenExpiry_not?: DateTime | null
  resetTokenExpiry_in?: DateTime[] | DateTime | null
  resetTokenExpiry_not_in?: DateTime[] | DateTime | null
  resetTokenExpiry_lt?: DateTime | null
  resetTokenExpiry_lte?: DateTime | null
  resetTokenExpiry_gt?: DateTime | null
  resetTokenExpiry_gte?: DateTime | null
  isPrivate?: Boolean | null
  isPrivate_not?: Boolean | null
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
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
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
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
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
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
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

export interface UserUpdateOneRequiredWithoutCartItemsInput {
  create?: UserCreateWithoutCartItemsInput | null
  update?: UserUpdateWithoutCartItemsDataInput | null
  upsert?: UserUpsertWithoutCartItemsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutPendingFriendInvitationsInput {
  create?: UserCreateWithoutPendingFriendInvitationsInput | null
  update?: UserUpdateWithoutPendingFriendInvitationsDataInput | null
  upsert?: UserUpsertWithoutPendingFriendInvitationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutPendingPartyInvitationsInput {
  create?: UserCreateWithoutPendingPartyInvitationsInput | null
  update?: UserUpdateWithoutPendingPartyInvitationsDataInput | null
  upsert?: UserUpsertWithoutPendingPartyInvitationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithoutCartItemsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
}

export interface UserUpdateWithoutChatsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutFriendsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutPartiesDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutPendingFriendInvitationsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingPartyInvitations?: PartyInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutPendingPartyInvitationsDataInput {
  email?: String | null
  firstName?: String | null
  lastName?: String | null
  password?: String | null
  parties?: PartyUpdateManyWithoutMembersInput | null
  friends?: UserUpdateManyWithoutFriendsInput | null
  pendingFriendInvitations?: FriendInvitationUpdateManyWithoutUserInput | null
  chats?: ChatUpdateManyWithoutMembersInput | null
  lastOnline?: DateTime | null
  deleted?: Boolean | null
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate?: Boolean | null
  cartItems?: PartyCartItemUpdateManyWithoutUserInput | null
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

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutCartItemsInput {
  update: UserUpdateWithoutCartItemsDataInput
  create: UserCreateWithoutCartItemsInput
}

export interface UserUpsertWithoutPendingFriendInvitationsInput {
  update: UserUpdateWithoutPendingFriendInvitationsDataInput
  create: UserCreateWithoutPendingFriendInvitationsInput
}

export interface UserUpsertWithoutPendingPartyInvitationsInput {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput
  create: UserCreateWithoutPendingPartyInvitationsInput
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
  pendingFriendInvitations_every?: FriendInvitationWhereInput | null
  pendingFriendInvitations_some?: FriendInvitationWhereInput | null
  pendingFriendInvitations_none?: FriendInvitationWhereInput | null
  pendingPartyInvitations_every?: PartyInvitationWhereInput | null
  pendingPartyInvitations_some?: PartyInvitationWhereInput | null
  pendingPartyInvitations_none?: PartyInvitationWhereInput | null
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
  resetToken?: String | null
  resetToken_not?: String | null
  resetToken_in?: String[] | String | null
  resetToken_not_in?: String[] | String | null
  resetToken_lt?: String | null
  resetToken_lte?: String | null
  resetToken_gt?: String | null
  resetToken_gte?: String | null
  resetToken_contains?: String | null
  resetToken_not_contains?: String | null
  resetToken_starts_with?: String | null
  resetToken_not_starts_with?: String | null
  resetToken_ends_with?: String | null
  resetToken_not_ends_with?: String | null
  resetTokenExpiry?: DateTime | null
  resetTokenExpiry_not?: DateTime | null
  resetTokenExpiry_in?: DateTime[] | DateTime | null
  resetTokenExpiry_not_in?: DateTime[] | DateTime | null
  resetTokenExpiry_lt?: DateTime | null
  resetTokenExpiry_lte?: DateTime | null
  resetTokenExpiry_gt?: DateTime | null
  resetTokenExpiry_gte?: DateTime | null
  isPrivate?: Boolean | null
  isPrivate_not?: Boolean | null
  cartItems_every?: PartyCartItemWhereInput | null
  cartItems_some?: PartyCartItemWhereInput | null
  cartItems_none?: PartyCartItemWhereInput | null
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

export interface AggregateAlbum {
  count: Int
}

export interface AggregateArtist {
  count: Int
}

export interface AggregateChat {
  count: Int
}

export interface AggregateFriendInvitation {
  count: Int
}

export interface AggregateGame {
  count: Int
}

export interface AggregateImage {
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

export interface AggregatePartyCart {
  count: Int
}

export interface AggregatePartyCartItem {
  count: Int
}

export interface AggregatePartyInvitation {
  count: Int
}

export interface AggregatePartySavedTrack {
  count: Int
}

export interface AggregatePlaylist {
  count: Int
}

export interface AggregateTrack {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface Album {
  id: ID_Output
  spotifyId: ID_Output
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

export interface AlbumConnection {
  pageInfo: PageInfo
  edges: Array<AlbumEdge | null>
  aggregate: AggregateAlbum
}

export interface AlbumEdge {
  node: Album
  cursor: String
}

export interface AlbumPreviousValues {
  id: ID_Output
  spotifyId: ID_Output
  uri: String
  name: String
  releaseDate: String
  imageUrl: String
}

export interface AlbumSubscriptionPayload {
  mutation: MutationType
  node?: Album | null
  updatedFields?: Array<String> | null
  previousValues?: AlbumPreviousValues | null
}

export interface Artist {
  id: ID_Output
  spotifyId: ID_Output
  uri: String
  name: String
}

export interface ArtistConnection {
  pageInfo: PageInfo
  edges: Array<ArtistEdge | null>
  aggregate: AggregateArtist
}

export interface ArtistEdge {
  node: Artist
  cursor: String
}

export interface ArtistPreviousValues {
  id: ID_Output
  spotifyId: ID_Output
  uri: String
  name: String
}

export interface ArtistSubscriptionPayload {
  mutation: MutationType
  node?: Artist | null
  updatedFields?: Array<String> | null
  previousValues?: ArtistPreviousValues | null
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

export interface FriendInvitation {
  id: ID_Output
  invitedBy: User
  user: User
  createdAt: DateTime
  invitedUserId: String
}

export interface FriendInvitationConnection {
  pageInfo: PageInfo
  edges: Array<FriendInvitationEdge | null>
  aggregate: AggregateFriendInvitation
}

export interface FriendInvitationEdge {
  node: FriendInvitation
  cursor: String
}

export interface FriendInvitationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  invitedUserId: String
}

export interface FriendInvitationSubscriptionPayload {
  mutation: MutationType
  node?: FriendInvitation | null
  updatedFields?: Array<String> | null
  previousValues?: FriendInvitationPreviousValues | null
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

export interface Image {
  id: ID_Output
  height: Int
  width: Int
  url: String
}

export interface ImageConnection {
  pageInfo: PageInfo
  edges: Array<ImageEdge | null>
  aggregate: AggregateImage
}

export interface ImageEdge {
  node: Image
  cursor: String
}

export interface ImagePreviousValues {
  id: ID_Output
  height: Int
  width: Int
  url: String
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image | null
  updatedFields?: Array<String> | null
  previousValues?: ImagePreviousValues | null
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
  normalizedTitle: String
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
  inviteSecret: String
  playlist?: Array<Playlist> | null
  savedTracks?: Array<PartySavedTrack> | null
  cart: PartyCart
}

export interface PartyCart {
  id: ID_Output
  party: Party
  items?: Array<PartyCartItem> | null
}

export interface PartyCartConnection {
  pageInfo: PageInfo
  edges: Array<PartyCartEdge | null>
  aggregate: AggregatePartyCart
}

export interface PartyCartEdge {
  node: PartyCart
  cursor: String
}

export interface PartyCartItem {
  id: ID_Output
  cart: PartyCart
  user: User
  name: String
  description?: String | null
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

export interface PartyCartItemConnection {
  pageInfo: PageInfo
  edges: Array<PartyCartItemEdge | null>
  aggregate: AggregatePartyCartItem
}

export interface PartyCartItemEdge {
  node: PartyCartItem
  cursor: String
}

export interface PartyCartItemPreviousValues {
  id: ID_Output
  name: String
  description?: String | null
  price: Float
  status: PartyCartItemStatus
  quantity: Int
}

export interface PartyCartItemSubscriptionPayload {
  mutation: MutationType
  node?: PartyCartItem | null
  updatedFields?: Array<String> | null
  previousValues?: PartyCartItemPreviousValues | null
}

export interface PartyCartPreviousValues {
  id: ID_Output
}

export interface PartyCartSubscriptionPayload {
  mutation: MutationType
  node?: PartyCart | null
  updatedFields?: Array<String> | null
  previousValues?: PartyCartPreviousValues | null
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

export interface PartyInvitation {
  id: ID_Output
  invitedBy: User
  user: User
  party: Party
  invitedUserId: String
  partyId: String
  createdAt: DateTime
}

export interface PartyInvitationConnection {
  pageInfo: PageInfo
  edges: Array<PartyInvitationEdge | null>
  aggregate: AggregatePartyInvitation
}

export interface PartyInvitationEdge {
  node: PartyInvitation
  cursor: String
}

export interface PartyInvitationPreviousValues {
  id: ID_Output
  invitedUserId: String
  partyId: String
  createdAt: DateTime
}

export interface PartyInvitationSubscriptionPayload {
  mutation: MutationType
  node?: PartyInvitation | null
  updatedFields?: Array<String> | null
  previousValues?: PartyInvitationPreviousValues | null
}

export interface PartyPreviousValues {
  id: ID_Output
  title: String
  normalizedTitle: String
  description: String
  createdAt: DateTime
  updatedAt: DateTime
  colorTint: String
  isPublic?: Boolean | null
  start: DateTime
  end: DateTime
  inviteSecret: String
}

export interface PartySavedTrack {
  id: ID_Output
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl?: String | null
  uri: String
  party: Party
  stringArtists: String
  length: String
  popularity: Int
  album: Album
}

export interface PartySavedTrackConnection {
  pageInfo: PageInfo
  edges: Array<PartySavedTrackEdge | null>
  aggregate: AggregatePartySavedTrack
}

export interface PartySavedTrackEdge {
  node: PartySavedTrack
  cursor: String
}

export interface PartySavedTrackPreviousValues {
  id: ID_Output
  spotifyId: String
  durationMs: Int
  explicit: Boolean
  name: String
  previewUrl?: String | null
  uri: String
  stringArtists: String
  length: String
  popularity: Int
}

export interface PartySavedTrackSubscriptionPayload {
  mutation: MutationType
  node?: PartySavedTrack | null
  updatedFields?: Array<String> | null
  previousValues?: PartySavedTrackPreviousValues | null
}

export interface PartySubscriptionPayload {
  mutation: MutationType
  node?: Party | null
  updatedFields?: Array<String> | null
  previousValues?: PartyPreviousValues | null
}

export interface Playlist {
  id: ID_Output
  spotifyId: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  uri: String
  spotifyExternalUrl: String
  user: User
  parties?: Array<Party> | null
  name: String
  imageUrl: String
  tracks?: Array<PartySavedTrack> | null
  importable: Boolean
}

export interface PlaylistConnection {
  pageInfo: PageInfo
  edges: Array<PlaylistEdge | null>
  aggregate: AggregatePlaylist
}

export interface PlaylistEdge {
  node: Playlist
  cursor: String
}

export interface PlaylistPreviousValues {
  id: ID_Output
  spotifyId: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  uri: String
  spotifyExternalUrl: String
  name: String
  imageUrl: String
  importable: Boolean
}

export interface PlaylistSubscriptionPayload {
  mutation: MutationType
  node?: Playlist | null
  updatedFields?: Array<String> | null
  previousValues?: PlaylistPreviousValues | null
}

export interface Track {
  id: ID_Output
  name: String
  album: Album
  artists?: Array<Artist> | null
  duration: Int
  preview_url?: String | null
}

export interface TrackConnection {
  pageInfo: PageInfo
  edges: Array<TrackEdge | null>
  aggregate: AggregateTrack
}

export interface TrackEdge {
  node: Track
  cursor: String
}

export interface TrackPreviousValues {
  id: ID_Output
  name: String
  duration: Int
  preview_url?: String | null
}

export interface TrackSubscriptionPayload {
  mutation: MutationType
  node?: Track | null
  updatedFields?: Array<String> | null
  previousValues?: TrackPreviousValues | null
}

export interface User {
  id: ID_Output
  email: String
  firstName: String
  lastName: String
  password: String
  parties?: Array<Party> | null
  friends?: Array<User> | null
  pendingFriendInvitations?: Array<FriendInvitation> | null
  pendingPartyInvitations?: Array<PartyInvitation> | null
  chats?: Array<Chat> | null
  createdAt: DateTime
  updatedAt: DateTime
  lastOnline?: DateTime | null
  deleted: Boolean
  provider?: SocialMediaType | null
  avatar?: String | null
  thirdPartyId?: String | null
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate: Boolean
  cartItems?: Array<PartyCartItem> | null
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
  resetToken?: String | null
  resetTokenExpiry?: DateTime | null
  isPrivate: Boolean
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