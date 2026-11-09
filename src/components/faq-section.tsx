"use client";

import { Faq } from "@/components/ui/faq";
import { faqItems } from "@/lib/faq";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-6xl space-y-8 px-5 sm:px-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-scarlet">
          Thread · FAQ
        </p>
        <h2 className="mt-2 font-display text-3xl text-creme sm:text-5xl">
          Ask, get a reply
        </h2>
        <p className="mt-3 max-w-lg text-sm text-creme/65">
          Availability, stack, location, and how to start — answered as a message
          thread.
        </p>
      </div>

      <Faq items={faqItems} accent="#F5332C" defaultValue="avail" />
    </section>
  );
}
