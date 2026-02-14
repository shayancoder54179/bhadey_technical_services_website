import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAdsHead } from "@/components/seo/GoogleAdsHead";
import {
  Header,
  Footer,
  WhatsAppButton,
  CallButton,
  BackToTop,
  PageTransition,
} from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhadeya.com"),
  title: {
    default:
      "Bhadeya Technical Services LLC | #1 GPR Scanning & Core Cutting in UAE",
    template: "%s | Bhadeya Technical Services LLC",
  },
  description:
    "Leading GPR scanning, core cutting & excavation services in Dubai, Abu Dhabi, Sharjah & UAE. Using Proceq GP8000 technology. 5+ years experience. Trusted by Dubai Mall, Emaar, ADNOC & more.",
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
    icon: "/images/bts_logo.png",
    apple: "/images/bts_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.bhadeya.com",
    siteName: "Bhadeya Technical Services LLC",
    title:
      "Bhadeya Technical Services LLC | #1 GPR Scanning & Core Cutting in UAE",
    description:
      "Leading GPR scanning, core cutting & excavation services in Dubai, Abu Dhabi, Sharjah & UAE. 5+ years of trusted experience.",
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "Construction Services",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6FWYL6PN3Q"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6FWYL6PN3Q');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7V3FR9G');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} overflow-x-hidden font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7V3FR9G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <GoogleAdsHead />
        <JsonLd />
        <Header />
        <main id="main-content" className="min-h-screen pt-20" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
