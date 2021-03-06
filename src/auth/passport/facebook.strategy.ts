import { SocialAuthDoneFn } from './../auth.types';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from '../../config/config.service';
import { AuthService, Provider } from '../auth.service';
import faker = require('faker');
import { SocialAuthPayload } from '../auth.types';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: config.getFromEnv('FACEBOOK_APP_ID'), // <- Replace this with your client id
      clientSecret: config.getFromEnv('FACEBOOK_APP_SECRET'), // <- Replace this with your client secret
      callbackURL: `${
        process.env.NODE_ENV === 'production' ? 'https://api.ppback.fun' : ''
      }/auth/facebook/callback`,
      passReqToCallback: true,
      profileFields: ['id', 'email', 'name', 'photos'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: SocialAuthDoneFn,
  ) {
    try {
      const {
        jwt,
        missingLastName,
      } = await this.authService.validateOAuthLogin({
        thirdPartyId: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        provider: 'FACEBOOK',
        password: faker.internet.password(),
        avatar: profile.photos[0].value || null,
      });
      const user: SocialAuthPayload = {
        jwt,
        providerToken: accessToken,
        providerRefreshToken: refreshToken,
        provider: 'FACEBOOK',
        missingLastName,
      };
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
}
