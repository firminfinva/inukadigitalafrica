import type { Metadata } from "next";
import { ContactPage } from "@/components/site/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Joignez Inuka Digital Africa par email, WhatsApp ou réseaux sociaux. Réponse sous 24h.",
  openGraph: {
    title: "Contact — Inuka Digital Africa",
    description: "Joignez Inuka Digital Africa par email, WhatsApp ou réseaux sociaux. Réponse sous 24h.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <ContactPage />;
}
