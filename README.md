# Saksham Sharma — Backend Portfolio

A portfolio site showcasing real, shipped projects — not tutorials. Built to demonstrate backend engineering, full-stack thinking, and a bias toward learning by building.

## Projects Featured

Three projects you can actually use:

- **[URL Shortener API with Click Analytics](https://github.com/Saksham-Mist/url-shortner)** — FastAPI, PostgreSQL, SQLAlchemy, pytest, Alembic. Production-grade REST API with collision-free code generation via bijection and indexed O(1) lookups.

- **[Mini ATS – Candidate Pipeline Tool](https://github.com/Saksham-Mist/mini-ats)** — React, TypeScript, ASP.NET Core, EF Core, Docker. Full-stack recruitment tool with PDF/DOCX parsing and a 5-stage pipeline.

- **[Token Bucket Rate Limiter](https://github.com/Saksham-Mist/token-bucket-rate-limiter)** — Python, Flask, thread-safe concurrency. Rate limiting built from first principles with proper synchronization and zero double-spending.

## Site Sections

- **Hero** — intro with quick links (resume, GitHub, LinkedIn)
- **Projects** — interactive carousel through all three with real repos and tech stacks
- **Skills** — scrollable gauge-based breakdown of proficiency levels
- **About** — how I work and what I'm learning
- **Contact** — email, GitHub, LinkedIn, LeetCode
- **Floating Resume Button** — download or open PDF anytime

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

src/
app/ # Next.js App Router
components/
Hero, Projects, Skills, About, Contact, Navbar
FloatingResumeButton, CTAButton, SkillGauge, TechSlider
motion-primitives/ # Custom animation components
data/ # Projects, skills, tech stack (edit here to update content)
hooks/useLenis.ts # Smooth scroll hook
lib/ # Shared utilities
public/
resume.pdf # Replace with your actual resume

## Before Deploying

1. **Replace `public/resume.pdf`** with your actual resume (keep filename lowercase — Vercel's filesystem is case-sensitive)
2. **Update metadata** in `src/app/layout.tsx` once you have a domain:
```tsx
   metadataBase: new URL('https://yourdomain.com'),
```
3. **Update contact info** in `src/data/` if needed

## Deployment

Push to `main` on GitHub → auto-deploys to Vercel. No environment variables required.

To connect a custom domain:
1. Add domain in Vercel dashboard (Settings → Domains)
2. Point Namecheap DNS to Vercel nameservers
3. Wait 24-48 hours for propagation

## Customization

- **Edit projects:** `src/data/projects.ts`
- **Edit skills:** `src/data/skills.ts`
- **Edit tech stack:** `src/data/techStack.ts`
- **Change colors:** `tailwind.config.ts` or `src/app/globals.css`

## Notes

- All three projects are real, deployed, and have working GitHub repos — no toy examples
- The site prioritizes showing over telling; projects speak for themselves
- Smooth scroll (Lenis) + custom animations make the experience feel premium without being over-the-top
