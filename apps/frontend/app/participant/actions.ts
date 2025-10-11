// actions/participant.ts
"use server";

import { CreateParticipantDto, ParticipantType } from "@/generated/api";
import { apiClient } from "@/lib/client";
import { State } from "@/lib/custom-models/common";
import { revalidatePath } from "next/cache";

export async function createParticipant(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const name = formData.get("name")?.toString();
  const tournamentId = Number(formData.get("tournamentId"));
  const type = formData.get("type") as ParticipantType | null;

  try {
    if (!name || !type) {
      return {
        message: "Failed to create participant.",
        errors: {
          ...(name ? {} : { name: ["Name is required"] }),
          ...(type
            ? {}
            : { participantType: ["A participant type must be selected."] }),
        },
      };
    }

    const entity: CreateParticipantDto = {
      name: name,
      type: type,
      wins: 0,
      losses: 0,
      elo: 1500,
    };

    const result =
      await apiClient.participant.participantControllerAddParticipantToTournament(
        tournamentId,
        entity
      );

    if (!result.ok || !result.data?.id) {
      return {
        message: result.error ?? "Failed to create participant",
        errors: {},
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to create participant.",
      errors: {},
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "",
    errors: {},
  };
}
