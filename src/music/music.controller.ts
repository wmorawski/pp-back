import { Controller, Req, Get } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}
  @Get()
  async testApi() {
    return await this.musicService.testApi();
  }
}
