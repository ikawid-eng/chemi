import React from 'react';
import { CUSTOMER_STORIES } from '../data/mockData';
import { NavigationTab } from '../types';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

interface StoryBehindSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const StoryBehindSection: React.FC<StoryBehindSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            Real Customer Memories
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
            Story Behind Your CHEMI
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
            Every piece connects back to a real moment, real flowers, and real emotions. Explore how moments transform into wearable memories.
          </p>
        </div>

        {/* Stories Triptych Cards Grid */}
        <div className="space-y-12">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE8DC] shadow-sm hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EFE8DC] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#581C25] uppercase tracking-wider">{story.occasion} • {story.date}</span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 mt-0.5">{story.customerName}'s Story</h3>
                </div>
                <span className="text-xs bg-[#F3ECE1] text-[#581C25] px-3 py-1 rounded-full font-medium">
                  {story.productType}
                </span>
              </div>

              {/* Triptych Image Progression: Original Moment -> Flower -> Jewelry */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                
                {/* 1. Original Moment */}
                <div className="space-y-2">
                  <div className="h-48 rounded-2xl overflow-hidden border border-[#EFE8DC]">
                    <img
                      src={story.originalMomentImage}
                      alt="Original Moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider">01. Original Moment</span>
                </div>

                {/* 2. Flower */}
                <div className="space-y-2">
                  <div className="h-48 rounded-2xl overflow-hidden border border-[#EFE8DC]">
                    <img
                      src={story.flowerImage}
                      alt="Preserved Flower"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider">02. The Memory Flower</span>
                </div>

                {/* 3. Jewelry */}
                <div className="space-y-2">
                  <div className="h-48 rounded-2xl overflow-hidden border border-[#EFE8DC]">
                    <img
                      src={story.jewelryImage}
                      alt="Final Jewelry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider">03. Wearable Memory</span>
                </div>

              </div>

              {/* Quote */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EFE8DC] text-stone-700 text-xs sm:text-sm italic font-serif-editorial leading-relaxed">
                "{story.quote}"
              </div>
            </div>
          ))}
        </div>

        {/* View All Stories CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveTab('stories-gallery')}
            className="inline-flex items-center gap-2 bg-[#581C25] hover:bg-[#3B1017] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md"
          >
            <span>Explore Full Story Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </section>
  );
};
