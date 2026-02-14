/**
 * Google Ads landing page optimization: UTM tracking, variant detection, conversion utilities.
 */

const GOOGLE_ADS_ID = "AW-XXXXXXXXX";
const GA_MEASUREMENT_ID = "G-XXXXXXXXX";

export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

/**
 * Get UTM parameters from the current URL (client-side).
 */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const params: UTMParams = {};
  const keys: (keyof UTMParams)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  keys.forEach((key) => {
    const value = search.get(key);
    if (value) params[key] = value;
  });
  return params;
}

/**
 * Append UTM parameters to a URL (e.g. for share links or CTAs).
 */
export function appendUTMParams(
  url: string,
  params: Partial<UTMParams>
): string {
  const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : "https://www.bhadeyatechnical.com");
  Object.entries(params).forEach(([key, value]) => {
    if (value) parsed.searchParams.set(key, value);
  });
  return parsed.toString();
}

/**
 * Detect if the user landed from a Google Ads campaign (has UTM params).
 */
export function isGoogleAdsLanding(): boolean {
  const params = getUTMParams();
  return (
    params.utm_medium === "cpc" ||
    params.utm_medium === "ppc" ||
    (typeof params.utm_source === "string" &&
      params.utm_source.toLowerCase() === "google")
  );
}

/**
 * Get landing page variant from URL (e.g. ?variant=form or ?lp=quote).
 * Use for A/B testing or different landing experiences.
 */
export function getLandingPageVariant(): string | null {
  if (typeof window === "undefined") return null;
  const search = new URLSearchParams(window.location.search);
  return search.get("variant") || search.get("lp") || null;
}

/**
 * Persist UTM params in sessionStorage for attribution across page views.
 */
export function persistUTMParams(): void {
  if (typeof window === "undefined") return;
  const params = getUTMParams();
  if (Object.keys(params).length > 0) {
    try {
      sessionStorage.setItem("utm_params", JSON.stringify(params));
    } catch {
      // ignore
    }
  }
}

/**
 * Retrieve persisted UTM params (e.g. when sending form submission to backend).
 */
export function getPersistedUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("utm_params");
    if (raw) {
      const parsed = JSON.parse(raw) as UTMParams;
      return typeof parsed === "object" && parsed !== null ? parsed : {};
    }
  } catch {
    // ignore
  }
  return {};
}

/**
 * Google Ads conversion ID (for use in gtag config or server-side).
 */
export function getGoogleAdsId(): string {
  return GOOGLE_ADS_ID;
}

/**
 * GA Measurement ID (for analytics).
 */
export function getGAMeasurementId(): string {
  return GA_MEASUREMENT_ID;
}
