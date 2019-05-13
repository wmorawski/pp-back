import { Module, HttpModule } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';

@Module({
  controllers: [MusicController],
  imports: [HttpModule],
  providers: [MusicService],
})
export class MusicModule {}
