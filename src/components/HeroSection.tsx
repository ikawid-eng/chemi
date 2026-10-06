import React from 'react';
import { ArrowRight, Sparkles, Heart, Flower2, Shield } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeroSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:py-20">
      
      {/* Decorative subtle background gradient shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F3ECE1] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E8DCCB] blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-[#F3ECE1] border border-[#EFE8DC] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#581C25] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Jewelry Made to Keep a Story</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-editorial text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#3B1017] leading-[1.08]">
              Give a Story. <br />
              <span className="italic font-normal text-[#581C25]">Wear the Memory.</span>
            </h1>

            {/* Supporting Indonesian Copy */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans-body">
              Perhiasan yang dibuat untuk diberikan, dikenang, dan dipakai membawa sebuah cerita.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveTab('beads-customizer')}
                className="w-full sm:w-auto bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <span>Create Your Gift</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('silver-customizer')}
                className="w-full sm:w-auto bg-stone-900 hover:bg-black text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-md transition-all group cursor-pointer border border-stone-800"
              >
                <Flower2 className="w-4 h-4 text-[#C5A059]" />
                <span>Preserve Your Flower</span>
              </button>
            </div>

            {/* Highlights */}
            <div className="pt-8 border-t border-[#EFE8DC] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="font-serif-editorial text-2xl font-bold text-[#581C25]">100%</span>
                <p className="text-[11px] text-stone-600 uppercase tracking-wider mt-0.5">Custom Story Crafted</p>
              </div>
              <div>
                <span className="font-serif-editorial text-2xl font-bold text-[#581C25]">925</span>
                <p className="text-[11px] text-stone-600 uppercase tracking-wider mt-0.5">Sterling Silver Keepsakes</p>
              </div>
              <div>
                <span className="font-serif-editorial text-2xl font-bold text-[#581C25]">10,000+</span>
                <p className="text-[11px] text-stone-600 uppercase tracking-wider mt-0.5">Memories Preserved</p>
              </div>
            </div>

          </div>

          {/* Right Hero Editorial Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
                  alt="CHEMI Silver flower pendant keepsake"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Caption inside main image */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                    CHEMI Silver • Keepsake Memory
                  </span>
                  <h3 className="font-serif-editorial text-xl font-bold">Graduation Petals Crystallized in Silver</h3>
                  <p className="text-xs text-stone-300">Preserved forever from her degree celebration bouquet.</p>
                </div>
              </div>

              {/* Secondary Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#EFE8DC] hidden sm:flex items-center gap-3 max-w-xs animate-bounce-subtle">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=300&auto=format&fit=crop"
                    alt="CHEMI Beads bracelet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#581C25] uppercase tracking-wider">CHEMI Beads Gift</span>
                  <p className="text-xs font-semibold text-stone-800">Freshwater Pearl & Blush Rose</p>
                  <p className="text-[10px] text-stone-500">"For my best friend's birthday"</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* About CHEMI Section (PRD Section 10) */}
      <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-[1px] bg-[#581C25] mx-auto" />
        <span className="text-xs uppercase tracking-widest font-semibold text-[#581C25]">About CHEMI</span>
        <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3B1017]">
          More Than Jewelry. A Story You Can Give.
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans-body">
          <p>
            CHEMI hadir dari satu hal sederhana: <strong className="text-[#581C25] font-semibold">Beberapa momen terlalu berarti untuk hanya dikenang.</strong>
          </p>
          <p>
            Karena itu, CHEMI menciptakan pengalaman untuk mengubah sebuah cerita menjadi perhiasan. Cerita tersebut bisa hadir melalui warna, pilihan beads, bunga, hubungan, pencapaian, atau sebuah momen yang ingin disimpan lebih lama.
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => setActiveTab('our-story')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#581C25] hover:text-[#3B1017] border-b border-[#581C25] pb-1 transition-colors"
          >
            <span>Discover CHEMI Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </section>
  );
};
