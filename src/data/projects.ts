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
    githubUrl: "https://github.com/Saksham-Mist/rag-langchain-pipeline",
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
      "Production-grade REST API with collision-free short-code generation and real-time click analytics, deployed on Railway with PostgreSQL (Neon).",
      "Built 13-test suite with pytest + pytest-asyncio covering core functionality, connection pooling, and edge cases.",
      "Normalized PostgreSQL schema with indexed columns, FK constraints, and Alembic migrations; prevented SQL injection via parameterized queries.",
    ],
    githubUrl: "https://github.com/Saksham-Mist/url-shortner",
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
