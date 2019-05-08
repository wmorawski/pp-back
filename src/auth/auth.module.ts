import { ConfigService } from './../config/config.service';
import { SpotifyStrategy } from './passport/spotify.strategy';
import { ConfigModule } from './../config/config.module';
import { GoogleStrategy } from './passport/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { Module, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import { AuthService, Provider } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passport/jwt.strategy';
import { FacebookStrategy } from './passport/facebook.strategy';
import { TwitterStrategy } from './passport/twitter.strategy';
import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
import passport = require('passport');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.getFromEnv('PRISMA_SECRET'),
        expiresIn: ConfigService.getJwtExpiration(),
      }),
      inject: [ConfigService],
    }),
    forwardRef(() => UsersModule),
    ConfigModule,
  ],
  providers: [
    JwtStrategy,
    AuthService,
    AuthResolver,
    GoogleStrategy,
    SpotifyStrategy,
    FacebookStrategy,
    TwitterStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
