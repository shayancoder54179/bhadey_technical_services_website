export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ServiceHeroData {
  title: string;
  subtitle: string;
  stats: HeroStat[];
  ctaPrimaryLabel: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  /** Optional hero image (e.g. for excavation page) */
  image?: { src: string; alt: string };
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface OverviewData {
  title: string;
  description: string;
  howItWorks?: HowItWorksStep[];
  benefits?: string[];
}

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface EquipmentData {
  title: string;
  name: string;
  description: string;
  specs?: EquipmentSpec[];
  whyBest?: string;
}

export interface FeatureItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface ApplicationItem {
  title: string;
  icon?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ProcessData {
  title: string;
  steps: ProcessStep[];
}

export interface SEOParagraph {
  title?: string;
  content: string;
}

export interface RelatedServiceLink {
  href: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/** AEO: "People Also Ask" style Q&A block for answer engine optimization */
export interface PeopleAlsoAskItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  breadcrumb: BreadcrumbItem[];
  hero: ServiceHeroData;
  overview: OverviewData;
  equipment: EquipmentData;
  features: FeatureItem[];
  applications: ApplicationItem[];
  process: ProcessData;
  /** Optional gallery of project/service photos */
  galleryImages?: { src: string; alt: string }[];
  /** Optional title for the gallery section (e.g. "Core Cutting in Action") */
  galleryTitle?: string;
  seoParagraphs?: SEOParagraph[];
  /** AEO: "People Also Ask" style Q&A blocks */
  peopleAlsoAsk?: PeopleAlsoAskItem[];
  relatedServices: RelatedServiceLink[];
  faq: { title: string; items: FAQItem[] };
  ctaTitle: string;
  ctaDescription: string;
}
