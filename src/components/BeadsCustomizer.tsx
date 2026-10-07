import React, { useState } from 'react';
import { BEAD_COLORS, BEAD_STYLES } from '../data/mockData';
import { BeadColorOption, BeadStyleOption, BeadJewelryType, CartItem, StrandBeadItem } from '../types';
import { Sparkles, Check, Gift, ArrowRight, ArrowLeft, Move, Plus, Trash2, RotateCcw, Shuffle } from 'lucide-react';

interface BeadsCustomizerProps {
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const BeadsCustomizer: React.FC<BeadsCustomizerProps> = ({ onAddToCart, onOpenCart }) => {
  const [jewelryType, setJewelryType] = useState<BeadJewelryType>('bracelet');
  const [beadStyle, setBeadStyle] = useState<BeadStyleOption>(BEAD_STYLES[0]);
  
  // Interactive Strand Sequence State
  const [strandItems, setStrandItems] = useState<StrandBeadItem[]>([
    { id: 'item-1', type: 'bead', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
    { id: 'item-2', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
    { id: 'item-3', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 12 },
    { id: 'item-4', type: 'flower', colorName: 'Blush Rose', hex: '#E8B4B8', size: 16 },
    { id: 'item-5', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 12 },
    { id: 'item-6', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
    { id: 'item-7', type: 'bead', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number>(3); // Default to flower center
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  
  const [recipientName, setRecipientName] = useState<string>('');
  const [personalNote, setPersonalNote] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Move element left or right
  const moveItem = (index: number, direction: 'left' | 'right') => {
    const targetIndex = direction === 'left' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= strandItems.length) return;

    const updated = [...strandItems];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    setStrandItems(updated);
    setSelectedIndex(targetIndex);
  };

  // Add new element
  const addItem = (type: 'bead' | 'flower' | 'pearl', color: BeadColorOption) => {
    const newItem: StrandBeadItem = {
      id: `bead-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      type,
      colorName: color.name,
      hex: color.hex,
      size: type === 'flower' ? 16 : type === 'pearl' ? 12 : 10,
    };
    setStrandItems(prev => [...prev, newItem]);
    setSelectedIndex(strandItems.length);
  };

  // Delete element
  const removeItem = (index: number) => {
    if (strandItems.length <= 3) return; // Keep minimum 3
    const updated = strandItems.filter((_, i) => i !== index);
    setStrandItems(updated);
    setSelectedIndex(Math.max(0, index - 1));
  };

  // Change selected bead's color or type
  const updateSelectedItem = (color: BeadColorOption, type?: 'bead' | 'flower' | 'pearl') => {
    if (selectedIndex === null || selectedIndex >= strandItems.length) return;
    setStrandItems(prev => prev.map((item, idx) => {
      if (idx !== selectedIndex) return item;
      const newType = type || item.type;
      return {
        ...item,
        colorName: color.name,
        hex: color.hex,
        type: newType,
        size: newType === 'flower' ? 16 : newType === 'pearl' ? 12 : 10,
      };
    }));
  };

  // Preset strand templates
  const applyPreset = (preset: 'classic' | 'triple' | 'maroon') => {
    if (preset === 'classic') {
      setStrandItems([
        { id: '1', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
        { id: '2', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
        { id: '3', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 12 },
        { id: '4', type: 'flower', colorName: 'Blush Rose', hex: '#E8B4B8', size: 16 },
        { id: '5', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 12 },
        { id: '6', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
        { id: '7', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
      ]);
    } else if (preset === 'triple') {
      setStrandItems([
        { id: '1', type: 'flower', colorName: 'Blush Rose', hex: '#E8B4B8', size: 16 },
        { id: '2', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
        { id: '3', type: 'flower', colorName: 'CHEMI Maroon', hex: '#581C25', size: 16 },
        { id: '4', type: 'pearl', colorName: 'Pearl White', hex: '#FDFBF7', size: 10 },
        { id: '5', type: 'flower', colorName: 'Blush Rose', hex: '#E8B4B8', size: 16 },
      ]);
    } else if (preset === 'maroon') {
      setStrandItems([
        { id: '1', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
        { id: '2', type: 'bead', colorName: 'Terracotta Warmth', hex: '#B87D65', size: 10 },
        { id: '3', type: 'flower', colorName: 'CHEMI Maroon', hex: '#581C25', size: 16 },
        { id: '4', type: 'bead', colorName: 'Terracotta Warmth', hex: '#B87D65', size: 10 },
        { id: '5', type: 'bead', colorName: 'CHEMI Maroon', hex: '#581C25', size: 10 },
      ]);
    }
  };

  // Price Calculation
  const basePrices: Record<BeadJewelryType, number> = {
    bracelet: 189000,
    necklace: 229000,
    brooch: 179000,
  };

  const flowerCount = strandItems.filter(i => i.type === 'flower').length;
  const calculatedPrice = basePrices[jewelryType] + beadStyle.priceModifier + (flowerCount * 5000);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: 'beads-' + Date.now(),
      type: 'beads',
      title: `CHEMI Beads ${jewelryType.charAt(0).toUpperCase() + jewelryType.slice(1)}`,
      subtitle: `${strandItems.length} Custom Arranged Beads • ${flowerCount} Flower Charms`,
      price: calculatedPrice,
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      details: {
        jewelryType: jewelryType.toUpperCase(),
        colorsOrModel: `Interactive Strand Arrangement (${strandItems.length} pieces)`,
        beadsOrCharm: `${beadStyle.name} (${flowerCount} moveable flower motifs)`,
        giftNote: recipientName ? `For: ${recipientName} — "${personalNote}"` : undefined,
      },
      quantity: 1,
    };

    onAddToCart(newItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customizer Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#581C25] bg-[#F3ECE1] px-3.5 py-1 rounded-full border border-[#EFE8DC]">
            Interactive CHEMI Beads Studio
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3B1017]">
            Move & Rearrange Beads & Flowers.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
            Geser, urutkan, dan ganti posisi bunga dan manik-manik secara langsung di atas untaian perhiasanmu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Canvas & Drag/Move Controls */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE8DC] shadow-lg text-center space-y-6 relative">
              
              <div className="flex items-center justify-between text-xs text-stone-500 font-semibold border-b border-[#EFE8DC] pb-3">
                <span className="uppercase tracking-widest text-[#581C25] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Moveable Bead Strand</span>
                </span>
                <span className="bg-[#F3ECE1] text-[#581C25] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  {strandItems.length} Elements
                </span>
              </div>

              {/* Dynamic Interactive SVG Strand Render */}
              <div className="w-full h-72 bg-[#FAF7F2] rounded-2xl flex flex-col items-center justify-center p-4 relative border border-[#EFE8DC]">
                
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 220" fill="none">
                  {/* Strand Wire Line */}
                  {jewelryType === 'bracelet' && (
                    <path d="M 40 110 C 120 20, 280 20, 360 110 C 280 200, 120 200, 40 110" stroke="#C5A059" strokeWidth="2.5" strokeDasharray="4 3" />
                  )}
                  {jewelryType === 'necklace' && (
                    <path d="M 30 40 C 100 210, 300 210, 370 40" stroke="#C5A059" strokeWidth="2.5" strokeDasharray="4 3" />
                  )}
                  {jewelryType === 'brooch' && (
                    <line x1="50" y1="110" x2="350" y2="110" stroke="#581C25" strokeWidth="4" />
                  )}

                  {/* Render Moveable Items along calculated curve */}
                  {strandItems.map((item, idx) => {
                    const total = strandItems.length;
                    const progress = total > 1 ? idx / (total - 1) : 0.5;
                    
                    let cx = 50 + progress * 300;
                    let cy = 110;
                    if (jewelryType === 'necklace') {
                      cy = 40 + Math.sin(progress * Math.PI) * 150;
                    } else if (jewelryType === 'bracelet') {
                      cy = 110 + Math.sin(progress * Math.PI * 2) * 50;
                    }

                    const isSelected = selectedIndex === idx;

                    return (
                      <g
                        key={item.id}
                        onClick={() => setSelectedIndex(idx)}
                        className="cursor-pointer transition-transform duration-300 hover:scale-125"
                      >
                        {/* Selected Indicator Halo */}
                        {isSelected && (
                          <circle cx={cx} cy={cy} r={item.type === 'flower' ? "22" : "18"} fill="none" stroke="#581C25" strokeWidth="2" strokeDasharray="3 3" className="animate-spin" />
                        )}

                        {item.type === 'flower' ? (
                          /* Flower Motif Render */
                          <g transform={`translate(${cx}, ${cy})`}>
                            <circle cx="0" cy="-8" r="6" fill={item.hex} stroke="#581C25" strokeWidth="1" />
                            <circle cx="8" cy="0" r="6" fill={item.hex} stroke="#581C25" strokeWidth="1" />
                            <circle cx="0" cy="8" r="6" fill={item.hex} stroke="#581C25" strokeWidth="1" />
                            <circle cx="-8" cy="0" r="6" fill={item.hex} stroke="#581C25" strokeWidth="1" />
                            <circle cx="0" cy="0" r="5" fill="#C5A059" />
                          </g>
                        ) : item.type === 'pearl' ? (
                          /* Freshwater Pearl Render */
                          <g>
                            <ellipse cx={cx} cy={cy} rx="10" ry="8" fill="#FDFBF7" stroke="#D1C7BD" strokeWidth="1.5" />
                            <ellipse cx={cx - 2} cy={cy - 2} rx="3" ry="2" fill="#FFFFFF" opacity="0.8" />
                          </g>
                        ) : (
                          /* Regular Glass Bead */
                          <g>
                            <circle cx={cx} cy={cy} r="8" fill={item.hex} stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx={cx - 2} cy={cy - 2} r="2.5" fill="#FFFFFF" opacity="0.7" />
                          </g>
                        )}

                        {/* Order Index Badge */}
                        <text x={cx} y={cy + 22} textAnchor="middle" fontSize="9" fill="#581C25" fontWeight="bold">
                          #{idx + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <div className="absolute top-3 right-3 text-[10px] text-stone-500 font-bold bg-white/90 px-2 py-0.5 rounded-md border border-stone-200">
                  Click any bead to move or swap
                </div>
              </div>

              {/* Move & Reorder Strand Item Controls */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#581C25]">
                  <span>Strand Sequence Toolbar</span>
                  <div className="flex items-center gap-1 text-[10px] text-stone-500">
                    <button onClick={() => applyPreset('classic')} className="hover:underline bg-white px-2 py-0.5 rounded border">Classic</button>
                    <button onClick={() => applyPreset('triple')} className="hover:underline bg-white px-2 py-0.5 rounded border">Triple Flower</button>
                    <button onClick={() => applyPreset('maroon')} className="hover:underline bg-white px-2 py-0.5 rounded border">Maroon</button>
                  </div>
                </div>

                {/* Selected Item Move & Swap Bar */}
                {selectedIndex !== null && strandItems[selectedIndex] && (
                  <div className="p-3 bg-white rounded-xl border border-[#EFE8DC] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-5 h-5 rounded-full border border-stone-300" style={{ backgroundColor: strandItems[selectedIndex].hex }} />
                      <span className="font-bold text-stone-900">
                        Item #{selectedIndex + 1}: {strandItems[selectedIndex].type.toUpperCase()} ({strandItems[selectedIndex].colorName})
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveItem(selectedIndex, 'left')}
                        disabled={selectedIndex === 0}
                        className="p-1.5 bg-[#F3ECE1] hover:bg-[#581C25] hover:text-white rounded-lg text-xs font-bold transition-all disabled:opacity-30 cursor-pointer"
                        title="Move Left / Earlier in Strand"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => moveItem(selectedIndex, 'right')}
                        disabled={selectedIndex === strandItems.length - 1}
                        className="p-1.5 bg-[#F3ECE1] hover:bg-[#581C25] hover:text-white rounded-lg text-xs font-bold transition-all disabled:opacity-30 cursor-pointer"
                        title="Move Right / Later in Strand"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => removeItem(selectedIndex)}
                        disabled={strandItems.length <= 3}
                        className="p-1.5 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white rounded-lg text-xs transition-all disabled:opacity-30 cursor-pointer ml-2"
                        title="Delete this bead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Quick Add Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <button
                    onClick={() => addItem('flower', BEAD_COLORS[1])}
                    className="px-3 py-1.5 bg-[#581C25] text-white rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-[#3B1017] transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>+ Flower Charm</span>
                  </button>

                  <button
                    onClick={() => addItem('pearl', BEAD_COLORS[0])}
                    className="px-3 py-1.5 bg-white border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-stone-50 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#581C25]" />
                    <span>+ Pearl Bead</span>
                  </button>

                  <button
                    onClick={() => addItem('bead', BEAD_COLORS[3])}
                    className="px-3 py-1.5 bg-white border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-stone-50 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#581C25]" />
                    <span>+ Glass Bead</span>
                  </button>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] rounded-2xl font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Gift className="w-4 h-4 text-[#C5A059]" />
                <span>Gift This Custom CHEMI (Rp {calculatedPrice.toLocaleString('id-ID')})</span>
              </button>

              {addedNotice && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-medium flex items-center justify-between">
                  <span>Added to your Story Box!</span>
                  <button onClick={onOpenCart} className="underline font-bold text-[#581C25]">View Cart</button>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-6 space-y-8 bg-white p-8 rounded-3xl border border-[#EFE8DC] shadow-xs">
            
            {/* Step 1: Jewelry Type */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 1 — Select Jewelry Form</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'bracelet', label: 'Bracelet', price: 'Rp 189,000' },
                  { id: 'necklace', label: 'Necklace', price: 'Rp 229,000' },
                  { id: 'brooch', label: 'Brooch', price: 'Rp 179,000' },
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
                    <div className="text-xs uppercase tracking-wider font-bold">{item.label}</div>
                    <div className="text-[11px] text-stone-500 font-serif-editorial mt-1">{item.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Customize Selected Element Color */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 2 — Color Selected Bead</h3>
                </div>
                <span className="text-xs font-bold text-[#581C25]">
                  Item #{selectedIndex + 1}
                </span>
              </div>

              <p className="text-xs text-stone-500">
                Pilih warna untuk posisi elemen yang sedang dipilih di untaian:
              </p>

              <div className="flex flex-wrap gap-3">
                {BEAD_COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => updateSelectedItem(c)}
                    className={`w-9 h-9 rounded-full ${c.class} flex items-center justify-center border-2 transition-transform cursor-pointer ${
                      strandItems[selectedIndex]?.colorName === c.name ? 'scale-110 border-[#581C25] ring-2 ring-[#581C25]/30' : 'border-white'
                    }`}
                    title={c.name}
                  >
                    {strandItems[selectedIndex]?.colorName === c.name && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Bead Style Options */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 3 — Hardware & Finish</h3>
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
                      <span className="text-xs font-bold">{style.name}</span>
                      <span className="text-[11px] font-serif-editorial font-semibold">
                        {style.priceModifier > 0 ? `+Rp ${style.priceModifier.toLocaleString('id-ID')}` : 'Included'}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Recipient Note */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#581C25] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">Step 4 — Personal Gift Story</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="E.g., Maya / Clarissa"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full text-xs p-3 bg-[#FAF7F2] rounded-xl border border-stone-200 outline-none focus:border-[#581C25]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Custom Message for Printed Card</label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Designed for your graduation day. May you always bloom with strength and grace!"
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
