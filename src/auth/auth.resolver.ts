import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './../users/create-user.dto';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload, LoginPayload, SignupPayload } from './auth.types';
import { UsersService } from '../users/users.service';
import { AuthenticationError } from 'apollo-server-core';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly users: UsersService,
    private readonly auth: AuthService,
  ) {}

  @Mutation('signup')
  async signup(@Args() payload: SignupPayload): Promise<AuthPayload> {
    await this.auth.checkAndThrowIfEmailAlreadyExists(payload.email);
    const user = await this.users.createUser(payload);
    return this.auth.createAuthPayload(user);
  }

  @Mutation('login')
  async login(@Args() payload: LoginPayload): Promise<AuthPayload> {
    const user = await this.auth.login(payload);
    return this.auth.createAuthPayload(user);
  }
}
