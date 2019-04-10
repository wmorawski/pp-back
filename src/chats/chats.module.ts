import { ChatsResolver } from './chats.resolver';
import { PartiesResolver } from './../parties/parties.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ChatsResolver],
  exports: [ChatsResolver],
})
export class ChatsModule {}
