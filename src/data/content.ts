export const profile = {
  name: "Amirjon Abdunayimov",
  firstName: "Amirjon",
  role: "Software Engineer",
  location: "Brooklyn, NY",
  email: "amirjonabd5@gmail.com",
  phone: "(929) 475-3254",
  github: "https://github.com/Amirjon06",
  linkedin: "https://linkedin.com/in/amirjon-abd",
  resumeFile: "/resume/Amirjon_Abdunayimov_Resume.pdf",
  photo: "/images/profile.png",
};

export const heroIdentity = {
  eyebrow: "Computer Science @ NYU Tandon",
  name: "Amirjon Abdunayimov",
  title: "Software Engineer",
};

export const heroLines = [
  "Backend systems, AI/agentic tooling, and infrastructure that holds up under real conditions.",
];

// Cycling phrases for hero typing animation — loops forever.
export const heroCyclePhrases = [
  "Hello World.",
  "I'm Amirjon Abdunayimov.",
  "Software Engineer.",
  "Backend · AI Systems · Infrastructure.",
];

export const about = {
  paragraphs: [
    "I’m a Computer Science student at NYU Tandon and a software engineer with experience across backend development, AI systems, cloud infrastructure, and developer tooling. I’m especially interested in systems where reliability, correctness, observability, and real-world behavior matter.",
    "Currently a Software Engineering Intern at Boardwalk Labs, building LLM pipelines and document-ingestion infrastructure for OctoPilot AI. Previously a DevOps & Cloud Infrastructure Intern at Sound of Earth.",
    "I founded the AI, Coding, and Systems Club, combining hands-on engineering work with mentorship and technical community-building.",
  ],
  education: [
    {
      school: "New York University — Tandon School of Engineering",
      degree: "B.S. in Computer Science (Minor in Mathematics)",
      meta: "Expected Graduation: May 2029",
      honors: [],
      courses: ["Data Structures & Algorithms", "Linear Algebra", "Discrete Mathematics", "Python Programming", "Calculus II", "Arabic I"],
    },
    {
      school: "Kingsborough Community College",
      degree: "Associate Degree in Computer Science",
      meta: "September 2024 – 2026",
      honors: ["Dean's List", "Honors Program", "Phi Theta Kappa", "JKC Scholarship Semifinalist"],
      courses: [],
    },
    {
      school: "BrainStation",
      degree: "Full Stack Web Development Certificate",
      meta: "Completed",
      honors: [],
      courses: [],
    },
  ],
  facts: [
    { value: "100+", label: "Tutoring sessions delivered" },
    { value: "50+", label: "Students Mentored" },
    { value: "15+", label: "AI Features" },
    { value: "31", label: "Technologies" },
  ],
};

export const experience = [
  {
    company: "Sound of Earth",
    role: "DevOps & Cloud Infrastructure Intern",
    location: "Remote",
    dates: "May 2026 – Aug 2026",
    summary:
      "Worked on the infrastructure side of a climate-data platform — CI/CD pipelines, a database migration, and a production security audit.",
    bullets: [
      "Architected containerized CI/CD pipelines using Docker, GitHub Actions, and Linux, automating multi-environment deployments, reducing production release regressions by 40%, and saving $3.2K/year in staging overhead.",
      "Engineered a Supabase/PostgreSQL migration for 138+ records, restructuring Airtable data across 8 normalized tables/views and building a PostgREST-backed migration pipeline for web and mobile clients.",
      "Audited production API and infrastructure security, identifying 29 actionable issues across JWT, CORS, secrets management, Docker networking, CI/CD, backups, and monitoring.",
    ],
    tags: ["Docker", "GitHub Actions", "Linux", "PostgreSQL", "Supabase", "CI/CD"],
    logo: "/images/logos/sound-of-earth.png",
  },
  {
    company: "Boardwalk Labs",
    role: "Software Engineering Intern",
    location: "Remote",
    dates: "June 2026 – Present",
    summary:
      "Building LLM pipelines and document-ingestion infrastructure for OctoPilot AI, and leading its Flutter frontend.",
    bullets: [
      "Designed and deployed Python-based LLM pipelines and semantic knowledge graphs, automating AI content-processing workflows and reducing manual processing time by 40%.",
      "Built a Python/FastAPI document-ingestion API for downstream LLM/RAG workflows, supporting 3 file formats (PDF, DOCX, PPTX) with text normalization, encrypted/corrupt-file handling, automated tests, and chunking-ready output.",
      "Led Flutter/Dart development across 20+ reusable components and AI learning workflows, eliminating 15+ cross-component regressions while standardizing cross-platform UI state and theming across desktop and mobile surfaces.",
    ],
    tags: ["Python", "FastAPI", "LLM Pipelines", "Flutter", "Dart"],
    logo: "/images/logos/boardwalk-labs.png",
  },
  {
    company: "Kingsborough Community College Learning Center",
    role: "Computer Science & Mathematics Tutor",
    location: "Brooklyn, NY",
    dates: "March 2026 – June 2026",
    summary:
      "One-on-one and small-group tutoring across core CS and math courses, focused on building durable problem-solving skills rather than just answers.",
    bullets: [
      "Mentored 50+ students across 100+ tutoring sessions in programming, algorithms, recursion, debugging, mathematics, and structured problem solving.",
      "Helped students trace code, identify logical errors, and develop solutions independently.",
      "Explained technical and mathematical concepts from first principles and adapted explanations to different experience levels.",
    ],
    tags: ["Teaching", "DSA", "Algorithms", "Mentorship"],
    logo: "/images/logos/kingsborough.png",
  },
];

