import { CombinePlaylistsInput } from './mustic.types';
import { Playlist, PlaylistConnection } from './../prisma/prisma.binding';

import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { PrismaService } from 'src/prisma/prisma.service';

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

  @Mutation('deletePlaylist')
  async deletePlaylist(@Args() args, @Info() info) {
    return this.prisma.mutation.deletePlaylist(args, info);
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

  @Mutation('combinePlaylists')
  async combinePlaylists(
    @Args()
    {
      partyPlannerData: {
        playlists,
        partyId,
        userId,
        deleteAffected,
        importable,
      },
      spotifyData,
    }: CombinePlaylistsInput,
    @Info() info,
  ) {
    const playlistsIds = playlists.split(',');
    const toBeCombinedPlaylists = await this.prisma.query.playlists(
      {
        where: { id_in: playlistsIds },
      },
      `{
      tracks {
        id
      }
    }`,
    );
    const tracks = toBeCombinedPlaylists.flatMap(playlist => playlist.tracks);

    if (deleteAffected) {
      await this.prisma.mutation.deleteManyPlaylists({
        where: {
          id_in: playlistsIds,
        },
      });
    }

    const combinedPlaylist = this.prisma.mutation.createPlaylist(
      {
        data: {
          ...spotifyData,
          parties: { connect: [{ id: partyId }] },
          tracks: { connect: tracks },
          user: { connect: { id: userId } },
          importable,
        },
      },
      info,
    );

    return combinedPlaylist;
  }
}
