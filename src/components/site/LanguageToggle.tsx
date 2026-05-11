import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useT();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      aria-label="Change language"
      className="font-mono text-xs uppercase tracking-wider"
    >
      {lang === "fr" ? "FR" : "EN"} <span className="mx-1 opacity-40">/</span>
      <span className="opacity-50">{lang === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
}
