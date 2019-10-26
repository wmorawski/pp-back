import { Playlist, PlaylistConnection } from './../prisma/prisma.binding';
import { Resolver, Args, Info, Mutation, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import findLastIndex from 'ramda/es/findLastIndex';
import { GraphQLError } from 'graphql';

@Resolver('parties')
export class MusicResolver {
  constructor(private readonly prisma: PrismaService) {}
  @Mutation('createPlaylist')
  async createPlaylist(@Args() args, @Info() info): Promise<Playlist> {
    return this.prisma.mutation.createPlaylist(args, info);
  }

  @Query('playlistsConnection')
  async playlistsConnection(
    @Args() args,
    @Info() info,
  ): Promise<PlaylistConnection> {
    return this.prisma.query.playlistsConnection(args, info);
  }

  @Mutation('updatePlaylist')
  async updatePlaylist(@Args() args, @Info() info) {
    return this.prisma.mutation.updatePlaylist(args, info);
  }

  @Mutation('importPlaylistsToParty')
  async importPlaylistsToParty(@Args() { playlists, partyId }, @Info() info) {
    try {
      this.prisma.mutation.updateParty({
        where: {
          id: partyId,
        },
        data: {
          playlist: { connect: playlists.split(',').map(id => ({ id })) },
        },
      });
      return true;
    } catch (e) {
      throw new GraphQLError('Could not import');
    }
  }
}
