/**
 * Google Ads conversion and event tracking.
 * Replace AW-XXXXXXXXX and conversion labels with your actual Google Ads IDs.
 */

const GOOGLE_ADS_ID = "AW-XXXXXXXXX";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackPhoneClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/PHONE_CONVERSION_LABEL`,
    });
  }
}

export function trackFormSubmit() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/FORM_CONVERSION_LABEL`,
    });
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/WHATSAPP_CONVERSION_LABEL`,
    });
  }
}

export function trackGetQuoteClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/GET_QUOTE_CONVERSION_LABEL`,
    });
  }
}
