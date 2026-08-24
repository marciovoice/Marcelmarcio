import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import { MonogramSymbol } from './MonogramLogo';
import { Sparkles, Compass, Cpu, Layers, Eye, ShieldCheck, ArrowDown } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const ExplosionSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // References for layered elements
  const coreMonogramRef = useRef<HTMLDivElement | null>(null);
  const ringOuterRef = useRef<HTMLDivElement | null>(null);
  const ringInnerRef = useRef<HTMLDivElement | null>(null);
  const gridLinesRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const uiElementsRef = useRef<HTMLDivElement | null>(null);
  const assembledViewRef = useRef<HTMLDivElement | null>(null);
  const telemetryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: 'top top',
          end: '+=2200',
          scrub: 0.8,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100));
          },
        },
      });

      // 0. Initial state is cohesive monogram object at 0%
      // STAGE 1: 0% -> 35% : Explosion & Layer Separation
      tl.to(
        coreMonogramRef.current,
        {
          scale: 2.2,
          rotateZ: 45,
          z: 300,
          opacity: 0.85,
          ease: 'power1.inOut',
        },
        0
      )
        .to(
          ringOuterRef.current,
          {
            scale: 3.6,
            rotateZ: -90,
            opacity: 0.4,
            borderColor: '#CDB373',
            ease: 'power1.inOut',
          },
          0
        )
        .to(
          ringInnerRef.current,
          {
            scale: 2.8,
            rotateZ: 180,
            opacity: 0.6,
            ease: 'power1.inOut',
          },
          0
        )
        .to(
          gridLinesRef.current,
          {
            scale: 2.5,
            rotateX: 60,
            rotateY: 20,
            opacity: 0.8,
            ease: 'power1.inOut',
          },
          0
        )
        // Typography explosion: letters scatter outwards
        .to(
          '.exploding-letter',
          {
            x: (i) => (i % 2 === 0 ? (i - 6) * 55 : (6 - i) * 60),
            y: (i) => (i < 6 ? -90 - i * 15 : 90 + (i - 6) * 15),
            z: (i) => 150 + i * 20,
            rotateZ: (i) => (i - 6) * 12,
            opacity: 0.75,
            color: '#CDB373',
            stagger: 0.01,
            ease: 'power2.out',
          },
          0
        )
        // Gold particles scatter in 3D orbit
        .to(
          '.exploding-particle',
          {
            x: (i) => Math.cos((i / 16) * Math.PI * 2) * (260 + (i % 5) * 40),
            y: (i) => Math.sin((i / 16) * Math.PI * 2) * (200 + (i % 5) * 30),
            scale: 2.4,
            opacity: 0.9,
            stagger: 0.01,
            ease: 'power2.out',
          },
          0
        )
        // Detached UI cards eject from center
        .to(
          '.detached-ui-card',
          {
            opacity: 1,
            scale: 1,
            x: (i) => (i === 0 ? -280 : i === 1 ? 280 : i === 2 ? -240 : 240),
            y: (i) => (i === 0 ? -130 : i === 1 ? -110 : i === 2 ? 140 : 150),
            stagger: 0.03,
            ease: 'power2.out',
          },
          0.05
        );

      // STAGE 2: 35% -> 70% : Virtual Camera Fly-Through
      tl.to(
        [coreMonogramRef.current, ringOuterRef.current, ringInnerRef.current],
        {
          scale: 6,
          opacity: 0.05,
          z: 800,
          filter: 'blur(12px)',
          ease: 'power2.in',
        },
        0.35
      )
        .to(
          '.exploding-letter',
          {
            scale: 2.5,
            opacity: 0.1,
            filter: 'blur(8px)',
            ease: 'power2.in',
          },
          0.35
        )
        .to(
          gridLinesRef.current,
          {
            scale: 4,
            rotateX: 80,
            opacity: 0.15,
            ease: 'power2.in',
          },
          0.35
        );

      // STAGE 3: 65% -> 100% : Spatial Reassembly into Digital Architecture
      tl.to(
        assembledViewRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          pointerEvents: 'auto',
          ease: 'power2.out',
        },
        0.65
      ).fromTo(
        '.assembled-node',
        {
          opacity: 0,
          y: 40,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.04,
          ease: 'back.out(1.4)',
        },
        0.7
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const studioNameLetters = 'MARECLMARCIO'.split('');
  const particleCount = 20;

  return (
    <div
      ref={containerRef}
      className="relative bg-[#070707] text-[#F5F5F2] selection:bg-[#B79B58] selection:text-[#0B0B0B]"
      style={{ height: '320vh' }}
    >
      {/* PINNED VIEWPORT */}
      <div
        ref={pinRef}
        className="w-full h-screen sticky top-0 left-0 flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-hidden border-b border-white/10"
        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        {/* HUD Top Bar: Scroll Scrub Telemetry */}
        <div className="w-full flex items-center justify-between text-xs font-tech-mono z-30 pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B79B58] animate-ping" />
            <span className="text-[#CDB373] tracking-widest uppercase font-semibold">
              SIGNATURE SEQUENCE · SPATIAL DECONSTRUCTION
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[#121212]/90 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="text-[#8A8A8A]">SCRUB POSITION:</span>
            <span className="text-[#F5F5F2] font-bold">{scrollProgress}%</span>
            <div className="w-20 h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#B79B58] to-[#E6D5AC] transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* 3D SPATIAL STAGE */}
        <div className="relative flex-grow flex items-center justify-center my-auto w-full max-w-6xl mx-auto overflow-visible">
          {/* Spatial Grid Matrix Layers */}
          <div
            ref={gridLinesRef}
            className="absolute inset-0 pointer-events-none opacity-25 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] border border-[#B79B58]/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[350px] h-[350px] sm:w-[520px] sm:h-[520px] border border-white/10 rounded-full" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#B79B58]/40 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#B79B58]/40 to-transparent" />
          </div>

          {/* Concentric Rotating Gold Rings */}
          <div
            ref={ringOuterRef}
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#B79B58]/40 pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <div
            ref={ringInnerRef}
            className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full border border-dashed border-[#CDB373]/30 pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          />

          {/* Orbiting Gold Geometric Particles */}
          <div
            ref={particlesRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {Array.from({ length: particleCount }).map((_, i) => (
              <div
                key={i}
                className="exploding-particle absolute w-2 h-2 rounded-full bg-gradient-to-tr from-[#B79B58] to-[#FFF4D0] shadow-md shadow-[#B79B58]/60 opacity-0"
              />
            ))}
          </div>

          {/* Central Monogram Core Emblem */}
          <div
            ref={coreMonogramRef}
            className="relative z-10 p-8 rounded-full bg-[#121212]/80 border border-[#B79B58]/40 backdrop-blur-xl shadow-2xl flex items-center justify-center cursor-pointer select-none"
            style={{ transformStyle: 'preserve-3d' }}
            onClick={() => soundFx.playChime(520)}
            data-cursor-text="SCROLL"
          >
            <MonogramSymbol size={110} variant="gold" />
          </div>

          {/* Exploding Typography Letters Array */}
          <div
            ref={lettersRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {studioNameLetters.map((char, index) => (
              <span
                key={index}
                className="exploding-letter absolute font-display text-2xl sm:text-4xl font-bold text-[#F5F5F2] tracking-wider select-none"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Detached Floating UI Elements (Disassembled Components) */}
          <div
            ref={uiElementsRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Detached Component 1: Performance Gauge */}
            <div className="detached-ui-card absolute p-3.5 rounded-xl bg-[#141414]/90 border border-[#B79B58]/40 backdrop-blur-md opacity-0 shadow-xl w-48 scale-75">
              <div className="flex items-center justify-between text-[10px] font-tech-mono text-[#CDB373]">
                <span>LIGHTHOUSE SCORE</span>
                <span className="text-emerald-400 font-bold">100/100</span>
              </div>
              <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[99%]" />
              </div>
            </div>

            {/* Detached Component 2: Motion Coordinates */}
            <div className="detached-ui-card absolute p-3.5 rounded-xl bg-[#141414]/90 border border-white/20 backdrop-blur-md opacity-0 shadow-xl w-48 scale-75">
              <div className="flex items-center gap-2 text-[10px] font-tech-mono text-[#8A8A8A]">
                <Cpu size={12} className="text-[#B79B58]" />
                <span>GPU ACCELERATED</span>
              </div>
              <p className="text-[11px] font-mono text-[#F5F5F2] mt-1 font-semibold">
                60.0 FPS · 0ms JANK
              </p>
            </div>

            {/* Detached Component 3: Type Hierarchy */}
            <div className="detached-ui-card absolute p-3.5 rounded-xl bg-[#141414]/90 border border-white/20 backdrop-blur-md opacity-0 shadow-xl w-48 scale-75">
              <span className="text-[10px] font-tech-mono text-[#CDB373] uppercase">
                TYPOGRAPHIC RATIO
              </span>
              <p className="text-xs font-editorial italic text-[#F5F5F2] mt-0.5">
                "Haute Couture Digital"
              </p>
            </div>

            {/* Detached Component 4: Architecture Tag */}
            <div className="detached-ui-card absolute p-3.5 rounded-xl bg-[#141414]/90 border border-[#B79B58]/40 backdrop-blur-md opacity-0 shadow-xl w-52 scale-75">
              <div className="flex items-center gap-2 text-[10px] font-tech-mono text-[#B79B58]">
                <ShieldCheck size={12} />
                <span>ZERO COMMODITIZATION</span>
              </div>
              <p className="text-[11px] text-[#8A8A8A] mt-1">100% Handcrafted Code</p>
            </div>
          </div>

          {/* STAGE 3: ASSEMBLED NEW COMPOSITION (Reconstituted Digital Architecture) */}
          <div
            ref={assembledViewRef}
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none scale-90 translate-y-12 transition-all duration-300 z-20"
          >
            <div className="w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#141414]/95 via-[#111111]/95 to-[#0B0B0B]/95 border border-[#B79B58]/40 shadow-2xl backdrop-blur-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B79B58]" />
                  <span className="text-xs font-tech-mono uppercase tracking-widest text-[#CDB373]">
                    THE ASSEMBLED ARCHITECTURE
                  </span>
                </div>
                <span className="text-[11px] font-tech-mono text-[#8A8A8A]">
                  SCROLL CONTROLLED · REVERSIBLE MATRIX
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="assembled-node p-4 rounded-2xl bg-[#181818] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58]">
                    <Layers size={14} />
                    <span>01 · SPATIAL DEPTH</span>
                  </div>
                  <h4 className="text-base font-display text-[#F5F5F2]">Dynamic Viewports</h4>
                  <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                    Every pixel operates in calibrated Z-depth, moving like a camera through designed space.
                  </p>
                </div>

                <div className="assembled-node p-4 rounded-2xl bg-[#181818] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-tech-mono text-[#CDB373]">
                    <Cpu size={14} />
                    <span>02 · VELOCITY PHYSICS</span>
                  </div>
                  <h4 className="text-base font-display text-[#F5F5F2]">Scroll-Scrubbed Timelines</h4>
                  <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                    Animations are physically linked to user scroll inertia, reversing smoothly on scroll-up.
                  </p>
                </div>

                <div className="assembled-node p-4 rounded-2xl bg-[#181818] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58]">
                    <Sparkles size={14} />
                    <span>03 · COMMERCIAL AUTHORITY</span>
                  </div>
                  <h4 className="text-base font-display text-[#F5F5F2]">Haute Prestige</h4>
                  <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                    Designed to inspire unquestioned trust and commanding market presence for ambitious clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HUD Bottom Guide & Dynamic Prompt */}
        <div className="w-full flex items-center justify-between text-xs font-tech-mono text-[#8A8A8A] pt-4 border-t border-white/5 z-30 pointer-events-none">
          <div className="flex items-center gap-2">
            <ArrowDown size={14} className="text-[#B79B58] animate-bounce" />
            <span>CONTINUE SCROLLING TO COMPLETE REASSEMBLY (SCROLL BACK TO RECONSTRUCT)</span>
          </div>
          <span className="hidden sm:inline text-[#B79B58]">MARECLMARCIO VIRTUAL TIMELINE</span>
        </div>
      </div>
    </div>
  );
};
