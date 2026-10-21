import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CorporateCTA } from "@/components/site/CorporateCTA";
import { EnterpriseDemo } from "@/components/site/EnterpriseDemo";
import { WhyChoose } from "@/components/site/WhyChoose";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/corporate")({
  component: CorporatePage,
  head: () => ({
    meta: [
      { title: "Formation Entreprise — Inuka Digital Africa" },
      { name: "description", content: "Programmes de formation pour entreprises, ONG et institutions gouvernementales." },
    ],
  }),
});

function CorporatePage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("page.corp.eye")} title={t("page.corp.t")} subtitle={t("page.corp.s")} />
        <CorporateCTA />
      </section>
      <EnterpriseDemo />
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow={t("page.corp.eye2")} title={t("page.corp.t2")} />
          <WhyChoose />
        </div>
      </section>
    </SiteLayout>
  );
}
