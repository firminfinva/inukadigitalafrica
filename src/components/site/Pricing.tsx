"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export function Pricing() {
  const { t } = useT();
  return (
    <div className="text-center">
      <p className="mx-auto max-w-2xl text-muted-foreground">{t("pr.custom.body")}</p>
      <Button asChild size="lg" className="mt-7 bg-gradient-primary text-primary-foreground">
        <Link href="/contact">
          {t("pr.custom.cta")} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
