import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationServicePage } from "@/components/services/LocationServicePage";
import { locationContent } from "@/data/locations";
import { OG_IMAGES } from "@/lib/og-image";

const BASE_URL = "https://www.bhadeya.com";

type Params = { city: string };
type Props = { params: Promise<Params> };

/**
 * Builds the route exports for a service's /[city] pages. Each service folder
 * owns its own dynamic segment, so unknown services can never resolve to a page.
 */
export function makeLocationRoute(service: string) {
  const byCity = locationContent[service] ?? {};

  function generateStaticParams(): Params[] {
    return Object.keys(byCity).map((city) => ({ city }));
  }

  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const content = byCity[city];
    if (!content) return {};
    const url = `${BASE_URL}/services/${service}/${city}`;
    return {
      title: content.title,
      description: content.description,
      alternates: { canonical: url },
      openGraph: {
        title: content.title,
        description: content.description,
        url,
        type: "website",
        images: OG_IMAGES,
      },
    };
  }

  async function Page({ params }: Props) {
    const { city } = await params;
    if (!byCity[city]) notFound();
    return <LocationServicePage service={service} city={city} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
