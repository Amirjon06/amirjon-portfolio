import { Code2 } from "lucide-react";
import { skills } from "@/data/content";

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#F2B544",
  Frontend: "#5EEAD4",
  Backend: "#7dd3fc",
  Databases: "#fb7185",
  "Cloud & DevOps": "#c084fc",
  Tools: "#a3e635",
};

const CATEGORIES = Array.from(new Set(skills.map((s) => s.category)));

/**
 * A self-contained, CSS-only orbiting visualization. No canvas, no fixed
 * viewport sizing — safe to drop into a normal scrolling page.
 */
export default function SkillsHero() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center md:h-[400px]">
      {/* Soft ambient glow behind the rings */}
      <div className="absolute h-56 w-56 rounded-full bg-signal/10 blur-3xl md:h-72 md:w-72" />

      {/* Rings */}
      <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10 md:h-[230px] md:w-[230px]" />
      <div className="absolute h-[250px] w-[250px] rounded-full border border-white/[0.07] md:h-[320px] md:w-[320px]" />
      <div className="absolute h-[320px] w-[320px] rounded-full border border-white/[0.05] md:h-[400px] md:w-[400px]" />

      {/* Orbiting nodes — plain glowing dots, category-colored */}
      <div className="absolute h-[180px] w-[180px] animate-orbit-fast md:h-[230px] md:w-[230px]">
        <span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[0]], boxShadow: `0 0 12px ${CATEGORY_COLORS[CATEGORIES[0]]}` }}
        />
        <span
          className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[3]], boxShadow: `0 0 10px ${CATEGORY_COLORS[CATEGORIES[3]]}` }}
        />
      </div>
      <div className="absolute h-[250px] w-[250px] animate-orbit-medium md:h-[320px] md:w-[320px]">
        <span
          className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[1]], boxShadow: `0 0 12px ${CATEGORY_COLORS[CATEGORIES[1]]}` }}
        />
        <span
          className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[4]], boxShadow: `0 0 10px ${CATEGORY_COLORS[CATEGORIES[4]]}` }}
        />
      </div>
      <div className="absolute h-[320px] w-[320px] animate-orbit-slow md:h-[400px] md:w-[400px]">
        <span
          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[2]], boxShadow: `0 0 14px ${CATEGORY_COLORS[CATEGORIES[2]]}` }}
        />
        <span
          className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full"
          style={{ backgroundColor: CATEGORY_COLORS[CATEGORIES[5]], boxShadow: `0 0 10px ${CATEGORY_COLORS[CATEGORIES[5]]}` }}
        />
      </div>

      {/* Core */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-signal/30 bg-surface/80 shadow-[0_0_40px_rgba(94,234,212,0.18)] md:h-28 md:w-28">
        <Code2 size={32} className="text-signal" />
      </div>
    </div>
  );
}