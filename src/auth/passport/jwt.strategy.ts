import { ConfigService } from './../../config/config.service';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../auth.types';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.getFromEnv('PRISMA_SECRET'),
      expiresIn: ConfigService.getJwtExpiration(),
    });
  }

  // this function gets called only if jwt was parsed correctly with ExtractJwt...
  // if not this function will get ignored and unauthorized will be thrown
  async validate(payload: JwtPayload) {
    const isParsedTokenValid = await this.authService.validateParsedToken(
      payload,
    );

    if (!isParsedTokenValid) {
      throw new UnauthorizedException();
    }
    // return value of this function will be attached to user prop in request object
    return { userId: payload.userId };
  }
}
