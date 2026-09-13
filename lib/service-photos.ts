/**
 * One photo per service, shared by the homepage service cards and the header
 * services menu so the two never drift apart.
 *
 * Bhadeya's own job photos where they exist; licensed stock (Pexels, free for
 * commercial use) for the services we have no photo of yet.
 */
export const SERVICE_PHOTOS: Record<string, string> = {
  "gpr-scanning": "/images/WhatsApp Image 2025-12-28 at 00.56.41.jpeg",
  "gpr-ground-scanning": "/images/svc-ground-scanning.webp",
  "core-cutting": "/images/WhatsApp Image 2025-12-28 at 00.56.43.jpeg",
  excavation: "/images/tenweb_media_sb87wloxc.webp",
  "oversized-cargo": "/images/svc-oversized-cargo.webp",
  "interlock-road-pavement": "/images/svc-interlock-paving.webp",
};

/**
 * Crop anchors for the portrait phone photos — without these a 16:9 or square
 * crop lands on a knee instead of the tool.
 */
export const SERVICE_PHOTO_POSITION: Record<string, string> = {
  "core-cutting": "object-[50%_38%]",
  "gpr-scanning": "object-[50%_35%]",
};

/** Short instrument code per service — an identifier, not a sequence. */
export const SERVICE_CODES: Record<string, string> = {
  "gpr-scanning": "GPR",
  "gpr-ground-scanning": "GS8000",
  "core-cutting": "CORE",
  excavation: "EXC",
  "oversized-cargo": "CARGO",
  "interlock-road-pavement": "PAVE",
};
