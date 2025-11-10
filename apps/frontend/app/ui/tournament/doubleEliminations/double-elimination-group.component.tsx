import React from "react";

interface DoubleEliminationGroupProps {
  name?: string;
  wins?: number;
  losses?: number;
  elo?: number;
  color: "green" | "yellow" | "red";
}

const colorStyles: Record<DoubleEliminationGroupProps["color"], string> = {
  green: "border-green-primary/30 bg-green-primary/5",
  yellow: "border-yellow-primary/30 bg-yellow-primary/5",
  red: "border-red-primary/30 bg-red-primary/5",
};

export const DoubleEliminationGroupComponent: React.FC<DoubleEliminationGroupProps> = ({
  name = "Unknown",
  wins = 0,
  losses = 0,
  elo = 0,
  color,
}) => {
  return (
    <div
      className={`flex flex-col rounded-2xl border py-1 px-4 ${colorStyles[color]}`}
    >
      <div className="flex justify-between">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-gray-primary">ELO: {elo}</span>
      </div>
      <div className="mt-1 flex justify-between text-sm text-gray-primary">
        <span>Wins: {wins}</span>
        <span>Losses: {losses}</span>
      </div>
    </div>
  );
};