import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Compass, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { PageId } from '../types';
import { processPhases } from '../data/processData';
import { PageHeader } from '../components/PageHeader';
import { QualityMatrix } from '../components/QualityMatrix';
import { soundFx } from '../components/SoundEffects';

export const ProcessPage: React.FC<{ onNavigate: (page: PageId, slug?: string) => void }> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activePhase = processPhases[activeStepIndex];

  const clientExperience = [
    { title: 'Discovery', desc: 'Deep understanding of business goals, audience psychology, and competitive landscape.' },
    { title: 'Planning', desc: 'Architecting the sitemap, information hierarchy, wireframes, and project roadmap.' },
    { title: 'Design', desc: 'Crafting bespoke typography, visual direction, design tokens, and interactive prototypes.' },
    { title: 'Development', desc: 'Writing clean, accessible TypeScript/React code with sub-second performance.' },
    { title: 'Delivery', desc: 'Exhaustive 11-point quality audit, domain DNS configuration, and live launch.' },
    { title: 'Support', desc: 'Post-launch warranty, documentation handover, and ongoing monthly care evolution.' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="STUDIO METHODOLOGY"
        title="Our 6-Phase Engineering & Design Process"
        subtitle="A disciplined, transparent progression from initial commercial discovery to production deployment and long-term stewardship."
      />

      {/* Interactive Process Stepper Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Step Selector Horizontal Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {processPhases.map((phase, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={phase.step}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStepIndex(idx);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#181818] border-[#B79B58] shadow-lg shadow-[#B79B58]/10'
                      : 'bg-[#121212] border-white/5 text-[#8A8A8A] hover:border-white/15'
                  }`}
                >
                  <span className={`text-xs font-tech-mono block ${isSelected ? 'text-[#B79B58]' : 'text-[#8A8A8A]'}`}>
                    PHASE {phase.step}
                  </span>
                  <p className={`text-base font-display font-medium mt-1 ${isSelected ? 'text-[#F5F5F2]' : 'text-[#8A8A8A]'}`}>
                    {phase.title}
                  </p>
                  <span className="text-[10px] font-tech-mono text-[#CDB373] mt-1 block">
                    {phase.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Detail Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#B79B58]/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#B79B58]">
                    {activePhase.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-tech-mono uppercase tracking-widest bg-[#1F1F1F] text-[#CDB373] border border-white/10">
                    ESTIMATED DURATION: {activePhase.duration}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
                  {activePhase.title}
                </h2>

                <p className="text-lg font-editorial italic text-[#CDB373]">
                  "{activePhase.quote}"
                </p>

                <p className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                  {activePhase.fullDescription}
                </p>

                {/* Studio Actions vs Client Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3 p-5 rounded-2xl bg-[#101010] border border-white/5">
                    <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                      STUDIO ACTIONS
                    </p>
                    <ul className="space-y-2">
                      {activePhase.studioAction.map((act, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#8A8A8A] font-sans-refined">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58] mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 p-5 rounded-2xl bg-[#101010] border border-[#B79B58]/20">
                    <p className="text-xs font-tech-mono uppercase tracking-widest text-[#CDB373]">
                      CLIENT RECEIVES
                    </p>
                    <ul className="space-y-2">
                      {activePhase.clientDeliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F2] font-sans-refined">
                          <CheckCircle2 size={14} className="text-[#B79B58] mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Progress & Quick Stepper Sidebar */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-6">
                <div>
                  <span className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase tracking-widest">
                    PROGRESSION TRACKER
                  </span>
                  <div className="mt-2 h-2 w-full bg-[#1F1F1F] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] transition-all duration-500"
                      style={{ width: `${((activeStepIndex + 1) / processPhases.length) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-tech-mono text-[#8A8A8A] mt-2">
                    <span>Phase 01</span>
                    <span>Phase 06 (Launch)</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-xs font-sans-refined font-medium text-[#F5F5F2]">
                    Next Stage:
                  </p>
                  <p className="text-sm font-display text-[#CDB373]">
                    {processPhases[(activeStepIndex + 1) % processPhases.length].title}
                  </p>
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStepIndex((activeStepIndex + 1) % processPhases.length);
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 text-xs font-tech-mono text-[#F5F5F2] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Advance to Next Step</span>
                  <ChevronRight size={14} className="text-[#B79B58]" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20"
                >
                  <span>Initiate Discovery with Us</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Compass size={14} />
              <span>THE CLIENT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              What Working With Us Feels Like
            </h2>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
              Clear milestones, continuous visibility, zero surprise invoices, and dedicated senior craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientExperience.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#121212] border border-white/5 space-y-3">
                <span className="text-xs font-tech-mono text-[#B79B58]">STAGE 0{idx + 1}</span>
                <h3 className="text-xl font-display text-[#F5F5F2]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Matrix */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <QualityMatrix />
        </div>
      </section>
    </div>
  );
};
