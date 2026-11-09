import type {
  Contribution,
  ContributionLevel,
  RepoContribution,
} from "@/components/ui/github-activity";

/** Deterministic contribution heatmap so the grid always renders offline. */
export function buildContributions(days = 371): Contribution[] {
  const out: Contribution[] = [];
  const today = new Date("2026-11-09T00:00:00.000Z");

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(today.getUTCDate() - i);
    const seed = (d.getUTCFullYear() * 10000 + (d.getUTCMonth() + 1) * 100 + d.getUTCDate()) % 97;
    const weekend = d.getUTCDay() === 0 || d.getUTCDay() === 6;
    let level = 0 as ContributionLevel;
    let count = 0;
    if (seed % 7 !== 0) {
      level = (weekend ? (seed % 3) + 1 : (seed % 4) + 1) as ContributionLevel;
      count = level * (2 + (seed % 5));
    }
    out.push({
      date: d.toISOString().slice(0, 10),
      count,
      level,
    });
  }
  return out;
}

export const topRepos: RepoContribution[] = [
  {
    name: "capsule",
    count: 42,
    href: "https://github.com/dawitlabs/capsule",
  },
  {
    name: "Aether",
    count: 31,
    href: "https://github.com/dawitlabs/Aether",
  },
  {
    name: "Client-Reach-AI-Website",
    count: 28,
    href: "https://github.com/clientreach-ai/Client-Reach-AI-Website",
  },
];

export const contributions = buildContributions();
