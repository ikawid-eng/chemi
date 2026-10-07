import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface WhatIsChemiSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const WhatIsChemiSection: React.FC<WhatIsChemiSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="bg-[#FAF7F2] text-stone-900 border-b border-[#EFE8DC] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        
        {/* Left Column: High Fashion Packaging Photography (Exact as image.png) */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
          <img
            src="/src/assets/images/chemi_gift_packaging_1791363914513.jpg"
            alt="CHEMI Story Packaging Box"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Warm Cream Content Container (Exact as image.png) */}
        <div className="lg:col-span-6 bg-[#F3ECE1] p-10 sm:p-16 lg:p-20 flex flex-col justify-center space-y-6 relative">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#581C25]" />
            <span className="text-[11px] font-sans-body font-semibold tracking-[0.25em] uppercase text-[#581C25]">
              OUR STORY
            </span>
          </div>

          {/* Display Title */}
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3B1017] uppercase leading-tight">
            MADE TO BE <br />
            REMEMBERS & KEPT.
          </h2>

          {/* Description */}
          <p className="text-stone-700 text-sm sm:text-base font-sans-body leading-relaxed max-w-md">
            Thoughtfully designed pieces created to complement your everyday elegance and preserve your most cherished memories forever.
          </p>

          {/* Solid Dark Button with Arrow */}
          <div className="pt-4">
            <button
              onClick={() => setActiveTab('our-story')}
              className="inline-flex items-center gap-4 bg-[#2D0A10] hover:bg-[#581C25] text-white px-8 py-4 text-xs font-sans-body tracking-[0.2em] uppercase transition-all duration-300 shadow-md cursor-pointer group"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
