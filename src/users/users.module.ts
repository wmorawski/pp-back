import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module, forwardRef } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [UsersService, UsersResolver, UsersController],
  controllers: [UsersController],
  exports: [UsersService, UsersController],
})
export class UsersModule {}
