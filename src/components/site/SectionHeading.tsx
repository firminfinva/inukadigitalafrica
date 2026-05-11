type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
