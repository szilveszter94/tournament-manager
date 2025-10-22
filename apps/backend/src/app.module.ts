import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TournamentModule } from './modules/tournament.module';
import { ConfigModule } from '@nestjs/config';
import { ParticipantModule } from './modules/participant.module';
import { ParticipantTournamentModule } from './modules/participantTournament.module';
import { TournamentPhaseModule } from './modules/tournamentPhase.module';
import { MatchModule } from './modules/match.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TournamentModule,
    ParticipantModule,
    ParticipantTournamentModule,
    TournamentPhaseModule,
    MatchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
