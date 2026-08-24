import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Shield, Compass } from 'lucide-react';
import { Project } from '../types';
import { soundFx } from './SoundEffects';

interface ProjectCardProps {
  project: Project & {
    projectType?: string;
    clientHonestyNote?: string;
  };
  onSelect: (project: Project) => void;
  index?: number;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  index = 0,
  featured = false,
}) => {
  const handleClick = () => {
    soundFx.playClick();
    onSelect(project);
  };

  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={handleClick}
      data-cursor-text="VIEW"
      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#121212] border border-white/10 hover:border-[#B79B58]/50 transition-all duration-500 flex flex-col shadow-xl hover:shadow-[#B79B58]/10 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
        <img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-black/40 opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Top Badges: Project Index & Category */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-tech-mono font-bold bg-black/80 backdrop-blur-md text-[#F5F5F2] border border-white/10">
              {projectNumber}
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-tech-mono uppercase tracking-widest bg-[#0B0B0B]/80 backdrop-blur-md text-[#CDB373] border border-[#B79B58]/30">
              {project.category}
            </span>
          </div>

          {project.projectType && (
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[9px] font-tech-mono uppercase tracking-widest bg-black/70 backdrop-blur-md text-[#8A8A8A] border border-white/10">
              {project.projectType}
            </span>
          )}
        </div>

        {/* Metric Highlight */}
        {project.impactMetrics?.[0] && (
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10">
            <span className="text-xs font-serif font-bold text-[#B79B58]">
              {project.impactMetrics[0].value}
            </span>
            <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A]">
              {project.impactMetrics[0].label}
            </span>
          </div>
        )}

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-[#B79B58]/40">
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A] uppercase">
            <span>{project.client}</span>
            <span>·</span>
            <span>{project.industry}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F5F2] group-hover:text-[#CDB373] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Service tags */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.services.slice(0, 3).map((srv, i) => (
            <span
              key={i}
              className="text-[10px] font-tech-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#1A1A1A] text-[#8A8A8A] border border-white/5"
            >
              {srv}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-[10px] font-tech-mono text-[#8A8A8A] px-1 py-1">
              +{project.services.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
