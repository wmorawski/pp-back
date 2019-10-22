import { MusicResolver } from './music.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { PartiesResolver } from './../parties/parties.resolver';
import { Module, HttpModule } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [MusicService, MusicResolver],
  exports: [MusicService, MusicResolver],
})
export class MusicModule {}
