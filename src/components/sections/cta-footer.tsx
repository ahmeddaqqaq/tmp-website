import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { TpmLogo } from "@/components/tpm-logo";
import { Reveal, RevealItem } from "@/components/reveal";

const FOOTER_COLUMNS = [
  {
    heading: "Employers",
    links: [
      { label: "Recruitment Services", href: "#services" },
      { label: "Our Process", href: "#process" },
    ],
  },
  {
    heading: "Job Seekers",
    links: [
      { label: "Opportunities", href: "#opportunities" },
      { label: "Worker Assistance", href: "#support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About TPM", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

const OFFICE_ADDRESS =
  "Luz J. Henson Building 494, Soldado St. corner A. Mabini, Ermita, Manila, Philippines";

export function CtaFooter() {
  return (
    <footer>
      {/* CTA banner */}
      <div className="relative overflow-hidden bg-tpm-navy">
        <Reveal className="grid grid-cols-1 items-center gap-12 px-[5%] py-20 lg:grid-cols-2 lg:gap-8">
          <div>
            <RevealItem>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
                READY TO MOVE FORWARD?
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Turn Potential
                <br />
                Into Performance.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-md text-base text-white/70">
                Whether you need exceptional talent or your next
                international opportunity, TPM is ready to help.
              </p>
            </RevealItem>

            <RevealItem className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-tpm-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-tpm-blue-light"
              >
                Hire Filipino Talent
                <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Explore Job Opportunities
                <ArrowRight className="size-4" />
              </button>
            </RevealItem>
          </div>

          <RevealItem
            className="relative aspect-4/3 w-full overflow-hidden"
            style={{
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="TPM-deployed professionals across industries"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </RevealItem>
        </Reveal>
      </div>

      {/* Office + map */}
      <Reveal className="grid grid-cols-1 border-y border-zinc-200 bg-white lg:grid-cols-2">
        <RevealItem className="grid grid-cols-1 gap-8 px-[5%] py-12 sm:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-tpm-blue sm:text-sm">
              <MapPin className="size-4" />
              VISIT OUR MANILA OFFICE
            </div>
            <p className="max-w-xs text-lg font-medium text-tpm-navy">
              {OFFICE_ADDRESS}
            </p>
          </div>

          <div className="sm:border-l sm:border-zinc-200 sm:pl-8">
            <div className="mb-1 text-xs font-semibold tracking-[0.15em] text-tpm-blue sm:text-sm">
              WEBSITE
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
                DMW LICENSE
              </div>
              <p className="text-base text-tpm-navy">DMW-181-LB-09282023-R</p>
            </div>
          </div>
        </RevealItem>

        <RevealItem className="min-h-[280px] w-full lg:min-h-0">
          <iframe
            title="TPM Manila office location"
            src="https://www.google.com/maps?q=Luz+J.+Henson+Building,+Soldado+St,+Ermita,+Manila,+Philippines&output=embed"
            className="h-full min-h-[280px] w-full grayscale-[0.2]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealItem>
      </Reveal>

      {/* Footer */}
      <div className="relative overflow-hidden bg-tpm-navy px-[5%] py-16">
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_2fr]">
          <RevealItem>
            <TpmLogo />
            <p className="mt-5 text-sm font-bold uppercase tracking-wide text-white">
              Total Performance
              <br />
              Manpower Supply Corp.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Turning Potential into Performance
            </p>
          </RevealItem>

          <RevealItem className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-tpm-blue-light">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealItem>
        </Reveal>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Total Performance Manpower Supply
            Corp. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
