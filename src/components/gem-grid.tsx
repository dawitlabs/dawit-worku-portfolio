"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";
import { gems, type Gem } from "@/lib/data";
import { cn } from "@/lib/utils";

function accentClasses(accent: Gem["accent"]) {
  switch (accent) {
    case "scarlet":
      return "bg-scarlet text-black";
    case "creme":
      return "bg-creme text-black";
    default:
      return "bg-black text-creme border border-creme/25";
  }
}

function GemCard({ gem, index }: { gem: Gem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard
        max={10}
        className={cn(
          "group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-none p-6 sm:p-8",
          accentClasses(gem.accent),
        )}
      >
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative flex h-full min-h-[248px] flex-col justify-between"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-black/10 blur-2xl"
            animate={{ scale: hovered ? 1.35 : 1, x: hovered ? -20 : 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />

          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                {String(index + 1).padStart(2, "0")} · {gem.tag}
              </span>
              <motion.span
                animate={{ rotate: hovered ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.span>
            </div>
            <h3 className="mt-5 font-display text-3xl tracking-tight sm:text-4xl">
              {gem.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-80 sm:text-base">
              {gem.blurb}
            </p>
          </div>

          <div className="relative mt-8 flex flex-wrap items-end justify-between gap-4">
            <ul className="flex flex-wrap gap-2">
              {gem.stack.map((s) => (
                <li
                  key={s}
                  className="border border-current/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <a
                href={gem.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 border border-current/25 bg-black/5 px-3 text-xs font-medium backdrop-blur-sm transition hover:bg-black/15"
              >
                <FolderGit2 className="h-3.5 w-3.5" />
                Code
              </a>
              {gem.live && (
                <a
                  href={gem.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-2 bg-black px-3 text-xs font-medium text-creme transition hover:bg-black/85"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              )}
            </div>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-black/30"
              />
            )}
          </AnimatePresence>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export function GemGrid() {
  return (
    <section aria-labelledby="gem-heading" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
            Gem · selected work
          </p>
          <h2
            id="gem-heading"
            className="mt-2 font-display text-3xl text-creme sm:text-5xl"
          >
            Hard-to-miss builds
          </h2>
        </div>
        <p className="max-w-sm text-sm text-creme/65">
          Tilt cards for selected work — platforms, agents, accessibility, and
          brand systems.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {gems.map((gem, i) => (
          <GemCard key={gem.id} gem={gem} index={i} />
        ))}
      </div>
    </section>
  );
}
