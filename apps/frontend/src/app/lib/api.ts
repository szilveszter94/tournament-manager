const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5100";

export async function fetchTournaments(): Promise<string> {
  const res = await fetch(`${API_BASE}/tournament`);
  if (!res.ok) {
    throw new Error("Failed to fetch tournaments");
  }

  const data = await res.json();
  return data.data;
}