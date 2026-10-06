import React from 'react';
import { Flower2, Send, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { NavigationTab } from '../types';

interface YourFlowerOrOursSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const YourFlowerOrOursSection: React.FC<YourFlowerOrOursSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-20 bg-[#0F0E0E] text-[#FAF7F2] relative overflow-hidden border-t border-stone-800">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#3B1017] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#581C25] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
            CHEMI Silver Feature
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white">
            Your Flower or Ours?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-sans-body">
            Whether you bring petals from your own cherished event or select from our studio botanical garden, every piece is hand-preserved in 925 silver.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Option A: Bring Your Own Flower */}
          <div className="bg-[#161515] rounded-3xl p-8 sm:p-10 border border-stone-800 hover:border-[#581C25] transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#3B1017] text-[#C5A059] flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">Option A</span>
                <h3 className="font-serif-editorial text-3xl font-bold text-white mt-0.5">
                  Bring Your Own Flower
                </h3>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans-body">
                Bawa bunga dari hari spesialmu dan kami akan mengolahnya menjadi bagian dari perhiasanmu. Tim ahli preservasi CHEMI akan mengeringkan, menstabilkan, dan merangkum kelopak bungamu ke dalam perak murni.
              </p>

              <div className="space-y-2 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <span className="font-semibold text-[#C5A059] block">Ideal for memories like:</span>
                <ul className="grid grid-cols-2 gap-2 text-[11px]">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Wedding bouquet</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Graduation bouquet</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Anniversary roses</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Milestone celebration</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('silver-customizer')}
                className="w-full py-3.5 bg-[#581C25] hover:bg-[#7A2834] text-[#FAF7F2] rounded-2xl font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Send Your Flower →</span>
              </button>
            </div>
          </div>

          {/* Option B: Choose From CHEMI */}
          <div className="bg-[#161515] rounded-3xl p-8 sm:p-10 border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-900 text-[#C5A059] flex items-center justify-center border border-stone-800">
                <Flower2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Option B</span>
                <h3 className="font-serif-editorial text-3xl font-bold text-white mt-0.5">
                  Choose From CHEMI
                </h3>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans-body">
                Tidak punya bunga sendiri? Pilih bunga dari koleksi CHEMI (Pure White Rose, Baby's Breath, French Lavender, Hydrangea, Marigold) dan biarkan tim kami membantu menciptakan perhiasan yang sesuai dengan ceritamu.
              </p>

              <div className="space-y-2 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <span className="font-semibold text-[#C5A059] block">Curated CHEMI Botanical Collection:</span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Pure White Rose', 'Baby’s Breath', 'French Lavender', 'Blue Hydrangea', 'Golden Marigold'].map(f => (
                    <span key={f} className="bg-stone-900 border border-stone-800 px-2 py-0.5 rounded text-stone-300">
                      • {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('silver-customizer')}
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-[#FAF7F2] rounded-2xl font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 border border-stone-800 transition-all cursor-pointer"
              >
                <span>Choose Our Flower →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quick Link to Flower Guide */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveTab('flower-guide')}
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-400 hover:text-[#C5A059] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="underline">Read full flower preparation & submission requirements guide</span>
          </button>
        </div>

      </div>
    </section>
  );
};
