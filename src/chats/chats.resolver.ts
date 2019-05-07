import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
