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
    dates: "June 2026 – Present",
    type: "internship",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
    summary:
      "Building LLM pipelines and document-ingestion infrastructure for OctoPilot AI, and leading its Flutter frontend.",
    bullets: [
      {
        text: "Designed and deployed Python-based LLM pipelines and semantic knowledge graphs, automating AI content-processing workflows and reducing manual processing time by 40%.",
        metric: "40% less manual processing",
      },
      {
        text: "Built a Python/FastAPI document-ingestion API for downstream LLM/RAG workflows, supporting 3 file formats (PDF, DOCX, PPTX) with text normalization, encrypted/corrupt-file handling, automated tests, and chunking-ready output.",
        metric: "3 file formats",
      },
      {
        text: "Led Flutter/Dart development across 20+ reusable components and AI learning workflows, eliminating 15+ cross-component regressions while standardizing cross-platform UI state and theming across desktop and mobile surfaces.",
        metric: "20+ components",
      },
  ],
    skills: [
      { name: "Python", level: 0.9, color: "#3776AB" },
      { name: "FastAPI", level: 0.85, color: "#009688" },
      { name: "Flutter", level: 0.85, color: "#54C5F8" },
      { name: "Dart", level: 0.8, color: "#0175C2" },
      { name: "LLM Pipelines", level: 0.85, color: "#818cf8" },
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
        text: "Architected containerized CI/CD pipelines using Docker, GitHub Actions, and Linux, automating multi-environment deployments, reducing production release regressions by 40%, and saving $3.2K/year in staging overhead.",
        metric: "40% fewer regressions",
      },
      {
        text: "Engineered a Supabase/PostgreSQL migration for 138+ records, restructuring Airtable data across 8 normalized tables/views and building a PostgREST-backed migration pipeline for web and mobile clients.",
        metric: "138+ records migrated",
      },
      {
        text: "Audited production API and infrastructure security, identifying 29 actionable issues across JWT, CORS, secrets management, Docker networking, CI/CD, backups, and monitoring.",
        metric: "29 issues identified",
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
        text: "Mentored 50+ students across 100+ tutoring sessions in programming, algorithms, recursion, debugging, mathematics, and structured problem solving.",
        metric: "100+ sessions",
      },
      {
        text: "Helped students trace code, identify logical errors, and develop solutions independently.",
        metric: "Debugging & tracing",
      },
      {
        text: "Explained technical and mathematical concepts from first principles and adapted explanations to different experience levels.",
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