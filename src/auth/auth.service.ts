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
  SocialLoginPayload,
  SocialSignupPayload,
} from './auth.types';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { ConfigService } from '../config/config.service';
import faker = require('faker');
import { renameProp } from 'src/helpers/object.helper';
import { FirebaseService } from '../services/firebase/firebase.service';

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
    private readonly firebase: FirebaseService,
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

  async socialLogin(payload: SocialSignupPayload): Promise<User> {
    payload.password = payload.password || faker.internet.password();
    let [user] = await this.prisma.query.users({
      where: {
        OR: [{ thirdPartyId: payload.id }, { email: payload.email }],
      },
    });

    if (!user) {
      user = await this.usersService.createUser(
        renameProp('id', 'thirdPartyId', payload),
      );
    }

    if (user.provider !== payload.provider) {
      throw new InternalServerErrorException(
        `You already logged with this email using ${user.provider}`,
      );
    }

    return user;
  }

  async validateOAuthLogin(
    payload: SignupPayload,
  ): Promise<{ jwt: string; missingLastName: boolean }> {
    try {
      let user = await this.prisma.query.user({
        where: { email: payload.email },
      });
      if (!user) {
        user = await this.usersService.createUser(payload);
      }
      return {
        jwt: this.createToken(user.id),
        missingLastName: !Boolean(user.lastName),
      };
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
