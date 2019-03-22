import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '../../config/config.service';
import { AuthService, Provider } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: config.getFromEnv('GOOGLE_CLIENT_ID'), // <- Replace this with your client id
      clientSecret: config.getFromEnv('GOOGLE_SECRET'), // <- Replace this with your client secret
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      // const jwt: string = await this.authService.validateOAuthLogin(profile, Provider.GOOGLE);
      // const user = {
      //     jwt,
      // };

      done(null, {});
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