export const featuredProject = {
  slug: "cipherforge",
  name: "CipherForge",
  tagline: "Full-Stack Password Security Web App",
  status: "Completed",
  oneLiner:
    "A cyberpunk-themed password generator that scores strength in real time using entropy-based analysis.",
  problem:
    "Most password generators hand back a random string with no insight into how strong it actually is — leading people to reuse weak, predictable passwords.",
  challenges: [
    "Scoring real-world password strength with entropy-based analysis rather than simple length checks",
    "Keeping the UI responsive while strength analysis runs on every keystroke",
    "Designing a generator that's configurable but secure by default",
  ],
  solution:
    "A password generator and analyzer that scores strength in real time using entropy-based validation, with customizable generation rules and a local password history — wrapped in a cyberpunk, glassmorphism UI.",
  stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python"],
  architectureNote:
    "A React + TypeScript single-page app talks to a FastAPI backend over a REST API for entropy scoring and generation rules. State is managed client-side for instant feedback, with a Matrix-style animated background layered on top.",
  mermaid: `flowchart LR
  A["React + TypeScript UI"] -->|"REST API"| B["FastAPI Backend"]
  B --> C["Entropy Scoring Engine"]
  B --> D["Generation Rules Engine"]
  C --> A
  D --> A
  A --> E["Password History (Client State)"]`,
  highlights: [
    "Entropy-based strength scoring runs live as you type",
    "Customizable generation rules (length, character sets, exclusions)",
    "Local password history with a glassmorphism, Matrix-style UI",
    "React + TypeScript frontend, FastAPI backend, typed REST API",
  ],
  github: "https://github.com/Amirjon06/cipherforge-password-generator",
  liveDemo: null as string | null,
};

