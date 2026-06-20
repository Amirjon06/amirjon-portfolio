"use client";

import { motion } from "framer-motion";
import type { Skill } from "./experienceData";

/**
 * SkillOrbit.tsx
 * Renders animated floating skill badges around an experience node.
 * Uses staggered fade+slide animations triggered by parent visibility.
 */

export default function SkillOrbit({
  skills,
  accent,
  visible,
}: {
  skills: Skill[];
  accent: string;
  visible: boolean;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <motion.span
          key={skill.name}
          initial={{ opacity: 0, scale: 0.7, y: 8 }}
          animate={
            visible
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.7, y: 8 }
          }
          transition={{
            delay: visible ? i * 0.055 : 0,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs backdrop-blur-sm"
          style={{
            borderColor: `${skill.color}40`,
            backgroundColor: `${skill.color}0d`,
            color: skill.color,
          }}
        >
          {/* Skill level indicator dot */}
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 6px ${skill.color}`,
              opacity: 0.5 + skill.level * 0.5,
            }}
          />
          {skill.name}
        </motion.span>
      ))}
    </div>
  );
}