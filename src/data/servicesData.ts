import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    tagline: 'Distinctive digital identities and interfaces designed around your business goals.',
    description: 'We do not believe every company needs the same template. We craft bespoke visual architectures that command authority, reflect your ethos, and captivate visitors from the first viewport.',
    iconName: 'Layout',
    deliverables: [
      'Bespoke Visual Architecture',
      'Desktop & Mobile Artboards',
      'Interactive Design Prototypes',
      'Custom Typography Systems',
      'Art Direction & Asset Guidance',
      'Component UI Styleguides'
    ],
    technologies: ['Figma Pro', 'Design Tokens', 'Design Systems', 'Micro-Interactions', 'Editorial Typography'],
    benefits: [
      'Instant brand differentiation',
      'Higher aesthetic perceived value',
      'Clear information hierarchy',
      'Consistent multi-device coherence'
    ],
    startingPrice: '₹14,999',
    turnaround: '1–2 Weeks',
    featured: true
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Transforming designs into responsive, reliable, high-performance digital experiences.',
    description: 'We engineer rock-solid, production-grade web applications. Fast load times, clean semantic markup, modular architectures, and zero bloated third-party dependencies.',
    iconName: 'Code',
    deliverables: [
      'Full-Stack Frontend Architecture',
      'Responsive Cross-Browser Build',
      'Interactive Micro-Interactions & Motion',
      'Modern API Integrations',
      'Headless CMS & Content Workflows',
      'Automated CI/CD Deployment'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'REST & GraphQL'],
    benefits: [
      'Sub-second load times',
      '99+ Lighthouse benchmarks',
      'Modular, future-proof codebase',
      'Zero downtime deployments'
    ],
    startingPrice: '₹18,999',
    turnaround: '1–3 Weeks',
    featured: true
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Designing interfaces that make information easier to understand and actions effortless.',
    description: 'Every click represents a human intent. We map user journeys, resolve navigation friction, and create natural interaction flows that drive conversions without cognitive overload.',
    iconName: 'Compass',
    deliverables: [
      'User Journey & Flow Mapping',
      'Low & High-Fidelity Wireframes',
      'Interactive Clickable Prototypes',
      'Comprehensive Design Systems',
      'Usability & Accessibility Audits',
      'Conversion Funnel Optimization'
    ],
    technologies: ['Figma', 'User Research', 'Information Architecture', 'WCAG AAA Standards', 'Interaction Matrix'],
    benefits: [
      'Reduced user drop-off',
      'Intuitive product adoption',
      'Frictionless checkout/inquiry funnels',
      'Accessible to all demographics'
    ],
    startingPrice: '₹12,999',
    turnaround: '1–2 Weeks'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    tagline: 'Modernizing outdated digital platforms while preserving the equity that matters.',
    description: 'A website should not stay trapped in the era when it was originally created. We elevate your visual identity, reorganize sprawling content, and upgrade the tech stack for modern speed.',
    iconName: 'RefreshCw',
    deliverables: [
      'Comprehensive Legacy Audit',
      'SEO & Content Preservation Strategy',
      'Visual Modernization Overhaul',
      'Mobile-First Layout Restructuring',
      'Speed & Performance Rebuild',
      'Smooth Domain Transition'
    ],
    technologies: ['React/Next Architecture', 'Modern Semantic HTML', 'Tailwind CSS', 'Asset Optimization'],
    benefits: [
      'Preserve SEO rankings',
      'Dramatically improve mobile traffic',
      'Refresh company perception',
      'Eliminate technical debt'
    ],
    startingPrice: '₹14,999',
    turnaround: '2–3 Weeks',
    featured: true
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    tagline: 'Establishing a cohesive, memorable visual language across your entire digital presence.',
    description: 'A digital presence starts before someone visits your homepage. We construct timeless identities — from geometric monograms and typographic pairings to digital brand guidelines.',
    iconName: 'Sparkles',
    deliverables: [
      'Signature Logo & Monogram Design',
      'Harmonious Color Palette & Tokens',
      'Typography Hierarchy Pairings',
      'Digital Brand Guidelines (PDF & Web)',
      'Social Media Kit & Vector Assets',
      'Stationery & Presentation Deck Styles'
    ],
    technologies: ['Vector Geometry', 'Typography Curation', 'Color Science', 'Brand Book System'],
    benefits: [
      'Command premium market pricing',
      'Consistent client touchpoints',
      'Instant brand recognition',
      'Comprehensive asset library'
    ],
    startingPrice: '₹11,999',
    turnaround: '1–2 Weeks'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    tagline: 'Focused, conversion-engineered digital experiences built for single high-value goals.',
    description: 'Ideal for product launches, venture capital reveals, waitlists, service campaigns, or flagship events. Laser-focused storytelling paired with dynamic interactive hooks.',
    iconName: 'Flame',
    deliverables: [
      'High-Impact Hero Conception',
      'Conversion-Optimized Copy Flow',
      'Interactive Product Demonstration',
      'Lead Capture & CRM Webhook Sync',
      'A/B Testing Infrastructure Ready',
      'Ultra-Fast Edge Hosting Setup'
    ],
    technologies: ['React', 'Motion', 'Tailwind CSS', 'Custom Forms', 'Analytics & Tracking'],
    benefits: [
      'Maximizes ad spend ROI',
      'High visitor-to-lead conversion',
      'Rapid go-to-market speed',
      'Clean analytics tracking'
    ],
    startingPrice: '₹7,999',
    turnaround: '4–7 Days',
    featured: true
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    tagline: 'Speed is not a luxury — it is the foundation of user retention and Google search rankings.',
    description: 'We inspect, debug, and accelerate slow websites. We eliminate script bottlenecks, compress assets with zero quality loss, implement smart caching, and guarantee green Lighthouse scores.',
    iconName: 'Zap',
    deliverables: [
      'Full Core Web Vitals Audit',
      'Code Splitting & Bundle Shrinking',
      'Next-Gen Image & Video Compression',
      'Critical CSS Inlining & Font Tuning',
      'CDN & Caching Optimization',
      'Pre & Post Benchmark Report'
    ],
    technologies: ['Lighthouse 12', 'Bundle Analyzer', 'WebP/AVIF Engines', 'Edge Caching', 'Gzip/Brotli'],
    benefits: [
      'Boost Google SEO ranking',
      'Cut bounce rate on cellular networks',
      'Instant page transitions',
      'Lower server bandwidth costs'
    ],
    startingPrice: '₹6,999',
    turnaround: '3–5 Days'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Evolution',
    tagline: 'Continuous stewardship, security monitoring, and design evolution for peace of mind.',
    description: 'Your digital presence should grow alongside your business. We provide proactive monthly maintenance, technical security patches, content updates, and dedicated design hours.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Proactive Uptime & Speed Monitoring',
      'Scheduled Security Updates',
      'Content, Copy & Image Refreshing',
      'Bug Fixes & Browser Compatibility',
      'Monthly Performance Diagnostics',
      'Priority Studio Support Channel'
    ],
    technologies: ['Automated Health Checks', 'Git Version Control', 'SSL Verification', 'Dedicated Support'],
    benefits: [
      'Zero downtime anxiety',
      'Always fresh and up-to-date content',
      'Direct studio access on WhatsApp/Slack',
      'Prevent security vulnerabilities'
    ],
    startingPrice: '₹999/mo',
    turnaround: 'Ongoing Monthly'
  }
];
