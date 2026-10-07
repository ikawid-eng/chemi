import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface ChooseYourStorySectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const ChooseYourStorySection: React.FC<ChooseYourStorySectionProps> = ({ setActiveTab }) => {
  const [scrollIdx, setScrollIdx] = useState(0);

  const collectionItems = [
    {
      id: 'item-1',
      name: 'THE BLUSH PEARL BRACELET',
      price: 'IDR 189,000',
      category: 'CHEMI BEADS',
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      tab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'item-2',
      name: 'THE BOTANICAL MEMORY PENDANT',
      price: 'IDR 429,000',
      category: 'CHEMI SILVER',
      image: '/src/assets/images/chemi_silver_keepsake_1791363874692.jpg',
      tab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'item-3',
      name: 'THE ETERNITY ROSE RING',
      price: 'IDR 389,000',
      category: 'CHEMI SILVER',
      image: '/src/assets/images/hero_chemi_jewelry_1791363797623.jpg',
      tab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'item-4',
      name: 'THE SIGNATURE STORY BOX',
      price: 'IDR 529,000',
      category: 'GIFT EXPERIENCE',
      image: '/src/assets/images/chemi_gift_packaging_1791363914513.jpg',
      tab: 'gift-guide' as NavigationTab,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] text-stone-900 border-b border-[#EFE8DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact style from image.png) */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#581C25]" />
            <span className="text-[11px] font-sans-body font-semibold tracking-[0.25em] uppercase text-[#581C25]">
              FEATURED COLLECTION
            </span>
            <span className="w-8 h-[1px] bg-[#581C25]" />
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3B1017] uppercase">
            THE CHEMI COLLECTION
          </h2>

          <p className="text-xs sm:text-sm font-sans-body text-stone-600 tracking-wider">
            Designed for moments that matter.
          </p>
        </div>

        {/* Carousel Grid with Arrow Controls (Exact layout from image.png) */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={() => setScrollIdx(Math.max(0, scrollIdx - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 rounded-full bg-white/90 border border-[#EFE8DC] text-stone-700 hover:text-[#581C25] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setScrollIdx(Math.min(collectionItems.length - 1, scrollIdx + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-10 h-10 rounded-full bg-white/90 border border-[#EFE8DC] text-stone-700 hover:text-[#581C25] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Square Cards Row (Exact as image.png) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.tab)}
                className="group cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#EFE8DC]/50 border border-[#EFE8DC] p-4 flex items-center justify-center shadow-2xs group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1 text-center font-sans-body">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#581C25] block">
                    {item.category}
                  </span>
                  <h3 className="text-xs font-bold tracking-[0.15em] text-stone-900 uppercase">
                    {item.name}
                  </h3>
                  <span className="text-xs text-stone-600 block font-serif-editorial font-semibold">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
