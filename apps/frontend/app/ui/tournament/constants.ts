import { ParticipantType, PhaseType, Tournament } from "@/generated/api";
import { createdDateFilterValues, updatedDateFilterValues } from "@/generated/backend/common";
import {
  Column,
  PARTICIPANT_TYPE_VALUES,
  TOURNAMENT_STATUS_VALUES,
} from "@/lib/global-constants";

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

export const tournamentTableHeaders: Column<Tournament>[] = [
  {
    value: "name",
    name: "Name",
    dataType: "string",
    filterType: "search",
    typeValues: [],
  },
  {
    value: "status",
    name: "Status",
    dataType: "string",
    filterType: "checkbox",
    typeValues: TOURNAMENT_STATUS_VALUES,
  },
  {
    value: "type",
    name: "Type",
    dataType: "string",
    filterType: "checkbox",
    typeValues: PARTICIPANT_TYPE_VALUES,
  },
  {
    value: "createdAt",
    name: "Created",
    dataType: "date",
    filterType: "date",
    typeValues: createdDateFilterValues,
  },
  {
    value: "updatedAt",
    name: "Updated",
    dataType: "date",
    filterType: "date",
    typeValues: updatedDateFilterValues,
  },
  {
    value: "id",
    name: "",
    dataType: "string",
    filterType: "search",
    typeValues: [],
    buttons: [
      { type: "edit", path: "/tournament" },
      { type: "delete", path: "/tournament" },
    ],
  },
];
