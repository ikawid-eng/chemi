import React, { useState } from 'react';
import { SILVER_MODELS, SILVER_CHARMS, CHEMI_FLOWERS } from '../data/mockData';
import { SilverJewelryModel, SilverCharmOption, FlowerSourceType, ChemiFlowerOption, CartItem } from '../types';
import { Flower2, Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Info } from 'lucide-react';

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
  const [selectedModel, setSelectedModel] = useState<SilverJewelryModel>(SILVER_MODELS[1]); // Silver Necklace
  const [selectedCharm, setSelectedCharm] = useState<SilverCharmOption>(SILVER_CHARMS[0]); // Flower Charm
  const [flowerSource, setFlowerSource] = useState<FlowerSourceType>('own');
  const [selectedChemiFlower, setSelectedChemiFlower] = useState<ChemiFlowerOption>(CHEMI_FLOWERS[0]);
  
  // Own Flower state inputs
  const [occasionName, setOccasionName] = useState('Graduation Day');
  const [eventDate, setEventDate] = useState('2026-06-15');
  const [specialNotes, setSpecialNotes] = useState('Red rose bouquet petals from my graduation ceremony.');
  
  const [addedNotice, setAddedNotice] = useState(false);

  const calculatedPrice = selectedModel.basePrice + selectedCharm.priceModifier;

  const handleAddToCart = () => {
    const isOwn = flowerSource === 'own';
    const newItem: CartItem = {
      id: 'silver-' + Date.now(),
      type: 'silver',
      title: `${selectedModel.name}`,
      subtitle: `925 Sterling Silver • ${selectedCharm.name}`,
      price: calculatedPrice,
      image: selectedModel.image,
      details: {
        jewelryType: selectedModel.subtitle,
        colorsOrModel: selectedModel.name,
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
    <div className="py-12 bg-[#0F0E0E] text-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
            CHEMI Silver Keepsake Studio
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white">
            Some Flowers Deserve More Than a Vase.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-sans-body">
            Abadikan kelopak bunga dari pernikahan, wisuda, atau hari berharga ke dalam liontin perak 925 Sterling Silver yang bertahan selamanya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Preview Card (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#161515] rounded-3xl p-8 border border-stone-800 shadow-2xl text-center space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between text-xs text-stone-400 font-semibold border-b border-stone-800 pb-3">
                <span className="uppercase tracking-widest text-[#C5A059]">CHEMI Silver Keepsake</span>
                <span className="bg-[#3B1017] text-[#C5A059] px-2.5 py-0.5 rounded-full text-[10px] border border-stone-800">
                  925 Sterling Silver
                </span>
              </div>

              {/* Product Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest">
                    {selectedCharm.name}
                  </span>
                  <h3 className="font-serif-editorial text-xl font-bold text-white">{selectedModel.name}</h3>
                  <p className="text-xs text-stone-300">
                    {flowerSource === 'own' ? `Custom Flower: ${occasionName}` : `Flower: ${selectedChemiFlower.name}`}
                  </p>
                </div>
              </div>

              {/* Summary details */}
              <div className="bg-[#0F0E0E] p-4 rounded-2xl text-left space-y-2 border border-stone-800">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex justify-between">
                  <span>Selected Model</span>
                  <span>Rp {calculatedPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1">
                  <p>• <strong>Model:</strong> {selectedModel.name}</p>
                  <p>• <strong>Charm Detail:</strong> {selectedCharm.name}</p>
                  <p>• <strong>Flower Origin:</strong> {flowerSource === 'own' ? 'Bring Your Own Flower' : `CHEMI Flower (${selectedChemiFlower.name})`}</p>
                  {flowerSource === 'own' && (
                    <p className="text-amber-400 text-[11px] font-semibold mt-1 flex items-center gap-1">
                      <Send className="w-3 h-3" />
                      <span>Physical flower submission required after ordering</span>
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
            
            {/* Step 1: Select Silver Model */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3B1017] text-[#C5A059] text-xs font-bold flex items-center justify-center border border-stone-800">1</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-white">Step 1 — Choose Silver Model</h3>
              </div>
              <p className="text-xs text-stone-400">Pilih dari 3 model perhiasan perak murni dasar:</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SILVER_MODELS.map((model) => (
                  <div
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      selectedModel.id === model.id
                        ? 'border-[#C5A059] bg-[#3B1017] text-white shadow-md'
                        : 'border-stone-800 bg-[#0F0E0E] text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="h-28 rounded-xl overflow-hidden mb-2">
                      <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold">{model.name}</div>
                    <div className="text-[11px] text-[#C5A059] font-serif-editorial font-semibold">
                      Rp {model.basePrice.toLocaleString('id-ID')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Silver Charm */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3B1017] text-[#C5A059] text-xs font-bold flex items-center justify-center border border-stone-800">2</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-white">Step 2 — Custom Charm Accent</h3>
              </div>
              <p className="text-xs text-stone-400">The flower is the memory. The charm is the personal detail.</p>

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

            {/* Step 3: Your Flower or CHEMI Flower */}
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

                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-[11px] text-stone-300 space-y-1">
                    <p className="font-semibold text-[#C5A059]">Flower Intake Process Overview:</p>
                    <p className="text-stone-400">
                      1. Place order → 2. Receive dispatch label → 3. Send 3–5 petals in paper envelope → 4. Studio preserves and mounts into silver.
                    </p>
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
