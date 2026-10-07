import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Sparkles, CheckCircle2, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface WorkshopsPageProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ setActiveTab }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string>('ws-oct-18');
  const [registered, setRegistered] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    specialRequests: '',
  });

  // Updated Workshop Schedule by CHEMI
  const upcomingWorkshops = [
    {
      id: 'ws-oct-18',
      title: 'Botanical Bead & Freshwater Pearl Masterclass',
      category: 'CHEMI Beads Studio',
      date: 'Saturday, 18 October 2026',
      time: '13:00 - 16:00 WIB',
      location: 'CHEMI Studio, Senopati, South Jakarta',
      seatsRemaining: '4 seats remaining',
      price: 'IDR 350,000 / person',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      curriculum: [
        'Color palette arrangement & flower bead weaving techniques',
        'Natural freshwater pearl grading and wire wrapping',
        'Crafting 2 personalized bead bracelets or 1 choker necklace',
        'Complimentary story box gift packaging to take home',
      ],
    },
    {
      id: 'ws-oct-25',
      title: 'Flower Preservation & 925 Silver Resin Casting',
      category: 'CHEMI Silver Studio',
      date: 'Sunday, 25 October 2026',
      time: '10:00 - 14:00 WIB',
      location: 'CHEMI Studio, Senopati, South Jakarta',
      seatsRemaining: '2 seats remaining',
      price: 'IDR 550,000 / person',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
      curriculum: [
        'How to press and moisture-protect bouquet petals',
        'UV crystal resin casting into solid 925 sterling silver frames',
        'Creating a custom flower pendant or ring with your own petals',
        'Polishing silver and certificate of completion',
      ],
    },
    {
      id: 'ws-nov-08',
      title: 'Bridal Party & Bridesmaid Private Keepsake Session',
      category: 'Private Group Workshop',
      date: 'Saturday, 8 November 2026',
      time: '14:00 - 17:00 WIB',
      location: 'CHEMI Studio or Private Venue',
      seatsRemaining: 'Private Booking (Max 8 people)',
      price: 'IDR 2,400,000 / group (up to 6 people)',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      curriculum: [
        'Preserving wedding bouquet flowers into matching bridesmaid jewelry',
        'Custom engraved initial charms for each bridesmaid',
        'Sip & Craft experience with afternoon tea and refreshments',
      ],
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-stone-900 pt-8 pb-24 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F3ECE1] border border-[#EFE8DC] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#581C25]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Updated Studio Schedule</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#3B1017] uppercase">
            CHEMI STUDIO WORKSHOPS
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            CHEMI bukan hanya tentang perhiasan yang kamu beli. Kami menciptakan pengalaman langsung untuk belajar merangkai perhiasan cerita dan mengabadikan kelopak bunga bermakna.
          </p>
        </div>

        {/* Upcoming Workshop Schedule Cards */}
        <div className="space-y-8 mb-16">
          <h2 className="font-serif-editorial text-3xl font-bold text-[#3B1017] border-b border-[#EFE8DC] pb-4">
            Upcoming Workshop Schedule
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((ws) => (
              <div
                key={ws.id}
                className={`bg-white rounded-3xl overflow-hidden border p-6 flex flex-col justify-between space-y-6 shadow-xs transition-all ${
                  selectedWorkshop === ws.id ? 'ring-2 ring-[#581C25] border-[#581C25] shadow-lg' : 'border-[#EFE8DC]'
                }`}
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-stone-100 mb-4">
                    <img src={ws.image} alt={ws.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#581C25] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {ws.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-[#C5A059] bg-[#3B1017] px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {ws.seatsRemaining}
                  </span>

                  <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 leading-tight">
                    {ws.title}
                  </h3>

                  <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-sans-body">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#581C25]" />
                      <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#581C25]" />
                      <span>{ws.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#581C25]" />
                      <span>{ws.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#581C25] block">What You'll Learn:</span>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {ws.curriculum.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#581C25] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-serif-editorial text-lg font-bold text-[#581C25]">{ws.price}</span>
                  <button
                    onClick={() => setSelectedWorkshop(ws.id)}
                    className="bg-[#581C25] hover:bg-[#3B1017] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Select Seat
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Registration Form & WhatsApp Instant Booking */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFE8DC] shadow-xl max-w-4xl mx-auto">
          {registered ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#581C25] mx-auto" />
              <h3 className="font-serif-editorial text-3xl font-bold text-[#581C25]">Seat Registration Requested!</h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Thank you for registering. Our studio team will contact you via WhatsApp with payment instructions and studio directions.
              </p>
              <button
                onClick={() => setRegistered(false)}
                className="bg-[#581C25] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              >
                Register Another Participant
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif-editorial text-3xl font-bold text-[#3B1017]">
                  Register Your Seat for Studio Workshop
                </h3>
                <p className="text-xs text-stone-600">
                  Select your preferred workshop and fill in your details. You can also chat directly on WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Indah"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 08123456789"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">Selected Workshop</label>
                  <select
                    value={selectedWorkshop}
                    onChange={e => setSelectedWorkshop(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25]"
                  >
                    {upcomingWorkshops.map(ws => (
                      <option key={ws.id} value={ws.id}>{ws.title} — {ws.date}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">Number of Participants</label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={formData.participants}
                    onChange={e => setFormData({ ...formData, participants: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC] text-xs outline-none focus:border-[#581C25]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#581C25] hover:bg-[#3B1017] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all"
              >
                <Send className="w-4 h-4 text-[#C5A059]" />
                <span>Submit Workshop Seat Request</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20CHEMI%20Studio,%20saya%20ingin%20bertanya%20jadwal%20workshop"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#581C25] hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-[#581C25]" />
                  <span>Or Chat Direct on WhatsApp: +62 812-3456-7890</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
