import { Controller, Req, Get, Param } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}
  @Get(':query')
  async testApi(@Param() params) {
    return await this.musicService.testApi(params.query);
  }
}
