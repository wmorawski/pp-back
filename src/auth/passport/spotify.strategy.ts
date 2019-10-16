import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '../../config/config.service';
import { AuthService, Provider } from '../auth.service';
import { Strategy } from 'passport-spotify';
import * as faker from 'faker';
import {
  SocialAuthPayload,
  SocialAuthDoneFn,
  SocialReAuthPayload,
} from '../auth.types';

function createPassportStrategyConfig(
  config: ConfigService,
  callbackURL: string = '/auth/spotify/callback',
) {
  return {
    clientID: config.getFromEnv('SPOTIFY_CLIENT_ID'), // <- Replace this with your client id
    clientSecret: config.getFromEnv('SPOTIFY_SECRET'), // <- Replace this with your client secret
    callbackURL: `${
      process.env.NODE_ENV === 'production'
        ? 'https://partyplannerio.herokuapp.com'
        : ''
    }${callbackURL}`,
    passReqToCallback: true,
    scope: [
      'user-read-email',
      'user-read-private',
      'user-top-read',
      'playlist-modify-public',
      'playlist-modify-private',
    ],
    showDialog: true,
  };
}

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super(createPassportStrategyConfig(config));
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: SocialAuthDoneFn,
  ) {
    try {
      const userLastName =
        profile.lastName != null ? profile.displayName.split(' ')[1] : '';
      const jwt: string = await this.authService.validateOAuthLogin({
        email: profile.emails[0].value,
        lastName: userLastName,
        firstName: profile.displayName.split(' ')[0],
        provider: 'SPOTIFY',
        password: faker.internet.password(),
        avatar: profile.photos[0] ? profile.photos[0].value : null,
        thirdPartyId: profile.id,
      });
      const payload: SocialAuthPayload = {
        jwt,
        providerToken: accessToken,
        providerRefreshToken: refreshToken,
        provider: 'SPOTIFY',
      };
      done(null, payload);
    } catch (err) {
      done(err, null);
    }
  }
}

// this rule is pure BS LOL!
// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class SpotifyReAuthStrategy extends PassportStrategy(
  Strategy,
  'spotify-reauth',
) {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super(
      createPassportStrategyConfig(config, '/auth/spotify/reAuth/callback'),
    );
  }
  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: SocialAuthDoneFn,
  ) {
    const reAuthPayload: SocialReAuthPayload = {
      providerToken: accessToken,
      providerRefreshToken: refreshToken,
      provider: 'SPOTIFY',
    };
    done(null, reAuthPayload);
  }
}
