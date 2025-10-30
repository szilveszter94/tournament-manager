// actions/participant.ts
"use server";

import { AutocompleteParticipantDto, ParticipantType } from "@/generated/api";
import { minParticipantNameLength } from "@/generated/backend/common";
import { apiClient } from "@/lib/client";
import { State } from "@/lib/custom-models/common";
import { revalidatePath } from "next/cache";

export async function addParticipantToTournament(_prevState: State, formData: FormData): Promise<State> {
  console.log("ok");

  const name = formData.get("name")?.toString();
  const tournamentId = Number(formData.get("tournamentId"));
  const type = formData.get("type") as ParticipantType | null;
  const participantId = Number(formData.get("participantId"));

  try {
    if (!name || !type) {
      const missing: string[] = [];

      if (!name) missing.push("name");
      if (!type) missing.push("type");
      const formatted = missing.join(" and ");

      return {
        message: `Failed to add participant. Missing ${formatted}.`,
        errors: {},
        success: false,
      };
    }

    if (name.length < minParticipantNameLength) {
      const typeName = type === "Individual" ? "Player" : "Team";
      return {
        message: `${typeName} name must be at least 5 characters.`,
        errors: {},
        success: false,
      };
    }

    const entity: AutocompleteParticipantDto = {
      name: name,
      type: type,
      participantId: participantId > 0 ? participantId : undefined,
    };

    const result = await apiClient.participantTournament.participantTournamentControllerAddParticipantToTournament(
      tournamentId.toString(),
      entity
    );

    if (!result.ok || !result.data?.id) {
      return {
        message: result.error ?? "Failed to create participant",
        errors: {},
        success: false,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to create participant.",
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

export async function deleteParticipantFromTournament(participantId: number, tournamentId: number): Promise<State> {
  try {
    if (!participantId || !tournamentId) {
      const missing: string[] = [];

      if (!participantId) missing.push("participant ID");
      if (!tournamentId) missing.push("tournament ID");

      const formatted = missing.join(" and ");

      return {
        message: `Failed to delete participant. Missing ${formatted}.`,
        errors: {},
        success: false,
      };
    }

    const result = await apiClient.participantTournament.participantTournamentControllerDeleteParticipantFromTournament(
      participantId.toString(),
      tournamentId.toString()
    );

    if (!result.ok) {
      return {
        message: result.error ?? "Unexpected server error. Failed to delete participant.",
        errors: {},
        success: false,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to delete participant.",
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
