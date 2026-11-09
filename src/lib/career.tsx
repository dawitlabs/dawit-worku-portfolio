import type { TimelineEvent } from "@/components/motion/timeline";

export const careerEvents: TimelineEvent[] = [
  {
    id: "astu",
    date: "2023-09-01",
    title: "dawitlabs",
    meta: "GitHub · first public shipping season",
    media: (
      <div className="flex h-full flex-col justify-between bg-scarlet p-4 text-black">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          2023
        </span>
        <span className="font-display text-xl leading-tight">Open source ignition</span>
      </div>
    ),
  },
  {
    id: "afuchat",
    date: "2024-06-01",
    title: "afuChat",
    meta: "Realtime product · afuchat.com",
    media: (
      <div className="flex h-full flex-col justify-between bg-creme p-4 text-black">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Product
        </span>
        <span className="font-display text-xl leading-tight">Chat that ships live</span>
      </div>
    ),
  },
  {
    id: "clientreach",
    date: "2025-01-15",
    title: "Client Reach AI",
    meta: "Platform · clientreach.ai",
    media: (
      <div className="flex h-full flex-col justify-between bg-black p-4 text-creme">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
          Studio
        </span>
        <span className="font-display text-xl leading-tight">
          Agency systems at scale
        </span>
      </div>
    ),
  },
  {
    id: "capsule",
    date: "2026-06-01",
    title: "Capsule",
    meta: "Agents · context packs",
    media: (
      <div className="flex h-full flex-col justify-between bg-scarlet p-4 text-black">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Agents
        </span>
        <span className="font-display text-xl leading-tight">Less discovery, more build</span>
      </div>
    ),
  },
  {
    id: "now",
    date: "2026-11-01",
    title: "Now",
    meta: "Gem · Link · Vibe",
    media: (
      <div className="flex h-full flex-col justify-between bg-creme p-4 text-black">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          2026
        </span>
        <span className="font-display text-xl leading-tight">
          Motion-first interfaces
        </span>
      </div>
    ),
  },
];
