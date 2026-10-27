import {
  Briefcase, Brain, Cpu, Crown, Rocket, FileSpreadsheet,
  MessageSquare, BarChart3, ShieldCheck, Code2,
  type LucideIcon,
} from "lucide-react";
import type { TKey } from "@/lib/i18n";

export type Category = {
  slug: string;
  titleKey: TKey;
  descKey: TKey;
  icon: LucideIcon;
  levelKey: TKey;
};

export const categories: Category[] = [
  { slug: "business-management", titleKey: "c.business.t", descKey: "c.business.d", icon: Briefcase, levelKey: "cat.allLevels" },
  { slug: "artificial-intelligence", titleKey: "c.ai.t", descKey: "c.ai.d", icon: Brain, levelKey: "cat.beginnerAdv" },
  { slug: "technology-digital", titleKey: "c.tech.t", descKey: "c.tech.d", icon: Cpu, levelKey: "cat.beginner" },
  { slug: "leadership", titleKey: "c.lead.t", descKey: "c.lead.d", icon: Crown, levelKey: "cat.midSenior" },
  { slug: "entrepreneurship", titleKey: "c.entre.t", descKey: "c.entre.d", icon: Rocket, levelKey: "cat.allLevels" },
  { slug: "office-tools", titleKey: "c.office.t", descKey: "c.office.d", icon: FileSpreadsheet, levelKey: "cat.beginner" },
  { slug: "communication", titleKey: "c.comm.t", descKey: "c.comm.d", icon: MessageSquare, levelKey: "cat.allLevels" },
  { slug: "data-analysis", titleKey: "c.data.t", descKey: "c.data.d", icon: BarChart3, levelKey: "cat.beginnerInter" },
  { slug: "cybersecurity", titleKey: "c.cyber.t", descKey: "c.cyber.d", icon: ShieldCheck, levelKey: "cat.intermediate" },
  { slug: "software-development", titleKey: "c.dev.t", descKey: "c.dev.d", icon: Code2, levelKey: "cat.beginnerAdv" },
];
