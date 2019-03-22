import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from 'src/config/config.service';
import { AuthService, Provider } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: config.getFromEnv('FACEBOOK_APP_ID'), // <- Replace this with your client id
      clientSecret: config.getFromEnv('FACEBOOK_APP_SECRET'), // <- Replace this with your client secret
      callbackURL: '/auth/facebook/callback',
      passReqToCallback: true,
      profileFields: ['id', 'email', 'name', 'photos'],
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
      const jwt: string = await this.authService.validateOAuthLogin(
        profile.id,
        profile.emails[0].value,
        profile.name.givenName,
        profile.name.familyName,
        'FACEBOOK',
      );
      const user = {
        jwt,
      };
      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
