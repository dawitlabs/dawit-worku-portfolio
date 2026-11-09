"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { InView } from "@/components/motion-primitives/in-view";

const stats = [
  { label: "GitHub followers", value: 340, suffix: "+" },
  { label: "Public repos", value: 66, suffix: "" },
  { label: "Selected gems", value: 9, suffix: "" },
  { label: "Years shipping", value: 4, suffix: "+" },
];

function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setN(value));
    return () => cancelAnimationFrame(id);
  }, [value]);
  return (
    <span className="inline-flex items-baseline gap-0.5">
      <SlidingNumber value={n} />
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section
      id="stats"
      aria-label="Career stats"
      className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-5 sm:grid-cols-4 sm:px-8"
    >
      {stats.map((stat, i) => (
        <InView
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: i * 0.06, duration: 0.45 }}
          viewOptions={{ once: true }}
        >
          <div className="border border-border bg-black/50 px-4 py-5 backdrop-blur-sm">
            <p className="font-display text-3xl text-creme sm:text-4xl">
              <StatValue value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-creme/50">
              {stat.label}
            </p>
          </div>
        </InView>
      ))}
    </section>
  );
}
