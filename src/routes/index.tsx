import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { CategoriesGrid } from "@/components/site/CategoriesGrid";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CorporateCTA } from "@/components/site/CorporateCTA";
import { CustomLearningForm } from "@/components/site/CustomLearningForm";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lumina Academy — Future-ready training in AI, leadership & tech" },
      { name: "description", content: "Premium training academy: AI, leadership, data, cybersecurity, software, and more — for individuals, enterprises, and governments." },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <Hero />

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title="Empowering people to thrive in the future of work."
              subtitle="Lumina Academy was built to close the gap between fast-moving technology and the talent that drives organizations forward. We design programs for professionals, youth, and institutions ready to lead what comes next."
            />
            <Button asChild variant="outline">
              <Link to="/about">Read our story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Our mission", d: "Equip 1 million learners with future-ready skills by 2030." },
              { t: "Our vision", d: "An Africa where talent leads global innovation." },
              { t: "Our method", d: "Practical, project-based, AI-personalized." },
              { t: "Our promise", d: "Programs that translate to real outcomes." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
                <div className="font-display font-semibold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Course categories"
            title="Programs across the skills that matter most"
            subtitle="From AI to leadership — practical curricula designed by industry experts."
          />
          <CategoriesGrid />
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
              <Link to="/courses">Browse all courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom learning */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading
          eyebrow="Custom learning"
          title="Tell us what you want to learn"
          subtitle="We'll design a tailored program for you, your team, or your institution."
        />
        <CustomLearningForm />
      </section>

      {/* Corporate */}
      <section className="container mx-auto px-4 py-24">
        <CorporateCTA />
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Why Lumina" title="Designed to deliver real outcomes" />
          <WhyChoose />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious learners and teams" />
        <Testimonials />
      </section>

      {/* Pricing */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Pricing" title="Simple plans for every stage" subtitle="Switch or cancel anytime. Enterprise plans built for your needs." />
          <Pricing />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <FAQ />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 text-center shadow-elegant md:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">Ready to build your future skills?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Join thousands of learners and organizations growing with Lumina Academy.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary"><Link to="/courses">Browse courses</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
