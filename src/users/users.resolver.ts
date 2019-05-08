import { UserConnection, prisma } from './../../generated/prisma-client/index';
import { UsersService } from '../users/users.service';
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
import { UseGuards, UnauthorizedException } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/GqlAuthGuard.guard';
import { SuccessMessage } from './user.types';
import { randomBytes } from 'crypto';
import { promisify } from 'util';
import { AuthPayload } from 'src/auth/auth.types';
import { AuthService } from 'src/auth/auth.service';
import { MailerService } from '@nest-modules/mailer';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly auth: AuthService,
    private readonly mailerService: MailerService,
  ) { }

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
  async me(@Context() { req }, @Info() info): Promise<User> {
    return this.prisma.query.user({ where: { id: req.user.userId } }, info);
  }
  @Mutation('inviteToFriends')
  @UseGuards(GqlAuthGuard)
  async inviteToFriends(@Args() args, @Info() info): Promise<any> {
    return await this.usersService.inviteToFriends(args, info);
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
      throw new UnauthorizedException(`No such user found for email ${args.email}`);
    }
    if (user.thirdPartyId) {
      throw new Error(`User has been created with third party provider: ${user.thirdPartyId}`);
    }
    const resetToken = (await promisify(randomBytes)(20)).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const res = await this.prisma.mutation.updateUser({
      where: {
        email: args.email,
      },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });
    try {
      await this.mailerService.sendMail({
        to: args.email,
        from: 'noreply@partyplanner.io',
        subject: 'Party Planner password reset',
        template: 'resetToken', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          resetToken,
          user,
        },
      });
    } catch (e) {
      console.log(e);
    }

    return {
      message: 'Yay!',
    };
  }
  @Mutation('resetPassword')
  async resetPassword(@Args() args, @Info() info): Promise<AuthPayload> {
    if (args.password != args.confirmPassword) {
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
  }
}
