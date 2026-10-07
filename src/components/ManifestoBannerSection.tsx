import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface ManifestoBannerSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const ManifestoBannerSection: React.FC<ManifestoBannerSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="bg-[#1C070C] text-[#FAF7F2] py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Brand Mark */}
          <div className="flex items-center gap-4">
            <span className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-[0.25em] uppercase text-white">
              CHEMI
            </span>
            <span className="w-[1px] h-12 bg-white/20 hidden sm:block" />
          </div>

          {/* Center Manifesto Quote */}
          <div className="text-center lg:text-left max-w-xl space-y-2">
            <span className="text-[10px] font-sans-body tracking-[0.25em] uppercase text-[#C5A059] block font-semibold">
              The CHEMI Manifesto
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-wider uppercase text-stone-100">
              JEWELRY THAT SPEAKS WITHOUT SAYING A WORD.
            </h2>
          </div>

          {/* Right Outline Button */}
          <div>
            <button
              onClick={() => setActiveTab('beads-customizer')}
              className="inline-flex items-center gap-4 border border-white/40 hover:border-white bg-black/20 hover:bg-white text-white hover:text-stone-900 px-8 py-4 text-xs font-sans-body tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
