import { ParticipantType, PhaseType } from "../../../../generated/services/api";

type Option<T> = {
  label: string;
  value: T;
};

export const radioButtonOptions = {
  firstPhase: [
    { label: "No first phase", value: PhaseType.NONE },
    { label: "Group Stage", value: PhaseType.GROUP_STAGE },
    { label: "Round Robin", value: PhaseType.ROUND_ROBIN },
  ] as Option<PhaseType>[],

  secondPhase: [
    { label: "Knockout", value: PhaseType.SINGLE_ELIMINATION },
    { label: "Double Elimination", value: PhaseType.DOUBLE_ELIMINATION },
  ] as Option<PhaseType>[],

  participants: [
    { label: "Individuals", value: ParticipantType.INDIVIDUAL },
    { label: "Teams", value: ParticipantType.TEAM },
  ] as Option<ParticipantType>[],
};
