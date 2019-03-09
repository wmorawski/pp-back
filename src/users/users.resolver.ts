import { UsersService } from 'src/users/users.service';
import { Query, Resolver, Args, Info, Context } from '@nestjs/graphql';
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
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  // this query is protected by authorization header: Bearer ....token__here....
  @Query('me')
  @UseGuards(GqlAuthGuard)
  async me(@Context() { req }): Promise<User> {
    return await this.usersService.findOne({ id: req.user.userId });
  }
}
