import type { Metadata } from "next";
import { AboutPage } from "@/components/site/AboutPage";

export const metadata: Metadata = {
  title: "À propos",
  description: "Notre mission, vision et méthode pour bâtir les talents du futur en Afrique et au-delà.",
  openGraph: {
    title: "À propos — Inuka Digital Africa",
    description: "Notre mission, vision et méthode pour bâtir les talents du futur en Afrique et au-delà.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <AboutPage />;
}
