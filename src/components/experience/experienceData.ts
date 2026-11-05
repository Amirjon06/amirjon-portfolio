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
    id: "boardwalk-labs",
    role: "Software Engineering Intern",
    company: "Boardwalk Labs",
    shortCompany: "Boardwalk Labs",
    location: "Remote",
    dates: "June 2026 – Sep 2026",
    type: "internship",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
    summary:
      "Backend work on OctoPilot AI: Go and Python services, credit accounting APIs, and the LLM agent pipeline.",
    bullets: [
      {
        text: "Built and optimized Go/Python microservices for OctoPilot AI, reducing end-to-end processing latency by 50% through background worker queues and connection pooling.",
        metric: "50% lower latency",
      },
      {
        text: "Co-developed Go credit-accounting APIs with per-user balance tracking and idempotency keys, preventing duplicate credit deductions under request retries.",
        metric: "Idempotent credit APIs",
      },
      {
        text: "Engineered an LLM agent execution pipeline with Redis TTL caching, token-bucket rate limiting, and Prometheus instrumentation to control request volume and detect streaming failures.",
        metric: "Redis + Prometheus",
      },
    ],
    skills: [
      { name: "Go", level: 0.9, color: "#00ADD8" },
      { name: "Python", level: 0.85, color: "#3776AB" },
      { name: "Redis", level: 0.8, color: "#DC382D" },
      { name: "Prometheus", level: 0.75, color: "#E6522C" },
    ],
    logo: "/images/logos/boardwalk-labs.png",
  },
  {
    id: "sound-of-earth",
    role: "DevOps & Cloud Infrastructure Intern",
    company: "Sound of Earth",
    shortCompany: "Sound of Earth",
    location: "Remote",
    dates: "May 2026 – Aug 2026",
    type: "internship",
    accent: "#5EEAD4",
    accentDim: "rgba(94,234,212,0.12)",
    summary:
      "Built cloud infrastructure and DevOps automation for a climate-data platform — CI/CD pipelines, a database migration, and a production security audit.",
    bullets: [
      {
        text: "Architected and owned containerized CI/CD infrastructure using Docker, GitHub Actions, and Linux, automating multi-environment deployments to reduce production regressions by 40% and slash $3.2K/year in staging overhead.",
        metric: "40% fewer regressions",
      },
      {
        text: "Engineered a zero-downtime Supabase/PostgreSQL migration pipeline for 138,000+ records, restructuring legacy data across 8 normalized tables and building PostgREST-backed APIs for web and mobile synchronization.",
        metric: "138K+ records migrated",
      },
      {
        text: "Audited and hardened production infrastructure security across JWT authentication, CORS, secrets management, and isolated Docker networking, identifying and remediating 29 core exposure vectors.",
        metric: "29 vectors remediated",
      },
    ],
    skills: [
      { name: "Docker", level: 0.9, color: "#38bdf8" },
      { name: "GitHub Actions", level: 0.85, color: "#5EEAD4" },
      { name: "Linux", level: 0.8, color: "#a3e635" },
      { name: "PostgreSQL", level: 0.85, color: "#336791" },
      { name: "Supabase", level: 0.8, color: "#3ECF8E" },
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
    dates: "March 2026 – Aug 2026",
    type: "tutoring",
    accent: "#60a5fa",
    accentDim: "rgba(96,165,250,0.12)",
    summary:
      "Mentored computer science and mathematics students through structured technical instruction, helping them strengthen algorithmic thinking, debugging skills, and software engineering fundamentals.",
    bullets: [
      {
        text: "Mentored 50+ students across 100+ sessions in introductory programming and mathematics, translating complex concepts into clear, structured problem-solving strategies.",
        metric: "100+ sessions",
      },
      {
        text: "Provided individualized tutoring in C++, pre-calculus, algebra, and statistics, adapting explanations and practice problems to students' skill levels and coursework.",
        metric: "C++ & Math",
      },
      {
        text: "Guided students through programming fundamentals, debugging, and code tracing, helping them identify errors and develop more systematic approaches to solving problems.",
        metric: "Debugging & tracing",
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