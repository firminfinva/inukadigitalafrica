import type { Metadata } from "next";
import { CustomPage } from "@/components/site/CustomPage";

export const metadata: Metadata = {
  title: "Formation sur mesure",
  description: "Demandez un programme de formation personnalisé pour vous ou votre équipe.",
  openGraph: {
    title: "Formation sur mesure — Inuka Digital Africa",
    description: "Demandez un programme de formation personnalisé pour vous ou votre équipe.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <CustomPage />;
}
