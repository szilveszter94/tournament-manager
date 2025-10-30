"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{error.message}</h2>
      <button
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
        onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
