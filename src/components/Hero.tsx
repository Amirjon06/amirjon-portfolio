"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import HeroModel from "@/components/HeroModel";

type Seg = { text: string; color?: string };

function Typed({
  segments,
  speed = 26,
  startDelay = 0,
  caret = false,
  onDone,
  className = "",
}: {
  segments: Seg[];
  speed?: number;
  startDelay?: number;
  caret?: boolean;
  onDone?: () => void;
  className?: string;
}) {
  const full = segments.map((s) => s.text).join("");
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCount(0);
    setStarted(false);
    setDone(false);

    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      setStarted(true);
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= full.length) {
          if (interval) clearInterval(interval);
          setDone(true);
          onDone && onDone();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [full, speed, startDelay]);

  const nodes: ReactNode[] = [];
  let remaining = count;
  segments.forEach((seg, idx) => {
    if (remaining <= 0) return;
    const slice = seg.text.slice(0, remaining);
    remaining -= seg.text.length;
    nodes.push(
      seg.color ? (
        <span key={idx} style={{ color: seg.color }}>
          {slice}
        </span>
      ) : (
        <span key={idx}>{slice}</span>
      )
    );
  });

  const showCaret = caret && started && !done;

  return (
    <span className={className}>
      {nodes}
      {showCaret && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.85em] w-0 border-r-2 align-[-0.1em]"
          style={{ borderColor: "var(--hex-signal, #5EEAD4)", animation: "blink 1s step-end infinite" }}
        />
      )}
      {/* invisible full text reserves height + wrapping so nothing shifts */}
      <span aria-hidden className="opacity-0">
        {full.slice(count)}
      </span>
    </span>
  );
}

export default function Home() {
  const [stage, setStage] = useState(0);

  const SIG = "var(--hex-signal, #5EEAD4)";
  const ACC = "var(--hex-accent, #F2B544)";

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-transparent">
      <div className="pointer-events-auto absolute inset-y-0 right-0 hidden w-[58%] lg:block xl:w-[60%]">
        <HeroModel className="h-full w-full" />
      </div>

      <div className="pointer-events-none relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="pointer-events-auto max-w-xl lg:max-w-[40rem]">
          {/* 1. Eyebrow */}
          <p
            className="mb-5 font-mono text-sm uppercase tracking-[0.3em] md:text-base"
            style={{ color: SIG }}
          >
            <Typed
              segments={[{ text: "Hello, World!" }]}
              speed={36}
              onDone={() => setStage((s) => Math.max(s, 1))}
            />
          </p>

          {/* 2. Name */}
          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {stage >= 1 ? (
              <Typed
                segments={[{ text: "I\u2019m Amirjon Abdunayimov" }]}
                speed={36}
                caret
                onDone={() => setStage((s) => Math.max(s, 2))}
              />
            ) : (
              <span className="opacity-0">I&rsquo;m Amirjon Abdunayimov</span>
            )}
          </h1>

          {/* 3. Subtitle (colored words type too) */}
          <p className="mt-6 max-w-xl text-lg font-medium leading-snug text-white sm:text-xl lg:text-2xl">
            {stage >= 2 ? (
              <Typed
                speed={24}
                caret
                onDone={() => setStage((s) => Math.max(s, 3))}
                segments={[
                  { text: "Software engineer building production-grade systems with " },
                  { text: "full-stack expertise", color: SIG },
                  { text: ", " },
                  { text: "AI tools", color: ACC },
                  { text: ", and " },
                  { text: "cloud infrastructure", color: SIG },
                  { text: "." },
                ]}
              />
            ) : (
              <span className="opacity-0">
                Software engineer building production-grade systems with full-stack
                expertise, AI tools, and cloud infrastructure.
              </span>
            )}
          </p>

          {/* 4. Paragraph */}
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            {stage >= 3 ? (
              <Typed
                speed={14}
                caret
                segments={[
                  {
                    text:
                      "I design and ship scalable applications, developer platforms, and AI-powered tools that solve real problems. Clean architecture, performance, and maintainability are at the core of everything I build.",
                  },
                ]}
              />
            ) : (
              <span className="opacity-0">
                I design and ship scalable applications, developer platforms, and
                AI-powered tools that solve real problems. Clean architecture,
                performance, and maintainability are at the core of everything I build.
              </span>
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] sm:text-base"
              style={{
                backgroundColor: "var(--hex-signal, #5EEAD4)",
                boxShadow: "0 12px 30px -12px rgba(var(--color-signal, 94,234,212), 0.5)",
              }}
            >
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              View Projects
            </Link>

            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("resume_download")}
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white sm:text-base"
            >
              <FileText size={16} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("github_click", { source: "hero" })}
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white sm:text-base"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("linkedin_click", { source: "hero" })}
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white sm:text-base"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40"
      >
        <ArrowDown size={18} className="animate-floaty" />
      </div>
    </section>
  );
}
