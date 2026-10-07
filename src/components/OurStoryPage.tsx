import React from 'react';
import { Sparkles, Heart, ShieldCheck, MapPin, ArrowRight, Flower2 } from 'lucide-react';
import { NavigationTab } from '../types';

interface OurStoryPageProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ setActiveTab }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-stone-900 pt-8 pb-24 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F3ECE1] border border-[#EFE8DC] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#581C25]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>The History of CHEMI</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#3B1017] uppercase">
            ABOUT CHEMI — OUR HISTORY & STORY
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Founded in Jakarta with a simple belief: <strong className="text-[#581C25]">Some moments are too precious to let fade away.</strong>
          </p>
        </div>

        {/* Origin Story Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3 py-1 rounded-full border border-[#EFE8DC]">
              HOW CHEMI BEGAN
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3B1017] leading-tight">
              From Handcrafted Bead Bracelets to 925 Silver Flower Preservation
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans-body">
              <p>
                CHEMI bermula dari satu momen wisuda sederhana di Jakarta. Saat melihat buket bunga indah pemberian sahabat mulai layu beberapa hari kemudian, kami menyadari betapa sedihnya ketika simbol dari pencapaian dan kasih sayang harus berakhir di tempat sampah.
              </p>
              <p>
                Dari sana, tim studio CHEMI mulai bereksperimen dengan metode pengeringan bunga organik dan enkapsulasi resin bening. Kami menggabungkannya dengan perak murni <strong className="text-[#581C25]">925 Sterling Silver</strong> serta kristal beads mutiara air tawar.
              </p>
              <p>
                Kini, CHEMI telah membantu lebih dari 10.000 pelanggan mengabadikan kelopak bunga wisuda, buket pernikahan, dan memori hubungan menjadi perhiasan yang bisa dipakai dan disimpan selamanya.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#EFE8DC] shadow-xl bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
              alt="CHEMI History Craftsmanship"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>

        {/* CHEMI Craftsmanship Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DC] space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F3ECE1] flex items-center justify-center text-[#581C25] font-serif font-bold text-xl">
              1
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3B1017]">Organic Flower Drying</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
              Metode pengeringan silica khusus yang mempertahankan warna asli kelopak bunga tanpa merusak serat keindahannya.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DC] space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F3ECE1] flex items-center justify-center text-[#581C25] font-serif font-bold text-xl">
              2
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3B1017]">925 Sterling Silver</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
              Frame perhiasan terbuat dari perak murni 925 hypoallergenic yang tahan lama dan aman dipakai sehari-hari.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DC] space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#F3ECE1] flex items-center justify-center text-[#581C25] font-serif font-bold text-xl">
              3
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3B1017]">Personal Story Card</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
              Setiap karya dilengkapi kartu ucapan dan narasi cerita momen yang ditulis khusus untuk penerima.
            </p>
          </div>
        </div>

        {/* Studio Visit Banner */}
        <div className="bg-[#3B1017] text-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#581C25] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#581C25] px-3.5 py-1 rounded-full border border-stone-800">
              Visit CHEMI Studio
            </span>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold leading-tight">
              Visit Our Jakarta Studio in Senopati
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Senopati, Kebayoran Baru, Jakarta Selatan. Open Tuesday - Sunday, 10:00 - 18:00 WIB.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('collections')}
            className="bg-[#581C25] hover:bg-[#7A2834] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 border border-[#7A2834] shrink-0"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </div>
  );
};
