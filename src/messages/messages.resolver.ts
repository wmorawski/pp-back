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
import { GraphQLResolveInfo } from 'graphql';

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
    const messageId: Partial<
      Message
    > = await this.prisma.mutation.createMessage(
      args,
      `{
        id
      }`,
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
              id: messageId.id,
            },
          },
        },
        where: {
          id: member.id,
        },
      });
    });

    // await this.prisma.mutation.updateManyUsers({
    //   data: {

    //   },
    //   where: {
    //     id_in: offline.members.map(member => member.id)
    //   }
    // });
    return await this.prisma.query.message(
      { where: { id: messageId.id } },
      info,
    );
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
