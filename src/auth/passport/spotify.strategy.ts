import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from 'src/config/config.service';
import { AuthService, Provider } from '../auth.service';
import { Strategy } from 'passport-spotify';
import * as faker from 'faker';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: config.getFromEnv('SPOTIFY_CLIENT_ID'), // <- Replace this with your client id
      clientSecret: config.getFromEnv('SPOTIFY_SECRET'), // <- Replace this with your client secret
      callbackURL: '/auth/spotify/callback',
      passReqToCallback: true,
      scope: ['user-read-email', 'user-read-private'],
      showDialog: true,
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
      const jwt: string = await this.authService.validateOAuthLogin({
        email: profile.emails[0].value,
        lastName: profile.displayName.split(' ')[1],
        firstName: profile.displayName.split(' ')[0],
        provider: 'SPOTIFY',
        password: faker.internet.password(),
        avatar: profile.photos[0] || null,
        thirdPartyId: profile.id,
      });
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
