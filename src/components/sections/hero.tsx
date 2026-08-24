"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Award, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

const STATS = [
  { icon: Globe, value: "6,000+", label: "Workers Deployed" },
  { icon: Award, value: "10+", label: "Years of Service" },
  { icon: Users, value: "5+", label: "Global Markets" },
];

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
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-tpm-navy">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="TPM deployed professionals"
          fill
          priority
          className="object-cover object-[75%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tpm-navy via-tpm-navy/85 to-tpm-navy/30" />
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
              GLOBAL MANPOWER. HUMAN POTENTIAL.
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl font-extrabold uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              Turning
              <br />
              Potential
              <br />
              Into
              <br />
              Performance
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-md text-base text-white/80 sm:text-lg"
            >
              Connecting exceptional Filipino talent with trusted employers
              across the world.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button className="rounded-none bg-tpm-blue px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-tpm-blue-light">
                Partner with TPM
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-white/40 bg-transparent px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
              >
                Explore Opportunities
                <ArrowRight className="size-4" />
              </Button>
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
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 py-6 sm:px-8 sm:first:pl-0"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-tpm-blue-light/40">
                  <Icon className="size-6 text-tpm-blue-light" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {value}
                  </div>
                  <div className="text-xs font-semibold tracking-wide text-tpm-blue-light sm:text-sm">
                    {label.toUpperCase()}
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
