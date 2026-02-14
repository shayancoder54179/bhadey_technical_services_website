import Image, { ImageProps } from "next/image";

/**
 * Use this component for all content images to support Google Ads Quality Score and SEO:
 * - Descriptive alt tags containing keywords (required)
 * - next/image optimization (automatic WebP when supported, lazy load, sizing)
 * - Proper width/height or fill to avoid layout shift
 *
 * Prefer WebP assets and size images to the display size (e.g. 1200w for hero images).
 */
export function OptimizedImage({
  alt,
  loading,
  ...props
}: ImageProps) {
  if (!alt || typeof alt !== "string" || alt.trim() === "") {
    console.warn("OptimizedImage: alt is required for SEO and accessibility.");
  }
  const effectiveLoading = loading ?? (props.priority ? "eager" : "lazy");
  return (
    <Image
      {...props}
      alt={alt}
      loading={effectiveLoading}
    />
  );
}
