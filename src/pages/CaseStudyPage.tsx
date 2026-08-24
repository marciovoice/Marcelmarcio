import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, ExternalLink, Sparkles, Cpu, Layers, ShieldCheck, Palette, Grid, Move, Compass } from 'lucide-react';
import { PageId } from '../types';
import { projectsData, EnhancedProject } from '../data/projectsData';
import { soundFx } from '../components/SoundEffects';

interface CaseStudyPageProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ slug, onNavigate }) => {
  const project = (projectsData.find((p) => p.slug === slug) || projectsData[0]) as EnhancedProject;
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const handleNav = (page: PageId, targetSlug?: string) => {
    soundFx.playClick();
    onNavigate(page, targetSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectIndexStr = String(currentIndex + 1).padStart(2, '0');
  const totalProjectsStr = String(projectsData.length).padStart(2, '0');

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      {/* Top Back Navigation Bar */}
      <div className="pt-28 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-white/5">
        <button
          onClick={() => handleNav('work')}
          className="inline-flex items-center gap-2 text-xs font-tech-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#CDB373] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Work</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A]">
          <span>INDEX: {projectIndexStr} / {totalProjectsStr}</span>
        </div>
      </div>

      {/* Honest Studio Disclosure Banner */}
      {project.clientHonestyNote && (
        <div className="bg-[#121212] border-b border-white/5 px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs font-tech-mono text-[#8A8A8A]">
            <ShieldCheck size={14} className="text-[#B79B58] shrink-0" />
            <span>
              <strong className="text-[#CDB373] uppercase">{project.projectType}</strong>: {project.clientHonestyNote}
            </span>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-tech-mono uppercase tracking-widest bg-[#B79B58]/15 text-[#CDB373] border border-[#B79B58]/30">
              {project.category}
            </span>
            <span className="text-xs font-tech-mono text-[#8A8A8A]">
              Client: <strong className="text-[#F5F5F2]">{project.client}</strong>
            </span>
            <span className="text-xs font-tech-mono text-[#8A8A8A]">·</span>
            <span className="text-xs font-tech-mono text-[#8A8A8A]">Year: {project.year}</span>
            <span className="text-xs font-tech-mono text-[#8A8A8A]">·</span>
            <span className="text-xs font-tech-mono text-[#8A8A8A]">{project.location}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-[#F5F5F2] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl font-editorial italic text-[#CDB373] leading-relaxed max-w-4xl">
            "{project.subtitle}"
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9] bg-[#121212] relative shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.impactMetrics.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-2">
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#B79B58]">
                {m.value}
              </span>
              <h3 className="text-sm font-sans-refined font-medium text-[#F5F5F2]">
                {m.label}
              </h3>
              <p className="text-xs text-[#8A8A8A] font-light leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Phases (01 - 04) */}
      {project.architecturalPhases && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest block">
              ✦ ARCHITECTURAL PHASING &amp; EXECUTION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architecturalPhases.map((phase) => (
                <div key={phase.phase} className="p-6 rounded-2xl bg-[#111111] border border-white/5 space-y-3">
                  <span className="text-2xl font-serif font-bold text-[#B79B58]">
                    {phase.phase}
                  </span>
                  <h4 className="text-sm font-sans-refined font-medium text-[#F5F5F2]">{phase.title}</h4>
                  <p className="text-xs text-[#8A8A8A] font-light leading-relaxed">
                    {phase.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Core Narrative & Design System */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
                <span>01 / EXECUTIVE SUMMARY</span>
              </div>
              <h2 className="text-3xl font-display font-medium text-[#F5F5F2]">
                The Project Overview
              </h2>
              <p className="text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Challenge */}
            <div className="space-y-4 p-8 rounded-2xl bg-[#121212] border border-white/5">
              <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
                <span>02 / THE CHALLENGE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F5F2]">
                What Needed to Be Solved
              </h2>
              <p className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4 p-8 rounded-2xl bg-[#141414] border border-[#B79B58]/30">
              <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58]" />
                <span>03 / STUDIO ARCHITECTURE &amp; SOLUTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F5F2]">
                Our Architectural Strategy
              </h2>
              <p className="text-sm sm:text-base text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Testimonial Quote */}
            {project.testimonial && (
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#181818] to-[#101010] border border-[#B79B58]/40 space-y-6 relative">
                <Quote size={36} className="text-[#B79B58]/30" />
                <p className="text-xl sm:text-2xl font-editorial italic text-[#F5F5F2] leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-sans-refined">
                  <div>
                    <span className="text-[#F5F5F2] font-medium block">{project.testimonial.author}</span>
                    <span className="text-[#8A8A8A]">{project.testimonial.role}, {project.testimonial.company}</span>
                  </div>
                  <span className="text-[10px] font-tech-mono text-[#CDB373]">CLIENT ENDORSEMENT</span>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Design System Card */}
            {project.designSystem && (
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
                <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58] flex items-center gap-2">
                  <Palette size={13} />
                  <span>DESIGN SYSTEM MATRIX</span>
                </span>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A] block">Typography System</span>
                    <span className="text-[#F5F5F2] font-medium">{project.designSystem.typographyPairing}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A] block">Color Palette</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      {project.designSystem.colorPalette.map((col, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border border-white/20"
                          style={{ backgroundColor: col }}
                          title={col}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A] block">Grid Geometry</span>
                    <span className="text-[#F5F5F2]">{project.designSystem.gridGeometry}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A] block">Motion Curve</span>
                    <span className="text-[#CDB373] font-tech-mono">{project.designSystem.motionArchetype}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Deliverables Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
              <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                DELIVERABLES PRODUCED
              </span>
              <ul className="space-y-2.5">
                {project.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F5F2]">
                    <CheckCircle2 size={14} className="text-[#B79B58] mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
              <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                TECHNOLOGY MATRIX
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-tech-mono bg-[#1A1A1A] text-[#CDB373] px-3 py-1 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire for Similar */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#B79B58]/30 space-y-4">
              <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                START A SIMILAR INITIATIVE
              </span>
              <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                Need an institutional platform, high-conversion landing engine, or brand identity of this caliber?
              </p>
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                INTERFACE ARTIFACTS
              </span>
              <span className="text-xs font-tech-mono text-[#8A8A8A]">
                {project.galleryImages.length} Visual Artifacts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-black">
                  <img
                    src={img}
                    alt={`${project.title} gallery asset ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-tech-mono uppercase tracking-widest text-[#8A8A8A]">
              NEXT CASE STUDY
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F5F2] mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs text-[#8A8A8A] font-tech-mono mt-1">
              {nextProject.category} · {nextProject.year}
            </p>
          </div>

          <button
            onClick={() => handleNav('case-study', nextProject.slug)}
            className="px-8 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 text-xs font-sans-refined uppercase tracking-widest text-[#F5F5F2] flex items-center gap-3 transition-colors self-start md:self-auto"
          >
            <span>Proceed to Next Case Study</span>
            <ArrowUpRight size={16} className="text-[#B79B58]" />
          </button>
        </div>
      </section>
    </div>
  );
};
