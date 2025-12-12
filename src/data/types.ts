export type GalleryStyle = 'bottom-flush' | 'top-flush' | 'centered' | 'pan-horizontal';

export interface DigitizeGalleryData {
  header: ImageMetadata;
  gridImages: ImageMetadata[];
}

export interface VisibilityGalleryData {
  baseImage: ImageMetadata;
  overlayImage: ImageMetadata;
  galleryImages: ImageMetadata[];
}

export interface CapacityGalleryData {
  staticImage: ImageMetadata;
}

// FIX: Expanded Interface for Hotspots
export interface CarriersGalleryData {
  masterImage: ImageMetadata;
  galleryImages: ImageMetadata[];
  mobileImages: ImageMetadata[];
  hotspots: {
    left: string;
    top: string;
    width: string;
    height: string;
    targetIndex: number;
  }[];
}

export type SlideLayoutType = "single" | "double" | "triple" | "quad" | "overlay";

export interface HeroSlide {
  type: "single" | "double" | "triple" | "quad" | "overlay";
  images: ImageMetadata[];
}

export interface DesktopComposition {
  baseImage: ImageMetadata;
  floatingImage: ImageMetadata;
  floatPosition: 'right' | 'left';
}

export interface HeroContent {
  badgeText: string;
  headline: string;
  emailPlaceholder: string;
  buttonText: string;
  dashboardAlt: string;
  desktopImage?: ImageMetadata;
  mobileGallery?: HeroGalleryItem[];
  desktopComposition?: DesktopComposition;
  heroSlides?: HeroSlide[];
}

export interface HeroGalleryItem { src: ImageMetadata; alt: string; style: GalleryStyle; }

export interface CredibilityContent {
  g2Rating: string;
  g2Link: string;
  uptimePercentage: string;
  uptimeLabel: string;
  capterraLink: string;
  capterraRating: string;
  supportHours: string;
  supportLabel: string;
  securityBadges: {
    iso: string;
    isoSubtext: string;
    gdpr: string;
    soc2: string;
    soc2Subtext: string;
  };
}

export interface HowItWorksContent {
  title: string;
  subtitle: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    icon: "upload" | "toggle" | "refresh";
    desktopAnnotation?: string;
    mobileAnnotation?: string;
    visualTags?: string[];
    highlight?: boolean;
  }[];
  footerAnnotation?: string;
}

export interface TestimonialContent { quote: string; name: string; role: string; image: string; }

export interface BenefitItem {
  icon: "calendar" | "database" | "barChart" | "users" | "fileCheck" | "archive";
  title: string;
  description: string;
}

export interface BenefitsContent { benefits: BenefitItem[]; }

export interface CaseStudyContent {
  company: string;
  industry: string;
  metricValue: string;
  metricLabel: string;
  challenge: string;
  result: string;
}

export interface CaseStudiesContent { caseStudies: CaseStudyContent[]; }

export interface FAQItem { question: string; answer: string; }
export interface FAQContent { faqs: FAQItem[]; }

export interface PageContent {
  hero: HeroContent;
  credibility: CredibilityContent;
  testimonial: TestimonialContent;
  benefits: BenefitsContent;
  howItWorks: HowItWorksContent;
  caseStudies: CaseStudiesContent;
  faq: FAQContent;
  digitizeGallery?: DigitizeGalleryData;
  visibilityGallery?: VisibilityGalleryData;
  capacityGallery?: CapacityGalleryData;
  carriersGallery?: CarriersGalleryData;
}