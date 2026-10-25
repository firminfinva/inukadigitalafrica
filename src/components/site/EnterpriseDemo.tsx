"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ClipboardList, GraduationCap, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useT } from "@/lib/i18n";
import { assessDemo, createDemoTasks, demoCopy, type CompanyBrief } from "@/lib/onboarding-demo";
import { SectionHeading } from "./SectionHeading";

export function EnterpriseDemo() {
  const { lang } = useT();
  const c = demoCopy[lang];
  const [brief, setBrief] = useState<CompanyBrief | null>(null);
  const [activeTask, setActiveTask] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ReturnType<typeof assessDemo> | null>(null);
  const tasks = brief ? createDemoTasks(brief) : [];

  function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = { company: String(data.get("demo-company") || "").trim(), role: String(data.get("demo-role") || "").trim(), responsibilities: String(data.get("demo-duties") || "").trim(), tools: String(data.get("demo-tools") || "").trim() };
    if (!next.company || !next.role || !createDemoTasks(next).length) return;
    setBrief(next);
    setActiveTask(0);
    setAnswers([]);
    setResult(null);
  }

  return (
    <section className="border-y border-border bg-secondary/30 py-20" id="enterprise-demo">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        <p className="mb-6 text-center text-sm text-muted-foreground">{c.badge}</p>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
          <form key={lang} onSubmit={generate} className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-card">
            <h3 className="flex items-center gap-3 text-xl font-semibold"><BriefcaseBusiness className="h-5 w-5 text-accent" />{c.brief}</h3>
            <div><Label htmlFor="demo-company">{c.company}</Label><Input className="mt-2" id="demo-company" name="demo-company" required maxLength={100} defaultValue={c.sampleCompany} /></div>
            <div><Label htmlFor="demo-role">{c.role}</Label><Input className="mt-2" id="demo-role" name="demo-role" required maxLength={100} defaultValue={c.sampleRole} /></div>
            <div><Label htmlFor="demo-duties">{c.duties}</Label><Textarea className="mt-2 min-h-36" id="demo-duties" name="demo-duties" required maxLength={2000} defaultValue={c.sampleDuties} aria-describedby="demo-duties-hint" /><p id="demo-duties-hint" className="mt-2 text-xs text-muted-foreground">{c.dutiesHint}</p></div>
            <div><Label htmlFor="demo-tools">{c.tools}</Label><Input className="mt-2" id="demo-tools" name="demo-tools" maxLength={200} defaultValue={c.sampleTools} /></div>
            <Button type="submit" className="h-auto min-h-10 w-full whitespace-normal bg-gradient-primary text-primary-foreground">{brief ? c.update : c.generate}<ArrowRight /></Button>
          </form>

          <div className="min-w-0" aria-live="polite">
            <div className="mb-5 flex items-center gap-3 border-b border-border pb-5"><GraduationCap className="h-6 w-6 shrink-0 text-accent" /><div className="min-w-0"><p className="text-xs text-muted-foreground">{c.employee}</p><h3 className="break-words text-xl font-semibold">{brief ? `${brief.role} · ${brief.company}` : c.waiting}</h3></div></div>
            {!brief ? <div className="grid min-h-80 place-items-center rounded-lg border border-dashed border-border p-8 text-center"><div><ClipboardList className="mx-auto mb-4 h-12 w-12 text-accent" /><p className="font-display text-xl font-medium">{c.waitingText}</p><div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-4 text-muted-foreground"><BriefcaseBusiness /><ArrowRight /><ClipboardList /><ArrowRight /><CheckCircle2 /></div></div></div> : (
              <>
                <div className="mb-6 flex flex-wrap gap-2" aria-label={c.employee}>{tasks.map((task, i) => <Button key={`${i}-${task}`} variant={activeTask === i ? "default" : "outline"} onClick={() => { setActiveTask(i); setAnswers([]); setResult(null); }} aria-pressed={activeTask === i}>{c.task} {i + 1}</Button>)}</div>
                <p className="text-xs font-medium uppercase text-accent">{c.practice} · {activeTask + 1}/{tasks.length}</p>
                <h4 className="mt-2 break-words text-2xl font-semibold">{tasks[activeTask]}</h4>
                {brief.tools && <p className="mt-3 break-words text-sm text-muted-foreground">{c.tools} : {brief.tools}</p>}
                <div className="my-6 grid gap-5 border-y border-border py-5 sm:grid-cols-2"><div><h5 className="font-semibold">{c.lesson}</h5><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.lessonText}</p></div><div><h5 className="font-semibold">{c.deliverable}</h5><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.deliverableText}</p></div></div>
                {!result ? <form onSubmit={(e) => { e.preventDefault(); if (answers.filter(Boolean).length === 3) setResult(assessDemo(answers)); }}>
                  <h4 className="mb-5 text-lg font-semibold">{c.assessment}</h4>
                  <div className="space-y-6">{c.questions.map((q, i) => <fieldset key={q.label}><legend id={`demo-question-${i}`} className="mb-3 text-sm font-medium">{i + 1}. {q.question}</legend><RadioGroup required value={answers[i] || ""} aria-labelledby={`demo-question-${i}`} onValueChange={(value) => setAnswers((previous) => Array.from({ length: 3 }, (_, index) => index === i ? value : previous[index] || ""))}>{q.options.map((option) => <div key={option.value} className="flex items-start gap-3"><RadioGroupItem id={`demo-${i}-${option.value}`} value={option.value} className="mt-1 shrink-0" /><Label className="cursor-pointer text-sm font-normal leading-relaxed" htmlFor={`demo-${i}-${option.value}`}>{option.text}</Label></div>)}</RadioGroup></fieldset>)}</div>
                  <Button className="mt-6" type="submit" disabled={answers.filter(Boolean).length !== 3}><CheckCircle2 />{c.submit}</Button>
                </form> : <div className="space-y-5" role="status">
                  <div className="flex flex-wrap items-center gap-5"><div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-4 border-accent bg-accent/10 font-display text-2xl font-bold">{result.score}/100</div><div><p className="text-xs text-muted-foreground">{c.report}</p><h4 className="mt-1 text-xl font-semibold">{result.score === 100 ? c.strong : c.improve}</h4></div></div>
                  <p className="text-xs text-muted-foreground">{c.simulated}</p>
                  <ul className="divide-y divide-border">{c.questions.map((q, i) => <li key={q.label} className="py-3"><div className="flex justify-between gap-4 text-sm"><span className="font-medium">{q.label}</span><span className={result.criteria[i] ? "text-accent" : "text-muted-foreground"}>{result.criteria[i] ? c.correct : c.incorrect}</span></div>{!result.criteria[i] && <p className="mt-2 text-sm text-muted-foreground">{q.feedback}</p>}</li>)}</ul>
                  <div><h5 className="font-semibold">{c.feedback}</h5><p className="mt-2 text-sm text-muted-foreground">{result.score === 100 ? c.feedbackGood : c.feedbackImprove}</p></div>
                  <Button variant="outline" onClick={() => { setAnswers([]); setResult(null); }}><RotateCcw />{c.retry}</Button>
                </div>}
              </>
            )}
          </div>
        </div>
        <div className="mt-12 text-center"><Button asChild variant="outline" className="h-auto min-h-10 whitespace-normal"><Link href="/custom">{c.cta}<ArrowRight /></Link></Button></div>
      </div>
    </section>
  );
}