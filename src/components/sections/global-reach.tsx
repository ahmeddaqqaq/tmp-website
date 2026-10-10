"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import mapData from "@/lib/world-map-data.json";
import { Reveal, RevealItem } from "@/components/reveal";

// Quotes and titles live in the message files; people's names stay as written.
const TESTIMONIALS = [
  { id: "hussein", name: "Maher Hussein" },
  { id: "alam", name: "Shauqat Alam" },
  { id: "moagrabi", name: "Engr. Mohammad Al Moagrabi" },
  { id: "shareef", name: "Abdulaziz Al Shareef" },
  { id: "alayed", name: "Ahmed Ayed Abdulrahman Al Ayed" },
  { id: "reyes", name: "Sunny Reyes" },
  { id: "henaidy", name: "Omar Abdulaziz Henaidy" },
  { id: "qaoud", name: "Bassam Qaoud" },
  { id: "dawasari", name: "Khalid Al Dawasari" },
] as const;

const LONG_QUOTE_CHARS = 200;

const ROUTES = [
  { key: "kuwait" },
  { key: "qatar" },
  { key: "saudiArabia" },
  { key: "uae" },
  { key: "indonesia" },
] as const;

const LABEL_OFFSETS: Record<string, { dx: number; dy: number; anchor: "start" | "end" }> = {
  kuwait: { dx: -16, dy: -8, anchor: "end" },
  qatar: { dx: -16, dy: -4, anchor: "end" },
  saudiArabia: { dx: -16, dy: 0, anchor: "end" },
  uae: { dx: -16, dy: 4, anchor: "end" },
  indonesia: { dx: 16, dy: 6, anchor: "start" },
};

// Radial layout, centered on the Philippines hub. Angles are kept in the
// real west/south hemisphere relative to PH (every market genuinely is west
// or south of it) but evenly fanned out for a clean "surround" composition
// rather than literal Mercator positions.
const RADIUS = 235;
const MARKET_ANGLES_DEG: Record<string, number> = {
  kuwait: 255,
  qatar: 240,
  saudiArabia: 225,
  uae: 210,
  indonesia: 140,
};

const PARTNER_LOGOS: { name: string; file: string; invert?: boolean }[] = [
  { name: "Green Crescent Hospital", file: "green-crescent-hospital.png" },
  { name: "Al-Rashed Group Holding", file: "al-rashed-group-holding.svg", invert: true },
  { name: "stc", file: "stc-saudi-telecom-company.svg" },
  { name: "Al Hammadi Hospitals", file: "al-hamadi-hospital.png" },
  { name: "Arabian Gulf University", file: "arabian-gulf-university.png", invert: true },
  { name: "Al-Rajhi Building & Construction", file: "al-rajhi-building-construction.png", invert: true },
  { name: "The Saudi Investment Bank", file: "saudi-investment-bank.png", invert: true },
  { name: "Bank Albilad", file: "albilad.png" },
  { name: "Saudi Electricity Company", file: "saudi-electricity-company.svg" },
  { name: "Emdad Human Resources", file: "emdad.png" },
];

