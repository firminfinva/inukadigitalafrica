import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT, type TKey } from "@/lib/i18n";

const faqs: { q: TKey; a: TKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
  { q: "faq.q6", a: "faq.a6" },
];

export function FAQ() {
  const { t } = useT();
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base font-medium">{t(f.q)}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{t(f.a)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
