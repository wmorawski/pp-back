import { Playlist, PlaylistConnection } from './../prisma/prisma.binding';
import { Resolver, Args, Info, Mutation, Query } from '@nestjs/graphql';
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
}
