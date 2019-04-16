import {
  Party,
  PartyConnection,
  PartyCreateInput,
} from '../prisma/prisma.binding';
import { AuthGuard } from '@nestjs/passport';
import { Resolver, Args, Mutation, Info, Query } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { AuthenticationError } from 'apollo-server-core';
import { PartiesService } from './parties.service';
import { CreatePartyPayload } from './parties.types';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class PartiesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation('createParty')
  async createParty(
    @Args() args: { data: PartyCreateInput },
    @Info() info,
  ): Promise<Party> {
    const createdParty = await this.prisma.mutation.createParty(args, info);
    await this.prisma.mutation.createChat({
      data: {
        party: { connect: { id: createdParty.id } },
        members: { connect: args.data!.members.connect },
      },
    });
    return createdParty;
  }

  @Query('parties')
  async Parties(@Args() args, @Info() info): Promise<Party[]> {
    return await this.prisma.query.parties(args, info);
  }
  @Query('partiesConnection')
  async PartiesConnection(
    @Args() args,
    @Info() info,
  ): Promise<PartyConnection> {
    return await this.prisma.query.partiesConnection(args, info);
  }
}
