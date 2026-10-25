"use client";

import { SectionHeading } from "@/components/site/SectionHeading";
import { CustomLearningForm } from "@/components/site/CustomLearningForm";
import { useT } from "@/lib/i18n";

export function CustomPage() {
  const { t } = useT();
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow={t("cl.eyebrow")} title={t("page.custom.t")} subtitle={t("page.custom.s")} />
      <CustomLearningForm />
    </section>
  );
}
