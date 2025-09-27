import { fetchParticipants } from "@/app/participant/api";

export default async function ParticipantDropdown() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const participants = await fetchParticipants();

  return (
    <ul>
      {participants.data?.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
