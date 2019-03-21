import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException, Inject, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import { LoginPayload, AuthPayload, JwtPayload } from './auth.types';
import { prisma } from '../../generated/prisma-client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/prisma/prisma.binding';
import { ConfigService } from 'src/config/config.service';

export enum Provider {
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
    SPOTIFY = 'spotify',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET_KEY: string;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.JWT_SECRET_KEY = config.get('PRISMA_SECRET');
  }

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
    const user = await this.prisma.query.user({ where: {email: payload.email} });

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
      user: ({
        ...user,
        password: null,
      }),
    };
  }
  async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string> {
        try {
            // You can add some registration logic here,
            // to register the user using their thirdPartyId (in this case their googleId)
            // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

            // if (!user)
                // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

            const payload = {
                thirdPartyId,
                provider,
            };

            const token: string = jwt.sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 * 24 });
            return token;
        } catch (err) {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

}
