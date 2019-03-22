import { AuthService } from './../auth/auth.service';
import { SignupPayload } from './../auth/auth.types';
import { UserWhereInput, UserCreateInput } from './../prisma/prisma.binding';
import { Injectable } from '@nestjs/common';
import { User } from '../prisma/prisma.binding';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  private saltRounds = 10;
  async getUsers(): Promise<User[]> {
    const users = await this.prisma.query.users({});
    return users.map((user: User) => ({
      ...user,
      password: null,
      email: null,
    }));
  }
  async createUser(payload: SignupPayload): Promise<any> {
    const password = await this.getHash(payload.password);
    return await this.prisma.mutation.createUser({
      data: {
        ...payload,
        password,
      },
    });
  }
  async findOne(whereQuery: UserWhereInput): Promise<User> {
    return await this.prisma.query.user({ where: whereQuery });
  }
  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
  async compareHash(
    password: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
  async inviteToFriends(args, info): Promise<any> {
    return await this.prisma.mutation.updateUser({
      data: {
        pendingInvitations: {
          connect: {
            id: args.sender,
          },
        },
      },
      where: {
        id: args.receiver,
      },
    });
  }
}
