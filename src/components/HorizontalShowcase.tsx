import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import { Project, PageId } from '../types';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface HorizontalShowcaseProps {
  onSelectProject: (slug: string) => void;
  onExploreAll: () => void;
}

export const HorizontalShowcase: React.FC<HorizontalShowcaseProps> = ({
  onSelectProject,
  onExploreAll,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [expandingSlug, setExpandingSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !horizontalTrackRef.current) return;

    const track = horizontalTrackRef.current;
    const totalPanels = projectsData.length;

    const ctx = gsap.context(() => {
      // Calculate total horizontal scroll width
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.7,
          start: 'top top',
          end: () => `+=${track.scrollWidth * 0.95}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const current = Math.min(
              totalPanels - 1,
              Math.floor(self.progress * totalPanels)
            );
            setActiveProjectIdx(current);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (slug: string) => {
    soundFx.playChime(700);
    setExpandingSlug(slug);
    // Smooth camera zoom transition before navigation
    setTimeout(() => {
      onSelectProject(slug);
    }, 450);
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-[#070707] text-[#F5F5F2] overflow-hidden border-b border-white/10 selection:bg-[#B79B58] selection:text-[#0B0B0B]"
    >
      {/* HUD Header Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4 flex items-center justify-between z-20 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B79B58]" />
          <span className="text-xs font-tech-mono text-[#CDB373] uppercase tracking-[0.25em]">
            CINEMATIC ARCHIVE · HORIZONTAL SCRUB
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-tech-mono">
          <div className="hidden sm:flex items-center gap-2 text-[#8A8A8A]">
            <span>PROJECT</span>
            <span className="text-[#F5F5F2] font-bold">
              0{activeProjectIdx + 1} / 0{projectsData.length}
            </span>
          </div>
          <button
            onClick={onExploreAll}
            className="text-[#CDB373] hover:text-[#F5F5F2] uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>All Projects Archive</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Horizontal Panels Scroll Track */}
      <div
        ref={horizontalTrackRef}
        className="flex items-center h-[82vh] sm:h-[85vh] px-6 sm:px-12 gap-8 sm:gap-12 w-max will-change-transform"
      >
        {projectsData.map((project, idx) => {
          const isExpanding = expandingSlug === project.slug;

          return (
            <div
              key={project.id}
              onClick={() => handleCardClick(project.slug)}
              data-cursor-text="VIEW"
              className={`group relative w-[85vw] sm:w-[680px] lg:w-[820px] h-[520px] sm:h-[580px] rounded-3xl bg-[#111111] border border-white/10 hover:border-[#B79B58]/50 p-6 sm:p-10 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 shadow-2xl flex-shrink-0 ${
                isExpanding ? 'scale-105 opacity-90 z-50 ring-4 ring-[#B79B58]' : ''
              }`}
            >
              {/* Background Project Image with Parallax Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-transparent to-[#0B0B0B]/80" />
              </div>

              {/* Project Card Top Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-display font-bold text-[#B79B58]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-tech-mono uppercase tracking-widest text-[#CDB373] bg-[#1A1A1A]/80 px-2.5 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A] bg-[#141414]/90 px-3 py-1 rounded-full border border-white/5">
                  <Sparkles size={13} className="text-[#B79B58]" />
                  <span>{project.industry}</span>
                </div>
              </div>

              {/* Center Typography & Impact Statement */}
              <div className="relative z-10 space-y-4 max-w-2xl">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#F5F5F2] tracking-tight leading-[1.05] group-hover:text-[#FFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg font-editorial italic text-[#CDB373]">
                  "{project.subtitle}"
                </p>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light line-clamp-3 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Bottom Metadata & Metrics Row */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.deliverables.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-tech-mono uppercase text-[#A0A0A0] bg-[#181818]/90 border border-white/5 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <div className="text-right">
                    <span className="text-[10px] font-tech-mono text-[#8A8A8A] block">LOCATION & YEAR</span>
                    <span className="text-xs font-mono text-[#F5F5F2] font-semibold">
                      {project.location} · {project.year}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#B79B58]/30">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Final Panel: Explore All Archive Callout */}
        <div
          onClick={onExploreAll}
          data-cursor-text="EXPLORE"
          className="w-[85vw] sm:w-[480px] h-[520px] sm:h-[580px] rounded-3xl bg-gradient-to-br from-[#181818] to-[#101010] border border-[#B79B58]/40 p-8 sm:p-12 flex flex-col justify-between cursor-pointer hover:border-[#B79B58] transition-all flex-shrink-0 shadow-2xl group"
        >
          <div className="space-y-3">
            <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58] flex items-center gap-2">
              <Layers size={14} />
              <span>COMPREHENSIVE ARCHIVE</span>
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
              Explore All {projectsData.length} Case Studies
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
              Dive deep into technical architectures, design systems, conversion metrics, and design philosophies.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-center justify-between group-hover:bg-[#151515] transition-colors">
            <span className="text-xs font-tech-mono text-[#CDB373] uppercase">
              Open Full Work Index
            </span>
            <ArrowUpRight size={16} className="text-[#B79B58] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Horizontal Navigation Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pb-6 flex items-center justify-between text-xs font-tech-mono text-[#8A8A8A]">
        <span>SCROLL DOWN TO ADVANCE HORIZONTALLY</span>
        <div className="flex items-center gap-2">
          {projectsData.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeProjectIdx === i ? 'w-8 bg-[#B79B58]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
