import ParticipantDropdown from "@/app/ui/participant/participant-dropdown";
import { ParticipantSkeleton } from "@/app/ui/participant/skeleton";
import CreateTournamentForm from "@/app/ui/tournament/create-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Tournament</h1>
      <CreateTournamentForm />
      <Suspense key="participantDropdown" fallback={<ParticipantSkeleton />}>
        <ParticipantDropdown />
      </Suspense>
    </main>
  );
}
