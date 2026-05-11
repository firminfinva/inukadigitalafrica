import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Individual",
    price: "$49",
    period: "/ month",
    desc: "For learners building future-ready skills.",
    features: ["Access to all self-paced courses", "Certificates of completion", "Community & mentor Q&A", "Cancel anytime"],
    cta: "Start learning",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/ month",
    desc: "Live cohorts, projects, and 1:1 coaching.",
    features: ["Everything in Individual", "Live cohort sessions", "1:1 coaching credits", "Capstone project review", "Priority support"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored programs for teams and institutions.",
    features: ["Custom learning paths", "On-site & online delivery", "Dedicated success manager", "Reporting & analytics", "SSO & invoicing"],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`relative flex flex-col rounded-2xl border p-7 shadow-card ${
            p.highlight
              ? "border-accent/50 bg-gradient-card shadow-glow"
              : "border-border bg-card"
          }`}
        >
          {p.highlight && (
            <span className="absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most popular
            </span>
          )}
          <h3 className="font-display text-xl font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold">{p.price}</span>
            <span className="text-sm text-muted-foreground">{p.period}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent" /> {f}
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={`mt-7 ${p.highlight ? "bg-gradient-primary text-primary-foreground" : ""}`}
            variant={p.highlight ? "default" : "outline"}
          >
            <Link to="/contact">{p.cta}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
