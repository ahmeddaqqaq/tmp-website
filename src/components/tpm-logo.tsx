import Image from "next/image";
import { cn } from "@/lib/utils";

export function TpmLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/tpm-logo-white.png"
      alt="TPM"
      width={1519}
      height={740}
      sizes="100px"
      loading="eager"
      className={cn("h-12 w-auto", className)}
    />
  );
}
