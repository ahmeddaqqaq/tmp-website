import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Vision } from "@/components/sections/vision";
import { Recruitment } from "@/components/sections/recruitment";
import { DeploymentProcess } from "@/components/sections/deployment-process";
import { GlobalReach } from "@/components/sections/global-reach";
import { CtaFooter } from "@/components/sections/cta-footer";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Vision />
      <Recruitment />
      <DeploymentProcess />
      <GlobalReach />
      <CtaFooter />
    </main>
  );
}
