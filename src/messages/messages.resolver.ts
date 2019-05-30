import {
  Resolver,
  Query,
  Args,
  Info,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { addFragmentToInfo } from 'graphql-binding';

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('messagesConnection')
  async messagesConnection(@Args() args, @Info() info) {
    return this.prisma.query.messagesConnection(args, info);
  }

  // TODO: Works but need refactor, send notifications over FireBase
  @Mutation('createMessage')
  async createMessage(@Args() args, @Info() info) {
    const messageWithId = await this.prisma.mutation.createMessage(
      args,
      addFragmentToInfo(info, 'fragment EnsureId on Message {id}'),
    );

    // const date = new Date(Date.now() - 60000).toISOString();

    return messageWithId;
  }
  @Subscription('message')
  onUserMessage() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.message(args, info);
      },
    };
  }
}
