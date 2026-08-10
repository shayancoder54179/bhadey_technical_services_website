import { makeLocationRoute } from "@/lib/location-route";

const route = makeLocationRoute("gs8000-scanning");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
