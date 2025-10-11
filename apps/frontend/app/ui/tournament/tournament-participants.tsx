import { ParticipantTournament } from "@/generated/api";
import React from "react";

export default function TournamentParticipantsList({
  participants,
}: {
  participants: ParticipantTournament[];
}) {
  return (
    <div>
      <ul>
        {participants.map((p) => (
          <li key={p.id}>{p.participant?.name}</li>
        ))}
      </ul>
    </div>
  );
}
