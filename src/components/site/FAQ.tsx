import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Are courses available online and in person?", a: "Yes — every program runs in online, in-person, or hybrid formats. Choose what fits your team." },
  { q: "Do learners receive certificates?", a: "Yes. Every completed course awards a recognized Lumina Academy certificate of completion." },
  { q: "Can you build a custom program for my company?", a: "Absolutely. Use our Custom Learning request form and a strategist will design a program tailored to your goals." },
  { q: "Do you work with government and NGO institutions?", a: "Yes. We deliver training programs for enterprises, NGOs, and government bodies, with secure invoicing and reporting." },
  { q: "Which languages are supported?", a: "Our flagship programs are delivered in English and French, with more languages coming soon." },
  { q: "How is AI used in the learning experience?", a: "AI personalizes your path, suggests projects, and gives intelligent feedback on submissions." },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
