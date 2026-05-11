import { Building2, Landmark, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useT, type TKey } from "@/lib/i18n";

const audiences: { icon: typeof Building2; tKey: TKey; dKey: TKey }[] = [
  { icon: Building2, tKey: "corp.ent.t", dKey: "corp.ent.d" },
  { icon: Landmark, tKey: "corp.gov.t", dKey: "corp.gov.d" },
  { icon: HeartHandshake, tKey: "corp.ngo.t", dKey: "corp.ngo.d" },
];

export function CorporateCTA() {
  const { t } = useT();
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-elegant md:p-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            {t("corp.title.1")} <span className="text-gradient">{t("corp.title.2")}</span>.
          </h3>
          <p className="mt-4 text-muted-foreground">{t("corp.subtitle")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
              <Link to="/custom">{t("corp.proposal")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/corporate">{t("corp.explore")}</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.tKey} className="rounded-2xl border border-border bg-card p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent"><Icon className="h-5 w-5" /></div>
                <h4 className="mt-3 font-display font-semibold">{t(a.tKey)}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{t(a.dKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
