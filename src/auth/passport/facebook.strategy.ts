import { UsersService } from './../../users/users.service';
import { Injectable, Inject } from '@nestjs/common';
import { use } from 'passport';
import { User } from '../../prisma/prisma.binding';
// import { FACEBOOK_CONFIG_TOKEN, USER_MODEL_TOKEN } from '../../../server.constants';
import { IFacebookConfig } from '../interfaces/facebook-config.interface';
import * as FacebookTokenStrategy from 'passport-facebook-token';
@Injectable()
export class FacebookStrategy {
  constructor(
    @Inject('FACEBOOK') private readonly fbConfig: IFacebookConfig,
    private readonly usersService: UsersService,
  ) {
    this.init();
  }

  private init(): void {
    use('facebook', new FacebookTokenStrategy({
      clientID: this.fbConfig.client_id,
      clientSecret: this.fbConfig.client_secret,
      profileFields: ['id', 'name', 'displayName', 'emails', 'photos'],
    }, async (accessToken: string, refreshToken: string, profile: any, done: any) => {
      try {
        const providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;

        let email: string = profile.emails.shift().value;

        //  Conditional if facebook doesn't return email
        if (!email || email === '') { email = `${profile.id}@${profile.provider}.com`; }

        const existingUser: User = await this.usersService.findOneByEmail(email);

        if (existingUser) {
          return done(null, existingUser);
        }

        const providerUserProfile = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          displayName: profile.displayName,
          email,
          username: profile.username || `${profile.id}`,
          profileImageURL: (profile.id) ? '//graph.facebook.com/' + profile.id + '/picture?type=large' : undefined,
          provider: 'facebook',
          providerIdentifierField: 'id',
          providerData,
        };
        done(null, await this.usersService.createUser({
          username: providerUserProfile.username,
          email: providerUserProfile.email,
          password: 'asvx3232wtsdczxasdas',
          socialmedia: 0,
        }));
      } catch (err) {
        done(err, null);
      }

      // function generateUsername(profile) {
      //   let username = '';

      //   if (profile.emails) {
      //     username = profile.emails[0].value.split('@')[0];
      //   } else if (profile.name) {
      //     username = profile.name.givenName[0] + profile.name.familyName;
      //   }

      //   return username.toLowerCase() || undefined;
      // }
    }));
  }
}
