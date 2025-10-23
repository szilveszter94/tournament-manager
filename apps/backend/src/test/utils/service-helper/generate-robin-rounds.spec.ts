import { CreateGroupMatch } from 'custom-models/api/match';
import { TournamentPhaseDataDto } from '../../../../custom-models/api/tournament-phase';
import { generateRobinRounds } from '../../../utils/service.helper';

describe('generateRobinRounds', () => {
  console.log('✅ Testing Robin rounds generator...');
  it('should generate all matches for a single group of 4 participants', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        {
          name: 'Group-1',
          serialNumber: 1,
          participantIds: [1, 2, 3, 4],
        },
      ],
    };
    const groupMap = { 0: 10 };
    const phaseId = 1;
    const result = generateRobinRounds(testData, groupMap, phaseId);

    expect(result).toHaveLength(6);
    result.forEach((match) => {
      expect(match.tournamentGroupId).toBe(10);
      expect(match.tournamentPhaseId).toBe(1);
      expect(match.participant1Id).toBeDefined();
      expect(match.participant2Id).toBeDefined();
    });
    console.log('✅ 4 participants validation passed');
  });

  it('should handle even number of participants', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        { name: 'Group-1', serialNumber: 1, participantIds: [1, 2, 3, 4] },
      ],
    };
    const groupMap = { 0: 11 };
    const phaseId = 2;

    const result = generateRobinRounds(testData, groupMap, phaseId);
    expect(result).toHaveLength(6);
    console.log('✅ Even number of participants validation passed');
  });

  it('should handle odd number of participants (add bye rounds correctly)', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        { name: 'Group-1', serialNumber: 1, participantIds: [1, 2, 3, 4, 5] },
      ],
    };
    const groupMap = { 0: 11 };
    const phaseId = 2;

    const result = generateRobinRounds(testData, groupMap, phaseId);
    expect(result).toHaveLength(10);
    console.log('✅ Odd number of participants validation passed');
  });

  it('should generate matches for multiple groups', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        { name: 'A', serialNumber: 1, participantIds: [1, 2, 3] },
        { name: 'B', serialNumber: 2, participantIds: [4, 5, 6] },
      ],
    };
    const groupMap = { 0: 101, 1: 102 };
    const phaseId = 3;

    const result = generateRobinRounds(testData, groupMap, phaseId);

    // Group A (3 players → 3 matches), Group B (3 players → 3 matches)
    expect(result).toHaveLength(6);

    const groupA = result.filter((m) => m.tournamentGroupId === 101);
    const groupB = result.filter((m) => m.tournamentGroupId === 102);

    expect(groupA).toHaveLength(3);
    expect(groupB).toHaveLength(3);
    console.log('✅ Multiple groups validation passed');
  });

  it('should generate matches with unique, sequential serialNumbers per group', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        { name: 'A', serialNumber: 1, participantIds: [1, 2, 3, 4] },
        { name: 'B', serialNumber: 2, participantIds: [5, 6, 7] },
      ],
    };

    const groupMap = { 0: 101, 1: 102 };
    const phaseId = 1;

    const matches = generateRobinRounds(testData, groupMap, phaseId);

    // group matches by group ID
    const byGroup = matches.reduce<Record<number, CreateGroupMatch[]>>(
      (acc, match) => {
        if (!match.tournamentGroupId) {
          return acc;
        }
        if (!acc[match.tournamentGroupId]) acc[match.tournamentGroupId] = [];
        acc[match.tournamentGroupId].push(match);
        return acc;
      },
      {},
    );

    for (const [groupId, groupMatches] of Object.entries(byGroup)) {
      // sort by serialNumber
      const serials = groupMatches
        .map((m) => m.serialNumber ?? 0)
        .sort((a, b) => a - b);

      // Check that serials start from 1
      expect(serials[0]).toBe(1);

      // Check that serial numbers are sequential (difference = 1)
      for (let i = 1; i < serials.length; i++) {
        expect(serials[i] - serials[i - 1]).toBe(1);
      }

      // Check that serials are unique
      const uniqueSerials = new Set(serials);
      expect(uniqueSerials.size).toBe(serials.length);

      console.log(`✅ Group ${groupId} passed serialNumber validation`);
    }
  });

  it('should generate groups correctly', () => {
    const testData: TournamentPhaseDataDto = {
      groups: [
        {
          name: 'A',
          serialNumber: 1,
          participantIds: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21,
          ],
        },
        {
          name: 'B',
          serialNumber: 2,
          participantIds: [
            22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          ],
        },
      ],
    };
    const groupMap = { 0: 101, 1: 102 };
    const phaseId = 2;

    const result = generateRobinRounds(testData, groupMap, phaseId);
    expect(result).toHaveLength(330);

    // separate results per group
    const groupA = result.filter((m) => m.tournamentGroupId === 101);
    const groupB = result.filter((m) => m.tournamentGroupId === 102);

    // ✅ ensure correct counts
    expect(groupA).toHaveLength(210);
    expect(groupB).toHaveLength(120);

    // ✅ ensure all participants in each group are valid
    const groupAPlayers = new Set(testData.groups[0].participantIds);
    const groupBPlayers = new Set(testData.groups[1].participantIds);

    // no overlap between groups
    const overlap = [...groupAPlayers].filter((id) => groupBPlayers.has(id));
    expect(overlap).toHaveLength(0);

    // ✅ ensure that matches only contain correct participants
    for (const match of groupA) {
      expect(groupAPlayers.has(match.participant1Id ?? 0)).toBe(true);
      expect(groupAPlayers.has(match.participant2Id ?? 0)).toBe(true);
    }
    for (const match of groupB) {
      expect(groupBPlayers.has(match.participant1Id ?? 0)).toBe(true);
      expect(groupBPlayers.has(match.participant2Id ?? 0)).toBe(true);
    }

    // ✅ sanity check: known IDs are in their proper groups
    const groupAHas13 = groupA.some(
      (m) => m.participant1Id === 13 || m.participant2Id === 13,
    );
    const groupBHas24 = groupB.some(
      (m) => m.participant1Id === 24 || m.participant2Id === 24,
    );

    expect(groupAHas13).toBe(true);
    expect(groupBHas24).toBe(true);
    console.log('✅ Groups validation passed');
  });
});
