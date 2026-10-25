import type { Metadata } from "next";
import { CoursesPage } from "@/components/site/CoursesPage";

export const metadata: Metadata = {
  title: "Formations",
  description: "Toutes les catégories de formations : IA, leadership, data, cybersécurité, développement et plus.",
  openGraph: {
    title: "Formations — Inuka Digital Africa",
    description: "Toutes les catégories de formations : IA, leadership, data, cybersécurité, développement et plus.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <CoursesPage />;
}
