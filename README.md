# Saksham Sharma — Portfolio

My personal portfolio: a backend-focused developer site built around three real, deployed projects rather than tutorial clones — a URL shortener with click analytics, a full-stack mini ATS, and a token-bucket rate limiter built from first principles.

## What's on the site

- **Hero** — intro and quick links (resume, GitHub, LinkedIn).
- **Featured Projects** — an auto-cycling carousel through three shipped projects, each with a real GitHub repo, the tech stack used, and what I actually built/debugged on it:
  - [URL Shortener API with Click Analytics](https://github.com/Saksham-Mist/url-shortner) — FastAPI, PostgreSQL, SQLAlchemy, pytest, Alembic
  - [Mini ATS – Candidate Pipeline Tool](https://github.com/Saksham-Mist/mini-ats) — React, TypeScript, ASP.NET Core, EF Core, Docker
  - [Token Bucket Rate Limiter](https://github.com/Saksham-Mist/token-bucket-rate-limiter) — Python, Flask, thread-safe concurrency control
- **Technical Skills** — a scrolling stack of everything above, plus Next.js, Docker, Railway, and Git/GitHub.
- **About** — the short version of how I work and what I'm learning.
- **Contact** — email, GitHub, LinkedIn.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3.4, Framer Motion for scroll-triggered animation, and Lenis for smooth scrolling.

## Running locally

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
  data/           # Project, skill, and tech-stack content — edit these to add/change a project
  hooks/          # useLenis
  lib/            # Small shared utilities
public/
  resume.pdf      # Served at /resume.pdf — filename must stay lowercase
                  # (Vercel's filesystem is case-sensitive, unlike Windows/macOS)
```

## Deploying

Pushes to `main` auto-deploy via Vercel's GitHub integration. No environment variables are required for the build.
