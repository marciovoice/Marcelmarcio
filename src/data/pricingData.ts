import { PricingPlan, MaintenancePlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential Website',
    tagline: 'A sharp, high-speed digital foundation for ambitious individuals and emerging ventures.',
    startingPrice: 7999,
    formattedPrice: '₹7,999+',
    currency: 'INR',
    targetAudience: 'Individuals, creators, consultants & boutique businesses',
    timeline: '5–10 Business Days',
    popular: false,
    features: [
      'Up to 5 custom-designed pages',
      'Fully responsive (Mobile, Tablet, Desktop)',
      'Clean typography & brand palette styling',
      'Modern semantic code structure',
      'Functional contact form & WhatsApp link',
      'Foundational SEO meta tags',
      'Deployment assistance & live setup',
      '14 days post-launch support'
    ],
    deliverables: [
      'Production-ready website source code',
      'Live domain deployment configuration',
      'Basic analytics integration',
      'Content management guide'
    ],
    maintenanceOption: 'Pair with Essential Care at ₹999/mo'
  },
  {
    id: 'professional',
    name: 'Professional Website',
    tagline: 'Our most sought-after tier for established businesses, institutions, and growing companies.',
    startingPrice: 14999,
    formattedPrice: '₹14,999+',
    currency: 'INR',
    targetAudience: 'Institutions, healthcare clinics, corporate firms & agencies',
    timeline: '10–18 Business Days',
    popular: true,
    features: [
      'Up to 10 bespoke page layouts',
      'Tailored UI/UX wireframes & design system',
      'Interactive components & subtle animations',
      'Comprehensive Core Web Vitals optimization',
      'Advanced multi-step lead capture forms',
      'Complete on-page SEO & OpenGraph cards',
      'Cross-browser & Safari iOS testing',
      '30 days dedicated post-launch support'
    ],
    deliverables: [
      'Custom Figma design workspace',
      'Optimized React / modern web codebase',
      'Speed report (95+ Lighthouse benchmark)',
      'Automated email notifications integration'
    ],
    maintenanceOption: 'Pair with Professional Care at ₹1,999/mo'
  },
  {
    id: 'premium',
    name: 'Premium Digital Experience',
    tagline: 'Bespoke editorial elegance and advanced micro-interactions for luxury & tech leaders.',
    startingPrice: 24999,
    formattedPrice: '₹24,999+',
    currency: 'INR',
    targetAudience: 'Tech startups, luxury brands, media houses & enterprise leaders',
    timeline: '2–4 Weeks',
    popular: false,
    features: [
      'Custom architectural design system',
      'Advanced scroll-triggered motion & micro-interactions',
      'Complex multi-level page structures & filters',
      'Interactive data visualizers / product simulators',
      'Headless CMS or API integration',
      'Comprehensive WCAG AAA accessibility compliance',
      'Full brand asset export & vector kits',
      '60 days priority post-launch support'
    ],
    deliverables: [
      'Full Design Tokens & Component library',
      'Auteur motion choreographies',
      'Speed & Security hardening cert',
      'Personal Slack / WhatsApp studio channel'
    ],
    maintenanceOption: 'Pair with Dedicated Support at ₹3,999/mo'
  },
  {
    id: 'custom',
    name: 'Custom Projects',
    tagline: 'Specialized web applications, multi-portal ecosystems, and custom software engineering.',
    startingPrice: 35000,
    formattedPrice: '₹35,000+',
    currency: 'INR',
    targetAudience: 'Large-scale portals, web applications & bespoke software requirements',
    timeline: 'Scoped to Project',
    popular: false,
    features: [
      'Infinite scalability & custom architecture',
      'Full-stack backend / database integration',
      'Custom user auth, dashboards & admin portals',
      'Third-party APIs, webhooks & CRM pipes',
      'Custom 3D / WebGL / Canvas visual modules',
      'Enterprise security & load testing',
      'Comprehensive documentation & handover training',
      'Direct partner-level engineering access'
    ],
    deliverables: [
      'End-to-end repository with full CI/CD',
      'Architecture blueprint & API schemas',
      'Dedicated engineering sprint plan',
      'Executive handover briefing'
    ],
    maintenanceOption: 'Custom SLA retainer available'
  }
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'care-essential',
    name: 'Essential Care',
    pricePerMonth: 999,
    formattedPrice: '₹999/mo',
    description: 'Dependable peace of mind with small updates and proactive uptime health checks.',
    popular: false,
    features: [
      'Up to 2 hours of monthly content updates',
      '24/7 Uptime & SSL status monitoring',
      'Minor text, image, and link fixes',
      'Monthly security vulnerability checks',
      'Email support response within 24 hours'
    ]
  },
  {
    id: 'care-professional',
    name: 'Professional Care',
    pricePerMonth: 1999,
    formattedPrice: '₹1,999/mo',
    description: 'Proactive stewardship for growing businesses that require regular updates and speed checks.',
    popular: true,
    features: [
      'Up to 5 hours of monthly design & code updates',
      'Continuous technical maintenance & dependency patches',
      'Bi-weekly performance & Core Web Vitals checks',
      'Minor layout enhancements & new section additions',
      'Database and asset backup verification',
      'Priority WhatsApp / email support within 12 hours'
    ]
  },
  {
    id: 'care-dedicated',
    name: 'Dedicated Support',
    pricePerMonth: 3999,
    formattedPrice: '₹3,999/mo',
    description: 'Comprehensive studio partnership with priority turnaround and ongoing feature evolution.',
    popular: false,
    features: [
      'Up to 12 hours of monthly design & development',
      'Same-day priority turnaround on urgent requests',
      'Weekly performance tuning & SEO health auditing',
      'New landing page or campaign asset builds included',
      'Continuous conversion rate optimization reviews',
      'Direct studio access via dedicated Slack / WhatsApp channel'
    ]
  }
];
