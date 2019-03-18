import { Prisma } from './../../dist/generated/prisma-client/index.d';
import { Party } from './../prisma/prisma.binding';
import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Resolver, Args, Mutation, Info } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthenticationError } from 'apollo-server-core';
import { PartiesService } from './parties.service';
import { CreatePartyPayload } from './parties.types';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class PartiesResolver {
  constructor(
    private readonly parties: PartiesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation('createPartyV')
  async createParty(@Args() args, @Info() info): Promise<Party> {
    return await this.prisma.mutation.createParty(args, info);
  }
}
