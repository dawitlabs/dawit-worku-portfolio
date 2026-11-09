import type { Metadata } from "next";
import { Unbounded, Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dawit Worku — Portfolio",
  description:
    "Software developer at Client Reach AI. Gem, Link, and Vibe — a rare motion-first portfolio.",
  metadataBase: new URL("https://dawit.dev"),
  openGraph: {
    title: "Dawit Worku — Portfolio",
    description:
      "Motion-first portfolio for Dawit Worku. Selected work, links, and atmosphere.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
