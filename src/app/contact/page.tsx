import SectionTheme from "@/components/SectionTheme";
import ContactContent from "@/components/ContactContent";

export default function ContactPage() {
  return (
    <SectionTheme theme="futuristic" className="min-h-screen">
      <main className="mx-auto max-w-5xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <ContactContent />
      </main>
    </SectionTheme>
  );
}
