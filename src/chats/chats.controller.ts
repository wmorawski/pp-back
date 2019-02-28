import { Get, Param, Controller } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Chat } from '../../generated/prisma-client';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('chats')
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}
  @Get('/')
  async getChats(): Promise<Chat[]> {
    return await this.chatsService.getChats();
  }
  @Get('/:id')
  @ApiImplicitParam({ name: 'id', type: String })
  async getChat(@Param() param): Promise<Chat> {
    return await this.chatsService.getChat(param.id);
  }
}
