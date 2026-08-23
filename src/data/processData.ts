import { ProcessPhase } from '../types';

export const processPhases: ProcessPhase[] = [
  {
    step: '01',
    title: 'Understand',
    shortDescription: 'We begin by understanding the business, its audience, and the exact problem we are solving.',
    fullDescription: 'Before placing a single pixel or writing a line of code, we immerse ourselves in your brand architecture, competitor landscape, target user psychology, and commercial objectives. We strip away superficial assumptions to identify what truly moves the needle.',
    clientDeliverables: [
      'Discovery Brief & Target Persona Map',
      'Competitor & Visual Benchmark Audit',
      'Core Value Proposition Synthesis'
    ],
    studioAction: [
      'Stakeholder discovery interview',
      'Audience empathy analysis',
      'Technical constraint & requirement scoping'
    ],
    duration: '2–3 Days',
    quote: 'Design without discovery is merely decoration. Understanding is the blueprint of impact.'
  },
  {
    step: '02',
    title: 'Define',
    shortDescription: 'We establish the project goals, content structure, sitemap, and strategic priorities.',
    fullDescription: 'With clarity on the mission, we architect the sitemap, information flow, user journeys, and conversion hierarchy. We ensure every page has a single unambiguous purpose and that visitors never feel lost or confused.',
    clientDeliverables: [
      'Architectural Sitemap & Content Blueprint',
      'Wireframe User Journey Schematics',
      'Project Timeline & Milestone Roadmap'
    ],
    studioAction: [
      'Information architecture drafting',
      'Conversion funnel structuring',
      'Technical architecture specification'
    ],
    duration: '2–4 Days',
    quote: 'A website is not a gallery of screens; it is a sequence of answers to human questions.'
  },
  {
    step: '03',
    title: 'Design',
    shortDescription: 'We create the visual system, typography, color harmony, and interactive user experience.',
    fullDescription: 'This is where brand identity meets digital craftsmanship. We develop bespoke typographic pairings, architectural grids, tactile micro-states, and high-fidelity artboards. Every visual decision is intentional, purposeful, and refined.',
    clientDeliverables: [
      'High-Fidelity Interactive Figma Prototypes',
      'Complete Design System & Component Library',
      'Motion Choreography & Interaction Guidelines'
    ],
    studioAction: [
      'Art direction & mood exploration',
      'Responsive interface sculpting (Mobile & Desktop)',
      'Design review & collaborative feedback loops'
    ],
    duration: '5–10 Days',
    quote: 'Craft lives in the millimeters: the kerning of a headline, the friction of a scroll, the restraint of whitespace.'
  },
  {
    step: '04',
    title: 'Build',
    shortDescription: 'We transform approved designs into a responsive, blazing-fast, modern digital product.',
    fullDescription: 'We write clean, modular, semantic TypeScript and modern CSS. No bloated site-builder junk or fragile spaghetti code. We engineer responsive layouts, buttery smooth transitions, accessible markup, and optimized asset pipelines.',
    clientDeliverables: [
      'Private Staging URL for Real-Time Testing',
      'Modular Source Code Repository',
      'API & Third-Party Integration Verification'
    ],
    studioAction: [
      'Production-grade frontend engineering',
      'Interactive motion and state management implementation',
      'Form validation and security plumbing'
    ],
    duration: '5–12 Days',
    quote: 'Code is our invisible medium. When written with discipline, it makes the interface feel weightless.'
  },
  {
    step: '05',
    title: 'Refine',
    shortDescription: 'Every important detail is rigorously tested, audited, reviewed, and polished.',
    fullDescription: 'We run our rigorous 11-point studio audit across devices, screen sizes, browsers (Chrome, Safari, Firefox, Edge, iOS Safari), and network throttles. We test keyboard accessibility, verify every link, tune Core Web Vitals, and eliminate subtle visual flaws.',
    clientDeliverables: [
      'Lighthouse 95+ Audit Certification',
      'Cross-Device Compatibility Test Matrix',
      'Accessibility & Security Audit Report'
    ],
    studioAction: [
      '11-point studio quality checklist audit',
      'Mobile touch-target calibration',
      'Client refinement & final sign-off'
    ],
    duration: '2–4 Days',
    quote: 'Perfection is not when there is nothing more to add, but when there is nothing left to take away.'
  },
  {
    step: '06',
    title: 'Launch',
    shortDescription: 'The final product is deployed, indexed for search engines, and handed over seamlessly.',
    fullDescription: 'We coordinate DNS configuration, SSL certification, CDN caching, Google Search Console indexing, and analytics verification. We deliver clean documentation and provide dedicated post-launch support to ensure total confidence.',
    clientDeliverables: [
      'Live Domain Production Deployment',
      'Search Engine Indexing & Sitemap Submission',
      'Studio Handover Guide & Video Walkthrough',
      'Post-Launch Warranty & Support Window'
    ],
    studioAction: [
      'Production DNS & CDN propagation',
      'Live environment monitoring',
      'Post-launch client onboarding session'
    ],
    duration: '1–2 Days',
    quote: 'Launch day is not the end of our responsibility; it is the moment your digital presence begins its work.'
  }
];
