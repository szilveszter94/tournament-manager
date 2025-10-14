"use client";

import { Participant, ParticipantTournament, Tournament } from "@/generated/api";
import React from "react";
import CreateParticipantForm from "../participant/create-form";
import TournamentParticipants from "./tournament-participants";
import CustomButton from "../components/custom-button/custom-button";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setGroups, clearGroups, removePlayer } from "@/app/store/groupSlice";

export default function TournamentDetail({
  tournament,
  participants,
}: {
  tournament: Tournament;
  participants: ParticipantTournament[];
}) {
  const dispatch = useDispatch();
  const groups = useSelector((state: RootState) => state.groups.groupsByTournament);

  const onGenerateGroups = (): void => {
    const group1: Participant[] = [];
    const group2: Participant[] = [];
    participants.forEach((p, index) => {
      if (index % 2 === 0) {
        if (p.participant) group1.push(p.participant);
      } else {
        if (p.participant) group2.push(p.participant);
      }
    });
    dispatch(setGroups({ tournamentId: tournament.id, groups: [group1, group2] }));
  };

  const onClearGroups = (): void => {
    dispatch(clearGroups(tournament.id));
  };
  const filteredParticipants = (): ParticipantTournament[] => {
    if (groups && groups[tournament.id]) {
      const participantIds = new Set(groups[tournament.id]?.flat().map((p) => p.id));
      return participants.filter((p) => !participantIds.has(p.participantId));
    }
    return participants;
  };

  const onRemovePlayer = (participantId: number): void => {
    dispatch(removePlayer({ tournamentId: tournament.id, participantId }));
  };

  return (
    <div className="flex gap-2 w-full bg-tertiary rounded-2xl">
      <div className="flex-4 p-6 space-y-6 ">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-secondary-border-color pb-3">
          <div>
            <h1 className="text-2xl font-bold text-primary-text-color">🏆 {tournament.name}</h1>
            <p className="text-sm text-foreground">
              Type: <span className="font-medium">{tournament.type}</span> · Status:{" "}
              <span className="text-green-primary font-semibold">Register Players</span>
            </p>
          </div>
          <span className="text-sm text-foreground">Tournament ID: {tournament.id}</span>
        </div>
        {/* Add Participant Form */}
        <div className="bg-secondary rounded-2xl shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-3 text-primary-text-color">{`Add ${tournament.type === "Individual" ? "Player" : "Team"}`}</h2>
          <CreateParticipantForm type={tournament.type} tournamentId={tournament.id} />
        </div>
        {/* Main content */}
        <TournamentParticipants
          participants={filteredParticipants()}
          className="grid w-full grid-cols-1 md:grid-cols-2 gap-6"
        />
      </div>
      <div className="flex-6 p-6 space-y-6 rounded-2xl">
        <div className="flex gap-3 w-100">
          <CustomButton onClick={onGenerateGroups} icon={<PlusCircleIcon />} variant="primary">
            Generate Groups
          </CustomButton>
          <CustomButton onClick={onClearGroups} icon={<TrashIcon />} variant="primary">
            Delete Groups
          </CustomButton>
        </div>
        {groups && groups[tournament.id]?.map((g, index) => (
          <div key={index}>
            {g.map((p) => (
              <div className="w-50 flex justify-between gap-2" key={p.id}>
                <p>{p.name}</p>
                <TrashIcon className="h-5 w-5 color-red-primary cursor-pointer" onClick={() => onRemovePlayer(p.id)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
