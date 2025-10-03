import { ParticipantType, PhaseType } from "@/generated/api";
import {
  createdDateFilterValues,
  updatedDateFilterValues,
} from "@/generated/backend/shared";
import {
  PARTICIPANT_TYPE_VALUES,
  TOURNAMENT_STATUS_VALUES,
} from "@/lib/global-constants";
import type { DateFilter, FilterType } from "@/generated/backend/shared";

type Option<T> = {
  label: string;
  value: T;
};

type TournamentHeader = {
  value: string;
  name: string;
  filterType: FilterType;
  typeValues: readonly string[] | DateFilter;
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

export const tournamentTableHeaders: TournamentHeader[] = [
  { value: "name", name: "Name", filterType: "search", typeValues: [] },
  {
    value: "status",
    name: "Status",
    filterType: "checkbox",
    typeValues: TOURNAMENT_STATUS_VALUES,
  },
  {
    value: "type",
    name: "Type",
    filterType: "checkbox",
    typeValues: PARTICIPANT_TYPE_VALUES,
  },
  {
    value: "createdAt",
    name: "Created At",
    filterType: "date",
    typeValues: createdDateFilterValues,
  },
  {
    value: "updatedAt",
    name: "Updated At",
    filterType: "date",
    typeValues: updatedDateFilterValues,
  },
];
