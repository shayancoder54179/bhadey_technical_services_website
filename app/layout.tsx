import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-plex",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhadeya.com"),
  title: {
    default:
      "GPR Scanning & Core Cutting UAE | Bhadeya Technical Services",
    template: "%s | Bhadeya Technical Services",
  },
  description:
    "Leading GPR scanning, core cutting, excavation and interlock paving services in Dubai, Abu Dhabi, Sharjah & UAE. Proceq GP8000 for concrete, Proceq GS8000 for ground. 7+ years experience. Trusted by Dubai Mall, Emaar, ADNOC & more.",
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
  authors: [{ name: "Bhadeya Technical Services LLC" }],
  creator: "Bhadeya Technical Services LLC",
  publisher: "Bhadeya Technical Services LLC",
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
    siteName: "Bhadeya Technical Services LLC",
    title:
      "Bhadeya Technical Services LLC | #1 GPR Scanning & Core Cutting in UAE",
    description:
      "Leading GPR scanning, core cutting & excavation services in Dubai, Abu Dhabi, Sharjah & UAE. 7+ years of trusted experience.",
    images: [
      {
        url: "/images/bts_logo.png",
        width: 1200,
        height: 630,
        alt: "Bhadeya Technical Services LLC - GPR Scanning & Core Cutting UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhadeya Technical Services LLC | GPR Scanning & Core Cutting UAE",
    description:
      "Leading GPR scanning, core cutting & excavation services across UAE.",
    images: ["/images/bts_logo.png"],
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} overflow-x-hidden font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-6FWYL6PN3Q" />
    </html>
  );
}
