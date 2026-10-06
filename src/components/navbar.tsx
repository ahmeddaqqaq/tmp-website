"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TpmLogo } from "@/components/tpm-logo";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "vision", href: "#vision" },
  { key: "employers", href: "#employers" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

const CTA_CLASS =
  "rounded-none border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white";

export function Navbar() {
  const t = useTranslations("Nav");
  const tContact = useTranslations("Contact");
  const [open, setOpen] = useState(false);
  const whatsapp = whatsappUrl(tContact("whatsappPrefill"));

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative z-20 border-b border-white/10">
      <header className="grid w-full grid-cols-2 items-center px-[5%] py-6 lg:grid-cols-3">
        {/* In-page anchors use plain <a>: a locale-aware Link would re-route. */}
        <a href="#home" className="justify-self-start">
          <TpmLogo />
        </a>

        <nav className="hidden items-center justify-self-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              CTA_CLASS,
              "hidden lg:inline-flex"
            )}
          >
            {t("findOpportunities")}
          </a>

          {/* Same height as the CTA on desktop, and as the menu button below. */}
          <LanguageSwitcher className="h-10 lg:h-8" />

          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-tpm-navy/95 backdrop-blur-sm lg:hidden"
          >
            <div className="flex flex-col px-[5%] py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-base text-white/90 transition-colors hover:text-white"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  CTA_CLASS,
                  "mt-5 h-11"
                )}
              >
                {t("findOpportunities")}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
