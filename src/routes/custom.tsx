import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CustomLearningForm } from "@/components/site/CustomLearningForm";

export const Route = createFileRoute("/custom")({
  component: CustomPage,
  head: () => ({
    meta: [
      { title: "Custom Learning Request — Lumina Academy" },
      { name: "description", content: "Request a tailored learning program. Tell us what you want to learn and we'll design a program for you or your team." },
    ],
  }),
});

function CustomPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="Custom learning"
          title="Design your own learning journey"
          subtitle="Share your goals and we'll craft a program that fits your team, timeline, and outcomes."
        />
        <CustomLearningForm />
      </section>
    </SiteLayout>
  );
}
