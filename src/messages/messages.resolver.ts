import {
  Resolver,
  Query,
  Args,
  Info,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('messagesConnection')
  async messagesConnection(@Args() args, @Info() info) {
    return this.prisma.query.messagesConnection(args, info);
  }

  @Mutation('createMessage')
  async createMessage(@Args() args, @Info() info) {
    return this.prisma.mutation.createMessage(args, info);
  }
  @Subscription('message')
  onUserMutation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.message(args, info);
      },
    };
  }
}
