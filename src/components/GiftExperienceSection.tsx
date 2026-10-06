import React from 'react';
import { Gift, Heart, Sparkles, PackageCheck, Award } from 'lucide-react';

export const GiftExperienceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Story',
      description: 'Pilih momen atau hubungan yang ingin kamu abadikan.',
    },
    {
      step: '02',
      title: 'Create the Jewelry',
      description: 'Sesuaikan warna, beads, charm, atau kirimkan kelopak bungamu.',
    },
    {
      step: '03',
      title: 'We Make It',
      description: 'Tim pengrajin CHEMI merangkai perhiasanmu secara handmade.',
    },
    {
      step: '04',
      title: 'Give the Moment',
      description: 'Dikemas dengan signature maroon box & story card siap diberikan.',
    },
    {
      step: '05',
      title: 'Keep the Story',
      description: 'Ceritanya akan tetap hidup & dikenang sepanjang waktu.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            The CHEMI Gift Experience
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
            More Than a Gift. It's an Experience.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body">
            Dari saat pertama kamu memilih cerita hingga saat perhiasan ini dipakai, setiap langkah dirancang dengan penuh kehangatan.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-[#EFE8DC] shadow-xs relative flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <span className="font-serif-editorial text-4xl font-bold text-[#581C25]/20 group-hover:text-[#581C25] transition-colors">
                  {item.step}
                </span>
                <h3 className="font-serif-editorial text-xl font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                  {item.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#581C25]/30">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Packaging Callout Box */}
        <div className="mt-16 bg-[#F3ECE1] rounded-3xl p-8 sm:p-10 border border-[#EFE8DC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#581C25]">Signature Presentation</span>
            <h3 className="font-serif-editorial text-3xl font-bold text-[#3B1017]">
              Prepared as a Gift, Delivered with a Story.
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans-body">
              Setiap perhiasan CHEMI tiba dalam kotak kado Signature Maroon dengan aksen pita cream, dilapisi tissue halus, serta dilengkapi dengan <strong>Story Card</strong> yang berisi pesan personal atau asal-usul bunga kenanganmu.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-[#581C25] text-[#FAF7F2] p-6 rounded-2xl text-center space-y-2 shadow-lg max-w-xs w-full">
              <Gift className="w-8 h-8 text-[#C5A059] mx-auto" />
              <div className="font-serif-editorial text-xl font-bold">Maroon CHEMI Gift Box</div>
              <p className="text-[11px] text-stone-200">Included complimentary with every order</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
