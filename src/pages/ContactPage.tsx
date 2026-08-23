import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Copy, Sparkles, MessageSquare, ArrowUpRight, ShieldCheck, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId, ContactFormState } from '../types';
import { PageHeader } from '../components/PageHeader';
import { LiveClock } from '../components/LiveClock';
import { soundFx } from '../components/SoundEffects';

interface ContactPageProps {
  initialService?: string;
  initialPlan?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, initialPlan, onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    companyName: '',
    serviceNeeded: initialService ? [initialService] : ['Web Design', 'Web Development'],
    budgetRange: initialPlan || '₹15,000 – ₹30,000 (Professional)',
    timeline: 'Within 2–4 Weeks',
    projectOverview: initialPlan ? `I am inquiring about the ${initialPlan}.` : '',
    referralSource: 'Direct Portfolio',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const availableServices = [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Website Redesign',
    'Brand Identity',
    'Landing Pages',
    'Performance Optimization',
    'Maintenance & Care',
  ];

  const budgetOptions = [
    '₹7,999 – ₹15,000 (Essential)',
    '₹15,000 – ₹30,000 (Professional)',
    '₹30,000 – ₹60,000 (Premium)',
    '₹60,000+ (Custom / Enterprise)',
    'Care Retainer (from ₹999/mo)',
  ];

  const timelineOptions = [
    'Immediate (within 10 days)',
    'Within 2–4 Weeks',
    'Next Month (Planning Phase)',
    'Flexible / Ongoing',
  ];

