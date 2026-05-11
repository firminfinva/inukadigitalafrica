import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CorporateCTA } from "@/components/site/CorporateCTA";
import { WhyChoose } from "@/components/site/WhyChoose";

export const Route = createFileRoute("/corporate")({
  component: CorporatePage,
  head: () => ({
    meta: [
      { title: "Corporate Training — Lumina Academy" },
      { name: "description", content: "Training programs for enterprises, NGOs, and government institutions. Online, in-person, or hybrid delivery." },
    ],
  }),
});

function CorporatePage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="Corporate training"
          title="Upskill your organization, end-to-end"
          subtitle="From assessment to delivery and reporting — we run programs your teams actually finish."
        />
        <CorporateCTA />
      </section>
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Why teams choose us" title="Outcomes-focused, beautifully delivered" />
          <WhyChoose />
        </div>
      </section>
    </SiteLayout>
  );
}
