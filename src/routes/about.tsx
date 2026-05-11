import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Lumina Academy" },
      { name: "description", content: "Our mission, vision, and method for building future-ready talent across Africa and beyond." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="About us"
          title="Building Africa's future workforce, one skill at a time"
          subtitle="Lumina Academy was founded with one belief: world-class training should be accessible to every ambitious learner and every forward-thinking organization."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            { t: "Mission", d: "Equip 1 million learners with future-ready skills by 2030." },
            { t: "Vision", d: "An Africa where talent leads global innovation." },
            { t: "Values", d: "Excellence, accessibility, practicality, and curiosity." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="What sets us apart" title="A modern academy built for impact" />
          <WhyChoose />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="Voices" title="Stories from our community" />
        <Testimonials />
      </section>
    </SiteLayout>
  );
}
