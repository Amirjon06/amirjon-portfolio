"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import HeroModel from "@/components/HeroModel";


function SequentialTyped({
  lines,
  typeSpeed = 65,
  lineGapMs = 350,
}: {
  lines: { text: string; className?: string }[];
  typeSpeed?: number;
  lineGapMs?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex].text;
    let timer: ReturnType<typeof setTimeout>;

    if (text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else {
      timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setText("");
      }, lineGapMs);
    }

    return () => clearTimeout(timer);
  }, [text, lineIndex, lines, typeSpeed, lineGapMs]);

  const caret = (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[0.85em] w-0 border-r-2 align-[-0.1em]"
      style={{ borderColor: "var(--hex-signal, #5EEAD4)", animation: "blink 1s step-end infinite" }}
    />
  );

  return (
    <div className="space-y-2">
      {lines.slice(0, lineIndex).map((line, i) => (
        <div key={i} className={line.className}>
          {line.text}
        </div>
      ))}
      {lineIndex < lines.length && (
        <div className={lines[lineIndex].className}>
          {text}
          {caret}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const heroLinesTyped = [
    { text: "Hello World.", className: "font-display font-semibold leading-[1.3] tracking-tight text-white/90 text-xl sm:text-2xl lg:text-3xl" },
    { text: "I'm Amirjon Abdunayimov.", className: "font-display font-bold leading-[1.3] tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.75rem]" },
    { text: "Software Engineer.", className: "font-display font-bold leading-[1.3] tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.75rem]" },
    {
      text: "Building backend systems, AI tooling, and cloud infrastructure that hold up in production.",
      className: "!mt-4 max-w-xl text-lg font-medium leading-snug text-white/80 sm:text-xl",
    },
  ];

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-transparent">
      <div className="pointer-events-auto absolute inset-y-0 right-0 hidden w-[58%] lg:block xl:w-[60%]">
        <HeroModel className="h-full w-full" />
      </div>

      <div className="pointer-events-none relative z-10 flex flex-1 items-start w-full px-6 pt-[26vh] md:px-12 md:pt-[24vh] lg:px-20">
        <div className="pointer-events-auto max-w-2xl lg:max-w-[44rem]">
          <SequentialTyped lines={heroLinesTyped} typeSpeed={65} lineGapMs={350} />
        </div>
      </div>

      <div className="pointer-events-auto relative z-10 w-full px-6 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
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

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40"
      >
        <ArrowDown size={18} className="animate-floaty" />
      </div>
    </section>
  );
}