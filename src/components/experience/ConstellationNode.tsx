"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ExperienceEntry } from "./experienceData";
import SkillOrbit from "./SkillOrbit";

type Props = {
  entry: ExperienceEntry;
  index: number;
  isActive: boolean;
  isLeft: boolean;
};

function MetricPill({ metric }: { metric: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted">
      {metric}
    </span>
  );
}

export default function ConstellationNode({ entry, index, isActive, isLeft }: Props) {
  // Cards slide in from their natural side — left cards from left, right from right
  // once: false means they re-animate when scrolling back up too
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
    },
  };

  return (
    <div
      className={`relative flex items-center gap-0 py-6 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* ── Card ───────────────────────────────────────────────── */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-60px" }}
        className="w-full md:w-[calc(50%-3rem)]"
      >
        <motion.div
          animate={{
            boxShadow: isActive
              ? `0 0 0 1px ${entry.accent}33, 0 8px 48px ${entry.accentDim}, 0 0 60px ${entry.accentDim}`
              : "0 0 0 1px rgba(255,255,255,0.05)",
          }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-6 backdrop-blur-md md:p-7"
        >
          {/* Accent glow bar */}
          <motion.div
            className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl"
            animate={{
              backgroundColor: isActive ? entry.accent : "transparent",
              boxShadow: isActive ? `0 0 16px ${entry.accent}` : "none",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Header */}
          <div className="flex items-start gap-4">
            <div
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border"
              style={{ borderColor: `${entry.accent}30`, backgroundColor: `${entry.accent}0a` }}
            >
              <Image src={entry.logo} alt={entry.company} fill sizes="48px" className="object-contain p-1.5" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-semibold leading-tight text-ink md:text-xl">
                {entry.role}
              </h3>
              <p className="mt-0.5 text-sm font-medium" style={{ color: entry.accent }}>
                {entry.shortCompany}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted">{entry.dates}</span>
                <span className="font-mono text-xs text-muted/50">·</span>
                <span className="font-mono text-xs text-muted">{entry.location}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{entry.summary}</p>

          {/* Bullets */}
          <ul className="mt-4 space-y-2.5">
            {entry.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: isLeft ? -8 : 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: entry.accent, boxShadow: `0 0 6px ${entry.accent}` }}
                />
                <span>
                  {b.text}
                  {b.metric && <MetricPill metric={b.metric} />}
                </span>
              </motion.li>
            ))}
          </ul>

          <SkillOrbit skills={entry.skills} accent={entry.accent} visible={isActive} />
        </motion.div>
      </motion.div>

      {/* ── Center spine node dot ────────────────────────────────── */}
      <div className="hidden shrink-0 flex-col items-center md:flex" style={{ width: "6rem" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-bg"
          style={{ borderColor: entry.accent }}
          animate={{
            boxShadow: isActive
              ? `0 0 0 8px ${entry.accentDim}, 0 0 28px ${entry.accent}70`
              : `0 0 0 2px ${entry.accentDim}`,
          } as Record<string, string>}
        >
          <motion.div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.accent }}
            animate={{ scale: isActive ? [1, 1.4, 1] : 1 }}
            transition={{ duration: 1.5, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-3rem)]" />
    </div>
  );
}