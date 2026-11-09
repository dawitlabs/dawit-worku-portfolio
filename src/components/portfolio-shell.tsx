"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import { GooeyField } from "@/components/gooey-field";
import { TextReveal } from "@/components/text-reveal";
import { ModeRail, type Mode } from "@/components/mode-rail";
import { GemGrid } from "@/components/gem-grid";
import { LinkDock } from "@/components/link-dock";
import { VibeBoard } from "@/components/vibe-board";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function PortfolioShell() {
  const [mode, setMode] = useState<Mode>("gem");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-creme">
      <GooeyField />

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-creme transition group-hover:text-scarlet sm:text-2xl">
            Dawit Worku
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-creme/45 sm:inline">
            / {profile.handle}
          </span>
        </a>
        <nav className="flex items-center gap-2">
          <Magnetic>
            <Button asChild variant="outline" size="sm" className="border-creme/25 text-creme">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FolderGit2 className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="sm">
              <a href="mailto:hello@dawit.dev">Hire me</a>
            </Button>
          </Magnetic>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-scarlet"
          >
            {profile.role} · {profile.company} · {profile.location}
          </motion.p>

          <TextReveal
            text="Dawit Worku"
            className="mt-4 max-w-5xl font-display text-[clamp(3.4rem,14vw,9.5rem)] leading-[0.88] tracking-[-0.04em] text-creme"
            delay={0.15}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-creme/70 sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button asChild size="lg">
                <a href="#modes">Enter Gem / Link / Vibe</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                asChild
                variant="creme"
                size="lg"
                className="border border-transparent"
              >
                <a href={profile.companyUrl} target="_blank" rel="noreferrer">
                  Client Reach AI
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </section>

        <section
          id="modes"
          className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8"
        >
          <ModeRail value={mode} onChange={setMode} />

          <div className="mt-10 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {mode === "gem" && <GemGrid />}
                {mode === "link" && <LinkDock />}
                {mode === "vibe" && <VibeBoard />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-creme/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-creme/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 Dawit Worku
          </p>
          <p className="max-w-md text-creme/45">
            Scarlet · Black · Creme — built to feel rare, not template.
          </p>
        </div>
      </footer>
    </div>
  );
}
