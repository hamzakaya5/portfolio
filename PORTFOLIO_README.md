# Hamza Kaya — Portfolio

This is the source code for Hamza Kaya's portfolio website — a dark,
midnight-indigo, split-screen single page built with TanStack Start +
React 19 + Tailwind CSS v4.

## Tech stack

- TanStack Start v1 (React 19, Vite 8)
- Tailwind CSS v4
- lucide-react icons
- Fonts: Space Grotesk (display) + DM Sans (body), loaded via Google Fonts

## Run locally

```bash
# install dependencies (bun, npm, or pnpm all work)
bun install      # or: npm install

# start the dev server
bun run dev      # or: npm run dev
```

Then open http://localhost:8080 (or the URL printed in your terminal).

## Build for production

```bash
bun run build && bun run preview
```

## Where things live

- `src/routes/index.tsx` — the entire portfolio page (content + layout)
- `src/routes/__root.tsx` — document head, fonts, global meta
- `src/styles.css` — the Midnight Indigo theme tokens and utilities

To update your content (experience, projects, certificates, skills,
contact info), edit the arrays near the top of `src/routes/index.tsx`.
