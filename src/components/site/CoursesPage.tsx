"use client";

import { SectionHeading } from "@/components/site/SectionHeading";
import { CategoriesGrid } from "@/components/site/CategoriesGrid";
import { useT } from "@/lib/i18n";

export function CoursesPage() {
  const { t } = useT();
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow={t("page.courses.eye")} title={t("page.courses.t")} subtitle={t("page.courses.s")} />
      <CategoriesGrid />
    </section>
  );
}
