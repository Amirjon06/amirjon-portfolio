/**
 * experienceData.ts
 * Single source of truth for the Career Constellation.
 * Decoupled from content.ts so the constellation can have
 * richer metadata (metrics, skill levels, colors).
 */

export type Skill = {
  name: string;
  level: number; // 0–1, used for orbit radius / glow intensity
  color: string;
};

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  shortCompany: string;
  location: string;
  dates: string;
  type: "internship" | "tutoring" | "freelance";
  accent: string;       // primary glow color
  accentDim: string;    // 20% opacity version for backgrounds
  summary: string;
  bullets: { text: string; metric?: string }[];
  skills: Skill[];
  logo: string;
};

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "sound-of-earth",
    role: "DevOps & Cloud Infrastructure Intern",
    company: "Sound of Earth",
    shortCompany: "Sound of Earth",
    location: "Remote",
    dates: "May 2026 – Present",
    type: "internship",
    accent: "#5EEAD4",
    accentDim: "rgba(94,234,212,0.12)",
    summary:
      "Worked on cloud infrastructure, CI/CD automation, containerized development environments, and real-time monitoring systems for climate data workflows and full-stack deployment pipelines.",
    bullets: [
      { text: "Designed Docker-based development infrastructure and GitHub Actions CI/CD workflows across Linux environments, reducing manual setup friction and improving developer productivity by ~25%.", metric: "~25% productivity gain" },
      { text: "Built JavaScript/Python monitoring dashboards for climate data pipelines, exposing real-time service health, pipeline status, and system observability while reducing incident detection time by 35%.", metric: "35% faster detection" },
      { text: "Implemented automated testing and Git-based release pipelines to harden deployment workflows, decreasing production bugs by 30–40% and improving release consistency.", metric: "30–40% fewer bugs" },
    ],
    skills: [
      { name: "Docker",          level: 0.9, color: "#38bdf8" },
      { name: "GitHub Actions",  level: 0.85, color: "#5EEAD4" },
      { name: "Linux",           level: 0.8,  color: "#a3e635" },
      { name: "Python",          level: 0.85, color: "#3776AB" },
      { name: "JavaScript",      level: 0.8,  color: "#F7DF1E" },
      { name: "CI/CD",           level: 0.9,  color: "#5EEAD4" },
    ],
    logo: "/images/logos/sound-of-earth.png",
  },
  {
    id: "octopilot",
    role: "Software Engineering Intern",
    company: "Octopilot AI",
    shortCompany: "Octopilot AI",
    location: "Remote",
    dates: "May 2026 – Present",
    type: "internship",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
    summary:
      "Built and tested production-facing editor features for an AI-powered writing platform, contributing to frontend architecture, UI reliability, theme systems, and AI-assisted document workflows.",
    bullets: [
      { text: "Developed and deployed a Light/Dark Mode feature for Doc Oct, implementing persistent theme preferences and styling updates across 20+ editor components.", metric: "20+ components updated" },
      { text: "Debugged and verified 15+ AI-powered writing features, identifying performance bottlenecks and cross-component regressions to ensure production stability.", metric: "15+ features tested" },
      { text: "Contributed to shared editor workflow improvements, refining styling and interaction patterns across document editing and AI-assisted writing components.", metric: "Shared components improved" },
    ],
    skills: [
      { name: "LLMs",            level: 0.85, color: "#c084fc" },
      { name: "Agent Systems",   level: 0.8,  color: "#818cf8" },
      { name: "AI Evaluation",   level: 0.9,  color: "#f472b6" },
      { name: "Product Research",level: 0.75, color: "#fb923c" },
      { name: "Automation",      level: 0.8,  color: "#c084fc" },
    ],
    logo: "/images/logos/octopilot-ai.png",
  },
  {
    id: "kingsborough",
    role: "CS & Mathematics Tutor",
    company: "Kingsborough Community College Learning Center",
    shortCompany: "KCC Learning Center",
    location: "Brooklyn, NY",
    dates: "May 2026 – Present",
    type: "tutoring",
    accent: "#60a5fa",
    accentDim: "rgba(96,165,250,0.12)",
    summary:
      "Mentored students in computer science and mathematics, translating complex technical concepts into practical problem-solving strategies while developing debugging, analytical reasoning, and computational thinking skills.",
    bullets: [
      { text: "Led 100+ technical tutoring sessions for 50+ students, strengthening debugging, computational thinking, algorithmic reasoning, and structured problem-solving.", metric: "100+ sessions led" },
      { text: "Coached students through C++/Python debugging, algorithm design, recursion, control flow, arrays, and core software engineering fundamentals.", metric: "C++/Python" },
      { text: "Translated complex technical concepts into structured, step-by-step workflows, enabling students to debug code, analyze problems, and build independent problem-solving skills.", metric: "Technical mentorship" },
    ],
    skills: [
      { name: "Debugging",               level: 0.95, color: "#60a5fa" },
      { name: "Computational Thinking",  level: 0.90, color: "#38bdf8" },
      { name: "Problem Solving",         level: 0.95, color: "#34d399" },
      { name: "Teaching",                level: 0.95, color: "#60a5fa" },
      { name: "Mentorship",              level: 0.90, color: "#a78bfa" },
    ],
    logo: "/images/logos/kingsborough.png",
  },
];