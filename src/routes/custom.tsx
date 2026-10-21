import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CustomLearningForm } from "@/components/site/CustomLearningForm";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/custom")({
  component: CustomPage,
  head: () => ({
    meta: [
      { title: "Formation sur mesure — Inuka Digital Africa" },
      { name: "description", content: "Demandez un programme de formation personnalisé pour vous ou votre équipe." },
      { property: "og:title", content: "Formation sur mesure — Inuka Digital Africa" },
      { property: "og:description", content: "Demandez un programme de formation personnalisé pour vous ou votre équipe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CustomPage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("cl.eyebrow")} title={t("page.custom.t")} subtitle={t("page.custom.s")} />
        <CustomLearningForm />
      </section>
    </SiteLayout>
  );
}
