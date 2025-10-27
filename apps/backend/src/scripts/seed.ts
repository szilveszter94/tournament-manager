/* eslint-disable @typescript-eslint/no-floating-promises */
import { getRandomDateWithinTwoMonths, getRandomNumber } from '../utils/helper';
import { ParticipantType, PrismaClient } from '../../generated/client';

type TournamentObject = {
  name: string;
  type: ParticipantType;
};

const tournamentObjects: TournamentObject[] = [
  { name: 'Autumn Clash League', type: 'Team' },
  { name: 'Spring Showdown Cup', type: 'Team' },
  { name: 'Iron Titans Championship', type: 'Team' },
  { name: 'Crystal Valley League', type: 'Team' },
  { name: 'Midnight Runners Cup', type: 'Team' },
  { name: 'Summer Storm Series', type: 'Team' },
  { name: 'Blazing Phoenix League', type: 'Team' },
  { name: 'Frostbite Invitational', type: 'Team' },
  { name: 'Golden Shield Tournament', type: 'Team' },
  { name: 'Thunderstrike Arena', type: 'Team' },
  { name: 'Winter Duel Masters', type: 'Individual' },
  { name: 'Shadowblade Cup', type: 'Individual' },
  { name: 'Emerald Valley Open', type: 'Individual' },
  { name: 'Crimson Stars Challenge', type: 'Individual' },
  { name: 'Steelheart Championship', type: 'Individual' },
  { name: 'Lone Wolf Invitational', type: 'Individual' },
  { name: 'Eclipse Royale', type: 'Individual' },
  { name: 'Radiant Masters Cup', type: 'Individual' },
  { name: 'Obsidian Trials', type: 'Individual' },
  { name: 'Nova Skies Showdown', type: 'Individual' },
];

const teamNames = [
  'Iron Titans',
  'Shadow Hawks',
  'Crimson Crushers',
  'Electric Wolves',
  'Steel Serpents',
  'Blaze Breakers',
  'Phantom Force',
  'Silver Storm',
  'Golden Griffins',
  'Vortex Vipers',
  'Frost Guardians',
  'Thunder Raiders',
  'Obsidian Oath',
  'Lunar Blades',
  'Savage Spartans',
  'Eternal Ember',
  'Tidal Titans',
  'Inferno Legion',
  'Night Falcons',
  'Stormbound Clan',
];

const humanNames = [
  'Liam Carter',
  'Olivia Bennett',
  'Noah Mitchell',
  'Emma Hayes',
  'Ava Robinson',
  'Elijah Turner',
  'Sophia Ramirez',
  'James Walker',
  'Mia Adams',
  'Benjamin Scott',
  'Charlotte Cooper',
  'Lucas Parker',
  'Amelia Rivera',
  'Henry Morgan',
  'Evelyn Foster',
  'Alexander Gray',
  'Harper Peterson',
  'Jack Coleman',
  'Isabella Brooks',
  'Ethan Reed',
];

const prisma = new PrismaClient();

async function main() {
  const tournaments = await Promise.all(
    tournamentObjects.map((t) => {
      return prisma.tournament.create({
        data: {
          name: t.name,
          type: t.type,
          createdAt: getRandomDateWithinTwoMonths(3),
          updatedAt: getRandomDateWithinTwoMonths(0),
        },
      });
    }),
  );

  const teamParticipants = await Promise.all(
    teamNames.map((name) => {
      const elo = getRandomNumber(800, 2900);
      const wins = getRandomNumber(0, 250);
      const losses = getRandomNumber(0, 250);
      const createdAt = getRandomDateWithinTwoMonths(3);
      const updatedAt = getRandomDateWithinTwoMonths(0);
      return prisma.participant.create({
        data: { name, type: 'Team', elo, wins, losses, createdAt, updatedAt },
      });
    }),
  );

  const individualParticipants = await Promise.all(
    humanNames.map((name) => {
      const elo = getRandomNumber(800, 2900);
      const wins = getRandomNumber(0, 250);
      const losses = getRandomNumber(0, 250);
      const createdAt = getRandomDateWithinTwoMonths(3);
      const updatedAt = getRandomDateWithinTwoMonths(0);
      return prisma.participant.create({
        data: {
          name,
          type: 'Individual',
          elo,
          wins,
          losses,
          createdAt,
          updatedAt,
        },
      });
    }),
  );

  const teamTournaments = tournaments.filter((t) => t.type === 'Team');

  for (const t of teamTournaments) {
    await prisma.participantTournament.createMany({
      data: teamParticipants.map((p) => ({
        participantId: p.id,
        tournamentId: t.id,
        wins: 0,
        losses: 0,
      })),
    });
  }

  const individualTournaments = tournaments.filter(
    (t) => t.type === 'Individual',
  );

  for (const t of individualTournaments) {
    await prisma.participantTournament.createMany({
      data: individualParticipants.map((p) => ({
        participantId: p.id,
        tournamentId: t.id,
        wins: 0,
        losses: 0,
      })),
    });
  }
  console.log('✅ Seed data inserted successfully');
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
})();
