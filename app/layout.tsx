import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

import { OG_IMAGES } from "@/lib/og-image";
const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-spec",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhadeya.com"),
  // Pages supply the topic only — the brand suffix is appended here, once.
  // Keep page titles under ~38 chars so the composed title stays inside
  // Google's ~60-character display limit.
  title: {
    default: "Bhadeya Technical | GPR Scanning Company in UAE",
    template: "%s | Bhadeya Technical",
  },
  description:
    "GPR concrete scanning, core cutting, excavation and interlock paving across Dubai, Abu Dhabi and Sharjah. Proceq GP8000 and GS8000. Free quote.",
  keywords: [
    "GPR scanning Dubai",
    "GPR scanning UAE",
    "GPR scanning Abu Dhabi",
    "GPR scanning Sharjah",
    "ground penetrating radar Dubai",
    "ground penetrating radar UAE",
    "core cutting Dubai",
    "core cutting UAE",
    "core cutting Abu Dhabi",
    "concrete core cutting Dubai",
    "diamond core cutting UAE",
    "excavation services Dubai",
    "excavation UAE",
    "rebar detection Dubai",
    "utility detection UAE",
    "post tension cable detection Dubai",
    "slab scanning Dubai",
    "Proceq GP8000 scanning",
    "Proceq GS8000 scanning",
    "GS8000 utility scanning UAE",
    "underground utility scanning Dubai",
    "utility survey before excavation UAE",
    "interlock Dubai",
    "interlock tiles UAE",
    "road pavement Dubai",
    "interlock paving contractor UAE",
    "diamond core cutting Dubai",
    "non destructive testing Dubai",
    "NDT services UAE",
    "subsurface scanning UAE",
    "Bhadeya Technical Services",
  ],
  authors: [{ name: "Bhadeya Technical Services L.L.C" }],
  creator: "Bhadeya Technical Services L.L.C",
  publisher: "Bhadeya Technical Services L.L.C",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.bhadeya.com",
    siteName: "Bhadeya Technical Services L.L.C",
    title:
      "Bhadeya Technical Services L.L.C | #1 GPR Scanning & Core Cutting in UAE",
    description:
      "Leading GPR scanning, core cutting & excavation services in Dubai, Abu Dhabi, Sharjah & UAE. 7+ years of trusted experience.",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhadeya Technical Services L.L.C | GPR Scanning & Core Cutting UAE",
    description:
      "Leading GPR scanning, core cutting & excavation services across UAE.",
    images: [OG_IMAGES[0].url],
  },
  alternates: {
    canonical: "https://www.bhadeya.com",
  },
  category: "Construction Services",
  manifest: "/manifest.json",
  verification: {
    google: "bJ30NNNcubrsJHFDXUOJSPxfW3p5yfmZyM7ZnYJcW4Y",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} overflow-x-hidden font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-6FWYL6PN3Q" />
    </html>
  );
}
