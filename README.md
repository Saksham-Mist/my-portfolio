# Saksham Sharma — Portfolio

Personal portfolio site: hero, an auto-cycling project carousel, skills, a short bio, and contact links. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 3.4, with Framer Motion for scroll-triggered animation and Lenis for smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint

## Structure

```
src/
  app/            # App Router entry (layout, page, globals.css)
  components/     # Section components: Hero, Projects, Skills, About, Contact, Navbar,
                  # SmoothScroll (Lenis), FloatingResumeButton, CTAButton, SkillGauge, TechSlider
  components/motion-primitives/  # InfiniteSlider, ProgressiveBlur, GlowEffect, InView
  data/           # Project, skill, and tech-stack content
  hooks/          # useLenis
  lib/            # Small shared utilities
public/
  resume.pdf      # Served at /resume.pdf — filename is lowercase and must stay that way
                  # (Vercel's filesystem is case-sensitive, unlike Windows/macOS)
```

## Content

Project, skill, and tech-stack data live in `src/data/` — update those files rather than editing markup directly when adding or changing a project.

## Deploying

Pushes to `main` auto-deploy via Vercel's GitHub integration. No environment variables are required for the build.
