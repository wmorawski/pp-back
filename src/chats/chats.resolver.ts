import { Resolver, Query, Args, Info, Context } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class ChatsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('chatsConnection')
  async chatsConnection(@Args() args, @Info() info) {
    return this.prisma.query.chatsConnection(args, info);
  }

  @Query('chat')
  async chat(@Args() args, @Info() info) {
    return this.prisma.query.chat(args, info);
  }

  @Query('hasChats')
  @UseGuards(GqlAuthGuard)
  async hasChats(@Context() { req }, @Args() args): Promise<boolean> {
    console.log(args, req.user.userId);
    return this.prisma.exists.Chat({
      ...args.where,
      members_some: { id: req.user.userId },
    });
  }
}
