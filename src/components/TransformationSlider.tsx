import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle, XCircle, Sparkles, Layers, Sliders } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E] relative overflow-hidden">
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
              Drag the interactive divider to observe the dramatic difference between standard commercial templates and a bespoke MareclMarcio digital ecosystem.
            </p>
          </div>

          <div className="text-xs font-tech-mono text-[#CDB373] bg-[#141414] px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <ArrowLeftRight size={13} />
            <span>DRAG TO REVEAL</span>
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
          className="relative h-[460px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-black shadow-2xl"
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

          {/* BEFORE SIDE: Generic Template (Clipped Overlay) */}
          <div
            className="absolute inset-y-0 left-0 bg-[#222228] p-6 sm:p-12 flex flex-col justify-between text-[#8A8A9A] border-r-2 border-[#B79B58] overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 min-w-[320px] sm:min-w-[600px]">
              <span className="text-xs font-sans text-red-300 flex items-center gap-2">
                <XCircle size={14} />
                <span>GENERIC TEMPLATE / SAAS BOILERPLATE</span>
              </span>
              <span className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-500/30 px-2 py-0.5 rounded">
                SLOW (4.2s LOAD) · GENERIC
              </span>
            </div>

            <div className="space-y-4 max-w-lg min-w-[320px] sm:min-w-[600px]">
              <span className="text-xs font-mono text-zinc-400">COMMONPLACE DESIGN</span>
              <h3 className="text-2xl sm:text-4xl font-sans font-bold text-zinc-300">
                "Supercharge Your Business With Solutions"
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Cookie-cutter purple gradients, bloated WordPress plugins, uncalibrated mobile margins, and generic stock illustrations that erode customer trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-zinc-400 min-w-[320px] sm:min-w-[600px]">
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>High Bounce Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>Forgettable Identity</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400 shrink-0" />
                <span>Fragile Plugin Stack</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#B79B58] pointer-events-none z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#B79B58] text-[#0B0B0B] flex items-center justify-center shadow-2xl shadow-[#B79B58]/40 border-2 border-[#0B0B0B]">
              <ArrowLeftRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
