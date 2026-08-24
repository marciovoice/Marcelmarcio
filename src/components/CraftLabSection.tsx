import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Type, Move, Grid, Volume2, Cpu, Zap, Activity, CheckCircle2, ChevronRight, Sliders } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const CraftLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'type' | 'motion' | 'sound' | 'grid' | 'performance'>('type');

  // Typography Lab state
  const [typeWeight, setTypeWeight] = useState(400);
  const [typeTracking, setTypeTracking] = useState(2);
  const [typeFont, setTypeFont] = useState<'serif' | 'sans' | 'mono'>('serif');

  // Motion Lab state
  const [easingPreset, setEasingPreset] = useState<'spring' | 'editorial' | 'snappy'>('editorial');
  const [triggerMotion, setTriggerMotion] = useState(0);

  // Sound Lab state
  const pentatonicScale = [
    { note: 'C5', freq: 523.25, label: 'Harmonic 1' },
    { note: 'D5', freq: 587.33, label: 'Harmonic 2' },
    { note: 'E5', freq: 659.25, label: 'Harmonic 3' },
    { note: 'G5', freq: 783.99, label: 'Harmonic 4' },
    { note: 'A5', freq: 880.00, label: 'Harmonic 5' },
  ];

  const handlePlayNote = (freq: number) => {
    soundFx.playChime(freq, 0.25);
  };

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Cpu size={14} />
              <span>THE DIGITAL LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              Interactive Systems &amp; Craft
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-xl">
              Inspect the foundational building blocks of our digital experiences. Test our live kinetic typography, motion physics, acoustics, and architectural grid systems.
            </p>
          </div>

          {/* Module Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#121212] border border-white/10 self-start md:self-auto">
            {[
              { id: 'type', label: 'Typography', icon: Type },
              { id: 'motion', label: 'Motion Physics', icon: Move },
              { id: 'sound', label: 'Tactile Sound', icon: Volume2 },
              { id: 'grid', label: 'Grid Matrix', icon: Grid },
              { id: 'performance', label: 'Telemetry', icon: Activity },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-tech-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold shadow-md shadow-[#B79B58]/20'
                      : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                  }`}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Lab Stage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/10 relative shadow-2xl min-h-[420px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* 1. TYPOGRAPHY MODULE */}
            {activeTab === 'type' && (
              <motion.div
                key="type-module"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 min-h-[220px] flex flex-col justify-center">
                    <p
                      className="transition-all duration-300 text-[#F5F5F2] leading-tight"
                      style={{
                        fontFamily:
                          typeFont === 'serif'
                            ? "'Playfair Display', serif"
                            : typeFont === 'sans'
                            ? "'Plus Jakarta Sans', sans-serif"
                            : "'Space Mono', monospace",
                        fontWeight: typeWeight,
                        letterSpacing: `${typeTracking}px`,
                        fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                      }}
                    >
                      Bespoke Digital Intent
                    </p>
                    <p className="text-xs text-[#CDB373] font-tech-mono mt-4">
                      Font: {typeFont.toUpperCase()} · Weight: {typeWeight} · Tracking: +{typeTracking}px
                    </p>
                  </div>

                  {/* Typography Sliders */}
                  <div className="lg:col-span-4 space-y-5 p-6 rounded-2xl bg-[#181818] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] border-b border-white/5 pb-2">
                      <Sliders size={13} />
                      <span>VARIABLE TYPOGRAPHY</span>
                    </div>

                    {/* Font family selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-tech-mono uppercase text-[#8A8A8A]">Typeface Family</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['serif', 'sans', 'mono'] as const).map((f) => (
                          <button
                            key={f}
                            onClick={() => {
                              soundFx.playClick();
                              setTypeFont(f);
                            }}
                            className={`py-1.5 text-xs font-tech-mono rounded border uppercase transition-colors ${
                              typeFont === f
                                ? 'bg-[#B79B58] text-[#0B0B0B] border-[#B79B58] font-bold'
                                : 'bg-[#101010] text-[#8A8A8A] border-white/10'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weight slider */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-tech-mono">
                        <span className="text-[#8A8A8A]">Weight:</span>
                        <span className="text-[#CDB373]">{typeWeight}</span>
                      </div>
                      <input
                        type="range"
                        min="300"
                        max="800"
                        step="100"
                        value={typeWeight}
                        onChange={(e) => setTypeWeight(Number(e.target.value))}
                        className="w-full accent-[#B79B58] bg-[#101010] h-1.5 rounded"
                      />
                    </div>

                    {/* Tracking slider */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-tech-mono">
                        <span className="text-[#8A8A8A]">Tracking (Kerning):</span>
                        <span className="text-[#CDB373]">+{typeTracking}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="12"
                        value={typeTracking}
                        onChange={(e) => setTypeTracking(Number(e.target.value))}
                        className="w-full accent-[#B79B58] bg-[#101010] h-1.5 rounded"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. MOTION PHYSICS MODULE */}
            {activeTab === 'motion' && (
              <motion.div
                key="motion-module"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 min-h-[220px] flex items-center justify-between relative overflow-hidden">
                    <motion.div
                      key={triggerMotion}
                      initial={{ x: 0, scale: 0.95, rotate: 0 }}
                      animate={{
                        x: [0, 240, 0],
                        scale: [0.95, 1.1, 0.95],
                        rotate: [0, 15, 0],
                      }}
                      transition={
                        easingPreset === 'spring'
                          ? { type: 'spring', damping: 12, stiffness: 180 }
                          : easingPreset === 'editorial'
                          ? { duration: 1.4, ease: [0.25, 1, 0.5, 1] }
                          : { duration: 0.6, ease: [0.65, 0, 0.35, 1] }
                      }
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#CDB373] to-[#B79B58] text-[#0B0B0B] shadow-2xl flex flex-col justify-between w-44 h-32"
                    >
                      <span className="text-[10px] font-tech-mono font-bold uppercase">PHYSICS ENGINE</span>
                      <span className="text-xl font-display font-bold">60 FPS</span>
                    </motion.div>

                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setTriggerMotion((prev) => prev + 1);
                      }}
                      className="px-6 py-3 rounded-xl bg-[#181818] border border-[#B79B58]/40 hover:bg-[#202020] text-xs font-tech-mono uppercase text-[#CDB373] transition-colors"
                    >
                      Re-trigger Motion Pulse →
                    </button>
                  </div>

                  <div className="lg:col-span-4 space-y-4 p-6 rounded-2xl bg-[#181818] border border-white/5">
                    <span className="text-xs font-tech-mono text-[#B79B58] uppercase block">EASING CURVES</span>
                    {(['editorial', 'spring', 'snappy'] as const).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          soundFx.playClick();
                          setEasingPreset(preset);
                          setTriggerMotion((prev) => prev + 1);
                        }}
                        className={`w-full p-3 rounded-xl text-left border flex items-center justify-between text-xs font-tech-mono uppercase transition-colors ${
                          easingPreset === preset
                            ? 'bg-[#B79B58] text-[#0B0B0B] font-bold border-[#B79B58]'
                            : 'bg-[#101010] text-[#8A8A8A] border-white/10'
                        }`}
                      >
                        <span>{preset === 'editorial' ? 'Cubic Bezier [0.25, 1, 0.5, 1]' : preset === 'spring' ? 'Fluid Spring Physics' : 'Snappy Acceleration'}</span>
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. TACTILE SOUND MODULE */}
            {activeTab === 'sound' && (
              <motion.div
                key="sound-module"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-display text-[#F5F5F2]">Harmonic Pentatonic Audio Synthesizer</h3>
                      <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                        Click the tactile chime pads below to play synthesized Web Audio sine frequencies. Designed for quiet, non-intrusive feedback.
                      </p>
                    </div>
                    <span className="text-[10px] font-tech-mono text-[#B79B58] bg-[#B79B58]/10 px-3 py-1 rounded-full border border-[#B79B58]/30">
                      PURE SYNTHESIS · 0KB ASSETS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-4">
                    {pentatonicScale.map((note) => (
                      <button
                        key={note.note}
                        onClick={() => handlePlayNote(note.freq)}
                        className="p-6 rounded-2xl bg-[#101010] border border-white/10 hover:border-[#B79B58] hover:bg-[#181818] transition-all transform hover:-translate-y-1 text-center space-y-2 group"
                      >
                        <span className="text-2xl font-serif font-bold text-[#CDB373] group-hover:text-[#F5F5F2]">
                          {note.note}
                        </span>
                        <span className="text-[10px] font-tech-mono text-[#8A8A8A] block">
                          {note.freq.toFixed(1)} Hz
                        </span>
                        <span className="text-[9px] font-tech-mono text-[#B79B58] block uppercase">
                          {note.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. GRID MATRIX MODULE */}
            {activeTab === 'grid' && (
              <motion.div
                key="grid-module"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="p-8 rounded-2xl bg-[#090909] border border-white/10 relative overflow-hidden h-[240px] flex items-center justify-center bg-architect-grid">
                  <div className="grid grid-cols-12 gap-3 w-full h-full opacity-60">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#B79B58]/10 border-x border-[#B79B58]/30 flex flex-col justify-between p-2 text-[9px] font-tech-mono text-[#CDB373]"
                      >
                        <span>COL 0{i + 1}</span>
                        <span>8.33%</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute px-5 py-2.5 rounded-full bg-[#141414]/90 border border-[#B79B58]/40 backdrop-blur-md text-xs font-tech-mono text-[#F5F5F2] shadow-2xl">
                    ✦ 12-COLUMN MATHEMATICAL RESPONSIVE MATRIX
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. TELEMETRY & VITALS MODULE */}
            {activeTab === 'performance' && (
              <motion.div
                key="perf-module"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Largest Contentful Paint (LCP)', val: '0.62s', status: 'Optimal (<1.2s)' },
                    { label: 'Interaction to Next Paint (INP)', val: '8ms', status: 'Instant (<50ms)' },
                    { label: 'Cumulative Layout Shift (CLS)', val: '0.00', status: 'Zero Shift' },
                    { label: 'Google Lighthouse Score', val: '99/100', status: 'A+ Grade' },
                  ].map((metric, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#0E0E0E] border border-white/10 space-y-2">
                      <span className="text-3xl font-display font-bold text-[#B79B58]">
                        {metric.val}
                      </span>
                      <h4 className="text-xs font-sans-refined font-medium text-[#F5F5F2]">{metric.label}</h4>
                      <p className="text-[10px] font-tech-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        <span>{metric.status}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-tech-mono text-[#8A8A8A]">
            <span>MODULE: MARECLMARCIO CRAFT LAB v2.4</span>
            <span className="text-[#CDB373]">PRECISION OVER NOISE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
