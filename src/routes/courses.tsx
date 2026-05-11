import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CategoriesGrid } from "@/components/site/CategoriesGrid";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Courses — Lumina Academy" },
      { name: "description", content: "Browse all course categories: AI, leadership, data, cybersecurity, software development and more." },
    ],
  }),
});

function CoursesPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="All courses" title="Find the right program for you" subtitle="Each track blends live sessions, projects, and AI-powered feedback." />
        <CategoriesGrid />
      </section>
    </SiteLayout>
  );
}
