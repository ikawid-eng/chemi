import React, { useState } from 'react';
import { BEAD_COLORS, BEAD_STYLES } from '../data/mockData';
import { BeadColorOption, BeadStyleOption, BeadJewelryType, CartItem } from '../types';
import { Sparkles, Check, Gift, ArrowRight, Heart, RefreshCw } from 'lucide-react';

interface BeadsCustomizerProps {
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const BeadsCustomizer: React.FC<BeadsCustomizerProps> = ({ onAddToCart, onOpenCart }) => {
  const [jewelryType, setJewelryType] = useState<BeadJewelryType>('bracelet');
  const [primaryColor, setPrimaryColor] = useState<BeadColorOption>(BEAD_COLORS[1]); // CHEMI Maroon
  const [secondaryColor, setSecondaryColor] = useState<BeadColorOption>(BEAD_COLORS[0]); // Pearl White
  const [beadStyle, setBeadStyle] = useState<BeadStyleOption>(BEAD_STYLES[0]);
  const [flowerCount, setFlowerCount] = useState<number>(2);
  const [recipientName, setRecipientName] = useState<string>('');
  const [personalNote, setPersonalNote] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Price Calculation
  const basePrices: Record<BeadJewelryType, number> = {
    bracelet: 189000,
    necklace: 229000,
    brooch: 179000,
  };

  const calculatedPrice = basePrices[jewelryType] + beadStyle.priceModifier + (flowerCount * 5000);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: 'beads-' + Date.now(),
      type: 'beads',
      title: `CHEMI Beads ${jewelryType.charAt(0).toUpperCase() + jewelryType.slice(1)}`,
      subtitle: `${primaryColor.name} & ${secondaryColor.name} • ${beadStyle.name}`,
      price: calculatedPrice,
      image: 'https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=800&auto=format&fit=crop',
      details: {
        jewelryType: jewelryType.toUpperCase(),
        colorsOrModel: `${primaryColor.name} + ${secondaryColor.name}`,
        beadsOrCharm: `${beadStyle.name} (${flowerCount} flower motifs)`,
        giftNote: recipientName ? `For: ${recipientName} — "${personalNote}"` : undefined,
      },
      quantity: 1,
    };

    onAddToCart(newItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customizer Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            CHEMI Beads Studio
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
            Make Something That Feels Like Them.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-sans-body">
            Pilih jenis perhiasan, kombinasi warna, dan detail beads yang paling mencerminkan kepribadian atau kenangan bersamanya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Visual Interactive Canvas Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#EFE8DC] shadow-lg text-center space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between text-xs text-stone-500 font-semibold border-b border-[#EFE8DC] pb-3">
                <span className="uppercase tracking-widest text-[#581C25]">Live Story Preview</span>
                <span className="bg-[#F3ECE1] text-[#581C25] px-2.5 py-0.5 rounded-full text-[10px]">
                  Custom Handmade
                </span>
              </div>

              {/* Interactive SVG Representation of the Beads Jewelry */}
              <div className="w-full h-64 bg-[#FAF7F2] rounded-2xl flex items-center justify-center p-4 relative border border-[#EFE8DC]">
                
                <svg className="w-full h-full max-w-xs" viewBox="0 0 300 200" fill="none">
                  {/* Jewelry String Curve */}
                  {jewelryType === 'bracelet' && (
                    <path d="M 50 100 C 100 30, 200 30, 250 100 C 200 170, 100 170, 50 100" stroke="#D1C7BD" strokeWidth="2" strokeDasharray="3 3" />
                  )}
                  {jewelryType === 'necklace' && (
                    <path d="M 40 40 C 80 180, 220 180, 260 40" stroke="#D1C7BD" strokeWidth="2" strokeDasharray="3 3" />
                  )}
                  {jewelryType === 'brooch' && (
                    <line x1="80" y1="100" x2="220" y2="100" stroke="#581C25" strokeWidth="3" />
                  )}

                  {/* Render Alternating Beads based on chosen colors */}
                  {[30, 60, 90, 120, 150, 180, 210, 240, 270].map((cx, idx) => {
                    const isPrimary = idx % 2 === 0;
                    const beadColor = isPrimary ? primaryColor.hex : secondaryColor.hex;
                    const cy = jewelryType === 'necklace' 
                      ? 40 + Math.sin((idx / 8) * Math.PI) * 110 
                      : 100 + Math.sin((idx / 8) * Math.PI * 2) * (jewelryType === 'brooch' ? 10 : 35);

                    return (
                      <g key={idx}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r={idx % 3 === 0 ? "10" : "7"}
                          fill={beadColor}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          className="transition-all duration-300"
                        />
                        {/* Shimmer overlay */}
                        <circle cx={cx - 2} cy={cy - 2} r="2" fill="#FFFFFF" opacity="0.6" />
                      </g>
                    );
                  })}

                  {/* Flower accents */}
                  {Array.from({ length: flowerCount }).map((_, fIdx) => {
                    const fx = 100 + fIdx * 50;
                    const fy = 100;
                    return (
                      <g key={`flower-${fIdx}`} transform={`translate(${fx}, ${fy})`}>
                        <circle cx="0" cy="-6" r="4" fill="#E8B4B8" />
                        <circle cx="6" cy="0" r="4" fill="#E8B4B8" />
                        <circle cx="0" cy="6" r="4" fill="#E8B4B8" />
                        <circle cx="-6" cy="0" r="4" fill="#E8B4B8" />
                        <circle cx="0" cy="0" r="3" fill="#C5A059" />
                      </g>
                    );
                  })}
                </svg>

                <div className="absolute bottom-3 right-3 text-[10px] text-stone-400 italic">
                  Interactive Palette Rendering
                </div>
              </div>

              {/* Live Configuration Summary */}
              <div className="bg-[#F3ECE1] p-4 rounded-2xl text-left space-y-2 border border-[#EFE8DC]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#581C25] flex justify-between">
                  <span>Your Configuration</span>
                  <span>Rp {calculatedPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="text-xs text-stone-700 space-y-1">
                  <p>• <strong>Type:</strong> CHEMI Beads {jewelryType.toUpperCase()}</p>
                  <p>• <strong>Colors:</strong> {primaryColor.name} & {secondaryColor.name}</p>
                  <p>• <strong>Bead Style:</strong> {beadStyle.name}</p>
                  <p>• <strong>Flower Motifs:</strong> {flowerCount} Floral Accents</p>
                  {recipientName && <p className="text-[#581C25] font-semibold">• <strong>For:</strong> {recipientName}</p>}
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] rounded-2xl font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Gift className="w-4 h-4 text-[#C5A059]" />
                <span>Gift This CHEMI (Rp {calculatedPrice.toLocaleString('id-ID')})</span>
              </button>

              {addedNotice && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-medium flex items-center justify-between">
                  <span>Added to your Story Box!</span>
                  <button onClick={onOpenCart} className="underline font-bold text-[#581C25]">View Cart</button>
                </div>
              )}

