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
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "agentic-coding-agent",
    title: "Agentic Coding Agent",
    techStack: [
      { name: "Python", category: "backend" },
      { name: "LangGraph", category: "backend" },
      { name: "FastAPI", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "Docker", category: "devops" },
      { name: "GCP", category: "devops" },
    ],
    bullets: [
      "Raised the pass rate on problems built to defeat memorized answers from 67% to 100% (12/12 runs) by feeding failing test results back into a self-correcting retry loop capped at 3 retries.",
      "Achieved a 100% pass rate across 18 algorithm problems (54/54 runs) at ~1K tokens and 3.4 s per run, graded against tests 88% hidden from the model, by building an agent that plans, writes and verifies Python in a Docker sandbox.",
      "Ran untrusted AI-written code publicly on a 1 GB free-tier VM with 0 out-of-memory crashes (peak 670 MB) by isolating each run in a network-less, resource-capped container and limiting each IP to 5 runs/day before any model call.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/agentic-coding-agent",
    liveUrl: "https://agentic-coding-agent.duckdns.org",
  },
  {
    id: "url-shortener",
    title: "URL Shortener API with Click Analytics",
    techStack: [
      { name: "FastAPI", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "SQLAlchemy", category: "backend" },
      { name: "pytest", category: "testing" },
      { name: "Alembic", category: "devops" },
    ],
    bullets: [
      "Engineered a production-grade REST API with collision-free short-code generation, real-time click analytics, and async SQLAlchemy; deployed on Railway with PostgreSQL.",
      "Built a 13-test suite with pytest + pytest-asyncio covering core functionality, connection pooling, and edge cases.",
      "Designed a normalized PostgreSQL schema with indexed columns, foreign-key constraints, and Alembic migrations; prevented SQL injection via parameterized queries.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/url-shortner",
  },
  {
    id: "rag-pipeline",
    title: "RAG + LangChain Pipeline (Async, Queue-Based)",
    techStack: [
      { name: "Python", category: "backend" },
      { name: "LangChain", category: "backend" },
      { name: "Qdrant", category: "database" },
      { name: "FastAPI", category: "backend" },
      { name: "Redis/Valkey", category: "backend" },
      { name: "Docker", category: "devops" },
    ],
    bullets: [
      "Built a production RAG pipeline with Gemini-grounded retrieval using Qdrant vector DB; batched ingestion with tuned chunk overlap for reliable corpus indexing at scale.",
      "Re-architected sync pipeline into async job queue: FastAPI enqueues /chat, RQ workers process jobs asynchronously, /job-status polls results.",
      "Orchestrated with Docker Compose for horizontal worker scaling and concurrent request handling.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/rag-async-pipeline",
  },
  {
    id: "usage-metering-api",
    title: "CI/CD Pipeline with Automated Rollback",
    techStack: [
      { name: "FastAPI", category: "backend" },
      { name: "GitHub Actions", category: "devops" },
      { name: "Docker", category: "devops" },
      { name: "Kubernetes", category: "devops" },
      { name: "Trivy", category: "devops" },
      { name: "pytest", category: "testing" },
    ],
    bullets: [
      "FastAPI service for per-API-key usage ingestion and aggregation, shipped through a gated GitHub Actions pipeline: ruff + pytest → multi-stage Docker build → Trivy scan (fails on any CRITICAL CVE) → push to GHCR → deploy.",
      "Deploys to an ephemeral kind cluster in CI with liveness/readiness probes and maxUnavailable: 0 rolling updates, verified by curling /health continuously through a forced rollout restart with zero dropped requests.",
      "Automatic rollback via kubectl rollout undo when a rollout stalls, exercised by a repeatable rollback drill that ships a broken readiness probe and confirms the old pods keep serving HTTP 200 throughout.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/usage-metering-api",
  },
  {
    id: "mini-ats",
    title: "Mini ATS – Candidate Pipeline Tool",
    techStack: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "ASP.NET Core", category: "backend" },
      { name: "Entity Framework Core", category: "backend" },
      { name: "SQLite", category: "database" },
      { name: "Docker", category: "devops" },
    ],
    bullets: [
      "Full-stack applicant tracking system with job posting, PDF/DOCX resume upload, and 5-stage recruiter pipeline (Applied → Rejected/Offer).",
      "Designed 5-endpoint REST API in ASP.NET Core (Minimal API) with EF Core, normalized Job–Candidate relational model, and multipart file-upload handling.",
      "Frontend on Vercel, backend on Railway via Docker; made deliberate trade-offs (SQLite for iteration, Minimal API over MVC) to prioritize a fully working system.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/mini-ats",
  },
];
