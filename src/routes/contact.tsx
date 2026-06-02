import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Inuka Digital Africa" },
      { name: "description", content: "Joignez Inuka Digital Africa par email, WhatsApp ou réseaux sociaux. Réponse sous 24h." },
    ],
  }),
});

function ContactPage() {
  const { t } = useT();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("ct.toast"));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow={t("ct.eyebrow")} title={t("ct.title")} subtitle={t("ct.subtitle")} />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <ContactItem icon={Mail} label={t("ct.email")} value="hello@inukadigital.africa" href="mailto:hello@inukadigital.africa" />
            <ContactItem icon={MessageCircle} label={t("ct.whatsapp")} value="+000 000 000" href="https://wa.me/0000000000" />
            <div className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
              <div className="text-sm font-semibold">{t("ct.follow")}</div>
              <div className="mt-3 flex gap-2">
                <Social icon={Linkedin} />
                <Social icon={Twitter} />
                <Social icon={Instagram} />
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="cname">{t("ct.name")}</Label>
                <Input id="cname" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="cemail">{t("ct.email")}</Label>
                <Input id="cemail" type="email" required className="mt-2" />
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="csubject">{t("ct.subject")}</Label>
              <Input id="csubject" className="mt-2" />
            </div>
            <div className="mt-5">
              <Label htmlFor="cmsg">{t("ct.message")}</Label>
              <Textarea id="cmsg" required className="mt-2 min-h-[140px]" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-primary text-primary-foreground shadow-glow">
              {t("ct.send")} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-colors hover:border-accent/40">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </a>
  );
}

function Social({ icon: Icon }: { icon: typeof Linkedin }) {
  return (
    <a href="#" className="grid h-10 w-10 place-items-center rounded-lg border border-border hover:bg-secondary"><Icon className="h-4 w-4" /></a>
  );
}
