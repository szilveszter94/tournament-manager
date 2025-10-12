import { ParticipantTournament } from "@/generated/api";
import React from "react";
import { DeleteParticipant } from "./delete-form";

export default function TournamentParticipantsList({
  participants,
}: {
  participants: ParticipantTournament[];
}) {
  return (
    <div>
      {participants.map((p) => (
        <div className="flex gap-3 justify-between" key={p.id}>
          <p>{p.participant?.name}</p>
          <DeleteParticipant
            participantId={p.participantId}
            tournamentId={p.tournamentId}
          />
        </div>
      ))}
    </div>
  );
}
