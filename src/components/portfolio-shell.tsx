"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import dynamic from "next/dynamic";
import { GooeyField } from "@/components/gooey-field";
import { GemGrid } from "@/components/gem-grid";
import { LinkDock } from "@/components/link-dock";
import { VibeBoard } from "@/components/vibe-board";
import { StatsStrip } from "@/components/stats-strip";
import { StudioSection } from "@/components/studio-section";
import { ActivitySection } from "@/components/activity-section";
import { FaqSection } from "@/components/faq-section";
import { BeuiTimeline } from "@/components/beui-timeline";
import { BeuiMarquee } from "@/components/beui-marquee";
import { BeuiCrew } from "@/components/beui-crew";
import { MpShowcase } from "@/components/mp-showcase";
import { RareKit } from "@/components/rare-kit";
import { RareNav } from "@/components/rare-nav";
import { Button } from "@/components/ui/button";
import { GooeyNav } from "@/components/ui/gooey-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AiStatus } from "@/components/ui/ai-status";
import { toast, Toaster } from "@/components/ui/toast";
import { NotificationBell } from "@/components/ui/notification-bell";
import { MagneticButton } from "@/components/motion/button/magnetic";
import { ExpandingArrowButton } from "@/components/motion/expanding-arrow-button";
import { ButtonLink } from "@/components/motion/button/base";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { TextMorph } from "@/components/motion-primitives/text-morph";
import { TextRoll } from "@/components/motion-primitives/text-roll";
import { SpinningText } from "@/components/motion-primitives/spinning-text";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
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
  { id: "primitives", label: "Effects" },
  { id: "rare-kit", label: "Rare kit" },
  { id: "timeline", label: "Path" },
  { id: "studio", label: "Studio" },
  { id: "activity", label: "GitHub" },
  { id: "faq", label: "FAQ" },
];

const LOOP_LINES = [
  "Gem · selected work",
  "Link · reach everything",
  "Vibe · atmosphere first",
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
      <RareNav />
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
          <NotificationBell
            count={3}
            size={40}
            color="red"
            className="rounded-none border border-border bg-black text-creme"
            onClick={() => {
              document.getElementById("rare-kit")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
          <ButtonLink
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
            className="rounded-none"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            GitHub
          </ButtonLink>
          <MagneticButton size="sm" className="rounded-none" onClick={hire}>
            Hire me
          </MagneticButton>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-16">
          <div className="mb-8 flex flex-wrap items-center gap-6">
            <div className="relative flex size-28 items-center justify-center">
              <FluidOrb
                size={96}
                color="#F5332C"
                className="shrink-0 shadow-[0_0_60px_rgba(245,51,44,0.35)]"
              />
              <SpinningText
                radius={52}
                fontSize={11}
                className="pointer-events-none absolute inset-0 font-mono uppercase tracking-[0.35em] text-creme/70"
              >
                dawit · worku · gem · link · vibe ·
              </SpinningText>
            </div>
            <div className="space-y-3">
              <AiStatus
                state="writing"
                label="Crafting Gem / Link / Vibe"
                detail="portfolio"
              />
              <TextLoop className="font-mono text-[11px] tracking-[0.22em] text-scarlet">
                {LOOP_LINES.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </TextLoop>
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-scarlet">
            <TextMorph>
              {`${profile.role} · ${profile.company} · ${profile.location}`}
            </TextMorph>
          </p>

          <TextEffect
            as="h1"
            preset="fade-in-blur"
            per="char"
            className="mt-4 max-w-5xl font-display text-[clamp(3.4rem,14vw,9.5rem)] leading-[0.88] tracking-[-0.04em] text-creme"
            speedReveal={1.1}
            speedSegment={0.6}
          >
            Dawit Worku
          </TextEffect>

          <TextEffect
            as="p"
            preset="fade"
            per="word"
            delay={0.35}
            className="mt-6 max-w-xl text-base leading-relaxed text-creme/70 sm:text-lg"
          >
            {profile.bio}
          </TextEffect>

          <div className="mt-4">
            <TextRoll className="font-display text-xl text-creme/80 sm:text-2xl">
              Rare motion. Owned source. Scarlet cut.
            </TextRoll>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic intensity={0.2}>
              <ExpandingArrowButton
                className="rounded-none bg-scarlet text-black"
                accentClassName="bg-black text-creme"
                onClick={() => {
                  document.getElementById("modes")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Enter Gem / Link / Vibe
              </ExpandingArrowButton>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <Button asChild variant="creme" size="lg" className="rounded-none">
                <a href="#primitives">See effects</a>
              </Button>
            </Magnetic>
          </div>
        </section>

        <BeuiMarquee />

        <div className="space-y-24 pb-28 pt-16">
          <StatsStrip />
          <BeuiCrew />

          <section id="modes" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
                  Modes · gooey + animated bg
                </p>
                <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
                  Pick a frequency
                </h2>
              </div>
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <GooeyNav
                  items={[...MODES]}
                  value={mode}
                  onChange={(i) => setMode(i as ModeIndex)}
                  size="md"
                  activeColor="#F5332C"
                  activeLabelColor="#000000"
                />
                <div className="flex rounded-none border border-border bg-black/40 p-1">
                  <AnimatedBackground
                    defaultValue={MODES[mode]}
                    onValueChange={(id) => {
                      const idx = MODES.indexOf(id as (typeof MODES)[number]);
                      if (idx >= 0) setMode(idx as ModeIndex);
                    }}
                    className="rounded-none bg-scarlet"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                  >
                    {MODES.map((item) => (
                      <button
                        key={item}
                        data-id={item}
                        type="button"
                        className="relative z-10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-creme data-[checked=true]:text-black"
                      >
                        {item}
                      </button>
                    ))}
                  </AnimatedBackground>
                </div>
              </div>
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

          <MpShowcase />
          <RareKit />
          <BeuiTimeline />
          <StudioSection />
          <ActivitySection />
          <FaqSection />
        </div>
      </main>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-creme/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 Dawit Worku
          </p>
          <p className="max-w-md text-creme/45">
            Scarlet · Black · Creme — Rare UI + beUI + Motion Primitives.
          </p>
        </div>
      </footer>
    </div>
  );
}
