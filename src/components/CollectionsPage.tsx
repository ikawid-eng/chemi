import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter, Check, ShoppingBag, Heart, ShieldCheck, Flower2 } from 'lucide-react';
import { NavigationTab, CartItem } from '../types';

interface CollectionsPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  setActiveTab,
  onAddToCart,
  onOpenCart,
}) => {
  const [activeFilter, setActiveCategory] = useState<'all' | 'beads' | 'silver'>('all');

  // 10 Distinct Jewelry Types (5 CHEMI Beads + 5 CHEMI Silver)
  const jewelryCollection = [
    // CHEMI BEADS (5 Distinct Types)
    {
      id: 'col-beads-1',
      category: 'beads' as const,
      typeTag: 'CHEMI BEADS',
      title: 'The Blush Pearl Bloom Bracelet',
      jewelryType: 'Handcrafted Bead Bracelet',
      price: 189000,
      priceFormatted: 'IDR 189,000',
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      materials: 'Freshwater Pearls • Blush Glass Beads • Gold Accents',
      description: 'Handcrafted bracelet featuring organic freshwater pearls, blush rose glass beads, and a signature bead flower center.',
      customizerTab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'col-beads-2',
      category: 'beads' as const,
      typeTag: 'CHEMI BEADS',
      title: 'The Initial Story Pearl Necklace',
      jewelryType: 'Custom Bead & Pearl Choker',
      price: 249000,
      priceFormatted: 'IDR 249,000',
      image: '/src/assets/images/chemi_workshop_studio_1791363890862.jpg',
      materials: 'Baroque Pearls • Pastel Glass Seed Beads • Initial Charm',
      description: 'Elegant choker-length necklace woven with iridescent seed beads, freshwater baroque pearls, and a custom initial charm.',
      customizerTab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'col-beads-3',
      category: 'beads' as const,
      typeTag: 'CHEMI BEADS',
      title: 'The Botanical Woven Flower Brooch',
      jewelryType: 'Handcrafted Bead Brooch',
      price: 179000,
      priceFormatted: 'IDR 179,000',
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      materials: 'Artisan Bead Cluster • Safety Pin Lock',
      description: 'Artisan lapel pin handcrafted with woven flower bead clusters for blazers, cardigans, or scarves.',
      customizerTab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'col-beads-4',
      category: 'beads' as const,
      typeTag: 'CHEMI BEADS',
      title: 'The Iridescent Pearl & Crystal Anklet',
      jewelryType: 'Handcrafted Bead Anklet',
      price: 169000,
      priceFormatted: 'IDR 169,000',
      image: '/src/assets/images/chemi_workshop_studio_1791363890862.jpg',
      materials: 'Dainty Crystals • Seed Pearls • Extender Chain',
      description: 'Dainty anklet designed with shimmering hand-cut crystals and freshwater seed pearls with an adjustable extender.',
      customizerTab: 'beads-customizer' as NavigationTab,
    },
    {
      id: 'col-beads-5',
      category: 'beads' as const,
      typeTag: 'CHEMI BEADS',
      title: 'The Memory Phone Charm & Wristlet',
      jewelryType: 'Bead Phone Charm Wristlet',
      price: 129000,
      priceFormatted: 'IDR 129,000',
      image: '/src/assets/images/chemi_gift_packaging_1791363914513.jpg',
      materials: 'Freshwater Pearls • Floral Charm • High-strength Cord',
      description: 'Durable phone lanyard wristlet woven with freshwater pearls and flower bead charms to carry memories everywhere.',
      customizerTab: 'beads-customizer' as NavigationTab,
    },

    // CHEMI SILVER (5 Distinct Silver Flower Jewelry Types)
    {
      id: 'col-silver-6',
      category: 'silver' as const,
      typeTag: 'CHEMI SILVER',
      title: 'White Flower Delicate Silver Pendant Set',
      jewelryType: '925 Sterling Silver Necklace & Earrings',
      price: 429000,
      priceFormatted: 'IDR 429,000',
      image: '/src/assets/images/chemi_silver_keepsake_1791363874692.jpg',
      materials: '925 Sterling Silver • Preserved Petals • Crystal Resin',
      description: 'Delicate pure white lily flower pendant crafted in 925 sterling silver with matching silver drop earrings.',
      customizerTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'col-silver-7',
      category: 'silver' as const,
      typeTag: 'CHEMI SILVER',
      title: 'Blue Forget-Me-Not Flower Silver Band Ring',
      jewelryType: '925 Sterling Silver Band Ring',
      price: 389000,
      priceFormatted: 'IDR 389,000',
      image: '/src/assets/images/hero_chemi_jewelry_1791363797623.jpg',
      materials: '925 Sterling Silver • Forget-Me-Not Blossoms',
      description: 'Wavy sterling silver vine ring set with delicate sky-blue forget-me-not flower petals.',
      customizerTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'col-silver-8',
      category: 'silver' as const,
      typeTag: 'CHEMI SILVER',
      title: 'Sakura Petal Silver Cuff Bracelet',
      jewelryType: '925 Sterling Silver Cuff Bracelet',
      price: 389000,
      priceFormatted: 'IDR 389,000',
      image: '/src/assets/images/chemi_silver_keepsake_1791363874692.jpg',
      materials: '925 Sterling Silver Wire • Preserved Sakura Petals',
      description: 'Adjustable sterling silver wire cuff bracelet featuring delicate pink cherry blossom flower clusters.',
      customizerTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'col-silver-9',
      category: 'silver' as const,
      typeTag: 'CHEMI SILVER',
      title: 'Pink Sakura Crystal Silver Drop Earrings',
      jewelryType: '925 Sterling Silver Earrings',
      price: 459000,
      priceFormatted: 'IDR 459,000',
      image: '/src/assets/images/hero_chemi_jewelry_1791363797623.jpg',
      materials: '925 Sterling Silver Hooks • Cherry Blossom Petals',
      description: 'Elegantly suspended sterling silver drop earrings with 5-petal cherry blossom flowers and pink zircon crystals.',
      customizerTab: 'silver-customizer' as NavigationTab,
    },
    {
      id: 'col-silver-10',
      category: 'silver' as const,
      typeTag: 'CHEMI SILVER',
      title: 'Translucent Cherry Blossom Silver Locket',
      jewelryType: '925 Sterling Silver Pendant',
      price: 349000,
      priceFormatted: 'IDR 349,000',
      image: '/src/assets/images/chemi_silver_keepsake_1791363874692.jpg',
      materials: '925 Sterling Silver Chain • Translucent Petal Resin',
      description: 'Iridescent translucent pink sakura petal pendant encapsulated in crystal resin on 925 sterling silver chain.',
      customizerTab: 'silver-customizer' as NavigationTab,
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? jewelryCollection 
    : jewelryCollection.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-stone-900 pt-8 pb-24 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F3ECE1] border border-[#EFE8DC] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#581C25]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Handcrafted Story Creations</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#3B1017] uppercase">
            THE CHEMI COLLECTIONS
          </h1>

          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Explore curated story jewelry creations. Choose between handcrafted <strong className="text-[#581C25]">CHEMI Beads</strong> for custom gifts, or 925 sterling <strong className="text-[#581C25]">CHEMI Silver</strong> for flower keepsakes.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#581C25] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F3ECE1] border border-[#EFE8DC]'
              }`}
            >
              All Creations
            </button>

            <button
              onClick={() => setActiveCategory('beads')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === 'beads'
                  ? 'bg-[#581C25] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F3ECE1] border border-[#EFE8DC]'
              }`}
            >
              CHEMI Beads
            </button>

            <button
              onClick={() => setActiveCategory('silver')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === 'silver'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F3ECE1] border border-[#EFE8DC]'
              }`}
            >
              CHEMI Silver Keepsakes
            </button>
          </div>
        </div>

        {/* Comparison Banner explaining difference */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-3xl border border-[#EFE8DC] shadow-xs">
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EFE8DC] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-2.5 py-0.5 rounded-full">
              CHEMI BEADS EXPERIENCE
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3B1017]">Handcrafted Custom Gifts</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Designed with freshwater pearls, glass beads, and custom color arrangements. Expressive, warm, and personal gifts for best friends, birthdays, and celebrations.
            </p>
          </div>

          <div className="p-4 bg-[#0F0E0E] text-white rounded-2xl border border-stone-800 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-2.5 py-0.5 rounded-full">
              CHEMI SILVER KEEPSAKES
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-white">925 Sterling Flower Preservation</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Solid 925 sterling silver hardware encapsulating real graduation petals, wedding bouquet flowers, or meaningful memorial blossoms.
            </p>
          </div>
        </div>

        {/* 10 Jewelry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                item.category === 'silver'
                  ? 'bg-[#0F0E0E] text-white border-stone-800 shadow-xl'
                  : 'bg-white text-stone-900 border-[#EFE8DC] shadow-xs hover:shadow-xl'
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      item.category === 'silver'
                        ? 'bg-[#3B1017] text-[#C5A059] border border-stone-800'
                        : 'bg-[#581C25] text-white'
                    }`}
                  >
                    {item.typeTag}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest block ${
                      item.category === 'silver' ? 'text-[#C5A059]' : 'text-[#581C25]'
                    }`}
                  >
                    {item.jewelryType}
                  </span>
                  <h3 className="font-serif-editorial text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      item.category === 'silver' ? 'text-stone-300' : 'text-stone-600'
                    }`}
                  >
                    {item.description}
                  </p>
                  <p
                    className={`text-[11px] font-medium pt-1 ${
                      item.category === 'silver' ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {item.materials}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div
                className={`p-6 pt-0 flex items-center justify-between border-t mt-4 ${
                  item.category === 'silver' ? 'border-stone-800' : 'border-stone-100'
                }`}
              >
                <span
                  className={`font-serif-editorial text-lg font-bold ${
                    item.category === 'silver' ? 'text-[#C5A059]' : 'text-[#581C25]'
                  }`}
                >
                  {item.priceFormatted}
                </span>

                <button
                  onClick={() => setActiveTab(item.customizerTab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer ${
                    item.category === 'silver'
                      ? 'bg-[#581C25] hover:bg-[#7A2834] text-white border border-[#7A2834]'
                      : 'bg-[#581C25] hover:bg-[#3B1017] text-white shadow-xs'
                  }`}
                >
                  <span>Customize</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
