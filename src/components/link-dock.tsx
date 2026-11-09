"use client";

import type { ComponentType } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  FolderGit2,
  Globe,
  Mail,
  Radio,
  BookOpen,
  Boxes,
  Building2,
} from "lucide-react";
import { MpDock } from "@/components/mp-dock";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  github: FolderGit2,
  clientreach: Building2,
  site: Globe,
  blog: BookOpen,
  platform: Boxes,
  status: Radio,
  capsule: Boxes,
  email: Mail,
};

export function LinkDock() {
  return (
    <section aria-labelledby="link-heading" className="space-y-10">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Link · reach
        </p>
        <h2
          id="link-heading"
          className="mt-2 font-display text-3xl text-creme sm:text-5xl"
        >
          One hop away
        </h2>
        <p className="mt-3 max-w-md text-sm text-creme/65">
          Motion Primitives magnifying dock into GitHub, Client Reach AI, and a
          hello.
        </p>
      </div>

      <div className="border border-border bg-card/40 px-4 py-8">
        <MpDock />
      </div>

      <ul className="divide-y divide-border border border-border">
        {links.map((item, i) => {
          const Icon = icons[item.id] ?? Globe;
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={cn(
                  "group flex items-center justify-between gap-4 px-4 py-5 transition-colors sm:px-6",
                  "hover:bg-scarlet hover:text-black",
                )}
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center border border-current/20 bg-black/20 text-creme group-hover:border-black/20 group-hover:text-black">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-display text-xl tracking-tight text-creme group-hover:text-black">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-creme/50 group-hover:text-black/60">
                      {item.hint}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-creme/40 transition group-hover:rotate-45 group-hover:text-black" />
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
