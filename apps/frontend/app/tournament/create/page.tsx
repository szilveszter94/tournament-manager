import CreateTournamentForm from "@/app/ui/tournament/create-group-stages/create-form";

export default function Page() {
  return (
    <main className="p-8 max-w-3xl mx-auto border-1 border-primary-border-color rounded-xl mt-5">
      <h1 className="text-2xl font-bold mb-6">Create Tournament</h1>
      <CreateTournamentForm />
    </main>
  );
}
