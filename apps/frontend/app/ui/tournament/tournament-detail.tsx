import { Tournament } from "@/generated/api";
import React from "react";

export default async function TournamentDetail({ tournament }: { tournament: Tournament }) {
  return (
    <div>
      <p>Name: {tournament.name}</p>
      <p>Type: {tournament.type}</p>
    </div>
  );
}
