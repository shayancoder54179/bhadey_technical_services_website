"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { trackWhatsAppClick, trackFormSubmit } from "@/lib/tracking";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const SERVICES = [
  "GPR Scanning",
  "Core Cutting",
  "Excavation",
  "Multiple Services",
  "Other",
] as const;

const LOCATIONS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ras Al Khaimah",
  "Fujairah",
  "Al Ain",
  "Other",
] as const;

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  projectLocation: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceRequired: "",
  projectLocation: "",
  message: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\s|-|\(|\)/g, "");
  return /^\+?[\d\s-]{9,15}$/.test(cleaned);
}

const WHATSAPP_NUMBER = "971556926286";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!validatePhone(form.phone)) newErrors.phone = "Please enter a valid phone number";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const name = form.fullName.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const company = form.companyName.trim();
    const service = form.serviceRequired;
    const location = form.projectLocation;
    const message = form.message.trim();

    const whatsappMessage = `
📋 *NEW INQUIRY - Bhadeya Technical Services*
━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏢 *Company:* ${company || "Not provided"}

🔧 *Service Required:* ${service || "Not specified"}
📍 *Project Location:* ${location || "Not specified"}

💬 *Message:*
${message}

━━━━━━━━━━━━━━━━━━━━━
📩 Sent from website contact form
`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    trackFormSubmit("contact_form");
    trackWhatsAppClick();
    window.open(whatsappURL, "_blank");

    setForm(initialFormState);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="text-sm text-muted-foreground">
        Your inquiry details will be sent directly to our team via WhatsApp for the fastest response.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Smith"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            className="h-11"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={!!errors.email}
            className="h-11"
          />
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone Number <span className="text-destructive">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+971 50 123 4567"
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          className="h-11"
        />
        {errors.phone && (
          <p className="text-sm text-destructive" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="companyName" className="text-sm font-medium text-foreground">
          Company Name <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="companyName"
          type="text"
          placeholder="Your company"
          value={form.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          className="h-11"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="serviceRequired" className="text-sm font-medium text-foreground">
            Service Required
          </label>
          <Select
            value={form.serviceRequired || undefined}
            onValueChange={(v) => updateField("serviceRequired", v)}
          >
            <SelectTrigger
              id="serviceRequired"
              className="h-11 w-full"
              aria-invalid={!!errors.serviceRequired}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="projectLocation" className="text-sm font-medium text-foreground">
            Project Location
          </label>
          <Select
            value={form.projectLocation || undefined}
            onValueChange={(v) => updateField("projectLocation", v)}
          >
            <SelectTrigger
              id="projectLocation"
              className="h-11 w-full"
              aria-invalid={!!errors.projectLocation}
            >
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message / Project Details <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Describe your project, location, timeline, and any specific requirements..."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={!!errors.message}
          rows={5}
          className="resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Button
          type="submit"
          className="h-12 w-full gap-2 bg-[var(--color-accent-orange)] text-white hover:bg-[var(--color-accent-orange)]/90 focus-visible:ring-[var(--color-accent-orange)]"
        >
          <MessageCircle className="size-5 shrink-0" aria-hidden />
          Send via WhatsApp
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          You&apos;ll be redirected to WhatsApp with your inquiry details
        </p>
      </div>
    </motion.form>
  );
}
