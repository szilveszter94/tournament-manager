import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament.module';
import { ConfigModule } from '@nestjs/config';
import { PlayerModule } from './modules/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TournamentModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
