import React from 'react';
import { NavigationTab } from '../types';
import { Sparkles, Heart, Flower2, Shield, ArrowRight } from 'lucide-react';

interface OurStoryPageProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ setActiveTab }) => {
  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            The Brand Philosophy
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
            More Than Jewelry. <br />
            <span className="italic font-normal text-[#581C25]">A Story You Can Give.</span>
          </h1>
        </div>

        {/* Hero Editorial Image */}
        <div className="rounded-3xl overflow-hidden border border-[#EFE8DC] shadow-xl h-80 sm:h-96 relative">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
            alt="CHEMI Brand Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 text-white">
            <div>
              <p className="font-serif-editorial text-2xl font-bold text-[#C5A059]">"Give a Story. Wear the Memory."</p>
              <p className="text-xs text-stone-200">Jewelry made to keep a story.</p>
            </div>
          </div>
        </div>

        {/* Manifesto Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFE8DC] shadow-sm space-y-6 text-stone-800 font-sans-body leading-relaxed text-sm sm:text-base">
          <p>
            CHEMI hadir dari satu hal sederhana: <strong className="text-[#581C25]">Beberapa momen terlalu berarti untuk hanya dikenang.</strong>
          </p>
          <p>
            Bunga wisuda yang kamu peluk erat di hari kelulusan, buket mawar pertama dari pasanganmu, atau gelang persahabatan yang kamu rangkai bersama sahabat terbaikmu — semua momen itu layak memiliki wujud fisik yang abadi.
          </p>
          <p>
            Karena itu, CHEMI menciptakan pengalaman untuk mengubah sebuah cerita menjadi perhiasan. Cerita tersebut bisa hadir melalui warna, pilihan beads, bunga, hubungan, pencapaian, atau sebuah momen yang ingin disimpan lebih lama.
          </p>

          <div className="pt-6 border-t border-[#EFE8DC] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-serif-editorial text-xl font-bold text-[#581C25]">01. CHEMI Beads</h3>
              <p className="text-xs text-stone-600">
                <strong>Create a Gift.</strong> Dipersonalisasi melalui kombinasi warna, freshwater pearl, dan aksen floral buatan tangan untuk kejutan yang menyentuh hati.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-editorial text-xl font-bold text-[#3B1017]">02. CHEMI Silver</h3>
              <p className="text-xs text-stone-600">
                <strong>Preserve a Memory.</strong> Kelopak bunga berarti yang dikeringkan dan dirangkum ke dalam liontin perak 925 Sterling Silver yang bertahan sepanjang waktu.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Brand Experience Principles */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#3B1017] text-center">
            Our Brand Experience Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: '1. Story before product', desc: 'Kami mengedepankan makna dibalik setiap karya sebelum detail teknis perhiasan.' },
              { title: '2. Gift before customization', desc: 'Kustomisasi hadir untuk membuat kado terasa jauh lebih personal bagi penerimanya.' },
              { title: '3. Emotion before transaction', desc: 'Pelanggan memahami mengapa perhiasan ini berharga sebelum melihat harganya.' },
              { title: '4. Curated, not unlimited', desc: 'CHEMI mengurasi setiap kombinasi untuk menjaga kualitas estetika luxury tertinggi.' },
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#EFE8DC] space-y-2">
                <h3 className="font-serif-editorial text-lg font-bold text-[#581C25]">{p.title}</h3>
                <p className="text-xs text-stone-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-[#EFE8DC] space-y-4">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#3B1017]">
            Start Your CHEMI Story Today.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('beads-customizer')}
              className="bg-[#581C25] hover:bg-[#3B1017] text-white px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-widest shadow-md transition-all"
            >
              Create Beads Gift
            </button>
            <button
              onClick={() => setActiveTab('silver-customizer')}
              className="bg-stone-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-widest shadow-md transition-all"
            >
              Preserve Flower in Silver
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
