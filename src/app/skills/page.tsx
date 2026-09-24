import SectionTheme from "@/components/SectionTheme";
import SkillsSection from "@/components/SkillsSection";

export default function SkillsPage() {
  return (
    <SectionTheme theme="constellation" className="min-h-screen">
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <SkillsSection />
      </main>
    </SectionTheme>
  );
}
