import {
  Server,
  Flame,
  Globe,
  Database,
  HardDrive,
  FlaskConical,
  Zap,
  Container,
  Train,
  Triangle,
  GitBranch,
  Atom,
  Code2,
  Palette,
  Github,
  Network,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface TechItem {
  name: string;
  icon: LucideIcon;
  category: string;
}

export const techStack: TechItem[] = [
  { name: "FastAPI", icon: Zap, category: "Backend" },
  { name: "Flask", icon: FlaskConical, category: "Backend" },
  { name: "ASP.NET Core", icon: Server, category: "Backend" },
  { name: "Node.js", icon: Globe, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "SQLite", icon: HardDrive, category: "Database" },
  { name: "pytest", icon: Flame, category: "Testing" },
  { name: "pytest-asyncio", icon: RefreshCw, category: "Testing" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "Railway", icon: Train, category: "DevOps" },
  { name: "Vercel", icon: Triangle, category: "DevOps" },
  { name: "Alembic", icon: GitBranch, category: "DevOps" },
  { name: "React", icon: Atom, category: "Frontend" },
  { name: "Next.js", icon: Triangle, category: "Frontend" },
  { name: "TypeScript", icon: Code2, category: "Frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
  { name: "Git", icon: GitBranch, category: "Other" },
  { name: "GitHub", icon: Github, category: "Other" },
  { name: "REST APIs", icon: Network, category: "Other" },
  { name: "async/await", icon: RefreshCw, category: "Other" },
];
