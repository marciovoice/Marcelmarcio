import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, Smartphone, Monitor, Compass, Type, Eye, Accessibility, Gauge, Link2, MousePointerClick, Globe, Layers } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const QualityMatrix: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const qualityPoints = [
    {
      id: 'desktop',
      icon: Monitor,
      title: 'Desktop Responsiveness',
      desc: 'Tested across 13-inch to 32-inch ultra-wide 4K viewports with tailored container constraints.',
      standard: 'Fluid max-w-7xl layouts with optical margin harmony'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Responsiveness',
      desc: 'Calibrated for iPhone 13-16, Samsung Galaxy, and Google Pixel with 44px+ touch targets.',
      standard: 'Zero horizontal scroll overflow, natural thumb ergonomics'
    },
    {
      id: 'nav',
      icon: Compass,
      title: 'Navigation Flow',
      desc: 'Frictionless orientation. Every destination is accessible in 2 clicks or fewer.',
      standard: 'Sticky architectural headers with clear breadcrumbs'
    },
    {
      id: 'typography',
      icon: Type,
      title: 'Typography Precision',
      desc: 'Pairing distinctive serif editorial headlines with ultra-legible body type scales.',
      standard: '1.5–1.7 baseline line height, 65–75 character line length'
    },
    {
      id: 'visual-consistency',
      icon: Eye,
      title: 'Visual Consistency',
      desc: 'Mathematically unified padding, border radii, and obsidian-to-gold palette tokens.',
      standard: 'Design tokens enforced across all components'
    },
    {
      id: 'accessibility',
      icon: Accessibility,
      title: 'Accessibility (A11y)',
      desc: 'High contrast ratios, semantic HTML5 tags, full keyboard navigation and screen-reader readiness.',
      standard: 'WCAG AA / AAA compliance audit'
    },
    {
      id: 'performance',
      icon: Gauge,
      title: 'Performance & Speed',
      desc: 'Sub-second initial paint, asset tree-shaking, AVIF/WebP image pipelines, and optimized scripts.',
      standard: '95+ Lighthouse benchmark guarantee'
    },
    {
      id: 'broken-links',
      icon: Link2,
      title: 'Zero Broken Links',
      desc: '100% verified route endpoints, functioning interactive anchors, and custom 404 recovery.',
      standard: 'Automated crawl check before production deploy'
    },
    {
      id: 'interactive',
      icon: MousePointerClick,
      title: 'Interactive States',
      desc: 'Tactile hover feedback, magnetic buttons, focused inputs, and graceful error messages.',
      standard: 'Silky 60 FPS motion without cognitive distraction'
    },
    {
      id: 'compatibility',
      icon: Globe,
      title: 'Cross-Browser Engine',
      desc: 'Strict rendering validation across Apple Safari (iOS & macOS), Google Chrome, and Firefox.',
      standard: 'Vendor-prefix CSS fallback support'
    },
    {
      id: 'hierarchy',
      icon: Layers,
      title: 'Content Hierarchy',
      desc: 'Clear answer to: Who are you? What do you offer? Why trust you? What to do next?',
      standard: 'Conversion-engineered editorial narrative'
    }
  ];

  return (
    <div className="rounded-2xl bg-[#121212] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest mb-1.5">
            <ShieldCheck size={16} />
            <span>Studio Quality Standard</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#F5F5F2]">
            Our 11-Point Quality Promise
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light max-w-md">
          Before any digital product leaves our studio for live deployment, it undergoes an exhaustive 11-stage audit.
        </p>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {qualityPoints.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeItem === idx;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => {
                soundFx.playClick();
                setActiveItem(idx);
              }}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#181818] border-[#B79B58] shadow-lg shadow-[#B79B58]/10'
                  : 'bg-[#101010] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#B79B58] text-[#0B0B0B]' : 'bg-[#1A1A1A] text-[#B79B58]'}`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-[11px] font-tech-mono text-[#8A8A8A]">0{idx + 1}</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check size={11} />
                </div>
              </div>

              <h4 className="text-sm font-sans-refined font-medium text-[#F5F5F2] mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#8A8A8A] font-light leading-relaxed mb-3">
                {item.desc}
              </p>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] font-tech-mono text-[#CDB373] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#CDB373]" />
                  {item.standard}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
