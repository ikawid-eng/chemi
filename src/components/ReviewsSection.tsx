import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Star, Sparkles, MessageCircle, Send, CheckCircle2, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'graduation' | 'wedding' | 'birthday' | 'silver' | 'beads'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    'st-1': 24,
    'st-2': 38,
    'st-3': 19,
    'st-4': 42,
    'st-5': 31,
    'st-6': 27,
  });

  const [newReview, setNewReview] = useState({
    name: '',
    occasion: 'Graduation',
    productType: 'CHEMI Silver Necklace',
    rating: 5,
    quote: '',
  });

  const dummyReviews = [
    {
      id: 'st-1',
      name: 'Nadia Pratama',
      city: 'Jakarta Selatan',
      category: 'graduation',
      occasion: 'Graduation Memory',
      productPurchased: 'CHEMI Silver • Oval Rose Pendant',
      date: '12 September 2026',
      rating: 5,
      quote: 'Saya mengirimkan beberapa kelopak mawar merah dari buket kelulusan UI saya. CHEMI mengubahnya menjadi liontin oval perak perak 925 yang sangat cantik. Momen wisuda ini sekarang bisa saya pakai setiap hari.',
      image: '/src/assets/images/silver_pendant_oval_1791364570015.jpg',
      verified: true,
    },
    {
      id: 'st-2',
      name: 'Ananda & Kevin',
      city: 'Bandung',
      category: 'wedding',
      occasion: 'Wedding Bouquet',
      productPurchased: 'CHEMI Silver • Heart Keepsake Locket',
      date: '28 Agustus 2026',
      rating: 5,
      quote: 'Bunga dari buket pernikahan kami preserved sempurna dalam liontin bentuk hati perak murni. Kemasannya luar biasa mewah dengan kartu ucapan maroon bertuliskan cerita pernikahan kami.',
      image: '/src/assets/images/silver_pendant_heart_1791364582838.jpg',
      verified: true,
    },
    {
      id: 'st-3',
      name: 'Clarissa Utami',
      city: 'Surabaya',
      category: 'birthday',
      occasion: 'Birthday Gift for Bestie',
      productPurchased: 'CHEMI Beads • Blush Pearl Bracelet',
      date: '04 Oktober 2026',
      rating: 5,
      quote: 'Sangat suka pengalaman custom CHEMI Beads! Saya merangkai gelang dengan kombinasi mutiara air tawar dan warna favorit sahabat saya. Ketika dibuka saat dinner ulang tahun, dia langsung terharu!',
      image: '/src/assets/images/chemi_beads_showcase_1791363842551.jpg',
      verified: true,
    },
    {
      id: 'st-4',
      name: 'Maya Indah & Bridesmaids',
      city: 'Bali',
      category: 'wedding',
      occasion: 'Bridesmaids Gift Box',
      productPurchased: 'CHEMI Silver • Teardrop Bloom Pendant Set',
      date: '15 Juli 2026',
      rating: 5,
      quote: 'Saya memesan 5 liontin teardrop dari bunga pernikahan saya untuk semua bridesmaid. Tim CHEMI sangat responsif di WhatsApp dan hasil preservasinya mengabadikan kenangan Bali kami selamanya.',
      image: '/src/assets/images/silver_pendant_teardrop_1791364603340.jpg',
      verified: true,
    },
    {
      id: 'st-5',
      name: 'Siti Rahmawati',
      city: 'Yogyakarta',
      category: 'graduation',
      occasion: 'Thesis Milestone Self-Love',
      productPurchased: 'CHEMI Beads • Initial Pearl Choker',
      date: '20 September 2026',
      rating: 5,
      quote: 'Membeli perhiasan CHEMI Beads ini sebagai hadiah untuk diri sendiri setelah lulus sidang skripsi. Setiap kali memegang manik-manik bunganya, saya teringat perjuangan dan kerja keras sendiri.',
      image: '/src/assets/images/chemi_workshop_studio_1791363890862.jpg',
      verified: true,
    },
    {
      id: 'st-6',
      name: 'Dion & Felicia',
      city: 'Tangerang',
      category: 'birthday',
      occasion: '3rd Anniversary Gift',
      productPurchased: 'CHEMI Silver • Wire Cuff Bracelet',
      date: '01 Oktober 2026',
      rating: 5,
      quote: 'Gelang cuff perak 925 ini sangat kokoh dan pengerjaannya rapi sekali. Kelopak bunga krisan emasnya tampak berkilau di dalam resin jernih. Partner saya sangat menyukainya!',
      image: '/src/assets/images/silver_bracelet_cuff_1791364614195.jpg',
      verified: true,
    },
  ];

  const filteredReviews = activeCategory === 'all'
    ? dummyReviews
    : dummyReviews.filter(r => r.category === activeCategory);

  const toggleLike = (id: string) => {
    setLikeCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewReviewSubmitted(true);
    setTimeout(() => {
      setNewReviewSubmitted(false);
      setIsModalOpen(false);
      setNewReview({ name: '', occasion: 'Graduation', productType: 'CHEMI Silver Necklace', rating: 5, quote: '' });
    }, 2500);
  };

  return (
    <section id="reviews-section" className="py-24 lg:py-32 bg-[#0F0E0E] text-[#FAF7F2] relative overflow-hidden border-t border-stone-800 font-sans-body">
      
      {/* Background Silk Atmospheric Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#3B1017]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#581C25]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-sans-body font-bold uppercase tracking-widest text-[#C5A059] bg-[#3B1017] px-3.5 py-1 rounded-full border border-stone-800">
              Stories They Keep — Verified Reviews
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-white">
              Loved by Over 10,000 Memory Keepers.
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Cerita jujur dari para pemilik perhiasan CHEMI yang mengabadikan momen wisuda, buket pernikahan, hingga ulang tahun.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#581C25] hover:bg-[#7A2834] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#7A2834] transition-all cursor-pointer shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs for Reviews */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-800/80">
          {[
            { id: 'all', label: 'All Stories (10,000+)' },
            { id: 'graduation', label: 'Graduation Flowers' },
            { id: 'wedding', label: 'Wedding Bouquets' },
            { id: 'birthday', label: 'Birthday & Gifts' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#C5A059] text-stone-900 font-bold shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#161515] text-[#FAF7F2] rounded-3xl p-6 border border-stone-800 shadow-2xl flex flex-col justify-between space-y-5 hover:border-[#581C25] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] bg-[#3B1017] px-2.5 py-0.5 rounded-full border border-stone-800">
                    {item.occasion}
                  </span>
                  <div className="flex items-center text-[#C5A059] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Photo of Product / Moment */}
                <div className="h-56 rounded-2xl overflow-hidden bg-stone-900 relative">
                  <img
                    src={item.image}
                    alt={item.occasion}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] text-stone-300 font-mono truncate">
                    {item.productPurchased}
                  </div>
                </div>

                {/* Quote Prose */}
                <p className="text-stone-300 text-xs leading-relaxed italic font-sans-body">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer Author */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="font-serif-editorial font-bold text-white text-base flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-[10px] text-stone-400 block">{item.city} • {item.date}</span>
                </div>

                <button
                  onClick={() => toggleLike(item.id)}
                  className="flex items-center gap-1.5 text-[11px] text-stone-400 hover:text-[#C5A059] bg-stone-900 px-3 py-1.5 rounded-full border border-stone-800 transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{likeCounts[item.id] || 0}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Submit Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#161515] border border-stone-800 rounded-3xl p-8 max-w-lg w-full text-white space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <h3 className="font-serif-editorial text-2xl font-bold text-white">Share Your CHEMI Story Review</h3>
                  <p className="text-xs text-stone-400">Your review helps future memory keepers!</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-stone-400 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {newReviewSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
                  <h4 className="font-serif-editorial text-2xl font-bold text-white">Thank You for Your Review!</h4>
                  <p className="text-xs text-stone-300">Your testimonial has been submitted to the CHEMI team.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Nadia P."
                      value={newReview.name}
                      onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full text-xs p-3 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">Occasion</label>
                      <select
                        value={newReview.occasion}
                        onChange={e => setNewReview({ ...newReview, occasion: e.target.value })}
                        className="w-full text-xs p-3 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059]"
                      >
                        <option value="Graduation">Graduation Memory</option>
                        <option value="Wedding">Wedding Bouquet</option>
                        <option value="Birthday">Birthday Gift</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Self Love">Milestone Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">Rating</label>
                      <select
                        value={newReview.rating}
                        onChange={e => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                        className="w-full text-xs p-3 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059]"
                      >
                        <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                        <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">Your Review / Experience</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the moment and how your CHEMI jewelry preserved it..."
                      value={newReview.quote}
                      onChange={e => setNewReview({ ...newReview, quote: e.target.value })}
                      className="w-full text-xs p-3 bg-stone-900 rounded-xl border border-stone-800 text-white outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#581C25] hover:bg-[#7A2834] text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-[#7A2834]"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Submit Story Review</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
