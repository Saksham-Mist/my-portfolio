# Saksham Sharma — Portfolio

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 3.4, per `PORTFOLIO_SPEC.md`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before deploying

- **Replace `public/resume.pdf`** — it currently contains a placeholder PDF. Swap in your real resume, keeping the filename `resume.pdf` (referenced from the Navbar, Hero CTA, and the floating resume button).
- **Update `metadataBase`** in `src/app/layout.tsx` once you have your real domain (from the GitHub Student Pack / Namecheap).
- Double-check the social links and email in `src/components/Contact.tsx` and `src/components/Navbar.tsx`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint

## Structure

```
src/
  app/            # App Router entry (layout, page, globals.css)
  components/     # Section components (Hero, Projects, Skills, About, Contact, Navbar, ...)
  components/motion-primitives/  # Lightweight InfiniteSlider, ProgressiveBlur, GlowEffect, InView
  data/           # Project, skill, and tech-stack content
  lib/            # Small shared utilities
public/
  resume.pdf      # Placeholder — replace before going live
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) (sign in with GitHub).
3. Deploy — no environment variables are required.
4. Add your custom domain under Project Settings → Domains once DNS is ready.
