// actions/tournaments.ts
"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/client";
import { CreateTournamentWithPhaseDto } from "@/generated/api";
import { redirect } from "next/navigation";

export async function createTournament(entity: CreateTournamentWithPhaseDto) {
  try {
    await apiClient.tournament.tournamentControllerCreate(entity);
    revalidatePath("/tournament/list");
    redirect("/dashboard/invoices");
  } catch (err) {
    console.error(err);
    throw new Error(
      `Failed to create tournament with name ${entity.tournament.name}`
    );
  }
}
