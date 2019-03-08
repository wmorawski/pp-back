import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import { User } from 'generated/prisma-client';
import { LoginPayload, AuthPayload } from './auth.types';
import { prisma } from '../../generated/prisma-client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async createToken(id: string, email: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { email };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedUser: User): Promise<boolean> {
    if (signedUser && signedUser.email) {
      return Boolean(this.usersService.findOneByEmail(signedUser.email));
    }

    return false;
  }
  async login(payload: LoginPayload): Promise<User> {
    const user = await prisma.user({ email: payload.email });

    if (!user) {
      throw new Error(`No user found for email: ${payload.email}`);
    }

    const passwordValid = await this.compare(payload.password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password');
    }
    return user;
  }
  compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
  createAuthPayload(user: User): AuthPayload {
    return {
      token: this.jwtService.sign({ userId: user.id }),
      user,
    };
  }
}
