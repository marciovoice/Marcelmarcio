import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  currentPage?: PageId;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#141414]/90 via-[#0B0B0B] to-[#0B0B0B]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-architect-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B79B58]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#B79B58]/30 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B79B58] animate-pulse" />
          <span className="text-[11px] font-tech-mono uppercase tracking-widest text-[#CDB373]">
            {badge}
          </span>
        </motion.div>

        {/* Primary Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-[#F5F5F2] tracking-tight leading-[1.08] max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-[#8A8A8A] font-sans-refined font-light leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};
