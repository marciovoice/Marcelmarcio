import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { PageId } from '../types';
import { MonogramSymbol } from '../components/MonogramLogo';
import { soundFx } from '../components/SoundEffects';

export const NotFoundPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F5F2] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <MonogramSymbol size={64} variant="gold" className="mx-auto" />
        <span className="text-xs font-tech-mono text-[#B79B58] uppercase tracking-widest block">
          ERROR 404 · PAGE NOT FOUND
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#F5F5F2]">
          Lost in the Digital Ether
        </h1>
        <p className="text-sm text-[#8A8A8A] font-sans-refined font-light leading-relaxed">
          The requested coordinate or archive is unavailable or has been relocated within the studio directory.
        </p>

        <div className="pt-4">
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('home');
            }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#CDB373] to-[#B79B58] text-[#0B0B0B] font-medium text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-lg shadow-[#B79B58]/20"
          >
            <ArrowLeft size={16} />
            <span>Return to Studio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
