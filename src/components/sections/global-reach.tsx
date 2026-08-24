"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import mapData from "@/lib/world-map-data.json";
import { Reveal, RevealItem } from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "I cannot speak highly enough about how much of a pleasure it was working with TPM as our PRA partner. TPM has been an extremely valuable resource and we couldn't be any glad with the service that it provided. Even more than its great work, our company appreciated TPM's professionalism and constant communication.",
    name: "Shauqat Alam",
    title: "Consultant, Al Bilad Group – KSA",
  },
  {
    quote: "Best PRA ever!",
    name: "Bassam Qaoud",
    title: "HR Director, New Boy Saudi Arabia Limited",
  },
];

const ROUTES: { key: keyof typeof mapData.markers; label: string }[] = [
  { key: "kuwait", label: "KUWAIT" },
  { key: "qatar", label: "QATAR" },
  { key: "saudiArabia", label: "SAUDI ARABIA" },
  { key: "uae", label: "UNITED ARAB\nEMIRATES" },
  { key: "indonesia", label: "INDONESIA" },
];

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
];

function TrustedPartnerships() {
  return (
    <div className="relative overflow-hidden bg-white px-[5%] py-16">
      <Reveal>
        <RevealItem>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue sm:text-sm">
            TRUSTED PARTNERSHIPS
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="max-w-xl text-4xl font-extrabold uppercase leading-[1.05] text-tpm-navy sm:text-5xl">
            Built on Trust.
            <br />
            Proven Across Borders.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 max-w-md text-base text-zinc-600">
            Employers across industries rely on TPM for responsive, ethical,
            and dependable recruitment.
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
                className={`object-contain object-left grayscale ${logo.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </RevealItem>
      </Reveal>
    </div>
  );
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div>
      <p className="mb-8 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
        WHAT OUR PARTNERS SAY
      </p>

      <Quote className="size-10 text-tpm-blue-light/50" fill="currentColor" />

      <blockquote className="mt-4 line-clamp-4 min-h-[6.9rem] text-xl font-medium leading-snug text-white sm:min-h-[8.25rem] sm:text-2xl">
        {active.quote}
      </blockquote>

      <div className="mt-8 h-px w-16 bg-tpm-blue-light/40" />

      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-tpm-blue-light text-tpm-blue-light">
          <User className="size-5" />
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wide text-white">
            {active.name}
          </div>
          <div className="text-sm text-white/60">{active.title}</div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-5">
        <span className="text-sm text-white/70">
          <span className="text-xl font-bold text-tpm-blue-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(TESTIMONIALS.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex size-9 items-center justify-center rounded-full border border-tpm-blue-light/50 text-tpm-blue-light transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex size-9 items-center justify-center rounded-full border border-tpm-blue-light/50 text-tpm-blue-light transition-colors hover:bg-white/10"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function WorldMap() {
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
        OUR GLOBAL REACH
      </p>
      <p className="mb-6 max-w-sm text-base text-white/70">
        Connecting Filipino talent with opportunities across key
        international markets.
      </p>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="Map showing TPM's deployment routes from the Philippines to Kuwait, Qatar, Saudi Arabia, the United Arab Emirates, and Indonesia"
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

        {ROUTES.map(({ key, label }) => {
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
              {label.split("\n").map((line, i) => (
                <text
                  key={line}
                  x={m.x + offset.dx}
                  y={m.y + offset.dy + i * 12}
                  textAnchor={offset.anchor}
                  className="fill-white text-[11px] font-bold"
                  style={{ fontFamily: "var(--font-sans)" }}
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
    <section>
      <TrustedPartnerships />

      <div className="relative overflow-hidden bg-tpm-navy px-[5%] py-20">
        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
          <RevealItem className="lg:pr-10">
            <TestimonialCarousel />
          </RevealItem>
          <RevealItem className="lg:pl-10">
            <WorldMap />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
