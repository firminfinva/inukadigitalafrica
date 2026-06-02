import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "À propos — Inuka Digital Africa" },
      { name: "description", content: "Notre mission, vision et méthode pour bâtir les talents du futur en Afrique et au-delà." },
    ],
  }),
});

function AboutPage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("page.about.t")} subtitle={t("page.about.s")} />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            { t: t("about.b1.t"), d: t("about.b1.d") },
            { t: t("about.b2.t"), d: t("about.b2.d") },
            { t: t("about.values"), d: t("about.values.d") },
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
          <SectionHeading eyebrow={t("page.about.what")} title={t("page.about.modern")} />
          <WhyChoose />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("page.about.voices")} title={t("page.about.stories")} />
        <Testimonials />
      </section>
    </SiteLayout>
  );
}
