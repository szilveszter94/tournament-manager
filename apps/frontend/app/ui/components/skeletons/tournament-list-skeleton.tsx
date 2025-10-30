// Loading animation

import { shimmer } from "./constants";

export function TournamentListSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden bg-primary m-10 p-5 shadow-sm`}>
      {/* Table header */}
      <div className="mb-4 grid grid-cols-6 gap-4 border-b border-secondary pb-3">
        <div className="h-6 w-24 rounded-md bg-secondary" />
        <div className="h-6 w-20 rounded-md bg-secondary" />
        <div className="h-6 w-28 rounded-md bg-secondary" />
        <div className="h-6 w-16 rounded-md bg-secondary" />
        <div className="h-6 w-20 rounded-md bg-secondary" />
        <div className="h-6 w-24 rounded-md bg-secondary" />
      </div>

      {/* Table rows */}
      <div className="space-y-3">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="grid grid-cols-6 gap-4">
            <div className="h-8 w-24 rounded-md bg-secondary" />
            <div className="h-8 w-20 rounded-md bg-secondary" />
            <div className="h-8 w-28 rounded-md bg-secondary" />
            <div className="h-8 w-16 rounded-md bg-secondary" />
            <div className="h-8 w-20 rounded-md bg-secondary" />
            <div className="h-8 w-24 rounded-md bg-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}
