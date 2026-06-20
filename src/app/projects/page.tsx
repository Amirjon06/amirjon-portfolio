import SectionTheme from "@/components/SectionTheme";
import ProjectsList from "@/components/ProjectsList";

export default function ProjectsPage() {
  return (
    <SectionTheme theme="architecture" className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 pb-32 pt-36 md:px-10 md:pt-48">
        <ProjectsList />
      </main>
    </SectionTheme>
  );
}
