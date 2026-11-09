"use client";

import {
  FolderGit2,
  Globe,
  Mail,
  Building2,
  BookOpen,
  Boxes,
} from "lucide-react";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { profile } from "@/lib/data";

const items = [
  { title: "GitHub", icon: FolderGit2, href: profile.github },
  { title: "Client Reach", icon: Building2, href: profile.companyUrl },
  { title: "dawit.dev", icon: Globe, href: profile.site },
  { title: "Blog", icon: BookOpen, href: "https://blog.dawit.dev" },
  { title: "Capsule", icon: Boxes, href: "https://capsulectx.vercel.app/" },
  { title: "Email", icon: Mail, href: "mailto:hello@dawit.dev" },
];

export function MpDock() {
  return (
    <div className="flex justify-center py-2">
      <Dock className="rounded-none border border-border bg-black/90 items-end">
        {items.map((item) => (
          <DockItem
            key={item.title}
            className="aspect-square rounded-none bg-card/80"
          >
            <DockLabel className="rounded-none border-border bg-black text-creme">
              {item.title}
            </DockLabel>
            <DockIcon>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={item.title}
                className="flex size-full items-center justify-center text-creme hover:text-scarlet"
              >
                <item.icon className="size-full" />
              </a>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
