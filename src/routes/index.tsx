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
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lumina Academy — Formations IA, leadership & tech" },
      { name: "description", content: "Académie de formation moderne : IA, leadership, data, cybersécurité, software pour particuliers, entreprises et gouvernements." },
    ],
  }),
});

function Index() {
  const { t } = useT();
  return (
    <SiteLayout>
      <Hero />

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              subtitle={t("about.subtitle")}
            />
            <Button asChild variant="outline">
              <Link to="/about">{t("about.read")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: t("about.b1.t"), d: t("about.b1.d") },
              { t: t("about.b2.t"), d: t("about.b2.d") },
              { t: t("about.b3.t"), d: t("about.b3.d") },
              { t: t("about.b4.t"), d: t("about.b4.d") },
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
          <SectionHeading eyebrow={t("cat.eyebrow")} title={t("cat.title")} subtitle={t("cat.subtitle")} />
          <CategoriesGrid />
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
              <Link to="/courses">{t("cat.browse")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom learning */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading eyebrow={t("cl.eyebrow")} title={t("cl.title")} subtitle={t("cl.subtitle")} />
        <CustomLearningForm />
      </section>

      {/* Corporate */}
      <section className="container mx-auto px-4 py-24">
        <CorporateCTA />
      </section>

      {/* Why */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow={t("why.eyebrow")} title={t("why.title")} />
          <WhyChoose />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading eyebrow={t("test.eyebrow")} title={t("test.title")} />
        <Testimonials />
      </section>

      {/* Pricing */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow={t("pr.eyebrow")} title={t("pr.title")} subtitle={t("pr.subtitle")} />
          <Pricing />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <FAQ />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 text-center shadow-elegant md:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">{t("fcta.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">{t("fcta.sub")}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="secondary"><Link to="/courses">{t("fcta.browse")}</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">{t("fcta.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
