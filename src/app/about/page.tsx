import SectionTheme from "@/components/SectionTheme";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <SectionTheme theme="blueprint" className="min-h-screen">
      <main className="mx-auto max-w-6xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <AboutContent />
      </main>
    </SectionTheme>
  );
}