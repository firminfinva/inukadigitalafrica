import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CategoriesGrid } from "@/components/site/CategoriesGrid";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Formations — Inuka Digital Africa" },
      { name: "description", content: "Toutes les catégories de formations : IA, leadership, data, cybersécurité, développement et plus." },
      { property: "og:title", content: "Formations — Inuka Digital Africa" },
      { property: "og:description", content: "Toutes les catégories de formations : IA, leadership, data, cybersécurité, développement et plus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CoursesPage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("page.courses.eye")} title={t("page.courses.t")} subtitle={t("page.courses.s")} />
        <CategoriesGrid />
      </section>
    </SiteLayout>
  );
}
