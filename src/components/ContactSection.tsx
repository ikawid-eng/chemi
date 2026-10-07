import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: 'Graduation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 lg:py-36 bg-[#3B1017] text-[#FAF7F2] border-t border-[#581C25] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-[11px] font-sans-body font-semibold uppercase tracking-widest text-[#C5A059] bg-[#581C25] px-3.5 py-1 rounded-full border border-[#581C25]">
              Let's Create Together
            </span>

            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold leading-tight text-white">
              Have a Story in Mind?
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans-body">
              Whether you're looking for a meaningful gift, want to create your own piece, or join our next workshop — we'd love to create it with you.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="bg-[#581C25] hover:bg-[#7A2834] text-white px-9 py-4 rounded-full text-xs font-sans-body font-medium uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer border border-[#7A2834]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Talk to CHEMI →</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#581C25] space-y-3 text-xs text-stone-300 font-sans-body">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Jakarta Studio: Senopati, Kebayoran Baru, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Email: hello@chemi.id</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 bg-[#FAF7F2] text-stone-800 p-8 sm:p-12 rounded-3xl border border-[#EFE8DC] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#581C25] mx-auto" />
                <h3 className="font-serif-editorial text-2xl font-bold text-[#581C25]">Message Received</h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto font-sans-body">
                  Thank you for reaching out. Our design team will contact you via WhatsApp or email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#581C25] text-white px-6 py-2.5 rounded-full text-xs font-sans-body font-medium uppercase tracking-wider hover:bg-[#3B1017] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-editorial text-2xl font-bold text-[#581C25]">
                  Send Us Your Story Request
                </h3>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Indah"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25] font-sans-body"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Email Address / WhatsApp</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 08123456789 or maya@gmail.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25] font-sans-body"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Inquiry Type</label>
                  <select
                    value={formData.occasion}
                    onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25] font-sans-body"
                  >
                    <option value="Graduation">Graduation Flower Preservation</option>
                    <option value="Wedding">Wedding Bouquet Keepsake</option>
                    <option value="Beads Gift">Custom Beads Gift Request</option>
                    <option value="Workshop">Workshop Booking</option>
                    <option value="General">Other Query</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans-body">Your Story / Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share the details of your moment or request..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25] font-sans-body"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#581C25] hover:bg-[#3B1017] text-white py-3.5 rounded-xl text-xs font-sans-body font-medium uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Submit Story Request</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
