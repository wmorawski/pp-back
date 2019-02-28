import { Injectable } from '@nestjs/common';
import { prisma } from '../../generated/prisma-client';
import { Chat } from '../../generated/prisma-client';

@Injectable()
export class ChatsService {
  async getChats(): Promise<Chat[]> {
    return await prisma.chats();
  }
  async getChat(id: any): Promise<Chat> {
    return await prisma.chat({ id });
  }
}
