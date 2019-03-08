import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './passport/http.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, HttpStrategy, UsersService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
