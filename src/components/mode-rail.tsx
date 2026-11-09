"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Mode = "gem" | "link" | "vibe";

const modes: { id: Mode; label: string; caption: string }[] = [
  { id: "gem", label: "Gem", caption: "Selected work" },
  { id: "link", label: "Link", caption: "Reach me" },
  { id: "vibe", label: "Vibe", caption: "How it feels" },
];

type ModeRailProps = {
  value: Mode;
  onChange: (mode: Mode) => void;
};

export function ModeRail({ value, onChange }: ModeRailProps) {
  return (
    <div
      role="tablist"
      aria-label="Portfolio modes"
      className="relative grid grid-cols-3 border border-creme/20 bg-black/40 p-1 backdrop-blur-md"
    >
      {modes.map((mode) => {
        const active = value === mode.id;
        return (
          <button
            key={mode.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(mode.id)}
            className={cn(
              "relative z-10 px-3 py-3 text-left transition-colors sm:px-5",
              active ? "text-black" : "text-creme/70 hover:text-creme",
            )}
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 bg-creme"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10 block font-display text-lg leading-none tracking-tight sm:text-xl">
              {mode.label}
            </span>
            <span className="relative z-10 mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
              {mode.caption}
            </span>
          </button>
        );
      })}
    </div>
  );
}
