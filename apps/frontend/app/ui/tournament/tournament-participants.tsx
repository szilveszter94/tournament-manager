import { ParticipantTournament } from "@/generated/api";
import React from "react";
import { Column } from "../components/dnd/column";
import { Item } from "../components/dnd/item";

type TournamentParticipantProps = {
  participants: Record<string, ParticipantTournament[]>;
  className?: string;
};

export default function TournamentParticipants({ participants, className = "" }: TournamentParticipantProps) {
  return (
    <div className={className}>
      {/* Participants List */}
      {Object.entries(participants)?.map(([column, participants]) => (
        <Column className="grid grid-cols-2 gap-2 rounded-xl bg-secondary p-2 h-100 overflow-y-auto" key={column} id={column}>
          {participants.map((p, index) => (
            <Item key={p.id.toString()} id={p.id} index={index} column={column} participant={p} />
          ))}
        </Column>
      ))}
    </div>
  );
}
