import {
  minParticipantNameLength,
  minTournamentNameLength,
} from '../../custom-models/shared/common';

export const validateTournamentNameLength = (
  name: string | undefined,
): boolean => {
  return name ? name.length >= minTournamentNameLength : false;
};

export const validateParticipantNameLength = (
  name: string | undefined,
): boolean => {
  return name ? name.length >= minParticipantNameLength : false;
};
