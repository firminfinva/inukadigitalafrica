"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles, Send } from "lucide-react";
import { useT } from "@/lib/i18n";

export function CustomLearningForm() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useT();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(t("cl.toast"));
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant md:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs">
        <Sparkles className="h-3.5 w-3.5 text-accent" /> {t("cl.smart")}
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="goal">{t("cl.goal")}</Label>
          <Textarea id="goal" name="goal" required placeholder={t("cl.goal.ph")} className="mt-2 min-h-[120px]" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="name">{t("cl.name")}</Label>
            <Input id="name" name="name" required className="mt-2" placeholder="Jane Doe" />
          </div>
          <div>
            <Label htmlFor="email">{t("cl.email")}</Label>
            <Input id="email" type="email" name="email" required className="mt-2" placeholder="jane@company.com" />
          </div>
          <div>
            <Label htmlFor="company">{t("cl.company")}</Label>
            <Input id="company" name="company" className="mt-2" placeholder={t("cl.company.ph")} />
          </div>
          <div>
            <Label htmlFor="employees">{t("cl.learners")}</Label>
            <Select name="employees">
              <SelectTrigger id="employees" className="mt-2"><SelectValue placeholder={t("cl.learners.ph")} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="1">{t("cl.learners.me")}</SelectItem>
                <SelectItem value="2-10">2–10</SelectItem>
                <SelectItem value="11-50">11–50</SelectItem>
                <SelectItem value="51-200">51–200</SelectItem>
                <SelectItem value="200+">200+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="mode">{t("cl.mode")}</Label>
            <Select name="mode">
              <SelectTrigger id="mode" className="mt-2"><SelectValue placeholder={t("cl.mode.ph")} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="online">{t("cl.mode.online")}</SelectItem>
                <SelectItem value="in-person">{t("cl.mode.inperson")}</SelectItem>
                <SelectItem value="hybrid">{t("cl.mode.hybrid")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="timeline">{t("cl.timeline")}</Label>
            <Select name="timeline">
              <SelectTrigger id="timeline" className="mt-2"><SelectValue placeholder={t("cl.timeline.ph")} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">{t("cl.timeline.asap")}</SelectItem>
                <SelectItem value="1-month">{t("cl.timeline.month")}</SelectItem>
                <SelectItem value="quarter">{t("cl.timeline.quarter")}</SelectItem>
                <SelectItem value="exploring">{t("cl.timeline.exploring")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="objectives">{t("cl.objectives")}</Label>
          <Textarea id="objectives" name="objectives" className="mt-2 min-h-[100px]" placeholder={t("cl.objectives.ph")} />
        </div>
      </div>

      <Button type="submit" disabled={submitting} size="lg" className="mt-7 w-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
        {submitting ? t("cl.sending") : (<>{t("cl.send")} <Send className="ml-2 h-4 w-4" /></>)}
      </Button>
    </form>
  );
}
