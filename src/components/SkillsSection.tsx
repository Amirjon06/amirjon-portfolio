"use client";

import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SkillTiltCard from "./SkillTiltCard";
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

const categories = CATEGORY_ORDER.filter((c) => skills.some((s) => s.category === c));

export default function SkillsSection() {
  return (
    <div className="relative">
      <SkillsBackground />

      <div className="relative z-10">
        <Reveal>
          <p className="font-display text-sm font-semibold text-signal">
            What I work with
          </p>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5 rounded-[20px] border border-white/[0.08] bg-surface/95 p-4 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.65)] sm:mt-10 sm:space-y-6 sm:p-6 lg:p-8">
          {categories.map((category, ci) => {
            const items = skills.filter((s) => s.category === category);
            const color = CATEGORY_COLORS[category] ?? "#5EEAD4";

            return (
              <Reveal key={category} delay={ci * 0.04}>
                <section
                  aria-labelledby={`skill-category-${ci}`}
                  className={ci > 0 ? "border-t border-white/[0.07] pt-5 sm:pt-6" : undefined}
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                    <h3 id={`skill-category-${ci}`} className="font-display text-base font-semibold text-ink">
                      {category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
                    {items.map((skill) => (
                      <SkillTiltCard key={skill.name} name={skill.name} />
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
