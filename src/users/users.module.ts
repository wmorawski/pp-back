import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
