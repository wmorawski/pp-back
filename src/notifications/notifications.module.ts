import { NotificationsController } from './notifications.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [NotificationsController],
  controllers: [NotificationsController],
  providers: [NotificationsController],
})
export class PartiesModule {}
