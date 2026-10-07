import React from 'react';
import { Gift, ShieldCheck, Flower2, Heart } from 'lucide-react';

export const ValuePropsRow: React.FC = () => {
  const props = [
    {
      icon: Gift,
      title: 'FREE STORY PACKAGING',
      desc: 'On all creation orders',
    },
    {
      icon: ShieldCheck,
      title: '925 STERLING GUARANTEE',
      desc: 'Certified pure silver keepsakes',
    },
    {
      icon: Flower2,
      title: 'FLOWER SUBMISSION',
      desc: 'Fresh or dried bouquet petals',
    },
    {
      icon: Heart,
      title: 'HANDCRAFTED IN JAKARTA',
      desc: 'Created with heart & story',
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-[#EFE8DC] font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#EFE8DC]">
          {props.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex flex-col items-center text-center space-y-2 ${idx !== 0 ? 'md:pl-6' : ''}`}>
                <Icon className="w-5 h-5 text-[#581C25]" />
                <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-stone-900">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-500 font-sans-body">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
