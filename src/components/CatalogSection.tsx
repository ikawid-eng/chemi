import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface CatalogSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'beads' | 'silver' | 'gifts'>('all');

  const products = [
    {
      id: 'cat-1',
      category: 'beads',
      title: 'The Blush Pearl Bloom Bracelet',
      type: 'CHEMI Beads',
      price: 'IDR 189,000',
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      description: 'Handcrafted freshwater pearls with blush rose beads and custom color accents.',
      ctaTab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'cat-2',
      category: 'silver',
      title: 'The Botanical Memory Pendant',
      type: 'CHEMI Silver Keepsake',
      price: 'IDR 429,000',
      image: '/src/assets/images/chemi_silver_keepsake_1791363874692.jpg',
      description: '925 Sterling Silver frame holding preserved real flower petals from your bouquet.',
      ctaTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'cat-3',
      category: 'silver',
      title: 'Eternity Rose Petal Signet Ring',
      type: 'CHEMI Silver Keepsake',
      price: 'IDR 389,000',
      image: '/src/assets/images/hero_chemi_jewelry_1791363797623.jpg',
      description: 'Sculptural silver ring encapsulating delicate dried rose petals in crystal resin.',
      ctaTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'cat-4',
      category: 'gifts',
      title: 'Memory Keepsake Story Gift Box',
      type: 'CHEMI Story Box',
      price: 'IDR 529,000',
      image: '/src/assets/images/chemi_gift_packaging_1791363914513.jpg',
      description: 'Includes custom jewelry, personalized story card, flower mailer, and ribbon packaging.',
      ctaTab: 'gift-guide' as NavigationTab,
    },
  ];

  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-36 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-sans-body font-semibold tracking-widest uppercase text-[#581C25]">
              Curated Collection
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
              Made to Be Kept.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'beads', label: 'Beads' },
              { id: 'silver', label: 'Silver' },
              { id: 'gifts', label: 'Gifts' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-sans-body tracking-wider uppercase transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#581C25] text-white'
                    : 'bg-white text-stone-700 hover:bg-[#F3ECE1] border border-[#EFE8DC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacious 2-Column or 4-Column Product Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE8DC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#581C25] block font-sans-body">
                    {item.type}
                  </span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 group-hover:text-[#581C25] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                <span className="font-serif-editorial text-xl font-bold text-[#581C25]">
                  {item.price}
                </span>
                <button
                  onClick={() => setActiveTab(item.ctaTab)}
                  className="bg-[#581C25] hover:bg-[#3B1017] text-white px-6 py-2.5 rounded-full text-xs font-sans-body font-medium uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
