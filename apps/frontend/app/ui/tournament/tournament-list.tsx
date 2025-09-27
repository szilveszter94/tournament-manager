import { fetchTournaments } from "@/app/tournament/api";
import Link from "next/link";
import React from "react";

export default async function TournamentList({ query }: { query: string }) {
  const tournamentList = await fetchTournaments();
  // TODO - implement query
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  query = "";

  return (
    <ul>
      {tournamentList.data?.map((t) => (
        <li key={t.id}>
          <Link href={`tournament/${t.id}`}>{t.name}</Link>
        </li>
      ))}
    </ul>
  );
}
