import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { GetQuoteLink, PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";

export const metadata: Metadata = {
  title: "GPR Scanning UAE | Same-Day Service | Bhadeya Technical",
  description:
    "Professional GPR concrete scanning across the UAE — Dubai, Abu Dhabi, Sharjah & beyond. Detect rebar, conduits & voids before drilling or cutting. 7+ years experience. Get a free quote on WhatsApp.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.bhadeya.com/services/gpr-scanning" },
  openGraph: {
    title: "GPR Scanning UAE | Same-Day Service | Bhadeya Technical",
    description:
      "Professional GPR concrete scanning across the UAE — Dubai, Abu Dhabi, Sharjah & beyond. Detect rebar, conduits & voids before drilling or cutting. 7+ years experience. Get a free quote on WhatsApp.",
    url: "https://www.bhadeya.com/gpr-scanning-dubai",
    type: "website",
  },
};

/* ─── design tokens — matches the main site's DESIGN.md (Ink + Signal Orange) ─── */
const C = {
  bg: "#0E0E0F",
  card: "#18181A",
  gold: "#F5820F",
  goldLight: "#FFA555",
  navy: "#18181A",
  text: "#FBFAF7",
  muted: "#9CA3AF",
  border: "rgba(245,130,15,0.22)",
};

const font = {
  barlow: "var(--font-heading), 'Space Grotesk', sans-serif",
  dm: "var(--font-inter), 'Inter', sans-serif",
};

/* ══════════════════════════════════════════════
   MINIMAL HEADER — same visual system as the main site
   (Ink Raised bar, Paper logo plate, flat Signal Orange CTA)
   but no nav menu, to keep this a focused landing page.
══════════════════════════════════════════════ */
function MinimalHeader() {
  return (
    <header
      style={{
        background: C.card,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <style>{`
        @media (max-width: 480px) {
          .header-logo { width: 130px !important; height: auto !important; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — on a Paper plate, matching the main site header */}
        <div style={{ display: "flex", alignItems: "center", background: "#FBFAF7", padding: "6px 8px" }}>
          <Image
            src="/images/bts_logo.png"
            alt="Bhadeya Technical Services"
            width={170}
            height={50}
            className="header-logo"
            style={{ objectFit: "contain", height: 40, width: "auto" }}
            priority
          />
        </div>

        {/* CTA phone — flat Signal Orange, no gradient/pill */}
        <PhoneLink
          href="tel:+971556926286"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            background: C.gold,
            fontFamily: font.barlow,
            fontWeight: 700,
            fontSize: 15,
            color: C.card,
            textDecoration: "none",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          +971 55 692 6286
        </PhoneLink>
      </div>
    </header>
  );
}

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
const TRUST_BADGES = [
  { icon: "✓", text: "7+ Years Experience" },
  { icon: "✓", text: "Same-Day Response" },
  { icon: "✓", text: "Proceq GP8000 Equipment" },
  { icon: "✓", text: "All UAE Emirates" },
];

function Hero() {
  return (
    <section
      style={{
        background: C.bg,
        padding: "60px 20px 80px",
      }}
    >
      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 420px;
          gap: 60px;
        }
        .hero-form {
          position: sticky;
          top: 80px;
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-form {
            position: static !important;
          }
        }
      `}</style>
      <div
        className="hero-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          alignItems: "start",
        }}
      >
        {/* Left: copy */}
        <div>
          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(245,130,15,0.12)",
              border: `1px solid ${C.border}`,
              borderRadius: 100,
              marginBottom: 24,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold, display: "inline-block" }} />
            <span
              style={{
                fontFamily: font.dm,
                fontSize: 13,
                fontWeight: 600,
                color: C.gold,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              UAE&apos;s Trusted GPR Scanning Service
            </span>
          </div>

          {/* headline */}
          <h1
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(42px, 5vw, 68px)",
              lineHeight: 1.0,
              color: C.text,
              letterSpacing: "-0.01em",
              marginBottom: 20,
            }}
          >
            GPR CONCRETE{" "}
            <span style={{ color: C.gold }}>SCANNING</span>
            <br />
            ACROSS THE UAE — FAST,
            <br />
            ACCURATE, SAFE.
          </h1>

          {/* subheadline */}
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 18,
              lineHeight: 1.65,
              color: C.muted,
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Detect rebar, post-tension cables, conduits, and voids before you
            drill or cut. Protect your team and your structure — get a free
            quote in minutes via WhatsApp.
          </p>

          {/* trust badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 48,
            }}
          >
            {TRUST_BADGES.map((b) => (
              <div
                key={b.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    color: C.gold,
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: font.dm,
                  }}
                >
                  {b.icon}
                </span>
                <span
                  style={{
                    fontFamily: font.dm,
                    fontSize: 14,
                    color: C.text,
                    fontWeight: 500,
                  }}
                >
                  {b.text}
                </span>
              </div>
            ))}
          </div>

          {/* secondary CTA */}
          <WhatsAppLink
            href="https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20a%20free%20GPR%20scanning%20quote."
            source="landing_hero"
            className="hero-wa-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              background: "#25D366",
              borderRadius: 10,
              fontFamily: font.barlow,
              fontWeight: 700,
              fontSize: 17,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </WhatsAppLink>
        </div>

        {/* Right: lead form */}
        <div
          className="hero-form"
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "36px 32px",
          }}
        >
          <p
            style={{
              fontFamily: font.barlow,
              fontWeight: 700,
              fontSize: 22,
              color: C.text,
              letterSpacing: "0.02em",
              marginBottom: 4,
            }}
          >
            GET A FREE QUOTE
          </p>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 14,
              color: C.muted,
              marginBottom: 28,
            }}
          >
            We&apos;ll respond within minutes on WhatsApp.
          </p>
          <LeadForm formId="gpr_landing_hero_form" />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CLIENT LOGO STRIP
