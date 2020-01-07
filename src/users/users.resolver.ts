import { FirebaseService } from './../services/firebase/firebase.service';
import { FriendInvitationCreateInput } from './../prisma/prisma.binding';
import { FriendInvitation } from './../../generated/prisma/index';
import { UserConnection } from './../../generated/prisma';
import { UsersService } from '../users/users.service';
import {
  Query,
  Resolver,
  Args,
  Info,
  Context,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/GqlAuthGuard.guard';
import {
  SuccessMessage,
  AcceptFriendInvitationArgs,
  UnfriendPersonArgs,
} from './user.types';
import { randomBytes } from 'crypto';
import { promisify } from 'util';
import { AuthPayload } from 'src/auth/auth.types';
import { AuthService } from 'src/auth/auth.service';
import { MailerService } from '@nest-modules/mailer';
import { GraphQLError } from 'graphql';
import { pluck } from 'ramda';

function getResetPasswordRoute(resetToken: string) {
  return `${process.env.WEB_URL}/reset-password/${resetToken}`;
}

@Resolver()
export class UsersResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly auth: AuthService,
    private readonly mailerService: MailerService,
    private readonly firebaseService: FirebaseService,
  ) {}

  @Query('getUsers')
  @UseGuards(GqlAuthGuard)
  async getUsers(@Args() args, @Info() info): Promise<User[]> {
    return await this.prisma.query.users(args, info);
  }

  // LEGACY DO NOT TOUCH!
  @Query('paginateUsers')
  @UseGuards(GqlAuthGuard)
  async paginateUsers(@Args() args, @Info() info): Promise<UserConnection> {
    return await this.prisma.query.usersConnection(args, info);
  }

  @Query('usersConnection')
  async usersConnection(@Args() args, @Info() info): Promise<UserConnection> {
    return await this.prisma.query.usersConnection(args, info);
  }
  @Query('userFriends')
  async userFriends(@Args() { userId }, @Info() info) {
    const currentFriends = await this.prisma.query.users(
      { where: { friends_some: { id: userId } } },
      `
      {
        id
      }
    `,
    );
    const pending = await this.prisma.query.friendInvitations(
      {
        where: {
          invitedBy: { id: userId },
        },
      },
      `{
       invitedUserId
       id
    }`,
    );
    return {
      current: pluck('id')(currentFriends),
      pending,
    };
  }
  @Query('me')
  @UseGuards(GqlAuthGuard)
  async me(@Context() { req }, @Info() info): Promise<User> {
    return this.prisma.query.user({ where: { id: req.user.userId } }, info);
  }

  @Query('friendInvitationsConnection')
  @UseGuards(GqlAuthGuard)
  async friendInvitationsConnection(@Args() args, @Info() info) {
    return this.prisma.query.friendInvitationsConnection(args, info);
  }

  @Mutation('createFriendInvitation')
  @UseGuards(GqlAuthGuard)
  async createFriendInvitation(
    @Args() args: { data: FriendInvitationCreateInput },
    @Info() info,
  ): Promise<FriendInvitation> {
    return await this.prisma.mutation.createFriendInvitation(args, info);
  }

  @Mutation('deleteFriendInvitation')
  @UseGuards(GqlAuthGuard)
  async deleteFriendInvitation(
    @Args() args,
    @Info() info,
  ): Promise<FriendInvitation> {
    return this.prisma.mutation.deleteFriendInvitation(args, info);
  }

  @Mutation('acceptFriendInvitation')
  @UseGuards(GqlAuthGuard)
  async acceptFriendInvitation(
    @Args() { invitationId, invitingUserId }: AcceptFriendInvitationArgs,
    @Context() { req },
  ) {
    const authenticatedUserId = req.user.userId;

    try {
      await this.prisma.mutation.updateUser({
        where: { id: invitingUserId },
        data: {
          friends: { connect: { id: authenticatedUserId } },
        },
      });
    } catch (e) {
      throw new GraphQLError(
        'Could not set friend relationship on user who requested the relation',
      );
    }

    try {
      await this.prisma.mutation.updateUser({
        where: { id: authenticatedUserId },
        data: {
          friends: { connect: { id: invitingUserId } },
        },
      });
    } catch (e) {
      throw new GraphQLError(
        'Could not set friend relationship on authenticated user!',
      );
    }

    try {
      await this.prisma.mutation.deleteFriendInvitation({
        where: { id: invitationId },
      });
    } catch (e) {
      throw new GraphQLError('Could not remove friend invitation!');
    }
    return true;
  }
  @Mutation('unfriendPerson')
  @UseGuards(GqlAuthGuard)
  async unfriendPerson(
    @Args() { personToUnfriendId }: UnfriendPersonArgs,
    @Context() { req },
  ): Promise<boolean> {
    const authenticatedUserId = req.user.userId;
    try {
      await this.prisma.mutation.updateUser({
        where: { id: personToUnfriendId },
        data: {
          friends: { disconnect: { id: authenticatedUserId } },
        },
      });
    } catch (e) {
      throw new GraphQLError(
        'Could not disconnect friend relationship from the personToUnfriend',
      );
    }

    try {
      await this.prisma.mutation.updateUser({
        where: { id: authenticatedUserId },
        data: { friends: { disconnect: { id: personToUnfriendId } } },
      });
    } catch (e) {
      throw new GraphQLError(
        'Could not disconnect friend relation from currently authenticated user',
      );
    }
    return true;
  }
  @Mutation('updateUser')
  @UseGuards(GqlAuthGuard)
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return this.prisma.mutation.updateUser(args, info);
  }
  @Mutation('requestReset')
  async requestReset(@Args() args, @Info() info): Promise<SuccessMessage> {
    const user = await this.usersService.findOne({ email: args.email });
    if (!user) {
      throw new GraphQLError(`No such user found for email ${args.email}`);
    }
    if (user.thirdPartyId) {
      throw new GraphQLError(
        `User has been created with third party provider: ${user.thirdPartyId}`,
      );
    }
    const resetToken = (await promisify(randomBytes)(20)).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);

    await this.prisma.mutation.updateUser({
      where: {
        email: args.email,
      },

      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    try {
      // using Twilio SendGrid's v3 Node.js Library
      // https://github.com/sendgrid/sendgrid-nodejs
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'test@example.com',
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg);
      await this.mailerService.sendMail({
        to: args.email,
        from: 'noreply@partyplanner.io',
        subject: 'Party Planner password reset',
        template: 'resetToken',
        context: {
          resetPasswordRoute: getResetPasswordRoute(resetToken),
          user,
        },
      });
    } catch (e) {
      throw new GraphQLError('Could not send e-mail to a given address');
    }

    return {
      message: 'Yay!',
    };
  }
  @Mutation('resetPassword')
  async resetPassword(@Args() args): Promise<AuthPayload> {
    if (args.password !== args.confirmPassword) {
      throw new Error('Your passwords don\'t match!');
    }

    const [user] = await this.prisma.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
    });

    if (!user) {
      throw new Error('This token is either invalid or expired');
    }

    const password = await this.usersService.getHash(args.password);

    try {
      const updatedUser = await this.prisma.mutation.updateUser({
        where: {
          email: user.email,
        },
        data: {
          password,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });
      const token = await this.auth.createToken(user.id);

      return {
        token,
        user: updatedUser,
      };
    } catch (e) {
      throw new GraphQLError('Could not reset the password');
    }
  }
  @Subscription('friendInvitation')
  onFriendInvitation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.friendInvitation(args, info);
      },
    };
  }
}
