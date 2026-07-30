// Experience data for the portfolio timeline.

export type Skill = {
  name: string;
  level: number; // Skill level (0–1)
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
  accent: string;     // Primary accent color
  accentDim: string;  // Background accent color
  summary: string;
  bullets: { text: string; metric?: string }[];
  skills: Skill[];
  logo: string;
};

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "octopilot",
    role: "Software Engineering Intern",
    company: "Octopilot AI",
    shortCompany: "Octopilot AI",
    location: "Remote",
    dates: "June 2026 – Present",
    type: "internship",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
    summary:
      "Engineered production-ready features for an AI-powered writing platform, building reusable Flutter infrastructure, designing AI interfaces, and leading engineering initiatives across the Doc Oc editor.",
    bullets: [
      {
        text: "Engineered a persistent Flutter theme engine for the Doc Oc editor, synchronizing application state across 20+ UI components and eliminating 15+ cross-component regressions.",
        metric: "20+ UI components",
      },
      {
        text: "Designed production-ready AI Study Plan and Knowledge Graph interfaces using a reusable component architecture, structured Git workflows, and mock data suites.",
        metric: "AI interfaces",
      },
      {
        text: "Selected to lead a team of 4 developers for a targeted engineering sprint, coordinating task delegation and codebase integration to guarantee on-time delivery.",
        metric: "Led 4 developers",
      },
  ],
    skills: [
      { name: "Flutter", level: 0.9, color: "#54C5F8" },
      { name: "Dart", level: 0.85, color: "#0175C2" },
      { name: "Git", level: 0.85, color: "#F1502F" },
      { name: "UI Architecture", level: 0.9, color: "#c084fc" },
      { name: "AI", level: 0.8, color: "#818cf8" },
    ],
    logo: "/images/logos/octopilot-ai.png",
  },
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
      "Built cloud infrastructure and DevOps automation for distributed climate data systems, architecting CI/CD pipelines, monitoring platforms, and release workflows that improved engineering productivity and deployment reliability.",
    bullets: [
      {
        text: "Architected containerized CI/CD pipelines using Docker and GitHub Actions across Linux environments, automating multi-environment deployments to cut manual setup friction and boost velocity by 25%.",
        metric: "25% faster delivery",
      },
      {
        text: "Built Python and JavaScript monitoring dashboards for distributed climate data pipelines, exposing real-time service health and system observability to accelerate incident detection by 35%.",
        metric: "35% faster detection",
      },
      {
        text: "Implemented automated testing and Git-based workflows to harden release pipelines, mitigating production regressions by 40% and driving down engineering hotfix overhead.",
        metric: "40% fewer regressions",
      },
    ],
    skills: [
      { name: "Docker", level: 0.9, color: "#38bdf8" },
      { name: "GitHub Actions", level: 0.85, color: "#5EEAD4" },
      { name: "Linux", level: 0.8, color: "#a3e635" },
      { name: "Python", level: 0.85, color: "#3776AB" },
      { name: "JavaScript", level: 0.8, color: "#F7DF1E" },
      { name: "CI/CD", level: 0.9, color: "#5EEAD4" },
    ],
    logo: "/images/logos/sound-of-earth.png",
  },
  {
    id: "kingsborough",
    role: "CS & Mathematics Tutor",
    company: "Kingsborough Community College Learning Center",
    shortCompany: "KCC Learning Center",
    location: "Brooklyn, NY",
    dates: "March 2026 – Present",
    type: "tutoring",
    accent: "#60a5fa",
    accentDim: "rgba(96,165,250,0.12)",
    summary:
      "Mentored computer science and mathematics students through structured technical instruction, helping them strengthen algorithmic thinking, debugging skills, and software engineering fundamentals.",
    bullets: [
      {
        text: "Mentored 50+ students in algorithmic reasoning and data structures across 100+ technical sessions, accelerating their system implementation and debugging velocity.",
        metric: "100+ sessions",
      },
      {
        text: "Designed structured, step-by-step learning exercises covering core paradigms—including recursion, object-oriented programming, and control flow—to bridge the gap between requirements and maintainable code.",
        metric: "Core CS concepts",
      },
      {
        text: "Coached peers through complex debugging workflows in Python and C++, training them to isolate runtime defects and systematically trace execution paths.",
        metric: "Python & C++",
      },
    ],
    skills: [
      { name: "Python", level: 0.9, color: "#3776AB" },
      { name: "C++", level: 0.85, color: "#00599C" },
      { name: "Algorithms", level: 0.9, color: "#34d399" },
      { name: "Debugging", level: 0.95, color: "#60a5fa" },
      { name: "OOP", level: 0.85, color: "#a78bfa" },
    ],
    logo: "/images/logos/kingsborough.png",
  },
];