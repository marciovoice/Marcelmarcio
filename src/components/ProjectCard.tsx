import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { soundFx } from './SoundEffects';

interface ProjectCardProps {
  project: Project;
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={handleClick}
      data-cursor-text="VIEW"
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#121212] border border-white/10 hover:border-[#B79B58]/40 transition-all duration-500 flex flex-col ${
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-tech-mono uppercase tracking-widest bg-[#0B0B0B]/80 backdrop-blur-md text-[#CDB373] border border-[#B79B58]/30">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-tech-mono bg-black/60 backdrop-blur-md text-[#8A8A8A] border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Metric Highlight (if available) */}
        {project.impactMetrics?.[0] && (
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10">
            <span className="text-xs font-serif font-bold text-[#B79B58]">
              {project.impactMetrics[0].value}
            </span>
            <span className="text-[10px] font-tech-mono uppercase text-[#8A8A8A]">
              {project.impactMetrics[0].label}
            </span>
          </div>
        )}

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#B79B58] text-[#0B0B0B] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-[#B79B58]/30">
          <ArrowUpRight size={18} />
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
        <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.services.slice(0, 3).map((srv, i) => (
            <span
              key={i}
              className="text-[10px] font-tech-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#1A1A1A] text-[#8A8A8A]"
            >
              {srv}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-[10px] font-tech-mono text-[#8A8A8A] px-1 py-0.5">
              +{project.services.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
