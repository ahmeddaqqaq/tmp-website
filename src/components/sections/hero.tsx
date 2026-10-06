"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Award, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const STATS = [
  { icon: Globe, value: "6,000+", labelKey: "workers" },
  { icon: Award, value: "10+", labelKey: "years" },
  { icon: Users, value: "5+", labelKey: "markets" },
] as const;

const GRID_LINES = ["5%", "94.5%"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const t = useTranslations("Hero");
  const tContact = useTranslations("Contact");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-tpm-navy"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover object-[75%_30%] rtl:object-[25%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tpm-navy via-tpm-navy/85 to-tpm-navy/30 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-tpm-navy via-transparent to-tpm-navy/50" />
      </div>

      {/* decorative grid frame, matches the reference comp's rule lines */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        {GRID_LINES.map((left) => (
          <div
            key={left}
            className="absolute inset-y-0 w-px bg-white/10"
            style={{ left }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        <div className="flex w-full flex-1 items-center px-[5%]">
          <div className="max-w-2xl py-10">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm"
            >
              {t("kicker")}
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="whitespace-pre-line text-[clamp(2rem,10.4vw,3rem)] font-extrabold uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl rtl:lg:text-6xl"
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-md text-base text-white/80 sm:text-lg"
            >
              {t("subheading")}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={mailtoUrl(tContact("hireSubject"))}
                className={cn(
                  buttonVariants(),
                  "rounded-none bg-tpm-blue px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-tpm-blue-light"
                )}
              >
                {t("partnerCta")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
              <a
                href={whatsappUrl(tContact("whatsappPrefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-none border-white/40 bg-transparent px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
                )}
              >
                {t("exploreCta")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border-t border-white/10 bg-tpm-navy/60 backdrop-blur-sm"
        >
          <div className="grid w-full grid-cols-1 divide-y divide-white/10 px-[5%] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map(({ icon: Icon, value, labelKey }) => (
              <div
                key={labelKey}
                className="flex items-center gap-4 py-6 sm:px-8 sm:first:ps-0"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-tpm-blue-light/40">
                  <Icon className="size-6 text-tpm-blue-light" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {value}
                  </div>
                  <div className="text-xs font-semibold tracking-wide text-tpm-blue-light sm:text-sm">
                    {t(`stats.${labelKey}`).toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
