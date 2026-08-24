import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Eye, RefreshCw, Layers, Compass, Zap } from 'lucide-react';
import { MonogramSymbol } from './MonogramLogo';
import { soundFx } from './SoundEffects';

export const SignatureMoment: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState<'spatial' | 'architectural' | 'matrix'>('spatial');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [goldIntensity, setGoldIntensity] = useState(80);
  const [wireframeDensity, setWireframeDensity] = useState(12);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 28, y: -y * 28 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsInteracting(false);
  };

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#070707] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[350px] bg-[#B79B58]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title & Philosophy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Sparkles size={14} />
              <span>SIGNATURE INTERACTIVE ARTIFACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2] tracking-tight">
              The Spatial Monogram Engine
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-xl">
              Hover, tilt, and manipulate the core MareclMarcio emblem. Demonstrating real-time 3D coordinate projection, dynamic lighting, and haptic reactivity.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#121212] border border-white/10 self-start md:self-auto">
            {(['spatial', 'architectural', 'matrix'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  soundFx.playClick();
                  setActiveDimension(mode);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-tech-mono uppercase tracking-wider transition-all ${
                  activeDimension === mode
                    ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold shadow-md shadow-[#B79B58]/20'
                    : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                }`}
              >
                {mode === 'spatial' ? '01. Spatial 3D' : mode === 'architectural' ? '02. Blueprint' : '03. Matrix'}
              </button>
            ))}
          </div>
        </div>

        {/* The Spatial Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls & Metrics Panel */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="p-6 rounded-2xl bg-[#101010] border border-white/10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs font-tech-mono uppercase text-[#B79B58] flex items-center gap-2">
                  <Sliders size={13} />
                  <span>RUNTIME CONTROLS</span>
                </span>
                <span className="text-[10px] font-tech-mono text-[#8A8A8A]">
                  60 FPS ACTIVE
                </span>
              </div>

              {/* Gold Luster Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-tech-mono">
                  <span className="text-[#8A8A8A]">Gold Metallic Luster:</span>
                  <span className="text-[#CDB373]">{goldIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={goldIntensity}
                  onChange={(e) => setGoldIntensity(Number(e.target.value))}
                  className="w-full accent-[#B79B58] bg-[#1E1E1E] h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Wireframe Coordinate Spacing */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-tech-mono">
                  <span className="text-[#8A8A8A]">Coordinate Guides:</span>
                  <span className="text-[#CDB373]">{wireframeDensity} Divisions</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="24"
                  value={wireframeDensity}
                  onChange={(e) => setWireframeDensity(Number(e.target.value))}
                  className="w-full accent-[#B79B58] bg-[#1E1E1E] h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Real-time Telemetry Values */}
              <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-3 text-xs font-tech-mono">
                <div className="p-2.5 rounded-lg bg-[#141414] border border-white/5">
                  <span className="text-[10px] text-[#8A8A8A] block">ROTATION X:</span>
                  <span className="text-[#F5F5F2]">{tilt.y.toFixed(1)}°</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#141414] border border-white/5">
                  <span className="text-[10px] text-[#8A8A8A] block">ROTATION Y:</span>
                  <span className="text-[#F5F5F2]">{tilt.x.toFixed(1)}°</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0D0D0D] border border-[#B79B58]/20 space-y-2">
              <span className="text-xs font-tech-mono text-[#CDB373] flex items-center gap-1.5">
                <Zap size={14} />
                <span>STUDIO CREATIVE ETHOS</span>
              </span>
              <p className="text-xs text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                "We don't build flat pages. We construct living, dimensional software with micro-interactions engineered for lasting prestige."
              </p>
            </div>
          </div>

          {/* Interactive 3D Monogram Stage Canvas */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={handleMouseLeave}
            data-cursor-text="EXPLORE"
            className="lg:col-span-8 h-[380px] sm:h-[480px] rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-[#B79B58]/40 transition-all duration-300 relative flex items-center justify-center overflow-hidden cursor-crosshair group shadow-2xl order-1 lg:order-2"
            style={{ perspective: 1000 }}
          >
            {/* Coordinate Grid Background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#B79B58 1px, transparent 1px)`,
                backgroundSize: `${320 / wireframeDensity}px ${320 / wireframeDensity}px`,
              }}
            />

            {/* Architectural Crosshair Reticles */}
            <div className="absolute top-6 left-6 text-[10px] font-tech-mono text-[#8A8A8A] flex flex-col gap-1">
              <span>LAT: 28.6139° N</span>
              <span>LNG: 77.2090° E</span>
            </div>
            <div className="absolute bottom-6 right-6 text-[10px] font-tech-mono text-[#CDB373]">
              ✦ SPATIAL ENGINE v2.6 · MARECLMARCIO
            </div>

            {/* Central 3D Transforming Emblem */}
            <motion.div
              animate={{
                rotateX: tilt.y,
                rotateY: tilt.x,
                scale: isInteracting ? 1.05 : 1,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative flex items-center justify-center select-none"
            >
              {/* Back Glow Layer */}
              <div
                className="absolute w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: `rgba(183, 155, 88, ${goldIntensity / 400})`,
                  transform: 'translateZ(-40px)',
                }}
              />

              {/* Architectural Rings */}
              {activeDimension === 'architectural' && (
                <div
                  className="absolute w-72 h-72 rounded-full border border-[#B79B58]/30 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none"
                  style={{ transform: 'translateZ(-20px)' }}
                />
              )}

              {/* Matrix Hex Rings */}
              {activeDimension === 'matrix' && (
                <div
                  className="absolute w-80 h-80 border border-[#B79B58]/20 rotate-45 pointer-events-none"
                  style={{ transform: 'translateZ(-30px)' }}
                />
              )}

              {/* Main Vector Monogram with 3D Depth */}
              <div
                className="relative z-10 p-10 rounded-full bg-[#121212]/80 backdrop-blur-md border border-[#B79B58]/40 shadow-2xl shadow-black/80"
                style={{ transform: 'translateZ(30px)' }}
              >
                <MonogramSymbol size={140} variant="gold-gradient" />
              </div>

              {/* Floating Orbiting Data Chips */}
              <motion.div
                animate={{
                  x: Math.sin(tilt.x * 0.1) * 30 + 130,
                  y: Math.cos(tilt.y * 0.1) * 30 - 60,
                }}
                className="absolute hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/90 border border-[#B79B58]/40 backdrop-blur-md text-[10px] font-tech-mono text-[#CDB373] shadow-lg"
                style={{ transform: 'translateZ(50px)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DESIGN + CODE</span>
              </motion.div>

              <motion.div
                animate={{
                  x: -Math.sin(tilt.x * 0.1) * 30 - 130,
                  y: -Math.cos(tilt.y * 0.1) * 30 + 70,
                }}
                className="absolute hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/90 border border-white/10 backdrop-blur-md text-[10px] font-tech-mono text-[#8A8A8A] shadow-lg"
                style={{ transform: 'translateZ(45px)' }}
              >
                <span>60 FPS MOTION</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
