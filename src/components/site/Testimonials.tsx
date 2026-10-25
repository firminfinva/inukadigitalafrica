"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n";

type Testimonial = {
  id: number;
  name: string;
  roleFr: string;
  roleEn: string;
  quoteFr: string;
  quoteEn: string;
  rating: number;
};

type Props = { eyebrow: string; title: string };

export function Testimonials({ eyebrow, title }: Props) {
  const { lang } = useT();
  const [items, setItems] = useState<Testimonial[] | null>(null);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((response) => (response.ok ? response.json() : []))
      .then((data: Testimonial[]) => setItems(data))
      .catch(() => setItems([]));
  }, []);

  if (!items?.length) return null;

  return (
    <section className="container mx-auto px-4 py-24">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <figure key={item.id} className="flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
            <div className="flex gap-0.5 text-accent" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed">
              &ldquo;{lang === "fr" ? item.quoteFr : item.quoteEn}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                {item.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground">
                  {lang === "fr" ? item.roleFr : item.roleEn}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
