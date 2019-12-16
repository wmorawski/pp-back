import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import {
  AuthenticatePartyArgs,
  AuthenticatePartyPayload,
  AuthPayload,
  LoginPayload,
  SignupPayload,
  SocialLoginPayload,
  SocialSignupPayload,
} from './auth.types';

import {
  Args,
  Context,
  Mutation,
  Resolver,
  Query,
  Info,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { addFragmentToInfo } from 'graphql-binding';
import { GraphQLError } from 'graphql';

@Resolver('auth')
export class AuthResolver {
  constructor(
    private readonly users: UsersService,
    private readonly auth: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation('signup')
  async signup(@Args() payload: SignupPayload): Promise<AuthPayload> {
    await this.auth.checkAndThrowIfEmailAlreadyExists(payload.email);
    const user = await this.users.createUser(payload);
    return this.auth.createAuthPayload(user);
  }

  @Mutation('login')
  async login(@Args() payload: LoginPayload): Promise<AuthPayload> {
    console.log(process.env.PRISMA_ENDPOINT)
    const user = await this.auth.login(payload);
    return this.auth.createAuthPayload(user);
  }

  @Mutation('socialLogin')
  async socialLogin(
    @Args() payload: SocialSignupPayload,
  ): Promise<AuthPayload> {
    const user = await this.auth.socialLogin(payload);
    return this.auth.createAuthPayload(user);
  }

  @Query('authenticateParty')
  @UseGuards(GqlAuthGuard)
  async authenticateParty(
    @Args() { partyId }: AuthenticatePartyArgs,
    @Context() { req },
  ): Promise<AuthenticatePartyPayload> {
    try {
      const {
        user: { userId },
      } = req;

      // this is pretty bad but did not find any other way
      // tbh i do not really care anymore ;/
      const [party] = await this.prisma.query.parties(
        {
          where: {
            id: partyId,
            OR: [{ members_some: { id: userId } }, { isPublic: true }],
          },
        },
        `
        {
          id
          title
          description
          location {
            placeName
            longitude
            latitude
          }
          author {
            firstName
            lastName
            id
          }
          members {
            avatar
            firstName
            lastName
            id
          }
          colorTint
          start
          end
          isPublic
          inviteSecret
          cart {
            id
          }

          members {
            id
          }
        }
        `,
      );

      if (!party) {
        return {
          canJoin: false,
          isMember: false,
          party: undefined,
        };
      }

      const isMember = party.members.some(member => member.id === userId);

      if (isMember) {
        return {
          canJoin: false,
          isMember,
          party,
        };
      }

      if (!isMember && party.isPublic) {
        return {
          canJoin: true,
          isMember: false,
          party,
        };
      }

      return {
        canJoin: false,
        isMember: false,
        party: undefined,
      };
    } catch (e) {
      throw new GraphQLError('Something went wrong');
    }
  }
}
