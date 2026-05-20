"use client";

import { useState } from "react";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/tracking";

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
    trackFormSubmit(formId);
    trackWhatsAppClick(formId);

    const message = [
      "Hello Bhadeya, I'd like a free quote for GPR Scanning.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Emirate: ${form.emirate}`,
      `Project: ${form.description}`,
    ].join("\n");

    const url = `https://wa.me/971556926286?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#0A0E1A",
    border: "1px solid rgba(212,160,23,0.3)",
    borderRadius: "8px",
    color: "#F9FAFB",
    fontSize: "15px",
    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
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
          onFocus={(e) => (e.target.style.borderColor = "#D4A017")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.3)")}
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
          onFocus={(e) => (e.target.style.borderColor = "#D4A017")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.3)")}
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
          onFocus={(e) => (e.target.style.borderColor = "#D4A017")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.3)")}
        >
          <option value="" disabled>Select your emirate…</option>
          {EMIRATES.map((em) => (
            <option key={em} value={em} style={{ background: "#111827" }}>
              {em}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lp-description" style={labelStyle}>Project Description *</label>
        <textarea
          id="lp-description"
          name="description"
          required
          value={form.description}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your project — e.g. core cutting in a slab, renovation scan, utility mapping..."
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          onFocus={(e) => (e.target.style.borderColor = "#D4A017")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.3)")}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "16px",
          background: "linear-gradient(135deg, #D4A017 0%, #B8860B 100%)",
          border: "none",
          borderRadius: "8px",
          color: "#0A0E1A",
          fontSize: "17px",
          fontWeight: 700,
          fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
          letterSpacing: "0.03em",
          cursor: "pointer",
          transition: "opacity 0.2s, transform 0.1s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.92")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.99)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Get Free Quote via WhatsApp →
      </button>

      <p style={{ textAlign: "center", fontSize: "13px", color: "#6B7280", margin: 0 }}>
        🔒 Your details are only shared with Bhadeya. No spam, ever.
      </p>
    </form>
  );
}
