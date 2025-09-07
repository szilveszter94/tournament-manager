import { Tournament } from "@/interfaces/tournament.entity";
import { ServiceResponse } from "./interfaces/service-response";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchTournaments(): Promise<ServiceResponse<Tournament[]>> {
  const res = await fetch(`${API_BASE}/tournament`);
  if (!res.ok) {
    throw new Error("Failed to fetch tournaments");
  }

  const data = await res.json();
  return data as ServiceResponse<Tournament[]>;
}

export async function fetchTournamentById(id: number): Promise<ServiceResponse<Tournament>> {
  const res = await fetch(`${API_BASE}/tournament/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }

  const data = await res.json();
  return data as ServiceResponse<Tournament>;
}