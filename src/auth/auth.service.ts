import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  LoginPayload,
  AuthPayload,
  JwtPayload,
  SignupPayload,
} from './auth.types';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { ConfigService } from '../config/config.service';
import faker = require('faker');

export enum Provider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  SPOTIFY = 'spotify',
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  createToken(id: string) {
    const token = this.jwtService.sign({ userId: id });
    return token;
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

  async checkAndThrowIfEmailAlreadyExists(email: string) {
    const user = await this.prisma.query.user({
      where: { email },
    });
    if (user) {
      throw new InternalServerErrorException(`That email is already used`);
    }
  }

  async login(payload: LoginPayload): Promise<User> {
    const user = await this.prisma.query.user({
      where: { email: payload.email },
    });

    if (!user) {
      throw new UnauthorizedException(
        `No user found for email: ${payload.email}`,
      );
    }

    if (user.provider) {
      throw new InternalServerErrorException(
        `You already logged with this email using ${user.provider}`,
      );
    }

    const passwordValid = await this.compare(payload.password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return user;
  }
  async validateOAuthLogin(payload: SignupPayload): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);
      let user = await this.prisma.query.user({
        where: { email: payload.email },
      });
      if (!user) {
        user = await this.usersService.createUser(payload);
      }
      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
      return this.createToken(user.id);
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
  compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
  createAuthPayload(user: any): AuthPayload {
    return {
      token: this.createToken(user.id),
      user: {
        ...user,
        password: null,
      },
    };
  }
}
