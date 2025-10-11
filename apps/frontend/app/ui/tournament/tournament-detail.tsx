import { Tournament } from "@/generated/api";
import React from "react";
import CreateParticipantForm from "../participant/create-form";

export default function TournamentDetail({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <div>
      <CreateParticipantForm
        type={tournament.type}
        tournamentId={tournament.id}
      />
      <p>Name: {tournament.name}</p>
      <p>Type: {tournament.type}</p>
    </div>
  );
}
