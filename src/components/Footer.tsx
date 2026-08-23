import React from 'react';
import { ArrowUpRight, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { FullLogo, MonogramSymbol } from './MonogramLogo';
import { LiveClock } from './LiveClock';
import { soundFx } from './SoundEffects';

interface FooterProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, slug?: string) => {
    soundFx.playClick();
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] text-[#F5F5F2] border-t border-white/10 overflow-hidden pt-20 pb-12">
      {/* Background Architectural Grid & Subtle M Monogram Watermark */}
      <div className="absolute inset-0 bg-architect-grid opacity-30 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none select-none">
        <MonogramSymbol size={600} variant="white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Studio Callout Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B79B58]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#B79B58]" />
              <span>Let's build something worth visiting</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display text-[#F5F5F2] leading-tight">
              Have an ambitious vision or a website that needs a higher standard of craftsmanship?
            </h3>
            <p className="text-sm text-[#8A8A8A] font-sans-refined font-light">
              We partner with organizations worldwide to design and engineer digital experiences built with intent.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              id="footer-cta-contact"
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-[#B79B58]/15 transition-all transform hover:-translate-y-0.5"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              id="footer-cta-estimate"
              onClick={() => handleNav('pricing')}
              className="px-6 py-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 text-xs font-sans-refined uppercase tracking-widest text-[#F5F5F2] flex items-center justify-center gap-2 transition-colors"
            >
              <span>Scope &amp; Pricing Guide</span>
              <ArrowRight size={14} className="text-[#B79B58]" />
            </button>
          </div>
        </div>

        {/* Main Footer Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <FullLogo size="lg" />
            <p className="text-sm text-[#8A8A8A] font-light leading-relaxed max-w-md">
              MareclMarcio is an independent design and technology studio helping organizations establish a stronger, more thoughtful presence in the digital world.
            </p>

            <div className="pt-2">
              <LiveClock />
            </div>

            {/* Direct Studio Contacts */}
            <div className="space-y-2 text-xs font-tech-mono pt-2">
              <div className="flex items-center gap-3 text-[#F5F5F2]">
                <Mail size={14} className="text-[#B79B58]" />
                <a href="mailto:hello@mareclmarcio.com" className="hover:text-[#B79B58] transition-colors">
                  hello@mareclmarcio.com
                </a>
                <span className="text-[#8A8A8A]">/</span>
                <a href="mailto:business@mareclmarcio.com" className="hover:text-[#B79B58] transition-colors">
                  business@mareclmarcio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#8A8A8A]">
                <MapPin size={14} className="text-[#B79B58]" />
                <span>India · Working Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-[#8A8A8A]">
                <Clock size={14} className="text-[#B79B58]" />
                <span>Mon–Sat 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Directory Column */}
          <div className="space-y-4">
            <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              Directory
            </p>
            <ul className="space-y-2.5 text-sm font-sans-refined">
              {[
                { label: 'Home', id: 'home' as PageId },
                { label: 'Studio About', id: 'about' as PageId },
                { label: 'Selected Work', id: 'work' as PageId },
                { label: 'Our Services', id: 'services' as PageId },
                { label: 'Studio Process', id: 'process' as PageId },
                { label: 'Pricing Guide', id: 'pricing' as PageId },
                { label: 'Studio FAQ', id: 'faq' as PageId },
                { label: 'Get in Touch', id: 'contact' as PageId },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-[#8A8A8A] hover:text-[#F5F5F2] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="space-y-4">
            <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              Disciplines
            </p>
            <ul className="space-y-2.5 text-sm font-sans-refined">
              {[
                'Web Design',
                'Web Development',
                'UI/UX Design',
                'Website Redesign',
                'Brand Identity',
                'Landing Pages',
                'Performance Tuning',
                'Care & Evolution',
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-[#8A8A8A] hover:text-[#B79B58] transition-colors text-left"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy / Ethos */}
          <div className="space-y-4">
            <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
              Studio Ethos
            </p>
            <div className="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-3">
              <p className="text-xs italic text-[#CDB373] font-editorial leading-relaxed">
                "Good design gets attention. Great design makes things understandable."
              </p>
              <div className="space-y-1 text-[11px] text-[#8A8A8A] font-sans-refined font-light">
                <p>✦ Purpose</p>
                <p>✦ Simplicity</p>
                <p>✦ Craft</p>
                <p>✦ People First</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#8A8A8A] font-tech-mono">
              <ShieldCheck size={14} className="text-[#B79B58]" />
              <span>11-Point Quality Promise</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech-mono text-[#8A8A8A]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 MARECLMARCIO.</span>
            <span>All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span className="text-[#F5F5F2]">Digital experiences, built with intent.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-[#F5F5F2] transition-colors cursor-pointer" onClick={() => handleNav('about')}>
              Studio Manifesto
            </span>
            <span>·</span>
            <span className="hover:text-[#F5F5F2] transition-colors cursor-pointer" onClick={() => handleNav('faq')}>
              Client FAQ
            </span>
            <span>·</span>
            <span className="text-[#B79B58]">Global Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
