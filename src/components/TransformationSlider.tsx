import React, { useState, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import { ArrowLeftRight, CheckCircle, XCircle, Sparkles, Sliders, ShieldCheck, Zap } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Link scroll progress to auto-scrub slider when scrolling through section
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 0.5,
        onUpdate: (self) => {
          if (!isDragging) {
            // Map scroll progress from 85% (templated) to 15% (bespoke haute)
            const computedPos = 85 - self.progress * 65;
            setSliderPosition(Math.max(10, Math.min(90, computedPos)));
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDragging]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Sliders size={14} />
              <span>THE ARCHITECTURAL SHIFT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              The Transformation Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-xl">
              Scroll or drag to observe the contrast between generic template conventions and MareclMarcio's bespoke digital engineering.
            </p>
          </div>

          <div className="text-xs font-tech-mono text-[#CDB373] bg-[#141414] px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <ArrowLeftRight size={13} />
            <span>SCROLL OR DRAG TO REVEAL</span>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          data-cursor-text="DRAG"
          className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-black shadow-2xl"
        >
          {/* AFTER SIDE: MareclMarcio Bespoke Haute Experience (Full Width Base) */}
          <div className="absolute inset-0 bg-[#0B0B0B] p-6 sm:p-12 flex flex-col justify-between text-[#F5F5F2]">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-[#B79B58]/30 pb-4">
              <span className="text-xs font-tech-mono text-[#CDB373] flex items-center gap-2">
                <Sparkles size={14} />
                <span>✦ MARECLMARCIO BESPOKE ARCHITECTURE</span>
              </span>
              <span className="text-xs font-tech-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                99/100 LIGHTHOUSE · 60 FPS
              </span>
            </div>

            {/* Content Showcase */}
            <div className="space-y-6 max-w-lg">
              <span className="text-xs font-tech-mono text-[#8A8A8A] uppercase tracking-widest">
                HAUTE EDITORIAL CRAFT
              </span>
              <h3 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2] leading-tight">
                "Where visual prestige meets mathematical performance."
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                Custom typographic scales, tactile cursor physics, zero layout shifts, and tailored conversion funnels sculpted around your enterprise's distinct authority.
              </p>
            </div>

            {/* Bottom Strengths Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-sans-refined">
              <div className="flex items-center gap-2 text-[#F5F5F2]">
                <CheckCircle size={14} className="text-[#B79B58] shrink-0" />
                <span>Sub-second Initial Paint</span>
              </div>
              <div className="flex items-center gap-2 text-[#F5F5F2]">
                <CheckCircle size={14} className="text-[#B79B58] shrink-0" />
                <span>100% Bespoke Codebase</span>
              </div>
              <div className="flex items-center gap-2 text-[#F5F5F2]">
                <CheckCircle size={14} className="text-[#B79B58] shrink-0" />
                <span>Unquestioned Credibility</span>
              </div>
            </div>
          </div>

          {/* BEFORE SIDE: Generic Templated Website (Clipped Overlay) */}
          <div
            className="absolute inset-y-0 left-0 bg-[#1A1A1A] p-6 sm:p-12 flex flex-col justify-between text-[#8A8A8A] border-r-2 border-[#B79B58] overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <span className="text-xs font-tech-mono text-red-400/80 flex items-center gap-2">
                <XCircle size={14} />
                <span>GENERIC COMMODITIZED TEMPLATE</span>
              </span>
              <span className="text-xs font-tech-mono text-red-400 bg-red-950/40 border border-red-500/30 px-2.5 py-0.5 rounded-full">
                48/100 LIGHTHOUSE · HIGH BOUNCE
              </span>
            </div>

            {/* Content Showcase */}
            <div className="space-y-6 max-w-lg">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                OFF-THE-SHELF THEME #4092
              </span>
              <h3 className="text-3xl sm:text-5xl font-sans font-bold text-neutral-300 leading-tight">
                "Welcome to Our Modern Business Website."
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                Bloated WordPress plugins, sluggish mobile experience, repetitive stock photos, and cookie-cutter layouts that look identical to every competitor.
              </p>
            </div>

            {/* Bottom Flaws Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5 text-xs font-sans">
              <div className="flex items-center gap-2 text-neutral-400">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>3.8s Sluggish Paint</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>Bloated Plugins</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>Instant Forgettability</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-[#B79B58] text-[#0B0B0B] flex items-center justify-center shadow-2xl border-2 border-white">
              <ArrowLeftRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
