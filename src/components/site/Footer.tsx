import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, MessageCircle, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
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
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Empowering professionals and youth with future-ready skills. Online, in person,
            and built for the next decade of work.
          </p>
          <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="you@company.com" required />
            <Button type="submit" className="bg-gradient-primary text-primary-foreground">Subscribe</Button>
          </form>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/corporate" className="hover:text-foreground">Corporate training</Link></li>
            <li><Link to="/custom" className="hover:text-foreground">Custom learning</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Reach us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@lumina.academy</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp +000 000 000</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lumina Academy. All rights reserved.
      </div>
    </footer>
  );
}
