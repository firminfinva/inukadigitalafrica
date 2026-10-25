import type { Metadata } from "next";
import { CorporatePage } from "@/components/site/CorporatePage";

export const metadata: Metadata = {
  title: "Formation Entreprise",
  description: "Programmes de formation pour entreprises, ONG et institutions gouvernementales.",
  openGraph: {
    title: "Formation Entreprise — Inuka Digital Africa",
    description: "Programmes de formation pour entreprises, ONG et institutions gouvernementales.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <CorporatePage />;
}
