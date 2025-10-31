import { ParticipantTournament } from "@/generated/api";
import React from "react";
import { Column } from "../../components/dnd/column";
import { Item } from "../../components/dnd/item";

type TournamentParticipantProps = {
  participants: Record<string, ParticipantTournament[]>;
  className?: string;
};

export default function TournamentParticipants({ participants, className }: TournamentParticipantProps) {
  return (
    <div className={className}>
      {/* Participants List */}
      {Object.entries(participants)?.map(([column, participants]) => (
        <Column
          className="grid grid-cols-1 md:grid-cols-2 content-start gap-2 rounded-b-xl p-2 pb-2 bg-secondary h-80 w-full overflow-y-auto"
          key={column}
          id={column}>
          {participants.map((p, index) => (
            <Item key={p.id.toString()} id={p.id} index={index} column={column} participant={p} className="h-12" />
          ))}
        </Column>
      ))}
    </div>
  );
}
