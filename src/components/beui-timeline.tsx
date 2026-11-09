"use client";

import { Timeline } from "@/components/motion/timeline";
import { careerEvents } from "@/lib/career";

export function BeuiTimeline() {
  return (
    <section id="timeline" className="mx-auto w-full max-w-6xl space-y-8 px-5 sm:px-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Path · timeline
        </p>
        <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
          Drag through the years
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          A beUI timeline of shipping milestones — flick, focus, read the meta.
        </p>
      </div>

      <div className="overflow-hidden border border-border bg-card/40">
        <Timeline
          events={careerEvents}
          defaultValue="now"
          height={360}
          itemWidth={220}
          years
          ruler
          cables
          aria-label="Dawit Worku career timeline"
          className="w-full bg-transparent"
        />
      </div>
    </section>
  );
}
