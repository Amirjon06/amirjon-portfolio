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
  "Building intelligent tools, scalable web systems, and reliable developer experiences.",
];

// Cycling phrases for hero typing animation — loops forever.
export const heroCyclePhrases = [
  "Hello, World.",
  "I'm Amirjon Abdunayimov",
  "Software Engineer.",
  "Full-Stack Developer.",
  "Building AI-Powered Applications.",
  "Creating Scalable Web Systems.",
  "Cloud & DevOps Enthusiast.",
  "Open Source Learner.",
];

export const about = {
  paragraphs: [
    "I build software across full-stack applications, cloud infrastructure, and AI-powered tools — with a focus on reliable systems, clean interfaces, and production-ready workflows.",
    "Currently interning at Sound of Earth in DevOps & Cloud Infrastructure and contributing to Doc Oct at Boardwalk Labs, an AI-powered writing platform. I’m also an incoming CS/Math student at NYU Tandon and a CS/Math tutor at Kingsborough, supporting 50+ students.",
    "I founded the AI, Coding, and Systems Club, serve as a Student Government Senator, and work as a Student Ambassador, combining technical execution with leadership, mentorship, and campus impact.",
  ],
  education: [
    {
      school: "New York University — Tandon School of Engineering",
      degree: "B.S. in Computer Science",
      meta: "Incoming Transfer Student · Expected May 2028",
      honors: [],
      courses: [],
    },
    {
      school: "Kingsborough Community College",
      degree: "Associate Degree in Computer Science",
      meta: "09/2024 – 07/2026",
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
    { value: "3", label: "Active roles" },
  ],
};

export const experience = [
  {
    company: "Sound of Earth",
    role: "DevOps & Cloud Infrastructure Intern",
    location: "Remote",
    dates: "May 2026 – Present",
    summary:
      "Working on the infrastructure side of a climate-data platform — containerized environments, CI/CD pipelines, and monitoring for data pipeline services.",
    bullets: [
      "Set up a containerized development and CI/CD workflow using Docker, GitHub Actions, and Linux to standardize how services are built, tested, and deployed.",
      "Built real-time monitoring dashboards for climate data pipelines using JavaScript and Python, giving the team visibility into pipeline health across services.",
      "Added automated testing and Git-based release pipelines to the deployment workflow to make releases more repeatable and easier to review.",
    ],
    tags: ["Docker", "GitHub Actions", "Linux", "Python", "JavaScript", "CI/CD"],
    logo: "/images/logos/sound-of-earth.png",
  },
  {
    company: "Octopilot AI",
    role: "AI Ambassador Intern",
    location: "Remote",
    dates: "May 2026 – Present",
    summary:
      "Evaluating AI-powered automation features and feeding findings back into product decisions for an agent-driven automation platform.",
    bullets: [
      "Tested and evaluated AI-powered workflow automation features across agent-driven systems, documenting usability issues and edge cases.",
      "Researched competing AI platforms and summarized findings for the product team to inform prioritization and UX decisions.",
      "Contributed feedback to LLM-powered automation features focused on scalability and real-world business use cases.",
    ],
    tags: ["LLMs", "Agent Systems", "Automation", "Product Research"],
    logo: "/images/logos/octopilot-ai.png",
  },
  {
    company: "Kingsborough Community College Learning Center",
    role: "Computer Science & Mathematics Tutor",
    location: "Brooklyn, NY",
    dates: "May 2026 – Present",
    summary:
      "One-on-one and small-group tutoring across core CS and math courses, focused on building durable problem-solving skills rather than just answers.",
    bullets: [
      "Tutor students in Calculus I & II, Data Structures & Algorithms, Intro to Computer Science, Algebra, and Pre-Calculus.",
      "Walk students through debugging, algorithmic thinking, and programming fundamentals at their own pace.",
      "Break down complex technical and mathematical concepts into explanations suited to each student's learning style.",
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
  slug: "ghostmirror",
  name: "GhostMirror",
  tagline: "Local-First AI Memory Engine",
  status: "In Active Development",
  statusBadge: "In Active Development",
  oneLiner:
    "A local-first memory engine for developers — concept, architecture, and roadmap, currently being built.",
  problem:
    "Developers lose context constantly — across terminals, notes, browser tabs, files, and coding sessions — making it hard to recall what was done, why, or where things were left off.",
  vision:
    "Build a local-first AI memory engine that automatically captures and organizes developer activity, enabling natural-language recall of previous work — entirely on-device, with no data leaving the user's machine.",
  plannedStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "SQLite", "Tauri", "Embeddings", "Semantic Search"],
  challenges: [
    "Designing a local-first architecture that works fully offline",
    "Privacy-preserving storage of clipboard and filesystem activity",
    "Building reliable, low-overhead event collection pipelines",
    "Semantic retrieval and memory organization over unstructured activity logs",
    "Performance optimization for continuous background indexing",
  ],
  diagrams: [
    {
      title: "System Overview",
      description: "How the desktop shell, backend service, and storage layer are planned to fit together.",
      mermaid: `flowchart LR
  A["Tauri Desktop Shell"] --> B["React + TypeScript UI"]
  B --> C["FastAPI Local Service"]
  C --> D["SQLite Storage"]
  C --> E["Background Watchers"]`,
    },
    {
      title: "Data Flow",
      description: "Planned flow from raw activity capture to searchable memory.",
      mermaid: `flowchart LR
  A["Clipboard / Filesystem Events"] --> B["Event Collection Pipeline"]
  B --> C["SQLite Persistence"]
  C --> D["Embedding Pipeline (Planned)"]
  D --> E["Semantic Search Index (Planned)"]
  E --> F["Natural-Language Recall UI"]`,
    },
    {
      title: "Component Architecture",
      description: "Major components and their planned responsibilities.",
      mermaid: `flowchart TB
  subgraph Desktop App
    UI["Dashboard UI (React)"]
    Search["Search and Recall View"]
  end
  subgraph Local Backend
    API["FastAPI Service"]
    Watchers["Background Watchers"]
    DB["SQLite"]
    Embed["Embedding Service (Planned)"]
  end
  UI --> API
  Search --> API
  API --> Watchers
  API --> DB
  API --> Embed
  Embed --> DB`,
    },
  ],
  roadmap: [
    { item: "Project concept", done: true },
    { item: "Repository created", done: true },
    { item: "Architecture planning", done: true },
    { item: "Event collection engine", done: false },
    { item: "SQLite persistence layer", done: false },
    { item: "Dashboard interface", done: false },
    { item: "Search engine", done: false },
    { item: "Embedding pipeline", done: false },
    { item: "Semantic retrieval", done: false },
    { item: "Public release", done: false },
  ],
  github: "https://github.com/Amirjon06",
};

export const projects = [featuredProject, inProgressProject];

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
      "Default language for frontend and tooling work — type-safe components, APIs, and shared data models.",
    usedIn: ["CipherForge", "GhostMirror (planned)", "This portfolio"],
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    description:
      "Used for backend services, automation scripts, and data-pipeline monitoring tools.",
    usedIn: ["Sound of Earth dashboards", "CipherForge backend", "GhostMirror (planned)"],
  },
  {
    name: "C++",
    category: "Languages",
    level: "Familiar",
    description:
      "Systems-level programming language studied through coursework; used for data structures and algorithms.",
    usedIn: ["Coursework"],
  },
  {
    name: "PHP",
    category: "Languages",
    level: "Familiar",
    description:
      "Server-side scripting language used for dynamic web applications and backend development.",
    usedIn: ["Coursework", "Personal projects"],
  },
  // ── Frontend ───────────────────────────────────────────────────────────────
  {
    name: "React",
    category: "Frontend",
    level: "Proficient",
    description:
      "Primary frontend framework for building component-based, interactive UIs.",
    usedIn: ["CipherForge", "GhostMirror (planned)", "This portfolio"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Proficient",
    description:
      "Utility-first styling for building consistent, responsive interfaces quickly.",
    usedIn: ["CipherForge", "GhostMirror (planned)", "This portfolio"],
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
      "JavaScript runtime for server-side logic, build scripts, and Express-based services.",
    usedIn: ["Coursework", "Personal projects"],
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Minimal Node.js web framework for building REST APIs and middleware pipelines.",
    usedIn: ["Coursework", "Personal projects"],
  },
  {
    name: "FastAPI",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Python framework for building typed, high-performance REST APIs.",
    usedIn: ["CipherForge backend", "GhostMirror (planned)"],
  },
  {
    name: "Django",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Python web framework for building secure, scalable full-stack applications.",
    usedIn: ["Coursework", "Personal projects"],
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
    name: "Backend Architecture",
    category: "Backend",
    level: "Working knowledge",
    description:
      "Designing scalable backend systems, service boundaries, API layers, and data flow patterns.",
    usedIn: ["Coursework", "Personal projects"],
  },
  // ── Databases ──────────────────────────────────────────────────────────────
  {
    name: "SQL",
    category: "Databases",
    level: "Working knowledge",
    description:
      "Relational data modeling and querying — including SQLite for local-first storage.",
    usedIn: ["GhostMirror (planned)"],
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Working knowledge",
    description:
      "Open-source relational database used for production backend data persistence.",
    usedIn: ["Coursework", "Personal projects"],
  },
  {
    name: "MySQL",
    category: "Databases",
    level: "Working knowledge",
    description:
      "Relational database used in web application coursework and backend projects.",
    usedIn: ["Coursework"],
  },
  {
    name: "MongoDB",
    category: "Databases",
    level: "Familiar",
    description:
      "Document-oriented NoSQL database for flexible, schema-less data storage.",
    usedIn: ["Coursework", "Personal projects"],
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
    level: "Working knowledge",
    description:
      "Designing automated test and release pipelines using GitHub Actions to reduce production bugs.",
    usedIn: ["Sound of Earth"],
  },
  // ── Tools ──────────────────────────────────────────────────────────────────
  {
    name: "Git",
    category: "Tools",
    level: "Proficient",
    description:
      "Version control and Git-based release workflows for solo and team projects.",
    usedIn: ["Sound of Earth", "CipherForge", "GhostMirror"],
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
    name: "Postman",
    category: "Tools",
    level: "Working knowledge",
    description:
      "API testing, documentation, and debugging for REST endpoints during development.",
    usedIn: ["CipherForge", "Personal projects"],
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