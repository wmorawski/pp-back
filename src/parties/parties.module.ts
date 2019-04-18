import { PartiesResolver } from './parties.resolver';
import { PartiesService } from './parties.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PartiesService, PartiesResolver],
  exports: [PartiesService, PartiesResolver],
})
export class PartiesModule {}