export const inProgressProject = {
  slug: "staterelay",
  name: "StateRelay",
  tagline: "Cross-Platform Workspace Handoff Tool",
  status: "MVP · v0.1.0",
  statusBadge: "MVP · v0.1.0",
  oneLiner:
    "A cross-platform Go/TypeScript workspace handoff system that securely captures, transfers, and restores Git, editor, terminal, and browser context between machines.",
  problem:
    "Developers constantly switch machines — desk, laptop, home — and lose context every time: which branch was active, what was uncommitted, which files and tabs were open, where the terminal was, what was in the browser.",
  vision:
    "StateRelay is a cross-platform workspace handoff tool for developers. It captures the working state around a Git repository — branch, commit, uncommitted file snapshots, editor context, terminal directories, and browser URLs — and moves it to another machine, so switching computers doesn't mean rebuilding your whole development context by hand.",
  plannedStack: ["Go", "TypeScript", "Git", "SQLite", "mDNS", "TLS / mutual TLS", "Ed25519", "GitHub Actions"],
  challenges: [
    "Capturing a coherent snapshot of workspace state across Git, editor, terminal, and browser without a running background service",
    "Verifying session integrity end-to-end — SHA-256 content checks plus Ed25519-signed sessions from trusted device identities",
    "Local network transfer and zero-configuration device discovery via mDNS, with optional mutual TLS for trusted devices",
    "Restoring safely: dry-run previews and conflict protection so a restore never silently overwrites local changes",
  ],
  diagrams: [
    {
      title: "Capture & Transfer",
      description: "How a workspace session is captured, signed, and sent to a paired device.",
      mermaid: `flowchart LR
  A["Go CLI: capture"] --> B["JSON Session File"]
  B --> C["SHA-256 Content Check"]
  C --> D["Ed25519 Signing"]
  D --> E["mDNS Discovery"]
  E --> F["HTTP/HTTPS + optional mTLS"]
  F --> G["Receiver: listen"]`,
    },
    {
      title: "Restore",
      description: "How a received session is validated and applied on the target machine.",
      mermaid: `flowchart LR
  A["SQLite Handoff History"] --> B["Go CLI: restore"]
  B --> C["Dry-Run Preview"]
  C --> D["Conflict Check"]
  D --> E["Apply to Workspace"]
  F["VS Code Extension"] --> E`,
    },
  ],
  roadmap: [
    { item: "Go CLI: capture / restore / send / listen / device trust", done: true },
    { item: "JSON session files with SHA-256 integrity checks", done: true },
    { item: "Ed25519-signed sessions from trusted device identities", done: true },
    { item: "mDNS device discovery + optional mutual TLS", done: true },
    { item: "SQLite handoff history, dry-run restore, conflict protection", done: true },
    { item: "VS Code extension for editor state capture/restore", done: true },
    { item: "Background service", done: false },
    { item: "Desktop UI", done: false },
    { item: "Deeper editor/browser integrations", done: false },
  ],
  github: "https://github.com/Amirjon06/handoff-dev",
};

export const ghostMirrorProject = {
  slug: "ghostmirror",
  name: "GhostMirror",
  tagline: "Local-First Developer Activity Dashboard",
  status: "Completed",
  oneLiner:
    "A local-first developer memory engine combining FastAPI, SQLite FTS5, and local semantic embeddings to capture and search developer activity.",
  problem:
    "Developers lose context constantly — across terminals, notes, browser tabs, files, and coding sessions — making it hard to recall what was done, why, or where things were left off, without sending activity data to the cloud.",
  challenges: [
    "Indexing developer events with both keyword (FTS5) and local semantic search, entirely on-device",
    "Getting natural-language retrieval fast without relying on an external model provider",
    "Building a local-first architecture — FastAPI + SQLite — that works fully offline with no data leaving the machine",
    "Packaging the same codebase as both a browser dashboard and a Tauri desktop app",
  ],
  solution:
    "A local-first memory engine: a FastAPI backend persists structured events (clipboard and filesystem snapshots) to SQLite via SQLAlchemy, indexes them with SQLite FTS5 for keyword search, and layers a local deterministic embedding pipeline on top for semantic search — all exposed through a React + TypeScript dashboard, and packaged as a native macOS app via Tauri.",
  stack: ["React", "TypeScript", "FastAPI", "Python", "SQLite", "Tauri", "SQLAlchemy", "SQLite FTS5"],
  architectureNote:
    "The React/TypeScript dashboard (Vite, Tailwind, Zustand, TanStack Query) talks to a FastAPI service over REST. SQLAlchemy persists events to SQLite, which is also indexed with FTS5 for keyword search; a local embedding pipeline stored alongside it powers semantic search without calling out to an external model provider. Clipboard and filesystem watchers feed events in continuously, and the same web build ships as a Tauri desktop app.",
  mermaid: `flowchart LR
  A["Clipboard / Filesystem Watchers"] --> B["FastAPI Service"]
  B --> C["SQLAlchemy + SQLite"]
  C --> D["SQLite FTS5 Keyword Index"]
  C --> E["Local Embedding Pipeline"]
  D --> F["React + TypeScript Dashboard"]
  E --> F
  F --> G["Tauri Desktop App"]`,
  highlights: [
    "Local-first — no data leaves the device, no external model provider",
    "Keyword search (SQLite FTS5) plus local semantic search over stored events",
    "Ships as both a browser dashboard and a packaged Tauri desktop app for macOS",
    "Backed by pytest, Vitest, and Playwright test suites with CI via GitHub Actions",
  ],
  github: "https://github.com/Amirjon06/GhostMirror",
  liveDemo: null as string | null,
};

