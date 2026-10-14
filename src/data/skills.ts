import {
  Code2,
  Cpu,
  Braces,
  FileType,
  Database,
  Zap,
  FlaskConical,
  Server,
  Globe,
  Network,
  Layers,
  Boxes,
  Atom,
  Triangle,
  Palette,
  Flame,
  RefreshCw,
  Container,
  GitBranch,
  Binary,
  Bot,
  Sparkles,
  Workflow,
  Link,
  Search,
  CirclePlay,
  Ship,
  Cloud,
  Shapes,
  Box,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory =
  | "language"
  | "backend"
  | "ai"
  | "database"
  | "frontend"
  | "testing"
  | "devops"
  | "core-cs";

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
  category: SkillCategory;
  icon: LucideIcon;
}

// Proficiency is a percentage. Each category lists its top skills (Comfortable)
// followed by the ones still Developing.
export const skills: Skill[] = [
  // Languages
  { id: "lang-python", name: "Python", proficiency: 70, category: "language", icon: Code2 },
  { id: "lang-sql", name: "SQL", proficiency: 66, category: "language", icon: Database },
  { id: "lang-cpp", name: "C/C++", proficiency: 62, category: "language", icon: Cpu },
  { id: "lang-js", name: "JavaScript", proficiency: 52, category: "language", icon: Braces },
  { id: "lang-ts", name: "TypeScript", proficiency: 48, category: "language", icon: FileType },

  // Backend
  { id: "backend-fastapi", name: "FastAPI", proficiency: 70, category: "backend", icon: Zap },
  { id: "backend-rest", name: "REST APIs", proficiency: 66, category: "backend", icon: Network },
  { id: "backend-flask", name: "Flask", proficiency: 62, category: "backend", icon: FlaskConical },
  { id: "backend-node", name: "Node.js", proficiency: 48, category: "backend", icon: Globe },
  { id: "backend-aspnet", name: "ASP.NET Core", proficiency: 44, category: "backend", icon: Server },

  // AI & Agents
  { id: "ai-llm-apis", name: "LLM APIs (Gemini)", proficiency: 70, category: "ai", icon: Sparkles },
  { id: "ai-rag", name: "RAG Pipelines", proficiency: 66, category: "ai", icon: Search },
  { id: "ai-langchain", name: "LangChain", proficiency: 62, category: "ai", icon: Link },
  { id: "ai-langgraph", name: "LangGraph", proficiency: 52, category: "ai", icon: Workflow },
  { id: "ai-agentic", name: "Agentic Workflows", proficiency: 48, category: "ai", icon: Bot },

  // Databases
  { id: "db-postgres", name: "PostgreSQL", proficiency: 70, category: "database", icon: Database },
  { id: "db-qdrant", name: "Qdrant (Vector DB)", proficiency: 66, category: "database", icon: Boxes },
  { id: "db-redis", name: "Redis/Valkey", proficiency: 62, category: "database", icon: Layers },
  { id: "db-sqlalchemy", name: "SQLAlchemy ORM", proficiency: 52, category: "database", icon: Layers },

  // DevOps & Cloud
  { id: "devops-docker", name: "Docker", proficiency: 70, category: "devops", icon: Container },
  { id: "devops-git", name: "Git/GitHub", proficiency: 66, category: "devops", icon: GitBranch },
  { id: "devops-gha", name: "GitHub Actions (CI/CD)", proficiency: 62, category: "devops", icon: CirclePlay },
  { id: "devops-k8s", name: "Kubernetes", proficiency: 48, category: "devops", icon: Ship },
  { id: "devops-railway-vercel", name: "Railway / Vercel", proficiency: 44, category: "devops", icon: Triangle },
  { id: "devops-gcp", name: "GCP", proficiency: 25, category: "devops", icon: Cloud },

  // Core CS
  { id: "cs-sysdesign", name: "System Design", proficiency: 70, category: "core-cs", icon: Network },
  { id: "cs-dbms", name: "DBMS", proficiency: 66, category: "core-cs", icon: Database },
  { id: "cs-ds", name: "Data Structures", proficiency: 62, category: "core-cs", icon: Layers },
  { id: "cs-algo", name: "Algorithms", proficiency: 52, category: "core-cs", icon: Binary },
  { id: "cs-oop", name: "OOP", proficiency: 48, category: "core-cs", icon: Shapes },

  // Testing
  { id: "test-pytest", name: "pytest", proficiency: 48, category: "testing", icon: Flame },
  { id: "test-pytest-asyncio", name: "pytest-asyncio", proficiency: 25, category: "testing", icon: RefreshCw },

  // Frontend
  { id: "fe-react", name: "React", proficiency: 70, category: "frontend", icon: Atom },
  { id: "fe-tailwind", name: "Tailwind CSS", proficiency: 66, category: "frontend", icon: Palette },
  { id: "fe-html-css", name: "HTML/CSS", proficiency: 62, category: "frontend", icon: Code2 },
  { id: "fe-nextjs", name: "Next.js", proficiency: 52, category: "frontend", icon: Triangle },
  { id: "fe-threejs", name: "Three.js", proficiency: 48, category: "frontend", icon: Box },
];

export function proficiencyLabel(p: number): string {
  if (p >= 60) return "Comfortable";
  if (p >= 40) return "Developing";
  return "Just started";
}
