import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'turnaround-time',
    question: 'How long does a website take from start to finish?',
    answer: 'Most standard studio websites take approximately 1 to 3 weeks depending on the scope of work, content readiness, and revision rounds. Essential Websites typically launch in 5–10 business days, Professional Websites take 10–18 business days, and complex custom digital experiences or web apps require 3–5 weeks. We establish a clear timeline during our kickoff call and stick to it with transparent milestone updates.',
    category: 'process'
  },
  {
    id: 'international-clients',
    question: 'Do you work with clients outside of India?',
    answer: 'Yes, absolutely. MareclMarcio operates remotely and partners with businesses, founders, and institutions across North America, Europe, the Middle East, Southeast Asia, and Australia. We accommodate international timezones, communicate clearly via video or asynchronous channels (Slack/Notion), and accept global payments via Stripe and international wire transfers in USD, EUR, GBP, and INR.',
    category: 'international'
  },
  {
    id: 'templates-vs-custom',
    question: 'Do you use generic pre-made templates?',
    answer: 'No. We do not use generic WordPress themes or pre-packaged templates. Every MareclMarcio project is designed from scratch in Figma around your brand’s unique identity, content structure, and commercial goals. While we utilize modern, battle-tested engineering frameworks (React, TypeScript, Tailwind CSS) for speed, security, and scalability, the interface architecture and visual choreography are 100% bespoke.',
    category: 'technical'
  },
  {
    id: 'redesign-existing',
    question: 'Can you redesign our existing website without losing SEO rankings?',
    answer: 'Yes. Website redesigns are one of our core specialties. We conduct a thorough pre-migration SEO audit to map existing URLs, retain established metadata, configure 301 redirects where appropriate, and preserve valuable search equity while giving your brand a dramatically elevated, modern aesthetic and faster load speed.',
    category: 'process'
  },
  {
    id: 'hosting-deployment',
    question: 'Do you provide hosting and deployment assistance?',
    answer: 'Yes. We assist with end-to-end domain connection, SSL certificate configuration, CDN setup (such as Cloudflare, Vercel, or AWS), and zero-downtime deployment. If you already have existing hosting or servers, we deploy directly to your preferred infrastructure and provide full documentation.',
    category: 'technical'
  },
  {
    id: 'ongoing-maintenance',
    question: 'What happens after the website is launched? Do you offer maintenance?',
    answer: 'Every project includes a complimentary post-launch support window (14 to 60 days depending on your tier). Following that, we offer three proactive monthly Care & Evolution plans (starting at ₹999/mo) covering uptime monitoring, security patches, regular content refreshes, speed checks, and dedicated studio support.',
    category: 'pricing'
  },
  {
    id: 'mobile-responsiveness',
    question: 'Will our website work flawlessly on mobile phones and tablets?',
    answer: 'Mobile excellence is our default standard, not an afterthought. More than 65% of web visitors browse on smartphones, so we design with mobile ergonomics in mind from day one. Every button has generous 44px+ touch targets, typography scales legibly without horizontal overflow, and motion is optimized to run at silky 60 FPS on iOS and Android devices.',
    category: 'technical'
  },
  {
    id: 'payment-terms',
    question: 'What are your payment terms and milestones?',
    answer: 'For standard fixed-scope projects, we operate on a clear milestone schedule: 50% upon project kickoff and agreement sign-off, and 50% upon final sign-off before production domain deployment. For larger custom or enterprise projects, we can structure payments into 3 or 4 milestones tied to deliverables (Discovery & Wireframes, Design Approval, Final Build & Launch).',
    category: 'pricing'
  },
  {
    id: 'content-assistance',
    question: 'What if we do not have our copy or photography ready yet?',
    answer: 'We can guide you through content structuring. We provide content blueprints, wireframe copy templates, and can assist with professional copywriting and curated high-resolution art direction so your website never stalls waiting for content.',
    category: 'process'
  },
  {
    id: 'code-ownership',
    question: 'Who owns the final design files and source code?',
    answer: 'You do. Upon final invoice settlement, 100% of the intellectual property, design assets (Figma files), code repository (GitHub), and domain access belong entirely to you with zero lock-in or recurring proprietary licensing fees.',
    category: 'general'
  }
];
