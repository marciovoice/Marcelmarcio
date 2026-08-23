import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'cssas',
    slug: 'cssas-ayurvedic-sansthan',
    title: 'Chandra Shekhar Singh Ayurvedic Sansthan',
    subtitle: 'Preserving Vedic Ayurvedic Legacy Through Modern Institutional Digital Architecture',
    client: 'CSSAS Institute of Medical Sciences',
    industry: 'Education & Healthcare',
    category: 'Institutional',
    year: '2026',
    location: 'India · Worldwide Reach',
    deliverables: [
      'Institutional Web Portal',
      'Course & Admissions Engine',
      'Research & Herbal Database',
      'Multilingual Heritage UI',
      'WCAG AAA Compliance',
      'High-Speed Server Architecture'
    ],
    services: ['Web Design', 'UI/UX Design', 'Web Development', 'Performance Optimization'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1800&auto=format&fit=crop',
    accentColor: '#B79B58',
    overview: 'Chandra Shekhar Singh Ayurvedic Sansthan (CSSAS) is a premier medical academy and research hospital bridging ancient Ayurvedic wisdom with contemporary medical rigor. MareclMarcio was commissioned to redesign their entire digital footprint from the ground up — modernizing the student admission pipeline, showcasing botanical clinical trials, and establishing an authoritative institutional portal.',
    challenge: 'The existing institutional portal was outdated, non-responsive on mobile devices, and struggled to present deep scholastic curricula without overwhelming prospective students and international patients. The institution required an experience that honored classical Indian medicinal heritage while commanding immediate technical trust.',
    solution: 'We engineered an architectural design system combining warm sandstone, deep obsidian, and muted botanical gold. We built structured department directories, interactive 3D campus tour paths, a real-time admissions inquiry workflow, and optimized asset delivery for high performance across tier-2 and tier-3 regional connectivity.',
    impactMetrics: [
      { label: 'Mobile Conversion', value: '+310%', description: 'Surge in completed student application submissions within 60 days of launch.' },
      { label: 'Performance Score', value: '99/100', description: 'Google Lighthouse score across mobile and desktop audits.' },
      { label: 'Avg Session Duration', value: '4m 18s', description: 'Increased scholastic syllabus engagement and faculty profile exploration.' }
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
    solution: 'We formulated a dark obsidian visual architecture punctuated by muted champagne typography. Custom lazy-loading WebGL and canvas shaders deliver zero-latency video teasers on hover, while micro-sound design enhances tactile navigation without intrusion.',
    impactMetrics: [
      { label: 'Client Inquiry Rate', value: '4.8x', description: 'Increase in commercial agency director inquiries.' },
      { label: 'Frame Rate', value: '60 FPS', description: 'Smooth motion benchmarks sustained across mobile and high-refresh displays.' },
      { label: 'Editorial Awards', value: '3x', description: 'Site of the Day distinctions across global design indexes.' }
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
    impactMetrics: [
      { label: 'Waitlist Signups', value: '42,000+', description: 'Qualified developer signups captured in the first 14 days.' },
      { label: 'Conversion Rate', value: '34.6%', description: 'Visitor to waitlist completion conversion.' },
      { label: 'Seed Round', value: '$4.2M', description: 'Over-subscribed seed round closed post launch.' }
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
    impactMetrics: [
      { label: 'Commission Size', value: '2.5x', description: 'Average value of inbound architectural commissions.' },
      { label: 'Bounce Rate', value: '18.2%', description: 'Exceptional visitor retention across high-resolution galleries.' },
      { label: 'Time on Site', value: '5m 12s', description: 'Deep engagement with architectural blueprints and material case studies.' }
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
    impactMetrics: [
      { label: 'Clinical Partners', value: '+140%', description: 'Growth in hospital network onboarding.' },
      { label: 'Lighthouse Accessibility', value: '100/100', description: 'Flawless compliance for screen readers and clinical keyboards.' },
      { label: 'Paper Downloads', value: '18,500+', description: 'Peer-reviewed research whitepapers accessed worldwide.' }
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
  }
];
