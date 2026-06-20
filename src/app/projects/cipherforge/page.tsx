"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredProject as p } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";
import SectionTheme from "@/components/SectionTheme";

const Mermaid = dynamic(() => import("@/components/Mermaid"), {
  ssr: false,
  loading: () => <div className="h-32 rounded-lg border border-white/5 bg-surface/40" />,
});

export default function CipherForgePage() {
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
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{p.name}</h1>
          <span className="rounded-full border border-signal/30 px-3 py-1 font-mono text-xs uppercase tracking-wider text-signal">
            {p.status}
          </span>
        </div>
        <p className="mt-3 text-lg text-muted">{p.tagline}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex gap-4">
          {p.liveDemo && (
            <a
              href={p.liveDemo}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("project_view", { project: p.slug, type: "live_demo" })}
              className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("github_click", { source: "project_cipherforge" })}
            className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
          >
            <Github size={15} /> Source code <ArrowUpRight size={12} />
          </a>
        </div>
      </Reveal>

      <div className="mt-16 space-y-14">
        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Problem</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{p.problem}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Challenges</h2>
            <ul className="mt-3 space-y-2">
              {p.challenges.map((c, idx) => (
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
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Solution</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{p.solution}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Architecture</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{p.architectureNote}</p>
            <div className="mt-4">
              <Mermaid chart={p.mermaid} id={`mermaid-${p.slug}`} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">Highlights</h2>
            <ul className="mt-3 space-y-2">
              {p.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </main>
    </SectionTheme>
  );
}
