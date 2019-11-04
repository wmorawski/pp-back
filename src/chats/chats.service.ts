import { Injectable } from '@nestjs/common';
import { prisma } from '../../generated/prisma';
import { Chat } from '../../generated/prisma';

@Injectable()
export class ChatsService {
  async getChats(): Promise<Chat[]> {
    return await prisma.chats();
  }
  async getChat(id: any): Promise<Chat> {
    return await prisma.chat({ id });
  }
}
