import React from 'react';
import { Heart, Sparkles, Send, ShieldCheck, Truck, Clock } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#3B1017] text-[#FAF7F2] border-t border-[#581C25]">
      {/* Value Proposition Highlights */}
      <div className="border-b border-white/10 bg-[#290B0F]/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-[#581C25] flex items-center justify-center text-[#C5A059] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-editorial text-lg font-semibold text-[#FAF7F2]">Every Piece Has a Story</h4>
              <p className="text-xs text-stone-300 mt-0.5">Customized details and flower keepsake preservation created with heart.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-[#581C25] flex items-center justify-center text-[#C5A059] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-editorial text-lg font-semibold text-[#FAF7F2]">925 Sterling Silver Guarantee</h4>
              <p className="text-xs text-stone-300 mt-0.5">Authentic silver hardware with protective botanical encapsulation.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-[#581C25] flex items-center justify-center text-[#C5A059] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-editorial text-lg font-semibold text-[#FAF7F2]">Safe Flower Pickup & Delivery</h4>
              <p className="text-xs text-stone-300 mt-0.5">Guided courier intake instructions for fresh or dried memory blooms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#3B1017] font-serif font-bold text-base flex items-center justify-center">
                C
              </div>
              <span className="font-serif-editorial text-3xl font-bold tracking-widest text-[#FAF7F2]">
                CHEMI
              </span>
            </div>
            <p className="font-serif-editorial text-lg text-[#C5A059] italic">
              "Give a Story. Wear the Memory."
            </p>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Perhiasan yang dibuat untuk diberikan, dikenang, dan dipakai membawa sebuah cerita.
              Ubah momen, hubungan, atau bunga spesialmu menjadi kenangan abadi yang indah.
            </p>
            <div className="pt-2 text-xs text-stone-400">
              <p>Jakarta Studio • Custom Handmade & Keepsake Crafting</p>
            </div>
          </div>

          {/* Column 2: Product Experiences */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">The Experiences</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => setActiveTab('beads-customizer')} className="hover:text-[#C5A059] transition-colors">
                  CHEMI Beads Customizer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('silver-customizer')} className="hover:text-[#C5A059] transition-colors">
                  CHEMI Silver Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('flower-guide')} className="hover:text-[#C5A059] transition-colors">
                  Bring Your Own Flower Guide
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Occasion Gift Guide
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('stories-gallery')} className="hover:text-[#C5A059] transition-colors">
                  Story Behind Your CHEMI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Occasion Collections */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">Gifting Occasions</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Graduation Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Wedding Bouquet Jewelry
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Birthday & Friendship Gifts
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Anniversary Memories
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gift-guide')} className="hover:text-[#C5A059] transition-colors">
                  Self-Milestone Keepsakes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Flower Keepsake Newsletter */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">Story Reminders</h5>
            <p className="text-xs text-stone-300">
              Subscribe to receive story gift ideas, seasonal flower preservation tips, and exclusive secret drops.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to CHEMI Story Reminders!'); }} className="space-y-2">
              <div className="flex bg-white/10 rounded-lg p-1 border border-white/20 focus-within:border-[#C5A059]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent px-3 py-1.5 text-xs text-white placeholder:text-stone-400 outline-none w-full"
                  required
                />
                <button type="submit" className="bg-[#C5A059] text-[#3B1017] px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-amber-300 transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} CHEMI Jewelry. All rights reserved. Jewelry Made to Keep a Story.</p>
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Experience</span>
            <span className="hover:underline cursor-pointer">Care Instructions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
