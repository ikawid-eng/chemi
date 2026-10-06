import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Sparkles, Flower2 } from 'lucide-react';
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

  const navItems: { id: NavigationTab; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'beads-customizer', label: 'CHEMI Beads' },
    { id: 'silver-customizer', label: 'CHEMI Silver', badge: 'Keepsakes' },
    { id: 'flower-guide', label: 'Flower Guide' },
    { id: 'gift-guide', label: 'Gift Guide' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'stories-gallery', label: 'Stories' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#581C25] text-[#FAF7F2] text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
        <span>Free Worldwide Story Gift Packaging & Complimentary Personal Greeting Card</span>
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE8DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#581C25] hover:bg-[#F3ECE1] rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 rounded-full bg-[#581C25] flex items-center justify-center text-[#FAF7F2] font-serif text-lg font-bold shadow-sm">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-2xl font-bold tracking-widest text-[#581C25] uppercase leading-tight">
                CHEMI
              </span>
              <span className="text-[10px] tracking-widest text-stone-500 uppercase font-medium">
                Made to Keep a Story
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-xs font-medium tracking-wider uppercase transition-all relative flex items-center gap-1.5 rounded-full ${
                    isActive
                      ? 'text-[#581C25] bg-[#F3ECE1] font-semibold'
                      : 'text-stone-700 hover:text-[#581C25] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] bg-[#581C25] text-white px-1.5 py-0.5 rounded-full font-sans tracking-normal">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#581C25] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-stone-700 hover:text-[#581C25] hover:bg-[#F3ECE1] rounded-full transition-colors"
              title="Search stories & products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Action: Customizer Trigger */}
            <button
              onClick={() => setActiveTab('beads-customizer')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium bg-[#581C25] text-[#FAF7F2] px-3.5 py-2 rounded-full hover:bg-[#3B1017] transition-all shadow-sm"
            >
              <Flower2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Create Gift</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2.5 text-stone-700 hover:text-[#581C25] hover:bg-[#F3ECE1] rounded-full transition-colors relative"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-[#581C25] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#FAF7F2]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Overlay Dropdown */}
        {searchOpen && (
          <div className="bg-[#FAF7F2] border-b border-[#EFE8DC] px-4 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-2xl mx-auto flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-[#EFE8DC] shadow-inner">
              <Search className="w-5 h-5 text-stone-400 shrink-0" />
              <input
                type="text"
                placeholder="Search by occasion (e.g., Graduation, Wedding, Birthday) or flower..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent outline-none text-stone-800 placeholder:text-stone-400"
                autoFocus
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-stone-400 hover:text-stone-600">
                  Clear
                </button>
              )}
            </div>
            <div className="max-w-2xl mx-auto mt-2 flex items-center justify-between text-xs text-stone-500 px-2">
              <span>Popular searches:</span>
              <div className="flex gap-2">
                <button onClick={() => { setActiveTab('gift-guide'); setSearchOpen(false); }} className="hover:underline text-[#581C25]">Graduation Flowers</button>
                <button onClick={() => { setActiveTab('silver-customizer'); setSearchOpen(false); }} className="hover:underline text-[#581C25]">Wedding Bouquet Keepsake</button>
                <button onClick={() => { setActiveTab('beads-customizer'); setSearchOpen(false); }} className="hover:underline text-[#581C25]">Custom Bead Bracelet</button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EFE8DC] px-4 py-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 text-sm font-medium tracking-wider uppercase rounded-xl transition-all flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-[#581C25] text-white'
                      : 'text-stone-800 hover:bg-[#F3ECE1]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-[#C5A059] text-stone-900 px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EFE8DC] flex flex-col gap-2">
              <button
                onClick={() => {
                  setActiveTab('beads-customizer');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 bg-[#581C25] text-white rounded-xl font-medium text-xs tracking-wider uppercase shadow-sm"
              >
                Create Custom Beads Gift
              </button>
              <button
                onClick={() => {
                  setActiveTab('silver-customizer');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 bg-stone-900 text-white rounded-xl font-medium text-xs tracking-wider uppercase shadow-sm"
              >
                Preserve Flower in Silver
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
