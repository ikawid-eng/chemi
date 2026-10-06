import React, { useState } from 'react';
import { GIFT_OCCASIONS } from '../data/mockData';
import { NavigationTab } from '../types';
import { Sparkles, ArrowRight, Gift } from 'lucide-react';

interface GiftGuidePageProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const GiftGuidePage: React.FC<GiftGuidePageProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredOccasions = selectedCategory === 'all'
    ? GIFT_OCCASIONS
    : GIFT_OCCASIONS.filter(o => o.recommendedCategory === selectedCategory);

  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            Curated Gifting Occasions
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
            A Gift for Every Little Big Moment.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
            Setiap momen memiliki rasa dan cerita tersendiri. Temukan perhiasan yang paling bermakna untuk diberikan sebagai kado kenangan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Occasions' },
            { id: 'beads', label: 'CHEMI Beads Gifts' },
            { id: 'silver', label: 'CHEMI Silver Keepsakes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#581C25] text-white shadow-md'
                  : 'bg-white text-stone-700 border border-[#EFE8DC] hover:bg-[#F3ECE1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Occasions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOccasions.map((occ) => (
            <div
              key={occ.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE8DC] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={occ.image}
                    alt={occ.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#581C25] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {occ.title}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">
                    {occ.tagline}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                    {occ.description}
                  </p>

                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-[11px] italic text-stone-700 font-serif-editorial">
                    {occ.storySnippet}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveTab(occ.recommendedCategory === 'silver' ? 'silver-customizer' : 'beads-customizer')}
                  className="w-full py-3 bg-[#581C25] hover:bg-[#3B1017] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Create {occ.title} Gift</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
