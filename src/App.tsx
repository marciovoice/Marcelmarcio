import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ProcessPage } from './pages/ProcessPage';
import { PricingPage } from './pages/PricingPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { soundFx } from './components/SoundEffects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>('cssas-sansthan');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>();
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>();
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Parse URL Hash on mount and on popstate
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      const parts = hash.split('/');
      const page = parts[0] as PageId;
      const slug = parts[1];

      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'work',
        'case-study',
        'process',
        'pricing',
        'faq',
        'contact',
      ];

      if (validPages.includes(page)) {
        setCurrentPage(page);
        if (slug) {
          setCurrentSlug(slug);
        }
      } else {
        setCurrentPage('not-found');
      }
    };

    parseHash();
    window.addEventListener('popstate', parseHash);
    return () => window.removeEventListener('popstate', parseHash);
  }, []);

  const navigateTo = (page: PageId, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setCurrentSlug(slug);
      window.location.hash = `#/${page}/${slug}`;
    } else {
      window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceFromServices = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    navigateTo('contact');
  };

  const handleSelectPlanFromPricing = (planName: string) => {
    setSelectedPlanForContact(planName);
    navigateTo('contact');
  };

  const toggleSound = () => {
    const newState = soundFx.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F2] flex flex-col selection:bg-[#B79B58] selection:text-[#0B0B0B]">
      {/* Custom Precision Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Page Content with Smooth Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${currentSlug || ''}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onSelectService={handleSelectServiceFromServices}
              />
            )}
            {currentPage === 'work' && <WorkPage onNavigate={navigateTo} />}
            {currentPage === 'case-study' && (
              <CaseStudyPage slug={currentSlug} onNavigate={navigateTo} />
            )}
            {currentPage === 'process' && <ProcessPage onNavigate={navigateTo} />}
            {currentPage === 'pricing' && (
              <PricingPage
                onNavigate={navigateTo}
                onSelectPlan={handleSelectPlanFromPricing}
              />
            )}
            {currentPage === 'faq' && <FAQPage onNavigate={navigateTo} />}
            {currentPage === 'contact' && (
              <ContactPage
                initialService={selectedServiceForContact}
                initialPlan={selectedPlanForContact}
                onNavigate={navigateTo}
              />
            )}
            {currentPage === 'not-found' && <NotFoundPage onNavigate={navigateTo} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Studio Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
