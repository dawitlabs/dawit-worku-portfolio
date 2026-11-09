"use client";

import { GitHubActivity } from "@/components/ui/github-activity";
import { contributions, topRepos } from "@/lib/github-mock";

export function ActivitySection() {
  return (
    <section id="activity" className="mx-auto w-full max-w-6xl space-y-8 px-5 sm:px-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Signal · GitHub
        </p>
        <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
          Commit heat
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          A year of shipping for Client Reach AI and side labs — expand the card
          for top repos.
        </p>
      </div>

      <div className="overflow-x-auto pb-2">
        <GitHubActivity
          contributions={contributions}
          repos={topRepos}
          accent="#F5332C"
          months={12}
          showMonths
          year={2026}
          label="Top contributions · @dawitlabs"
          className="border border-creme/10 bg-black text-creme"
        />
      </div>
    </section>
  );
}
