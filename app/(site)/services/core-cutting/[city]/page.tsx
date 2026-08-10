import { makeLocationRoute } from "@/lib/location-route";

const route = makeLocationRoute("core-cutting");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
