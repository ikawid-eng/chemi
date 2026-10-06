import React from 'react';
import { CUSTOMER_STORIES } from '../data/mockData';
import { NavigationTab } from '../types';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface StoriesGalleryPageProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const StoriesGalleryPage: React.FC<StoriesGalleryPageProps> = ({ setActiveTab }) => {
  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            Real Memory Showcase
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
            Story Behind Your CHEMI.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
            Kumpulan cerita nyata bagaimana momen berharga, bunga spesial, dan kasih sayang diwujudkan menjadi perhiasan yang dikenakan setiap hari.
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-16">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-8 border border-[#EFE8DC] shadow-lg space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EFE8DC] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#581C25] uppercase tracking-widest">{story.occasion} • {story.date}</span>
                  <h2 className="font-serif-editorial text-3xl font-bold text-stone-900 mt-0.5">{story.customerName}'s Story</h2>
                </div>
                <span className="text-xs bg-[#581C25] text-white px-3.5 py-1.5 rounded-full font-medium">
                  {story.productType}
                </span>
              </div>

              {/* Triptych Progression */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="h-64 rounded-2xl overflow-hidden border border-[#EFE8DC] shadow-sm">
                    <img src={story.originalMomentImage} alt="Original Moment" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs uppercase font-bold text-[#581C25] tracking-wider">01. Original Moment</span>
                </div>

                <div className="space-y-2">
                  <div className="h-64 rounded-2xl overflow-hidden border border-[#EFE8DC] shadow-sm">
                    <img src={story.flowerImage} alt="Flower Petals" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs uppercase font-bold text-[#581C25] tracking-wider">02. Memory Flower</span>
                </div>

                <div className="space-y-2">
                  <div className="h-64 rounded-2xl overflow-hidden border border-[#EFE8DC] shadow-sm">
                    <img src={story.jewelryImage} alt="Wearable Jewelry" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs uppercase font-bold text-[#581C25] tracking-wider">03. Wearable Memory</span>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE8DC] space-y-2">
                <p className="font-serif-editorial text-lg italic text-stone-800 leading-relaxed">
                  "{story.quote}"
                </p>
                <p className="text-xs text-stone-500 font-semibold">— {story.customerName}, {story.occasion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-[#EFE8DC] space-y-4">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#3B1017]">
            What Story Will You Keep Today?
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('beads-customizer')}
              className="bg-[#581C25] hover:bg-[#3B1017] text-white px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-widest shadow-md"
            >
              Create Beads Gift
            </button>
            <button
              onClick={() => setActiveTab('silver-customizer')}
              className="bg-stone-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-widest shadow-md"
            >
              Preserve Flower in Silver
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
