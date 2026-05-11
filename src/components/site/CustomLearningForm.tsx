import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles, Send } from "lucide-react";

export function CustomLearningForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received! Our team will reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant md:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs">
        <Sparkles className="h-3.5 w-3.5 text-accent" /> Smart learning request
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="goal">What do you want to learn?</Label>
          <Textarea
            id="goal"
            name="goal"
            required
            placeholder="E.g. Train our 30 sales managers on applied AI for customer insights..."
            className="mt-2 min-h-[120px]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Your name</Label>
            <Input id="name" name="name" required className="mt-2" placeholder="Jane Doe" />
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" name="email" required className="mt-2" placeholder="jane@company.com" />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" className="mt-2" placeholder="Company / Institution" />
          </div>
          <div>
            <Label htmlFor="employees">Number of learners</Label>
            <Select name="employees">
              <SelectTrigger id="employees" className="mt-2"><SelectValue placeholder="Select range" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Just me</SelectItem>
                <SelectItem value="2-10">2–10</SelectItem>
                <SelectItem value="11-50">11–50</SelectItem>
                <SelectItem value="51-200">51–200</SelectItem>
                <SelectItem value="200+">200+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="mode">Preferred mode</Label>
            <Select name="mode">
              <SelectTrigger id="mode" className="mt-2"><SelectValue placeholder="Select mode" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="in-person">In-person</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <Select name="timeline">
              <SelectTrigger id="timeline" className="mt-2"><SelectValue placeholder="Select timeline" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="quarter">This quarter</SelectItem>
                <SelectItem value="exploring">Just exploring</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="objectives">Objectives & success metrics</Label>
          <Textarea id="objectives" name="objectives" className="mt-2 min-h-[100px]" placeholder="What outcomes would make this program a success?" />
        </div>
      </div>

      <Button type="submit" disabled={submitting} size="lg" className="mt-7 w-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
        {submitting ? "Sending..." : (<>Send request <Send className="ml-2 h-4 w-4" /></>)}
      </Button>
    </form>
  );
}
