import { CreatePartyPayload } from './parties.types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}
}
