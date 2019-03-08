import { CreateUserDto } from './../users/create-user.dto';
import { Query, Resolver, Args, Info, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';
import { SignupPayload, AuthPayload, LoginPayload } from './auth.types';
import { UsersService } from 'src/users/users.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly prisma: PrismaService, private readonly users: UsersService, private readonly auth: AuthService) {}

  @Mutation('signup')
  async signup(@Args() payload: CreateUserDto): Promise<AuthPayload> {
    const user = await this.users.createUser(payload);
    return this.auth.createAuthPayload(user);
  }

  @Mutation('login')
  async login(@Args() payload: LoginPayload): Promise<AuthPayload> {
    const user = await this.auth.login(payload);
    return this.auth.createAuthPayload(user);
  }
}
