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
  HardDrive,
  Layers,
  Boxes,
  Atom,
  Triangle,
  Palette,
  Flame,
  RefreshCw,
  CheckCircle2,
  Container,
  Train,
  GitBranch,
  GitCommitHorizontal,
  Binary,
  Lock,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory =
  | "language"
  | "backend"
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

export const skills: Skill[] = [
  // Core strengths (reordered to lead with highest-impact backend skills)
  { id: "backend-fastapi", name: "FastAPI", proficiency: 35, category: "backend", icon: Zap },
  { id: "db-postgres", name: "PostgreSQL", proficiency: 34, category: "database", icon: Database },
  { id: "test-pytest", name: "pytest", proficiency: 33, category: "testing", icon: Flame },
  { id: "cs-sysdesign", name: "System Design", proficiency: 28, category: "core-cs", icon: Network },
  { id: "cs-concurrency", name: "Concurrency Control", proficiency: 30, category: "core-cs", icon: Lock },

  // Backend frameworks
  { id: "backend-flask", name: "Flask", proficiency: 33, category: "backend", icon: FlaskConical },
  { id: "backend-aspnet", name: "ASP.NET Core", proficiency: 31, category: "backend", icon: Server },
  { id: "backend-rest", name: "REST APIs", proficiency: 34, category: "backend", icon: Network },
  { id: "backend-node", name: "Node.js", proficiency: 29, category: "backend", icon: Globe },

  // Databases
  { id: "db-sqlite", name: "SQLite", proficiency: 32, category: "database", icon: HardDrive },
  { id: "db-sqlalchemy", name: "SQLAlchemy ORM", proficiency: 33, category: "database", icon: Layers },
  { id: "db-efcore", name: "Entity Framework Core", proficiency: 31, category: "database", icon: Boxes },

  // Testing
  { id: "test-pytest-asyncio", name: "pytest-asyncio", proficiency: 31, category: "testing", icon: RefreshCw },
  { id: "test-automated", name: "Automated Testing", proficiency: 30, category: "testing", icon: CheckCircle2 },

  // Core CS
  { id: "cs-ds", name: "Data Structures", proficiency: 33, category: "core-cs", icon: Layers },
  { id: "cs-algo", name: "Algorithms", proficiency: 31, category: "core-cs", icon: Binary },
  { id: "cs-rest", name: "REST APIs", proficiency: 32, category: "core-cs", icon: Network },

  // DevOps & Tools
  { id: "devops-docker", name: "Docker", proficiency: 30, category: "devops", icon: Container },
  { id: "devops-git", name: "Git/GitHub", proficiency: 32, category: "devops", icon: GitBranch },
  { id: "devops-alembic", name: "Alembic", proficiency: 30, category: "devops", icon: GitCommitHorizontal },
  { id: "devops-railway", name: "Railway", proficiency: 28, category: "devops", icon: Train },
  { id: "devops-vercel", name: "Vercel", proficiency: 29, category: "devops", icon: Triangle },

  // Languages
  { id: "lang-python", name: "Python", proficiency: 30, category: "language", icon: Code2 },
  { id: "lang-sql", name: "SQL", proficiency: 29, category: "language", icon: Database },
  { id: "lang-ts", name: "TypeScript", proficiency: 27, category: "language", icon: FileType },
  { id: "lang-js", name: "JavaScript", proficiency: 28, category: "language", icon: Braces },
  { id: "lang-cpp", name: "C/C++", proficiency: 25, category: "language", icon: Cpu },

  // Frontend
  { id: "fe-tailwind", name: "Tailwind CSS", proficiency: 30, category: "frontend", icon: Palette },
  { id: "fe-react", name: "React", proficiency: 29, category: "frontend", icon: Atom },
  { id: "fe-nextjs", name: "Next.js", proficiency: 28, category: "frontend", icon: Triangle },
];

export function proficiencyLabel(p: number): string {
  if (p >= 33) return "Comfortable";
  if (p >= 30) return "Developing";
  if (p >= 27) return "Familiar";
  return "Just started";
}
