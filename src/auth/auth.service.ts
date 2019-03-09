import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import { User } from 'generated/prisma-client';
import { LoginPayload, AuthPayload, JwtPayload } from './auth.types';
import { prisma } from '../../generated/prisma-client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(id: string, email: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { email, id };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateParsedToken({ exp, userId }: JwtPayload): Promise<boolean> {
    if (exp < Date.now() / 1000 || !userId) {
      return false;
    }
    return true;
  }

  async validateToken(token: string) {
    return await this.jwtService.verify(token);
  }

  async login(payload: LoginPayload): Promise<User> {
    const user = await prisma.user({ email: payload.email });

    if (!user) {
      throw new UnauthorizedException(`No user found for email: ${payload.email}`);
    }

    const passwordValid = await this.compare(payload.password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
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
