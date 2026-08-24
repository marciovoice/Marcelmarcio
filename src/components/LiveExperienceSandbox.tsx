import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Layers, Compass, Play, RefreshCw, Check, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { soundFx } from './SoundEffects';

type Archetype = 'luxury' | 'technology' | 'institutional';

export const LiveExperienceSandbox: React.FC = () => {
  const [activeArchetype, setActiveArchetype] = useState<Archetype>('luxury');
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'telemetry'>('overview');
  const [interactiveCounter, setInteractiveCounter] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const archetypes = [
    {
      id: 'luxury' as const,
      label: 'Haute Editorial & Luxury',
      industry: 'Luxury Horology & Architecture',
      headline: 'The Grand Calibre Exhibition',
      subline: 'Hand-beveled anglage, obsidian surfaces, and whisper-quiet digital poise.',
      accent: '#B79B58',
      bg: '#0F0E0B',
      cardBorder: 'rgba(183, 155, 88, 0.3)',
      tag: 'EDITORIAL PERFECTION',
      stats: [
        { label: 'Collector Engagement', val: '6m 45s' },
        { label: 'Visual Refinement', val: 'Sub-pixel' },
        { label: 'Bounce Rate', val: '18.2%' },
      ],
    },
    {
      id: 'technology' as const,
      label: 'Frontier AI & Tech Systems',
      industry: 'Autonomous AI Orchestration',
      headline: 'Autonomous Vector Mesh v4',
      subline: 'Ultra-low latency telemetry, cryptographic security, and sub-second data streaming.',
      accent: '#C5A869',
      bg: '#0A0E14',
      cardBorder: 'rgba(197, 168, 105, 0.4)',
      tag: '0.12ms LATENCY',
      stats: [
        { label: 'Waitlist Velocity', val: '42k+' },
        { label: 'Throughput', val: '99.99%' },
        { label: 'Conversion', val: '34.6%' },
      ],
    },
    {
      id: 'institutional' as const,
      label: 'Institutional & Healthcare',
      industry: 'Ayurvedic Medical Academy & Science',
      headline: 'Heritage Scholastic Portal',
      subline: 'Authoritative clinical records, multilingual curricula, and WCAG AAA compliance.',
      accent: '#CDB373',
      bg: '#0E110F',
      cardBorder: 'rgba(205, 179, 115, 0.35)',
      tag: 'WCAG AAA CERTIFIED',
      stats: [
        { label: 'Mobile Conversion', val: '+310%' },
        { label: 'Lighthouse Score', val: '99/100' },
        { label: 'Accessibility', val: '100%' },
      ],
    },
  ];

  const current = archetypes.find((a) => a.id === activeArchetype) || archetypes[0];

  const triggerSimulation = () => {
    soundFx.playClick();
    setIsSimulating(true);
    setTimeout(() => {
      setInteractiveCounter((prev) => prev + 1);
      setIsSimulating(false);
      soundFx.playChime(659.25, 0.15);
    }, 450);
  };

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Dynamic ambient backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: current.accent }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Terminal size={14} />
              <span>LIVE CAPABILITY DEMONSTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2] tracking-tight">
              We Build Digital Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-xl">
              An interactive miniature interface lab. Switch industry archetypes to witness how layout, motion curves, and interaction architecture dynamically adapt.
            </p>
          </div>

          {/* Archetype Selector Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {archetypes.map((arch) => {
              const isSelected = activeArchetype === arch.id;
              return (
                <button
                  key={arch.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveArchetype(arch.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-tech-mono uppercase tracking-wider transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold border-[#B79B58] shadow-lg shadow-[#B79B58]/20'
                      : 'bg-[#141414] text-[#8A8A8A] border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isSelected ? '#0B0B0B' : arch.accent }} />
                  <span>{arch.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Live Interactive Sandbox Window */}
        <div className="rounded-3xl border border-white/15 bg-[#101010] shadow-2xl overflow-hidden">
          {/* Simulated Browser Bar */}
          <div className="px-5 py-3.5 bg-[#161616] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="px-4 py-1 rounded-full bg-[#0B0B0B] border border-white/10 text-[11px] font-tech-mono text-[#CDB373] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>https://preview.mareclmarcio.studio/{current.id}</span>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-tech-mono text-[#8A8A8A]">
              <span className="hidden sm:inline">60 FPS</span>
              <span className="text-[#B79B58]">0.00 CLS</span>
            </div>
          </div>

          {/* Simulated Application Viewport */}
          <div
            className="p-6 sm:p-10 transition-colors duration-500 relative min-h-[420px] flex flex-col justify-between"
            style={{ backgroundColor: current.bg }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Simulated Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{ backgroundColor: current.accent, color: '#0B0B0B' }}
                    >
                      MM
                    </div>
                    <div>
                      <span className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase tracking-widest block">
                        {current.industry}
                      </span>
                      <h4 className="text-sm font-sans-refined font-medium text-[#F5F5F2]">
                        {current.label} Experience
                      </h4>
                    </div>
                  </div>

                  {/* Sub-navigation tabs */}
                  <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/40 border border-white/5 self-start sm:self-auto">
                    {(['overview', 'features', 'telemetry'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          soundFx.playClick();
                          setActiveTab(tab);
                        }}
                        className={`px-3 py-1 rounded text-[11px] font-tech-mono uppercase transition-colors ${
                          activeTab === tab
                            ? 'bg-white/15 text-[#F5F5F2] font-medium'
                            : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Archetype Content Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-tech-mono uppercase tracking-widest border"
                      style={{
                        borderColor: current.accent,
                        color: current.accent,
                        backgroundColor: 'rgba(183,155,88,0.08)',
                      }}
                    >
                      ✦ {current.tag}
                    </span>

                    <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#F5F5F2] leading-tight">
                      {current.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed max-w-xl">
                      {current.subline}
                    </p>

                    {/* Interactive Trigger CTA inside simulated app */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={triggerSimulation}
                        disabled={isSimulating}
                        className="px-5 py-2.5 rounded-xl font-tech-mono text-xs uppercase tracking-wider font-semibold transition-transform duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
                        style={{ backgroundColor: current.accent, color: '#0B0B0B' }}
                      >
                        {isSimulating ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Synthesizing...</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} fill="#0B0B0B" />
                            <span>Trigger Interactive Cycle ({interactiveCounter})</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] font-tech-mono text-[#8A8A8A]">
                        State Re-render Latency: <strong className="text-emerald-400">1.2ms</strong>
                      </span>
                    </div>
                  </div>

                  {/* Right Live Stats Widget */}
                  <div className="lg:col-span-4 grid grid-cols-1 gap-3">
                    {current.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-black/40 border space-y-1 backdrop-blur-sm"
                        style={{ borderColor: current.cardBorder }}
                      >
                        <span className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase">
                          {stat.label}
                        </span>
                        <p className="text-xl font-display font-bold" style={{ color: current.accent }}>
                          {stat.val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Status Bar */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-tech-mono text-[#8A8A8A]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Activity size={12} />
                  <span>ACTIVE RUNTIME STACK</span>
                </span>
                <span>·</span>
                <span>React 19 + TypeScript + Motion Engine</span>
              </div>
              <span className="text-[#CDB373]">PRODUCTION-READY ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
