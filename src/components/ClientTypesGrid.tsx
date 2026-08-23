import React from 'react';
import { motion } from 'motion/react';
import { Building2, GraduationCap, Stethoscope, Video, Rocket, Briefcase, Sparkles } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const ClientTypesGrid: React.FC<{ onInquire?: (sector: string) => void }> = ({ onInquire }) => {
  const clientTypes = [
    {
      id: 'businesses',
      title: 'Established Businesses',
      icon: Building2,
      desc: 'Companies looking to modernize their legacy presence and establish commanding digital authority.',
      example: 'Corporate Portals · B2B Consultancies · Industrial Leaders'
    },
    {
      id: 'education',
      title: 'Educational Institutions',
      icon: GraduationCap,
      desc: 'Schools, academies, and universities needing streamlined admissions, syllabi, and student engagement.',
      example: 'Medical Academies · Research Sansthans · Specialized Institutes'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Organizations',
      icon: Stethoscope,
      desc: 'Clinics, Ayurvedic centers, and health tech innovators requiring credible, compliant interfaces.',
      example: 'Diagnostic Centers · Speciality Clinics · Wellness Ateliers'
    },
    {
      id: 'creators',
      title: 'Creators & Media Brands',
      icon: Video,
      desc: 'Directors, artists, and prominent creators crafting showreels and premium merchandise experiences.',
      example: 'Film Directors · Sound Designers · Digital Auteurs'
    },
    {
      id: 'startups',
      title: 'High-Growth Startups',
      icon: Rocket,
      desc: 'Early-stage tech founders needing high-conversion launch landing pages and interactive product simulators.',
      example: 'AI Orchestrators · Fintech Pioneers · SaaS Engines'
    },
    {
      id: 'professionals',
      title: 'Independent Professionals',
      icon: Briefcase,
      desc: 'Doctors, architects, luxury advisors, and consultants who need a bespoke portfolio reflecting mastery.',
      example: 'Architects · Surgeons · Strategic Counsel'
    },
    {
      id: 'emerging',
      title: 'Emerging Luxury Brands',
      icon: Sparkles,
      desc: 'New ventures requiring a timeless monogram, unified visual language, and flagship online boutique.',
      example: 'Haute Horlogerie · Artisan Studios · Fashion Ateliers'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {clientTypes.map((type, idx) => {
          const Icon = type.icon;
          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => {
                soundFx.playClick();
                if (onInquire) onInquire(type.title);
              }}
              className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#B79B58]/40 hover:bg-[#161616] transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#B79B58] group-hover:bg-[#B79B58] group-hover:text-[#0B0B0B] flex items-center justify-center transition-colors">
                  <Icon size={18} />
                </div>
                <h4 className="text-base font-display font-medium text-[#F5F5F2] group-hover:text-[#CDB373] transition-colors">
                  {type.title}
                </h4>
                <p className="text-xs text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
                  {type.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[10px] font-tech-mono text-[#CDB373]">
                  {type.example}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
