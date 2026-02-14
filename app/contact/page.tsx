import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  alternates: { canonical: "https://www.bhadeyatechnical.com/contact" },
  openGraph: {
    title: "Contact Us | Bhadeya Technical Services UAE",
    description:
      "Get a free quote for GPR scanning, core cutting & excavation. Call +971 55 692 6286. Serving Dubai, Abu Dhabi, Sharjah & UAE.",
    url: "https://www.bhadeyatechnical.com/contact",
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
        <div
          className="absolute inset-0 bg-[#0A2540]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 100% 100%, rgba(0, 102, 255, 0.06) 0%, transparent 50%)
            `,
            backgroundSize: "100% 100%, 100% 100%",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative container mx-auto px-4">
          <header className="max-w-3xl">
            <h1
              id="contact-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold leading-tight text-white mb-4"
            >
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Get a free quote for GPR scanning, core cutting, or excavation
              services
            </p>
          </header>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="relative -mt-10 z-10 px-4"
        aria-labelledby="contact-cards-heading"
      >
        <div className="container mx-auto">
          <div
            id="contact-cards-heading"
            className="sr-only"
          >
            Contact options
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <Card className="border-2 shadow-lg hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] mb-2">
                  <Phone className="size-6" aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-foreground">Call Us</h2>
              </CardHeader>
              <CardContent className="space-y-2">
                <a
                  href={`tel:${company.phoneClean}`}
                  className="text-lg font-semibold text-[var(--color-secondary-blue)] hover:underline block"
                >
                  {company.phone}
                </a>
                <p className="text-sm text-muted-foreground">
                  Available during business hours
                </p>
                <a
                  href={company.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] mb-2">
                  <Mail className="size-6" aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-foreground">Email Us</h2>
              </CardHeader>
              <CardContent className="space-y-2">
                <a
                  href={`mailto:${company.email}`}
                  className="text-lg font-semibold text-[var(--color-secondary-blue)] hover:underline block break-all"
                >
                  {company.email}
                </a>
                <p className="text-sm text-muted-foreground">
                  We respond within 2 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)] mb-2">
                  <Clock className="size-6" aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Working Hours
                </h2>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground font-medium">
                  Sun - Thu: 8:00 AM - 6:00 PM
                </p>
                <p className="text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-muted-foreground">Friday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Section - Split Layout */}
      <section
        className="py-16 md:py-20 lg:py-24 bg-muted/30"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="contact-form-heading"
            className="sr-only"
          >
            Send us a message
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border-2 border-border bg-card p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-2">
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
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-sm">
                <Badge
                  variant="outline"
                  className="mb-4 border-[var(--color-accent-orange)] text-[var(--color-accent-orange)]"
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
                  className="flex items-center justify-center gap-3 w-full h-14 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors mb-6"
                >
                  <MessageCircle className="size-6" />
                  Chat on WhatsApp
                </a>

                <p className="text-sm text-muted-foreground mb-3">
                  For urgent inquiries, call us directly:
                </p>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="text-lg font-semibold text-[var(--color-secondary-blue)] hover:underline"
                >
                  {company.phone}
                </a>
              </div>

              <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="size-5 text-[var(--color-accent-orange)]" />
                  Service Areas
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground" role="list">
                  {company.serviceAreas.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[var(--color-accent-orange)]" />
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
        className="bg-white py-16 md:py-20 lg:py-24"
        aria-labelledby="service-areas-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="service-areas-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center"
          >
            Service Areas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            We provide GPR scanning, core cutting, and excavation services across
            all major UAE emirates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {company.serviceAreas.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-2.5 text-foreground font-medium"
              >
                <MapPin className="size-4 text-[var(--color-accent-orange)]" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="bg-muted/50 py-16 md:py-20 lg:py-24"
        aria-labelledby="contact-faq-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="contact-faq-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
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
