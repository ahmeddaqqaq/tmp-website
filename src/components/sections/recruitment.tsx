"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  UserSearch,
  FileCheck2,
  HeartHandshake,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const STATS = [
  { value: "6,000+", labelKey: "workers" },
  { value: "2014", labelKey: "established" },
  { value: "5+", labelKey: "markets" },
] as const;

const FRAMEWORK = [
  { number: "01", icon: UserSearch, key: "sourcing" },
  { number: "02", icon: FileCheck2, key: "documentation" },
  { number: "03", icon: HeartHandshake, key: "assistance" },
] as const;

const SKILLS = [
  { key: "construction", image: "/images/skill-construction.jpg" },
  { key: "healthcare", image: "/images/skill-healthcare.jpg" },
  { key: "hospitality", image: "/images/skill-hospitality.jpg" },
  { key: "aviation", image: "/images/skill-aviation.jpg" },
  { key: "manufacturing", image: "/images/skill-manufacturing.jpg" },
] as const;

export function Recruitment() {
  const t = useTranslations("Recruitment");

  return (
    <div style={{ perspective: 1600 }}>
      <motion.section
        initial={{ rotateX: -35, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
        className="relative bg-white"
      >
        {/* Block A — Recruitment, Simplified */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-12 px-[5%] py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
            <div className="relative">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue sm:text-sm">
                {t("kicker")}
              </p>
              <h2 className="whitespace-pre-line text-4xl font-extrabold uppercase leading-[1.02] text-tpm-navy sm:text-5xl lg:text-6xl">
                {t("headline")}
              </h2>
              <p className="mt-5 max-w-md text-base text-zinc-600">
                {t("body")}
              </p>

              <div className="mt-10 flex divide-x divide-zinc-200">
                {STATS.map((stat) => (
                  <div key={stat.labelKey} className="pe-8 first:ps-0 [&:not(:first-child)]:ps-8">
                    <div className="text-3xl font-bold text-tpm-blue sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {t(`stats.${stat.labelKey}`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="clip-diagonal relative aspect-4/3 w-full overflow-hidden">
              <Image
                src="/images/recruitment-meeting.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Block B — Our 3S Framework */}
        <div
          id="services"
          className="relative overflow-hidden bg-tpm-navy px-[5%] py-16"
        >

          <div className="mb-10 flex items-center gap-6">
            <p className="whitespace-nowrap text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
              {t("framework.title")}
            </p>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FRAMEWORK.map(({ number, icon: Icon, key }) => (
              <div
                key={number}
                className="group flex flex-col justify-between border border-white/15 bg-white/[0.03] p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-extrabold text-tpm-blue-light">
                    {number}
                  </span>
                  <div className="flex size-16 shrink-0 rotate-45 items-center justify-center border border-tpm-blue-light/50">
                    <Icon className="size-7 -rotate-45 text-white" />
                  </div>
                </div>

                <div className="mt-10 flex items-end justify-between">
                  <h3 className="whitespace-pre-line text-lg font-bold uppercase leading-snug text-white">
                    {t(`framework.items.${key}`)}
                  </h3>
                  <ChevronRight className="size-5 shrink-0 text-tpm-blue-light transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block C — Skills We Deploy */}
        <SkillsCarousel />
      </motion.section>
    </div>
  );
}

function SkillsCarousel() {
  const t = useTranslations("Recruitment.skills");
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // scrollLeft is 0 at the start edge and negative when scrolled in RTL.
    const scrolled = Math.abs(el.scrollLeft);
    setCanScrollPrev(scrolled > 4);
    setCanScrollNext(scrolled + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 12 : el.clientWidth * 0.6;
    const sign = getComputedStyle(el).direction === "rtl" ? -1 : 1;
    el.scrollBy({ left: sign * direction * amount, behavior: "smooth" });
  };

  return (
    <div className="bg-white px-[5%] py-16">
      <div className="mb-8 flex items-center gap-6">
        <h2 className="whitespace-nowrap text-2xl font-extrabold uppercase text-tpm-navy sm:text-3xl">
          {t("title")}
        </h2>
        <div className="h-px flex-1 bg-zinc-200" />
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label={t("previous")}
            disabled={!canScrollPrev}
            onClick={() => scrollByCard(-1)}
            className="flex size-9 items-center justify-center border border-zinc-300 text-tpm-navy transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            aria-label={t("next")}
            disabled={!canScrollNext}
            onClick={() => scrollByCard(1)}
            className="flex size-9 items-center justify-center border border-zinc-300 text-tpm-navy transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth"
      >
        {SKILLS.map((skill) => (
          <div
            key={skill.key}
            className="relative aspect-3/4 w-[45%] shrink-0 snap-start overflow-hidden sm:w-[31%] lg:w-[19%]"
          >
            <Image
              src={skill.image}
              alt={t(`items.${skill.key}`)}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-4 start-4 text-sm font-bold uppercase tracking-wide text-white">
              {t(`items.${skill.key}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
