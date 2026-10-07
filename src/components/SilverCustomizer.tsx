import React, { useState } from 'react';
import { SILVER_MODELS, SILVER_CHARMS, CHEMI_FLOWERS, RESIN_PENDANT_SHAPES, SILVER_BRACELET_DESIGNS } from '../data/mockData';
import { SilverJewelryModel, SilverPendantShape, SilverCharmOption, FlowerSourceType, ChemiFlowerOption, CartItem } from '../types';
import { Flower2, Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Info, Heart, Check } from 'lucide-react';

interface SilverCustomizerProps {
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
  onOpenFlowerGuide: () => void;
}

export const SilverCustomizer: React.FC<SilverCustomizerProps> = ({
  onAddToCart,
  onOpenCart,
  onOpenFlowerGuide,
}) => {
  const [jewelryCategory, setJewelryCategory] = useState<'necklace' | 'bracelet'>('necklace');
  const [selectedShape, setSelectedShape] = useState<SilverPendantShape>(RESIN_PENDANT_SHAPES[0]); // Oval
  const [selectedBracelet, setSelectedBracelet] = useState(SILVER_BRACELET_DESIGNS[0]); // Wire Cuff
  const [selectedCharm, setSelectedCharm] = useState<SilverCharmOption>(SILVER_CHARMS[0]); // Flower Charm
  const [flowerSource, setFlowerSource] = useState<FlowerSourceType>('own');
  const [selectedChemiFlower, setSelectedChemiFlower] = useState<ChemiFlowerOption>(CHEMI_FLOWERS[0]);
  
  // Own Flower state inputs
  const [occasionName, setOccasionName] = useState('Graduation Day');
  const [eventDate, setEventDate] = useState('2026-06-15');
  const [specialNotes, setSpecialNotes] = useState('Red rose bouquet petals from my graduation ceremony.');
  
  const [addedNotice, setAddedNotice] = useState(false);

  const basePrice = jewelryCategory === 'necklace' ? 429000 : selectedBracelet.basePrice;
  const calculatedPrice = basePrice + (jewelryCategory === 'necklace' ? selectedShape.priceModifier : 0) + selectedCharm.priceModifier;

  const handleAddToCart = () => {
    const isOwn = flowerSource === 'own';
    const title = jewelryCategory === 'necklace' 
      ? `CHEMI Silver Necklace — ${selectedShape.name}`
      : `CHEMI Silver Bracelet — ${selectedBracelet.name}`;

    const newItem: CartItem = {
      id: 'silver-' + Date.now(),
      type: 'silver',
      title: title,
      subtitle: `925 Sterling Silver • ${selectedCharm.name}`,
      price: calculatedPrice,
      image: jewelryCategory === 'necklace' ? selectedShape.image : selectedBracelet.image,
      details: {
        jewelryType: jewelryCategory === 'necklace' ? `Necklace (${selectedShape.name})` : `Bracelet (${selectedBracelet.name})`,
        colorsOrModel: jewelryCategory === 'necklace' ? selectedShape.name : selectedBracelet.name,
        beadsOrCharm: `${selectedCharm.name} (${selectedCharm.description})`,
        flowerSource: isOwn ? `Customer's Own Flower (${occasionName})` : `CHEMI Flower (${selectedChemiFlower.name})`,
        requiresFlowerSubmission: isOwn,
        giftNote: isOwn ? `Occasion: ${occasionName} (${eventDate}) — ${specialNotes}` : undefined,
      },
      quantity: 1,
    };

    onAddToCart(newItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="py-12 bg-[#0F0E0E] text-[#FAF7F2] min-h-screen font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
            CHEMI Silver Keepsake Studio
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white">
            4 Pendant Shapes & 2 Bracelet Designs.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto">
            Lihat langsung 4 contoh liontin perak murni (Oval, Heart, Round, Teardrop) dan 2 desain gelang perak untuk mengabadikan kenangan bungamu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Preview Card (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#161515] rounded-3xl p-8 border border-stone-800 shadow-2xl text-center space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between text-xs text-stone-400 font-semibold border-b border-stone-800 pb-3">
                <span className="uppercase tracking-widest text-[#C5A059]">CHEMI Silver Studio</span>
                <span className="bg-[#3B1017] text-[#C5A059] px-2.5 py-0.5 rounded-full text-[10px] border border-stone-800">
                  925 Sterling Silver
                </span>
              </div>

              {/* Photo Card Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-[#0A0909] h-80 shadow-inner group">
                <img
                  src={jewelryCategory === 'necklace' ? selectedShape.image : selectedBracelet.image}
                  alt={jewelryCategory === 'necklace' ? selectedShape.name : selectedBracelet.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1 bg-black/60 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest block">
                    {jewelryCategory === 'necklace' ? 'Resin Pendant Shape' : 'Bracelet Design'}
                  </span>
                  <h3 className="font-serif-editorial text-lg font-bold text-white">
                    {jewelryCategory === 'necklace' ? selectedShape.name : selectedBracelet.name}
                  </h3>
                  <p className="text-[11px] text-stone-300">
                    {flowerSource === 'own' ? `Custom Flower: ${occasionName}` : `Botanical: ${selectedChemiFlower.name}`}
                  </p>
                </div>
              </div>

              {/* Summary details */}
              <div className="bg-[#0F0E0E] p-4 rounded-2xl text-left space-y-2 border border-stone-800">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex justify-between">
                  <span>Configuration Price</span>
                  <span>Rp {calculatedPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1">
                  <p>• <strong>Category:</strong> {jewelryCategory === 'necklace' ? 'CHEMI Silver Necklace' : 'CHEMI Silver Bracelet'}</p>
                  <p>• <strong>Selected Design:</strong> {jewelryCategory === 'necklace' ? selectedShape.name : selectedBracelet.name}</p>
                  <p>• <strong>Charm Detail:</strong> {selectedCharm.name}</p>
                  <p>• <strong>Flower Origin:</strong> {flowerSource === 'own' ? 'Bring Your Own Flower' : `CHEMI Flower (${selectedChemiFlower.name})`}</p>
                  {flowerSource === 'own' && (
                    <p className="text-amber-400 text-[11px] font-semibold mt-1 flex items-center gap-1">
                      <Send className="w-3 h-3" />
                      <span>Send 3–5 petals via paper envelope after ordering</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#581C25] hover:bg-[#7A2834] text-[#FAF7F2] rounded-2xl font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer border border-[#7A2834]"
              >
                <Flower2 className="w-4 h-4 text-[#C5A059]" />
                <span>Preserve Memory (Rp {calculatedPrice.toLocaleString('id-ID')})</span>
              </button>

              {addedNotice && (
                <div className="p-3 bg-emerald-950 text-emerald-200 border border-emerald-800 rounded-xl text-xs font-medium flex items-center justify-between">
                  <span>Added to Story Box!</span>
                  <button onClick={onOpenCart} className="underline font-bold text-[#C5A059]">View Cart</button>
                </div>
              )}

            </div>
          </div>

          {/* Right Selection Steps */}
          <div className="lg:col-span-7 space-y-8 bg-[#161515] p-8 rounded-3xl border border-stone-800 shadow-xl">
            
            {/* Category Selector: Necklace vs Bracelet */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3B1017] text-[#C5A059] text-xs font-bold flex items-center justify-center border border-stone-800">1</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-white">Step 1 — Choose Jewelry Category</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setJewelryCategory('necklace')}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    jewelryCategory === 'necklace'
                      ? 'border-[#C5A059] bg-[#3B1017] text-white font-bold shadow-md'
                      : 'border-stone-800 bg-[#0F0E0E] text-stone-400'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider font-bold">Necklace & Pendants</div>
                  <div className="text-[10px] text-[#C5A059] mt-1 font-serif-editorial">4 Pendant Frame Shapes</div>
                </button>

                <button
                  onClick={() => setJewelryCategory('bracelet')}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    jewelryCategory === 'bracelet'
                      ? 'border-[#C5A059] bg-[#3B1017] text-white font-bold shadow-md'
                      : 'border-stone-800 bg-[#0F0E0E] text-stone-400'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider font-bold">Silver Bracelets</div>
                  <div className="text-[10px] text-[#C5A059] mt-1 font-serif-editorial">2 Bracelet Design Examples</div>
                </button>
              </div>
            </div>

            {/* IF NECKLACE: Show 4 Pendant Shape Cards */}
            {jewelryCategory === 'necklace' ? (
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-editorial text-xl font-bold text-[#C5A059]">4 Examples of Pendant Shapes (4 Contoh Liontin)</h4>
                  <span className="text-[10px] text-stone-400">Solid 925 Sterling Silver</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RESIN_PENDANT_SHAPES.map((shape) => {
                    const isSelected = selectedShape.id === shape.id;
                    return (
                      <div
                        key={shape.id}
                        onClick={() => setSelectedShape(shape)}
                        className={`rounded-2xl border overflow-hidden cursor-pointer transition-all flex flex-col justify-between group ${
                          isSelected
                            ? 'border-[#C5A059] bg-[#3B1017] text-white ring-1 ring-[#C5A059] shadow-lg'
                            : 'border-stone-800 bg-[#0F0E0E] text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={shape.image}
                            alt={shape.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {isSelected && (
                            <span className="absolute top-2 right-2 bg-[#581C25] text-white p-1 rounded-full text-xs">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white">{shape.name}</span>
                            {shape.priceModifier > 0 && (
                              <span className="text-[10px] text-[#C5A059] font-semibold">+Rp {shape.priceModifier.toLocaleString('id-ID')}</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-400 leading-snug">{shape.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* IF BRACELET: Show 2 Bracelet Design Example Cards */
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-editorial text-xl font-bold text-[#C5A059]">2 Examples of Bracelet Designs (2 Contoh Design Gelang)</h4>
                  <span className="text-[10px] text-stone-400">Solid 925 Sterling Silver</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SILVER_BRACELET_DESIGNS.map((br) => {
                    const isSelected = selectedBracelet.id === br.id;
                    return (
                      <div
                        key={br.id}
                        onClick={() => setSelectedBracelet(br)}
                        className={`rounded-2xl border overflow-hidden cursor-pointer transition-all flex flex-col justify-between group ${
                          isSelected
                            ? 'border-[#C5A059] bg-[#3B1017] text-white ring-1 ring-[#C5A059] shadow-lg'
                            : 'border-stone-800 bg-[#0F0E0E] text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={br.image}
                            alt={br.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {isSelected && (
                            <span className="absolute top-2 right-2 bg-[#581C25] text-white p-1 rounded-full text-xs">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white">{br.name}</span>
                            <span className="text-[10px] text-[#C5A059] font-semibold">Rp {br.basePrice.toLocaleString('id-ID')}</span>
                          </div>
                          <p className="text-[10px] text-[#C5A059] font-medium">{br.type}</p>
                          <p className="text-[11px] text-stone-400 leading-snug">{br.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Choose Silver Charm Accent */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3B1017] text-[#C5A059] text-xs font-bold flex items-center justify-center border border-stone-800">2</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-white">Step 2 — Custom Charm Accent</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SILVER_CHARMS.map((charm) => (
                  <div
                    key={charm.id}
                    onClick={() => setSelectedCharm(charm)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedCharm.id === charm.id
                        ? 'border-[#C5A059] bg-[#3B1017] text-white'
                        : 'border-stone-800 bg-[#0F0E0E] text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">{charm.name}</span>
                      <span className="text-[10px] text-[#C5A059]">
                        {charm.priceModifier > 0 ? `+Rp ${charm.priceModifier.toLocaleString('id-ID')}` : 'Included'}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1">{charm.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Your Flower or CHEMI Flower */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#3B1017] text-[#C5A059] text-xs font-bold flex items-center justify-center border border-stone-800">3</span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-white">Step 3 — Flower Selection</h3>
                </div>
                <button
                  onClick={onOpenFlowerGuide}
                  className="text-xs text-[#C5A059] hover:underline flex items-center gap-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Flower Submission Guide</span>
                </button>
              </div>

              {/* Source Toggle Tabs */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFlowerSource('own')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    flowerSource === 'own'
                      ? 'border-[#C5A059] bg-[#3B1017] text-white font-bold'
                      : 'border-stone-800 bg-[#0F0E0E] text-stone-400'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Bring Your Own Flower</span>
                  </div>
                  <p className="text-[10px] text-stone-300 mt-1 font-normal">
                    Use petals from your wedding, graduation, or special bouquet.
                  </p>
                </button>

                <button
                  onClick={() => setFlowerSource('chemi')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    flowerSource === 'chemi'
                      ? 'border-[#C5A059] bg-[#3B1017] text-white font-bold'
                      : 'border-stone-800 bg-[#0F0E0E] text-stone-400'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <Flower2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Choose From CHEMI</span>
                  </div>
                  <p className="text-[10px] text-stone-300 mt-1 font-normal">
                    Select from CHEMI studio organic dried flowers collection.
                  </p>
                </button>
              </div>

              {/* Dynamic sub-content depending on choice */}
              {flowerSource === 'own' ? (
                <div className="p-4 bg-[#0F0E0E] rounded-2xl border border-stone-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Own Flower Memory Details</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-stone-400 block mb-1">Occasion Title</label>
                      <input
                        type="text"
                        value={occasionName}
                        onChange={e => setOccasionName(e.target.value)}
                        placeholder="E.g., University Graduation"
                        className="w-full text-xs p-2.5 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-stone-400 block mb-1">Date of Event</label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                        className="w-full text-xs p-2.5 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-stone-400 block mb-1">Flower Description / Notes</label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={e => setSpecialNotes(e.target.value)}
                      placeholder="E.g., Red bouquet rose petals from graduation..."
                      className="w-full text-xs p-2.5 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-stone-300 block">Select CHEMI Botanical Flower:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CHEMI_FLOWERS.map((fl) => (
                      <div
                        key={fl.id}
                        onClick={() => setSelectedChemiFlower(fl)}
                        className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                          selectedChemiFlower.id === fl.id
                            ? 'border-[#C5A059] bg-[#3B1017] text-white'
                            : 'border-stone-800 bg-[#0F0E0E] text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <img src={fl.image} alt={fl.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                        <div>
                          <div className="text-xs font-bold">{fl.name}</div>
                          <div className="text-[10px] text-stone-400 italic">{fl.symbolism}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
