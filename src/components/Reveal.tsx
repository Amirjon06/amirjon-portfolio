"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";

const variants: Record<Variant, Variants> = {
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  "slide-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "slide-left": { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  variant = "slide-up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
