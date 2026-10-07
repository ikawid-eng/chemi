import React, { useState } from 'react';
import { Instagram, Facebook, Send, ArrowRight, Heart } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#1C070C] text-[#FAF7F2] border-t border-white/10 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        
        {/* Main Grid (Exact as image.png footer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Logo & Info */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-serif-editorial text-3xl sm:text-4xl font-bold tracking-[0.2em] text-white uppercase block">
              CHEMI
            </span>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Perhiasan yang dibuat untuk menyimpan momen, memberikan makna, dan membawa sebuah cerita lebih dekat denganmu.
            </p>
            <p className="text-[10px] text-stone-400 tracking-wider uppercase">
              Jakarta Studio • Senopati, Kebayoran Baru
            </p>
          </div>

          {/* Center Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              QUICK NAVIGATION
            </h5>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-stone-300">
              <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Shop</button>
              <button onClick={() => setActiveTab('beads-customizer')} className="hover:text-white transition-colors">CHEMI Beads</button>
              <button onClick={() => setActiveTab('silver-customizer')} className="hover:text-white transition-colors">CHEMI Silver</button>
              <button onClick={() => setActiveTab('our-story')} className="hover:text-white transition-colors">Workshops</button>
              <button onClick={() => setActiveTab('our-story')} className="hover:text-white transition-colors">About Us</button>
            </div>
          </div>

          {/* Right Newsletter Input (Exact line style from image.png) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              JOIN OUR NEWSLETTER
            </h5>
            
            {subscribed ? (
              <p className="text-xs text-[#C5A059] font-medium">Thank you for joining CHEMI Story Reminders.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 pb-2 pt-1 text-xs text-white placeholder:text-stone-500 outline-none focus:border-[#C5A059]"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 hover:text-[#C5A059] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Cursive Quote (Exact from image.png) */}
            <p className="font-serif-editorial italic text-stone-300 text-sm tracking-wider">
              More than just jewelry ♡
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} CHEMI Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('flower-guide')} className="hover:underline">Flower Guide</button>
            <button onClick={() => setActiveTab('gift-guide')} className="hover:underline">Gift Guide</button>
            <button onClick={() => setActiveTab('stories-gallery')} className="hover:underline">Customer Stories</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
