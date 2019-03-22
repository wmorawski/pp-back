import { Chat } from '../../generated/prisma-client';
import { Get, Param, Controller } from '@nestjs/common';
import { ChatsService } from './chats.service';

import { ApiImplicitParam, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('chats')
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}
  @Get('/')
  @ApiBearerAuth()
  async getChats(): Promise<Chat[]> {
    return await this.chatsService.getChats();
  }

  @Get('/:id')
  @ApiBearerAuth()
  @ApiImplicitParam({ name: 'id', type: String })
  async getChat(@Param() param): Promise<Chat> {
    return await this.chatsService.getChat(param.id);
  }
}
