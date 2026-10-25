"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useT, type TKey } from "@/lib/i18n";

type Plan = {
  nKey: TKey; price: string; periodKey?: TKey; dKey: TKey;
  features: TKey[]; ctaKey: TKey; highlight: boolean;
};

const plans: Plan[] = [
  {
    nKey: "pr.ind.n", price: "$49", periodKey: "pr.month", dKey: "pr.ind.d",
    features: ["pr.ind.f1", "pr.ind.f2", "pr.ind.f3", "pr.ind.f4"],
    ctaKey: "pr.ind.cta", highlight: false,
  },
  {
    nKey: "pr.pro.n", price: "$149", periodKey: "pr.month", dKey: "pr.pro.d",
    features: ["pr.pro.f1", "pr.pro.f2", "pr.pro.f3", "pr.pro.f4", "pr.pro.f5"],
    ctaKey: "pr.pro.cta", highlight: true,
  },
  {
    nKey: "pr.ent.n", price: "", dKey: "pr.ent.d",
    features: ["pr.ent.f1", "pr.ent.f2", "pr.ent.f3", "pr.ent.f4", "pr.ent.f5"],
    ctaKey: "pr.ent.cta", highlight: false,
  },
];

export function Pricing() {
  const { t } = useT();
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.nKey}
          className={`relative flex flex-col rounded-2xl border p-7 shadow-card ${
            p.highlight ? "border-accent/50 bg-gradient-card shadow-glow" : "border-border bg-card"
          }`}
        >
          {p.highlight && (
            <span className="absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {t("pr.popular")}
            </span>
          )}
          <h3 className="font-display text-xl font-semibold">{t(p.nKey)}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t(p.dKey)}</p>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold">{p.price || t("pr.ent.p")}</span>
            {p.periodKey && <span className="text-sm text-muted-foreground">{t(p.periodKey)}</span>}
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent" /> {t(f)}
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={`mt-7 ${p.highlight ? "bg-gradient-primary text-primary-foreground" : ""}`}
            variant={p.highlight ? "default" : "outline"}
          >
            <Link href="/contact">{t(p.ctaKey)}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
