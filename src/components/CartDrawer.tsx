import React from 'react';
import { X, Trash2, Gift, Flower2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onProceedToCheckout: (giftNote: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onProceedToCheckout,
}) => {
  const [giftNote, setGiftNote] = React.useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const containsOwnFlowerItem = items.some(item => item.details.requiresFlowerSubmission);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-stone-800 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-[#581C25] text-[#FAF7F2] flex items-center justify-between border-b border-[#3B1017]">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#C5A059]" />
              <h2 className="font-serif-editorial text-2xl font-semibold">Your Story Gift Box</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-stone-300 hover:text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE1] text-[#581C25] flex items-center justify-center mx-auto">
                  <Flower2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#581C25]">Your Box is Empty</h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Start by creating a personalized CHEMI Beads gift or preserving your flower memory in CHEMI Silver.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-4 border border-[#EFE8DC] shadow-sm space-y-3">
                    <div className="flex items-start gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-20 h-20 object-cover rounded-xl border border-[#EFE8DC]"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                              item.type === 'silver' ? 'bg-stone-900 text-white' : 'bg-[#581C25] text-white'
                            }`}>
                              {item.type === 'silver' ? 'CHEMI Silver' : 'CHEMI Beads'}
                            </span>
                            <h4 className="font-serif-editorial text-lg font-bold text-stone-900 mt-1">{item.title}</h4>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-red-600 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-stone-500 mt-1">{item.subtitle}</p>

                        <div className="mt-2 text-[11px] text-stone-600 space-y-0.5 bg-[#FAF7F2] p-2 rounded-lg border border-[#EFE8DC]">
                          <div><span className="font-semibold text-stone-700">Customization:</span> {item.details.beadsOrCharm}</div>
                          <div><span className="font-semibold text-stone-700">Palette/Model:</span> {item.details.colorsOrModel}</div>
                          {item.details.flowerSource && (
                            <div><span className="font-semibold text-stone-700">Flower Source:</span> {item.details.flowerSource}</div>
                          )}
                        </div>

                        {item.details.requiresFlowerSubmission && (
                          <div className="mt-2 text-[10px] bg-amber-50 text-amber-900 border border-amber-200 p-2 rounded-lg flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <span><strong>Flower Submission Required:</strong> You will receive guided intake instructions after order.</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden text-xs">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 bg-stone-100 hover:bg-stone-200"
                            >
                              -
                            </button>
                            <span className="px-3 font-semibold">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 bg-stone-100 hover:bg-stone-200"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-serif-editorial text-base font-bold text-[#581C25]">
                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift Message Card */}
                <div className="bg-[#F3ECE1] p-4 rounded-2xl border border-[#EFE8DC] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#581C25]">
                    <Gift className="w-4 h-4 text-[#C5A059]" />
                    <span>Complimentary Story Card Message</span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Write a message to be hand-printed inside the maroon CHEMI story card.
                  </p>
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="E.g., Happy Graduation Maya! So proud of your journey. Wear this story close to your heart..."
                    rows={2}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-[#581C25] resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EFE8DC] space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span>CHEMI Signature Maroon Box Packaging</span>
                  <span className="text-green-700 font-semibold">Included (FREE)</span>
                </div>
                <div className="flex justify-between">
                  <span>Story Card & Ribbon</span>
                  <span className="text-green-700 font-semibold">Included (FREE)</span>
                </div>
                {containsOwnFlowerItem && (
                  <div className="flex justify-between text-amber-800 font-medium pt-1">
                    <span>Flower Courier Pickup Kit</span>
                    <span>Complimentary</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span className="font-serif-editorial text-xl text-[#581C25]">
                    Rp {subtotal.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onProceedToCheckout(giftNote)}
                className="w-full py-3.5 bg-[#581C25] hover:bg-[#3B1017] text-[#FAF7F2] rounded-xl font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Proceed to Story Order</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <p className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span>Encrypted checkout • 100% Satisfaction & Flower Guarantee</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
