# Mihaela Covali — Portfolio

A responsive, accessible portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Lucide, and Motion for React. Includes persistent light/dark mode, a mobile menu, copy-email feedback, social preview image, and your supplied downloadable CV.

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

## Update your content

- `src/data/portfolio.ts`: name, introduction, contact details, availability, experience, skills, education, languages, navigation.
- `src/data/projects.ts`: typed project array populated with four real university projects from the earlier Canva portfolio. Edit descriptions, roles, categories, technologies, and images here. Omit any optional links you do not have. Use real HTTPS URLs. No project details or screenshots are fabricated.
- `public/images/mihaela.jpg`: your supplied portrait, resized for faster delivery. Replace it at the same path; adjust its alt text in `src/app/page.tsx` if needed.
- Project screenshots: place under `public/images/projects/` and reference `/images/projects/filename.webp` in project data. External screenshot hosts require an appropriate Next.js image remotePatterns configuration.
- `public/cv.pdf`: your supplied `CVmihaela.pdf`, copied unchanged. All Download CV actions use this file. Replace it at the same path to update the download. `scripts/generate-cv.py` is the earlier starter generator; running it would overwrite your supplied CV, so do not use it unless you intend to replace that PDF.
- `src/app/globals.css`: visual tokens, typography, responsive layout.
- `src/app/layout.tsx`: SEO description, title, social metadata.
- `src/app/opengraph-image.tsx`: generated 1200×630 social preview.
- `src/app/icon.svg`: custom monogram favicon.

Reusable components live under `src/components`. Content is server-rendered; browser code is limited to the menu, theme, animation, and clipboard. Animations and smooth scrolling respect reduced-motion preferences. Fonts use local system stacks, avoiding third-party font downloads.

## Deploy on Vercel

1. Push this project to your Git repository.
2. Import it in Vercel. If using the parent workspace repository, set **Root Directory** to `mihaela-portfolio`.
3. Keep the detected **Next.js** framework and default build settings (`npm run build`).
4. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain, without a trailing slash. Without an explicit value, Vercel's production domain environment variable is used, with localhost as the local fallback.
5. Deploy. If the domain changes, update the environment variable and redeploy so Open Graph URLs resolve correctly.

No database, API keys, or form service is required. Clipboard access works on HTTPS and localhost; if unavailable, feedback directs visitors to select the visible email address. Email links use visitors' configured mail application.

## Before sharing

Supply project-specific repository/demo/case-study URLs when ready; none were linked in the source portfolio. The four university projects and their images have been imported. Review internship timing and personal information when updating your portfolio. Set your final site domain for SEO. No other assets are required. This project is prepared for Vercel; no public deployment has been created automatically.

## Verification

Lint, TypeScript checking, and the webpack production build pass. Browser checks covered desktop, a 390px mobile viewport without horizontal overflow, theme switching, mobile navigation, and successful copy-email feedback. CV and Open Graph endpoints return HTTP 200. The CV was rendered and visually reviewed.

`npm audit --omit=dev` reports zero production vulnerabilities. The full audit reports five related high-severity entries in the development-only Next.js ESLint dependency chain (`braces` through `micromatch` and `fast-glob`). The registry currently suggests a major downgrade of the Next.js ESLint configuration rather than a compatible fix; that downgrade was not applied. Recheck when updating dependencies.

The build script selects Next.js webpack explicitly because the local sandbox stalled with Turbopack. This is also supported on Vercel.

## Imported project source

The project content and images come from https://mihaelacovali.my.canva.site/ (reviewed 15 October 2026). Circle Solutions, Covali Smart Bag, BattleBot and AR Web App are presented as university projects. Descriptions are concise paraphrases of the documented goals, roles and tools; dates, outcomes, project repositories, and live deployments were not invented. The original portfolio provides no separate AR project goal, so that description stays limited to the documented technologies and responsibilities. Original demo stills are used as media, not represented as live application screenshots. Smart Bag also includes the original prototype photo and mobile app demo still.

Local assets are in `public/images/projects/`. `projectSource` in `src/data/projects.ts` controls the source portfolio link. Project cards support an optional second image, roles, category and optional external links. The empty state still works if all projects are removed.

## Carousel and motion

Projects use a native scroll-snap carousel with two cards on larger screens and one on mobile. It supports touch/trackpad scrolling, previous/next buttons, pagination, and arrow/Home/End keys when the track is focused. It does not auto-advance. Cards, content and links remain server-rendered.

Section links use an interruptible eased scroll, move focus to the destination, and retain URL hashes. The header indicates the current section and shows a thin reading-progress line. Section headings and content fade in and out at the viewport boundary; skills enter with a short stagger. Reduced-motion users receive immediate navigation and visible content without entrance motion. Timing lives in `src/components/navigation-effects.tsx`, `src/components/interactions.tsx`, and `src/app/globals.css`.

## Project videos

Click any project card or its Watch demo button to open the original demonstration in a native modal dialog. The viewer provides playback controls, fullscreen through the browser's player, Escape/close/backdrop dismissal, focus containment and restoration, scroll locking, and an inline playback-error fallback. Videos load metadata only when the viewer opens and do not autoplay. Closing unmounts the player and stops playback.

`src/data/projects.ts` contains each project's optional `videos` array (`src`, `title`, optional `poster`). Files live under `public/videos/`; all five MP4 files were imported from the original Canva portfolio. Smart Bag has two selectable clips (the app and physical demonstration). Videos are served locally with the deployed website, rather than depending on Canva asset URLs.
