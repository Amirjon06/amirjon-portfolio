import { Users } from "lucide-react";
import { leadership } from "@/data/content";
import Reveal from "@/components/Reveal";
import SectionTheme from "@/components/SectionTheme";

export default function LeadershipPage() {
  return (
    <SectionTheme theme="network" className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <Reveal>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">Leadership</h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-xl text-xl text-muted md:text-2xl">
            Building technical community on campus and representing students in governance.
          </p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {leadership.map((item, i) => (
            <Reveal key={item.org} delay={i * 0.06}>
              <div className="border-t border-white/5 pt-10">
                <Users size={22} className="mb-4 text-signal" />
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">{item.role}</h2>
                <p className="mt-1.5 text-lg text-signal">{item.org}</p>
                <p className="mt-1.5 font-mono text-sm text-muted">{item.dates}</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
    </SectionTheme>
  );
}
