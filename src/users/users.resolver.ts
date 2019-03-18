import { UserConnection } from './../../generated/prisma-client/index';
import { UsersService } from 'src/users/users.service';
import {
  Query,
  Resolver,
  Args,
  Info,
  Context,
  Mutation,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  @Query('getUsers')
  @UseGuards(GqlAuthGuard)
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  @Query('paginateUsers')
  @UseGuards(GqlAuthGuard)
  async paginateUsers(@Args() args, @Info() info): Promise<UserConnection> {
    return await this.prisma.query.usersConnection(args, info);
  }

  @Query('me')
  @UseGuards(GqlAuthGuard)
  async me(@Context() { req }): Promise<User> {
    return await this.usersService.findOne({ id: req.user.userId });
  }
  @Mutation('inviteToFriends')
  @UseGuards(GqlAuthGuard)
  async inviteToFriends(@Args() args, @Info() info): Promise<any> {
    return await this.usersService.inviteToFriends(args, info);
  }
}
