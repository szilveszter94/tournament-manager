import { PhaseType } from "../../generated/interfaces/enums";

export type FirstPhaseType = "" | Extract<PhaseType, "GroupStage" | "RoundRobin">;

export type EliminationPhaseType = Extract<
  PhaseType,
  "SingleElimination" | "DoubleElimination"
>;
