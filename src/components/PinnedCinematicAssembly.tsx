import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import { Layout, Sparkles, Code2, ArrowUpRight, Cpu, ShieldCheck, Check, Layers, Sliders } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const PinnedCinematicAssembly: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [scrubPercent, setScrubPercent] = useState(0);
  const [activeArchetype, setActiveArchetype] = useState<'luxury' | 'ai' | 'institution'>('luxury');
  const [interactiveCounter, setInteractiveCounter] = useState(1);

  // References for stage transitions
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const pillarsRef = useRef<HTMLDivElement | null>(null);
  const floatingUI1Ref = useRef<HTMLDivElement | null>(null);
  const floatingUI2Ref = useRef<HTMLDivElement | null>(null);
  const floatingUI3Ref = useRef<HTMLDivElement | null>(null);
  const assembledInterfaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: 'top top',
          end: '+=2400',
          scrub: 0.8,
          onUpdate: (self) => {
            setScrubPercent(Math.round(self.progress * 100));
          },
        },
      });

      // 0% -> 25%: Hero Title transforms & separates into 4 pillars
      tl.to(heroTextRef.current, {
        scale: 0.85,
        y: -60,
        opacity: 0.4,
        ease: 'power1.inOut',
      }, 0)
      .fromTo(
        pillarsRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, ease: 'power2.out' },
        0.1
      )
      .to('.pillar-card', {
        x: (i) => (i === 0 ? -120 : i === 1 ? -40 : i === 2 ? 40 : 120),
        opacity: 1,
        stagger: 0.02,
        ease: 'power2.out',
      }, 0.15);

      // 25% -> 50%: UI Components emerge from the spatial void
      tl.to(pillarsRef.current, {
        opacity: 0.1,
        scale: 0.8,
        filter: 'blur(6px)',
        ease: 'power1.inOut',
      }, 0.3)
      .fromTo(
        floatingUI1Ref.current,
        { opacity: 0, x: -300, y: -100, rotateY: 30, scale: 0.7 },
        { opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1, ease: 'power2.out' },
        0.3
      )
      .fromTo(
        floatingUI2Ref.current,
        { opacity: 0, x: 300, y: -80, rotateY: -30, scale: 0.7 },
        { opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1, ease: 'power2.out' },
        0.35
      )
      .fromTo(
        floatingUI3Ref.current,
        { opacity: 0, y: 250, rotateX: 30, scale: 0.7 },
        { opacity: 1, y: 0, rotateX: 0, scale: 1, ease: 'power2.out' },
        0.4
      );

      // 50% -> 75%: Components magnetically snap and converge
      tl.to([floatingUI1Ref.current, floatingUI2Ref.current, floatingUI3Ref.current], {
        scale: 0.9,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'power2.in',
      }, 0.6)
      .to(heroTextRef.current, {
        opacity: 0,
        scale: 0.5,
        ease: 'power2.in',
      }, 0.6);

      // 75% -> 100%: Full Assembled Interactive Miniature Application
      tl.fromTo(
        assembledInterfaceRef.current,
        { opacity: 0, scale: 0.8, y: 80, rotateX: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          pointerEvents: 'auto',
          ease: 'power2.out',
        },
        0.7
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const archetypes = {
    luxury: {
      name: 'Haute Atelier & Luxury',
      tag: 'EDITORIAL PRESTIGE',
      headline: 'Aura of Pure Distinction',
      sub: 'Custom serif pairings, unhurried negative space, and gold-leaf precision lighting.',
      metric: '0.34s Paint',
    },
    ai: {
      name: 'Frontier AI & Autonomous Systems',
      tag: 'COMPUTATIONAL AUTHORITY',
      headline: 'Neural Intelligence Canvas',
      sub: 'Sub-second real-time telemetry streaming, dark glassmorphism, and reactive node graphs.',
      metric: '60.0 FPS Sync',
    },
    institution: {
      name: 'Academic & Healthcare Institutions',
      tag: 'IMMUTABLE TRUST',
      headline: 'Clinical & Scientific Rigor',
      sub: 'Structured encyclopedic hierarchy, AA accessibility compliance, and archival clarity.',
      metric: '100% WCAG AA',
    },
  };

  const cur = archetypes[activeArchetype];

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0A0A0A] text-[#F5F5F2] selection:bg-[#B79B58] selection:text-[#0B0B0B]"
      style={{ height: '340vh' }}
    >
      {/* PINNED CONTAINER */}
      <div
        ref={pinRef}
        className="w-full h-screen sticky top-0 left-0 flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-hidden border-b border-white/10"
        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        {/* HUD Top Bar */}
        <div className="w-full flex items-center justify-between text-xs font-tech-mono z-30 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[#B79B58] uppercase tracking-widest">
              CINEMATIC ASSEMBLY · 0% TO 100% TIMELINE
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#141414] border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-[#8A8A8A]">STAGE:</span>
            <span className="text-[#CDB373] font-bold">
              {scrubPercent < 25
                ? '01. INTENT'
                : scrubPercent < 50
                ? '02. SEPARATION'
                : scrubPercent < 75
                ? '03. EMERGENCE'
                : '04. LIVE ASSEMBLED DEMO'}
            </span>
            <span className="text-[#8A8A8A]">({scrubPercent}%)</span>
          </div>
        </div>

        {/* Central Transformative Stage */}
        <div className="relative flex-grow flex items-center justify-center my-auto w-full max-w-6xl mx-auto">
          {/* 1. INITIAL HEADLINE (0% - 25%) */}
          <div
            ref={heroTextRef}
            className="text-center space-y-4 max-w-3xl absolute z-10 transition-all pointer-events-none select-none"
          >
            <span className="text-xs font-tech-mono text-[#B79B58] uppercase tracking-[0.3em] block">
              ✦ CORE CAPABILITY DEMONSTRATION
            </span>
            <h2 className="text-4xl sm:text-7xl font-display font-medium text-[#F5F5F2] leading-tight tracking-tight">
              WE BUILD DIGITAL EXPERIENCES
            </h2>
            <p className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light max-w-xl mx-auto">
              Scroll down to watch code, typography, motion, and layout physically assemble into a live digital environment.
            </p>
          </div>

          {/* 2. FOUR PILLARS SEPARATION (25% - 50%) */}
          <div
            ref={pillarsRef}
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 pointer-events-none transition-all max-w-4xl mx-auto"
          >
            {[
              { title: 'TYPE', desc: 'Typographic hierarchy with bespoke ratio scaling.', color: '#CDB373' },
              { title: 'GRID', desc: 'Architectural alignment & mathematical balance.', color: '#F5F5F2' },
              { title: 'MOTION', desc: 'Fluid 60 FPS physics & scroll-scrubbed inertia.', color: '#B79B58' },
              { title: 'CODE', desc: 'Type-safe sub-second performance engineering.', color: '#A0A0A0' },
            ].map((p, i) => (
              <div
                key={p.title}
                className="pillar-card p-5 rounded-2xl bg-[#141414] border border-[#B79B58]/30 space-y-2 w-52 shadow-2xl opacity-0"
              >
                <span className="text-xs font-tech-mono text-[#B79B58]">0{i + 1}</span>
                <h4 className="text-xl font-display font-bold" style={{ color: p.color }}>
                  {p.title}
                </h4>
                <p className="text-[11px] text-[#8A8A8A] font-sans-refined leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 3. FLOATING UI COMPONENTS (50% - 75%) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Header pill component */}
            <div
              ref={floatingUI1Ref}
              className="absolute -top-16 left-8 p-4 rounded-2xl bg-[#161616]/95 border border-[#B79B58]/40 shadow-2xl w-72 backdrop-blur-xl opacity-0"
            >
              <div className="flex items-center justify-between text-xs font-tech-mono pb-2 border-b border-white/10">
                <span className="text-[#CDB373]">LIVE PRESTIGE NAV</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-[#8A8A8A]">
                <span>Archive</span>
                <span>Disciplines</span>
                <span className="text-[#F5F5F2] font-semibold">Initiate →</span>
              </div>
            </div>

            {/* Metrics visualizer component */}
            <div
              ref={floatingUI2Ref}
              className="absolute top-12 right-8 p-4 rounded-2xl bg-[#161616]/95 border border-[#B79B58]/40 shadow-2xl w-64 backdrop-blur-xl opacity-0"
            >
              <span className="text-[10px] font-tech-mono text-[#8A8A8A]">CORE WEB VITALS</span>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-display font-bold text-emerald-400">99</p>
                  <p className="text-[10px] text-[#8A8A8A]">Lighthouse Score</p>
                </div>
                <div className="h-10 w-24 flex items-end gap-1 pb-1">
                  {[40, 65, 85, 95, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#B79B58] rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Live interaction trigger */}
            <div
              ref={floatingUI3Ref}
              className="absolute bottom-6 p-4 rounded-2xl bg-[#161616]/95 border border-white/20 shadow-2xl w-80 backdrop-blur-xl opacity-0"
            >
              <p className="text-xs font-editorial italic text-[#CDB373]">
                "Formulating commanding digital presence for discerning clientele."
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] font-tech-mono text-[#8A8A8A]">
                <span>100% BESPOKE</span>
                <span>ZERO TEMPLATES</span>
              </div>
            </div>
          </div>

          {/* 4. ASSEMBLED FULL LIVE MINIATURE APPLICATION (75% - 100%) */}
          <div
            ref={assembledInterfaceRef}
            className="w-full max-w-5xl rounded-3xl bg-[#121212] border border-[#B79B58]/40 shadow-2xl overflow-hidden opacity-0 pointer-events-none transition-all duration-300 relative z-20"
          >
            {/* Miniature Browser Chrome */}
            <div className="bg-[#181818] px-4 py-3 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-tech-mono text-[#8A8A8A] ml-2">
                  https://app.mareclmarcio.studio/demo-preview
                </span>
              </div>

              {/* Interactive Archetype Switcher inside the mini app */}
              <div className="flex items-center gap-1 p-1 bg-[#0F0F0F] rounded-lg border border-white/10">
                {(['luxury', 'ai', 'institution'] as const).map((arch) => (
                  <button
                    key={arch}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveArchetype(arch);
                    }}
                    className={`px-2.5 py-1 rounded text-[10px] font-tech-mono uppercase transition-all ${
                      activeArchetype === arch
                        ? 'bg-[#B79B58] text-[#0B0B0B] font-bold'
                        : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                    }`}
                  >
                    {arch}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Interactive Viewport Body */}
            <div className="p-6 sm:p-8 space-y-6 bg-architect-grid min-h-[340px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-tech-mono text-[#B79B58] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>{cur.tag}</span>
                  </span>
                  <span className="text-[11px] font-tech-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    ✦ {cur.metric}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#F5F5F2]">
                  {cur.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-xl">
                  {cur.sub}
                </p>
              </div>

              {/* Live Interactive Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    soundFx.playChime(640 + interactiveCounter * 50);
                    setInteractiveCounter((prev) => prev + 1);
                  }}
                  className="p-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 text-left space-y-1 transition-all group"
                >
                  <span className="text-[10px] font-tech-mono text-[#CDB373] block">
                    INTERACTIVE COUNTER
                  </span>
                  <p className="text-sm font-display text-[#F5F5F2] flex items-center justify-between">
                    <span>Interactions: {interactiveCounter}</span>
                    <ArrowUpRight size={14} className="text-[#B79B58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </p>
                </button>

                <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-white/10 space-y-1">
                  <span className="text-[10px] font-tech-mono text-[#8A8A8A] block">
                    SECTOR ADAPTATION
                  </span>
                  <p className="text-sm font-sans-refined text-[#F5F5F2] truncate font-medium">
                    {cur.name}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-white/10 space-y-1">
                  <span className="text-[10px] font-tech-mono text-[#8A8A8A] block">
                    RENDER PIPELINE
                  </span>
                  <p className="text-sm font-tech-mono text-emerald-400">
                    60 FPS · Zero Layout Shift
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HUD Bottom Guide */}
        <div className="w-full flex items-center justify-between text-xs font-tech-mono text-[#8A8A8A] pt-4 border-t border-white/5 z-30 pointer-events-none">
          <span>REAL-TIME SCROLL SCRUBBED ASSEMBLY</span>
          <span className="text-[#B79B58]">MARECLMARCIO CINEMATIC ENGINE</span>
        </div>
      </div>
    </div>
  );
};
