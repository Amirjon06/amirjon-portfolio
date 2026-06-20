# Amirjon Abdunayimov — Portfolio

A production-grade, interactive 3D developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, and Mermaid.js.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll/page animation
- **React Three Fiber / drei / three.js** for the 3D developer desk scene (lazy-loaded, client-only)
- **Mermaid.js** for project architecture diagrams (lazy-loaded)
- **@vercel/analytics** for visitor analytics
- **next/font** (Space Grotesk, Inter, JetBrains Mono)

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, <Analytics/>
    page.tsx           # assembles all sections
    sitemap.ts
    api/contact/route.ts  # contact form handler
    globals.css
  components/
    Nav.tsx
    Hero.tsx           # typing animation + 3D desk
    About.tsx
    Experience.tsx
    Projects.tsx       # case-study cards + Mermaid diagrams
    Skills.tsx         # interactive tilt badges
    Leadership.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
    SectionHeading.tsx
    Mermaid.tsx
    3d/DeskScene.tsx   # R3F scene, dynamically imported (ssr: false)
  data/
    content.ts         # ALL resume copy lives here — edit this file to update content
  lib/
    useTypingSequence.ts
public/
  images/profile.png   # your headshot
  resume/Amirjon_Abdunayimov_Resume.pdf
  robots.txt
```

## 1. Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Updating content

Everything text-based — your bio, experience bullets, project case studies, skills, leadership, blog placeholders, contact links — lives in **`src/data/content.ts`**. Edit that one file to update copy across the whole site.

## 3. Replacing your photo & resume

- **Photo**: replace `public/images/profile.png` with your headshot (square works best, ~800x800px). The current file is your uploaded image — swap it any time, the `<Image>` component (`src/components/Hero.tsx`) will pick up the new file automatically.
- **Resume**: replace `public/resume/Amirjon_Abdunayimov_Resume.pdf` with an updated PDF (keep the same filename, or update `profile.resumeFile` in `src/data/content.ts`).
- **OG image** (optional, for social link previews): add `public/images/og-image.png` (1200x630px).

## 4. Adding GitHub project links / live demos

In `src/data/content.ts`, each entry in the `projects` array has a `github` field. Update it to the exact repo URL:

```ts
github: "https://github.com/Amirjon06/your-repo-name",
```

To add a live demo button, add a `liveUrl` field to the project object and render an extra link in `src/components/Projects.tsx` next to the "Code" button.

To add project preview screenshots, drop images into `public/images/projects/` and reference them via a new `preview` field + `next/image` in `Projects.tsx`.

## 5. Architecture diagrams (Mermaid)

Each project's `mermaid` field in `content.ts` is a standard Mermaid flowchart string. Edit the diagram text directly — it renders client-side via `src/components/Mermaid.tsx`.

## 6. Analytics setup

### Vercel Analytics (default, already wired up)
No configuration needed — once deployed to Vercel, visit your project's **Analytics** tab to see visitor count, pages viewed, device type, country/city-level location, and referrers.

### Google Analytics (optional, additional)
1. Create a GA4 property and copy its Measurement ID (`G-XXXXXXXXXX`).
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. In `src/app/layout.tsx`, add a `<Script>` tag (see comment block already in that file) loading `https://www.googletagmanager.com/gtag/js?id=...`.

> Note: analytics will show aggregate, anonymized visitor data (page views, location at country/city level, device, referrer). You will only learn a visitor's identity if they submit the contact form.

## 7. Contact form

The form posts to `src/app/api/contact/route.ts`, which currently logs submissions to the server console (visible in Vercel's function logs). To receive emails:

1. `npm install resend`
2. Add `RESEND_API_KEY` to your Vercel project's environment variables.
3. Uncomment the Resend block in `src/app/api/contact/route.ts`.

Alternatively, swap in a database (Vercel Postgres/Supabase) or a third-party form service (Formspree, Getform) — see comments in that file.

## 9. Private analytics dashboard (`/dashboard`)

A password-protected dashboard at `/dashboard` shows total/unique/returning visitors, resume downloads, GitHub/LinkedIn clicks, contact submissions, most-viewed project, a 14-day traffic chart, traffic sources, device types, approximate locations, and a recent activity feed — all built with Recharts.

**Setup:**
1. Set `ANALYTICS_PASSWORD` in your environment variables (Vercel project settings -> Environment Variables). This is the only password — there's no separate user system.
2. (Recommended for production) Create a free [Upstash](https://upstash.com) Redis database and add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. Without these, events are stored in-memory and may not persist across serverless instances/deploys on Vercel.
3. Visit `/dashboard`, enter the password, and view live stats.

**How it works:** `src/lib/analytics.ts` posts events (page views, resume downloads, link clicks, project views, contact submissions) to `/api/track`, which records them via `src/lib/store.ts`. `/api/analytics` checks the password and returns aggregated stats via `src/lib/aggregate.ts`. The page is marked `noindex` so it won't appear in search results — for stronger protection, also consider Vercel's password-protection / access-control features at the hosting level.

## 10. Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No special build settings needed.
4. Add any environment variables from `.env.example` (optional — site works without them).
5. Deploy. Vercel Analytics will automatically start collecting data once live.
6. (Optional) Update `metadataBase` in `src/app/layout.tsx` and the sitemap URL in `src/app/sitemap.ts` and `public/robots.txt` to your real domain.

## Performance notes

- The 3D desk scene and Mermaid diagrams are dynamically imported with `ssr: false` and only hydrate client-side, keeping the initial server-rendered bundle light.
- Images use `next/image` for automatic optimization (AVIF/WebP, responsive sizes).
- `prefers-reduced-motion` is respected globally (see `globals.css`).
- Run `npm run build` and check the output, or `npx lighthouse` against a deployed URL, to verify Lighthouse scores.
