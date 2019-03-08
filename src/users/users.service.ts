import { Injectable } from '@nestjs/common';
import { prisma } from '../../generated/prisma-client';
import { User } from '../../generated/prisma-client';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private saltRounds = 10;
  async getUsers(): Promise<User[]> {
    const users = await prisma.users();
    return users.map(user => ({
      ...user,
      password: null,
      email: null,
    }));
    // return users.map(user => OmittedExpression);
  }
  async createUser(payload: CreateUserDto): Promise<any> {
    const password = await this.getHash(payload.password);
    return await prisma.createUser({...payload, password, socialmedia: null});
  }
  async findOneByEmail(email: string): Promise<User> {
    return await prisma.user({email});
  }
  async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
