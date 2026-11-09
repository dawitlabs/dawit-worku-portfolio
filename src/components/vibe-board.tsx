"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { EmojiReaction } from "@/components/ui/emoji-reaction";
import { profile, skills, vibeNotes } from "@/lib/data";

const GravityLetters = dynamic(
  () => import("@/components/ui/gravity-letters"),
  { ssr: false },
);

export function VibeBoard() {
  return (
    <section aria-labelledby="vibe-heading" className="space-y-10">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Vibe · atmosphere
        </p>
        <h2
          id="vibe-heading"
          className="mt-2 font-display text-3xl text-creme sm:text-5xl"
        >
          Paper, morph, polish
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          Sketch energy with a prestige finish — sticky notes, gravity glyphs,
          and a tapback for the mood.
        </p>
      </div>

      <div className="relative grid gap-4 md:grid-cols-2">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-scarlet/30 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {vibeNotes.map((note, i) => (
          <motion.article
            key={note.id}
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: note.rotate }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 160 }}
            whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
            className="relative border border-black/10 bg-creme p-6 text-black shadow-[6px_8px_0_rgba(245,51,44,0.35)]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(0,0,0,0.06) 28px)",
            }}
          >
            <div className="absolute -top-2 left-6 h-4 w-16 -rotate-2 bg-scarlet/80 mix-blend-multiply" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
              note 0{i + 1}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight">
              {note.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black/75">
              {note.body}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="relative h-64 overflow-hidden border border-creme/15 bg-black/60 sm:h-80">
          <p className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-creme/50">
            Gravity field · click / hold to pour
          </p>
          <GravityLetters
            type="both"
            color="#F5332C"
            size={28}
            className="h-full w-full"
            items={["D", "A", "W", "I", "T", "✦", "01"]}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 border border-creme/15 bg-creme/[0.04] p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-creme/50">
            React to the vibe
          </p>
          <EmojiReaction size="lg" />
        </div>
      </div>

      <div className="border border-creme/15 bg-black/50 p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-scarlet">
              Stack · in rotation
            </p>
            <p className="mt-2 max-w-md text-sm text-creme/70">
              {profile.role} at {profile.company} · based in {profile.location}.
            </p>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="border border-creme/20 bg-creme/5 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-creme"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