function TrustedPartnerships() {
  const t = useTranslations("GlobalReach.partners");

  return (
    <div className="relative overflow-hidden bg-white px-[5%] py-16">
      <Reveal>
        <RevealItem>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue sm:text-sm">
            {t("kicker")}
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="max-w-xl whitespace-pre-line text-4xl font-extrabold uppercase leading-[1.05] text-tpm-navy sm:text-5xl">
            {t("headline")}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 max-w-md text-base text-zinc-600">
            {t("body")}
          </p>
        </RevealItem>

        <RevealItem className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNER_LOGOS.map((logo) => (
            <div key={logo.file} className="relative h-10">
              <Image
                src={`/images/logos/${logo.file}`}
                alt={logo.name}
                fill
                sizes="180px"
                className={`object-contain object-left rtl:object-right grayscale ${logo.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </RevealItem>
      </Reveal>
    </div>
  );
}

function TestimonialCarousel() {
  const t = useTranslations("GlobalReach.testimonials");
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div>
      <p className="mb-8 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
        {t("kicker")}
      </p>

      <Quote className="size-10 text-tpm-blue-light/50" fill="currentColor" />

      {/* All testimonials share one grid cell so the block is always as tall
          as the longest one: no clipping, no layout shift between slides. */}
      <div className="mt-4 grid">
        {TESTIMONIALS.map((item, i) => {
          const isActive = i === index;
          const quote = t(`items.${item.id}.quote`);
          const isLong = quote.length > LONG_QUOTE_CHARS;
          return (
            <motion.figure
              key={item.id}
              className="col-start-1 row-start-1"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-hidden={!isActive}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <blockquote
                className={`font-medium leading-snug text-white ${
                  isLong ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                }`}
              >
                {quote}
              </blockquote>

              <div className="mt-8 h-px w-16 bg-tpm-blue-light/40" />

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-tpm-blue-light text-tpm-blue-light">
                  <User className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-white">
                    <bdi>{item.name}</bdi>
                  </div>
                  <div className="text-sm text-white/60">
                    {t(`items.${item.id}.title`)}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="mt-10 flex items-center gap-5">
        <span className="text-sm text-white/70" dir="ltr">
          <span className="text-xl font-bold text-tpm-blue-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(TESTIMONIALS.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={t("previous")}
            onClick={() => go(-1)}
            className="flex size-9 items-center justify-center rounded-full border border-tpm-blue-light/50 text-tpm-blue-light transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            aria-label={t("next")}
            onClick={() => go(1)}
            className="flex size-9 items-center justify-center rounded-full border border-tpm-blue-light/50 text-tpm-blue-light transition-colors hover:bg-white/10"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}

function WorldMap() {
  const t = useTranslations("GlobalReach.map");
  const { width, height, philippinesPath, markers } = mapData;
  const originalHub = markers.philippines;
  const hub = { x: width / 2, y: height / 2 };

  const radialMarkers = Object.fromEntries(
    Object.entries(MARKET_ANGLES_DEG).map(([key, deg]) => {
      const rad = (deg * Math.PI) / 180;
      // Rounded to avoid server/client floating-point drift in Math.cos/sin
      // (last-bit differences between JS engines) causing hydration mismatches.
      const x = Math.round((hub.x + RADIUS * Math.cos(rad)) * 100) / 100;
      const y = Math.round((hub.y + RADIUS * Math.sin(rad)) * 100) / 100;
      return [key, { x, y }];
    })
  ) as Record<string, { x: number; y: number }>;

  return (
    <div>
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
        {t("kicker")}
      </p>
      <p className="mb-6 max-w-sm text-base text-white/70">{t("body")}</p>

      {/* Geography doesn't mirror: the map stays left-to-right in RTL pages. */}
      <svg
        style={{ direction: "ltr" }}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label={t("ariaLabel")}
      >
        {ROUTES.map(({ key }) => {
          const m = radialMarkers[key];
          const midX = (hub.x + m.x) / 2;
          const midY = Math.min(hub.y, m.y) - 60;
          return (
            <path
              key={key}
              d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${m.x} ${m.y}`}
              fill="none"
              stroke="#4f8bff"
              strokeOpacity={0.45}
              strokeWidth={1.25}
              strokeDasharray="1 5"
              strokeLinecap="round"
            />
          );
        })}

        <g transform={`translate(${hub.x - originalHub.x} ${hub.y - originalHub.y})`}>
          <path
            d={philippinesPath}
            className="fill-white stroke-tpm-blue-light"
            strokeWidth={1.5}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              transform: "scale(2.9)",
            }}
          />
        </g>

        <circle cx={hub.x} cy={hub.y} r={64} className="fill-tpm-blue/10" />
        <circle
          cx={hub.x}
          cy={hub.y}
          r={64}
          className="fill-tpm-blue-light/20 animate-ping"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <circle cx={hub.x} cy={hub.y} r={4} className="fill-white stroke-tpm-blue-light" strokeWidth={2} />

        {ROUTES.map(({ key }) => {
          const m = radialMarkers[key];
          const offset = LABEL_OFFSETS[key];
          return (
            <g key={key}>
              <circle cx={m.x} cy={m.y} r={7} className="fill-tpm-blue/25" />
              <circle
                cx={m.x}
                cy={m.y}
                r={3.5}
                className="fill-tpm-blue-light stroke-white"
                strokeWidth={1.5}
              />
              {t(`markets.${key}`).split("\n").map((line, i) => (
                <text
                  key={line}
                  x={m.x + offset.dx}
                  y={m.y + offset.dy + i * 12}
                  textAnchor={offset.anchor}
                  className="fill-white text-[11px] font-bold"
                  style={{ fontFamily: "var(--font-sans), var(--font-arabic), sans-serif" }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function GlobalReach() {
  return (
    <section id="employers">
      <TrustedPartnerships />

      <div className="relative overflow-hidden bg-tpm-navy px-[5%] py-20">
        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
          <RevealItem className="lg:pe-10">
            <TestimonialCarousel />
          </RevealItem>
          <RevealItem className="lg:ps-10">
            <WorldMap />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
