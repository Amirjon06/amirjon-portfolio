import SectionTheme from "@/components/SectionTheme";
import SkillsSection from "@/components/SkillsSection";

export default function SkillsPage() {
  return (
    <SectionTheme theme="constellation" className="min-h-screen">
      <main className="mx-auto max-w-5xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <SkillsSection />
      </main>
    </SectionTheme>
  );
}