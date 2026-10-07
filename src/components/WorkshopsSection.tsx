import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface WorkshopsSectionProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'workshops' | 'private' | 'campus' | 'community'>('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'private', label: 'Private Events' },
    { id: 'campus', label: 'Campus Activities' },
    { id: 'community', label: 'Community Events' },
  ];

  const featuredWorkshop = {
    title: 'Botanical Bead & Flower Masterclass',
    date: 'Saturday, 18 October 2026',
    time: '13:00 - 16:00 WIB',
    location: 'CHEMI Studio, Senopati, South Jakarta',
    price: 'IDR 350,000 / person',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    desc: 'Hands-on weekend session learning color harmony, freshwater pearl selection, and crafting custom bead flower jewelry.',
  };

  const activities = [
    {
      id: 'act-1',
      title: 'Bridal Party Private Crafting Session',
      type: 'Private Events',
      date: 'By Appointment',
      location: 'CHEMI Studio',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'act-2',
      title: 'Graduation Flower Preservation Gathering',
      type: 'Campus Activities',
      date: 'Monthly Pop-up',
      location: 'Jakarta Campus Hubs',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'act-3',
      title: 'Story Keepers Seasonal Design Meetup',
      type: 'Community Events',
      date: 'Last Sunday of the Month',
      location: 'CHEMI Garden Terrace',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="workshops-section" className="py-24 lg:py-36 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-[11px] font-sans-body font-semibold tracking-widest uppercase text-[#581C25]">
            Experience CHEMI
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
            Don’t Just Wear It. Make It.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans-body max-w-xl mx-auto">
            CHEMI bukan hanya tentang perhiasan yang kamu beli. Kami juga menciptakan pengalaman untuk membuatnya bersama.
          </p>
        </div>

        {/* Featured Prominent Workshop */}
        <div className="bg-white rounded-3xl border border-[#EFE8DC] shadow-lg overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto overflow-hidden bg-stone-100">
            <img
              src={featuredWorkshop.image}
              alt={featuredWorkshop.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] text-[#581C25] font-bold uppercase tracking-widest block font-sans-body">
                FEATURED WORKSHOP
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                {featuredWorkshop.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-body">
                {featuredWorkshop.desc}
              </p>

              <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-700 font-sans-body">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#581C25]" />
                  <span>{featuredWorkshop.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#581C25]" />
                  <span>{featuredWorkshop.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#581C25]" />
                  <span>{featuredWorkshop.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Investment</span>
                <span className="font-serif-editorial text-xl font-bold text-[#581C25]">{featuredWorkshop.price}</span>
              </div>
              <button
                onClick={() => setActiveTab('our-story')}
                className="bg-[#581C25] hover:bg-[#3B1017] text-white px-6 py-3 rounded-full text-xs font-sans-body font-medium uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View Workshop</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Category Activities */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#EFE8DC] pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-sans-body tracking-wider uppercase transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#581C25] text-white'
                    : 'text-stone-700 hover:bg-[#F3ECE1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 border border-[#EFE8DC] space-y-4">
                <div className="h-44 rounded-xl overflow-hidden bg-stone-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-[#581C25] uppercase tracking-widest block font-sans-body">
                  {item.type}
                </span>
                <h4 className="font-serif-editorial text-xl font-bold text-stone-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 font-sans-body">
                  {item.date} • {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
