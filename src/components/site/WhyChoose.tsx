import { GraduationCap, Wrench, Brain, CalendarRange, BadgeCheck, Globe2 } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Expert trainers", desc: "Industry practitioners with proven track records." },
  { icon: Wrench, title: "Practical learning", desc: "Real projects, real tools, real outcomes." },
  { icon: Brain, title: "AI-powered education", desc: "Personalized pathways and intelligent feedback." },
  { icon: CalendarRange, title: "Flexible schedules", desc: "Online, hybrid, or on-site to fit your life." },
  { icon: BadgeCheck, title: "Recognized certificates", desc: "Earn credentials employers actually trust." },
  { icon: Globe2, title: "Built for Africa & beyond", desc: "Locally relevant, globally connected programs." },
];

export function WhyChoose() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div key={it.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
