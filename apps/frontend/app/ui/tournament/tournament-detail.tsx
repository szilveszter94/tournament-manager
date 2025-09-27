import { Tournament } from "@/generated/api";
import React from "react";

export default async function TournamentDetail({ tournament }: { tournament: Tournament }) {
  return (
    <div>
      <p>{tournament.name}</p>
      <ul>
        {tournament.phases?.map((p) => (
          <li key={p.id}>{p.phaseType}</li>
        ))}
      </ul>
    </div>
  );
}
