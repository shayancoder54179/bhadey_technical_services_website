// GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-6FWYL6PN3Q";

// Declare gtag on window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Helper to safely call gtag
const safeGtag = (...args: any[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

// ============================================
// CONVERSION TRACKING FUNCTIONS
// ============================================

/**
 * Track phone call clicks
 */
export const trackPhoneClick = (phoneNumber?: string) => {
  safeGtag("event", "phone_click", {
    event_category: "contact",
    event_label: phoneNumber || "main_number",
    value: 1,
  });
  console.log("[Tracking] Phone click tracked:", phoneNumber);
};

/**
 * Track WhatsApp clicks
 */
export const trackWhatsAppClick = (source?: string) => {
  safeGtag("event", "whatsapp_click", {
    event_category: "contact",
    event_label: source || "general",
    value: 1,
  });
  console.log("[Tracking] WhatsApp click tracked:", source);
};

/**
 * Track "Get Quote" button clicks
 */
export const trackGetQuoteClick = (source?: string) => {
  safeGtag("event", "get_quote_click", {
    event_category: "lead",
    event_label: source || "general",
    value: 1,
  });
  console.log("[Tracking] Get Quote click tracked:", source);
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formType?: string) => {
  safeGtag("event", "form_submit", {
    event_category: "lead",
    event_label: formType || "contact_form",
    value: 1,
  });
  console.log("[Tracking] Form submission tracked:", formType);
};

/**
 * Track page views (optional - GA4 does this automatically)
 */
export const trackPageView = (url: string, title?: string) => {
  safeGtag("event", "page_view", {
    page_location: url,
    page_title: title || document.title,
  });
};

/**
 * Track service page views
 */
export const trackServiceView = (serviceName: string) => {
  safeGtag("event", "service_view", {
    event_category: "engagement",
    event_label: serviceName,
    value: 1,
  });
  console.log("[Tracking] Service view tracked:", serviceName);
};

/**
 * Track project gallery interactions
 */
export const trackProjectView = (projectName: string) => {
  safeGtag("event", "project_view", {
    event_category: "engagement",
    event_label: projectName,
    value: 1,
  });
};
