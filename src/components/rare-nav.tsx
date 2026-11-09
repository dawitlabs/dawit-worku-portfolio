"use client";

import { useEffect, useState } from "react";
import { BounceSidebar } from "@/components/ui/bounce-sidebar";
import { RailToc } from "@/components/ui/rail-toc";
import ProximitySidebar from "@/components/ui/proximity-sidebar";

const BOUNCE_ITEMS = [
  { label: "Navigate", heading: true as const },
  { label: "Intro", href: "#top" },
  { label: "Stats", href: "#stats" },
  { label: "Modes", href: "#modes" },
  { label: "Effects", href: "#primitives" },
  { label: "Rare kit", href: "#rare-kit" },
  { label: "Path", href: "#timeline" },
  { label: "Studio", href: "#studio" },
  { label: "GitHub", href: "#activity" },
  { label: "FAQ", href: "#faq" },
];

const RAIL_ITEMS = [
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

const PROXIMITY = [
  { id: "top", label: "Intro", kind: "title" as const },
  { id: "stats", label: "Stats", kind: "section" as const },
  { id: "modes", label: "Modes", kind: "section" as const },
  { id: "primitives", label: "Effects", kind: "section" as const },
  { id: "rare-kit", label: "Rare", kind: "subtitle" as const },
  { id: "timeline", label: "Path", kind: "section" as const },
  { id: "studio", label: "Studio", kind: "section" as const },
  { id: "activity", label: "GitHub", kind: "section" as const },
  { id: "faq", label: "FAQ", kind: "section" as const },
];

export function RareNav() {
  const [bounce, setBounce] = useState(1);

  useEffect(() => {
    const ids = RAIL_ITEMS.map((i) => i.id);
    const onScroll = () => {
      const anchor = 120;
      let active = 0;
      ids.forEach((id, index) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= anchor) active = index + 1;
      });
      setBounce(Math.min(active, BOUNCE_ITEMS.length - 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside className="pointer-events-none fixed left-4 top-1/2 z-30 hidden w-36 -translate-y-1/2 xl:block">
        <div className="pointer-events-auto rounded-none border border-border bg-black/70 p-3 backdrop-blur-md">
          <BounceSidebar
            items={BOUNCE_ITEMS}
            value={bounce}
            onChange={setBounce}
            dotColor="#F5332C"
            className="text-creme"
          />
        </div>
      </aside>

      <div className="pointer-events-none fixed bottom-6 left-4 z-30 hidden lg:block xl:hidden">
        <div className="pointer-events-auto max-h-[50vh] overflow-auto rounded-none border border-border bg-black/80 p-3 backdrop-blur-md">
          <RailToc
            items={RAIL_ITEMS}
            title="On page"
            offset={120}
            className="text-creme"
          />
        </div>
      </div>

      <ProximitySidebar sections={PROXIMITY} side="left" className="lg:hidden" />
    </>
  );
}
