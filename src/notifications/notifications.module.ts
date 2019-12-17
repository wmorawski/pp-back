import { SharedModule } from './../shared/shared.module';
import { NotificationsController } from './notifications.controller';
import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, SharedModule],
  providers: [NotificationsController],
  controllers: [NotificationsController],
  exports: [NotificationsController],
})
export class NotificationsModule {}
