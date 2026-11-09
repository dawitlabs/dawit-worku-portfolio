"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import dynamic from "next/dynamic";
import { GooeyField } from "@/components/gooey-field";
import { TextReveal } from "@/components/text-reveal";
import { GemGrid } from "@/components/gem-grid";
import { LinkDock } from "@/components/link-dock";
import { VibeBoard } from "@/components/vibe-board";
import { StatsStrip } from "@/components/stats-strip";
import { StudioSection } from "@/components/studio-section";
import { ActivitySection } from "@/components/activity-section";
import { FaqSection } from "@/components/faq-section";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import { GooeyNav } from "@/components/ui/gooey-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AiStatus } from "@/components/ui/ai-status";
import { toast, Toaster } from "@/components/ui/toast";
import { profile } from "@/lib/data";

const FluidOrb = dynamic(() => import("@/components/ui/fluid-orb"), {
  ssr: false,
});

const MODES = ["Gem", "Link", "Vibe"] as const;
type ModeIndex = 0 | 1 | 2;

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "stats", label: "Stats" },
  { id: "modes", label: "Modes" },
  { id: "studio", label: "Studio" },
  { id: "activity", label: "GitHub" },
  { id: "faq", label: "FAQ" },
];

export function PortfolioShell() {
  const [mode, setMode] = useState<ModeIndex>(0);

  function hire() {
    toast.success("Brief received", {
      description: "Open your mail client — hello@dawit.dev is ready.",
      action: {
        label: "Compose",
        onClick: () => {
          window.location.href = "mailto:hello@dawit.dev";
        },
      },
    });
    window.location.href = "mailto:hello@dawit.dev";
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-creme">
      <GooeyField />
      <ScrollProgress
        sections={SECTIONS}
        className="fixed right-4 top-1/2 z-40 -translate-y-1/2 sm:right-6"
      />
      <Toaster position="bottom-center" />

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
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-creme/25 text-creme"
            >
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FolderGit2 className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="sm" onClick={hire}>
              Hire me
            </Button>
          </Magnetic>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-16">
          <div className="mb-8 flex items-center gap-5">
            <FluidOrb size={96} color="#F5332C" className="shrink-0 shadow-[0_0_60px_rgba(245,51,44,0.35)]" />
            <AiStatus state="writing" label="Crafting Gem / Link / Vibe" detail="portfolio" />
          </div>

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
              <Button asChild variant="creme" size="lg">
                <a href="#studio">See the studio</a>
              </Button>
            </Magnetic>
          </motion.div>
        </section>

        <div className="space-y-24 pb-28">
          <StatsStrip />

          <section id="modes" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
                  Modes · gooey nav
                </p>
                <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
                  Pick a frequency
                </h2>
              </div>
              <GooeyNav
                items={[...MODES]}
                value={mode}
                onChange={(i) => setMode(i as ModeIndex)}
                size="md"
                activeColor="#F5332C"
                activeLabelColor="#000000"
                className="self-start sm:self-auto"
              />
            </div>

            <div className="min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {mode === 0 && <GemGrid />}
                  {mode === 1 && <LinkDock />}
                  {mode === 2 && <VibeBoard />}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <StudioSection />
          <ActivitySection />
          <FaqSection />
        </div>
      </main>

      <footer className="relative z-10 border-t border-creme/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-creme/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 Dawit Worku
          </p>
          <p className="max-w-md text-creme/45">
            Scarlet · Black · Creme — rare motion, owned components, no template
            energy.
          </p>
        </div>
      </footer>
    </div>
  );
}
