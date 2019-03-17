import { CreatePartyPayload } from './parties.types';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}

  async createParty(payload): Promise<any> {
    const { title, description } = payload;
    return await this.prisma.mutation.createParty({
      data: {
        title,
        description,
        author: {
          connect: {
            id: payload.author,
          },
        },
        members: {
          connect: payload.members,
        },
        location: {
          create: payload.location,
        },
      },
    });
  }
}
