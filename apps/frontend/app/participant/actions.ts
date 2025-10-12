// actions/participant.ts
"use server";

import { CreateParticipantDto, ParticipantType } from "@/generated/api";
import { apiClient } from "@/lib/client";
import { State } from "@/lib/custom-models/common";
import { revalidatePath } from "next/cache";

export async function addParticipantToTournament(
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
      await apiClient.participantTournament.participantTournamentControllerAddParticipantToTournament(
        tournamentId.toString(),
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

export async function deleteParticipantFromTournament(
  participantId: number,
  tournamentId: number
): Promise<State> {
  try {
    if (!participantId || !tournamentId) {
      const missing: string[] = [];

      if (!participantId) missing.push("participant ID");
      if (!tournamentId) missing.push("tournament ID");

      const formatted = missing.join(" and ");

      return {
        message: `Failed to delete participant. Missing ${formatted}.`,
        errors: {},
      };
    }

    const result =
      await apiClient.participantTournament.participantTournamentControllerDeleteParticipantFromTournament(
        participantId.toString(),
        tournamentId.toString()
      );

    if (!result.ok) {
      return {
        message:
          result.error ??
          "Unexpected server error. Failed to delete participant.",
        errors: {},
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to delete participant.",
      errors: {},
    };
  }

  revalidatePath(`/tournament/${tournamentId}`);
  return {
    message: "",
    errors: {},
  };
}
