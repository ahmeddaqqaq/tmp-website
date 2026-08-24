import Link from "next/link";
import { TpmLogo } from "@/components/tpm-logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Employers", href: "#employers" },
  { label: "Job Seekers", href: "#job-seekers" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <div className="relative z-20 border-b border-white/10">
      <header className="grid w-full grid-cols-2 items-center px-[5%] py-6 lg:grid-cols-3">
        <Link href="/" className="justify-self-start">
          <TpmLogo />
        </Link>

        <nav className="hidden items-center justify-self-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          className="mr-3 hidden justify-self-end rounded-none border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white lg:inline-flex"
        >
          Find Opportunities
        </Button>
      </header>
    </div>
  );
}
