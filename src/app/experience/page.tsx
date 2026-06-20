import SectionTheme from "@/components/SectionTheme";
import Reveal from "@/components/Reveal";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <SectionTheme theme="network" className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <Reveal>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">Experience</h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-xl text-xl text-muted md:text-2xl">
            Hands-on work across cloud infrastructure, AI product evaluation, and technical mentorship.
          </p>
        </Reveal>

        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </main>
    </SectionTheme>
  );
}
