import {
  Party,
  PartyConnection,
  PartyCreateInput,
} from '../prisma/prisma.binding';
import { AuthGuard } from '@nestjs/passport';
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

@Resolver()
export class PartiesResolver {
  constructor(private readonly prisma: PrismaService) { }

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