══════════════════════════════════════════════ */
const CLIENTS = [
  "THE DUBAI MALL",
  "ADNOC",
  "EMAAR",
  "KEMPINSKI",
  "SHEIKH KHALIFA HOSPITAL",
];

function LogoStrip() {
  // Duplicate list for seamless loop
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section
      style={{
        background: C.card,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* "Trusted by" label */}
        <div
          style={{
            flexShrink: 0,
            padding: "0 28px",
            fontFamily: font.dm,
            fontSize: 12,
            fontWeight: 600,
            color: C.muted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            borderRight: `1px solid ${C.border}`,
            marginRight: 28,
          }}
        >
          Trusted by
        </div>

        {/* Scrolling track */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="logo-track">
            {items.map((name, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "0 36px",
                  borderRight: `1px solid ${C.border}`,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: font.barlow,
                    fontWeight: 700,
                    fontSize: 15,
                    color: C.muted,
                    letterSpacing: "0.12em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WHY CHOOSE BHADEYA — 4 FEATURE CARDS
══════════════════════════════════════════════ */
const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same-Day Response",
    body: "Submit a request before noon and our team will reach your site the same day in most cases. Emergency scanning available 7 days a week.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Structural Damage",
    body: "Our non-destructive GPR method locates hidden hazards before any drilling begins — protecting your slab, your team, and your budget.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Proceq GP8000 Equipment",
    body: "We operate the Proceq GP8000 — one of the most advanced concrete scanners available. High-res imaging, live 3-D view, instant results on-site.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "7+ Years, 500+ Projects",
    body: "From high-rises in Downtown Dubai to industrial facilities in Sharjah — our team has delivered accurate concrete scanning services across every major sector in the UAE.",
  },
];

function WhyChoose() {
  return (
    <section style={{ background: C.bg, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Why Us
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 50px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            WHY CONTRACTORS ACROSS THE UAE
            <br />
            <span style={{ color: C.gold }}>CHOOSE BHADEYA</span>
          </h2>
        </div>

        {/* 4-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "border-color 0.2s",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(212,160,23,0.1)",
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.gold,
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>

              <h3
                style={{
                  fontFamily: font.barlow,
                  fontWeight: 700,
                  fontSize: 22,
                  color: C.text,
                  letterSpacing: "0.01em",
                  lineHeight: 1.1,
                }}
              >
                {f.title}
              </h3>

              <p
                style={{
                  fontFamily: font.dm,
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   HOW IT WORKS — 3 STEPS
══════════════════════════════════════════════ */
const STEPS = [
  {
    num: "01",
    title: "Send Us Your Details",
    body: "Fill in the form above or message us on WhatsApp. Tell us the site location, type of work (drilling, cutting, etc.), and the best time to visit.",
  },
  {
    num: "02",
    title: "We Scan Your Slab",
    body: "Our technician arrives with the Proceq GP8000. We perform a grid scan of the target area and generate a real-time 2-D / 3-D map of what's inside your concrete.",
  },
  {
    num: "03",
    title: "You Drill With Confidence",
    body: "We mark safe drill/cut zones directly on the slab surface. You receive a digital scan report. Your crew proceeds knowing exactly what's below.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: C.bg,
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            The Process
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 50px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            HOW IT WORKS —{" "}
            <span style={{ color: C.gold }}>3 SIMPLE STEPS</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 40px 0 0",
                position: "relative",
              }}
            >
              {/* Step number bubble */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: C.gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: font.barlow,
                  fontWeight: 800,
                  fontSize: 20,
                  color: C.bg,
                  marginBottom: 28,
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: font.barlow,
                  fontWeight: 700,
                  fontSize: 24,
                  color: C.text,
                  letterSpacing: "0.01em",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: font.dm,
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 300,
                }}
              >
                {step.body}
              </p>

              {/* Mobile step divider */}
              {idx < STEPS.length - 1 && (
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    background: C.border,
                    margin: "40px 0",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <GetQuoteLink
            href="#lead-form"
            source="how_it_works_step1"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              background: C.gold,
              fontFamily: font.barlow,
              fontWeight: 700,
              fontSize: 18,
              color: C.bg,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            START WITH STEP 1 — GET A FREE QUOTE
          </GetQuoteLink>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   EQUIPMENT — PROCEQ GP8000
══════════════════════════════════════════════ */
const SPECS = [
  { label: "Scan Depth", value: "Up to 500 cm" },
  { label: "Frequency Range", value: "200 MHz – 4 GHz" },
  { label: "Display", value: "Live 2-D + 3-D view" },
  { label: "Connectivity", value: "Wi-Fi to Proceq Link app" },
  { label: "Weight", value: "2.7 kg (field-ready)" },
  { label: "Standard", value: "EN 13290 / ACI 228" },
];

const DETECTS = [
  "Rebar & post-tension cables",
  "Electrical conduits & pipes",
  "Voids, honeycombing & cracks",
  "Slab thickness mapping",
  "Plastic & metallic objects",
  "Layer boundaries in walls",
];

function Equipment() {
  return (
    <section style={{ background: C.card, padding: "80px 20px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Our Equipment
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 50px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            PROCEQ GP8000 —{" "}
            <span style={{ color: C.gold }}>MILITARY-GRADE SCANNING</span>
          </h2>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 16,
              color: C.muted,
              maxWidth: 560,
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            We invest in the best equipment so your results are never in doubt.
            The GP8000 is the current industry benchmark for concrete NDT scanning.
          </p>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left — spec table */}
          <div>
            <p
              style={{
                fontFamily: font.barlow,
                fontWeight: 700,
                fontSize: 18,
                color: C.text,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Technical Specifications
            </p>
            <div
              style={{
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {SPECS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderBottom: i < SPECS.length - 1 ? `1px solid ${C.border}` : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: font.dm,
                      fontSize: 14,
                      color: C.muted,
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: font.barlow,
                      fontSize: 16,
                      fontWeight: 700,
                      color: C.text,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — what it detects */}
          <div>
            <p
              style={{
                fontFamily: font.barlow,
                fontWeight: 700,
                fontSize: 18,
                color: C.text,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              What We Can Detect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DETECTS.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    background: "rgba(212,160,23,0.06)",
                    border: `1px solid ${C.border}`,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: C.gold,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: font.dm,
                      fontSize: 15,
                      color: C.text,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Equipment badge */}
            <div
              style={{
                marginTop: 28,
                padding: "16px 20px",
                background: "rgba(212,160,23,0.08)",
                border: `1px solid ${C.gold}`,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span style={{ fontFamily: font.dm, fontSize: 14, color: C.gold, fontWeight: 600 }}>
                Certified equipment • Fully calibrated • Insured operators
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   GALLERY — JOB SITE PHOTOS
══════════════════════════════════════════════ */
const GALLERY_PHOTOS = [
  {
    src: "/images/WhatsApp Image 2025-12-28 at 00.56.37.jpeg",
    alt: "GPR scanning operator marking safe drill zones on a concrete slab in Dubai",
    caption: "Slab scan — Downtown Dubai",
  },
  {
    src: "/images/WhatsApp Image 2025-12-28 at 00.56.38.jpeg",
    alt: "Proceq GP8000 scanner in use on a construction site floor",
    caption: "Live scan — Abu Dhabi project",
  },
  {
    src: "/images/WhatsApp Image 2025-12-28 at 00.56.39.jpeg",
    alt: "Rebar detection result marked on concrete before core cutting",
    caption: "Pre-cut rebar mapping",
  },
  {
    src: "/images/WhatsApp Image 2025-12-28 at 00.56.39 (2).jpeg",
    alt: "GPR technician scanning concrete wall for embedded utilities",
    caption: "Wall scan — conduit detection",
  },
  {
    src: "/images/WhatsApp Image 2025-12-28 at 00.56.40.jpeg",
    alt: "Marked concrete surface showing safe areas after GPR scan",
    caption: "Post-scan marking — safe zones confirmed",
  },
];

function Gallery() {
  return (
    <section style={{ background: C.bg, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Our Work
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 50px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            REAL SCANS.{" "}
            <span style={{ color: C.gold }}>REAL JOB SITES.</span>
          </h2>
        </div>

        {/* Bento-style grid: 1 large left + 2×2 right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 12,
          }}
        >
          {/* Large featured photo */}
          <div
            style={{
              gridRow: "1 / 3",
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              minHeight: 420,
              background: "#111",
            }}
          >
            <Image
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 20px 16px",
                background: "linear-gradient(transparent, rgba(14,14,15,0.85))",
              }}
            >
              <p
                style={{
                  fontFamily: font.dm,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                  margin: 0,
                }}
              >
                {GALLERY_PHOTOS[0].caption}
              </p>
            </div>
          </div>

          {/* 4 smaller photos */}
          {GALLERY_PHOTOS.slice(1).map((photo) => (
            <div
              key={photo.src}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/3",
                background: "#111",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 275px"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "14px 14px 10px",
                  background: "linear-gradient(transparent, rgba(14,14,15,0.8))",
                }}
              >
                <p
                  style={{
                    fontFamily: font.dm,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    margin: 0,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caption note */}
        <p
          style={{
            fontFamily: font.dm,
            fontSize: 13,
            color: C.muted,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Photos from recent GPR scanning jobs across Dubai, Abu Dhabi & Sharjah.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SERVICE AREAS — 6 EMIRATE CARDS
══════════════════════════════════════════════ */
const SERVICE_AREAS = [
  {
    name: "Dubai",
    note: "Primary hub · same-day",
    highlights: ["Downtown", "JLT", "DIFC", "Al Quoz", "Deira"],
    primary: true,
  },
  {
    name: "Abu Dhabi",
    note: "Available within 24 hrs",
    highlights: ["Yas Island", "Reem Island", "Khalidiyah", "Mussafah"],
    primary: false,
  },
  {
    name: "Sharjah",
    note: "Available within 24 hrs",
    highlights: ["Industrial Area", "Al Majaz", "Al Nahda"],
    primary: false,
  },
  {
    name: "Ras Al Khaimah",
    note: "Available — contact us",
    highlights: ["RAK City", "Al Nakheel", "Jebel Ali area"],
    primary: false,
  },
  {
    name: "Fujairah",
    note: "Available — contact us",
    highlights: ["Port area", "Commercial districts"],
    primary: false,
  },
  {
    name: "Al Ain",
    note: "Available — contact us",
    highlights: ["Old town", "Industrial zones"],
    primary: false,
  },
];

function ServiceAreas() {
  return (
    <section
      style={{
        background: C.card,
        padding: "80px 20px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Coverage
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 50px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            WE COVER{" "}
            <span style={{ color: C.gold }}>ALL 6 EMIRATES</span>
          </h2>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 16,
              color: C.muted,
              maxWidth: 480,
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            Based in Dubai, we mobilise across the UAE with no extra logistics
            fees for most locations.
          </p>
        </div>

        {/* 3×2 card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              style={{
                background: area.primary
                  ? "rgba(212,160,23,0.08)"
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${area.primary ? C.gold : C.border}`,
                borderRadius: 14,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Primary badge */}
              {area.primary && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    padding: "4px 10px",
                    background: C.gold,
                    borderRadius: 100,
                    fontFamily: font.dm,
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.bg,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Primary
                </div>
              )}

              {/* Location pin icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={area.primary ? C.gold : C.muted}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: 14 }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <h3
                style={{
                  fontFamily: font.barlow,
                  fontWeight: 800,
                  fontSize: 26,
                  color: area.primary ? C.gold : C.text,
                  letterSpacing: "0.01em",
                  marginBottom: 4,
                }}
              >
                {area.name}
              </h3>

              <p
                style={{
                  fontFamily: font.dm,
                  fontSize: 13,
                  color: C.muted,
                  marginBottom: 18,
                  fontWeight: 500,
                }}
              >
                {area.note}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {area.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${C.border}`,
                      borderRadius: 6,
                      fontFamily: font.dm,
                      fontSize: 12,
                      color: C.muted,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FAQ ACCORDION — pure HTML details/summary
══════════════════════════════════════════════ */
const FAQS = [
  {
    q: "What is GPR scanning and why do I need it?",
    a: "Ground Penetrating Radar (GPR) sends radar pulses into concrete and maps what's inside — rebar, post-tension cables, conduits, voids. Before drilling, cutting, or coring any concrete element, a GPR survey tells you exactly where hidden hazards are so you can avoid them. It prevents structural damage, utility strikes, and — most importantly — injuries.",
  },
  {
    q: "How long does a typical scan take on-site?",
    a: "A standard slab scan (up to 20–30 m²) takes 1–2 hours including setup, scanning, and marking. Larger areas or complex geometries may take a half-day. We'll give you a time estimate when you submit your request.",
  },
  {
    q: "Do you work on weekends and outside business hours?",
    a: "Yes. We operate Sunday–Thursday 8 AM–6 PM and Saturday 9 AM–3 PM as standard hours. Emergency and out-of-hours scanning is available — message us on WhatsApp and we'll confirm availability.",
  },
  {
    q: "How accurate is GPR scanning for detecting rebar?",
    a: "The Proceq GP8000 can detect rebar, conduits, and other objects with positional accuracy within ±10 mm under ideal conditions. Accuracy depends on concrete mix, moisture content, and object depth — our technicians will advise if any factors could affect results for your specific slab.",
  },
  {
    q: "Is GPR scanning safe for occupied buildings?",
    a: "Completely safe. GPR is a non-destructive, non-ionising technology — it emits no radiation and poses no risk to people or structure. There is no need to clear the area during scanning.",
  },
  {
    q: "What do I receive after the scan?",
    a: "You receive on-slab physical markings showing safe drill/cut zones, plus a digital scan report (PDF) with 2-D scan images. For Proceq GP8000 scans we can also provide 3-D rendered output via the Proceq Link app.",
  },
  {
    q: "Do you provide a quote before coming to site?",
    a: "Yes. Send us the site location, approximate area to be scanned, and the type of work planned via WhatsApp or the form above. We'll respond with a fixed-price quote — no surprises.",
  },
];

function FaqAccordion() {
  return (
    <section style={{ background: C.bg, padding: "80px 20px" }}>
      <style>{`
        details.faq-item summary { list-style: none; }
        details.faq-item summary::-webkit-details-marker { display: none; }
        details.faq-item[open] .faq-icon-plus { display: none; }
        details.faq-item:not([open]) .faq-icon-minus { display: none; }
        details.faq-item[open] {
          border-color: rgba(212,160,23,0.4) !important;
        }
        details.faq-item summary:hover {
          color: #F0C040;
        }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 48px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            COMMON QUESTIONS
            <br />
            <span style={{ color: C.gold }}>ABOUT GPR SCANNING</span>
          </h2>
        </div>

        {/* Accordion items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="faq-item"
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <summary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  cursor: "pointer",
                  fontFamily: font.barlow,
                  fontWeight: 700,
                  fontSize: 18,
                  color: C.text,
                  letterSpacing: "0.01em",
                  lineHeight: 1.3,
                  userSelect: "none",
                  transition: "color 0.2s",
                  gap: 16,
                }}
              >
                <span>{faq.q}</span>
                <span style={{ flexShrink: 0, color: C.gold }}>
                  {/* Plus icon */}
                  <svg className="faq-icon-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  {/* Minus icon */}
                  <svg className="faq-icon-minus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>

              <div
                style={{
                  padding: "0 24px 24px",
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                <p
                  style={{
                    fontFamily: font.dm,
                    fontSize: 15,
                    color: C.muted,
                    lineHeight: 1.75,
                    margin: "16px 0 0",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   BOTTOM LEAD FORM
══════════════════════════════════════════════ */
function BottomLeadForm() {
  return (
    <section
      id="lead-form"
      style={{
        background: C.bg,
        padding: "80px 20px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Free Quote
          </p>
          <h2
            style={{
              fontFamily: font.barlow,
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 46px)",
              color: C.text,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              marginBottom: 12,
            }}
          >
            GET YOUR FREE GPR
            <br />
            <span style={{ color: C.gold }}>SCANNING QUOTE</span>
          </h2>
          <p
            style={{
              fontFamily: font.dm,
              fontSize: 15,
              color: C.muted,
              lineHeight: 1.65,
            }}
          >
            Fill in the form and we&apos;ll respond within minutes on WhatsApp.
          </p>
        </div>

        {/* Card wrapping the form */}
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "36px 32px",
          }}
        >
          <LeadForm formId="gpr_landing_bottom_form" />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FINAL CTA SECTION
══════════════════════════════════════════════ */
function FinalCta() {
  return (
    <section
      style={{
        background: C.bg,
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: font.barlow,
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 60px)",
            color: C.text,
            letterSpacing: "-0.01em",
            lineHeight: 1.0,
            marginBottom: 20,
          }}
        >
          READY TO SCAN
          <br />
          <span style={{ color: C.gold }}>YOUR SITE?</span>
        </h2>

        <p
          style={{
            fontFamily: font.dm,
            fontSize: 18,
            color: C.muted,
            lineHeight: 1.65,
            marginBottom: 48,
            maxWidth: 520,
            margin: "0 auto 48px",
          }}
        >
          Don&apos;t drill blind. Get a professional GPR scan before any concrete
          work begins. Free quote, fast response, all emirates covered.
        </p>

        {/* CTA button pair */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <WhatsAppLink
            href="https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20a%20free%20GPR%20scanning%20quote."
            source="landing_cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 36px",
              background: "#25D366",
              borderRadius: 12,
              fontFamily: font.barlow,
              fontWeight: 700,
              fontSize: 19,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </WhatsAppLink>

          <PhoneLink
            href="tel:+971556926286"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 36px",
              background: "transparent",
              border: `2px solid ${C.gold}`,
              borderRadius: 12,
              fontFamily: font.barlow,
              fontWeight: 700,
              fontSize: 19,
              color: C.gold,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Direct
          </PhoneLink>
        </div>

        {/* Trust note */}
        <p
          style={{
            fontFamily: font.dm,
            fontSize: 14,
            color: C.muted,
          }}
        >
          7+ years · 500+ projects · All UAE Emirates · No call centre — you
          speak directly with our team.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MINIMAL FOOTER STRIP
══════════════════════════════════════════════ */
function FooterStrip() {
  return (
    <footer
      style={{
        background: C.card,
        borderTop: "1px solid rgba(245,130,15,0.3)",
        padding: "28px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Brand — logo on a Paper plate, matching the main site footer */}
        <div style={{ display: "flex", alignItems: "center", background: "#FBFAF7", padding: "6px 8px" }}>
          <Image
            src="/images/bts_logo.png"
            alt="Bhadeya Technical Services"
            width={140}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a
            href="https://www.bhadeya.com"
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              color: C.muted,
              textDecoration: "none",
            }}
          >
            Main Site
          </a>
          <a
            href="https://www.bhadeya.com/services/gpr-scanning"
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              color: C.muted,
              textDecoration: "none",
            }}
          >
            GPR Scanning
          </a>
          <PhoneLink
            href="tel:+971556926286"
            style={{
              fontFamily: font.dm,
              fontSize: 13,
              color: C.muted,
              textDecoration: "none",
            }}
          >
            +971 55 692 6286
          </PhoneLink>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: font.dm,
            fontSize: 12,
            color: "rgba(156,163,175,0.5)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Bhadeya Technical Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   STICKY MOBILE BOTTOM BAR (hidden on desktop)
══════════════════════════════════════════════ */
function StickyMobileBar() {
  return (
    <>
      <style>{`
        .mobile-bar {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-bar {
            display: flex;
          }
          body {
            padding-bottom: 72px;
          }
        }
      `}</style>
      <div
        className="mobile-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#040810",
          borderTop: `1px solid ${C.border}`,
          padding: "10px 16px",
          gap: 10,
          alignItems: "center",
          justifyContent: "stretch",
        }}
      >
        {/* Call button */}
        <PhoneLink
          href="tel:+971556926286"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px 0",
            background: "transparent",
            border: `1px solid ${C.gold}`,
            borderRadius: 10,
            fontFamily: font.barlow,
            fontWeight: 700,
            fontSize: 16,
            color: C.gold,
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call
        </PhoneLink>

        {/* WhatsApp button */}
        <WhatsAppLink
          href="https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20a%20free%20GPR%20scanning%20quote."
          source="landing_sticky_bar"
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px 0",
            background: "#25D366",
            border: "none",
            borderRadius: 10,
            fontFamily: font.barlow,
            fontWeight: 700,
            fontSize: 16,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Get Free Quote on WhatsApp
        </WhatsAppLink>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════ */
const landingPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GPR Concrete Scanning UAE",
    alternateName: "Ground Penetrating Radar Scanning UAE",
    description:
      "Professional GPR concrete scanning across the UAE. Detect rebar, conduits, post-tension cables and voids before drilling or cutting using the Proceq GP8000. Same-day response in Dubai, next-day across all emirates.",
    provider: { "@id": "https://www.bhadeya.com/#localbusiness" },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: "https://www.bhadeya.com/gpr-scanning-dubai",
    serviceType: "GPR Scanning",
    category: "Non-Destructive Testing",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GPR scanning and why do I need it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ground Penetrating Radar (GPR) sends radar pulses into concrete and maps what's inside — rebar, post-tension cables, conduits, voids. Before drilling, cutting, or coring any concrete element, a GPR survey tells you exactly where hidden hazards are so you can avoid them. It prevents structural damage, utility strikes, and injuries. In the UAE, GPR scanning is a standard safety requirement before any core cutting or drilling work on concrete structures.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical scan take on-site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard slab scan (up to 20–30 m²) takes 1–2 hours including setup, scanning, and marking. Larger areas or complex geometries may take a half-day. We provide time estimates when you submit your request, and same-day service is available for urgent projects across the UAE.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work on weekends and outside business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We operate Sunday–Thursday 8 AM–6 PM and Saturday 9 AM–3 PM as standard hours. Emergency and out-of-hours scanning is available — message us on WhatsApp and we'll confirm availability for your project.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is GPR scanning for detecting rebar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Proceq GP8000 can detect rebar, conduits, and other objects with positional accuracy within ±10 mm under ideal conditions. Accuracy depends on concrete mix, moisture content, and object depth — our technicians will advise if any factors could affect results for your specific slab.",
        },
      },
      {
        "@type": "Question",
        name: "Is GPR scanning safe for occupied buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completely safe. GPR is a non-destructive, non-ionising technology — it emits no radiation and poses no risk to people or structure. There is no need to clear the area during scanning, making it suitable for occupied buildings and operational facilities.",
        },
      },
      {
        "@type": "Question",
        name: "What do I receive after the scan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You receive on-slab physical markings showing safe drill and cut zones, plus a digital scan report in PDF format with 2D scan images. For Proceq GP8000 scans we can also provide 3D rendered output via the Proceq Link app for use in BIM and coordination drawings.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide a quote before coming to site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Send us the site location, approximate area to be scanned, and the type of work planned via WhatsApp or the form on this page. We'll respond with a fixed-price quote — no surprises. Most quotes are confirmed within 1 hour during business hours.",
        },
      },
    ],
  },
];

export default function GprScanningDubaiPage() {
  return (
    <main style={{ background: C.bg, minHeight: "100vh", color: C.text }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />
      <MinimalHeader />
      <Hero />
      <LogoStrip />
      <WhyChoose />
      <HowItWorks />
      <Equipment />
      <Gallery />
      <ServiceAreas />
      <FaqAccordion />
      <BottomLeadForm />
      <FinalCta />
      <FooterStrip />
      <StickyMobileBar />
    </main>
  );
}