  const toggleService = (srv: string) => {
    soundFx.playClick();
    if (formData.serviceNeeded.includes(srv)) {
      setFormData({
        ...formData,
        serviceNeeded: formData.serviceNeeded.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        serviceNeeded: [...formData.serviceNeeded, srv],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedId = `MM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryId(generatedId);
      soundFx.playChime(659.25, 0.3);

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B79B58', '#CDB373', '#F5F5F2', '#141414'],
      });
    }, 1200);
  };

  const copyInquiryNumber = () => {
    if (!inquiryId) return;
    navigator.clipboard.writeText(inquiryId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2]">
      <PageHeader
        badge="START A CONVERSATION"
        title="Let's Build Something Worth Visiting"
        subtitle="Have an ambitious idea, a growing business, or an existing website that needs a commanding presence? Tell us what you are building."
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Studio Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest">
                <Sparkles size={14} />
                <span>STUDIO COORDINATES</span>
              </div>

              <div className="space-y-4 text-sm font-sans-refined">
                <div className="space-y-1">
                  <span className="text-xs font-tech-mono text-[#8A8A8A] block">General Inquiries:</span>
                  <a
                    href="mailto:hello@mareclmarcio.com"
                    className="text-lg font-display text-[#F5F5F2] hover:text-[#CDB373] transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} className="text-[#B79B58]" />
                    <span>hello@mareclmarcio.com</span>
                  </a>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/5">
                  <span className="text-xs font-tech-mono text-[#8A8A8A] block">Business &amp; Partnerships:</span>
                  <a
                    href="mailto:business@mareclmarcio.com"
                    className="text-lg font-display text-[#F5F5F2] hover:text-[#CDB373] transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} className="text-[#B79B58]" />
                    <span>business@mareclmarcio.com</span>
                  </a>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/5">
                  <span className="text-xs font-tech-mono text-[#8A8A8A] block">Studio Location:</span>
                  <p className="text-[#F5F5F2] flex items-center gap-2">
                    <MapPin size={16} className="text-[#B79B58]" />
                    <span>India · Working Worldwide</span>
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/5">
                  <span className="text-xs font-tech-mono text-[#8A8A8A] block">Availability Window:</span>
                  <p className="text-[#F5F5F2] flex items-center gap-2 text-xs font-tech-mono">
                    <Clock size={16} className="text-[#B79B58]" />
                    <span>Monday–Saturday · 10:00 AM – 7:00 PM IST</span>
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <LiveClock />
              </div>
            </div>

            {/* Response Guarantee Pill */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#B79B58]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech-mono text-[#CDB373]">
                <ShieldCheck size={16} />
                <span>24-Hour Studio Guarantee</span>
              </div>
              <p className="text-xs text-[#8A8A8A] font-light leading-relaxed">
                Every inquiry is reviewed personally by a principal designer or technical director. We respond within 24 business hours with an architectural breakdown or kickoff invite.
              </p>
            </div>
          </div>

          {/* Functional Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-display font-medium text-[#F5F5F2]">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-[#8A8A8A] font-sans-refined font-light mt-1">
                      Fill out the fields below so we can prepare a tailored scope and cost estimate.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Elena Rossi / Aaditya Rao"
                        className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-sm font-sans-refined text-[#F5F5F2] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-[#B79B58]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-sm font-sans-refined text-[#F5F5F2] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-[#B79B58]"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                      Organization / Project Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Nova Systems / CSSAS Academy"
                      className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-sm font-sans-refined text-[#F5F5F2] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-[#B79B58]"
                    />
                  </div>

                  {/* Services Multi-Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = formData.serviceNeeded.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-sans-refined transition-all border ${
                              isSelected
                                ? 'bg-[#B79B58] text-[#0B0B0B] font-semibold border-[#B79B58]'
                                : 'bg-[#101010] text-[#8A8A8A] border-white/10 hover:border-white/20'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                        Estimated Budget Tier
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-xs font-sans-refined text-[#F5F5F2] focus:outline-none focus:border-[#B79B58]"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#141414] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                        Desired Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-xs font-sans-refined text-[#F5F5F2] focus:outline-none focus:border-[#B79B58]"
                      >
                        {timelineOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#141414] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-tech-mono uppercase text-[#8A8A8A] block">
                      Tell us about your project &amp; goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      placeholder="What are you building? Who is your audience? Do you have existing designs or content ready?"
                      className="w-full px-4 py-3 rounded-xl bg-[#101010] border border-white/10 text-sm font-sans-refined text-[#F5F5F2] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-[#B79B58] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#CDB373] to-[#B79B58] hover:from-[#E6D5AC] hover:to-[#C5A869] text-[#0B0B0B] font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-[#B79B58]/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting to Studio...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Confirmation State */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 space-y-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#B79B58]/20 text-[#CDB373] border border-[#B79B58] flex items-center justify-center mx-auto shadow-lg shadow-[#B79B58]/20">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-tech-mono uppercase tracking-widest text-[#B79B58]">
                      INQUIRY TRANSMITTED SUCCESSFULLY
                    </p>
                    <h3 className="text-3xl font-display font-medium text-[#F5F5F2]">
                      Thank you, {formData.fullName}.
                    </h3>
                    <p className="text-sm text-[#8A8A8A] font-sans-refined font-light max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received at <strong className="text-[#F5F5F2]">hello@mareclmarcio.com</strong>. Our studio lead will review your project scope and follow up within 24 hours.
                    </p>
                  </div>

                  {/* Reference ID Pill */}
                  <div className="p-4 rounded-xl bg-[#101010] border border-white/10 inline-flex items-center gap-3">
                    <span className="text-xs font-tech-mono text-[#8A8A8A]">Inquiry Reference:</span>
                    <span className="text-sm font-tech-mono text-[#CDB373] font-bold">{inquiryId}</span>
                    <button
                      onClick={copyInquiryNumber}
                      className="p-1 rounded hover:bg-white/10 text-[#8A8A8A] hover:text-[#F5F5F2] transition-colors"
                      title="Copy Reference Code"
                    >
                      <Copy size={14} />
                    </button>
                    {copiedId && <span className="text-[10px] text-emerald-400 font-tech-mono">Copied!</span>}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          companyName: '',
                          serviceNeeded: ['Web Design'],
                          budgetRange: '₹15,000 – ₹30,000 (Professional)',
                          timeline: 'Within 2–4 Weeks',
                          projectOverview: '',
                          referralSource: 'Direct Portfolio',
                        });
                      }}
                      className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] border border-white/10 text-xs font-tech-mono uppercase text-[#F5F5F2]"
                    >
                      Submit Another Inquiry
                    </button>

                    <button
                      onClick={() => onNavigate('work')}
                      className="px-6 py-3 rounded-xl bg-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-wider"
                    >
                      Explore Case Studies While You Wait
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
