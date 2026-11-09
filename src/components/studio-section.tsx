"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { StepPlayer } from "@/components/ui/step-player";
import { CodeBlock } from "@/components/ui/code-block";
import { AiStatus } from "@/components/ui/ai-status";
import { Folder } from "@/components/ui/folder-component";

const STEPS = [
  { label: "Brief", duration: 2.2 },
  { label: "Shape", duration: 2.6 },
  { label: "Motion", duration: 2.4 },
  { label: "Ship", duration: 2.2 },
];

const SNIPPET = `const dawit = {
  role: "Software Developer",
  studio: "Client Reach AI",
  modes: ["Gem", "Link", "Vibe"],
  stack: ["Next.js", "Motion", "TypeScript"],
  shipping: true,
};`;

export function StudioSection() {
  const [step, setStep] = useState(0);
  const [aiState, setAiState] = useState<
    "thinking" | "researching" | "writing" | "done"
  >("thinking");

  useEffect(() => {
    const cycle: Array<"thinking" | "researching" | "writing" | "done"> = [
      "thinking",
      "researching",
      "writing",
      "done",
    ];
    const id = setInterval(() => {
      setAiState((prev) => {
        const next = cycle[(cycle.indexOf(prev) + 1) % cycle.length];
        return next;
      });
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="studio" className="mx-auto w-full max-w-6xl space-y-8 px-5 sm:px-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Studio · process
        </p>
        <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
          How a build moves
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          Step through the delivery loop, peek at the typed contract, and watch
          the AI-ready surface think out loud.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 border border-creme/15 bg-black/40 p-5 sm:p-7">
          <StepPlayer
            steps={STEPS}
            value={step}
            onValueChange={setStep}
            defaultPlaying
            loop
            size={28}
            className="w-full"
          />
          <p className="font-display text-2xl text-creme">
            {STEPS[step]?.label ?? "Brief"}
          </p>
          <p className="text-sm text-creme/65">
            {step === 0 && "Lock the outcome, constraints, and the first vertical slice."}
            {step === 1 && "Structure the system — routes, data, and the one loud visual."}
            {step === 2 && "Wire motion that clarifies hierarchy: docks, detents, morphs."}
            {step === 3 && "Ship the slice, measure, then loop with sharper taste."}
          </p>
          <AiStatus state={aiState} className="mt-2" />
        </div>

        <div className="flex flex-col gap-6">
          <CodeBlock
            code={SNIPPET}
            language="ts"
            filename="dawit.ts"
            accent="#F5332C"
            mode="dark"
            className="w-full"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center border border-creme/15 bg-creme/[0.04] py-8"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-creme/50">
              Featured folder · hover / tap
            </p>
            <Folder color="black" size="md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
