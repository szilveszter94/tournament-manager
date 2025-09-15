import { Module } from '@nestjs/common';
import { ParticipantService } from '../services/participant.service';
import { ParticipantController } from '../controllers/participantController';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, PrismaService],
  exports: [ParticipantService],
})
export class ParticipantModule {}
