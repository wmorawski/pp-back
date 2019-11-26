import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '../../config/config.service';
import { AuthService, Provider } from '../auth.service';
import { Strategy } from 'passport-twitter';
import * as faker from 'faker';
import { SocialAuthPayload, SocialAuthDoneFn } from '../auth.types';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      consumerKey: config.getFromEnv('TWITTER_API_KEY'), // <- Replace this with your client id
      consumerSecret: config.getFromEnv('TWITTER_API_SECRET'), // <- Replace this with your client secret
      callbackURL: `${
        process.env.NODE_ENV === 'production'
          ? 'https://api.ppback.fun'
          : ''
      }/auth/twitter/callback`,
      passReqToCallback: true,
      includeEmail: true,
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
        email: profile.emails[0].value,
        lastName: profile.displayName.split(' ')[1],
        firstName: profile.displayName.split(' ')[0],
        provider: 'TWITTER',
        password: faker.internet.password(),
        avatar: profile.photos[0].value || null,
        thirdPartyId: profile.id,
      });
      const user: SocialAuthPayload = {
        jwt,
        providerToken: accessToken,
        providerRefreshToken: refreshToken,
        provider: 'TWITTER',
        missingLastName,
      };
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
}
