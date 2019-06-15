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
  Subscription,
} from '@nestjs/graphql';

import { compose, pluck, map } from 'ramda';

import { PrismaService } from 'src/prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';
import { CanJoinPartyArgs, JoinPartyWhereInput } from './parties.types';
import { GraphQLError } from 'graphql';

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

  @Mutation('createPartyInvitation')
  async createPartyInvitation(@Args() args, @Info() info) {
    return await this.prisma.mutation.createPartyInvitation(args, info);
  }

  @Mutation('deleteManyPartyInvitations')
  async deleteManyPartyInvitations(@Args() args, @Info() info) {
    return this.prisma.mutation.deleteManyPartyInvitations(args, info);
  }
  @Mutation('deletePartyInvitation')
  async deletePartyInvitation(@Args() args, @Info() info) {
    return this.prisma.mutation.deletePartyInvitation(args, info);
  }
  // TODO:
  // THIS IS REALLY REALLY BAD, USE RAW DB QUERY HERE OR SOMETHING
  // BUT PLEASE GOD OPTIMIZE IT!
  @Mutation('joinParty')
  async joinParty(@Args() args: { where: JoinPartyWhereInput }, @Info() info) {
    // 100 points for someone who tells me why I'm using arrow function here
    // instead of normal function declaration :)
    const makeDeletePartyPromise = (partyId: string) => {
      return this.prisma.mutation.deletePartyInvitation({
        where: { id: partyId },
      });
    };

    const isUserAlreadyMemberOfThatParty = await this.prisma.exists.Party({
      id: args.where.partyId,
      members_some: { id: args.where.userId },
    });

    if (isUserAlreadyMemberOfThatParty) {
      throw new GraphQLError('You already are a member of that party.');
    }

    const foundChats = await this.prisma.query.chats({
      where: {
        party: { id: args.where.partyId },
      },
    });

    const [chatForThatParty] = foundChats;

    if (chatForThatParty == null) {
      throw new GraphQLError('Could not find Chat for a given Party');
    }

    const allPartyInvitesOfUserForThatParty = await this.prisma.query.partyInvitations(
      {
        where: {
          invitedUserId: args.where.userId,
          partyId: args.where.partyId,
        },
      },
    );

    if (allPartyInvitesOfUserForThatParty.length > 0) {
      try {
        const promises = compose(
          map(makeDeletePartyPromise),
          pluck('id'),
        )(allPartyInvitesOfUserForThatParty);
        await Promise.all(promises);
      } catch (e) {
        throw new GraphQLError('Something went wrong');
      }
    }

    await this.prisma.mutation.updateUser({
      where: { id: args.where.userId },
      data: { parties: { connect: { id: args.where.partyId } } },
    });

    await this.prisma.mutation.updateChat({
      where: { id: chatForThatParty.id },
      data: { members: { connect: { id: args.where.userId } } },
    });

    return true;
  }
  @Query('partyInvitationsConnection')
  async partyInvitationsConnection(@Args() args, @Info() info) {
    return this.prisma.query.partyInvitationsConnection(args, info);
  }

  @Query('partyInvitations')
  async partyInvitations(@Args() args, @Info() info) {
    return this.prisma.query.partyInvitations(args, info);
  }

  @Query('canJoinParty')
  async canJoinParty(@Args() args: CanJoinPartyArgs) {
    return this.prisma.exists.Party({
      inviteSecret: args.inviteSecret,
      id: args.partyId,
      members_none: { id: args.userId },
    });
  }

  @Query('parties')
  async Parties(@Args() args, @Info() info): Promise<Party[]> {
    return await this.prisma.query.parties(args, info);
  }

  @Query('hasParties')
  @UseGuards(GqlAuthGuard)
  async hasParties(@Context() { req }, @Args() args): Promise<boolean> {
    return this.prisma.exists.Party({
      AND: [{ members_some: { id: req.user.userId } }, { ...args.where }],
    });
  }

  @Query('partiesConnection')
  async PartiesConnection(
    @Args() args,
    @Info() info,
  ): Promise<PartyConnection> {
    return await this.prisma.query.partiesConnection(args, info);
  }

  @Subscription('partyInvitation')
  onPartyInvitation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.partyInvitation(args, info);
      },
    };
  }
  @Subscription('party')
  onPartyUpdated() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.party(args, info);
      },
    };
  }
}
