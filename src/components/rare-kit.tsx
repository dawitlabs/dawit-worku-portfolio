"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { TaskList, type Task } from "@/components/ui/task-list";
import { VoiceNote } from "@/components/ui/voice-note";
import { GridReveal } from "@/components/ui/grid-reveal";
import { WebSearch, WebSearchAnswer } from "@/components/ui/web-search";
import { ThemeSelector, type ThemeOption } from "@/components/ui/theme-selector";
import { DurationPicker } from "@/components/ui/duration-picker";
import { HookSidebar } from "@/components/ui/hook-sidebar";

const MatrixOrb = dynamic(() => import("@/components/ui/matrix-orb"), {
  ssr: false,
});

const PALETTES: ThemeOption[] = [
  {
    value: "scarlet",
    label: "Scarlet",
    colors: {
      sidebar: "#1a0908",
      panel: "#000000",
      border: "rgba(245,51,44,0.25)",
      strong: "#F5332C",
      muted: "#3a1412",
      tile: "#2a0e0c",
    },
  },
  {
    value: "noir",
    label: "Noir",
    colors: {
      sidebar: "#0c0c0c",
      panel: "#000000",
      border: "rgba(204,203,185,0.18)",
      strong: "#CCCBB9",
      muted: "#1a1a1a",
      tile: "#141414",
    },
  },
  {
    value: "creme",
    label: "Creme",
    colors: {
      sidebar: "#CCCBB9",
      panel: "#e8e7d8",
      border: "rgba(0,0,0,0.08)",
      strong: "#F5332C",
      muted: "#b8b7a6",
      tile: "#d4d3c2",
    },
  },
];

const SHIP_TASKS: Task[] = [
  { id: "1", label: "Lock Gem / Link / Vibe structure", done: true },
  { id: "2", label: "Wire Rare UI motion kit", done: true },
  { id: "3", label: "Ship Client Reach delivery slice", done: false },
  { id: "4", label: "Polish mobile detents", done: false },
];

const SOURCES = [
  {
    id: "gh",
    title: "dawitlabs on GitHub",
    url: "https://github.com/dawitlabs",
    snippet: "Software Developer · Adama · Client Reach AI",
    favicon: "https://github.com/favicon.ico",
  },
  {
    id: "cr",
    title: "Client Reach AI",
    url: "https://clientreach.ai",
    snippet: "Where Dawit ships client platforms and brand surfaces.",
  },
  {
    id: "cap",
    title: "Capsule — agent context packs",
    url: "https://capsulectx.vercel.app/",
    snippet: "Markdown packs that cut repeated repo discovery for coding agents.",
  },
];

const HOOK_ITEMS = [
  { label: "Brief", href: "#rare-kit" },
  { label: "Search", href: "#rare-search" },
  { label: "Tasks", href: "#rare-tasks" },
  { label: "Voice", href: "#rare-voice" },
];

export function RareKit() {
  const [orbState, setOrbState] = useState<"idle" | "listening" | "thinking">(
    "idle",
  );
  const [hook, setHook] = useState(0);
  const [theme, setTheme] = useState("scarlet");
  const [searchStatus, setSearchStatus] = useState<"searching" | "done">(
    "searching",
  );
  const [revealSrc, setRevealSrc] = useState<string | null>(null);

  useEffect(() => {
    const cycle: Array<"idle" | "listening" | "thinking"> = [
      "idle",
      "listening",
      "thinking",
    ];
    const id = setInterval(() => {
      setOrbState((prev) => cycle[(cycle.indexOf(prev) + 1) % cycle.length]);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSearchStatus("done"), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(
      () => setRevealSrc("https://avatars.githubusercontent.com/u/144016968?v=4"),
      900,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="rare-kit" className="mx-auto w-full max-w-6xl space-y-10 px-5 sm:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
            Rare UI · deeper kit
          </p>
          <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
            Hard-to-find pieces, in use
          </h2>
          <p className="mt-3 max-w-lg text-sm text-creme/65">
            Matrix orb, hook rail, theme chips, duration goo, task strikeouts,
            voice note, grid reveal, and AI web search — installed from the
            registry, restyled in Scarlet.
          </p>
        </div>
        <ThemeSelector
          themes={PALETTES}
          value={theme}
          onChange={setTheme}
          labels
          className="max-w-md"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
        <HookSidebar
          items={HOOK_ITEMS}
          value={hook}
          onChange={setHook}
          color="#F5332C"
          dashed
          label="Rare rails"
          className="hidden lg:block"
        />

        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 border border-border bg-card/40 p-8">
              <MatrixOrb
                state={orbState}
                color="#F5332C"
                size={160}
                level={orbState === "listening" ? 0.7 : 0.25}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-creme/50">
                Matrix orb · {orbState}
              </p>
            </div>

            <div className="border border-border bg-card/40 p-4">
              <GridReveal
                src={revealSrc}
                alt="Dawit Worku"
                caption="Portrait grid reveal"
                aspect={1}
                estimatedDuration={2.4}
                className="w-full overflow-hidden"
              />
            </div>
          </div>

          <div id="rare-search" className="border border-border bg-card/40 p-5 sm:p-7">
            <WebSearch
              query="Dawit Worku portfolio builder"
              status={searchStatus}
              sources={SOURCES}
              defaultOpen
              linked
              className="w-full"
            />
            {searchStatus === "done" && (
              <WebSearchAnswer className="mt-4 text-sm leading-relaxed text-creme/75">
                Dawit Worku ships motion-first product UI for Client Reach AI —
                platforms, agent tooling, and brand systems with a Scarlet cut.
              </WebSearchAnswer>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div id="rare-tasks" className="border border-border bg-card/40 p-5">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
                Task list
              </p>
              <TaskList
                defaultTasks={SHIP_TASKS}
                accent="#F5332C"
                size="md"
              />
            </div>

            <div className="space-y-6 border border-border bg-card/40 p-5">
              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
                  Duration · engage
                </p>
                <DurationPicker
                  defaultValue={{ hours: 1, minutes: 30 }}
                  onConfirm={() => {}}
                />
              </div>
              <div id="rare-voice">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
                  Voice note
                </p>
                <VoiceNote
                  duration={18}
                  accent="#F5332C"
                  seed={42}
                  bars={36}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
