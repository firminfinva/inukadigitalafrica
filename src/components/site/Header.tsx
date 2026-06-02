import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/inuka-logo.png.asset.json";
import { LanguageToggle } from "./LanguageToggle";
import { useT, type TKey } from "@/lib/i18n";

const nav: { to: string; key: TKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/courses", key: "nav.courses" },
  { to: "/corporate", key: "nav.corporate" },
  { to: "/custom", key: "nav.custom" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useT();
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </span>
          <span>Lumina<span className="text-gradient">Academy</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm">
            <Link to="/contact">{t("nav.signin")}</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/custom">{t("nav.cta")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {t(n.key)}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-primary text-primary-foreground">
              <Link to="/custom" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
