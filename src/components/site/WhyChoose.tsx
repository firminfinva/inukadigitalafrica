import { GraduationCap, Wrench, Brain, CalendarRange, BadgeCheck, Globe2 } from "lucide-react";
import { useT, type TKey } from "@/lib/i18n";

const items: { icon: typeof Brain; tKey: TKey; dKey: TKey }[] = [
  { icon: GraduationCap, tKey: "why.1.t", dKey: "why.1.d" },
  { icon: Wrench, tKey: "why.2.t", dKey: "why.2.d" },
  { icon: Brain, tKey: "why.3.t", dKey: "why.3.d" },
  { icon: CalendarRange, tKey: "why.4.t", dKey: "why.4.d" },
  { icon: BadgeCheck, tKey: "why.5.t", dKey: "why.5.d" },
  { icon: Globe2, tKey: "why.6.t", dKey: "why.6.d" },
];

export function WhyChoose() {
  const { t } = useT();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div key={it.tKey} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold">{t(it.tKey)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(it.dKey)}</p>
          </div>
        );
      })}
    </div>
  );
}
