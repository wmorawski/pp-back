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
    ){
        super({
            clientID    : config.get('FACEBOOK_APP_ID'),     // <- Replace this with your client id
            clientSecret: config.get('FACEBOOK_APP_SECRET'), // <- Replace this with your client secret
            callbackURL : 'http://localhost:4000/auth/facebook/callback',
            passReqToCallback: true,  
            profileFields: ['id', 'emails', 'name', 'photos'],
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

}