            </div>
          </div>

          {/* Right Steps Form */}
          <div className="lg:col-span-7 space-y-8 bg-white p-8 rounded-3xl border border-[#EFE8DC] shadow-sm">
            
            {/* Step 1: Choose Jewelry Type */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 1 — Choose Jewelry Type</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'bracelet', label: 'Bracelet', price: 'Rp 189.000' },
                  { id: 'necklace', label: 'Necklace', price: 'Rp 229.000' },
                  { id: 'brooch', label: 'Brooch', price: 'Rp 179.000' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setJewelryType(item.id as BeadJewelryType)}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                      jewelryType === item.id
                        ? 'border-[#581C25] bg-[#F3ECE1] text-[#581C25] font-bold shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-sm uppercase tracking-wider">{item.label}</div>
                    <div className="text-[11px] text-stone-500 font-serif-editorial mt-1">{item.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Colors */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 2 — Choose Color Swatches</h3>
              </div>
              <p className="text-xs text-stone-500">
                Pilih warna utama dan warna aksen pendukung.
              </p>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-stone-700 block">Primary Color: {primaryColor.name}</label>
                <div className="flex flex-wrap gap-3">
                  {BEAD_COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setPrimaryColor(c)}
                      className={`w-9 h-9 rounded-full ${c.class} flex items-center justify-center border-2 transition-transform cursor-pointer ${
                        primaryColor.id === c.id ? 'scale-110 border-[#581C25] ring-2 ring-[#581C25]/30' : 'border-white'
                      }`}
                      title={c.name}
                    >
                      {primaryColor.id === c.id && <Check className="w-4 h-4 text-white drop-shadow" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-stone-700 block">Secondary Accent Color: {secondaryColor.name}</label>
                <div className="flex flex-wrap gap-3">
                  {BEAD_COLORS.map((c) => (
                    <button
                      key={`sec-${c.id}`}
                      onClick={() => setSecondaryColor(c)}
                      className={`w-9 h-9 rounded-full ${c.class} flex items-center justify-center border-2 transition-transform cursor-pointer ${
                        secondaryColor.id === c.id ? 'scale-110 border-[#581C25] ring-2 ring-[#581C25]/30' : 'border-white'
                      }`}
                      title={c.name}
                    >
                      {secondaryColor.id === c.id && <Check className="w-4 h-4 text-white drop-shadow" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Choose Beads & Flower Elements */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 3 — Choose Bead Style & Motifs</h3>
              </div>

              <div className="space-y-3">
                {BEAD_STYLES.map((style) => (
                  <div
                    key={style.id}
                    onClick={() => setBeadStyle(style)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      beadStyle.id === style.id
                        ? 'border-[#581C25] bg-[#F3ECE1] text-[#581C25]'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold">{style.name}</span>
                      <span className="text-xs font-serif-editorial font-semibold">
                        {style.priceModifier > 0 ? `+Rp ${style.priceModifier.toLocaleString('id-ID')}` : 'Included'}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">{style.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <label className="text-xs font-semibold text-stone-700 block mb-2">Number of Floral Bead Clusters: {flowerCount}</label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      onClick={() => setFlowerCount(count)}
                      className={`w-10 h-10 rounded-xl border font-bold text-xs transition-all cursor-pointer ${
                        flowerCount === count
                          ? 'bg-[#581C25] text-white border-[#581C25]'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Personal Story Note */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 4 — Add Recipient & Story Note</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Recipient Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="E.g., Maya / Clarissa"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full text-xs p-3 bg-[#FAF7F2] rounded-xl border border-stone-200 outline-none focus:border-[#581C25]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Custom Story Message for Printed Gift Card</label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Made for your graduation day. May you always bloom with strength and grace!"
                    value={personalNote}
                    onChange={(e) => setPersonalNote(e.target.value)}
                    className="w-full text-xs p-3 bg-[#FAF7F2] rounded-xl border border-stone-200 outline-none focus:border-[#581C25] resize-none"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
