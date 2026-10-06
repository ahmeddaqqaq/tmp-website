import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { MapPin, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { TpmLogo } from "@/components/tpm-logo";
import { Reveal, RevealItem } from "@/components/reveal";
import {
  CONTACT_EMAIL,
  OFFICE_COORDINATES,
  WHATSAPP_DISPLAY,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/contact";

type FooterLink = { key: string; href: string; external?: boolean };

const mapSrc = (locale: string) =>
  // A fixed coordinate (not a text search) so Google drops exactly one pin.
  `https://www.google.com/maps?q=${OFFICE_COORDINATES.lat},${OFFICE_COORDINATES.lng}&z=17&hl=${locale}&output=embed`;

export function CtaFooter() {
  const t = useTranslations("Footer");
  const tContact = useTranslations("Contact");
  const locale = useLocale();

  const whatsapp = whatsappUrl(tContact("whatsappPrefill"));
  const columns: {
    key: "employers" | "company" | "touch";
    links: FooterLink[];
  }[] = [
    {
      key: "employers",
      links: [
        { key: "services", href: "#services" },
        { key: "process", href: "#process" },
      ],
    },
    {
      key: "company",
      links: [
        { key: "vision", href: "#vision" },
        { key: "contact", href: "#contact" },
      ],
    },
    {
      key: "touch",
      links: [
        { key: "whatsapp", href: whatsapp, external: true },
        { key: "email", href: mailtoUrl(), external: true },
      ],
    },
  ];

  return (
    <footer>
      {/* CTA banner */}
      <div className="relative overflow-hidden bg-tpm-navy">
        <Reveal className="grid grid-cols-1 items-center gap-12 px-[5%] py-20 lg:grid-cols-2 lg:gap-8">
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
                {t("cta.kicker")}
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="whitespace-pre-line text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                {t("cta.headline")}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-md text-base text-white/70">
                {t("cta.body")}
              </p>
            </RevealItem>

            <RevealItem className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={mailtoUrl(tContact("hireSubject"))}
                className="inline-flex items-center gap-2 bg-tpm-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-tpm-blue-light"
              >
                {t("cta.hire")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                {t("cta.explore")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </RevealItem>
          </div>

          <RevealItem
            className="clip-diagonal relative aspect-4/3 w-full overflow-hidden"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt={t("cta.imageAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealItem>
        </Reveal>
      </div>

      {/* Office + map */}
      <div id="contact">
        <Reveal className="grid grid-cols-1 border-y border-zinc-200 bg-white lg:grid-cols-2">
          <RevealItem className="grid grid-cols-1 gap-8 px-[5%] py-12 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-tpm-blue sm:text-sm">
                <MapPin className="size-4" />
                {t("office.visit")}
              </div>
              <p className="max-w-xs text-lg font-medium text-tpm-navy">
                {t("office.address")}
              </p>

              <div className="mt-6 space-y-3 border-t border-zinc-200 pt-6">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-tpm-navy hover:text-tpm-blue"
                >
                  <MessageCircle className="size-4 shrink-0 text-tpm-blue" />
                  {t("office.whatsapp")} <bdi dir="ltr">{WHATSAPP_DISPLAY}</bdi>
                </a>
                <a
                  href={mailtoUrl()}
                  className="flex items-center gap-3 text-base text-tpm-navy hover:text-tpm-blue"
                >
                  <Mail className="size-4 shrink-0 text-tpm-blue" />
                  <bdi dir="ltr">{CONTACT_EMAIL}</bdi>
                </a>
              </div>
            </div>

            <div className="sm:border-s sm:border-zinc-200 sm:ps-8">
              <div className="mb-1 text-xs font-semibold tracking-[0.15em] text-tpm-blue sm:text-sm">
              {t("office.website")}
            </div>
              <a
                href="https://www.tpmanpower.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-tpm-navy hover:text-tpm-blue"
              >
                www.tpmanpower.com
              </a>

              <div className="mt-6 border-t border-zinc-200 pt-6">
                <div className="mb-1 text-xs font-semibold tracking-[0.15em] text-tpm-blue sm:text-sm">
                {t("office.license")}
              </div>
                <p className="text-base text-tpm-navy">DMW-181-LB-09282023-R</p>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="min-h-[280px] w-full lg:min-h-0">
            <iframe
              title={t("office.mapTitle")}
              src={mapSrc(locale)}
              className="h-full min-h-[280px] w-full grayscale-[0.2]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </RevealItem>
        </Reveal>
      </div>

      {/* Footer */}
      <div className="relative overflow-hidden bg-tpm-navy px-[5%] py-16">
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_2fr]">
          <RevealItem>
            <TpmLogo />
            <p className="mt-5 whitespace-pre-line text-sm font-bold uppercase tracking-wide text-white">
              {t("brand.name")}
            </p>
            <p className="mt-3 text-sm text-white/60">
              {t("brand.tagline")}
            </p>
          </RevealItem>

          <RevealItem className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.key}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-tpm-blue-light">
                  {t(`columns.${col.key}.heading`)}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        target={link.external && link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {t(`columns.${col.key}.${link.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealItem>
        </Reveal>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
