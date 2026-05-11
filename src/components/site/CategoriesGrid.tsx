import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Layers } from "lucide-react";
import { categories } from "@/lib/site-data";
import { useT } from "@/lib/i18n";

export function CategoriesGrid({ limit }: { limit?: number }) {
  const { t } = useT();
  const list = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => {
        const Icon = c.icon;
        return (
          <Link
            key={c.slug}
            to="/courses"
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant animate-fade-up"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" aria-hidden />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t(c.titleKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(c.descKey)}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{c.weeks} {t("cat.weeks")}</span>
                <span className="inline-flex items-center gap-1.5"><Layers className="h-3.5 w-3.5" />{c.modules} {t("cat.modules")}</span>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs">{t(c.levelKey)}</span>
                <span className="inline-flex items-center gap-1 font-medium text-foreground transition-transform group-hover:translate-x-1">
                  {t("cat.view")} <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
