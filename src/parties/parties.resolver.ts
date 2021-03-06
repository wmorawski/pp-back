import {
  PartySavedTrackConnection,
  PartyCartItem,
} from './../prisma/prisma.binding';

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
import { PartyCartItemConnection } from 'generated/prisma';

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
  @UseGuards(GqlAuthGuard)
  async createPartyInvitation(@Args() args, @Info() info) {
    return await this.prisma.mutation.createPartyInvitation(args, info);
  }

  @Mutation('updatePartyCartItem')
  @UseGuards(GqlAuthGuard)
  async updatePartyCartItem(@Args() args, @Info() info) {
    return await this.prisma.mutation.updatePartyCartItem(args, info);
  }

  @Mutation('deletePartyCartItem')
  @UseGuards(GqlAuthGuard)
  async deletePartyCartItem(@Args() args, @Info() info) {
    return await this.prisma.mutation.deletePartyCartItem(args, info);
  }

  @Mutation('updateParty')
  @UseGuards(GqlAuthGuard)
  async updateParty(@Args() args, @Info() info) {
    return await this.prisma.mutation.updateParty(args, info);
  }

  @Mutation('createPartyCartItem')
  @UseGuards(GqlAuthGuard)
  async createPartyCartItem(
    @Args() args,
    @Info() info,
  ): Promise<PartyCartItem> {
    return await this.prisma.mutation.createPartyCartItem(args, info);
  }

  @Mutation('deleteManyPartyInvitations')
  async deleteManyPartyInvitations(@Args() args, @Info() info) {
    return this.prisma.mutation.deleteManyPartyInvitations(args, info);
  }

  @Mutation('deleteParty')
  async deleteParty(@Args() args, @Info() info) {
    // Party has only one chat
    // using `deleteMany` makes it possible to not identify chat by its id but by the relation to a given party
    await this.prisma.mutation.deleteManyChats({
      where: { party: { id: args.where.id } },
    });

    return this.prisma.mutation.deleteParty(args, info);
  }

  @Mutation('deletePartyInvitation')
  async deletePartyInvitation(@Args() args, @Info() info) {
    return this.prisma.mutation.deletePartyInvitation(args, info);
  }
  @Mutation('createPartySavedTrack')
  async createPartySavedTrack(@Args() args, @Info() info) {
    return this.prisma.mutation.createPartySavedTrack(args, info);
  }

  @Mutation('joinParty')
  @UseGuards(GqlAuthGuard)
  async joinParty(@Args() args: { partyId: string }, @Context() { req }) {
    const makeDeletePartyPromise = (partyId: string) => {
      return this.prisma.mutation.deletePartyInvitation({
        where: { id: partyId },
      });
    };

    const isUserAlreadyMemberOfThatParty = await this.prisma.exists.Party({
      id: args.partyId,
      members_some: { id: req.user.userId },
    });

    if (isUserAlreadyMemberOfThatParty) {
      throw new GraphQLError('You already are a member of that party.');
    }

    const foundChats = await this.prisma.query.chats({
      where: {
        party: { id: args.partyId },
      },
    });

    const [chatForThatParty] = foundChats;

    if (chatForThatParty == null) {
      throw new GraphQLError('Could not find Chat for a given Party');
    }

    const allPartyInvitesOfUserForThatParty = await this.prisma.query.partyInvitations(
      {
        where: {
          invitedUserId: req.user.userId,
          partyId: args.partyId,
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
      where: { id: req.user.userId },
      data: { parties: { connect: { id: args.partyId } } },
    });

    await this.prisma.mutation.updateChat({
      where: { id: chatForThatParty.id },
      data: { members: { connect: { id: req.user.userId } } },
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

  @Query('party')
  async party(@Args() args, @Info() info): Promise<Party> {
    return await this.prisma.query.party(args, info);
  }

  @Query('partyCartCost')
  @UseGuards(GqlAuthGuard)
  async partyCartCost(
    @Args() { id }: { id: string },
    @Info() info,
  ): Promise<number> {
    try {
      const items = await this.prisma.query.partyCartItems(
        {
          where: {
            cart: { id },
            status: 'ACCEPTED',
          },
        },
        `
        {
          quantity
          price
        }
      `,
      );

      if (!items) {
        throw new GraphQLError('This cart does not exist');
      }

      return items.reduce((totalCost, cartItem) => {
        totalCost += cartItem.price * cartItem.quantity;
        return totalCost;
      }, 0);
    } catch (e) {
      throw new GraphQLError('Could not calculate the cost');
    }
  }

  @Query('hasParties')
  @UseGuards(GqlAuthGuard)
  async hasParties(@Context() { req }, @Args() args): Promise<boolean> {
    const userId = req.user.userId;
    return this.prisma.exists.Party({
      OR: [
        { members_some: { id: userId } },
        { isPublic: true },
        { author: { id: userId } },
      ],
      ...args.where,
    });
  }

  @Query('partySavedTracksConnection')
  @UseGuards(GqlAuthGuard)
  async PartySavedTracksConnection(
    @Args() args,
    @Info() info,
  ): Promise<PartySavedTrackConnection> {
    return await this.prisma.query.partySavedTracksConnection(args, info);
  }

  @Query('partyCartItemsConnection')
  @UseGuards(GqlAuthGuard)
  async PartyCartItemsConnection(
    @Args() args,
    @Info() info,
  ): Promise<PartyCartItemConnection> {
    return await this.prisma.query.partyCartItemsConnection(args, info);
  }

  @Query('partySavedTracks')
  @UseGuards(GqlAuthGuard)
  async PartySavedTracks(@Args() args, @Info() info) {
    return await this.prisma.query.partySavedTracks(args, info);
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
