import { Tournament } from "@/interfaces/tournament.entity";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5100";

export async function fetchTournaments(): Promise<Tournament[]> {
  const res = await fetch(`${API_BASE}/tournament`);
  if (!res.ok) {
    throw new Error("Failed to fetch tournaments");
  }

  const data = await res.json();
  return data as Tournament[];
}

export async function fetchTournamentById(id: number): Promise<Tournament> {
  const res = await fetch(`${API_BASE}/tournament/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }

  const data = await res.json();
  return data as Tournament;
}