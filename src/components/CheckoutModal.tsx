import React, { useState } from 'react';
import { X, CheckCircle2, Truck, Flower2, ShieldCheck, Copy, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  giftNote: string;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  giftNote,
  onClearCart,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [customerInfo, setCustomerInfo] = useState({
    name: 'Ika Widyantari',
    email: 'ika.widyantari@example.com',
    phone: '081234567890',
    address: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, 12190',
    paymentMethod: 'qris',
  });
  const [copiedAddress, setCopiedAddress] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const requiresFlower = items.some(item => item.details.requiresFlowerSubmission);
  const orderId = 'CHEMI-' + Math.floor(100000 + Math.random() * 900000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    onClearCart();
  };

  const chemiStudioAddress = "CHEMI Keepsake Studio (Attn: Intake Team)\nJl. Wijaya II No. 88, Kebayoran Baru, Jakarta Selatan 12160\nPhone: +62 811-9876-5432";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(chemiStudioAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#EFE8DC] transition-all my-8">
        
        {/* Header */}
        <div className="bg-[#581C25] text-[#FAF7F2] p-6 flex items-center justify-between border-b border-[#3B1017]">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C5A059]">CHEMI Story Checkout</span>
            <h2 className="font-serif-editorial text-2xl font-bold">
              {step === 'form' ? 'Complete Your Gift Order' : 'Order & Memory Confirmed!'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-stone-300 hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Order Items Summary Brief */}
            <div className="bg-white p-4 rounded-2xl border border-[#EFE8DC] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#581C25]">Items in your box ({items.length})</h4>
              <div className="divide-y divide-stone-100 text-xs">
                {items.map(item => (
                  <div key={item.id} className="py-2 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-stone-900">{item.title}</span>
                      <span className="text-stone-500 block text-[11px]">{item.details.beadsOrCharm} • {item.quantity}x</span>
                    </div>
                    <span className="font-serif-editorial font-bold text-[#581C25]">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-stone-100 flex justify-between text-sm font-bold text-stone-900">
                <span>Total Amount</span>
                <span className="font-serif-editorial text-[#581C25] text-lg">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Shipping Info Form */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Shipping & Gifting Address</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">Recipient / Sender Name</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-stone-200 outline-none focus:border-[#581C25]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-stone-200 outline-none focus:border-[#581C25]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-1">Delivery Address</label>
                <textarea
                  required
                  rows={2}
                  value={customerInfo.address}
                  onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full text-xs p-2.5 bg-white rounded-xl border border-stone-200 outline-none focus:border-[#581C25] resize-none"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Payment Method</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'qris', label: 'QRIS / E-Wallet', desc: 'Instant QR Code' },
                  { id: 'bank', label: 'Bank Transfer', desc: 'BCA / Mandiri' },
                  { id: 'card', label: 'Credit Card', desc: 'Visa / Mastercard' },
                ].map(method => (
                  <label
                    key={method.id}
                    className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                      customerInfo.paymentMethod === method.id
                        ? 'border-[#581C25] bg-[#F3ECE1] text-[#581C25] font-semibold'
                        : 'border-stone-200 bg-white text-stone-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={customerInfo.paymentMethod === method.id}
                      onChange={() => setCustomerInfo({...customerInfo, paymentMethod: method.id})}
                      className="sr-only"
                    />
                    <div className="text-xs">{method.label}</div>
                    <div className="text-[9px] text-stone-500 mt-0.5">{method.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {requiresFlower && (
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <Flower2 className="w-4 h-4 text-amber-700" />
                  <span>Important Note for CHEMI Silver Own Flower Orders</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  After completing this step, you will receive your official Order Reference Code (<strong>{orderId}</strong>) and courier dispatch label to send your flower petals to CHEMI studio.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] rounded-xl font-medium text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Confirm & Place Order (Rp {total.toLocaleString('id-ID')})</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-8 space-y-6 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#581C25] font-bold">Order Code: {orderId}</span>
              <h3 className="font-serif-editorial text-3xl font-bold text-stone-900">Thank You, {customerInfo.name}!</h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                We have received your order. CHEMI craftsmen will prepare your gift box with care.
              </p>
            </div>

            {/* Custom Flower Instructions if required */}
            {requiresFlower && (
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EFE8DC] text-left space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#581C25]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Next Step: Send Your Flower to CHEMI Studio</span>
                </div>
                
                <p className="text-xs text-stone-600 leading-relaxed">
                  Please package 3–5 fresh or dried petals in a clean paper envelope (avoid plastic wrap to prevent moisture build-up).
                </p>

                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono space-y-1 relative">
                  <div className="font-bold text-stone-900 font-sans">CHEMI Keepsake Studio Address:</div>
                  <pre className="text-[11px] text-stone-700 whitespace-pre-wrap font-sans">{chemiStudioAddress}</pre>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-2 text-[10px] text-[#581C25] font-semibold font-sans flex items-center gap-1 hover:underline"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedAddress ? 'Address Copied!' : 'Copy Studio Address'}</span>
                  </button>
                </div>
              </div>
            )}

            {giftNote && (
              <div className="bg-[#F3ECE1] p-4 rounded-2xl border border-[#EFE8DC] text-left space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#581C25]">Your Printed Story Card Note:</span>
                <p className="text-xs italic text-stone-700">"{giftNote}"</p>
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#581C25] text-white rounded-xl font-medium text-xs uppercase tracking-widest hover:bg-[#3B1017] transition-all"
              >
                Back to Story Showcase
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
