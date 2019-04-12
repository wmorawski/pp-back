import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('messagesConnection')
  async messagesConnection(@Args() args, @Info() info) {
    return this.prisma.query.messagesConnection(args, info);
  }
}
