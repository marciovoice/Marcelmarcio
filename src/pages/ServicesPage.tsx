import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu, Clock, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { PageHeader } from '../components/PageHeader';
import { soundFx } from '../components/SoundEffects';

interface ServicesPageProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onSelectService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-design');

  const handleInquire = (service: ServiceItem) => {
    soundFx.playClick();
    if (onSelectService) {
      onSelectService(service.title);
    }
    onNavigate('contact');
  };

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="STUDIO CAPABILITIES"
        title="Disciplines Engineered for Intent & Impact"
        subtitle="From bespoke visual identities and high-converting landing pages to complex full-stack web applications and ongoing maintenance."
      />

      {/* Interactive Service Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Quick Filter / Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesData.map((srv, idx) => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedServiceId(srv.id);
                  }}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#181818] border-[#B79B58] shadow-xl shadow-[#B79B58]/10'
                      : 'bg-[#121212] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-tech-mono text-[#8A8A8A]">0{idx + 1}</span>
                      <span className="text-[10px] font-tech-mono text-[#CDB373] bg-[#1A1A1A] px-2 py-0.5 rounded">
                        {srv.turnaround}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-medium text-[#F5F5F2]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#8A8A8A] font-sans-refined font-light line-clamp-2">
                      {srv.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-tech-mono text-[#F5F5F2]">From {srv.startingPrice}</span>
                    <span className="text-[11px] font-tech-mono text-[#B79B58] flex items-center gap-1">
                      Inspect <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Interactive Focus Panel */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#B79B58]/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-tech-mono uppercase tracking-widest bg-[#B79B58]/15 text-[#CDB373] border border-[#B79B58]/30">
                    DISCIPLINE SPECIFICATION
                  </span>
                  <span className="text-xs font-tech-mono text-[#8A8A8A]">
                    Turnaround: <strong className="text-[#F5F5F2]">{selectedService.turnaround}</strong>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
                  {selectedService.title}
                </h2>

                <p className="text-base sm:text-lg font-editorial italic text-[#CDB373]">
                  "{selectedService.tagline}"
                </p>

                <p className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                    WHAT IS DELIVERED
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F5F2] bg-[#1A1A1A] p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={15} className="text-[#B79B58] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                    COMMERCIAL BENEFITS
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#8A8A8A] font-sans-refined font-light">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CDB373]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-[10px] font-tech-mono text-[#8A8A8A] uppercase tracking-widest">
                      STARTING PROJECTION
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl font-display font-bold text-[#F5F5F2]">
                        {selectedService.startingPrice}
                      </span>
                      <span className="text-xs font-tech-mono text-[#8A8A8A]">+</span>
                    </div>
                    <p className="text-[11px] text-[#8A8A8A] mt-1 font-light">
                      Fixed milestone pricing with zero hidden agency surcharges.
                    </p>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-tech-mono uppercase tracking-widest text-[#B79B58]">
                      CORE TECHNOLOGIES &amp; TOOLS
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.technologies.map((t, i) => (
                        <span key={i} className="text-[11px] font-tech-mono bg-[#1A1A1A] text-[#8A8A8A] px-2.5 py-1 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleInquire(selectedService)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-[#B79B58]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Request Proposal for {selectedService.title}</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <button
                    onClick={() => onNavigate('pricing')}
                    className="w-full py-3 rounded-xl bg-[#181818] hover:bg-[#202020] border border-white/10 text-xs font-tech-mono text-[#8A8A8A] hover:text-[#F5F5F2] uppercase tracking-wider transition-colors"
                  >
                    View All Studio Pricing Tiers →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Standards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <Cpu size={14} />
              <span>TECHNICAL EXCELLENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              Our Technology Philosophy
            </h2>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
              We choose battle-tested, modern web tools that guarantee speed, long-term stability, and complete code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#121212] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#B79B58] flex items-center justify-center">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-display text-[#F5F5F2]">Modern Component Stacks</h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                React, TypeScript, and modern CSS architecture. No archaic page-builder spaghetti code or fragile plugins.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#121212] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#B79B58] flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h3 className="text-xl font-display text-[#F5F5F2]">Sub-Second Edge Speeds</h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                Optimized asset delivery, automated image conversion (WebP/AVIF), and edge CDN caching worldwide.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#121212] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#B79B58] flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-display text-[#F5F5F2]">100% IP &amp; Code Ownership</h3>
              <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                You receive full source code, Figma design files, and deployment pipelines with zero recurring proprietary lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#0E0E0E]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
            Need a combination of services or a custom scope?
          </h2>
          <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
            We architect comprehensive packages tailored to your specific organizational roadmap.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-xl shadow-[#B79B58]/20"
          >
            <span>Start a Custom Project</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
