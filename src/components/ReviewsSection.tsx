import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Star, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'st-1',
      name: 'Nadia Pratama',
      occasion: 'Graduation Memory',
      quote: 'Saya mengirimkan beberapa kelopak bunga dari buket kelulusan saya. CHEMI mengubahnya menjadi kalung CHEMI Silver yang sangat cantik. Momen wisuda ini bisa saya pakai setiap hari.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'st-2',
      name: 'Ananda & Kevin',
      occasion: 'Wedding Bouquet',
      quote: 'Bunga dari buket pernikahan kami preserved sempurna dalam liontin perak. Packaging-nya luar biasa mewah dengan kartu ucapan bertuliskan cerita kami.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'st-3',
      name: 'Clarissa Utami',
      occasion: 'Birthday Gift',
      quote: 'Sangat suka pengalaman custom CHEMI Beads! Saya merangkai gelang dengan kombinasi mutiara dan warna favorit sahabat saya. Hasilnya sangat personal.',
      image: 'https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0F0E0E] text-[#FAF7F2] relative overflow-hidden border-t border-stone-800">
      
      {/* Dark Silk Background Atmospheric Glow (Exact match to image.png dark bottom section) */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#3B1017]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Arrow Controls (Exact as image.png) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-[10px] font-sans-body font-bold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
              Customer Stories
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-white">
              Stories They Chose to Keep
            </h2>
          </div>

          {/* Top Right Arrow Controls (Exact as image.png) */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveStory(Math.max(0, activeStory - 1))}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-md border border-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveStory(Math.min(stories.length - 1, activeStory + 1))}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-md border border-white/10 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* White Rounded Story Cards Grid (Matching image.png cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item) => (
            <div
              key={item.id}
              className="bg-white text-stone-900 rounded-3xl p-6 border border-stone-200 shadow-2xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 font-sans-body">
                    Categories: {item.occasion}
                  </span>
                  <div className="flex items-center text-[#C5A059] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="h-52 rounded-2xl overflow-hidden bg-stone-100">
                  <img src={item.image} alt={item.occasion} className="w-full h-full object-cover" />
                </div>

                <p className="text-stone-700 text-xs leading-relaxed italic font-sans-body">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="font-serif-editorial font-bold text-stone-900 text-base">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#581C25] font-bold uppercase tracking-widest">
                  Verified Keeper
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
