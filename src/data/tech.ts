import {
  Atom,
  Boxes,
  CirclePlay,
  Container,
  Database,
  Link,
  Server,
  Ship,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface TechItem {
  name: string;
  icon: LucideIcon;
  category: string;
}

// Top 2 technologies per featured project, in project order.
export const techStack: TechItem[] = [
  { name: "LangGraph", icon: Workflow, category: "AI" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "FastAPI", icon: Zap, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "LangChain", icon: Link, category: "AI" },
  { name: "Qdrant", icon: Boxes, category: "Database" },
  { name: "Kubernetes", icon: Ship, category: "DevOps" },
  { name: "GitHub Actions", icon: CirclePlay, category: "DevOps" },
  { name: "React", icon: Atom, category: "Frontend" },
  { name: "ASP.NET Core", icon: Server, category: "Backend" },
];
