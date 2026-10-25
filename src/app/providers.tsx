"use client";

import { LanguageProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Toaster richColors position="top-right" />
    </LanguageProvider>
  );
}
