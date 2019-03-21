import { SpotifyStrategy } from './passport/spotify.strategy';
import { ConfigModule } from './../config/config.module';
import { GoogleStrategy } from './passport/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthService, Provider } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passport/jwt.strategy';
import { FacebookStrategy } from './passport/facebook.strategy';
import { authenticate } from 'passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600 * 24 * 365,
      },
    }),
    UsersModule,
    UsersModule,
    ConfigModule,
  ],
  providers: [JwtStrategy, AuthService, AuthResolver, GoogleStrategy, SpotifyStrategy, FacebookStrategy],
  controllers: [AuthController]
})
export class AuthModule {

}
