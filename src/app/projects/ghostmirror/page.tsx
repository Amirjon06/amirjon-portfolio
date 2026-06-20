"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Github, ArrowUpRight, CheckCircle2, Circle } from "lucide-react";
import { inProgressProject as g } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";
import SectionTheme from "@/components/SectionTheme";

const Mermaid = dynamic(() => import("@/components/Mermaid"), {
  ssr: false,
  loading: () => <div className="h-32 rounded-lg border border-white/5 bg-surface/40" />,
});

export default function GhostMirrorPage() {
  return (
    <SectionTheme theme="architecture" className="min-h-screen">
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
      <Reveal>
        <Link href="/projects" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft size={14} /> Projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{g.name}</h1>
          <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
            {g.statusBadge}
          </span>
        </div>
        <p className="mt-3 text-lg text-muted">{g.tagline}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={g.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("github_click", { source: "project_ghostmirror" })}
          className="mt-6 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
        >
          <Github size={15} /> Repository <ArrowUpRight size={12} />
        </a>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-8 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-muted">
          GhostMirror does not exist as a finished product. This page describes the problem it&apos;s meant to
          solve, the planned architecture, and current progress — not completed features, metrics, or users.
        </p>
      </Reveal>

      <div className="mt-16 space-y-14">
        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Problem</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{g.problem}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Vision</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{g.vision}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Engineering Challenges</h2>
            <ul className="mt-3 space-y-2">
              {g.challenges.map((c, idx) => (
                <li key={idx} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Planned Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.plannedStack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Roadmap</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {g.roadmap.map((r) => (
                <li
                  key={r.item}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                    r.done ? "border-signal/25 text-ink" : "border-white/10 text-muted"
                  }`}
                >
                  {r.done ? <CheckCircle2 size={14} className="shrink-0 text-signal" /> : <Circle size={14} className="shrink-0 text-muted" />}
                  {r.item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Planned Architecture</h2>
            <div className="mt-4 space-y-8">
              {g.diagrams.map((d) => (
                <div key={d.title}>
                  <p className="font-display text-base font-semibold text-ink">{d.title}</p>
                  <p className="mt-1 text-sm text-muted">{d.description}</p>
                  <div className="mt-3">
                    <Mermaid chart={d.mermaid} id={`mermaid-ghostmirror-${d.title.toLowerCase().replace(/\s+/g, "-")}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
    </SectionTheme>
  );
}
