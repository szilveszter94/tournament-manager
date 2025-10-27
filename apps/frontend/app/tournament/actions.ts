// actions/tournament.ts
"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/client";
import { ParticipantTournament, ParticipantType, TournamentPhaseDataDto, UpdateMatchWinnerDto } from "@/generated/api";
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
      };
    }

    id = result.data.id;
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to create tournament.",
      errors: {},
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
      };
    }

    await apiClient.match.matchControllerUpdate(matchId.toString(), tournamentId.toString(), entity);
  } catch {
    return {
      message: "Failed to update match",
      errors: {},
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "",
    errors: {},
  };
}

export async function generateGroupStages(
  data: Record<string, ParticipantTournament[]>,
  tournamentId: number
): Promise<State> {
  try {
    const mappedData: TournamentPhaseDataDto = {
      groups: Object.entries(data).map(([key, value], index) => {
        const ids = value.map((v) => v.participant?.id).filter((id): id is number => id !== undefined);
        return { name: key, serialNumber: index + 1, participantIds: ids };
      }),
    };
    await apiClient.tournamentPhase.tournamentPhaseControllerAddPhaseToTournament(tournamentId.toString(), mappedData);
  } catch {
    return {
      message: "Failed to generate groups",
      errors: {},
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "",
    errors: {},
  };
}
