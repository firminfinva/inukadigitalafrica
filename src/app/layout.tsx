import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import { SiteLayout } from "@/components/site/SiteLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Inuka Digital Africa — Future-ready training in AI, leadership & tech",
    template: "%s — Inuka Digital Africa",
  },
  description:
    "Modern training academy delivering AI, leadership, data, cybersecurity, and software courses for individuals, enterprises, and governments.",
  authors: [{ name: "Inuka Digital Africa" }],
  openGraph: {
    title: "Inuka Digital Africa — Future-ready training in AI, leadership & tech",
    description:
      "Modern training academy delivering AI, leadership, data, cybersecurity, and software courses for individuals, enterprises, and governments.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Inuka Digital Africa — Future-ready training in AI, leadership & tech",
    description:
      "Modern training academy delivering AI, leadership, data, cybersecurity, and software courses for individuals, enterprises, and governments.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.remove("dark");else document.documentElement.classList.add("dark");}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body>
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}
