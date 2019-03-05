import { Injectable } from '@nestjs/common';
import { prisma } from '../../generated/prisma-client';
import { User } from '../../generated/prisma-client';

@Injectable()
export class UsersService {
  async getUsers(): Promise<User[]> {
    const users = await prisma.users();
    return users.map(user => ({
      ...user,
      password: null,
      email: null,
    }));
    // return users.map(user => OmittedExpression);
  }
}
