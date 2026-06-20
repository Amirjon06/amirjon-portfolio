"use client";

import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import SkillsHero from "./3d/SkillsHero";
import SkillsBackground from "./SkillsBackground";

const CATEGORY_ORDER = ["Languages", "Frontend", "Backend", "Databases", "Cloud & DevOps", "Tools"];

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#F2B544",
  Frontend: "#5EEAD4",
  Backend: "#7dd3fc",
  Databases: "#fb7185",
  "Cloud & DevOps": "#c084fc",
  Tools: "#a3e635",
};

const CATEGORY_GLOW: Record<string, string> = {
  Languages: "rgba(242,181,68,0.12)",
  Frontend: "rgba(94,234,212,0.12)",
  Backend: "rgba(125,211,252,0.12)",
  Databases: "rgba(251,113,133,0.12)",
  "Cloud & DevOps": "rgba(192,132,252,0.12)",
  Tools: "rgba(163,230,53,0.12)",
};

const categories = CATEGORY_ORDER.filter((c) => skills.some((s) => s.category === c));

const metrics = [
  { value: String(skills.length), label: "Technologies" },
  { value: String(categories.length), label: "Categories" },
  { value: String(skills.filter((s) => s.category === "Languages").length), label: "Core Languages" },
  {
    value: String(
      skills.filter((s) => s.category === "Cloud & DevOps" || s.category === "Tools").length
    ),
    label: "DevOps & Tooling",
  },
];

export default function SkillsSection() {
  return (
    <div className="relative">
      <SkillsBackground />

      <div className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
                What I work with
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
                Skills
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
                The languages, frameworks, and tools I use to design, build, and ship full-stack
                and AI-powered systems — grouped by category below.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {metrics.map((m) => (
                  <div key={m.label} className="border-l border-white/10 pl-4">
                    <p className="font-display text-3xl font-semibold text-signal md:text-4xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.1}>
            <SkillsHero />
          </Reveal>
        </div>

        <div className="mt-24 space-y-16">
          {categories.map((category, ci) => {
            const items = skills.filter((s) => s.category === category);
            const color = CATEGORY_COLORS[category] ?? "#5EEAD4";
            const glow = CATEGORY_GLOW[category] ?? "rgba(94,234,212,0.10)";

            return (
              <Reveal key={category} delay={ci * 0.04}>
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                    <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                      {category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        tabIndex={0}
                        className="group flex h-full flex-col rounded-2xl border border-white/8 bg-surface/60 p-5 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            `0 8px 32px ${glow}, 0 0 0 1px ${color}22`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-white/20"
                            style={{ color }}
                            aria-hidden
                          >
                            <SkillIcon name={skill.name} className="h-5 w-5" />
                          </span>
                          <div className="min-w-0">
                            <p className="break-words font-display text-base font-semibold leading-snug text-ink md:text-lg">
                              {skill.name}
                            </p>
                            <p className="mt-0.5 text-xs text-muted">{skill.level}</p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}