import Image from "next/image";
import { Fragment } from "react";
import {
  UserSearch,
  ClipboardCheck,
  FileText,
  Plane,
  Headset,
  Users,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "@/components/reveal";

const STEPS = [
  { number: "01", icon: UserSearch, label: "Source" },
  { number: "02", icon: ClipboardCheck, label: "Screen" },
  { number: "03", icon: FileText, label: "Document" },
  { number: "04", icon: Plane, label: "Deploy" },
  { number: "05", icon: Headset, label: "Support" },
];

const MINI_STEPS = [
  { number: "01", label: "SOURCE", icon: Users, done: true },
  { number: "02", label: "SCREEN", icon: ClipboardCheck, done: true },
  { number: "03", label: "DOCUMENT", icon: FileText, done: true },
  { number: "04", label: "DEPLOY", icon: Plane, done: false },
  { number: "05", label: "SUPPORT", icon: Headset, done: false },
];

export function DeploymentProcess() {
  return (
    <section className="bg-white">
      {/* Block A — A Clear Path to Deployment */}
      <div className="relative overflow-hidden bg-tpm-navy">
        <Reveal className="grid grid-cols-1 items-center gap-12 px-[5%] py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
                END-TO-END RECRUITMENT
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                A Clear Path
                <br />
                to Deployment.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-md text-base text-white/70">
                From candidate sourcing to arrival support, every step is
                managed with care, transparency, and full regulatory
                compliance.
              </p>
            </RevealItem>

            <RevealItem className="mt-14 flex items-start">
              {STEPS.map((step, i) => (
                <Fragment key={step.number}>
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
                      {step.label}
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

          <RevealItem
            className="relative aspect-4/3 w-full overflow-hidden"
            style={{
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/recruitment-meeting.jpg"
              alt="TPM consultant reviewing deployment documentation with candidates"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealItem>
        </Reveal>
      </div>

      {/* Block B — Always Informed + Deployment Overview card */}
      <div className="relative overflow-hidden px-[5%] py-20 lg:py-24">
        <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue sm:text-sm">
                CLIENT COMMUNICATION REPORTING
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-3xl font-extrabold uppercase leading-[1.05] text-tpm-navy sm:text-4xl lg:text-5xl">
                Always Informed.
                <br />
                Every Step of the Way.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-md text-base text-zinc-600">
                Regular status updates keep employers informed from
                selection through departure.
              </p>
            </RevealItem>

            <RevealItem>
              <button
                type="button"
                className="mt-9 inline-flex items-center gap-2 bg-tpm-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-tpm-blue-light"
              >
                Discover Our Process
                <ChevronRight className="size-4" />
              </button>
            </RevealItem>
          </div>

          <RevealItem className="rounded-lg border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-tpm-navy sm:text-sm">
                <BarChart3 className="size-4 text-tpm-blue" />
                Deployment Overview
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-500 sm:text-sm">
                All Active Deployments
                <ChevronDown className="size-4" />
              </div>
            </div>

            <div className="px-5 py-6 sm:px-6">
              <div className="flex items-start">
                {MINI_STEPS.map((step, i) => (
                  <Fragment key={step.number}>
                    <div className="flex w-12 shrink-0 flex-col items-center gap-2 text-center sm:w-14">
                      <span className="whitespace-nowrap text-[9px] font-semibold text-zinc-400 sm:text-[10px]">
                        {step.number} {step.label}
                      </span>
                      <div
                        className={cn(
                          "relative flex size-10 shrink-0 items-center justify-center rounded-full border-2 sm:size-11",
                          step.done
                            ? "border-tpm-blue bg-blue-50 text-tpm-blue"
                            : "border-zinc-200 text-zinc-300"
                        )}
                      >
                        <step.icon className="size-4 sm:size-5" />
                        {step.done && (
                          <span className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-tpm-blue text-white ring-2 ring-white">
                            <Check className="size-2.5" strokeWidth={3} />
                          </span>
                        )}
                      </div>
                    </div>

                    {i < MINI_STEPS.length - 1 && (
                      <div
                        className={cn(
                          "mt-[38px] h-0.5 flex-1 sm:mt-[42px]",
                          step.done && MINI_STEPS[i + 1].done
                            ? "bg-tpm-blue"
                            : "bg-zinc-200"
                        )}
                      />
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="my-6 h-px bg-zinc-200" />

              <div className="hidden grid-cols-5 gap-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-400 sm:grid">
                <span>Candidate</span>
                <span>Position</span>
                <span>Destination</span>
                <span>Current Stage</span>
                <span>Last Update</span>
              </div>

              <div className="mt-3 grid grid-cols-2 items-center gap-3 sm:grid-cols-5">
                <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tpm-navy text-xs font-bold text-white">
                    JR
                  </div>
                  <span className="text-sm font-semibold text-tpm-navy">
                    Juan D. Reyes
                  </span>
                </div>
                <span className="text-sm text-zinc-600">
                  Industrial Electrician
                </span>
                <span className="text-sm text-zinc-600">Middle East</span>
                <span className="w-fit rounded-full bg-tpm-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  03 Document
                </span>
                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <span>May 16, 2024</span>
                  <ChevronRight className="size-4" />
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-200 py-4 text-center">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-tpm-blue hover:text-tpm-blue-light"
              >
                View All Deployments
                <ChevronRight className="size-4" />
              </button>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
