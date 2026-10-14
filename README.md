# Saksham Sharma — AI & Backend Portfolio

**Live:** [sakshammist.vercel.app](https://sakshammist.vercel.app/)

A portfolio site showcasing real, shipped projects — not tutorials. Built to show backend and AI engineering, production thinking, and a bias toward learning by building.

## Projects Featured

Five projects, each with a public repo:

- **[Agentic Coding Agent](https://github.com/Saksham-Mist/agentic-coding-agent)** ([live demo](https://agentic-coding-agent.duckdns.org)) — Python, LangGraph, FastAPI, PostgreSQL, Docker, GCP. Plans, writes and verifies Python in a network-less, resource-capped Docker sandbox, self-correcting from failing tests under hard retry and token limits. 54/54 runs passed on 18 problems graded against tests 88% hidden from the model.

- **[URL Shortener API with Click Analytics](https://github.com/Saksham-Mist/url-shortner)** — FastAPI, PostgreSQL, async SQLAlchemy, pytest, Alembic. Production-grade REST API with collision-free short-code generation, real-time click analytics, and a 13-test suite.

- **[RAG + LangChain Pipeline (Async, Queue-Based)](https://github.com/Saksham-Mist/rag-async-pipeline)** — LangChain, Qdrant, FastAPI, RQ, Redis/Valkey, Docker. Gemini-grounded retrieval, redesigned from a sync pipeline into an async job queue with horizontally scalable workers.

- **[CI/CD Pipeline with Automated Rollback](https://github.com/Saksham-Mist/usage-metering-api)** — GitHub Actions, Docker, Kubernetes, Trivy. Gated lint → test → build → CVE scan → deploy pipeline with zero-downtime rolling updates and automatic rollback, verified in a live failure drill.

- **[Mini ATS – Candidate Pipeline Tool](https://github.com/Saksham-Mist/Mini-ATS)** — React, TypeScript, ASP.NET Core, EF Core, Docker. Full-stack applicant tracking system with resume upload and a 5-stage recruiter pipeline.

## Site Sections

- **Hero** — intro, availability badge, and a scrolling strip of the top 2 technologies from each project
- **Projects** — carousel through all five, with tech stacks, GitHub links, and live demo links where available
- **Skills** — the toolkit, grouped by area (Languages, Backend, AI & Agents, Databases, DevOps & Cloud, Core CS, Testing, Frontend) and honestly rated: Comfortable, Developing, Just started
- **About** — how I work and what I'm learning
- **Contact** — email, GitHub, LinkedIn, LeetCode
- **Floating Resume Button** — download or open the PDF anytime

## Stack

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 3.4  
**Animation:** Custom motion primitives (InfiniteSlider, ProgressiveBlur, GlowEffect, InView), Lenis for smooth scroll  
**Deployment:** Vercel + GitHub integration (auto-deploy on push to `main`)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
src/
  app/                  # Next.js App Router (layout, page, globals, icon)
  components/
    Hero, Projects, Skills, About, Contact, Navbar
    FloatingResumeButton, CTAButton, SkillGauge, TechSlider, SmoothScroll
    motion-primitives/  # Custom animation components
  data/                 # projects.ts, skills.ts, tech.ts — edit here to update content
  hooks/useLenis.ts     # Smooth scroll hook
  lib/                  # Shared utilities
public/
  resume.pdf            # Resume served by the floating button
```

## Updating Content

- **Projects:** `src/data/projects.ts` — each project has a title, tech stack, exactly 3 bullets, a GitHub URL, and an optional `liveUrl`
- **Skills:** `src/data/skills.ts` — `proficiency` is a percentage; 60+ shows as Comfortable, 40–59 as Developing, below 40 as Just started
- **Hero tech strip:** `src/data/tech.ts`
- **Resume:** replace `public/resume.pdf` (keep the filename lowercase — Vercel's filesystem is case-sensitive)
- **Colors:** `tailwind.config.ts` or `src/app/globals.css`

## Deployment

Push to `main` on GitHub → auto-deploys to Vercel. No environment variables required.

To connect a custom domain:
1. Add the domain in the Vercel dashboard (Settings → Domains)
2. Point your registrar's DNS to Vercel
3. Update `metadataBase` in `src/app/layout.tsx` to the new domain

## Notes

- Every project is real and has a working GitHub repo — no toy examples
- The site prioritizes showing over telling; projects speak for themselves
- Smooth scroll (Lenis) + custom animations make the experience feel premium without being over-the-top
