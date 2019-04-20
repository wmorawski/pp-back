import { ID_Input } from './../../generated/prisma-client/index';
import {
  Resolver,
  Query,
  Args,
  Info,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  Message,
  UserUpdateManyMutationInput,
} from 'src/prisma/prisma.binding';
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

    const date = new Date(Date.now() - 60000).toISOString();
    const offline = await this.prisma.query.chat(
      {
        where: {
          id: args.data.chat.connect.id,
        },
      },
      `{
      members(where: {lastOnline_lt: "${date}"} ){
        id
      }
    }`,
    );
    offline.members.map(async member => {
      await this.prisma.mutation.updateUser({
        data: {
          unreadMessages: {
            connect: {
              id: messageWithId.id,
            },
          },
        },
        where: {
          id: member.id,
        },
      });
    });

    return messageWithId;
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
