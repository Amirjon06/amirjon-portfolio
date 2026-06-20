# Amirjon Abdunayimov — Portfolio

A production-grade personal portfolio for a software engineer, built with the
Next.js App Router and TypeScript. It pairs a polished, theme-switchable marketing
site with real backend functionality: a working contact form that delivers email,
and a private, password-protected analytics dashboard that tracks visitor activity.

**Live site:** _add your deployment URL here_

---

## Overview

This repository is a single Next.js application that serves both the public-facing
portfolio and the internal tooling behind it. The public site presents an
interactive hero (a 3D logo rendered with React Three Fiber and a sequenced
typewriter), plus dedicated sections for about, experience, skills, projects, and
leadership. Behind the scenes, a lightweight analytics pipeline records page views,
resume downloads, and link clicks, and surfaces them on a gated `/dashboard`.

The goal was to build something beyond a static template — a site with genuine
moving parts (3D, animation, email delivery, first-party analytics) while keeping
the codebase clean, typed, and easy to maintain from a single content file.

## Problem it solves

Most developer portfolios are either static templates with no real functionality,
or they hand off core features (contact, analytics) to third-party embeds. This
project keeps those features first-party and under the developer's control:

- **Contact** goes through an owned API route and a transactional email provider,
  not a form-service iframe.
- **Analytics** are collected by a small internal pipeline and viewed on a private
  dashboard, instead of relying solely on an external console.
- **Content** lives in one typed file, so updating copy across the entire site is a
  single edit rather than a hunt through components.

## Key features

- **Interactive 3D hero** — a glossy extruded logo built with React Three Fiber and
  drei, with orbit controls and theme-reactive materials.
- **Sequenced typewriter** — hero text types itself on each load, with a reduced-motion-aware fallback.
- **Multi-palette theming** — multiple color themes switch live at runtime; all
  accent colors are driven by CSS variables and bound through Tailwind.
- **Parallax background** — a mouse-reactive starfield with drifting nebula layers,
  rendered on canvas.
- **Working contact form** — submissions are delivered to an inbox via Resend, with
  server-side validation and HTML/plain-text email bodies.
- **Private analytics dashboard** — a password-gated `/dashboard` showing visitor
  counts, resume downloads, link clicks, traffic over time, and a recent-activity
  feed, built with Recharts.
- **Content-driven** — all site copy (bio, experience, projects, skills, leadership)
  lives in `src/data/content.ts`.
- **SEO-ready** — metadata, Open Graph tags, a generated sitemap, and `robots.txt`.

## Architecture overview

The application uses the Next.js App Router. Pages are server components by default;
interactive pieces (3D, animation, the dashboard) are client components, and the
heaviest visuals are dynamically imported so they don't bloat the initial bundle.

Analytics flow first-party:

```
Client event (page view, resume download, link click)
        │
        ▼
src/lib/analytics.ts  ──POST──▶  /api/track  ──▶  src/lib/store.ts
                                                     │
/dashboard ──password──▶ /api/analytics ──▶ src/lib/aggregate.ts ──▶ charts
```

`src/lib/store.ts` persists events to Upstash Redis when configured, and falls back
to in-memory storage otherwise. The contact form posts to `/api/contact`, which
sends mail through Resend.

## Tech stack

| Area | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| 3D | React Three Fiber, drei, three.js |
| Smooth scroll | Lenis |
| Diagrams | Mermaid |
| Charts | Recharts |
| Email | Resend |
| Storage | Upstash Redis (optional) |
| Analytics | Vercel Analytics + first-party pipeline |
| Icons | lucide-react, react-icons |
| Fonts | Space Grotesk, Inter, JetBrains Mono (`next/font`) |

## Folder structure

