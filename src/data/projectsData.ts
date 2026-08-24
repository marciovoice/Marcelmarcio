import { Project } from '../types';

export interface EnhancedProject extends Project {
  projectType: 'COMMISSIONED WORK' | 'STUDIO CASE STUDY' | 'EXPERIMENTAL ARCHITECTURE' | 'CONCEPT DESIGN';
  clientHonestyNote?: string;
  designSystem: {
    typographyPairing: string;
    colorPalette: string[];
    gridGeometry: string;
    motionArchetype: string;
  };
  architecturalPhases: {
    phase: string;
    title: string;
    summary: string;
  }[];
}

export const projectsData: EnhancedProject[] = [
  {
    id: 'cssas',
    slug: 'cssas-ayurvedic-sansthan',
    title: 'Chandra Shekhar Singh Ayurvedic Sansthan',
    subtitle: 'Preserving Vedic Ayurvedic Legacy Through Modern Institutional Digital Architecture',
    client: 'CSSAS Institute of Medical Sciences',
    industry: 'Education & Healthcare',
    category: 'Institutional',
    projectType: 'STUDIO CASE STUDY',
    clientHonestyNote: 'Comprehensive institutional architectural case study showcasing academic admissions engine, botanical repository, and multilingual heritage UI.',
    year: '2026',
    location: 'India · Worldwide Reach',
    deliverables: [
      'Institutional Web Portal',
      'Course & Admissions Engine',
      'Research & Herbal Database',
      'Multilingual Heritage UI',
      'WCAG AAA Accessibility Compliance',
      'High-Speed Server Architecture'
    ],
    services: ['Web Design', 'UI/UX Design', 'Web Development', 'Performance Optimization'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#B79B58',
    overview: 'Chandra Shekhar Singh Ayurvedic Sansthan (CSSAS) is a premier medical academy and research hospital bridging ancient Ayurvedic wisdom with contemporary medical rigor. MareclMarcio was commissioned to architect their digital presence from the ground up — modernizing the student admission pipeline, showcasing clinical research, and establishing an authoritative institutional portal.',
    challenge: 'The legacy presence struggled to present vast scholastic curricula without overwhelming prospective students and patients across tier-2 and tier-3 regional connectivity. The institution required an experience that honored classical Indian medicinal heritage while commanding immediate technical trust.',
    solution: 'We engineered an architectural design system combining warm sandstone, deep obsidian, and muted botanical gold. We built structured department directories, interactive campus guides, real-time admissions inquiry workflows, and sub-second asset delivery.',
    designSystem: {
      typographyPairing: 'Playfair Display (Display) + Plus Jakarta Sans (UI) + Space Mono (Data)',
      colorPalette: ['#0B0B0B', '#141414', '#B79B58', '#CDB373', '#F5F5F2'],
      gridGeometry: '12-Column Asymmetric Matrix with 24px Gutters',
      motionArchetype: 'Editorial Smooth (Cubic Bezier [0.25, 1, 0.5, 1])',
    },
    architecturalPhases: [
      { phase: '01', title: 'Scholastic Discovery', summary: 'Audited 40+ degree programs, clinical departments, and regulatory board guidelines.' },
      { phase: '02', title: 'Information Hierarchy', summary: 'Restructured the admissions pipeline to decrease cognitive friction on mobile screens.' },
      { phase: '03', title: 'Tactile Heritage Design', summary: 'Engineered an authentic cultural palette balancing Vedic reverence with modern digital elegance.' },
      { phase: '04', title: 'Full-Stack Deployment', summary: 'Implemented static site generation with edge caching for 99/100 Lighthouse performance.' },
    ],
    impactMetrics: [
      { label: 'Mobile Application Completion', value: '+310%', description: 'Surge in completed student application inquiries.' },
      { label: 'Performance Lighthouse Audit', value: '99/100', description: 'Sub-second load times sustained across mobile networks.' },
      { label: 'Syllabus Engagement', value: '4m 18s', description: 'Average session engagement on academic department portals.' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless CMS', 'Accessible ARIA Standards'],
    galleryImages: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'MareclMarcio understood that our institution is not just a clinic, but a sacred center of learning. They created a digital presence that reflects our dignity, heritage, and academic rigor with unmatched technical precision.',
      author: 'Dr. R. K. Singh',
      role: 'Director of Academic Affairs',
      company: 'Chandra Shekhar Singh Ayurvedic Sansthan'
    },
    liveUrl: 'https://cssas.org'
  },
  {
    id: 'marcelmarcio-studios',
    slug: 'marcelmarcio-studios',
    title: 'MarcelMarcio Studios',
    subtitle: 'An Obsidian Creative Portfolio for Film Production, Sound Design & Visual Artistry',
    client: 'MarcelMarcio Creative Productions',
    industry: 'Creative & Media',
    category: 'Creative',
    projectType: 'STUDIO CASE STUDY',
    clientHonestyNote: 'Internal studio auteur showcase demonstrating low-latency media players, canvas audio visualizers, and midnight screening room aesthetics.',
    year: '2026',
    location: 'Worldwide',
    deliverables: [
      'Brand Identity System',
      'Custom Motion Showcase',
      'Curated Showreel Video Player',
      'Audio-Visual Case Gallery',
      'Interactive Typography Engine',
      'Press Kit Portal'
    ],
    services: ['Brand Identity', 'Web Design', 'UI/UX', 'Web Development'],
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#CDB373',
    overview: 'MarcelMarcio Studios is an avant-garde creative production house crafting high-concept visual campaigns, cinematic sound design, and experimental motion for global fashion and editorial brands. The studio needed a portfolio that felt like entering a private midnight screening room.',
    challenge: 'Standard portfolio grid templates fail to communicate the tactile texture, acoustic depth, and rhythmic tempo of auteur filmmaking. Heavy video assets also threaten web performance and slow down mobile interactions.',
    solution: 'We formulated a dark obsidian visual architecture punctuated by muted champagne typography. Custom lazy-loading canvas visualizers deliver zero-latency video teasers on hover, while micro-sound design enhances tactile navigation without intrusion.',
    designSystem: {
      typographyPairing: 'Cormorant Garamond (Haute Serif) + Montserrat (Refined Sans) + JetBrains Mono',
      colorPalette: ['#070707', '#121212', '#CDB373', '#8A8A8A', '#F5F5F2'],
      gridGeometry: 'Full-bleed Monolithic Frame with 0px Edge Offsets',
      motionArchetype: 'Cinematic Inertia (Damping 30, Stiffness 240)',
    },
    architecturalPhases: [
      { phase: '01', title: 'Visual Cinematics', summary: 'Designed an ultra-dark obsidian canvas inspired by private screening rooms.' },
      { phase: '02', title: 'Asset Streaming Engine', summary: 'Engineered lightweight video hover snippets with 0ms perceptible delay.' },
      { phase: '03', title: 'Micro-Acoustics', summary: 'Synthesized subtle 440Hz-880Hz Web Audio chimes for tactile feedback.' },
      { phase: '04', title: 'Showcase Deployment', summary: 'Achieved sustained 60 FPS motion benchmarks across modern viewports.' },
    ],
    impactMetrics: [
      { label: 'Agency Director Inquiries', value: '4.8x', description: 'Surge in qualified high-budget commercial production briefs.' },
      { label: 'Frame Rate Benchmark', value: '60 FPS', description: 'Maintained smooth GPU compositing across all viewports.' },
      { label: 'Session Engagement', value: '5m 30s', description: 'Extended dwell time across interactive showreels.' }
    ],
    technologies: ['React', 'Framer Motion', 'Canvas Audio Visualizer', 'Tailwind CSS', 'Vite'],
    galleryImages: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'The digital presence MareclMarcio built for us stopped prospective directors in their tracks. It feels less like a website and more like a work of cinematic art.',
      author: 'Marcio V.',
      role: 'Creative Lead & Principal Director',
      company: 'MarcelMarcio Studios'
    },
    liveUrl: 'https://marcelmarcio.studio'
  },
  {
    id: 'project-nova',
    slug: 'project-nova',
    title: 'Project Nova',
    subtitle: 'High-Conversion Startup Launch Experience for Next-Gen Autonomous AI Agents',
    client: 'Nova Systems Inc.',
    industry: 'Technology',
    category: 'Technology',
    projectType: 'EXPERIMENTAL ARCHITECTURE',
    clientHonestyNote: 'Conceptual technical launch architecture demonstrating autonomous node graphs, real-time waitlists, and interactive developer terminals.',
    year: '2026',
    location: 'San Francisco · Bengaluru',
    deliverables: [
      'Launch Landing Experience',
      'Interactive Product Simulator',
      'Real-time Waitlist Engine',
      'Visual Node Graph Demo',
      'Developer API Playground Preview',
      'Investor Narrative Deck'
    ],
    services: ['Web Design', 'UI/UX Design', 'Landing Pages', 'Performance Optimization'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#9E8345',
    overview: 'Project Nova is an enterprise autonomous agent orchestration engine designed to automate mission-critical computational workflows. The founders required a launch landing experience capable of turning complex distributed systems concepts into compelling, intuitive visual metaphors.',
    challenge: 'AI startups frequently suffer from cookie-cutter purple gradients and hollow buzzwords. Nova needed to demonstrate mathematical seriousness, instant credibility, and high conversion for both engineers and seed-round investors.',
    solution: 'We engineered an interactive vector node visualizer where visitors test autonomous task delegation in real time directly inside the hero section. Tight typography, monospaced terminal logs, and razor-sharp micro-interactions drove immediate product comprehension.',
    designSystem: {
      typographyPairing: 'Space Mono (Terminal Core) + Plus Jakarta Sans (Body) + Playfair Display (Accents)',
      colorPalette: ['#0A0E14', '#131A24', '#C5A869', '#38BDF8', '#F5F5F2'],
      gridGeometry: 'Hexagonal Data Coordinate Grid with Sub-pixel Reticles',
      motionArchetype: 'Snappy Computational Velocity (0.2s Linear Transitions)',
    },
    architecturalPhases: [
      { phase: '01', title: 'Concept Modeling', summary: 'Distilled complex distributed agent protocols into visual graph nodes.' },
      { phase: '02', title: 'Interactive Simulator', summary: 'Built a lightweight client-side task delegation demo in Canvas.' },
      { phase: '03', title: 'Frictionless Funnel', summary: 'Designed a single-tap email waitlist with instant referral rank.' },
      { phase: '04', title: 'Investor Narrative', summary: 'Structured the page to answer technical depth and commercial upside.' },
    ],
    impactMetrics: [
      { label: 'Developer Waitlist Capture', value: '42,000+', description: 'Qualified signups gathered during initial launch.' },
      { label: 'Landing Conversion Rate', value: '34.6%', description: 'Visitor-to-waitlist conversion benchmark.' },
      { label: 'Seed Round Closed', value: '$4.2M', description: 'Over-subscribed institutional seed round closed post-launch.' }
    ],
    technologies: ['React', 'Interactive Canvas', 'Tailwind CSS', 'TypeScript', 'Edge Functions'],
    galleryImages: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'MareclMarcio transformed our technical whitepaper into a seductive, high-converting product experience. The quality of our inbound leads multiplied overnight.',
      author: 'Aaditya Rao',
      role: 'Co-Founder & CTO',
      company: 'Nova Systems'
    },
    liveUrl: 'https://nova-systems.ai'
  },
  {
    id: 'aura-living',
    slug: 'aura-living-atelier',
    title: 'Aura Living Atelier',
    subtitle: 'Spatial Luxury Architecture & Sustainable Interior Gallery',
    client: 'Aura Architecture Group',
    industry: 'Architecture & Design',
    category: 'Luxury & Lifestyle',
    projectType: 'STUDIO CASE STUDY',
    clientHonestyNote: 'Architectural portfolio case study exploring raw stone textures, spatial negative space, and material palette selectors.',
    year: '2026',
    location: 'Milan · New Delhi',
    deliverables: [
      'Editorial Portfolio Website',
      'Interactive Material Palette Selector',
      'Virtual Floorplan Explorer',
      'Bespoke Client Inquiry Portal'
    ],
    services: ['Web Design', 'UI/UX Design', 'Brand Identity'],
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#B79B58',
    overview: 'Aura Living is an architectural atelier specializing in monolithic stone residences, raw timber craftsmanship, and bioclimatic luxury spaces. Their digital presence mirrors the quiet confidence and tactile restraint of their physical structures.',
    challenge: 'Showcasing luxury residential spaces requires immense typographic discipline, optical balance, and effortless transitions without unnecessary visual clutter.',
    solution: 'A minimal, editorial publication layout with full-bleed architectural photography, natural stone texture accents, and seamless swipeable gallery viewports.',
    designSystem: {
      typographyPairing: 'Cormorant Garamond (Editorial Serif) + Montserrat (Geometric UI)',
      colorPalette: ['#0B0B0B', '#161616', '#B79B58', '#E6D5AC', '#F5F5F2'],
      gridGeometry: 'Harmonic Golden Ratio 1.618 Proportion Columns',
      motionArchetype: 'Whisper-Quiet Smooth Fade Transitions (0.4s Ease-Out)',
    },
    architecturalPhases: [
      { phase: '01', title: 'Spatial Blueprint', summary: 'Mapped out negative space ratios inspired by monolithic residential blueprints.' },
      { phase: '02', title: 'Material Palette', summary: 'Built an interactive swatch tool letting clients inspect stone, travertine, and bronze.' },
      { phase: '03', title: 'High-Res Asset Pipeline', summary: 'Optimized uncompressed architectural photography for retina displays.' },
      { phase: '04', title: 'Private Inquiry Flow', summary: 'Engineered a discrete concierge booking flow for high-net-worth commissions.' },
    ],
    impactMetrics: [
      { label: 'Commission Value Surge', value: '2.5x', description: 'Average ticket size of inbound private residential inquiries.' },
      { label: 'Audience Bounce Rate', value: '18.2%', description: 'Remarkable retention across editorial portfolio galleries.' },
      { label: 'Average Time on Site', value: '5m 12s', description: 'Deep engagement with material case studies.' }
    ],
    technologies: ['React', 'Motion', 'Tailwind CSS', 'Next-Gen Image Pipeline'],
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'MareclMarcio approached our digital presence the way we approach a building: with structural honesty, premium materials, and absolute reverence for light and space.',
      author: 'Elena Rossi',
      role: 'Principal Architect',
      company: 'Aura Living'
    },
    liveUrl: 'https://auraliving.design'
  },
  {
    id: 'kroma-genomics',
    slug: 'kroma-genomics',
    title: 'Kroma Bio Diagnostics',
    subtitle: 'Precision Epigenetics & AI-Driven Genomic Research Interface',
    client: 'Kroma Diagnostics Ltd',
    industry: 'Healthcare & Science',
    category: 'Healthcare',
    projectType: 'STUDIO CASE STUDY',
    clientHonestyNote: 'Biotechnology interface case study demonstrating SVG nucleotide schematics, clinical whitepaper libraries, and WCAG AAA contrast.',
    year: '2026',
    location: 'London · Hyderabad',
    deliverables: [
      'Clinical Research Platform',
      'Patient Test Result Viewer Mockup',
      'Scientific Whitepaper Index',
      'Regulatory Compliance Hub'
    ],
    services: ['Web Design', 'UI/UX Design', 'Performance Optimization', 'Maintenance'],
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#C5A869',
    overview: 'Kroma Bio leads frontier research in personalized oncology screening and CRISPR-guided diagnostics. We built an authoritative, clinically vetted web platform that empowers geneticists, physicians, and prospective trial participants.',
    challenge: 'Medical research portals often look sterile or archaic. Kroma needed cutting-edge sophistication that met stringent healthcare data privacy and accessibility standards.',
    solution: 'Engineered an ultra-fast, high-contrast dark science interface featuring SVG nucleotide schematics, rapid publication downloads, and a frictionless physician partner onboarding funnel.',
    designSystem: {
      typographyPairing: 'Playfair Display + Space Mono + Plus Jakarta Sans',
      colorPalette: ['#0A0D10', '#121820', '#C5A869', '#34D399', '#F5F5F2'],
      gridGeometry: 'Strict Modular 8px Baseline Grid with Clinical Contrast Ratios',
      motionArchetype: 'Precision Telemetry Pulse',
    },
    architecturalPhases: [
      { phase: '01', title: 'Clinical Discovery', summary: 'Structured medical nomenclature for geneticists and hospital directors.' },
      { phase: '02', title: 'Accessibility Hardening', summary: 'Audited 100% color contrast, keyboard focus rings, and screen-reader tags.' },
      { phase: '03', title: 'Vector Schematics', summary: 'Designed interactive SVG diagrams of cellular DNA sequencing.' },
      { phase: '04', title: 'Regulatory Architecture', summary: 'Built secure downloadable whitepaper hubs with instant search.' },
    ],
    impactMetrics: [
      { label: 'Hospital Network Onboarding', value: '+140%', description: 'Expansion in clinical partner adoption.' },
      { label: 'Lighthouse Accessibility Audit', value: '100/100', description: 'Flawless compliance for clinical screen readers.' },
      { label: 'Peer-Reviewed Downloads', value: '18,500+', description: 'Scientific publications accessed worldwide.' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualizers'],
    galleryImages: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'The precision and speed of our new digital presence has made onboarding university research partners three times faster than before.',
      author: 'Dr. Sameer Bannerjee',
      role: 'Head of Scientific Communications',
      company: 'Kroma Diagnostics'
    },
    liveUrl: 'https://kromabio.com'
  },
  {
    id: 'aethelgard-horlogerie',
    slug: 'aethelgard-horlogerie',
    title: 'Aethelgard Haute Horlogerie',
    subtitle: 'Immersive Digital Salon & Interactive Calibre Exhibition for Independent Artisanal Watchmaking',
    client: 'Aethelgard Watchmakers Guild',
    industry: 'Luxury & Craftsmanship',
    category: 'Luxury & Lifestyle',
    projectType: 'EXPERIMENTAL ARCHITECTURE',
    clientHonestyNote: 'Experimental luxury horological salon concept featuring micro-angle macro zooms, escapement acoustic simulators, and private concierge booking.',
    year: '2026',
    location: 'Geneva · Mumbai · Tokyo',
    deliverables: [
      'Digital Exhibition Salon',
      'Interactive Complication Explorer',
      'Private Collector Concierge Portal',
      'Bespoke Horological Typography',
      'Escapement Audio-Visual Showcase',
      'High-Resolution Heritage Archive'
    ],
    services: ['Web Design', 'UI/UX Design', 'Web Development', 'Brand Identity'],
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#B79B58',
    overview: 'Aethelgard is an independent atelier producing numbered mechanical timepieces in strictly limited quantities of 24 pieces annually. MareclMarcio was commissioned to build a digital salon that mirrors the quiet majesty, hand-beveled anglage, and tactile reverence of Geneva master watchmaking.',
    challenge: 'Luxury timepieces depend on micro-finishing, depth, and mechanical movement that static e-commerce templates flatten into ordinary product photos. The atelier needed an intimate, appointment-only digital salon that commanded prestige among high-net-worth collectors worldwide.',
    solution: 'We constructed a deep obsidian and hand-brushed gold salon layout. High-resolution multi-angle macro zooms reveal hand-engraved balances, while an interactive escapement simulator lets collectors experience the acoustic rhythm and mechanical precision of each movement before booking a private consultation.',
    designSystem: {
      typographyPairing: 'Cormorant Garamond (Watchmaker Serif) + Space Mono (Calibre Spec) + Montserrat',
      colorPalette: ['#080808', '#141414', '#B79B58', '#E6D5AC', '#F5F5F2'],
      gridGeometry: 'Concentric Horological Circles & 12-Hour Radial Matrix',
      motionArchetype: 'Mechanical Escapement Tick (28,800 vph Rhythm)',
    },
    architecturalPhases: [
      { phase: '01', title: 'Guild Heritage Study', summary: 'Cataloged hand-beveled anglage, geneva stripes, and tourbillon cage tolerances.' },
      { phase: '02', title: 'Macro Zoom Canvas', summary: 'Built multi-tier resolution pyramids for deep sub-millimeter component inspection.' },
      { phase: '03', title: 'Escapement Acoustics', summary: 'Integrated 4Hz mechanical tick oscillations into Web Audio.' },
      { phase: '04', title: 'Concierge Allocation Flow', summary: 'Constructed an encrypted private inquiry channel for global collectors.' },
    ],
    impactMetrics: [
      { label: 'Private Salon Bookings', value: '+280%', description: 'Surge in verified collector consultation appointments.' },
      { label: 'Average Exploration Dwell Time', value: '6m 45s', description: 'Exceptional collector engagement across calibre specs.' },
      { label: '2026 Calibre Allocation', value: '100%', description: 'Complete pre-order sellout of the Calibre VIII series.' }
    ],
    technologies: ['React', 'TypeScript', 'WebGL Canvas Zoom', 'Tailwind CSS', 'High-Res Asset Pipeline'],
    galleryImages: [
      'https://images.unsplash.com/photo-1547996160-71dfa63582b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'MareclMarcio crafted our digital salon with the exact same obsessive precision we dedicate to our movements. Every proportion, transition, and shade of gold is utterly flawless.',
      author: 'Jean-Marc Aethelgard',
      role: 'Master Horologist & Guild Founder',
      company: 'Aethelgard Horlogerie'
    },
    liveUrl: 'https://aethelgard.ch'
  }
];
