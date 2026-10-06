import React from 'react';
import { GIFT_OCCASIONS } from '../data/mockData';
import { NavigationTab } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MomentsToGiveSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const MomentsToGiveSection: React.FC<MomentsToGiveSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
              Occasion Guide
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
              A Gift for Every Little Big Moment.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
              Pilih perhiasan berdasarkan momen spesial yang ingin kamu abadikan atau berikan kepada seseorang yang berharga.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('gift-guide')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C25] hover:text-[#3B1017] transition-colors shrink-0"
          >
            <span>Explore All Occasions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GIFT_OCCASIONS.map((occ) => (
            <div
              key={occ.id}
              onClick={() => setActiveTab('gift-guide')}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE8DC] shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={occ.image}
                    alt={occ.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#581C25] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {occ.title}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 group-hover:text-[#581C25] transition-colors">
                    {occ.tagline}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                    {occ.description}
                  </p>
                </div>
              </div>

              {/* Story snippet footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-[11px] italic text-stone-700 font-serif-editorial">
                  {occ.storySnippet}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
