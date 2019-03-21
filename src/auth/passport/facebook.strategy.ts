import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from 'src/config/config.service';
import { AuthService, Provider } from '../auth.service';
import { use } from 'passport';
import * as FacebookTokenStrategy from 'passport-facebook-token';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {

    constructor(
        private readonly config: ConfigService,
        private readonly authService: AuthService,
    ) {
        super({
            clientID    : config.get('FACEBOOK_APP_ID'),     // <- Replace this with your client id
            clientSecret: config.get('FACEBOOK_APP_SECRET'), // <- Replace this with your client secret
            callbackURL : 'http://localhost:4000/auth/facebook/callback',
            passReqToCallback: true,
            scope: ['email', 'profile'],
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            console.log(profile);

            const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
            const user = {
                jwt,
            };

            done(null, user);
        } catch (err) {
            // console.log(err)
            done(err, false);
        }
    }
    private init(): void {
        use(
          'facebook',
          new FacebookTokenStrategy(
            {
              clientID: this.config.get('FACEBOOK_APP_ID'),
              clientSecret: this.config.get('FACEBOOK_APP_SECRET'),
            },
            async (accessToken: string, refreshToken: string, profile: any, done) => {
              // Logger.log(JSON.stringify(profile), FacebookStrategy.name);
              console.log(profile)
              if (!profile.id) {
                done(null, null);
              }
              try {
                try {
                //   const { oauthTokensAccesstoken } = await this.oauthTokensAccesstokensService.findByProviderClientId({
                //     id: profile.id
                //   });
                //   const { user } = await this.authService.info({
                //     id: oauthTokensAccesstoken.user.id
                //   });

                // TODO: Sign in
                const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.FACEBOOK);
                const user = {
                    jwt,
                };
                done(null, user);
                } catch (err) {
                  const email =
                    profile.emails && profile.emails.length && profile.emails[0].value
                      ? profile.emails[0].value
                      : `${profile.id}@facebook.com`;
                  const username = `facebook_${profile.id}`;
                  const firstName = profile.name.givenName;
                  const lastName = profile.name.familyName;
                  const password = `facebook_${profile.id}`;
                  // TODO: Sign-up
                  const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
                  const user = {
                      jwt,
                  };
                //   const { user } = await this.authService.signUp(
                //     plainToClass(SignUpDto, {
                //       email,
                //       username,
                //       password,
                //       firstName,
                //       lastName
                //     })
                //   );
                //   const newOauthTokensAccesstoken = new OauthTokensAccesstoken();
                //   newOauthTokensAccesstoken.user = user;
                //   newOauthTokensAccesstoken.providerClientId = profile.id;
                //   newOauthTokensAccesstoken.provider = profile.provider;
                //   newOauthTokensAccesstoken.accessToken = accessToken;
                //   await this.oauthTokensAccesstokensService.create({
                //     item: newOauthTokensAccesstoken
                //   });
                  done(null, user);
                }
              } catch (err) {
                done(err, null);
              }
            }
          )
        );
      }

}
