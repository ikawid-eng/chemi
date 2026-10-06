/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab, CartItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

// Homepage Sections
import { HeroSection } from './components/HeroSection';
import { ChooseYourStorySection } from './components/ChooseYourStorySection';
import { YourFlowerOrOursSection } from './components/YourFlowerOrOursSection';
import { GiftExperienceSection } from './components/GiftExperienceSection';
import { MomentsToGiveSection } from './components/MomentsToGiveSection';
import { StoryBehindSection } from './components/StoryBehindSection';

// Page Views
import { BeadsCustomizer } from './components/BeadsCustomizer';
import { SilverCustomizer } from './components/SilverCustomizer';
import { FlowerSubmissionGuide } from './components/FlowerSubmissionGuide';
import { GiftGuidePage } from './components/GiftGuidePage';
import { OurStoryPage } from './components/OurStoryPage';
import { StoriesGalleryPage } from './components/StoriesGalleryPage';

// Icons
import { ArrowRight, Flower2, Gift, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'demo-1',
      type: 'silver',
      title: 'The Memory Pendant',
      subtitle: '925 Sterling Silver • Botanical Bloom Charm',
      price: 429000,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      details: {
        jewelryType: 'CHEMI Silver Necklace',
        colorsOrModel: 'The Memory Pendant',
        beadsOrCharm: 'Botanical Bloom Charm',
        flowerSource: "Customer's Own Flower (University Graduation)",
        requiresFlowerSubmission: true,
        giftNote: 'For Maya on her Graduation Day.',
      },
      quantity: 1,
    },
  ]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [giftNote, setGiftNote] = useState<string>('');

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const handleProceedToCheckout = (note: string) => {
    setGiftNote(note);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col font-sans-body selection:bg-[#581C25] selection:text-[#FAF7F2]">
      
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        
        {/* TAB 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 01. HERO & 02. ABOUT CHEMI */}
            <HeroSection setActiveTab={setActiveTab} />

            {/* 03. CHOOSE YOUR STORY (CHEMI Beads vs CHEMI Silver) */}
            <ChooseYourStorySection setActiveTab={setActiveTab} />

            {/* 06. YOUR FLOWER OR OURS? */}
            <YourFlowerOrOursSection setActiveTab={setActiveTab} />

            {/* 07. THE CHEMI GIFT EXPERIENCE */}
            <GiftExperienceSection />

            {/* 08. MOMENTS TO GIVE (Occasion Guide) */}
            <MomentsToGiveSection setActiveTab={setActiveTab} />

            {/* 09. STORY BEHIND YOUR CHEMI */}
            <StoryBehindSection setActiveTab={setActiveTab} />

            {/* 10. FINAL HOMEPAGE CTA */}
            <section className="py-20 bg-[#3B1017] text-[#FAF7F2] text-center relative overflow-hidden border-t border-[#581C25]">
              <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#581C25] px-3.5 py-1 rounded-full border border-stone-800">
                  Jewelry Made to Keep a Story
                </span>
                <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold leading-tight">
                  Give a Story. Wear the Memory.
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
                  Turn a meaningful moment, relationship, or preserved flower into something you can wear, give, and keep forever.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setActiveTab('beads-customizer')}
                    className="bg-[#581C25] hover:bg-[#7A2834] text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-[#7A2834]"
                  >
                    <span>Create Custom Beads Gift</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                  <button
                    onClick={() => setActiveTab('silver-customizer')}
                    className="bg-stone-900 hover:bg-black text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-stone-800"
                  >
                    <Flower2 className="w-4 h-4 text-[#C5A059]" />
                    <span>Preserve Flower Memory</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: CHEMI BEADS CUSTOMIZER */}
        {activeTab === 'beads-customizer' && (
          <div className="animate-in fade-in duration-300">
            <BeadsCustomizer
              onAddToCart={handleAddToCart}
              onOpenCart={() => setCartOpen(true)}
            />
          </div>
        )}

        {/* TAB 3: CHEMI SILVER KEEPSAKE STUDIO */}
        {activeTab === 'silver-customizer' && (
          <div className="animate-in fade-in duration-300">
            <SilverCustomizer
              onAddToCart={handleAddToCart}
              onOpenCart={() => setCartOpen(true)}
              onOpenFlowerGuide={() => setActiveTab('flower-guide')}
            />
          </div>
        )}

        {/* TAB 4: FLOWER SUBMISSION GUIDE */}
        {activeTab === 'flower-guide' && (
          <div className="animate-in fade-in duration-300">
            <FlowerSubmissionGuide setActiveTab={setActiveTab} />
          </div>
        )}

        {/* TAB 5: GIFT GUIDE */}
        {activeTab === 'gift-guide' && (
          <div className="animate-in fade-in duration-300">
            <GiftGuidePage setActiveTab={setActiveTab} />
          </div>
        )}

        {/* TAB 6: OUR STORY */}
        {activeTab === 'our-story' && (
          <div className="animate-in fade-in duration-300">
            <OurStoryPage setActiveTab={setActiveTab} />
          </div>
        )}

        {/* TAB 7: STORIES GALLERY */}
        {activeTab === 'stories-gallery' && (
          <div className="animate-in fade-in duration-300">
            <StoriesGalleryPage setActiveTab={setActiveTab} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onUpdateQuantity={handleUpdateQuantity}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        giftNote={giftNote}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
