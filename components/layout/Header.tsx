"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  ChevronDown,
  Radar,
  CircleDot,
  Shovel,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { trackGetQuoteClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Radar,
  CircleDot,
  Shovel,
  Layers,
};

const WHATSAPP_URL = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

const navLinkClass = (active: boolean) =>
  cn(
    "border-b-2 border-transparent px-1 py-2 text-sm font-medium transition-colors",
    active
      ? "border-signal-orange text-signal-orange"
      : "text-paper/75 hover:border-signal-orange/50 hover:text-paper"
  );

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 transition-colors duration-300",
        scrolled ? "bg-ink-raised/95 backdrop-blur-sm" : "bg-ink-raised"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center bg-paper px-2 py-1.5 transition-opacity hover:opacity-90"
          aria-label="Bhadeya Technical Services - Home"
        >
          <Image
            src="/images/bts_logo.png"
            alt="Bhadeya Technical Services LLC - GPR scanning diamond core cutting excavation Dubai UAE"
            width={180}
            height={60}
            priority={true}
            className="h-9 w-auto md:h-10 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Main navigation"
        >
          <Link href="/" className={navLinkClass(isActive("/"))}>
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1",
                navLinkClass(isServicesActive || servicesOpen)
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-label="Services menu"
            >
              Services
              <ChevronDown
                className={cn("size-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-1/2 top-full z-50 mt-0 w-[min(90vw,640px)] -translate-x-1/2 border border-white/10 bg-ink-raised p-4"
                role="menu"
              >
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = serviceIcons[service.icon] ?? Radar;
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex gap-3 p-3 transition-colors hover:bg-white/5"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center bg-signal-orange/10 text-signal-orange">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <span className="font-semibold text-paper">
                            {service.title}
                          </span>
                          <p className="mt-0.5 line-clamp-2 text-xs text-paper/60">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass(isActive(href))}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop right: phone + CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phoneClean}`}
            onClick={() => trackPhoneClick(company.phoneClean)}
            className="flex items-center gap-2 font-mono text-sm text-paper/80 transition-colors hover:text-signal-orange"
            aria-label={`Call us: ${company.phone}`}
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span>{company.phone}</span>
          </a>
          <Button
            asChild
            size="default"
            className="rounded-none border border-transparent bg-signal-orange font-semibold text-ink hover:border-ink hover:bg-signal-orange"
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("header")}>
              Get Free Quote
            </Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex items-center gap-2 lg:hidden">
            {/* WhatsApp CTA — mobile header only */}
            <a
              href="https://wa.me/971556926286?text=Hello, I would like to inquire about your GPR scanning services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-signal-orange px-3 py-1.5 text-xs font-semibold text-ink transition-opacity hover:opacity-90"
              onClick={() => trackWhatsAppClick("mobile_header")}
            >
              Free Quote
            </a>
            <SheetTrigger
              className="flex size-10 items-center justify-center text-paper hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="size-6" aria-hidden />
            </SheetTrigger>
          </div>
          <SheetContent
            side="right"
            className="flex w-full max-w-sm flex-col border-l border-white/10 bg-ink text-paper"
            showCloseButton={true}
          >
            <SheetHeader>
              <Link href="/" className="mb-2 block w-fit" onClick={() => setMobileOpen(false)}>
                <div className="inline-block bg-paper px-2 py-1.5">
                  <Image
                    src="/images/bts_logo.png"
                    alt="Bhadeya Technical Services LLC - GPR scanning core cutting Dubai UAE"
                    width={180}
                    height={60}
                    className="h-11 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </Link>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
              <Link
                href="/"
                className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <span className="mt-2 px-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper/50">
                Services
              </span>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/projects"
                className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => { setMobileOpen(false); trackGetQuoteClick(); }}
              >
                Contact
              </Link>
              <div className="my-4 border-t border-white/10" />
              <a
                href={`tel:${company.phoneClean}`}
                className="flex items-center gap-2 px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => { setMobileOpen(false); trackPhoneClick(); }}
              >
                <Phone className="size-4" aria-hidden />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="px-3 py-2.5 font-medium text-paper hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {company.email}
              </a>
              <Button
                asChild
                size="lg"
                className="mt-4 w-full rounded-none bg-signal-orange font-semibold text-ink hover:bg-signal-orange/90"
              >
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { setMobileOpen(false); trackWhatsAppClick("header"); }}
                >
                  Get Free Quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
