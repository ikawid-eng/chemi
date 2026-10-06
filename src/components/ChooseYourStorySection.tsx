import React from 'react';
import { ArrowRight, Sparkles, Flower2, Heart } from 'lucide-react';
import { NavigationTab } from '../types';

interface ChooseYourStorySectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const ChooseYourStorySection: React.FC<ChooseYourStorySectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            Two Product Experiences
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
            How do you want to keep the story?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
            Choose between creating a personalized custom gift with CHEMI Beads, or preserving a meaningful flower keepsake in CHEMI Silver.
          </p>
        </div>

        {/* Two Major Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* 11.1 CHEMI BEADS Card */}
          <div className="bg-[#FAF7F2] border-2 border-[#EFE8DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
            
            {/* Soft decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3ECE1] rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#581C25] bg-[#F3ECE1] px-3 py-1 rounded-full border border-[#EFE8DC]">
                  Create a Gift
                </span>
                <span className="font-serif-editorial text-lg text-[#581C25] font-semibold">
                  From Rp 189.000
                </span>
              </div>

              <div>
                <h3 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017] tracking-tight">
                  CHEMI BEADS
                </h3>
                <p className="text-sm font-semibold text-[#581C25] mt-1 italic">
                  "Make something that feels like them."
                </p>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed font-sans-body">
                Pilih warna, beads, dan detail yang terasa seperti mereka. Ubah warna favorit, suasana hati, atau pesan rahasia menjadi perhiasan buatan tangan yang unik.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#EFE8DC]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Suitable For:</span>
                <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                  {['Birthday', 'Friendship', 'Appreciation', 'Everyday Gifts', 'Little Milestones'].map((tag) => (
                    <span key={tag} className="bg-white border border-[#EFE8DC] px-2.5 py-1 rounded-md text-[11px] font-medium">
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Visual */}
              <div className="rounded-2xl overflow-hidden border border-[#EFE8DC] shadow-sm my-4">
                <img
                  src="https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=800&auto=format&fit=crop"
                  alt="CHEMI Beads bracelet"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => setActiveTab('beads-customizer')}
                className="w-full py-4 bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] rounded-2xl font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Create Your Beads →</span>
              </button>
            </div>

          </div>

          {/* 11.2 CHEMI SILVER Card */}
          <div className="bg-[#0F0E0E] text-[#FAF7F2] border-2 border-stone-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#581C25] transition-all relative overflow-hidden group">
            
            {/* Deep maroon background gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B1017] rounded-full blur-3xl opacity-60 -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] bg-[#3B1017] px-3 py-1 rounded-full border border-stone-800">
                  Preserve a Memory
                </span>
                <span className="font-serif-editorial text-lg text-[#C5A059] font-semibold">
                  From Rp 349.000
                </span>
              </div>

              <div>
                <h3 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  CHEMI SILVER
                </h3>
                <p className="text-sm font-semibold text-[#C5A059] mt-1 italic">
                  "Some flowers deserve more than a vase."
                </p>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed font-sans-body">
                Bawa bunga dari momen yang berarti dan ubah menjadi keepsake jewelry 925 Sterling Silver. Simpan kelopak bunga pernikahan, kelopak wisuda, atau bunga pemberian kenangan selamanya.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Suitable For:</span>
                <div className="flex flex-wrap gap-2 text-xs text-stone-300">
                  {['Wedding Bouquet', 'Graduation Flowers', 'Anniversary', 'Special Celebrations', 'Meaningful Memories'].map((tag) => (
                    <span key={tag} className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md text-[11px] font-medium text-stone-300">
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Visual */}
              <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-sm my-4">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
                  alt="CHEMI Silver flower pendant"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => setActiveTab('silver-customizer')}
                className="w-full py-4 bg-[#581C25] hover:bg-[#7A2834] text-[#FAF7F2] rounded-2xl font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer border border-[#7A2834]"
              >
                <Flower2 className="w-4 h-4 text-[#C5A059]" />
                <span>Preserve Your Flower →</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
