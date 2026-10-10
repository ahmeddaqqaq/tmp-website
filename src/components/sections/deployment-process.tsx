import Image from "next/image";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import {
  UserSearch,
  ClipboardCheck,
  FileText,
  Plane,
  Headset,
  Users,
  ChevronRight,
} from "lucide-react";
import { Reveal, RevealItem } from "@/components/reveal";

const STEPS = [
  { number: "01", icon: UserSearch, key: "source" },
  { number: "02", icon: ClipboardCheck, key: "screen" },
  { number: "03", icon: FileText, key: "document" },
  { number: "04", icon: Plane, key: "deploy" },
  { number: "05", icon: Headset, key: "support" },
] as const;

const MINI_STEPS = [
  { number: "01", label: "SOURCE", icon: Users, done: true },
  { number: "02", label: "SCREEN", icon: ClipboardCheck, done: true },
  { number: "03", label: "DOCUMENT", icon: FileText, done: true },
  { number: "04", label: "DEPLOY", icon: Plane, done: false },
  { number: "05", label: "SUPPORT", icon: Headset, done: false },
];

export function DeploymentProcess() {
  const t = useTranslations("Process");

  return (
    <section id="process" className="bg-white">
      {/* Block A — A Clear Path to Deployment */}
      <div className="relative overflow-hidden bg-tpm-navy">
        <Reveal className="grid grid-cols-1 items-center gap-12 px-[5%] py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
                {t("kicker")}
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="whitespace-pre-line text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                {t("headline")}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-md text-base text-white/70">
                {t("body")}
              </p>
            </RevealItem>

            <RevealItem className="mt-14 flex items-start">
              {STEPS.map((step, i) => (
                <Fragment key={step.key}>
                  <div className="flex w-16 shrink-0 flex-col items-center text-center sm:w-20">
                    <div className="flex h-20 w-14 shrink-0 items-center justify-center">
                      <div className="flex size-14 rotate-45 items-center justify-center border border-tpm-blue-light/50">
                        <step.icon className="size-6 -rotate-45 text-white" />
                      </div>
                    </div>
                    <div className="h-5 w-px bg-tpm-blue-light/50" />
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-tpm-blue-light bg-tpm-navy text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <span className="mt-3 whitespace-nowrap text-xs font-bold uppercase tracking-wide text-white">
                      {t(`steps.${step.key}`)}
                    </span>
                  </div>

                  {i < STEPS.length - 1 && (
                    <div className="mt-[118px] flex flex-1 items-center">
                      <div className="h-px flex-1 bg-tpm-blue-light/40" />
                      <div className="mx-1 size-1.5 shrink-0 rotate-45 border border-tpm-blue-light/60" />
                      <div className="h-px flex-1 bg-tpm-blue-light/40" />
                    </div>
                  )}
                </Fragment>
              ))}
            </RevealItem>
          </div>

          <RevealItem className="clip-diagonal relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/deployment-passports.jpg"
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
