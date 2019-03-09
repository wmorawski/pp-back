import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './../users/create-user.dto';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload, LoginPayload, SignupPayload } from './auth.types';
import { UsersService } from 'src/users/users.service';
import { AuthenticationError } from 'apollo-server-core';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly users: UsersService,
    private readonly auth: AuthService,
  ) {}

  @Mutation('signup')
  async signup(@Args() payload: SignupPayload): Promise<AuthPayload> {
    console.log('IM HERE');
    const user = await this.users.createUser(payload);
    return this.auth.createAuthPayload(user);
  }

  @Mutation('login')
  async login(@Args() payload: LoginPayload): Promise<AuthPayload> {
    const user = await this.users.findOne({ email: payload.email });
    if (!user) {
      throw new UnauthorizedException('Wrong email or password');
    }
    const arePasswordsTheSame = await this.users.compareHash(
      payload.password,
      user.password,
    );
    if (!arePasswordsTheSame) {
      throw new UnauthorizedException('Wrong email or password');
    }
    return this.auth.createAuthPayload(user);
  }
}
