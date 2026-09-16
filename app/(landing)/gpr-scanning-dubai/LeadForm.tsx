"use client";

import { useState } from "react";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/tracking";
import { notifyFormLead } from "@/lib/leadNotify";

interface FormState {
  name: string;
  phone: string;
  emirate: string;
  description: string;
}

interface LeadFormProps {
  formId?: string;
}

const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ras Al Khaimah",
  "Fujairah",
  "Al Ain",
  "Other",
];

export function LeadForm({ formId = "gpr_landing_whatsapp" }: LeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    emirate: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const lines = [
      "Hello Bhadeya, I'd like a free quote for GPR Scanning.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Emirate: ${form.emirate}`,
    ];
    if (form.description.trim()) lines.push(`Project: ${form.description.trim()}`);

    const url = `https://wa.me/971556926286?text=${encodeURIComponent(lines.join("\n"))}`;

    // Email the client the lead itself, so it survives even if the visitor
    // never presses send in WhatsApp. Not awaited - WhatsApp comes first.
    notifyFormLead({
      name: form.name,
      phone: form.phone,
      emirate: form.emirate,
      description: form.description,
    });

    trackFormSubmit(formId);
    trackWhatsAppClick(formId);

    // On phones, navigate in place: window.open is treated as a popup by Safari
    // and by the in-app browsers that ads traffic arrives in, and a blocked
    // popup means the lead silently never reaches WhatsApp. Desktop keeps the
    // new tab so the landing page stays open behind web.whatsapp.com.
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const go = () => {
      if (isMobile) {
        window.location.href = url;
      } else if (!window.open(url, "_blank", "noopener,noreferrer")) {
        // Popup blocked on desktop too - fall back rather than lose the lead.
        window.location.href = url;
      }
      setSubmitting(false);
    };

    // Give the GA4 hits a moment to leave before the browser hands off to
    // WhatsApp. form_submit is the conversion Google Ads imports, so losing it
    // here is what left the campaign with no signal to bid on.
    window.setTimeout(go, 250);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#FFFFFF",
    border: "1px solid #CBD5E1",
    color: "#0F172A",
    fontSize: "15px",
    fontFamily: "var(--font-inter), Inter, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontFamily: "var(--font-inter), Inter, sans-serif",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label htmlFor="lp-name" style={labelStyle}>Full Name *</label>
        <input
          id="lp-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Ahmed Al Mansouri"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#EA580C")}
          onBlur={(e) => (e.target.style.borderColor = "#CBD5E1")}
        />
      </div>

      <div>
        <label htmlFor="lp-phone" style={labelStyle}>Phone Number *</label>
        <input
          id="lp-phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+971 50 000 0000"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#EA580C")}
          onBlur={(e) => (e.target.style.borderColor = "#CBD5E1")}
        />
      </div>

      <div>
        <label htmlFor="lp-emirate" style={labelStyle}>Emirate *</label>
        <select
          id="lp-emirate"
          name="emirate"
          required
          value={form.emirate}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "#EA580C")}
          onBlur={(e) => (e.target.style.borderColor = "#CBD5E1")}
        >
          <option value="" disabled>Select your emirate…</option>
          {EMIRATES.map((em) => (
            <option key={em} value={em} style={{ background: "#FFFFFF" }}>
              {em}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lp-description" style={labelStyle}>Project Description (optional)</label>
        <textarea
          id="lp-description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your project — e.g. core cutting in a slab, renovation scan, utility mapping..."
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          onFocus={(e) => (e.target.style.borderColor = "#EA580C")}
          onBlur={(e) => (e.target.style.borderColor = "#CBD5E1")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          width: "100%",
          padding: "16px",
          background: "#EA580C",
          border: "none",
          color: "#FFFFFF",
          fontSize: "17px",
          fontWeight: 700,
          fontFamily: "var(--font-heading), 'Space Grotesk', sans-serif",
          letterSpacing: "0.03em",
          cursor: submitting ? "wait" : "pointer",
          opacity: submitting ? 0.7 : 1,
          transition: "opacity 0.2s, transform 0.1s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.92")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.99)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {submitting ? "Opening WhatsApp…" : "Get Free Quote via WhatsApp →"}
      </button>
    </form>
  );
}