export const patientVoiceBotProject = {
  slug: "patient-voice-bot",
  name: "Patient Voice Bot",
  tagline: "Real-Time AI Voice Agent Tester",
  status: "Completed",
  oneLiner:
    "A real-time voice agent that simulates patient calls to stress-test scheduling and QA workflows.",
  problem:
    "Testing conversational AI voice agents against realistic patient scenarios — scheduling, insurance questions, edge cases — is normally a slow, manual process requiring a human to place and evaluate every test call.",
  challenges: [
    "Streaming low-latency audio between Twilio Media Streams and the OpenAI Realtime API over WebSockets",
    "Keeping call transcripts synchronized with audio in real time",
    "Designing prompt-driven scenarios that reliably cover scheduling, insurance, and edge-case conversations",
  ],
  solution:
    "A real-time voice agent integrating Twilio Media Streams, the OpenAI Realtime API, and WebSockets to run low-latency conversational calls, paired with 10+ prompt-driven patient scenarios that capture end-to-end call flows for automated QA review.",
  stack: ["Python", "FastAPI", "OpenAI Realtime API", "Twilio API", "WebSockets"],
  architectureNote:
    "A FastAPI service bridges Twilio Media Streams and the OpenAI Realtime API over WebSockets, handling bidirectional audio streaming and resolving transcript synchronization between the two. Prompt-driven scenario definitions drive simulated patient calls end-to-end, capturing full call flows for QA review.",
  mermaid: `flowchart LR
  A["Twilio Media Streams"] -->|"WebSockets"| B["FastAPI Bridge"]
  B -->|"Realtime Audio"| C["OpenAI Realtime API"]
  C --> B
  B --> D["Transcript Sync"]
  D --> E["Scenario-Driven Call Flows"]
  E --> F["QA Review"]`,
  highlights: [
    "Real-time, low-latency conversational calls over Twilio + OpenAI Realtime API",
    "10+ prompt-driven patient scenarios covering scheduling, insurance, and edge cases",
    "~80% reduction in manual QA validation effort",
    "Resolved transcript synchronization issues between audio and text streams",
  ],
  github: "https://github.com/Amirjon06",
  liveDemo: null as string | null,
};

export const sev0Project = {
  slug: "sev0",
  name: "sev0",
  tagline: "Autonomous AI Incident Investigation & Repair System",
  status: "Alpha",
  oneLiner:
    "An autonomous AI incident investigation and repair system that coordinates 16 diagnostic tools across observability, Git, and runtime state to identify root causes and safely verify fixes.",
  problem:
    "Diagnosing a production incident means reading metrics, logs, and git history to find a root cause, then verifying a fix actually works before anyone trusts it — a slow, manual process even for an experienced on-call engineer.",
  challenges: [
    "Orchestrating 16 diagnostic tools across Prometheus, Loki, Git, and Docker to trace a failure to its root-cause service, file, symbol, and introducing commit",
    "Reproducing a failure before trusting a patch that claims to fix it, rather than accepting green tests as sufficient",
    "Building a 4-service incident lab with 23 fault scenarios — including adversarial and silent failures — to actually evaluate root-cause accuracy",
    "Enforcing sandbox isolation, patch size limits, and protected paths in code rather than in the prompt",
  ],
  solution:
    "An autonomous AI software engineer that reads metrics and logs to find what broke and when, reads git history around that moment, forms and tests hypotheses by executing code inside an isolated Docker sandbox, and only proposes a patch after reproducing the failure it claims to fix. A verified fix opens as a draft pull request — never merged automatically.",
  stack: ["Python", "Anthropic API", "FastAPI", "PostgreSQL", "Docker", "Prometheus", "Loki"],
  architectureNote:
    "A hand-rolled tool-calling loop against the Anthropic Messages API drives 16 tools across four stages: collect (Prometheus/Loki metrics and logs), retrieve (git history and symbol-level code reading), experiment (hypotheses tested by execution in a networkless Docker sandbox), and repair (patch applied to a throwaway copy, verified against the real test suite, opened as a draft PR only if the failure reproduced and the fix held). Incident Lab — a real 4-service storefront with 23 fault scenarios — provides ground truth the agent can't read, used to benchmark diagnostic accuracy across ablations.",
  mermaid: `flowchart LR
  A["Prometheus + Loki"] --> B["Collect: Onset Detection"]
  B --> C["Retrieve: Git History + Symbols"]
  C --> D["Experiment: Sandboxed Hypothesis Testing"]
  D --> E["Repair: Patch + Verify"]
  E --> F["Draft Pull Request"]`,
  highlights: [
    "16 diagnostic tools across observability, git history, code retrieval, execution, and reasoning",
    "4-service Incident Lab with 23 fault scenarios, including adversarial and silent-failure cases",
    "Reproduces failures before trusting a patch, and reports regressions separately from fixes",
    "Sandboxed execution, patch size limits, and protected paths enforced in code — draft PRs only, nothing merges automatically",
  ],
  github: "https://github.com/Amirjon06/sev0",
  liveDemo: null as string | null,
};

