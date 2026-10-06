import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Copy, ArrowRight, Flower2 } from 'lucide-react';
import { NavigationTab } from '../types';

interface FlowerSubmissionGuideProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const FlowerSubmissionGuide: React.FC<FlowerSubmissionGuideProps> = ({ setActiveTab }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you accept fresh or dried flowers?',
      a: 'We accept both! Fresh petals are carefully dehydrated in our studio using natural silica crystal preservation. Dried or vintage petals from past celebrations can also be processed immediately.'
    },
    {
      q: 'How many petals do I need to send?',
      a: 'We only need 3 to 5 intact petals per piece of jewelry. We recommend sending 2 extra petals as backup for quality selection.'
    },
    {
      q: 'What packaging should I use to avoid mold or damage during courier shipping?',
      a: 'Wrap your petals loosely between two clean paper towels or place them inside a paper envelope. DO NOT seal them tightly in plastic zip bags while wet, as trapped moisture causes molding.'
    },
    {
      q: 'How long does the flower preservation and jewelry creation process take?',
      a: 'Standard crafting takes 7–10 business days after our studio confirms receipt of your flower petals.'
    },
    {
      q: 'What happens if my flower arrives damaged or unusable?',
      a: 'Our botanical team inspects every flower upon arrival. If petals are damaged or moldy, we will notify you immediately. You may send replacement petals or choose from our CHEMI botanical reserve.'
    }
  ];

  return (
    <div className="py-16 bg-[#0F0E0E] text-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
            CHEMI Silver Keepsake Guide
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-white leading-tight">
            Send Us the Flower That Holds Your Story.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-sans-body">
            Panduan lengkap persiapan, pengemasan, dan pengiriman kelopak bungamu ke CHEMI Keepsake Studio Jakarta.
          </p>
        </div>

        {/* Workflow Steps Card */}
        <div className="bg-[#161515] rounded-3xl p-8 border border-stone-800 space-y-8">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#C5A059] text-center">
            How Your Flower Becomes Jewelry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Order Online', desc: 'Select CHEMI Silver model and choose "Bring Your Own Flower".' },
              { step: '02', title: 'Pack Petals', desc: 'Place 3–5 petals inside a paper envelope with your Order ID.' },
              { step: '03', title: 'Dispatch Courier', desc: 'Send via Instant Courier or Express Shipping to our Jakarta studio.' },
              { step: '04', title: 'Receive Keepsake', desc: 'Our artisans preserve your flower in 925 silver & deliver in a gift box.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#0F0E0E] p-6 rounded-2xl border border-stone-800 space-y-2">
                <span className="font-serif-editorial text-3xl font-bold text-[#C5A059]">{item.step}</span>
                <h3 className="font-serif-editorial text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-stone-400 font-sans-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Do's */}
          <div className="bg-[#161515] p-8 rounded-3xl border border-emerald-900/50 space-y-4">
            <h3 className="font-serif-editorial text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              <span>Recommended Preparation</span>
            </h3>
            <ul className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Select 3–5 healthy petals with rich color and minimal bruising.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Place petals flat between dry paper towels inside a standard paper envelope.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Include a note with your Name and Order Reference ID inside the package.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Send via same-day instant courier for fresh bouquet flowers in Jabodetabek.</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-[#161515] p-8 rounded-3xl border border-amber-900/50 space-y-4">
            <h3 className="font-serif-editorial text-2xl font-bold text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span>Avoid These Mistakes</span>
            </h3>
            <ul className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>DO NOT wrap fresh petals tightly in airtight plastic zip bags (causes mold).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>DO NOT apply spray perfume, water droplets, or glues directly onto petals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Avoid crushed or completely decayed petals.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#161515] rounded-3xl p-8 border border-stone-800 space-y-6">
          <h2 className="font-serif-editorial text-3xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0F0E0E] rounded-2xl border border-stone-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-stone-200 flex justify-between items-center hover:text-[#C5A059]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#C5A059] text-lg font-bold">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-stone-400 leading-relaxed border-t border-stone-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-serif-editorial text-2xl font-bold text-white">Ready to Preserve Your Flower Story?</h3>
          <button
            onClick={() => setActiveTab('silver-customizer')}
            className="inline-flex items-center gap-2 bg-[#581C25] hover:bg-[#7A2834] text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            <Flower2 className="w-4 h-4 text-[#C5A059]" />
            <span>Go to CHEMI Silver Studio</span>
          </button>
        </div>

      </div>
    </div>
  );
};
