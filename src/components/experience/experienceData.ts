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
    role: "Software Engineering Intern (Part-Time Contract)",
    company: "Boardwalk Labs",
    shortCompany: "Boardwalk Labs",
    location: "Remote",
    dates: "June 2026 – Present",
    type: "internship",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
    summary:
      "Building LLM pipelines and document-ingestion infrastructure for OctoPilot AI, and leading its Flutter frontend.",
    bullets: [
      {
        text: "Building and shipping production learning workflows for OctoPilot AI in Flutter/Dart, spanning AI study plans, concept mapping, analytics, and responsive desktop/mobile experiences; helping reduce projected delivery from ~4 weeks to ~2 weeks (~50%).",
        metric: "~50% faster delivery",
      },
      {
        text: "Engineering an end-to-end AI writing pipeline across Go, Python, and Flutter, integrating streamed LLM generation, multi-agent orchestration, persistence, credit accounting, and save/restore flows.",
        metric: "Multi-agent orchestration",
      },
      {
        text: "Developing a production Python/FastAPI document-ingestion service for downstream LLM/RAG pipelines, supporting 3 formats (PDF, DOCX, PPTX) with MIME/extension routing, normalization, encrypted/corrupt-file handling, and 8 automated tests.",
        metric: "3 formats, 8 tests",
      },
  ],
    skills: [
      { name: "Python", level: 0.9, color: "#3776AB" },
      { name: "Go", level: 0.85, color: "#00ADD8" },
      { name: "FastAPI", level: 0.85, color: "#009688" },
      { name: "Flutter", level: 0.85, color: "#54C5F8" },
      { name: "Dart", level: 0.8, color: "#0175C2" },
      { name: "LLM Pipelines", level: 0.85, color: "#818cf8" },
    ],
    logo: "/images/logos/boardwalk-labs.png",
  },
  {
    id: "sound-of-earth",
    role: "DevOps & Cloud Infrastructure Intern (Part-Time Contract)",
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
    dates: "March 2026 – June 2026",
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