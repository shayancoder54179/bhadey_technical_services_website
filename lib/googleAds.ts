// ============================================
// UTM & CAMPAIGN TRACKING UTILITIES
// ============================================

/**
 * Get UTM parameters from current URL
 */
export const getUTMParams = () => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };
};

/**
 * Check if user came from Google Ads
 */
export const isGoogleAdsLanding = () => {
  const params = getUTMParams();
  return (
    params.utm_source === "google" &&
    (params.utm_medium === "cpc" || params.utm_medium === "ppc")
  );
};

/**
 * Save UTM params to sessionStorage
 */
export const persistUTMParams = () => {
  if (typeof window === "undefined") return;

  const params = getUTMParams();
  if (params.utm_source) {
    sessionStorage.setItem("utm_params", JSON.stringify(params));
  }
};

/**
 * Get saved UTM params
 */
export const getPersistedUTMParams = () => {
  if (typeof window === "undefined") return {};

  const stored = sessionStorage.getItem("utm_params");
  return stored ? JSON.parse(stored) : {};
};

/**
 * Append UTM params to a URL
 */
export const appendUTMParams = (
  baseUrl: string,
  params: Record<string, string>
) => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
};
