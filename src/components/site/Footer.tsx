import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/inuka-logo.png.asset.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            Lumina<span className="text-gradient">Academy</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="you@company.com" required />
            <Button type="submit" className="bg-gradient-primary text-primary-foreground">{t("footer.subscribe")}</Button>
          </form>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{t("footer.explore")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground">{t("nav.courses")}</Link></li>
            <li><Link to="/corporate" className="hover:text-foreground">{t("nav.corporate")}</Link></li>
            <li><Link to="/custom" className="hover:text-foreground">{t("nav.custom")}</Link></li>
            <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{t("footer.reach")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@inukadigital.africa</span></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /><span>WhatsApp +000 000 000</span></li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Inuka Digital Africa. {t("footer.rights")}
      </div>
    </footer>
  );
}
