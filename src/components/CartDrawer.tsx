import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Sparkles, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotalAED,
    formatPrice,
    country,
    setIsCheckoutModalOpen,
    showToast,
  } = useStore();

  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState<number>(0);

  if (!isCartOpen) return null;

  const freeThreshold = country.freeShippingThreshold;
  const convertedSubtotal = cartSubtotalAED * country.rate;
  const isFreeShipping = convertedSubtotal >= freeThreshold;
  const amountNeededForFree = Math.max(0, freeThreshold - convertedSubtotal);
  const progressPercent = Math.min(100, (convertedSubtotal / freeThreshold) * 100);

  const discountAmountAED = (cartSubtotalAED * appliedDiscountPercent) / 100;
  const finalTotalAED = cartSubtotalAED - discountAmountAED;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'DIVINE10') {
      setAppliedDiscountPercent(10);
      showToast('10% VIP Discount Applied!');
    } else {
      showToast('Invalid promo code. Try DIVINE10');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#B88E28]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Shopping Bag</h3>
                <p className="text-xs text-stone-500">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#FAF5EB] px-5 py-3 border-b border-[#DFC16E]/30">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="flex items-center gap-1.5 text-stone-800">
                <Truck className="w-3.5 h-3.5 text-[#B88E28]" />
                {isFreeShipping ? (
                  <span className="text-emerald-700 font-bold">
                    You've unlocked FREE Delivery!
                  </span>
                ) : (
                  <span>
                    Add {country.symbol} {Math.round(amountNeededForFree)} more for FREE Delivery!
                  </span>
                )}
              </span>
              <span className="text-[11px] text-[#B88E28] font-bold">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#DFC16E] to-[#B88E28] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-stone-800 font-bold text-base mb-1">
                  Your bag is empty
                </h4>
                <p className="text-xs text-stone-500 mb-6">
                  Discover our curated fashion, beauty, electronics and luxury gifts.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-stone-950 text-white text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#DFC16E] hover:text-stone-950 transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 first:pt-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-stone-100 shrink-0 border border-stone-200/80"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedVariant && (
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {item.product.variantType || 'Option'}: {item.selectedVariant}
                        </p>
                      )}

                      <p className="text-xs font-bold text-stone-900 mt-1">
                        {formatPrice(item.product.priceAED)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-stone-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-stone-500 hover:bg-stone-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-500 hover:bg-stone-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-[11px] text-stone-400 font-medium ml-auto">
                        Total: {formatPrice(item.product.priceAED * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter DIVINE10"
                    className="w-full bg-white border border-stone-300 text-xs py-2 pl-9 pr-3 rounded text-stone-900 uppercase focus:outline-none focus:border-[#DFC16E]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-stone-900 text-white text-xs font-bold px-3 py-2 rounded hover:bg-[#B88E28] transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedDiscountPercent > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> VIP 10% Discount Applied
                  </span>
                  <span>-{formatPrice(discountAmountAED)}</span>
                </div>
              )}

              {/* Subtotal & Free Shipping breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    {formatPrice(cartSubtotalAED)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Delivery</span>
                  <span className="text-emerald-700 font-medium">
                    {isFreeShipping ? 'FREE' : formatPrice(25)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span className="text-base text-stone-950">
                    {formatPrice(finalTotalAED + (isFreeShipping ? 0 : 25))}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs tracking-widest py-3.5 uppercase rounded transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 text-[#DFC16E]" />
              </button>

              <p className="text-[10px] text-center text-stone-400">
                🔒 Safe &amp; encrypted checkout · 100% genuine guaranteed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
