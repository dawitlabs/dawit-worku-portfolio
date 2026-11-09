"use client";

import { Marquee } from "@/components/motion/marquee";
import { skills } from "@/lib/data";

export function BeuiMarquee() {
  return (
    <section aria-label="Tech marquee" className="border-y border-border bg-black/60 py-5">
      <Marquee speed={28} gap="2.5rem" className="[--duration:28s]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-display text-2xl tracking-tight text-creme/80 sm:text-3xl"
          >
            {skill}
            <span className="ml-6 text-scarlet">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
