import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Heart, Sparkles, Compass, Eye, Users, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { MonogramSymbol, StudioEmblem } from '../components/MonogramLogo';
import { QualityMatrix } from '../components/QualityMatrix';
import { LiveClock } from '../components/LiveClock';
import { soundFx } from '../components/SoundEffects';

export const AboutPage: React.FC<{ onNavigate: (page: PageId, slug?: string) => void }> = ({ onNavigate }) => {
  const [activeValue, setActiveValue] = useState<number>(0);

  const values = [
    {
      num: '01',
      title: 'Purpose',
      tagline: 'Every design decision must have a clear reason.',
      desc: 'We reject decorative fluff and arbitrary aesthetic trends. Every color choice, line height, button position, and micro-interaction is deliberately engineered to serve your audience and commercial goals.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Simplicity',
      tagline: 'Complex technology should feel effortless to the user.',
      desc: 'Behind high-performance websites lies sophisticated engineering. But the human experience on screen must feel clean, natural, and immediately intuitive.',
      icon: Eye,
    },
    {
      num: '03',
      title: 'Craft',
      tagline: 'Small details define the entire digital perception.',
      desc: 'Typography, optical alignment, spacing ratios, sub-second load performance, and accessibility standards — we treat digital code with the precision of haute horlogerie.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Honesty',
      tagline: 'Transparent pricing, honest timelines, zero jargon.',
      desc: 'We do not inflate budgets with fake agency buzzwords or hide behind mysterious technical jargon. We operate with radical clarity, fixed milestones, and transparent scope.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      title: 'Curiosity',
      tagline: 'Constantly evolving alongside modern web frontiers.',
      desc: 'The web evolves relentlessly. We build with modern TypeScript, React, headless APIs, and edge networks rather than clinging to bloated legacy site-builders.',
      icon: Lightbulb,
    },
    {
      num: '06',
      title: 'People First',
      tagline: 'Behind every click is a human intent.',
      desc: 'Real human beings browse your website while on a crowded commute, in low-bandwidth areas, or relying on screen readers. Their comfort and respect always take precedence over showing off technical tricks.',
      icon: Users,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      {/* Page Hero Header */}
      <PageHeader
        badge="ABOUT MARECLMARCIO"
        title="We Design & Build Thoughtful Digital Products"
        subtitle="An independent design and technology studio helping ambitious organizations establish a commanding presence in the modern digital world."
      />

      {/* Studio Overview & Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
              <span>THE STUDIO STORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F5F5F2] leading-tight">
              Bridging haute design craftsmanship with modern engineering.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
              <p>
                MareclMarcio was founded on a simple conviction: <strong className="text-[#F5F5F2] font-normal">the internet is full of websites that look almost identical</strong>. Thousands of businesses settle for generic SaaS templates, bloated WordPress themes, or superficial designs that look flashy but fail to convert.
              </p>
              <p>
                From a single focused landing page to a complex institutional web ecosystem, we combine thoughtful editorial design with modern frontend technology. We create digital platforms that communicate clearly, load instantaneously, and function reliably across every screen size.
              </p>
              <p>
                Headquartered in India and working with clients worldwide, our boutique structure ensures direct partner-level dedication on every single project — with no layers of account managers or outsourced junior teams.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-tech-mono text-[#8A8A8A]">
              <div className="p-3 rounded-lg bg-[#141414] border border-white/5">
                <span className="text-[#B79B58] block font-bold text-base">ESTD 2026</span>
                <span>Independent Studio</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141414] border border-white/5">
                <span className="text-[#B79B58] block font-bold text-base">INDIA → GLOBAL</span>
                <span>Worldwide Remote Sync</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141414] border border-white/5">
                <span className="text-[#B79B58] block font-bold text-base">100% BESPOKE</span>
                <span>Zero Generic Templates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="p-8 rounded-2xl bg-[#121212] border border-[#B79B58]/20 relative">
              <StudioEmblem size={220} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#121212] border border-white/10 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B79B58]/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Compass size={14} />
              <span>OUR MISSION</span>
            </div>
            <h3 className="text-3xl font-display font-medium text-[#F5F5F2]">
              "Make the web more thoughtful."
            </h3>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
              We exist to create digital experiences that are useful, beautiful, accessible, and purposeful. We help businesses communicate their true identity without relying on deceptive dark patterns or hollow marketing gimmicks.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#121212] border border-white/10 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#CDB373]/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Sparkles size={14} />
              <span>OUR VISION</span>
            </div>
            <h3 className="text-3xl font-display font-medium text-[#F5F5F2]">
              "A better digital presence for every ambitious business."
            </h3>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
              We envision a digital landscape where businesses and institutions of every size can access world-class design and engineering without needing multi-million dollar traditional agency budgets.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Core Values */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Heart size={14} />
              <span>OUR FOUNDATIONAL ETHOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              The 6 Studio Values
            </h2>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
              Principles that govern every layout we sculpt and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#B79B58]/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] text-[#B79B58] group-hover:bg-[#B79B58] group-hover:text-[#0B0B0B] flex items-center justify-center transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-tech-mono text-[#8A8A8A]">{v.num}</span>
                    </div>

                    <h3 className="text-xl font-display font-medium text-[#F5F5F2] group-hover:text-[#CDB373] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs font-editorial italic text-[#CDB373]">
                      "{v.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Matrix Integration */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <QualityMatrix />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#070707]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
            Work with an independent studio dedicated to your outcome.
          </h2>
          <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
            Direct communication. Transparent milestones. Pristine execution.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-[#B79B58]/20"
            >
              <span>Schedule Discovery Call</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('work');
              }}
              className="px-6 py-4 rounded-full bg-[#1A1A1A] border border-white/10 text-xs uppercase tracking-widest text-[#F5F5F2]"
            >
              <span>Browse Case Studies</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
