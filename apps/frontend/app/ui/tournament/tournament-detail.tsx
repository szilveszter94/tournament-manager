"use client";

import { ParticipantTournament, Tournament } from "@/generated/api";
import React, { useEffect } from "react";
import CreateParticipantForm from "../participant/create-form";
import CustomButton from "../components/custom-button/custom-button";
import { ForwardIcon, PlusCircleIcon, SparklesIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setGroups, clearGroups, addGroup } from "@/app/store/features/groups/groupSlice";
import { selectFilteredParticipants } from "@/app/store/features/participants/participantSelector";
import { setParticipants } from "@/app/store/features/participants/participantSlice";
import { selectGroupsByTournament } from "@/app/store/features/groups/groupsSelector";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { Column } from "../components/dnd/column";
import { Item } from "../components/dnd/item";
import TournamentParticipants from "./tournament-participants";
import { shuffle } from "@/lib/utils";
import { createTournamentPhase } from "@/app/tournament/actions";

const nonPersistentGroup = "nonPersistent";

export default function TournamentDetail({
  tournament,
  participants,
}: {
  tournament: Tournament;
  participants: ParticipantTournament[];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setParticipants(participants));
  }, [dispatch, participants]);

  const tournamentPersistentGroups = useAppSelector(selectGroupsByTournament(tournament.id));
  const tournamentNonPersistentGroup = {
    [nonPersistentGroup]: useAppSelector(selectFilteredParticipants(tournament.id)),
  };

  const onAddGroup = (): void => {
    const groupName = `Group ${Object.keys(tournamentPersistentGroups).length + 1}`;
    dispatch(addGroup({ tournamentId: tournament.id, groupName: groupName, group: [] }));
  };

  const onAutofillGroups = (): void => {
    const groupCount = Object.keys(tournamentPersistentGroups).length;
    const allParticipants = [
      ...Object.values(tournamentPersistentGroups).flat(),
      ...Object.values(tournamentNonPersistentGroup).flat(),
    ];
    if (!allParticipants.length || groupCount <= 0 || allParticipants.length < groupCount) {
      return;
    }
    const shuffledParticipants = shuffle(allParticipants);
    const newGroups: Record<string, ParticipantTournament[]> = {};

    const baseSize = Math.floor(shuffledParticipants.length / groupCount);
    let remainder = shuffledParticipants.length % groupCount;
    let startIndex = 0;

    Object.keys(tournamentPersistentGroups).forEach((groupName) => {
      const groupSize = baseSize + (remainder > 0 ? 1 : 0);
      remainder = Math.max(0, remainder - 1);

      const groupParticipants = shuffledParticipants.slice(startIndex, startIndex + groupSize);
      newGroups[groupName] = groupParticipants;
      startIndex += groupSize;
    });

    dispatch(setGroups({ tournamentId: tournament.id, groups: newGroups }));
  };

  const onSetGroups = (updatedGroups: Record<string, ParticipantTournament[]>) => {
    const newGroups: Record<string, ParticipantTournament[]> = {};
    let participants: ParticipantTournament[] = [];

    Object.entries(updatedGroups).forEach(([groupName, groupParticipants]) => {
      if (groupName === nonPersistentGroup) {
        participants = groupParticipants;
      } else {
        newGroups[groupName] = groupParticipants;
      }
    });

    if (participants.length > 0) {
      dispatch(setParticipants(participants));
    }

    dispatch(setGroups({ tournamentId: tournament.id, groups: newGroups }));
  };

  const onClearGroups = (): void => {
    dispatch(clearGroups(tournament.id));
    dispatch(setParticipants(participants));
  };

  const onGenerateGroups = async (): Promise<void> => {
    await createTournamentPhase(tournamentPersistentGroups, tournament.id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full bg-tertiary rounded-2xl">
      <DragDropProvider
        onDragOver={(event) => {
          const updatedGroups = move({ ...tournamentPersistentGroups, ...tournamentNonPersistentGroup }, event);
          onSetGroups(updatedGroups);
        }}>
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
          <TournamentParticipants participants={tournamentNonPersistentGroup} />
        </div>
        <div className="flex-6 py-6 space-y-6 rounded-2xl">
          <div className="px-5 flex flex-wrap gap-5 w-full justify-center sm:justify-start">
            <CustomButton onClick={onAddGroup} icon={<PlusCircleIcon />} variant="primary">
              Add Group
            </CustomButton>
            <CustomButton onClick={onAutofillGroups} icon={<SparklesIcon />} variant="primary">
              Auto Fill
            </CustomButton>
            <CustomButton onClick={onClearGroups} icon={<TrashIcon />} variant="primary">
              Delete Groups
            </CustomButton>
            <CustomButton onClick={onGenerateGroups} icon={<ForwardIcon />} variant="primary">
              Next
            </CustomButton>
          </div>
          <div className="flex flex-wrap px-5 gap-5">
            {Object.entries(tournamentPersistentGroups)?.map(([column, participants]) => (
              <div className="text-center" key={column}>
                <div className="bg-secondary border-b border-b-secondary-border-color rounded-t-xl py-2">{column}</div>
                <Column className="flex rounded-b-xl p-2 flex-col bg-secondary h-80 w-60 overflow-y-auto" id={column}>
                  {participants.map((p, index) => (
                    <Item key={p.id.toString()} id={p.id} index={index} column={column} participant={p} />
                  ))}
                </Column>
              </div>
            ))}
          </div>
        </div>
      </DragDropProvider>
    </div>
  );
}
