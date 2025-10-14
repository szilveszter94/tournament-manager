import { ParticipantTournament } from "@/generated/api";
import React from "react";
import { DeleteParticipant } from "./delete-form";

type TournamentParticipantProps = {
    participants: ParticipantTournament[];
    className: string;
}

export default function TournamentParticipants({ participants, className }: TournamentParticipantProps) {
  return (
    <div className={className}>
      {/* Participants List */}
      {participants.length > 0 ? (
        <div className="md:col-span-2 divide-y divide-foreground h-120 overflow-auto w-full">
          {participants.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-2">
              <p className="text-sm font-medium">{p.participant?.name}</p>
              <DeleteParticipant participantId={p.participantId} tournamentId={p.tournamentId} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-foreground">No participants yet.</p>
      )}
    </div>
  );
}
