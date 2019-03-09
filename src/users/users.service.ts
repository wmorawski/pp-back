import { SignupPayload } from './../auth/auth.types';
import { UserWhereInput, UserCreateInput } from './../prisma/prisma.binding';
import { Injectable } from '@nestjs/common';
import { User } from '../../generated/prisma-client';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  private saltRounds = 10;
  // async getUsers(): Promise<User[]> {
  //   // const users = await prisma.users();
  //   // return users.map(user => ({
  //   //   ...user,
  //   //   password: null,
  //   //   email: null,
  //   // }));
  //   // return users.map(user => OmittedExpression);
  // }
  async createUser(payload: SignupPayload): Promise<any> {
    const password = await this.getHash(payload.password);
    // better error message needed here
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
}