```
src/
  app/
    layout.tsx            # fonts, metadata, global chrome, analytics
    page.tsx              # home page (assembles hero + sections)
    globals.css           # base styles and CSS variables
    sitemap.ts            # generated sitemap
    about/                # /about
    experience/           # /experience
    skills/               # /skills
    projects/             # /projects (+ cipherforge, ghostmirror case studies)
    leadership/           # /leadership
    contact/              # /contact
    dashboard/            # /dashboard (private, password-gated)
    api/
      contact/route.ts    # contact form handler (Resend)
      track/route.ts      # records analytics events
      analytics/route.ts  # returns aggregated stats (password-checked)
  components/
    Hero.tsx              # typewriter hero
    HeroModel.tsx         # 3D logo (React Three Fiber)
    Nav.tsx  Footer.tsx
    ScrollBackground.tsx  # parallax galaxy background
    SmoothScroll.tsx      # Lenis wrapper
    AboutContent.tsx  ExperienceTimeline.tsx  ProjectsList.tsx
    SkillsSection.tsx  SkillsBackground.tsx  SkillIcon.tsx
    ContactContent.tsx
    Mermaid.tsx           # client-side Mermaid renderer
    Reveal.tsx            # scroll-reveal animation wrapper
    SectionTheme.tsx      # per-section theme application
    PageViewTracker.tsx   # fires analytics page views
    3d/SkillsHero.tsx
    experience/           # career constellation visualization
  data/
    content.ts            # ALL site copy lives here
  lib/
    theme.ts              # palette definitions + live switching
    analytics.ts          # client event sender
    store.ts              # event persistence (Upstash Redis / in-memory)
    aggregate.ts          # turns raw events into dashboard stats
    visitor.ts  device.ts # visitor + device helpers
public/
  images/profile.png      # headshot
  images/logos/           # experience company logos
  resume/                 # resume PDF
  robots.txt
```

## Installation

Requires **Node.js 18.17+** (Next.js 14 requirement).

```bash
git clone https://github.com/Amirjon06/amirjon-portfolio.git
cd amirjon-portfolio
npm install
```

## Environment variables

All environment variables are **optional** — the site runs without them, with the
contact form and dashboard disabled or in-memory. See `.env.example`.

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Enables contact-form email delivery via Resend. |
| `ANALYTICS_PASSWORD` | Password for the private `/dashboard`. |
| `UPSTASH_REDIS_REST_URL` | Persists analytics events across deploys (recommended in production). |
| `UPSTASH_REDIS_REST_TOKEN` | Token paired with the Upstash URL. |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics (GA4) measurement ID. |

Create a `.env.local` file in the project root and add any you need:

```bash
RESEND_API_KEY=your_resend_key
ANALYTICS_PASSWORD=your_dashboard_password
```

> `.env.local` is gitignored and never committed.

## Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Restart the dev server after
adding or changing environment variables.

## Building for production

```bash
npm run build
npm run start
```

`npm run lint` runs ESLint (`eslint-config-next`).

## Deployment

The project is designed for Vercel:

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). The Next.js preset is
   auto-detected — no custom build settings are required.
3. Add any environment variables (from the table above) in the Vercel project
   settings. `RESEND_API_KEY` is required for the contact form to work in
   production; `.env.local` is not deployed.
4. Deploy. Vercel Analytics begins collecting data automatically.
5. Update `metadataBase` in `src/app/layout.tsx`, the sitemap base in
   `src/app/sitemap.ts`, and `public/robots.txt` to your real domain.

## Contact form

The contact form posts to `src/app/api/contact/route.ts`, which sends each
submission to the site owner's inbox using [Resend](https://resend.com):

1. The route validates that `name`, `email`, and `message` are present.
2. It sends a transactional email through the Resend SDK, with the visitor's email
   set as `replyTo` so replies go straight back to them.
3. The email includes both HTML and plain-text bodies, with user input
   HTML-escaped to prevent injection.

It uses Resend's shared `onboarding@resend.dev` sender, so no custom domain is
required to start. After verifying a domain in Resend, update `FROM_EMAIL` in the
route to send from your own address. If `RESEND_API_KEY` is not set, the route
returns a clear error and no mail is sent.

## Performance & design decisions

- **Heavy visuals are deferred.** The 3D scenes and Mermaid diagrams are dynamically
  imported and client-only, keeping the server-rendered bundle light.
- **Optimized images.** Images use `next/image` for automatic format selection and
  responsive sizing.
- **Single source of content.** Centralizing copy in `src/data/content.ts` keeps
  components presentational and makes updates low-risk.
- **Theme as data.** Palettes are defined in `src/lib/theme.ts` and applied through
  CSS variables, so a theme switch recolors the whole site — including 3D materials —
  without re-rendering component trees.
- **Reduced motion respected** globally via `globals.css`.
- **Privacy.** Visitor analytics are aggregated and only visible on the
  password-protected dashboard; they are never surfaced to visitors.

## Roadmap

- Verify a custom domain in Resend and send contact mail from a branded address.
- Add automated tests and a CI workflow.
- Expand the projects section with additional case studies and live demos.
- Add Open Graph preview images per page.

## License

Released under the MIT License. The personal content, résumé, headshot, and
company logos are not licensed for reuse.