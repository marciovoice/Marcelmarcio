import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, HelpCircle, Check } from 'lucide-react';
import { PageId, PricingPlan, MaintenancePlan } from '../types';
import { pricingPlans, maintenancePlans } from '../data/pricingData';
import { PageHeader } from '../components/PageHeader';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { soundFx } from '../components/SoundEffects';

interface PricingPageProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onSelectPlan?: (planName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onSelectPlan }) => {
  const [pricingMode, setPricingMode] = useState<'project' | 'maintenance'>('project');

  const handleSelectPlan = (planName: string) => {
    soundFx.playClick();
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
    onNavigate('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="TRANSPARENT INVESTMENT"
        title="Starting Price Guide &amp; Evolution Plans"
        subtitle="Clear, predictable, value-driven pricing. Designed for ambitious organizations seeking world-class craftsmanship without traditional agency bloat."
      />

      {/* Main Mode Switcher */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E] sticky top-[60px] sm:top-[70px] z-30 backdrop-blur-md bg-[#0E0E0E]/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center p-1 rounded-full bg-[#141414] border border-white/5 self-start">
            <button
              onClick={() => {
                soundFx.playClick();
                setPricingMode('project');
              }}
              className={`px-6 py-2 rounded-full text-xs font-tech-mono uppercase tracking-wider transition-all ${
                pricingMode === 'project'
                  ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold shadow-md shadow-[#B79B58]/20'
                  : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
              }`}
            >
              Project Launch Tiers (from ₹7,999)
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setPricingMode('maintenance');
              }}
              className={`px-6 py-2 rounded-full text-xs font-tech-mono uppercase tracking-wider transition-all ${
                pricingMode === 'maintenance'
                  ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold shadow-md shadow-[#B79B58]/20'
                  : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
              }`}
            >
              Care &amp; Evolution (from ₹999/mo)
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A]">
            <ShieldCheck size={14} className="text-[#B79B58]" />
            <span>Zero Hidden Fees · Full IP Handover</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          {pricingMode === 'project' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-7 rounded-3xl border flex flex-col justify-between transition-all relative ${
                    plan.popular
                      ? 'bg-[#151515] border-[#B79B58] shadow-2xl shadow-[#B79B58]/15 ring-1 ring-[#B79B58]/50'
                      : 'bg-[#111111] border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-tech-mono uppercase tracking-widest bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-bold shadow-md">
                      MOST POPULAR TIER
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-display font-medium text-[#F5F5F2]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#8A8A8A] font-sans-refined font-light mt-1 min-h-[32px]">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="border-y border-white/5 py-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F2]">
                          {plan.formattedPrice}
                        </span>
                      </div>
                      <span className="text-[11px] font-tech-mono text-[#CDB373] mt-1 block">
                        Estimated: {plan.timeline}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] font-tech-mono uppercase tracking-widest text-[#B79B58]">
                        INCLUDED DELIVERABLES
                      </p>
                      <ul className="space-y-2.5">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F2] font-sans-refined">
                            <CheckCircle2 size={14} className="text-[#B79B58] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                    <button
                      onClick={() => handleSelectPlan(plan.name)}
                      className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] shadow-lg shadow-[#B79B58]/20 hover:scale-[1.02]'
                          : 'bg-[#1C1C1C] hover:bg-[#252525] text-[#F5F5F2] border border-white/10'
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <p className="text-[10px] font-tech-mono text-center text-[#8A8A8A]">
                      {plan.maintenanceOption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenancePlans.map((care) => (
                <div
                  key={care.id}
                  className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                    care.popular
                      ? 'bg-[#151515] border-[#B79B58] shadow-2xl shadow-[#B79B58]/15'
                      : 'bg-[#111111] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-6">
                    {care.popular && (
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-tech-mono uppercase tracking-widest bg-[#B79B58]/20 text-[#CDB373] border border-[#B79B58]/40">
                        RECOMMENDED CARE PLAN
                      </span>
                    )}
                    <div>
                      <h3 className="text-2xl font-display font-medium text-[#F5F5F2]">
                        {care.name}
                      </h3>
                      <p className="text-xs text-[#8A8A8A] font-sans-refined font-light mt-1">
                        {care.description}
                      </p>
                    </div>

                    <div className="border-y border-white/5 py-4">
                      <span className="text-4xl font-display font-bold text-[#F5F5F2]">
                        {care.formattedPrice}
                      </span>
                      <span className="text-xs font-tech-mono text-[#8A8A8A] ml-2">billed monthly</span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] font-tech-mono uppercase tracking-widest text-[#B79B58]">
                        MONTHLY SERVICE SCOPE
                      </p>
                      <ul className="space-y-2.5">
                        {care.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#F5F5F2] font-sans-refined">
                            <Check size={14} className="text-[#B79B58] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <button
                      onClick={() => handleSelectPlan(`Maintenance: ${care.name}`)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20"
                    >
                      <span>Enroll in {care.name}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Scope & Cost Calculator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <ProjectEstimator
            onSelectScope={(scope) => {
              if (onSelectPlan) {
                onSelectPlan(`Custom Scope: ${scope.projectType} (${scope.pageRange}) - ${scope.estimatedTotal}`);
              }
              onNavigate('contact');
            }}
          />
        </div>
      </section>

      {/* Pricing Transparency Guarantee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0B0B0B] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#B79B58]/40 text-[#B79B58] flex items-center justify-center mx-auto">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-2xl font-display text-[#F5F5F2]">
            Our No-Surprises Commitment
          </h3>
          <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
            All projects operate under a clearly defined Statement of Work with fixed milestone payments. If project requirements expand, we scope and approve adjustments together in advance. You retain 100% intellectual property of all design files and source code.
          </p>
        </div>
      </section>
    </div>
  );
};
