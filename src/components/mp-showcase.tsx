"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { InView } from "@/components/motion-primitives/in-view";
import { gems } from "@/lib/data";

export function MpShowcase() {
  return (
    <section id="primitives" className="mx-auto w-full max-w-6xl space-y-10 px-5 sm:px-8">
      <InView
        variants={{
          hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.55 }}
        viewOptions={{ once: true, margin: "-80px" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Motion Primitives · effects
        </p>
        <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
          <TextShimmer
            className="font-display text-3xl [--base-color:#8a897c] [--base-gradient-color:#F5332C] dark:[--base-color:#8a897c] dark:[--base-gradient-color:#CCCBB9] sm:text-5xl"
            duration={2.4}
          >
            Morph, trail, glow
          </TextShimmer>
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          Spotlight cards, border trails, infinite work slider, and morphing
          project dialogs — Motion Primitives in the Scarlet system.
        </p>
      </InView>

      <div className="relative grid gap-4 md:grid-cols-2">
        {gems.slice(0, 4).map((gem) => (
          <MorphingDialog
            key={gem.id}
            transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
          >
            <MorphingDialogTrigger className="relative overflow-hidden border border-border bg-card text-left">
              <Spotlight
                className="from-scarlet/40 via-scarlet/10 to-transparent"
                size={280}
              />
              <BorderTrail
                size={48}
                className="bg-scarlet"
                style={{ boxShadow: "0 0 20px #F5332C" }}
              />
              <div className="relative z-10 p-6 sm:p-8">
                <MorphingDialogTitle className="font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
                  {gem.tag}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="mt-3 font-display text-3xl text-creme">
                  {gem.title}
                </MorphingDialogSubtitle>
                <p className="mt-3 line-clamp-2 text-sm text-creme/65">
                  {gem.blurb}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0">
                <GlowEffect
                  colors={["#F5332C", "#CCCBB9", "#F5332C", "#000000"]}
                  mode="colorShift"
                  blur="softest"
                  className="opacity-30"
                  duration={8}
                />
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative max-w-lg border border-border bg-black p-0 text-creme shadow-2xl">
                <div className="relative overflow-hidden p-8">
                  <MorphingDialogTitle className="font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
                    {gem.tag}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="mt-3 font-display text-4xl">
                    {gem.title}
                  </MorphingDialogSubtitle>
                  <MorphingDialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 8 },
                    }}
                    className="mt-4 space-y-4 text-sm leading-relaxed text-creme/70"
                  >
                    <p>{gem.blurb}</p>
                    <ul className="flex flex-wrap gap-2">
                      {gem.stack.map((s) => (
                        <li
                          key={s}
                          className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 pt-2">
                      <a
                        href={gem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-scarlet px-4 py-2 text-sm font-medium text-black"
                      >
                        Code
                      </a>
                      {gem.live && (
                        <a
                          href={gem.live}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-border px-4 py-2 text-sm text-creme"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </MorphingDialogDescription>
                  <MorphingDialogClose className="absolute right-4 top-4 text-creme/60 hover:text-creme" />
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>

      <div className="relative overflow-hidden border border-border bg-card/40 py-10">
        <InfiniteSlider gap={28} speed={60} speedOnHover={20} className="px-4">
          {gems.map((gem) => (
            <div
              key={`slide-${gem.id}`}
              className="flex h-28 w-56 shrink-0 flex-col justify-between border border-border bg-black p-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-scarlet">
                {gem.tag}
              </span>
              <span className="font-display text-xl text-creme">{gem.title}</span>
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          direction="left"
          blurIntensity={0.6}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          direction="right"
          blurIntensity={0.6}
        />
      </div>
    </section>
  );
}
