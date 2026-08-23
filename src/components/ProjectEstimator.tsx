import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface ProjectEstimatorProps {
  onSelectScope?: (summary: {
    projectType: string;
    pageRange: string;
    addons: string[];
    estimatedTotal: string;
    estimatedTimeline: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onSelectScope }) => {
  const [projectType, setProjectType] = useState<'essential' | 'professional' | 'premium' | 'custom'>('professional');
  const [pageRange, setPageRange] = useState<'1-5' | '6-10' | '11-20' | '20+'>('6-10');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['motion', 'seo']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express'>('standard');

  const basePrices = {
    essential: 7999,
    professional: 14999,
    premium: 24999,
    custom: 35000,
  };

  const pageMultipliers = {
    '1-5': 0,
    '6-10': 3500,
    '11-20': 7500,
    '20+': 15000,
  };

  const addonOptions = [
    { id: 'motion', label: 'Bespoke Scroll Motion & Micro-Interactions', price: 2999 },
    { id: 'seo', label: 'Complete On-Page SEO & OpenGraph Schema', price: 1999 },
    { id: 'cms', label: 'Headless CMS for Instant Self-Publishing', price: 4499 },
    { id: 'multilingual', label: 'Multi-Language Support (2+ Locales)', price: 3499 },
    { id: 'branding', label: 'Signature Monogram & Brand Guide Add-on', price: 5999 },
  ];

  const toggleAddon = (id: string) => {
    soundFx.playClick();
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculateTotal = () => {
    let total = basePrices[projectType] + pageMultipliers[pageRange];
    selectedAddons.forEach((addonId) => {
      const match = addonOptions.find((a) => a.id === addonId);
      if (match) total += match.price;
    });
    if (timelineSpeed === 'express') {
      total += 4500;
    }
    return total;
  };

  const calculateTimeline = () => {
    if (timelineSpeed === 'express') {
      return projectType === 'essential' ? '4–6 Days' : '7–12 Days';
    }
    switch (projectType) {
      case 'essential':
        return '5–10 Days';
      case 'professional':
        return '10–18 Days';
      case 'premium':
        return '2–4 Weeks';
      case 'custom':
        return '3–5 Weeks';
    }
  };

  const total = calculateTotal();
  const timeline = calculateTimeline();

  const handleProceed = () => {
    soundFx.playClick();
    if (onSelectScope) {
      onSelectScope({
        projectType: projectType.toUpperCase(),
        pageRange: `${pageRange} Pages`,
        addons: selectedAddons.map((id) => addonOptions.find((a) => a.id === id)?.label || id),
        estimatedTotal: `₹${total.toLocaleString('en-IN')}+`,
        estimatedTimeline: timeline,
      });
    }
  };

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#B79B58]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest mb-1.5">
            <Calculator size={14} />
            <span>Interactive Studio Calculator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F5F2]">
            Project Scope &amp; Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light mt-1">
            Configure your technical deliverables to see transparent, real-time starting projections.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1F1F1F] border border-white/5 text-[11px] font-tech-mono text-[#8A8A8A] self-start sm:self-auto">
          <Shield size={12} className="text-[#B79B58]" />
          <span>Zero Hidden Costs Guarantee</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Project Architecture Tier */}
          <div className="space-y-3">
            <label className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58] flex items-center gap-2">
              <span>01. Select Foundation Tier</span>
            </label>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {[
                { id: 'essential', label: 'Essential Tier', sub: '₹7,999+ · Fast Launch' },
                { id: 'professional', label: 'Professional Tier', sub: '₹14,999+ · Bespoke UI' },
                { id: 'premium', label: 'Premium Experience', sub: '₹24,999+ · Custom Motion' },
                { id: 'custom', label: 'Custom Application', sub: '₹35,000+ · Enterprise' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setProjectType(tier.id as any);
                  }}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    projectType === tier.id
                      ? 'border-[#B79B58] bg-[#B79B58]/10 text-[#F5F5F2] shadow-md shadow-[#B79B58]/10'
                      : 'border-white/5 bg-[#121212] text-[#8A8A8A] hover:border-white/15'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-medium font-sans-refined text-[#F5F5F2]">{tier.label}</p>
                  <p className="text-[11px] font-tech-mono text-[#CDB373] mt-0.5">{tier.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Page Complexity Scope */}
          <div className="space-y-3">
            <label className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              02. Estimated Page Count
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: '1-5', label: '1–5 Pages' },
                { id: '6-10', label: '6–10 Pages' },
                { id: '11-20', label: '11–20 Pages' },
                { id: '20+', label: '20+ Pages' },
              ].map((range) => (
                <button
                  key={range.id}
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setPageRange(range.id as any);
                  }}
                  className={`py-2.5 px-2 text-center rounded-lg text-xs font-tech-mono border transition-all ${
                    pageRange === range.id
                      ? 'border-[#B79B58] bg-[#B79B58]/15 text-[#CDB373]'
                      : 'border-white/5 bg-[#121212] text-[#8A8A8A] hover:border-white/15'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Specific Enhancements */}
          <div className="space-y-3">
            <label className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              03. Additional Enhancements (Optional)
            </label>
            <div className="space-y-2">
              {addonOptions.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#B79B58]/40 bg-[#161616] text-[#F5F5F2]'
                        : 'border-white/5 bg-[#101010] text-[#8A8A8A] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected ? 'border-[#B79B58] bg-[#B79B58] text-[#0B0B0B]' : 'border-white/20'
                      }`}>
                        {isSelected && <CheckCircle2 size={12} />}
                      </div>
                      <span className="text-xs sm:text-sm font-sans-refined">{addon.label}</span>
                    </div>
                    <span className="text-xs font-tech-mono text-[#CDB373]">+₹{addon.price.toLocaleString('en-IN')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Speed Track */}
          <div className="space-y-3">
            <label className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              04. Delivery Schedule
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setTimelineSpeed('standard');
                }}
                className={`p-3 rounded-xl border text-left text-xs font-sans-refined transition-all ${
                  timelineSpeed === 'standard'
                    ? 'border-[#B79B58] bg-[#B79B58]/10 text-[#F5F5F2]'
                    : 'border-white/5 bg-[#121212] text-[#8A8A8A]'
                }`}
              >
                <span className="font-medium text-[#F5F5F2] block">Standard Production</span>
                <span className="text-[11px] text-[#8A8A8A]">Included in base quote</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setTimelineSpeed('express');
                }}
                className={`p-3 rounded-xl border text-left text-xs font-sans-refined transition-all ${
                  timelineSpeed === 'express'
                    ? 'border-[#B79B58] bg-[#B79B58]/10 text-[#F5F5F2]'
                    : 'border-white/5 bg-[#121212] text-[#8A8A8A]'
                }`}
              >
                <span className="font-medium text-[#F5F5F2] flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#CDB373]" />
                  <span>Fast-Track Sprint</span>
                </span>
                <span className="text-[11px] text-[#CDB373] font-tech-mono">+₹4,500 priority allocation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Estimate Receipt Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-[#B79B58]/30 shadow-xl relative">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-[10px] font-tech-mono uppercase tracking-widest text-[#B79B58]">
                ESTIMATED PROJECTION
              </p>
              <h4 className="text-xl font-display font-medium text-[#F5F5F2] mt-1">
                Quotation Summary
              </h4>
            </div>

            <div className="space-y-3 text-xs font-sans-refined">
              <div className="flex items-center justify-between text-[#8A8A8A]">
                <span>Architecture Tier:</span>
                <span className="text-[#F5F5F2] font-medium capitalize font-tech-mono">{projectType}</span>
              </div>
              <div className="flex items-center justify-between text-[#8A8A8A]">
                <span>Page Capacity:</span>
                <span className="text-[#F5F5F2] font-tech-mono">{pageRange} Pages</span>
              </div>
              <div className="flex items-center justify-between text-[#8A8A8A]">
                <span>Selected Add-ons:</span>
                <span className="text-[#CDB373] font-tech-mono">{selectedAddons.length} included</span>
              </div>
              <div className="flex items-center justify-between text-[#8A8A8A]">
                <span>Paced Schedule:</span>
                <span className="text-[#F5F5F2] font-tech-mono capitalize">{timelineSpeed}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141414] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A]">
                <Clock size={14} className="text-[#B79B58]" />
                <span>Estimated Handover:</span>
              </div>
              <p className="text-lg font-display text-[#CDB373] font-semibold">
                {timeline}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10">
              <p className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase tracking-widest">
                STARTING INVESTMENT
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-display font-bold text-[#F5F5F2]">
                  ₹{total.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-tech-mono text-[#8A8A8A]">+</span>
              </div>
              <p className="text-[11px] text-[#8A8A8A] font-light mt-1">
                Inclusive of 14–60 days warranty and live deployment assistance.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleProceed}
            className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Lock Scope &amp; Request Proposal</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
