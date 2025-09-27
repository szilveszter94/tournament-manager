import TournamentList from "@/app/ui/tournament/tournament-list";

export default function Page() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div>
        <TournamentList query="" />
      </div>
    </main>
  );
}
