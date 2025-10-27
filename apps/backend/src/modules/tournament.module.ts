import { Module } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { TournamentController } from '../controllers/tournament.controller';
import { PrismaService } from '../services/prisma.service';
import { TournamentRepository } from '../repository/tournament.repository';
import { TournamentLoader } from '../loader/tournament.loader';

@Module({
  controllers: [TournamentController],
  providers: [
    TournamentService,
    TournamentRepository,
    TournamentLoader,
    PrismaService,
  ],
  exports: [TournamentService],
})
export class TournamentModule {}
