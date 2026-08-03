export type TechCategory =
  | "backend"
  | "database"
  | "testing"
  | "devops"
  | "frontend";

export interface Project {
  id: string;
  title: string;
  techStack: { name: string; category: TechCategory }[];
  bullets: [string, string, string];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "url-shortener",
    title: "URL Shortener API with Click Analytics",
    techStack: [
      { name: "FastAPI", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "SQLAlchemy", category: "backend" },
      { name: "pytest", category: "testing" },
      { name: "Alembic", category: "devops" },
      { name: "async/await", category: "backend" },
    ],
    bullets: [
      "Base62 short-code generation with real-time click analytics, deployed on Railway + PostgreSQL.",
      "13/13 tests passing (pytest + async); debugged an async connection-pool issue in production.",
      "Normalized schema with indexed lookups, FK cascades, and Alembic migrations.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/url-shortner",
  },
  {
    id: "mini-ats",
    title: "Mini ATS - Candidate Pipeline Tool",
    techStack: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "ASP.NET Core", category: "backend" },
      { name: "Entity Framework Core", category: "backend" },
      { name: "SQLite", category: "database" },
      { name: "Docker", category: "devops" },
      { name: "Railway", category: "devops" },
    ],
    bullets: [
      "Full-stack ATS: job postings, resume uploads, and a 5-stage recruiter pipeline.",
      "5-endpoint ASP.NET Core API with EF Core, cascading status updates, and file handling.",
      "Responsive React + TypeScript UI, deployed on Vercel with a Dockerized Railway backend.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/mini-ats",
  },
  {
    id: "rate-limiter",
    title: "Token Bucket Rate Limiter Service",
    techStack: [
      { name: "Python", category: "backend" },
      { name: "Flask", category: "backend" },
      { name: "Threading", category: "backend" },
      { name: "Concurrency Control", category: "backend" },
      { name: "Lock Management", category: "backend" },
    ],
    bullets: [
      "Token bucket + sliding window rate limiting, built from first principles.",
      "Thread-safe per-client locking — zero double-spending across 150 concurrent requests.",
      "Admin endpoint for configuring per-client rate, burst size, and algorithm.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/token-bucket-rate-limiter",
  },
];
