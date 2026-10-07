import React, { useState } from 'react';
import { Gift, Check, Send } from 'lucide-react';

export const GiftSection: React.FC = () => {
  const [selectedPackaging, setSelectedPackaging] = useState<string>('signature');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Graduation');
  const [greetingNote, setGreetingNote] = useState<string>('');
  const [noteSaved, setNoteSaved] = useState<boolean>(false);

  const packagingOptions = [
    {
      id: 'standard',
      name: 'Standard CHEMI Pouch',
      price: 'Included Complimentary',
      desc: 'Minimalist linen pouch with gold foil CHEMI logo stamp.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'signature',
      name: 'Signature Story Gift Box',
      price: 'Free on Orders > 350k',
      desc: 'Rigid maroon box, cream ribbon, dried floral sprig, and story card.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'special',
      name: 'Special Occasion Box',
      price: 'IDR 50,000',
      desc: 'Custom ribbon color, wax seal, keepsake flower mailer, and wax envelope.',
      image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const occasions = ['Graduation', 'Birthday', 'Anniversary', 'Wedding', 'Bridesmaid', 'Self Love'];

  return (
    <section className="py-24 lg:py-36 bg-[#FAF7F2] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-[11px] font-sans-body font-semibold tracking-widest uppercase text-[#581C25]">
            Thoughtful Presentation
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#3B1017]">
            Make It a Gift.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans-body max-w-xl mx-auto">
            Because the way you give it is part of the story.
          </p>
        </div>

        {/* Visual Packaging Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Packaging Options */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 mb-4">
              Visual Packaging Experience
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {packagingOptions.map((pkg) => {
                const isSelected = selectedPackaging === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackaging(pkg.id)}
                    className={`bg-white rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between space-y-3 relative overflow-hidden ${
                      isSelected
                        ? 'border-2 border-[#581C25] ring-2 ring-[#581C25]/10'
                        : 'border-[#EFE8DC] hover:border-[#581C25]/40'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-3 right-3 bg-[#581C25] text-white p-1 rounded-full">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                    <div className="h-28 rounded-xl overflow-hidden bg-stone-100">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif-editorial text-lg font-bold text-stone-900 leading-tight">
                        {pkg.name}
                      </h4>
                      <span className="text-[10px] text-[#581C25] font-bold uppercase tracking-wider block mt-1 font-sans-body">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Greeting Note */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#EFE8DC] space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">
                Add a Personal Message
              </h3>
              <p className="text-xs text-stone-600 font-sans-body">
                Complimentary handwritten story card included inside your gift box.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Select Occasion Tag</label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-3 py-1.5 rounded-full text-xs font-sans-body tracking-wider uppercase transition-all cursor-pointer ${
                      selectedOccasion === occ
                        ? 'bg-[#581C25] text-white'
                        : 'bg-[#FAF7F2] text-stone-700 border border-[#EFE8DC]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Personal Message for Recipient</label>
              <textarea
                rows={4}
                placeholder="Write your story message here..."
                value={greetingNote}
                onChange={(e) => {
                  setGreetingNote(e.target.value);
                  setNoteSaved(false);
                }}
                className="w-full p-4 bg-[#FAF7F2] rounded-2xl border border-[#EFE8DC] text-xs text-stone-800 outline-none focus:border-[#581C25] font-sans-body"
              />
            </div>

            <button
              onClick={() => setNoteSaved(true)}
              className="w-full bg-[#581C25] hover:bg-[#3B1017] text-white py-3.5 rounded-2xl text-xs font-sans-body font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{noteSaved ? 'Gift Note Saved ✓' : 'Add Personal Message'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
