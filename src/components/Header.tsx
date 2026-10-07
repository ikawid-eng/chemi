import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, User } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Top Value Banner */}
      <div className="bg-[#2D0A10] text-[#FAF7F2] text-[10px] sm:text-xs py-2 px-4 text-center tracking-[0.2em] uppercase font-sans-body border-b border-white/10 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#C5A059] shrink-0" />
        <span>Complimentary Story Gift Packaging & Personal Greeting Card with Every Creation</span>
        <Sparkles className="w-3 h-3 text-[#C5A059] shrink-0" />
      </div>

      {/* Main Transparent Header Overlay */}
      <header className="sticky top-0 z-50 bg-[#1C070C]/95 backdrop-blur-md text-[#FAF7F2] border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Wordmark (Left) */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="flex flex-col">
              <span className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white uppercase leading-none group-hover:text-[#C5A059] transition-colors">
                CHEMI
              </span>
              <span className="text-[8px] tracking-[0.25em] text-stone-400 uppercase font-sans-body mt-1">
                Jewelry Made to Keep a Story
              </span>
            </div>
          </div>

          {/* Centered Spaced Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 xl:space-x-10">
            <button
              onClick={() => setActiveTab('home')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'home' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Shop
              {activeTab === 'home' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]" />}
            </button>

            <button
              onClick={() => setActiveTab('collections')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'collections' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Collections
              {activeTab === 'collections' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]" />}
            </button>

            <button
              onClick={() => setActiveTab('beads-customizer')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'beads-customizer' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              CHEMI Beads
            </button>

            <button
              onClick={() => setActiveTab('silver-customizer')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'silver-customizer' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              CHEMI Silver
            </button>

            <button
              onClick={() => setActiveTab('workshops')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'workshops' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Workshops
            </button>

            <button
              onClick={() => setActiveTab('our-story')}
              className={`text-xs font-sans-body tracking-[0.2em] uppercase transition-colors relative py-1 ${
                activeTab === 'our-story' ? 'text-white font-semibold' : 'text-stone-300 hover:text-white'
              }`}
            >
              About
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 text-stone-300 hover:text-white transition-colors"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCart}
              className="p-1.5 text-stone-300 hover:text-white transition-colors relative flex items-center gap-1.5"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[10px] font-sans-body text-[#C5A059] font-bold">
                ({cartCount})
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white hover:text-stone-300 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="bg-[#2D0A10] border-b border-white/10 px-4 py-3 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-xl mx-auto flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/20">
              <Search className="w-4 h-4 text-stone-400 shrink-0" />
              <input
                type="text"
                placeholder="Search collections, graduation flowers, wedding keepsakes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-transparent outline-none text-white placeholder:text-stone-400 font-sans-body"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1C070C] border-b border-white/10 px-6 py-6 space-y-3">
            <div className="flex flex-col space-y-3 text-xs tracking-[0.2em] font-sans-body uppercase">
              <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">Shop</button>
              <button onClick={() => { setActiveTab('collections'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">Collections</button>
              <button onClick={() => { setActiveTab('beads-customizer'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">CHEMI Beads</button>
              <button onClick={() => { setActiveTab('silver-customizer'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">CHEMI Silver</button>
              <button onClick={() => { setActiveTab('workshops'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">Workshops</button>
              <button onClick={() => { setActiveTab('our-story'); setMobileMenuOpen(false); }} className="text-left py-1 text-stone-200 hover:text-white">About Us</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
