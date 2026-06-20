"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCES } from "./experienceData";
import ConstellationNode from "./ConstellationNode";

export default function CareerConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-driven progress — scoped to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 18 });

  // IntersectionObserver: track which node is active
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-constellation-node]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.constellationNode);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* ── Desktop center spine track ──────────────────────────── */}
      <div
        ref={spineRef}
        className="pointer-events-none absolute hidden md:block"
        style={{ left: "calc(50% - 0.5px)", width: "1px", top: "5rem", bottom: "3rem" }}
      >
        {/* Static track */}
        <div className="absolute inset-0 bg-white/[0.06]" />
        {/* Animated fill that grows as you scroll */}
        <motion.div
          className="absolute left-0 right-0 top-0 origin-top rounded-full"
          style={{
            scaleY,
            height: "100%",
            background:
              "linear-gradient(to bottom, #5EEAD4 0%, #c084fc 50%, #60a5fa 100%)",
            boxShadow: "0 0 8px rgba(94,234,212,0.6)",
          }}
        />
      </div>

      {/* ── Mobile left-edge spine ───────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px md:hidden">
        <div className="absolute inset-0 bg-white/5" />
        <motion.div
          className="absolute left-0 right-0 top-0 origin-top"
          style={{
            scaleY,
            height: "100%",
            background: "linear-gradient(to bottom, #5EEAD4, #c084fc, #60a5fa)",
          }}
        />
      </div>

      {/* Constellation nodes */}
      <div className="space-y-8 pl-8 md:space-y-4 md:pl-0">
        {EXPERIENCES.map((entry, i) => (
          <div key={entry.id} data-constellation-node={i}>
            <ConstellationNode
              entry={entry}
              index={i}
              isActive={activeIndex === i}
              isLeft={i % 2 === 0}
            />
          </div>
        ))}
      </div>

      {/* End cap */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #5EEAD4, #c084fc)",
              boxShadow: "0 0 16px rgba(94,234,212,0.5)",
            }}
          />
          <p className="font-mono text-xs text-muted">More experience incoming</p>
        </div>
      </motion.div>
    </div>
  );
}