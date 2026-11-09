"use client";

import { AvatarGroup } from "@/components/motion/avatar-group";

const crew = [
  { id: "dawit", name: "Dawit Worku", src: "https://avatars.githubusercontent.com/u/144016968?v=4" },
  { id: "clientreach", name: "Client Reach AI", src: "https://github.com/Client-Reach-AI.png" },
  { id: "byte", name: "BytePhilosopher", src: "https://github.com/BytePhilosopher.png" },
  { id: "async", name: "async-arch", src: "https://github.com/async-arch.png" },
  { id: "chala", name: "Chala751", src: "https://github.com/Chala751.png" },
];

export function BeuiCrew() {
  return (
    <section id="crew" className="mx-auto w-full max-w-6xl space-y-6 px-5 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
            Crew · collaborators
          </p>
          <h2 className="mt-2 font-display text-3xl text-creme sm:text-4xl">
            People I ship with
          </h2>
        </div>
        <AvatarGroup members={crew} max={4} size="lg" label="Collaborators" />
      </div>
    </section>
  );
}
