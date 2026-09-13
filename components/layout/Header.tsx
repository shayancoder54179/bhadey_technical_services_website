"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
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
import { SERVICE_PHOTOS, SERVICE_PHOTO_POSITION } from "@/lib/service-photos";
import { trackGetQuoteClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


const WHATSAPP_URL = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

const navLinkClass = (active: boolean) =>
  cn(
    "border-b-2 border-transparent px-1 py-2 text-sm font-semibold tracking-wide transition-colors",
    active
      ? "border-safety text-safety"
      : "text-slate-deep hover:border-safety/40 hover:text-graphite"
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
        "fixed top-0 left-0 right-0 z-50 h-20 border-b transition-all duration-300",
        scrolled
          ? "border-hairline bg-surface/95 shadow-panel backdrop-blur-md"
          : "border-transparent bg-surface"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Bhadeya Technical Services - Home"
        >
          <Logo tone="dark" size="md" priority />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden h-full items-center gap-2 lg:flex"
          aria-label="Main navigation"
        >
          <Link href="/" className={navLinkClass(isActive("/"))}>
            Home
          </Link>

          {/* Services dropdown */}
          {/* full-height wrapper so `top-full` anchors the panel to the bottom of
              the header bar rather than the bottom of the button, which used to
              make the panel overlap the logo */}
          <div
            className="relative flex h-full items-center"
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
                className="absolute left-1/2 top-full z-50 mt-0 w-[min(92vw,720px)] -translate-x-1/2 rounded-b-xl border border-hairline border-t-0 bg-surface p-4 shadow-lift"
                role="menu"
              >
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {services.map((service) => {
                    const photo = SERVICE_PHOTOS[service.id];
                    const position =
                      SERVICE_PHOTO_POSITION[service.id] ?? "object-center";
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="group flex gap-3.5 rounded-lg p-2.5 transition-colors hover:bg-mist"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="relative size-16 shrink-0 overflow-hidden rounded-md bg-graphite">
                          {photo && (
                            <Image
                              src={photo}
                              alt=""
                              fill
                              aria-hidden
                              sizes="64px"
                              className={cn(
                                "object-cover transition-transform duration-500 group-hover:scale-105",
                                position
                              )}
                            />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="font-display text-base font-semibold text-graphite group-hover:text-safety">
                            {service.title}
                          </span>
                          <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-slate-soft">
                            {service.shortDescription}
                          </span>
                        </span>
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
            className="flex items-center gap-2 font-mono text-sm font-medium text-slate-deep transition-colors hover:text-safety"
            aria-label={`Call us: ${company.phone}`}
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span>{company.phone}</span>
          </a>
          <Button
            asChild
            size="default"
            className="rounded-md bg-safety font-semibold text-white shadow-panel transition-all hover:bg-safety/90 hover:shadow-lift"
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
              className="rounded-md bg-safety px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              onClick={() => trackWhatsAppClick("mobile_header")}
            >
              Free Quote
            </a>
            <SheetTrigger
              className="flex size-11 items-center justify-center rounded-md text-graphite transition-colors hover:bg-mist-tint"
              aria-label="Open menu"
            >
              <Menu className="size-6" aria-hidden />
            </SheetTrigger>
          </div>
          <SheetContent
            side="right"
            className="flex w-full max-w-sm flex-col border-l border-hairline bg-surface text-graphite"
            showCloseButton={true}
          >
            <SheetHeader>
              <Link href="/" className="mb-2 block w-fit" onClick={() => setMobileOpen(false)}>
                <Logo tone="dark" size="md" />
              </Link>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
              <Link
                href="/"
                className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <span className="mt-3 px-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-soft">
                Services
              </span>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/projects"
                className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => { setMobileOpen(false); trackGetQuoteClick(); }}
              >
                Contact
              </Link>
              <div className="my-4 border-t border-hairline" />
              <a
                href={`tel:${company.phoneClean}`}
                className="flex items-center gap-2 rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => { setMobileOpen(false); trackPhoneClick(); }}
              >
                <Phone className="size-4" aria-hidden />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="rounded-md px-3 py-3 font-semibold text-slate-deep transition-colors hover:bg-mist-tint hover:text-graphite"
                onClick={() => setMobileOpen(false)}
              >
                {company.email}
              </a>
              <Button
                asChild
                size="lg"
                className="mt-4 w-full rounded-md bg-safety font-semibold text-white hover:bg-safety/90"
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
