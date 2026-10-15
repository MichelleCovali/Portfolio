# Mihaela Covali — Portfolio

A responsive, accessible portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Lucide, and Motion for React. Includes persistent light/dark mode, a mobile menu, copy-email feedback, social preview image, and a downloadable CV.

## Local setup

Use Node.js 20.9 or newer (Node 22 LTS recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production checks:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Imported project source

Circle Solutions, Covali Smart Bag, BattleBot, and AR Web App are presented as university projects. Descriptions are concise paraphrases of the documented goals, roles, and tools; dates, outcomes, project repositories, and live deployments.

Local assets are in `public/images/projects/`. `projectSource` in `src/data/projects.ts` controls the source portfolio link. Project cards support an optional second image, roles, category, and optional external links. The empty state still works if all projects are removed.

## Carousel and motion

Projects use a native scroll-snap carousel with two cards on larger screens and one on mobile. It supports touch/trackpad scrolling, previous/next buttons, pagination, and arrow/Home/End keys when the track is focused. It does not auto-advance. Cards, content and links remain server-rendered.

Section links use an interruptible eased scroll, move focus to the destination, and retain URL hashes. The header indicates the current section and shows a thin reading-progress line. Section headings and content fade in and out at the viewport boundary; skills enter with a short stagger. Reduced-motion users receive immediate navigation and visible content without entrance motion. Timing lives in `src/components/navigation-effects.tsx`, `src/components/interactions.tsx`, and `src/app/globals.css`.

## Project videos

Click any project card or its Watch demo button to open the original demonstration in a native modal dialog. The viewer provides playback controls, fullscreen through the browser's player, Escape/close/backdrop dismissal, focus containment and restoration, scroll locking, and an inline playback-error fallback. Videos load metadata only when the viewer opens and do not autoplay. Closing unmounts the player and stops playback.
