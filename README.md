# Dawit Worku — Portfolio

Motion-first personal site for **Dawit Worku** (`@dawitlabs`), Software Developer at Client Reach AI.

The site is organized into three modes:

- **Gem** — selected product and research work
- **Link** — dock + directory to GitHub, Client Reach AI, and live surfaces
- **Vibe** — process notes, atmosphere, and stack

Palette: Scarlet `#F5332C` · Black `#000000` · Creme `#CCCBB9`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion
- Fonts: Unbounded (display), Sora (body), Space Mono (labels)
- shadcn-style primitives + [Rare UI](https://www.rareui.com/components) components installed via CLI (`@rare-ui/*`)

Rare UI pieces in use: Fluid Orb, Gooey Nav, Scroll Progress, Folder, GitHub Activity, Animated Counter, Gravity Letters, Step Player, FAQ, Code Block, Toast, Emoji Reaction, AI Status.

## Run locally

```bash
npm install
npm run dev -- --port 3847
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Scripts

| Command        | What it does              |
| -------------- | ------------------------- |
| `npm run dev`  | Start the development server |
| `npm run build`| Production build          |
| `npm run start`| Serve the production build |
| `npm run lint` | ESLint                    |
