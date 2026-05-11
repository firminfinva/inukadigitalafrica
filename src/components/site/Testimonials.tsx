import { Star } from "lucide-react";

const items = [
  { name: "Aïcha Diallo", role: "Product Lead, FinSmart", quote: "The AI track changed how my team ships. Practical, intense, and beautifully delivered." },
  { name: "Samuel Okafor", role: "HR Director, Helios Group", quote: "We trained 120 employees in 3 months. The corporate program was flawless end-to-end." },
  { name: "Maya Bensalem", role: "Founder, NovaWear", quote: "I started with the entrepreneurship cohort and launched my brand 8 weeks later." },
];

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <div className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed">"{t.quote}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
