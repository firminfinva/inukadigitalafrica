import {
  Briefcase, Brain, Cpu, Crown, Rocket, FileSpreadsheet,
  MessageSquare, BarChart3, ShieldCheck, Code2,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  modules: number;
  level: string;
};

export const categories: Category[] = [
  { slug: "business-management", title: "Business Management", description: "Strategy, operations, and modern leadership for growing organizations.", icon: Briefcase, duration: "6 weeks", modules: 8, level: "All levels" },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", description: "From foundations to applied AI: LLMs, agents, and real-world deployment.", icon: Brain, duration: "8 weeks", modules: 10, level: "Beginner → Advanced" },
  { slug: "technology-digital", title: "Technology & Digital Skills", description: "Master the digital toolkit every modern professional needs.", icon: Cpu, duration: "4 weeks", modules: 6, level: "Beginner" },
  { slug: "leadership", title: "Leadership", description: "Lead teams with clarity, empathy, and decisive execution.", icon: Crown, duration: "5 weeks", modules: 7, level: "Mid → Senior" },
  { slug: "entrepreneurship", title: "Entrepreneurship", description: "Validate, build, and grow ventures from idea to traction.", icon: Rocket, duration: "8 weeks", modules: 9, level: "All levels" },
  { slug: "office-tools", title: "Office & Enterprise Tools", description: "Excel, Google Workspace, Notion, and modern productivity stacks.", icon: FileSpreadsheet, duration: "3 weeks", modules: 5, level: "Beginner" },
  { slug: "communication", title: "Communication Skills", description: "Speak, write, and present with influence in any room.", icon: MessageSquare, duration: "4 weeks", modules: 6, level: "All levels" },
  { slug: "data-analysis", title: "Data Analysis", description: "From spreadsheets to SQL and Python — turn data into decisions.", icon: BarChart3, duration: "7 weeks", modules: 9, level: "Beginner → Intermediate" },
  { slug: "cybersecurity", title: "Cybersecurity", description: "Defend systems, audit risk, and protect what matters most.", icon: ShieldCheck, duration: "8 weeks", modules: 10, level: "Intermediate" },
  { slug: "software-development", title: "Software Development", description: "Full-stack engineering with modern frameworks and best practices.", icon: Code2, duration: "12 weeks", modules: 14, level: "Beginner → Advanced" },
];
