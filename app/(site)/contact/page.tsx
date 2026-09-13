import type { Metadata } from "next";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { company } from "@/data/company";
import { ContactForm } from "@/components/contact/ContactForm";

import { OG_DEFAULTS, OG_IMAGES, twitterCard } from "@/lib/og-image";
export const metadata: Metadata = {
  title: "Contact Us — Free Quote",
  description:
    "Get a free quote for GPR scanning, core cutting or excavation anywhere in the UAE. Call +971 55 692 6286 or message us on WhatsApp for a same-day reply.",
  alternates: { canonical: "https://www.bhadeya.com/contact" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Contact Us | Bhadeya Technical Services UAE",
    description:
      "Get a free quote for GPR scanning, core cutting & excavation. Call +971 55 692 6286. Serving Dubai, Abu Dhabi, Sharjah & UAE.",
    url: "https://www.bhadeya.com/contact",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: twitterCard(
    "Contact Us | Bhadeya Technical Services UAE",
    "Get a free quote for GPR scanning, core cutting & excavation. Call +971 55 692 6286. Serving Dubai, Abu Dhabi, Sharjah & UAE."
  ),
};

const sectionClass = "scroll-mt-20";

const contactFaqs = [
  {
    question: "How quickly do you respond?",
    answer:
      "We typically respond within 1-2 hours during business hours (Sun–Thu 8am–6pm, Sat 9am–3pm). For urgent inquiries, please call us directly or reach us via WhatsApp.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free quotes for GPR scanning, core cutting, and excavation services. Share your project details and we'll get back to you with a competitive quote.",
  },
  {
    question: "Can you come for site assessment?",
    answer:
      "Yes, we offer site visits across Dubai, Abu Dhabi, Sharjah, and other UAE emirates. Contact us to arrange a convenient time for an on-site assessment of your project.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

      {/* Page Hero */}
      <section
        className={`relative section-y overflow-hidden ${sectionClass}`}
        aria-labelledby="contact-hero-title"
      >
        <div className="absolute inset-0 bg-graphite" />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 12% 20%, rgba(234,88,12,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 xl:px-16">
          <header className="max-w-3xl">
            <p className="eyebrow eyebrow-dark">Reply within 1&ndash;2 hours</p>
            <h1 id="contact-hero-title" className="display-xl mt-5 text-white">
              Tell us what needs scanning, cutting or digging.
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/75">
              Free quotes for GPR scanning, core cutting and excavation anywhere
              in the UAE. Call, WhatsApp, or send the form &mdash; whichever is
              quicker for you.
            </p>
          </header>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="relative z-10 -mt-14 pb-4"
        aria-labelledby="contact-cards-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div
            id="contact-cards-heading"
            className="sr-only"
          >
            Contact options
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-lift">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Phone className="size-6" aria-hidden />
              </div>
              <h2 className="display-sm mb-2 text-graphite">Call Us</h2>
              <a
                href={`tel:${company.phoneClean}`}
                className="block font-mono text-lg font-semibold text-graphite transition-colors hover:text-safety"
              >
                {company.phone}
              </a>
              <p className="mt-1 text-sm text-slate-soft">
                Available during business hours
              </p>
              <a
                href={company.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#128C4B] transition-colors hover:text-[#25D366]"
              >
                <WhatsAppIcon className="size-4" aria-hidden />
                WhatsApp
              </a>
            </div>

            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-lift">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Mail className="size-6" aria-hidden />
              </div>
              <h2 className="display-sm mb-2 text-graphite">Email Us</h2>
              <a
                href={`mailto:${company.email}`}
                className="block break-all font-semibold text-graphite transition-colors hover:text-safety"
              >
                {company.email}
              </a>
              <p className="mt-1 text-sm text-slate-soft">
                We respond within 2 hours
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-lift">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Clock className="size-6" aria-hidden />
              </div>
              <h2 className="display-sm mb-2 text-graphite">
                Working Hours
              </h2>
              <p className="font-medium text-graphite">
                Sun - Thu: 8:00 AM - 6:00 PM
              </p>
              <p className="text-slate-deep">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-slate-deep">Friday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section - Split Layout */}
      <section
        className="section-y bg-mist"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="contact-form-heading"
            className="sr-only"
          >
            Send us a message
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <div className="lg:col-span-3">
              <div className="border border-hairline bg-surface p-6 md:p-8">
                <h3 className="display-lg mb-2 text-graphite">
                  Get a Free Quote
                </h3>
                <p className="text-slate-deep mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  1-2 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right - Additional Info */}
            <div className="lg:col-span-2 space-y-3">
              <div className="rounded-xl border border-hairline bg-surface p-6 shadow-lift">
                <Badge
                  variant="outline"
                  className="mb-4 rounded-md border-safety text-safety"
                >
                  Quick Response Guaranteed
                </Badge>
                <p className="text-slate-deep mb-6">
                  We typically respond within 1-2 hours during business hours.
                </p>

                <a
                  href={company.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] font-semibold text-white shadow-lift transition-colors hover:bg-[#20BD5A]"
                >
                  <WhatsAppIcon className="size-6" aria-hidden />
                  Chat on WhatsApp
                </a>

                <p className="text-sm text-slate-deep mb-3">
                  For urgent inquiries, call us directly:
                </p>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="font-mono text-lg font-semibold text-graphite hover:text-safety"
                >
                  {company.phone}
                </a>
              </div>

              <div className="rounded-xl border border-hairline bg-surface p-6 shadow-lift">
                <h3 className="font-semibold text-graphite mb-3 flex items-center gap-2 tracking-tight">
                  <MapPin className="size-5 text-safety" />
                  Where we work
                </h3>
                <ul className="grid grid-cols-1 gap-2 text-sm text-slate-deep" role="list">
                  {company.serviceAreas.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="size-1.5 bg-safety" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      {/* What to expect — reduces enquiry friction and tells people what
          detail to send so the first quote is the final one. */}
      <section
        className="section-y"
        aria-labelledby="what-happens-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="what-happens-heading"
            className="display-lg mb-4 text-graphite"
          >
            What happens after you get in touch
          </h2>
          <p className="mb-10 max-w-2xl text-slate-deep">
            Most enquiries reach us on WhatsApp, and most are answered the same
            working day. Here is how a job typically runs from first message to
            finished work.
          </p>

          <ol className="grid gap-8 md:grid-cols-3">
            <li>
              <span className="spec-label text-safety">
                Step 1 — Same day
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                We scope the job
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
                We ask what needs scanning or cutting, where the site is, what
                the element is, and when you need it. If the answer is
                straightforward we quote on the spot. If the site is complex, we
                arrange a visit before quoting rather than guessing.
              </p>
            </li>
            <li>
              <span className="spec-label text-safety">
                Step 2 — Before mobilising
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                Access and permits
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
                Where the site needs a permit to work, a gate pass or an
                induction, we sort that out before we travel. Where the work has
                to happen at night or outside trading hours, we schedule to the
                building&rsquo;s requirements.
              </p>
            </li>
            <li>
              <span className="spec-label text-safety">
                Step 3 — On site
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                Scan, mark, then cut
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
                Findings are marked directly on the surface and issued as a PDF
                report. Only then does anything get cut. If we find something
                where you need the hole, you hear it before the cut, not after.
              </p>
            </li>
          </ol>

          <div className="mt-12 border-l-4 border-safety bg-mist py-5 pr-5 pl-6">
            <h3 className="font-semibold tracking-tight">
              Send these six things and we can quote properly
            </h3>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-slate-deep sm:grid-cols-2">
              <li>The site address, and which floor</li>
              <li>Roughly how much area needs scanning</li>
              <li>What the element is — slab, wall, column or ground</li>
              <li>Whether the building is occupied</li>
              <li>What documentation you need at the end</li>
              <li>Your target date</li>
            </ul>
            <p className="mt-4 text-sm text-slate-deep">
              A quote given without these is a guess, and guesses get revised on
              site. Six lines is usually enough for a number that holds.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-y border-t border-hairline bg-surface"
        aria-labelledby="service-areas-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="service-areas-heading"
            className="display-lg mb-4 text-center text-graphite"
          >
            Service Areas
          </h2>
          <p className="text-center text-slate-deep max-w-2xl mx-auto mb-10">
            We provide GPR scanning, core cutting, and excavation services across
            all major UAE emirates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {company.serviceAreas.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 border border-hairline bg-mist px-5 py-2.5 text-graphite font-medium"
              >
                <MapPin className="size-4 text-safety" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="section-y border-t border-hairline bg-mist"
        aria-labelledby="contact-faq-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="contact-faq-heading"
            className="display-lg mb-10 text-center text-graphite"
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`contact-faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-deep leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
