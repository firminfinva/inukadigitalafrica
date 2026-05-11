import { Building2, Landmark, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const audiences = [
  { icon: Building2, title: "Enterprises", desc: "Upskill teams at scale with measurable impact." },
  { icon: Landmark, title: "Government", desc: "Capacity-building programs for public institutions." },
  { icon: HeartHandshake, title: "NGOs", desc: "Mission-aligned programs with flexible delivery." },
];

export function CorporateCTA() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-elegant md:p-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Training programs built for <span className="text-gradient">organizations</span>.
          </h3>
          <p className="mt-4 text-muted-foreground">
            From 10-person teams to nationwide rollouts, we deliver outcomes-focused programs
            with dedicated success management, secure invoicing, and detailed reporting.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
              <Link to="/custom">Request a proposal <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/corporate">Explore corporate</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent"><Icon className="h-5 w-5" /></div>
                <h4 className="mt-3 font-display font-semibold">{a.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
