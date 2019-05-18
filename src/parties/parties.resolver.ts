import {
  Party,
  PartyConnection,
  PartyCreateInput,
} from '../prisma/prisma.binding';
import {
  Resolver,
  Args,
  Mutation,
  Info,
  Query,
  Context,
} from '@nestjs/graphql';
``;
import { PrismaService } from 'src/prisma/prisma.service';

import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';
import { PartyUserInviteInput } from './parties.types';

@Resolver('parties')
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
        members: { connect: args.data.members.connect },
      },
    });
    return createdParty;
  }
  @Mutation('inviteUser')
  async inviteUser(
    @Args() args: { data: PartyUserInviteInput },
    @Info() info,
  ): Promise<Party> {
    const party = await this.prisma.query.party(
      { where: { inviteSecret: args.data.inviteSecret } },
      info,
    );
    if (party) {
      // TODO: Add to invitedMembers
    }
    return party;
  }
  @Query('parties')
  async Parties(@Args() args, @Info() info): Promise<Party[]> {
    return await this.prisma.query.parties(args, info);
  }

  @Query('hasParties')
  @UseGuards(GqlAuthGuard)
  async hasParties(@Context() { req }): Promise<boolean> {
    return this.prisma.exists.Chat({ members_some: { id: req.user.userId } });
  }
  @Query('partiesConnection')
  async PartiesConnection(
    @Args() args,
    @Info() info,
  ): Promise<PartyConnection> {
    // throw new Error('something');
    return await this.prisma.query.partiesConnection(args, info);
  }
}
