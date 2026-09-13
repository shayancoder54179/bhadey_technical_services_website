import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Answer-engine and AI-search crawlers are allowed explicitly rather than
      // inheriting the "*" rule, so tightening the catch-all later cannot
      // silently cut off AI citation traffic.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      // Bulk training-only scrapers that return no search traffic stay blocked.
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.bhadeya.com/sitemap.xml",
  };
}
