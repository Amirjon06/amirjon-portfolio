"use client";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Cloud,
  Bot,
  Layers,
  Users,
  Mic,
  Cpu,
  FlaskConical,
  Target,
} from "lucide-react";
import { about, profile } from "@/data/content";
import Reveal from "./Reveal";

const METRIC_ICONS = [
  <BookOpen key="0" size={18} />,
  <Users key="1" size={18} />,
  <Bot key="2" size={18} />,
  <Layers key="3" size={18} />,
];

const FOCUS = [
  {
    icon: <Cloud size={20} className="text-signal" />,
    title: "Cloud & DevOps",
    description: "Building and automating infrastructure with Docker, CI/CD, and monitoring.",
  },
  {
    icon: <Bot size={20} className="text-accent" />,
    title: "AI & Automation",
    description: "Evaluating and delivering AI-powered features that solve real user problems.",
  },
  {
    icon: <Cpu size={20} className="text-[#7dd3fc]" />,
    title: "Full-Stack Engineering",
    description: "Designing and shipping scalable web applications end-to-end.",
  },
  {
    icon: <Mic size={20} className="text-[#c084fc]" />,
    title: "Teaching & Mentorship",
    description: "Helping students grow in CS and math through tutoring and mentorship.",
  },
];

const EDU_ICONS = [
  <GraduationCap key="nyu" size={18} className="text-signal" />,
  <GraduationCap key="kcc" size={18} className="text-accent" />,
  <FlaskConical key="bs" size={18} className="text-[#7dd3fc]" />,
];

export default function AboutContent() {
  return (
    <div className="space-y-16">
      {/* ── Row 1: Identity + bio left, education card right ── */}
      <Reveal>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Left — identity + bio */}
          <div>
            <div className="mb-8 flex items-center gap-5">
              {/* premium photo: soft glow + ring */}
              <div className="relative shrink-0" style={{ width: "76px", height: "76px" }}>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-3xl opacity-60 blur-xl"
                  style={{ background: "radial-gradient(circle, rgba(var(--color-signal,94,234,212),0.28), transparent 70%)" }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_8px_30px_rgba(0,0,0,.45)]">
                  <Image
                    src={profile.photo}
                    alt="Amirjon Abdunayimov"
                    fill
                    sizes="76px"
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  Amirjon Abdunayimov
                </h2>
                <p className="mt-1 text-sm text-muted">
                  <span className="font-medium text-signal">Software Engineer</span>
                  <span className="px-2 text-muted/40">·</span>
                  Brooklyn, NY
                </p>
              </div>
            </div>

            <div className="mb-7 h-px w-12 bg-signal/40" />

            {/* shorter measure for readability */}
            <div className="max-w-[54ch] space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.75] text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — education card (refined) */}
          <div className="rounded-3xl border border-white/10 bg-surface/40 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.3)]">
            <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
              Education
            </p>
            <div className="space-y-7">
              {about.education.map((ed, i) => (
                <div
                  key={ed.school}
                  className={i < about.education.length - 1 ? "border-b border-white/[0.06] pb-7" : ""}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
                      {EDU_ICONS[i]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold leading-snug text-ink">{ed.school}</p>
                      <p className="mt-1 text-sm text-muted">{ed.degree}</p>
                      <p className="mt-1 text-xs text-muted/55">{ed.meta}</p>
                      {ed.honors && ed.honors.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {ed.honors.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted"
                            >
                              <span className="h-1 w-1 rounded-full bg-signal/70" />
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Row 2: Stats — prominent numbers, clean labels ── */}
      <Reveal variant="fade" delay={0.06}>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] sm:grid-cols-4">
          {about.facts.map((f, i) => (
            <div key={f.label} className="flex flex-col gap-4 bg-bg/60 p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal/10 text-signal">
                {METRIC_ICONS[i]}
              </span>
              <p className="font-display text-5xl font-bold leading-none tracking-tight text-ink">
                {f.value}
              </p>
              <p className="text-[13px] leading-snug text-muted">{f.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── Row 3: Core Focus — four distinct mini cards ── */}
      <Reveal delay={0.05}>
        <div>
          <div className="mb-7 flex items-center gap-2">
            <Target size={16} className="text-signal" />
            <h3 className="font-display text-lg font-semibold text-ink">Core Focus</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-signal/25
                hover:shadow-[0_0_30px_rgba(56,189,248,.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
                  {area.icon}
                </span>
                <p className="text-[15px] font-semibold text-ink">{area.title}</p>
                <p className="text-sm leading-relaxed text-muted">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Row 4: Quote ── */}
      <Reveal variant="fade" delay={0.04}>
        <div className="flex items-start gap-5">
          <span
            className="mt-1 shrink-0 font-display text-6xl font-bold leading-none text-signal"
            aria-hidden
          >
            &ldquo;
          </span>
          <div className="border-l-2 border-signal/50 pl-6">
            <p className="max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
              Building software that is simple to use, scalable to maintain, and engineered to last.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}