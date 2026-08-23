export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'work'
  | 'case-study'
  | 'process'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'not-found';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  category: 'Institutional' | 'Creative' | 'Technology' | 'Healthcare' | 'Luxury & Lifestyle';
  year: string;
  location: string;
  deliverables: string[];
  services: string[];
  thumbnail: string;
  heroImage: string;
  accentColor: string;
  overview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; description: string }[];
  technologies: string[];
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  benefits: string[];
  startingPrice: string;
  turnaround: string;
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  formattedPrice: string;
  currency: string;
  targetAudience: string;
  timeline: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  maintenanceOption: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  pricePerMonth: number;
  formattedPrice: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface ProcessPhase {
  step: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  clientDeliverables: string[];
  studioAction: string[];
  duration: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'pricing' | 'technical' | 'international';
}

export interface ContactFormState {
  fullName: string;
  email: string;
  companyName: string;
  serviceNeeded: string[];
  budgetRange: string;
  timeline: string;
  projectOverview: string;
  referralSource: string;
}
