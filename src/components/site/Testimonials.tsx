import { Star } from "lucide-react";
import { useT, type TKey } from "@/lib/i18n";

const items: { name: string; rKey: TKey; qKey: TKey }[] = [
  { name: "Aïcha Diallo", rKey: "test.1.r", qKey: "test.1.q" },
  { name: "Samuel Okafor", rKey: "test.2.r", qKey: "test.2.q" },
  { name: "Maya Bensalem", rKey: "test.3.r", qKey: "test.3.q" },
];

export function Testimonials() {
  const { t } = useT();
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it) => (
        <figure key={it.name} className="flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <div className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed">"{t(it.qKey)}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
              {it.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold">{it.name}</div>
              <div className="text-xs text-muted-foreground">{t(it.rKey)}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
