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
  weeks: number;
  modules: number;
  levelKey: TKey;
};

export const categories: Category[] = [
  { slug: "business-management", titleKey: "c.business.t", descKey: "c.business.d", icon: Briefcase, weeks: 6, modules: 8, levelKey: "cat.allLevels" },
  { slug: "artificial-intelligence", titleKey: "c.ai.t", descKey: "c.ai.d", icon: Brain, weeks: 8, modules: 10, levelKey: "cat.beginnerAdv" },
  { slug: "technology-digital", titleKey: "c.tech.t", descKey: "c.tech.d", icon: Cpu, weeks: 4, modules: 6, levelKey: "cat.beginner" },
  { slug: "leadership", titleKey: "c.lead.t", descKey: "c.lead.d", icon: Crown, weeks: 5, modules: 7, levelKey: "cat.midSenior" },
  { slug: "entrepreneurship", titleKey: "c.entre.t", descKey: "c.entre.d", icon: Rocket, weeks: 8, modules: 9, levelKey: "cat.allLevels" },
  { slug: "office-tools", titleKey: "c.office.t", descKey: "c.office.d", icon: FileSpreadsheet, weeks: 3, modules: 5, levelKey: "cat.beginner" },
  { slug: "communication", titleKey: "c.comm.t", descKey: "c.comm.d", icon: MessageSquare, weeks: 4, modules: 6, levelKey: "cat.allLevels" },
  { slug: "data-analysis", titleKey: "c.data.t", descKey: "c.data.d", icon: BarChart3, weeks: 7, modules: 9, levelKey: "cat.beginnerInter" },
  { slug: "cybersecurity", titleKey: "c.cyber.t", descKey: "c.cyber.d", icon: ShieldCheck, weeks: 8, modules: 10, levelKey: "cat.intermediate" },
  { slug: "software-development", titleKey: "c.dev.t", descKey: "c.dev.d", icon: Code2, weeks: 12, modules: 14, levelKey: "cat.beginnerAdv" },
];
