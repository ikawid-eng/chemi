import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeroSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="relative bg-[#1C070C] text-[#FAF7F2] overflow-hidden min-h-[580px] lg:min-h-[680px] flex items-center border-b border-white/10">
      
      {/* Background High-Fashion Photography (Exact style from image.png hero) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1800&auto=format&fit=crop"
          alt="CHEMI Fine Jewelry"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C070C] via-[#1C070C]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[11px] font-sans-body font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
              HANDMADE JEWELLERY
            </span>
          </div>

          {/* Headline (Matching typography from image.png) */}
          <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase">
            Jewelry Made. <br />
            <span className="italic font-normal text-stone-200">To Keep a Story.</span>
          </h1>

          {/* Indonesian Subtitle */}
          <p className="text-stone-300 text-sm sm:text-base font-sans-body leading-relaxed max-w-lg">
            Perhiasan yang dibuat untuk menyimpan momen, memberikan makna, dan membawa sebuah cerita lebih dekat denganmu.
          </p>

          {/* Clean Rectangular Outline Button with Arrow (Exact as image.png) */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setActiveTab('beads-customizer')}
              className="inline-flex items-center justify-between gap-6 border border-white/40 hover:border-white bg-black/20 hover:bg-white text-white hover:text-stone-900 px-8 py-4 text-xs font-sans-body tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>Discover The Collection</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
            </button>

            <button
              onClick={() => setActiveTab('silver-customizer')}
              className="inline-flex items-center justify-between gap-6 border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#3B1017]/40 hover:bg-[#3B1017] text-white px-8 py-4 text-xs font-sans-body tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>Preserve A Flower</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-all" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
