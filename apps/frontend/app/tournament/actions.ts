// actions/tournament.ts
"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/client";
import { ParticipantTournament, ParticipantType, TournamentPhaseDataDto } from "@/generated/api";
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

export async function createTournamentPhase(
  data: Record<string, ParticipantTournament[]>,
  tournamentId: number
): Promise<void> {
  const mappedData: TournamentPhaseDataDto = {
    groups: Object.entries(data).map(([key, value]) => {
      const ids = value.map((v) => v.participant?.id).filter((id): id is number => id !== undefined);
      return { name: key, participantIds: ids };
    }),
  };
  apiClient.tournamentPhase.tournamentPhaseControllerAddPhaseToTournament(tournamentId.toString(), mappedData);
}
