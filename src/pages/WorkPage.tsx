import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Grid, List, ArrowUpRight, Filter } from 'lucide-react';
import { PageId, Project } from '../types';
import { projectsData } from '../data/projectsData';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { soundFx } from '../components/SoundEffects';

interface WorkPageProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Institutional', 'Creative', 'Technology', 'Healthcare', 'Luxury & Lifestyle'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleSelectProject = (project: Project) => {
    soundFx.playClick();
    onNavigate('case-study', project.slug);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="SELECTED ARCHIVE"
        title="Case Studies Built With Intent"
        subtitle="A curated showcase of institutional platforms, avant-garde creative portfolios, AI startup launchpads, and luxury digital experiences."
      />

      {/* Filter & View Mode Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E] sticky top-[60px] sm:top-[70px] z-30 backdrop-blur-md bg-[#0E0E0E]/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-tech-mono whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold shadow-md shadow-[#B79B58]/20'
                      : 'bg-[#141414] text-[#8A8A8A] hover:text-[#F5F5F2] hover:bg-[#1A1A1A] border border-white/5'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${projectsData.length})` : ''}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                setViewMode('grid');
              }}
              className={`p-2 rounded-lg border transition-colors ${
                viewMode === 'grid'
                  ? 'border-[#B79B58] text-[#B79B58] bg-[#B79B58]/10'
                  : 'border-white/10 text-[#8A8A8A] hover:text-[#F5F5F2]'
              }`}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setViewMode('list');
              }}
              className={`p-2 rounded-lg border transition-colors ${
                viewMode === 'list'
                  ? 'border-[#B79B58] text-[#B79B58] bg-[#B79B58]/10'
                  : 'border-white/10 text-[#8A8A8A] hover:text-[#F5F5F2]'
              }`}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Display */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  index={idx}
                  onSelect={handleSelectProject}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleSelectProject(proj)}
                  className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#B79B58]/40 hover:bg-[#161616] transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      className="w-24 h-16 rounded-lg object-cover bg-black"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A]">
                        <span>{proj.year}</span>
                        <span>·</span>
                        <span className="text-[#CDB373]">{proj.category}</span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-[#F5F5F2] group-hover:text-[#CDB373] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#8A8A8A] font-sans-refined font-light">
                        {proj.client}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2">
                      {proj.services.map((srv, i) => (
                        <span key={i} className="text-[10px] font-tech-mono bg-[#1C1C1C] text-[#8A8A8A] px-2.5 py-1 rounded">
                          {srv}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1F1F1F] group-hover:bg-[#B79B58] group-hover:text-[#0B0B0B] text-[#8A8A8A] flex items-center justify-center transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-base text-[#8A8A8A]">No projects found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-xs font-tech-mono text-[#B79B58] underline"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Commission Notice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0E0E0E] text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
            HAVE A VISION IN MIND?
          </p>
          <h2 className="text-3xl font-display text-[#F5F5F2]">
            Let's create your case study next.
          </h2>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-lg shadow-[#B79B58]/20"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
