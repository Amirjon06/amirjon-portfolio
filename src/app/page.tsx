"use client";

import Reveal from "@/components/Reveal";
import SectionTheme from "@/components/SectionTheme";
import Hero from "@/components/Hero";
import AboutContent from "@/components/AboutContent";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsList from "@/components/ProjectsList";
import ContactContent from "@/components/ContactContent";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero — sinks into shadow on scroll ---------------- */}
      <Hero />

      {/* ---------------- About — blueprint theme ---------------- */}
      <SectionTheme id="about" theme="blueprint">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
          <AboutContent />
        </div>
      </SectionTheme>

      {/* ---------------- Experience — network infrastructure theme ---------------- */}
      <SectionTheme id="experience" theme="network">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <h2 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
              Experience
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-xl text-xl text-muted md:text-2xl">
              Hands-on work across cloud infrastructure, AI product evaluation, and technical mentorship.
            </p>
          </Reveal>
          <div className="mt-16">
            <ExperienceTimeline />
          </div>
        </div>
      </SectionTheme>

      {/* ---------------- Projects — architecture theme ---------------- */}
      <SectionTheme id="projects" theme="architecture">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 py-28 md:px-10 md:py-36">
          <ProjectsList />
        </div>
      </SectionTheme>

      {/* ---------------- Skills — technology constellation theme ---------------- */}
      <SectionTheme id="skills" theme="constellation">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
        <div className="mx-auto w-full max-w-[1380px] px-10 py-28 md:px-16 md:py-36">
          <SkillsSection />
        </div>
      </SectionTheme>

      {/* ---------------- Contact — futuristic workspace theme ---------------- */}
      <SectionTheme id="contact" theme="futuristic">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
        <div className="mx-auto w-full max-w-[1380px] px-10 py-28 md:px-16 md:py-36">
          <ContactContent />
        </div>
      </SectionTheme>
    </>
  );
}