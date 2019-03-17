import { Party } from './../prisma/prisma.binding';
import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthenticationError } from 'apollo-server-core';
import { PartiesService } from './parties.service';
import { CreatePartyPayload } from './parties.types';

@Resolver()
export class PartiesResolver {
  constructor(
    private readonly users: UsersService,
    private readonly parties: PartiesService,
  ) {}

  @Mutation('createParty')
  async createParty(@Args() payload: CreatePartyPayload): Promise<Party> {
    console.log(payload);
    return await this.parties.createParty(payload);
  }
}
