export type Gem = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  stack: string[];
  href: string;
  live?: string;
  accent: "scarlet" | "creme" | "black";
};

export type LinkItem = {
  id: string;
  label: string;
  hint: string;
  href: string;
  external?: boolean;
};

export type VibeNote = {
  id: string;
  title: string;
  body: string;
  rotate: number;
};

export const profile = {
  name: "Dawit Worku",
  handle: "dawitlabs",
  role: "Software Developer",
  company: "Client Reach AI",
  location: "Adama",
  bio: "I ship product interfaces that feel expensive — motion-first, AI-ready, and built to last.",
  github: "https://github.com/dawitlabs",
  companyUrl: "https://clientreach.ai",
  site: "https://dawit.dev",
};

export const gems: Gem[] = [
  {
    id: "clientreach",
    title: "ClientReach AI",
    tag: "Platform",
    blurb:
      "End-to-end client delivery stack — onboarding, status, video review, and the public brand site.",
    stack: ["Next.js", "TypeScript", "Motion"],
    href: "https://github.com/clientreach-ai/Client-Reach-AI-Website",
    live: "https://clientreach.ai",
    accent: "scarlet",
  },
  {
    id: "capsule",
    title: "Capsule",
    tag: "Agents",
    blurb:
      "Markdown context packs that help coding agents skip repeated repo discovery and burn fewer tokens.",
    stack: ["TypeScript", "CLI", "LLM"],
    href: "https://github.com/dawitlabs/capsule",
    live: "https://capsulectx.vercel.app/",
    accent: "creme",
  },
  {
    id: "echoguide",
    title: "EchoGuide",
    tag: "Accessibility",
    blurb:
      "An assistant for visually impaired people that narrates the scene and guides the next action.",
    stack: ["TypeScript", "Vision", "Docs"],
    href: "https://github.com/BytePhilosopher/EchoGuide",
    live: "https://echo-guide-docs.vercel.app",
    accent: "black",
  },
  {
    id: "averava",
    title: "Averava",
    tag: "Marketing",
    blurb:
      "AI consultancy marketing site with cinematic motion, TanStack Router, and a sharp brand system.",
    stack: ["React", "Tailwind", "Framer Motion"],
    href: "https://github.com/Client-Reach-AI/averava",
    live: "https://averava-v3-web-umber.vercel.app",
    accent: "scarlet",
  },
  {
    id: "aether",
    title: "Aether",
    tag: "Research",
    blurb:
      "Evidence-backed collective knowledge engine — GraphRAG, Neo4j, and FastAPI agents.",
    stack: ["Python", "Neo4j", "FastAPI"],
    href: "https://github.com/dawitlabs/Aether",
    accent: "creme",
  },
  {
    id: "roomreach",
    title: "RoomReach",
    tag: "Agency",
    blurb:
      "Digital marketing agency site on Next.js 16 with Motion 13 — fast, loud, conversion-ready.",
    stack: ["Next.js", "React 19", "Motion"],
    href: "https://github.com/Client-Reach-AI/roomreach.ai",
    live: "https://roomreach-ai-web-one.vercel.app",
    accent: "black",
  },
  {
    id: "afuchat",
    title: "afuChat",
    tag: "Product",
    blurb: "Realtime chat product with a clean TypeScript core and a live production surface.",
    stack: ["TypeScript", "Realtime"],
    href: "https://github.com/dawitlabs/afuchatv1",
    live: "https://afuchat.com",
    accent: "scarlet",
  },
  {
    id: "arga",
    title: "Arga",
    tag: "Search",
    blurb: "Search engine for hand-verified Ethiopian web pages — curated index, local signal.",
    stack: ["TypeScript", "Search"],
    href: "https://github.com/dawitlabs/arga",
    accent: "creme",
  },
  {
    id: "stylebook",
    title: "Stylebook",
    tag: "Design",
    blurb:
      "A field guide to 116 UI design styles — flip the style and the whole site wears it.",
    stack: ["CSS", "Systems"],
    href: "https://github.com/dawitlabs/design-styles",
    live: "https://design-styles-chi.vercel.app",
    accent: "black",
  },
];

export const links: LinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    hint: "@dawitlabs · 340 followers",
    href: "https://github.com/dawitlabs",
    external: true,
  },
  {
    id: "clientreach",
    label: "Client Reach AI",
    hint: "Where I build in public for clients",
    href: "https://clientreach.ai",
    external: true,
  },
  {
    id: "site",
    label: "dawit.dev",
    hint: "Personal domain",
    href: "https://dawit.dev",
    external: true,
  },
  {
    id: "blog",
    label: "Blog",
    hint: "Notes from the bench",
    href: "https://blog.dawit.dev",
    external: true,
  },
  {
    id: "platform",
    label: "ClientReach Platform",
    hint: "Live product surface",
    href: "https://client-reach-ai-platform.vercel.app",
    external: true,
  },
  {
    id: "status",
    label: "Status Board",
    hint: "Uptime for ClientReach projects",
    href: "https://clientreach-status.vercel.app",
    external: true,
  },
  {
    id: "capsule",
    label: "Capsule",
    hint: "Agent context packs",
    href: "https://capsulectx.vercel.app/",
    external: true,
  },
  {
    id: "email",
    label: "Say hello",
    hint: "Open a conversation",
    href: "mailto:hello@dawit.dev",
  },
];

export const vibeNotes: VibeNote[] = [
  {
    id: "1",
    title: "Motion is meaning",
    body: "Every transition earns its keep — docks, detents, morphs. If it doesn’t clarify hierarchy, it doesn’t ship.",
    rotate: -2.5,
  },
  {
    id: "2",
    title: "Expensive by default",
    body: "Scarlet cuts. Creme breathes. Black holds the weight. Premium is restraint plus one loud move.",
    rotate: 1.8,
  },
  {
    id: "3",
    title: "AI-ready surfaces",
    body: "Interfaces that agents can read and humans can feel — typed contracts, clean registries, no mystery meat UI.",
    rotate: -1.2,
  },
  {
    id: "4",
    title: "From Adama outward",
    body: "Shipping for Client Reach AI and side labs — search, accessibility, knowledge graphs, and marketing that converts.",
    rotate: 2.4,
  },
];

export const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Motion",
  "Tailwind",
  "Node",
  "Python",
  "FastAPI",
  "Postgres",
  "Neo4j",
  "Rust",
  "Go",
];
