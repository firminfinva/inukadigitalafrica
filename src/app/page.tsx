import type { Metadata } from "next";
import { HomePage } from "@/components/site/HomePage";

export const metadata: Metadata = {
  title: "Inuka Digital Africa — Formations IA, leadership & tech",
  description:
    "Académie de formation moderne : IA, leadership, data, cybersécurité, software pour particuliers, entreprises et gouvernements.",
  openGraph: {
    title: "Inuka Digital Africa — Formations IA, leadership & tech",
    description:
      "Académie de formation moderne : IA, leadership, data, cybersécurité, software pour particuliers, entreprises et gouvernements.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <HomePage />;
}
