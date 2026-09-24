"use client";

import { useRef } from "react";
import SkillIcon, { getSkillAccent } from "./SkillIcon";

export default function SkillTiltCard({ name }: { name: string }) {
  const stageRef = useRef<HTMLSpanElement>(null);
  const color = getSkillAccent(name);

  function handleActivate() {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    stage.getAnimations().forEach((a) => a.cancel());
    stage.animate(
      [
        { transform: "translateY(-6px) rotateX(8deg) rotateY(10deg) rotateZ(0deg)" },
        { transform: "translateY(-9px) rotateX(8deg) rotateY(190deg) rotateZ(0deg)" },
        { transform: "translateY(-6px) rotateX(8deg) rotateY(370deg) rotateZ(0deg)" },
      ],
      { duration: 700, easing: "cubic-bezier(.2,.75,.2,1)" }
    );
  }

  return (
    <button
      type="button"
      onClick={handleActivate}
      aria-label={`${name} — tap to spin`}
      className="skill-tilt group flex min-w-0 flex-col items-center gap-2 rounded-2xl border-0 bg-transparent p-2"
      style={{ ["--skill-color" as string]: color }}
    >
      <span className="skill-tilt-stage relative flex h-16 w-full items-center justify-center sm:h-[72px]">
        <span aria-hidden className="skill-tilt-shadow" />
        <span aria-hidden className="skill-tilt-glow" />
        <span ref={stageRef} className="skill-tilt-object relative block h-11 w-11">
          <SkillIcon name={name} className="h-full w-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
        </span>
      </span>
      <span className="w-full whitespace-normal text-center text-xs font-medium leading-5 text-muted transition-colors [overflow-wrap:anywhere] group-hover:text-ink group-focus-visible:text-ink">
        {name}
      </span>

      <style jsx>{`
        .skill-tilt-stage {
          perspective: 500px;
          isolation: isolate;
        }
        .skill-tilt-shadow {
          position: absolute;
          width: 44px;
          height: 10px;
          bottom: 2px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.45);
          filter: blur(4px);
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .skill-tilt-glow {
          position: absolute;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: var(--skill-color);
          opacity: 0;
          filter: blur(22px);
          z-index: -1;
          transition: opacity 220ms ease;
        }
        .skill-tilt-object {
          transform-style: preserve-3d;
          transform: translateY(0) rotateX(10deg) rotateY(-16deg) rotateZ(-4deg);
          transition: transform 220ms ease;
          will-change: transform;
        }
        .group:hover .skill-tilt-object,
        .group:focus-visible .skill-tilt-object {
          transform: translateY(-6px) rotateX(8deg) rotateY(10deg) rotateZ(0deg);
        }
        .group:hover .skill-tilt-glow,
        .group:focus-visible .skill-tilt-glow {
          opacity: 0.22;
        }
        .group:hover .skill-tilt-shadow,
        .group:focus-visible .skill-tilt-shadow {
          opacity: 0.6;
          transform: scale(0.82);
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-tilt-object,
          .skill-tilt-shadow,
          .skill-tilt-glow {
            transition: none;
          }
        }
      `}</style>
    </button>
  );
}
