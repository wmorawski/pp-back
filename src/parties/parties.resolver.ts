import { Party, PartyConnection } from '../prisma/prisma.binding';
import { AuthGuard } from '@nestjs/passport';
import { Resolver, Args, Mutation, Info, Query } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { AuthenticationError } from 'apollo-server-core';
import { PartiesService } from './parties.service';
import { CreatePartyPayload } from './parties.types';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class PartiesResolver {
  constructor(
    private readonly parties: PartiesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation('createParty')
  async createParty(@Args() args, @Info() info): Promise<Party> {
    return await this.prisma.mutation.createParty(args, info);
  }

  @Query('parties')
  async Parties(@Args() args, @Info() info): Promise<Party[]> {
    return await this.prisma.query.parties(args, info);
  }
}
