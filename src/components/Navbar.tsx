import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { PageId } from '../types';
import { FullLogo } from './MonogramLogo';
import { LiveClock } from './LiveClock';
import { soundFx } from './SoundEffects';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, slug?: string) => void;
}

interface NavItem {
  id: PageId;
  label: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work', badge: '6' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    soundFx.playClick();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAudio = () => {
    const enabled = soundFx.toggleSound();
    setSoundActive(enabled);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <FullLogo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#141414]/80 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (currentPage === 'case-study' && item.id === 'work');
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-sans-refined transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0B0B0B] font-semibold'
                      : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#B79B58] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`relative z-10 text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-[#0B0B0B]/20 text-[#0B0B0B]'
                          : 'bg-white/10 text-[#B79B58]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              id="sound-toggle-btn"
              onClick={toggleAudio}
              title={soundActive ? 'Mute Studio Sound FX' : 'Enable Studio Sound FX'}
              className={`p-2 rounded-full border transition-all duration-300 ${
                soundActive
                  ? 'border-[#B79B58] text-[#B79B58] bg-[#B79B58]/10'
                  : 'border-white/10 text-[#8A8A8A] hover:text-[#F5F5F2] hover:border-white/20'
              }`}
            >
              {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Quick Consultation / CTA Button */}
            <button
              id="nav-cta-btn"
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans-refined uppercase tracking-wider font-medium text-[#0B0B0B] bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] shadow-lg shadow-[#B79B58]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu & Sound Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-sound-toggle-btn"
              onClick={toggleAudio}
              className={`p-2 rounded-full border ${
                soundActive ? 'border-[#B79B58] text-[#B79B58]' : 'border-white/10 text-[#8A8A8A]'
              }`}
            >
              {soundActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <button
              id="mobile-menu-trigger"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-lg bg-[#141414] border border-white/10 text-[#F5F5F2]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-tech-mono uppercase tracking-widest text-[#B79B58]">
                  NAVIGATION DIRECTORY
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left text-2xl sm:text-3xl font-display flex items-center justify-between py-2 border-b border-white/5 ${
                        isActive ? 'text-[#B79B58] font-medium pl-2' : 'text-[#F5F5F2] hover:text-[#B79B58]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-tech-mono text-[#8A8A8A]">0{idx + 1}</span>
                        {item.label}
                      </span>
                      {isActive ? (
                        <span className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58] border border-[#B79B58]/40 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      ) : (
                        <ArrowUpRight size={18} className="text-[#8A8A8A]" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 space-y-4">
              <LiveClock />

              <div className="flex items-center justify-between text-xs text-[#8A8A8A]">
                <span>hello@mareclmarcio.com</span>
                <span className="text-[#B79B58]">India · Worldwide</span>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#B79B58]/20"
              >
                <span>Initiate Studio Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
