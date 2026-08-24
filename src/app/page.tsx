import { Hero } from "@/components/sections/hero";
import { Recruitment } from "@/components/sections/recruitment";
import { DeploymentProcess } from "@/components/sections/deployment-process";
import { GlobalReach } from "@/components/sections/global-reach";
import { CtaFooter } from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Recruitment />
      <DeploymentProcess />
      <GlobalReach />
      <CtaFooter />
    </main>
  );
}
