"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

// Fixed labels so the control is the same size and looks identical on both
// language versions; each language is written in its own script.
const LABEL: Record<Locale, string> = {
  en: "EN",
  ar: "عربي",
};

const SEGMENT =
  "flex w-10 items-center justify-center text-xs font-semibold transition-colors";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Nav");

  return (
    // dir="ltr" keeps the segment order (EN | عربي) the same on RTL pages.
    <div
      dir="ltr"
      className={cn(
        "inline-flex items-stretch border border-white/40 text-white",
        className
      )}
    >
      {routing.locales.map((l) => {
        const segmentClass = cn(
          SEGMENT,
          l === "ar" && "font-[family-name:var(--font-arabic)]"
        );

        return l === locale ? (
          <span
            key={l}
            lang={l}
            aria-current="true"
            className={cn(segmentClass, "bg-white text-tpm-navy")}
          >
            {LABEL[l]}
          </span>
        ) : (
          <Link
            key={l}
            href="/"
            locale={l}
            lang={l}
            hrefLang={l}
            aria-label={t("switchLanguage")}
            className={cn(
              segmentClass,
              "text-white/80 hover:bg-white/10 hover:text-white"
            )}
          >
            {LABEL[l]}
          </Link>
        );
      })}
    </div>
  );
}
