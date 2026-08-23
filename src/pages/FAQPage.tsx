import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, HelpCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PageId, FAQItem } from '../types';
import { faqData } from '../data/faqData';
import { PageHeader } from '../components/PageHeader';
import { soundFx } from '../components/SoundEffects';

export const FAQPage: React.FC<{ onNavigate: (page: PageId, slug?: string) => void }> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['turnaround-time', 'templates-vs-custom']);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'process', label: 'Process & Timing' },
    { id: 'pricing', label: 'Pricing & Billing' },
    { id: 'technical', label: 'Tech & Architecture' },
    { id: 'international', label: 'Global / International' },
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    soundFx.playClick();
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="STUDIO KNOWLEDGE BASE"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our design philosophy, development workflow, milestone pricing, and international collaboration."
      />

      {/* Search & Category Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0E0E0E] sticky top-[60px] sm:top-[70px] z-30 backdrop-blur-md bg-[#0E0E0E]/90">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. timelines, hosting, international, payments)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 text-sm font-sans-refined text-[#F5F5F2] placeholder-[#8A8A8A] focus:outline-none focus:border-[#B79B58] transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-tech-mono whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold'
                      : 'bg-[#141414] text-[#8A8A8A] hover:text-[#F5F5F2] border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'bg-[#141414] border-[#B79B58]/40 shadow-lg' : 'bg-[#101010] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-display font-medium text-[#F5F5F2]">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full border transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-[#B79B58] text-[#B79B58]' : 'border-white/10 text-[#8A8A8A]'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-base text-[#8A8A8A]">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-tech-mono text-[#B79B58] underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0E0E0E] text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#B79B58] flex items-center justify-center mx-auto">
            <MessageCircle size={20} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display text-[#F5F5F2]">
            Have a question specific to your project?
          </h3>
          <p className="text-xs sm:text-sm text-[#8A8A8A] font-sans-refined font-light">
            We are always happy to discuss custom architectural requirements, NDA requirements, or specialized tech stacks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-lg shadow-[#B79B58]/20"
            >
              <span>Contact the Studio Directly</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