export const projects = [sev0Project, inProgressProject, ghostMirrorProject, featuredProject, patientVoiceBotProject];

// Skills — all technologies grouped by category.
export const skills = [
  // ── Languages ──────────────────────────────────────────────────────────────
  {
    name: "JavaScript",
    category: "Languages",
    level: "Proficient",
    description:
      "Used for frontend interactivity, monitoring dashboards, and general scripting alongside Python.",
    usedIn: ["Sound of Earth dashboards", "CipherForge"],
  },
  {
    name: "TypeScript",
    category: "Languages",
    level: "Proficient",
    description:
      "Frontend applications, developer tooling, state management, and typed application interfaces.",
    usedIn: ["StateRelay", "CipherForge", "This portfolio"],
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    description:
      "Backend services, automation, AI/LLM pipelines, observability tooling, and developer systems.",
    usedIn: ["Boardwalk Labs", "sev0", "GhostMirror"],
  },
  {
    name: "C++",
    category: "Languages",
    level: "Familiar",
    description:
      "Programming, data structures, algorithms, and systems fundamentals through coursework and technical practice.",
    usedIn: ["Coursework"],
  },
  {
    name: "Go",
    category: "Languages",
    level: "Proficient",
    description:
      "Systems and networking work, including StateRelay's cross-platform capture/restore and secure peer-to-peer transfer.",
    usedIn: ["StateRelay"],
  },
  {
    name: "Dart",
    category: "Languages",
    level: "Working knowledge",
    description:
      "Flutter application development and reusable cross-platform UI components.",
    usedIn: ["Boardwalk Labs / OctoPilot AI"],
  },
  {
    name: "SQL",
    category: "Languages",
    level: "Proficient",
    description:
      "Relational data modeling, queries, migrations, and application persistence with PostgreSQL and SQLite.",
    usedIn: ["Sound of Earth", "GhostMirror"],
  },
  // ── Frontend ───────────────────────────────────────────────────────────────
  {
    name: "React",
    category: "Frontend",
    level: "Proficient",
    description:
      "Primary frontend framework for building component-based, interactive UIs.",
    usedIn: ["CipherForge", "GhostMirror", "This portfolio"],
  },
  {
    name: "Flutter",
    category: "Frontend",
    level: "Proficient",
    description:
      "Reusable UI component engine and persistent theming across a production AI app.",
    usedIn: ["Boardwalk Labs / OctoPilot AI"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Proficient",
    description:
      "Utility-first styling for building consistent, responsive interfaces quickly.",
    usedIn: ["CipherForge", "GhostMirror", "This portfolio"],
  },
  {
    name: "Responsive UI Design",
    category: "Frontend",
    level: "Proficient",
    description:
      "Building layouts that work across mobile, tablet, and desktop using fluid grids and media queries.",
    usedIn: ["CipherForge", "This portfolio"],
  },
  // ── Backend ────────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    category: "Backend",
    level: "Working knowledge",
    description:
      "JavaScript runtime for server-side logic and build tooling.",
    usedIn: ["Coursework", "Personal projects"],
  },
  {
    name: "FastAPI",
    category: "Backend",
    level: "Proficient",
    description:
      "Typed, high-performance REST APIs and services — the backend framework behind sev0's target application, GhostMirror, and CipherForge.",
    usedIn: ["sev0", "Boardwalk Labs", "GhostMirror", "CipherForge"],
  },
  {
    name: "RESTful API Development",
    category: "Backend",
    level: "Proficient",
    description:
      "Designing and consuming REST APIs that connect React frontends to Python or Node backends.",
    usedIn: ["CipherForge", "Sound of Earth"],
  },
  {
    name: "WebSockets",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Real-time bidirectional audio and data streaming.",
    usedIn: ["Patient Voice Bot"],
  },
  {
    name: "Backend Architecture",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Designing scalable backend systems, service boundaries, API layers, and data flow patterns.",
    usedIn: ["Coursework", "Personal projects"],
  },
  // ── Databases ──────────────────────────────────────────────────────────────
  {
    name: "SQLite",
    category: "Databases",
    level: "Proficient",
    description:
      "Local-first persistence with full-text search for on-device applications.",
    usedIn: ["StateRelay", "GhostMirror"],
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Proficient",
    description:
      "Relational data persistence and migrations for production backend services.",
    usedIn: ["Sound of Earth", "sev0"],
  },
  {
    name: "Supabase",
    category: "Databases",
    level: "Working knowledge",
    description:
      "Managed Postgres and PostgREST-backed data migration and access for web/mobile clients.",
    usedIn: ["Sound of Earth"],
  },
  {
    name: "SQLAlchemy",
    category: "Databases",
    level: "Working knowledge",
    description:
      "Python ORM and migrations (with Alembic) for structured, persisted application data.",
    usedIn: ["GhostMirror"],
  },
  // ── Cloud & DevOps ─────────────────────────────────────────────────────────
  {
    name: "Docker",
    category: "Cloud & DevOps",
    level: "Working knowledge",
    description:
      "Containerizing development and CI/CD environments for consistent, reproducible builds.",
    usedIn: ["Sound of Earth CI/CD pipeline"],
  },
  {
    name: "GitHub Actions",
    category: "Cloud & DevOps",
    level: "Proficient",
    description:
      "Automated multi-environment deployment pipelines.",
    usedIn: ["Sound of Earth"],
  },
  {
    name: "Linux",
    category: "Cloud & DevOps",
    level: "Working knowledge",
    description:
      "Primary environment for containerized services, shell scripting, and deployment pipelines.",
    usedIn: ["Sound of Earth CI/CD pipeline"],
  },
  {
    name: "CI/CD Pipelines",
    category: "Cloud & DevOps",
    level: "Proficient",
    description:
      "Designing automated test and release pipelines using GitHub Actions to reduce production regressions.",
    usedIn: ["Sound of Earth"],
  },
  {
    name: "Prometheus",
    category: "Cloud & DevOps",
    level: "Working knowledge",
    description:
      "Metrics collection and onset detection for observability-driven incident response.",
    usedIn: ["sev0"],
  },
  {
    name: "Loki",
    category: "Cloud & DevOps",
    level: "Working knowledge",
    description:
      "Log aggregation and querying alongside Prometheus for full observability coverage.",
    usedIn: ["sev0"],
  },
  // ── Tools ──────────────────────────────────────────────────────────────────
  {
    name: "Git",
    category: "Tools",
    level: "Proficient",
    description:
      "Version control and Git-based release workflows for solo and team projects.",
    usedIn: ["Sound of Earth", "CipherForge", "GhostMirror", "sev0"],
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Proficient",
    description:
      "Remote repository hosting, pull requests, Actions workflows, and project management.",
    usedIn: ["Sound of Earth", "CipherForge", "GhostMirror"],
  },
  {
    name: "Tauri",
    category: "Tools",
    level: "Working knowledge",
    description:
      "Packaging web apps as native desktop applications.",
    usedIn: ["GhostMirror"],
  },
  {
    name: "mDNS",
    category: "Tools",
    level: "Working knowledge",
    description:
      "Zero-configuration local network device discovery for peer-to-peer transfer.",
    usedIn: ["StateRelay"],
  },
  {
    name: "TLS / mTLS",
    category: "Tools",
    level: "Working knowledge",
    description:
      "Transport security and mutual authentication for trusted device-to-device transfer.",
    usedIn: ["StateRelay"],
  },
];

export const leadership = [
  {
    org: "AI, Coding, and Systems (ACS) Club",
    role: "Founder & President",
    dates: "March 2026 – Present",
    description:
      "Founded a student technology organization focused on applied AI and software engineering — setting technical direction, running project sprints, and building a peer-mentorship structure from the ground up.",
  },
  {
    org: "Student Government Association",
    role: "Legislative Committee Senator",
    dates: "October 2025 – Present",
    description:
      "Represent the student body on the Legislative Committee — reviewing policy proposals and advocating for student interests in governance decisions.",
  },
  {
    org: "Kingsborough Community College",
    role: "Student Ambassador",
    dates: "December 2025 – Present",
    description:
      "Represent the college to prospective students and visitors — communicating program offerings and helping new students navigate their transition into college.",
  },
];