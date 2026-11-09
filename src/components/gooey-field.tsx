"use client";

import { motion } from "motion/react";

/** Liquid / gooey morphing field — ambient backdrop. */
export function GooeyField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 opacity-70" style={{ filter: "url(#goo)" }}>
        <motion.div
          className="absolute -left-[10%] top-[8%] h-[42vmin] w-[42vmin] rounded-full bg-scarlet/80"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 60, 30, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-5%] top-[18%] h-[36vmin] w-[36vmin] rounded-full bg-creme/55"
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.88, 1.12, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-8%] left-[28%] h-[48vmin] w-[48vmin] rounded-full bg-scarlet/40"
          animate={{
            x: [0, 50, -60, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_72%)]" />
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
