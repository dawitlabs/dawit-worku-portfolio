"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { label: "GitHub followers", value: 340, suffix: "+" },
  { label: "Public repos", value: 66, suffix: "" },
  { label: "Selected gems", value: 9, suffix: "" },
  { label: "Years shipping", value: 4, suffix: "+" },
];

export function StatsStrip() {
  return (
    <section
      id="stats"
      aria-label="Career stats"
      className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-5 sm:grid-cols-4 sm:px-8"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="border border-creme/15 bg-black/50 px-4 py-5 backdrop-blur-sm"
        >
          <p className="font-display text-3xl text-creme sm:text-4xl">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-creme/50">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
