import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { TournamentDoubleEliminationController } from '../controllers/tournament-double-elimination.controller';
import { TournamentDoubleEliminationService } from '../services/tournament-double-elimination.service';

@Module({
  controllers: [TournamentDoubleEliminationController],
  providers: [TournamentDoubleEliminationService, PrismaService],
  exports: [TournamentDoubleEliminationService],
})
export class TournamentDoubleEliminationModule {}
