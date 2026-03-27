import { JsonLd } from "@/components/seo/JsonLd";
import {
  Header,
  Footer,
  WhatsAppButton,
  CallButton,
  BackToTop,
  PageTransition,
} from "@/components/layout";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <JsonLd />
      <Header />
      <main id="main-content" className="min-h-screen pt-20" tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <BackToTop />
    </>
  );
}
