import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: 'https://eu1.prisma.sh/wiktor-morawski-3876dc/partyplanner/dev',
      debug: false,
      secret: process.env.PRISMA_SECRET,
    });
  }
}
