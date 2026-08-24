import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Code2, Layout, Compass, Flame, CheckCircle, ChevronRight, Sliders, Cpu } from 'lucide-react';
import { PageId, Project } from '../types';
import { projectsData } from '../data/projectsData';
import { servicesData } from '../data/servicesData';
import { processPhases } from '../data/processData';
import { MonogramSymbol, StudioEmblem } from '../components/MonogramLogo';
import { ProjectCard } from '../components/ProjectCard';
import { LiveClock } from '../components/LiveClock';
import { QualityMatrix } from '../components/QualityMatrix';
import { ClientTypesGrid } from '../components/ClientTypesGrid';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { HeroCanvas } from '../components/HeroCanvas';
import { ExplosionSequence } from '../components/ExplosionSequence';
import { PinnedCinematicAssembly } from '../components/PinnedCinematicAssembly';
import { HorizontalShowcase } from '../components/HorizontalShowcase';
import { CraftLabSection } from '../components/CraftLabSection';
import { TransformationSlider } from '../components/TransformationSlider';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTabService, setActiveTabService] = useState<string>('web-design');

  const handleNav = (page: PageId, slug?: string) => {
    soundFx.playClick();
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentService = servicesData.find((s) => s.id === activeTabService) || servicesData[0];

  const reasons = [
    {
      title: 'Engineered For Prestige & Commercial Intent',
      desc: 'We reject commoditized generic templates. Every viewport, interaction curve, and typographic hierarchy is sculpted around your distinct market authority.',
    },
    {
      title: 'Haute Design Meets Rock-Solid Engineering',
      desc: 'Visual poetry is valuable only when backed by sub-second loading speed, zero layout shifts, and accessible, maintainable TypeScript code.',
    },
    {
      title: 'Mobile Ergonomics By Default',
      desc: 'Over 65% of global high-value traffic is mobile. We calibrate tactile thumb zones, swipe gestures, and responsive typography for small screens first.',
    },
    {
      title: 'Sub-Second Performance & 99+ Lighthouse',
      desc: 'Lightweight asset streaming and GPU-accelerated 60 FPS transitions that maximize customer retention, SEO ranking, and trust.',
    },
    {
      title: 'Radical Transparency & Honest Scope',
      desc: 'No opaque agency markups or artificial jargon. You receive predictable milestones, direct technical dialogue, and complete IP ownership.',
    },
    {
      title: 'Enduring Architecture',
      desc: 'Modular design systems crafted with clean components that scale seamlessly as your enterprise or institution expands.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2] overflow-hidden selection:bg-[#B79B58] selection:text-[#0B0B0B]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION WITH INTERACTIVE GPU CANVAS */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-architect-grid overflow-hidden">
        {/* Interactive GPU Particle Canvas */}
        <HeroCanvas interactive={true} />

        {/* Ambient Gold Radial Flare */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#B79B58]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Top Floating Status Pill */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414]/90 border border-[#B79B58]/30 backdrop-blur-md self-start"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-tech-mono uppercase tracking-widest text-[#CDB373]">
              ✦ INDEPENDENT DIGITAL STUDIO · ESTD 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:block"
          >
            <LiveClock compact />
          </motion.div>
        </div>

        {/* Center Display Title & Monogram Interplay */}
        <div className="max-w-7xl mx-auto w-full my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs sm:text-sm font-tech-mono uppercase tracking-[0.3em] text-[#8A8A8A] block mb-3">
                Digital Design &amp; Technology Studio
              </span>
              <h1 className="text-4xl sm:text-7xl xl:text-8xl font-display font-medium text-[#F5F5F2] tracking-tight leading-[1.02]">
                MARECLMARCIO
              </h1>
              <p className="mt-4 text-2xl sm:text-4xl xl:text-5xl font-editorial italic text-[#CDB373] tracking-wide">
                "Digital experiences, built with intent."
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed max-w-2xl"
            >
              We help ambitious institutions, frontier AI ventures, luxury ateliers, and creative visionaries construct commanding digital ecosystems. Combining haute typographic poise with high-performance engineering.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <button
                id="hero-cta-start"
                onClick={() => handleNav('contact')}
                onMouseEnter={() => soundFx.playHover()}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-[#B79B58]/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-cta-work"
                onClick={() => handleNav('work')}
                onMouseEnter={() => soundFx.playHover()}
                className="px-7 py-4 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 text-xs uppercase tracking-widest text-[#F5F5F2] flex items-center gap-2 transition-colors"
              >
                <span>Explore Work ({projectsData.length})</span>
                <ChevronRight size={14} className="text-[#B79B58]" />
              </button>

              <button
                id="hero-cta-pricing"
                onClick={() => handleNav('pricing')}
                className="px-6 py-4 rounded-full text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#CDB373] transition-colors"
              >
                Pricing from ₹7,999+
              </button>
            </motion.div>
          </div>

          {/* Right Architectural Monogram Feature */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative flex items-center justify-center p-8">
              <StudioEmblem size={240} className="scale-90 sm:scale-100" />
            </div>
          </div>
        </div>

        {/* Bottom Ticker / Capabilities Ribbon */}
        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-tech-mono text-[#8A8A8A] relative z-10">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-[#F5F5F2] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
              BESPOKE WEB DESIGN
            </span>
            <span>·</span>
            <span className="text-[#F5F5F2]">FULL-STACK ENGINEERING</span>
            <span>·</span>
            <span className="text-[#F5F5F2]">UI/UX SYSTEMS</span>
            <span>·</span>
            <span className="text-[#F5F5F2]">INTERACTIVE MOTION</span>
          </div>

          <div className="text-[#8A8A8A]">
            BASED IN INDIA · WORKING WORLDWIDE
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SIGNATURE EXPLOSION & REASSEMBLY SCROLL-SCRUBBED SEQUENCE */}
      {/* ========================================================================= */}
      <ExplosionSequence />

      {/* ========================================================================= */}
      {/* 3. PINNED CINEMATIC ASSEMBLY TIMELINE — "WE BUILD DIGITAL EXPERIENCES" */}
      {/* ========================================================================= */}
      <PinnedCinematicAssembly />

      {/* ========================================================================= */}
      {/* 4. PINNED HORIZONTAL CINEMATIC PORTFOLIO SHOWCASE */}
      {/* ========================================================================= */}
      <HorizontalShowcase
        onSelectProject={(slug) => handleNav('case-study', slug)}
        onExploreAll={() => handleNav('work')}
      />

      {/* ========================================================================= */}
      {/* 5. THE CRAFT — DIGITAL SYSTEMS LABORATORY (INTERACTIVE SANDBOX) */}
      {/* ========================================================================= */}
      <CraftLabSection />

      {/* ========================================================================= */}
      {/* 6. SCROLL-BASED TRANSFORMATION SLIDER (BEFORE VS AFTER) */}
      {/* ========================================================================= */}
      <TransformationSlider />

      {/* ========================================================================= */}
      {/* 7. PHILOSOPHY & MANIFESTO SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
                <span>STUDIO PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2] leading-tight">
                "Good design gets attention. Great design makes things understandable."
              </h2>
              <p className="text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed pt-2">
                We do not design websites simply to fill browser windows with generic templates. We design them to answer the four foundational human questions:
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: '01', q: 'Who are you?', d: 'Establishing immediate, unquestionable credibility and cultural authority.' },
                { num: '02', q: 'What do you offer?', d: 'Articulating complex products and services with razor-sharp clarity.' },
                { num: '03', q: 'Why should someone trust you?', d: 'Reinforcing authority through craft, speed, and tactile attention to detail.' },
                { num: '04', q: 'What should they do next?', d: 'Engineering frictionless conversion funnels that guide visitors to act.' },
              ].map((item) => (
                <div
                  key={item.num}
                  className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-2 hover:border-[#B79B58]/30 transition-colors"
                >
                  <span className="text-xs font-tech-mono text-[#B79B58]">{item.num}</span>
                  <h3 className="text-lg font-display text-[#F5F5F2]">{item.q}</h3>
                  <p className="text-xs text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SERVICES DISCIPLINE EXPLORER */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest mb-2">
                <Code2 size={14} />
                <span>STUDIO DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
                Our Services at a Glance
              </h2>
            </div>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 text-xs font-tech-mono uppercase tracking-widest text-[#CDB373] hover:text-[#F5F5F2] transition-colors"
            >
              <span>Explore All {servicesData.length} Services</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Interactive Service Switcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-2">
              {servicesData.map((srv) => {
                const isSelected = activeTabService === srv.id;
                return (
                  <button
                    key={srv.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveTabService(srv.id);
                    }}
                    className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-[#181818] border-[#B79B58] text-[#F5F5F2] shadow-lg shadow-[#B79B58]/5 pl-6'
                        : 'bg-[#121212] border-white/5 text-[#8A8A8A] hover:border-white/15'
                    }`}
                  >
                    <div>
                      <p className={`text-base font-sans-refined font-medium ${isSelected ? 'text-[#F5F5F2]' : 'text-[#8A8A8A]'}`}>
                        {srv.title}
                      </p>
                      <p className="text-[11px] font-tech-mono text-[#CDB373] mt-0.5">
                        From {srv.startingPrice} · {srv.turnaround}
                      </p>
                    </div>
                    <ChevronRight size={16} className={isSelected ? 'text-[#B79B58]' : 'text-[#8A8A8A] opacity-40'} />
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Card */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#141414] border border-[#B79B58]/30 flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                    DISCIPLINE OVERVIEW
                  </span>
                  <span className="text-xs font-tech-mono text-[#8A8A8A]">
                    Estimated Turnaround: <strong className="text-[#F5F5F2]">{currentService.turnaround}</strong>
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F5F2]">
                    {currentService.title}
                  </h3>
                  <p className="text-sm font-editorial italic text-[#CDB373]">
                    "{currentService.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-3">
                  <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                    KEY DELIVERABLES INCLUDED
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentService.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F5F5F2] bg-[#1A1A1A] p-2.5 rounded-xl border border-white/5">
                        <CheckCircle size={14} className="text-[#B79B58] shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase">Starting Investment</span>
                  <p className="text-2xl font-display font-bold text-[#F5F5F2]">{currentService.startingPrice}+</p>
                </div>

                <button
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20"
                >
                  <span>Request {currentService.title}</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. 6-PHASE STUDIO PROCESS PREVIEW */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest mb-2">
                <Compass size={14} />
                <span>STUDIO METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
                Our 6-Phase Approach
              </h2>
            </div>
            <button
              onClick={() => handleNav('process')}
              className="inline-flex items-center gap-2 text-xs font-tech-mono uppercase tracking-widest text-[#CDB373] hover:text-[#F5F5F2] transition-colors"
            >
              <span>Explore Detailed Process</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#B79B58]/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-[#B79B58] group-hover:text-[#CDB373]">
                      {phase.step}
                    </span>
                    <span className="text-[11px] font-tech-mono text-[#8A8A8A] bg-[#1A1A1A] px-2.5 py-0.5 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-[#F5F5F2]">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                    {phase.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="text-[10px] font-tech-mono text-[#CDB373]">
                    Deliverable: {phase.clientDeliverables[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. REASONS TO CHOOSE MARECLMARCIO */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>THE STUDIO ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              Why Ambitious Clients Choose Us
            </h2>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
              We bridge the gap between creative visual artistry and rigorous frontend engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all space-y-3"
              >
                <span className="text-xs font-tech-mono text-[#B79B58]">0{i + 1}</span>
                <h3 className="text-lg font-display text-[#F5F5F2]">{r.title}</h3>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CLIENT SECTORS / TYPES */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest mb-2">
                <Flame size={14} />
                <span>SECTORS WE SERVE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
                Client Archetypes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-sm">
              From historic medical academies to AI startups and luxury auteurs, we adapt our craft to your field.
            </p>
          </div>

          <ClientTypesGrid onInquire={() => handleNav('contact')} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. 11-POINT QUALITY PROMISE MATRIX */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <QualityMatrix />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. INTERACTIVE ESTIMATOR & PRICING PREVIEW */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <ProjectEstimator
            onSelectScope={() => handleNav('contact')}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. FINAL INVITATION / CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] to-[#141414] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <MonogramSymbol size={64} variant="gold" className="mx-auto" />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#F5F5F2] leading-tight">
            Ready to build something worth remembering?
          </h2>
          <p className="text-base text-[#8A8A8A] font-sans-refined font-light max-w-xl mx-auto">
            Tell us about your venture, product, or institution. We will architect a comprehensive digital proposal within 24 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-[#B79B58]/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Initiate Studio Project</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className="px-6 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#242424] border border-white/10 text-xs font-sans-refined uppercase tracking-widest text-[#F5F5F2] transition-colors"
            >
              <span>View Pricing Plans (from ₹7,999)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
