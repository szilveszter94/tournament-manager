"use client"; 

import { useEffect, useState } from "react";
import { fetchTournaments } from "./lib/api";

export default function Home() {
  const [tournaments, setTournaments] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournaments()
      .then((data) => setTournaments(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tournaments...</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tournaments</h1>
      <ul className="list-disc pl-5">
        <li>
          {tournaments} - {new Date().toLocaleDateString()}
        </li>
      </ul>
    </main>
  );
}
