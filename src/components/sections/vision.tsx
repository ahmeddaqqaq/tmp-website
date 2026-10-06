import { useTranslations } from "next-intl";
import { Reveal, RevealItem } from "@/components/reveal";

export function Vision() {
  const t = useTranslations("Vision");

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-tpm-navy px-[5%] py-20"
    >
      <Reveal className="max-w-4xl">
        <RevealItem>
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-tpm-blue-light sm:text-sm">
            {t("kicker")}
          </p>
        </RevealItem>
        <RevealItem>
          <p className="text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
            {t("statement")}
          </p>
        </RevealItem>
      </Reveal>
    </section>
  );
}
