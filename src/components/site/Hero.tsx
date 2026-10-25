"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ai-education.jpg";
import { useT } from "@/lib/i18n";

export function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container relative mx-auto grid gap-12 px-4 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {t("hero.title.1")} <span className="text-gradient">{t("hero.title.careers")}</span> {t("hero.title.and")}{" "}
            <span className="text-gradient">{t("hero.title.orgs")}</span>
            {t("hero.title.end")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
              <Link href="/courses">
                {t("hero.explore")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/custom">
                <PlayCircle className="mr-2 h-4 w-4" /> {t("hero.custom")}
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "10+", l: t("hero.stat.tracks") },
              { v: "95%", l: t("hero.stat.completion") },
              { v: "50+", l: t("hero.stat.partners") },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img
              src={heroImg.src}
              alt="AI and education abstract illustration"
              width={1536}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block animate-float">
            <div className="text-xs text-muted-foreground">{t("hero.live")}</div>
            <div className="font-display font-semibold">{t("hero.live.title")}</div>
            <div className="mt-1 text-xs text-accent">{t("hero.live.starts")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
