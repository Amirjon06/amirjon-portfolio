import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";

export default function ProjectsList() {
  return (
    <>
      <Reveal>
        <h2 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">Projects</h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-5 max-w-xl text-xl text-muted md:text-2xl">
          A completed case study and a project currently in active development.
        </p>
      </Reveal>

      <div className="mt-16 space-y-px">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex flex-col gap-3 border-t border-white/5 py-12 transition-colors md:flex-row md:items-baseline md:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-3xl font-semibold text-ink transition-colors group-hover:text-signal md:text-4xl">
                    {p.name}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-lg text-muted md:text-xl">{p.oneLiner}</p>
              </div>
              <ArrowUpRight size={26} className="shrink-0 text-muted transition-colors group-hover:text-signal" />
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
