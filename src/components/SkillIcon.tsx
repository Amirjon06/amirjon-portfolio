import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { Network, Box, Layers, GitMerge } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

const SI_ICONS: Record<string, { icon: IconType; color: string }> = {
  JavaScript:   { icon: SiJavascript,  color: "#F7DF1E" },
  TypeScript:   { icon: SiTypescript,  color: "#3178C6" },
  Python:       { icon: SiPython,      color: "#3776AB" },
  "C++":        { icon: SiCplusplus,   color: "#00599C" },
  PHP:          { icon: SiPhp,         color: "#777BB4" },
  React:        { icon: SiReact,       color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js":    { icon: SiNodedotjs,   color: "#339933" },
  "Express.js": { icon: SiExpress,     color: "#E6EAF2" },
  FastAPI:      { icon: SiFastapi,     color: "#009688" },
  Django:       { icon: SiDjango,      color: "#092E20" },
  PostgreSQL:   { icon: SiPostgresql,  color: "#4169E1" },
  MySQL:        { icon: SiMysql,       color: "#4479A1" },
  MongoDB:      { icon: SiMongodb,     color: "#47A248" },
  Docker:       { icon: SiDocker,      color: "#2496ED" },
  Linux:        { icon: SiLinux,       color: "#FCC624" },
  Git:          { icon: SiGit,         color: "#F05032" },
  GitHub:       { icon: SiGithub,      color: "#E6EAF2" },
  Postman:      { icon: SiPostman,     color: "#FF6C37" },
};

const LUCIDE_ICONS: Record<string, LucideIcon> = {
  "Responsive UI Design":      Layers,
  "RESTful API Development":   Network,
  "Backend Architecture":      Box,
  "CI/CD Pipelines":           GitMerge,
  SQL:                         Box,
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