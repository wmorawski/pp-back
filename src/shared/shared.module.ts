import { Module } from '@nestjs/common';
import { FirebaseService } from '../services/firebase/firebase.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class SharedModule {}
