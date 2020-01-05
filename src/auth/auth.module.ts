import { UsersModule } from '../users/users.module';
import { ConfigModule } from './../config/config.module';
import { ConfigService } from './../config/config.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './passport/facebook.strategy';
import { GoogleStrategy } from './passport/google.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import {
  SpotifyReAuthStrategy,
  SpotifyStrategy,
} from './passport/spotify.strategy';
import { TwitterStrategy } from './passport/twitter.strategy';

import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SharedModule } from 'src/shared/shared.module';

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
    PrismaModule,
    SharedModule,
  ],
  providers: [
    JwtStrategy,
    AuthService,
    AuthResolver,
    GoogleStrategy,
    SpotifyStrategy,
    SpotifyReAuthStrategy,
    FacebookStrategy,
    TwitterStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService, AuthResolver],
})
export class AuthModule {}
