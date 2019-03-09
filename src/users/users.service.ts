import { SignupPayload } from './../auth/auth.types';
import { UserWhereInput, UserCreateInput } from './../prisma/prisma.binding';
import { Injectable } from '@nestjs/common';
import { User, prisma } from '../../generated/prisma-client';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  private saltRounds = 10;
  async getUsers(): Promise<User[]> {
    const users = await prisma.users();
    return users.map((user: User) => ({
      ...user,
      password: null,
      email: null,
    }));
    // return users.map(user => OmittedExpression);
  }
  async createUser(payload: SignupPayload): Promise<any> {
    const password = await this.getHash(payload.password);
    // better error message needed here
    // prisma client nie potrzebuje dopisku 'mutation' - wygenerowany prisma-client sobie poradzi
    return await prisma.createUser({
      data: {
        ...payload,
        password,
      },
    });
  }
  async findOne(whereQuery: UserWhereInput): Promise<User> {
    // jak wyzej z mutation
    return await prisma.user({ where: whereQuery });
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
}
