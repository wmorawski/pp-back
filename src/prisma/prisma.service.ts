import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: false,
      secret: process.env.PRISMA_SECRET,
    });
  }
}
