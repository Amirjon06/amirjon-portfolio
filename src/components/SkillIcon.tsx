import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiGo,
  SiDart,
  SiFlutter,
  SiSqlite,
  SiGithubactions,
  SiTauri,
  SiSupabase,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { Network, Box, Layers, GitMerge, Lock, Radar, Database } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

const SI_ICONS: Record<string, { icon: IconType; color: string }> = {
  JavaScript:   { icon: SiJavascript,  color: "#F7DF1E" },
  TypeScript:   { icon: SiTypescript,  color: "#3178C6" },
  Python:       { icon: SiPython,      color: "#3776AB" },
  "C++":        { icon: SiCplusplus,   color: "#00599C" },
  React:        { icon: SiReact,       color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js":    { icon: SiNodedotjs,   color: "#339933" },
  FastAPI:      { icon: SiFastapi,     color: "#009688" },
  PostgreSQL:   { icon: SiPostgresql,  color: "#4169E1" },
  Docker:       { icon: SiDocker,      color: "#2496ED" },
  Linux:        { icon: SiLinux,       color: "#FCC624" },
  Git:          { icon: SiGit,         color: "#F05032" },
  GitHub:       { icon: SiGithub,      color: "#E6EAF2" },
  Go:           { icon: SiGo,          color: "#00ADD8" },
  Dart:         { icon: SiDart,        color: "#0175C2" },
  Flutter:      { icon: SiFlutter,     color: "#54C5F8" },
  SQLite:       { icon: SiSqlite,      color: "#003B57" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Tauri:        { icon: SiTauri,       color: "#FFC131" },
  Supabase:     { icon: SiSupabase,    color: "#3ECF8E" },
  Prometheus:   { icon: SiPrometheus,  color: "#E6522C" },
  Loki:         { icon: SiGrafana,     color: "#F5A800" },
};

const LUCIDE_ICONS: Record<string, LucideIcon> = {
  "Responsive UI Design":      Layers,
  "RESTful API Development":   Network,
  "Backend Architecture":      Box,
  "CI/CD Pipelines":           GitMerge,
  SQL:                         Database,
  SQLAlchemy:                  Database,
  mDNS:                        Radar,
  "TLS / mTLS":                Lock,
};

export default function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  if (SI_ICONS[name]) {
    const { icon: Icon, color } = SI_ICONS[name];
    return <Icon className={className} style={{ color }} aria-hidden />;
  }

  const LucideIcon = LUCIDE_ICONS[name] ?? Box;
  return <LucideIcon className={className} aria-hidden />;
}