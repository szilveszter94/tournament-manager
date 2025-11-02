// actions/tournament.ts
"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/client";
import {
  GroupStagePhaseDataDto,
  ParticipantGroup,
  ParticipantTournament,
  ParticipantType,
  TournamentStatus,
  UpdateMatchWinnerDto,
  UpdateTournamentAndPhaseDto,
} from "@/generated/api";
import { redirect } from "next/navigation";
import { State } from "@/lib/custom-models/common";

export async function createTournament(_prevState: State, formData: FormData): Promise<State> {
  const name = formData.get("name")?.toString();
  const type = formData.get("participantType") as ParticipantType | null;

  if (!name || !type) {
    return {
      message: "Failed to create tournament.",
      errors: {
        ...(name ? {} : { name: ["Name is required"] }),
        ...(type ? {} : { participantType: ["A participant type must be selected."] }),
      },
      success: false,
    };
  }

  let id: number | undefined;
  try {
    const result = await apiClient.tournament.tournamentControllerCreate({
      name,
      type,
    });

    if (!result.ok || !result.data?.id) {
      return {
        message: result.error ?? "Failed to create tournament",
        errors: {},
        success: false,
      };
    }

    id = result.data.id;
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to create tournament.",
      errors: {},
      success: false,
    };
  }

  revalidatePath("/tournament/list");
  redirect(`/tournament/${id}`);
}

export async function updateGroupStageMatch(
  matchId: number,
  tournamentId: number,
  _prevState: State,
  formData: FormData
): Promise<State> {
  const winnerId = Number(formData.get("winnerId"));
  const loserId = Number(formData.get("loserId"));

  try {
    if (winnerId <= 0 || loserId <= 0) {
      return {
        message: "Winner not selected.",
        errors: {},
        success: false,
      };
    }

    const entity: UpdateMatchWinnerDto = {
      winnerId: winnerId,
      loserId: loserId,
      isOver: true,
    };

    if (!matchId || !tournamentId) {
      return {
        message: "Failed to update match",
        errors: {},
        success: false,
      };
    }

    await apiClient.match.matchControllerUpdate(matchId.toString(), tournamentId.toString(), entity);
  } catch (err) {
    return {
      message: `${err}`,
      errors: {},
      success: false,
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "Match updated.",
    errors: {},
    success: true,
  };
}

export async function generateGroupStages(
  data: Record<string, ParticipantTournament[]>,
  tournamentId: number
): Promise<State> {
  try {
    const mappedData: GroupStagePhaseDataDto = {
      groups: Object.entries(data).map(([key, value], index) => {
        const ids = value.map((v) => v.participant?.id).filter((id): id is number => id !== undefined);
        return { name: key, serialNumber: index + 1, participantIds: ids };
      }),
    };

    if (mappedData.groups.some((g) => g.participantIds.length <= 3)) {
      return {
        message: "Minimum participants per group is 4",
        errors: {},
        success: false,
      };
    }

    const result = await apiClient.tournamentPhase.tournamentPhaseControllerAddGrupStageToTournament(
      tournamentId.toString(),
      mappedData
    );

    if (!result.ok) {
      return {
        message: `${result.error}`,
        errors: {},
        success: false,
      };
    }
  } catch {
    return {
      message: "Failed to generate groups",
      errors: {},
      success: false,
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "Group stages generated successfully",
    errors: {},
    success: false,
  };
}

export async function generateDoubleEliminations(data: ParticipantGroup[], tournamentId: number): Promise<State> {
  try {
    if (data.length <= 3) {
      return {
        message: "Minimum participants count is 4",
        errors: {},
        success: false,
      };
    }

    const extractedIds = data.map((d) => d.participant?.id ?? null);
    if (extractedIds.some((id) => id === null)) {
      return {
        message: "Some participant ids are invalid",
        errors: {},
        success: false,
      };
    }

    const result = await apiClient.tournamentPhase.tournamentPhaseControllerAddDoubleEliminationToTournament(
      tournamentId.toString(),
      { participantIds: extractedIds.filter((id) => id !== null) }
    );

    if (!result.ok) {
      return {
        message: `${result.error}`,
        errors: {},
        success: false,
      };
    }
  } catch {
    return {
      message: "Failed to generate groups",
      errors: {},
      success: false,
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "Group stages generated successfully",
    errors: {},
    success: false,
  };
}

export async function completeGroupStage(phaseId: number | undefined, tournamentId: number): Promise<State> {
  try {
    if (!phaseId) {
      return {
        message: "Phase id is not valid",
        errors: {},
        success: false,
      };
    }

    if (!tournamentId) {
      return {
        message: "Tournament id is not valid",
        errors: {},
        success: false,
      };
    }

    const body = {
      phaseEntity: { isCompleted: true },
      tournamentEntity: { status: TournamentStatus.GROUP_STAGE_COMPLETED },
    } as UpdateTournamentAndPhaseDto;
    await apiClient.tournamentPhase.tournamentPhaseControllerUpdateTournamentPhase(
      phaseId.toString(),
      tournamentId.toString(),
      body
    );
  } catch {
    return {
      message: "Failed to generate groups",
      errors: {},
      success: false,
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "",
    errors: {},
    success: true,
  };
}
