import type { Metadata } from "next";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  MapPin,
} from "lucide-react";
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

export const metadata: Metadata = {
  title:
    "Contact Us | Get Free GPR Scanning Quote | Bhadeya Technical Services UAE",
  description:
    "Contact Bhadeya Technical Services LLC for GPR scanning, core cutting & excavation quotes. Call +971 55 692 6286 or email Bhadeyatechnical@gmail.com. Serving Dubai, Abu Dhabi, Sharjah & UAE.",
  alternates: { canonical: "https://www.bhadeya.com/contact" },
  openGraph: {
    title: "Contact Us | Bhadeya Technical Services UAE",
    description:
      "Get a free quote for GPR scanning, core cutting & excavation. Call +971 55 692 6286. Serving Dubai, Abu Dhabi, Sharjah & UAE.",
    url: "https://www.bhadeya.com/contact",
    type: "website",
  },
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
        className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${sectionClass}`}
        aria-labelledby="contact-hero-title"
      >
        <div className="absolute inset-0 bg-ink" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <header className="max-w-3xl">
            <h1
              id="contact-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold leading-tight text-paper mb-4 tracking-tight"
            >
              Contact Us
            </h1>
            <p className="text-lg text-paper/80">
              Get a free quote for GPR scanning, core cutting, or excavation
              services
            </p>
          </header>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="relative -mt-10 z-10"
        aria-labelledby="contact-cards-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div
            id="contact-cards-heading"
            className="sr-only"
          >
            Contact options
          </div>
          <div className="grid grid-cols-1 gap-px border border-steel/20 bg-steel/20 md:grid-cols-3">
            <div className="bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Phone className="size-6" aria-hidden />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Call Us</h2>
              <a
                href={`tel:${company.phoneClean}`}
                className="font-mono text-lg font-semibold text-foreground hover:text-signal-orange block"
              >
                {company.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Available during business hours
              </p>
              <a
                href={company.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline mt-2"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>

            <div className="bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Mail className="size-6" aria-hidden />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Email Us</h2>
              <a
                href={`mailto:${company.email}`}
                className="text-lg font-semibold text-foreground hover:text-signal-orange block break-all"
              >
                {company.email}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                We respond within 2 hours
              </p>
            </div>

            <div className="bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Clock className="size-6" aria-hidden />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                Working Hours
              </h2>
              <p className="text-foreground font-medium">
                Sun - Thu: 8:00 AM - 6:00 PM
              </p>
              <p className="text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-muted-foreground">Friday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section - Split Layout */}
      <section
        className="py-16 md:py-20 lg:py-24 bg-concrete"
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
              <div className="border border-steel/20 bg-paper p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                  Get a Free Quote
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  1-2 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right - Additional Info */}
            <div className="lg:col-span-2 space-y-3">
              <div className="border border-steel/20 bg-paper p-6">
                <Badge
                  variant="outline"
                  className="mb-4 rounded-none border-signal-orange text-signal-orange"
                >
                  Quick Response Guaranteed
                </Badge>
                <p className="text-muted-foreground mb-6">
                  We typically respond within 1-2 hours during business hours.
                </p>

                <a
                  href={company.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-14 bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors mb-6"
                >
                  <MessageCircle className="size-6" />
                  Chat on WhatsApp
                </a>

                <p className="text-sm text-muted-foreground mb-3">
                  For urgent inquiries, call us directly:
                </p>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="font-mono text-lg font-semibold text-foreground hover:text-signal-orange"
                >
                  {company.phone}
                </a>
              </div>

              <div className="border border-steel/20 bg-paper p-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 tracking-tight">
                  <MapPin className="size-5 text-signal-orange" />
                  Service Areas
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground" role="list">
                  {company.serviceAreas.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="size-1.5 bg-signal-orange" />
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
      <section
        className="bg-paper py-16 md:py-20 lg:py-24"
        aria-labelledby="service-areas-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="service-areas-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center tracking-tight"
          >
            Service Areas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            We provide GPR scanning, core cutting, and excavation services across
            all major UAE emirates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {company.serviceAreas.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 border border-steel/20 bg-concrete px-5 py-2.5 text-foreground font-medium"
              >
                <MapPin className="size-4 text-signal-orange" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="bg-concrete py-16 md:py-20 lg:py-24"
        aria-labelledby="contact-faq-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="contact-faq-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center tracking-tight"
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
                  <AccordionContent className="text-muted-foreground leading-relaxed">
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
