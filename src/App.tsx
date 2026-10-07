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
import { WhatIsChemiSection } from './components/WhatIsChemiSection';
import { ManifestoBannerSection } from './components/ManifestoBannerSection';
import { ValuePropsRow } from './components/ValuePropsRow';
import { GiftExperienceSection } from './components/GiftExperienceSection';
import { YourFlowerOrOursSection } from './components/YourFlowerOrOursSection';
import { CatalogSection } from './components/CatalogSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GiftSection } from './components/GiftSection';
import { ContactSection } from './components/ContactSection';

// Page Views
import { CollectionsPage } from './components/CollectionsPage';
import { WorkshopsPage } from './components/WorkshopsPage';
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
            {/* 01. HERO (Dark Velvet Hero with Outline Button) */}
            <HeroSection setActiveTab={setActiveTab} />

            {/* 02. FEATURED COLLECTION (Horizontal 4-Card Carousel on Warm Cream Canvas) */}
            <ChooseYourStorySection setActiveTab={setActiveTab} />

            {/* 03. OUR STORY (Split 2-Column Packaging & Story Banner) */}
            <WhatIsChemiSection setActiveTab={setActiveTab} />

            {/* 04. MANIFESTO BANNER (Full-Bleed Dark Statement Banner) */}
            <ManifestoBannerSection setActiveTab={setActiveTab} />

            {/* 05. VALUE PROPOSITION ROW (Minimal White Value Bar) */}
            <ValuePropsRow />

            {/* 06. CUSTOMIZATION (Interactive Customizers Intro) */}
            <GiftExperienceSection />
            <YourFlowerOrOursSection setActiveTab={setActiveTab} />

            {/* 07. CATALOG */}
            <CatalogSection setActiveTab={setActiveTab} />

            {/* 08. CHEMI WORKSHOPS */}
            <WorkshopsSection setActiveTab={setActiveTab} />

            {/* 09. REVIEWS */}
            <ReviewsSection />

            {/* 10. GIFT EXPERIENCE */}
            <GiftSection />

            {/* 11. CONTACT */}
            <ContactSection />
          </div>
        )}

        {/* TAB: COLLECTIONS (10 DISTINCT JEWELRY TYPES) */}
        {activeTab === 'collections' && (
          <div className="animate-in fade-in duration-300">
            <CollectionsPage
              setActiveTab={setActiveTab}
              onAddToCart={handleAddToCart}
              onOpenCart={() => setCartOpen(true)}
            />
          </div>
        )}

        {/* TAB: WORKSHOPS (STUDIO SCHEDULE & REGISTRATION) */}
        {activeTab === 'workshops' && (
          <div className="animate-in fade-in duration-300">
            <WorkshopsPage setActiveTab={setActiveTab} />
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
