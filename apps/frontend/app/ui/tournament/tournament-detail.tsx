"use client";

import { ParticipantTournament, Tournament } from "@/generated/api";
import React from "react";
import CreateParticipantForm from "../participant/create-form";
import TournamentParticipantsList from "./tournament-participants";

export default function TournamentDetail({
  tournament,
  participants,
}: {
  tournament: Tournament;
  participants: ParticipantTournament[];
}) {
  return (
    <div className="flex gap-3">
      <TournamentParticipantsList participants={participants} />
      <div>
        <CreateParticipantForm
          type={tournament.type}
          tournamentId={tournament.id}
        />
        <p>Name: {tournament.name}</p>
        <p>Type: {tournament.type}</p>
      </div>
    </div>
  );
}
