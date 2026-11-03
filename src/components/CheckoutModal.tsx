import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Sparkles, MapPin, Phone, User as UserIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    cart,
    clearCart,
    cartSubtotalAED,
    formatPrice,
    country,
  } = useStore();

  const [fullName, setFullName] = useState('Noura Al-Maktoum');
  const [phoneNumber, setPhoneNumber] = useState('+971 50 123 4567');
  const [city, setCity] = useState('Dubai');
  const [address, setAddress] = useState('Downtown Dubai, Burj Crown Residence, Apt 1402');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'tabby' | 'card'>('card');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutModalOpen) return null;

  const isFreeShipping = cartSubtotalAED * country.rate >= country.freeShippingThreshold;
  const shippingFeeAED = isFreeShipping ? 0 : 25;
  const expressFeeAED = shippingMethod === 'express' ? 30 : 0;
  const totalAmountAED = cartSubtotalAED + shippingFeeAED + expressFeeAED;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `DD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setIsSuccess(true);

    // Fire luxury celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E5C775', '#000000', '#B88E28', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }

    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Header */}
        <div className="bg-[#121216] px-6 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xl">{country.flag}</span>
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                Secure Checkout · Divine Drops
              </h3>
              <p className="text-[11px] text-[#DFC16E]">
                Direct luxury shopping to {country.name}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-stone-400 hover:text-white p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Order Confirmed View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-stone-900">
              Thank You For Your Order!
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Your order <span className="font-mono font-bold text-stone-900">#{orderId}</span> has been confirmed and is being hand-packaged at our Dubai fulfilment salon.
            </p>

            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Recipient:</span>
                <span className="font-semibold text-stone-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivery Address:</span>
                <span className="font-semibold text-stone-900 text-right truncate max-w-[200px]">
                  {address}, {city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Payment:</span>
                <span className="font-semibold text-stone-900 uppercase">
                  {paymentMethod === 'cod'
                    ? 'Cash on Delivery'
                    : paymentMethod === 'tabby'
                    ? 'Tabby (4 Payments)'
                    : 'Credit Card (Processed)'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 font-bold text-stone-950 text-sm">
                <span>Amount Paid:</span>
                <span className="text-[#B88E28]">{formatPrice(totalAmountAED)}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs tracking-widest px-8 py-3.5 uppercase rounded-sm transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-6">
            {/* Delivery Details */}
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B88E28]" />
                1. Delivery Address ({country.name})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Full Name</label>
                  <div className="relative">
                    <UserIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 pl-8 text-stone-900 focus:outline-none focus:border-[#DFC16E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 pl-8 text-stone-900 focus:outline-none focus:border-[#DFC16E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 font-medium">City / Emirate</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 text-stone-900 focus:outline-none focus:border-[#DFC16E]"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Street, Villa / Flat</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Villa 14, Palm Jumeirah"
                    className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 text-stone-900 focus:outline-none focus:border-[#DFC16E]"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Speed */}
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B88E28]" />
                2. Shipping Speed
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div
                  onClick={() => setShippingMethod('standard')}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    shippingMethod === 'standard'
                      ? 'border-[#B88E28] bg-[#FAF5EB]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold text-stone-900">Standard Delivery</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">1-2 Business Days</div>
                  <div className="text-xs font-bold text-emerald-700 mt-1">
                    {isFreeShipping ? 'FREE' : formatPrice(25)}
                  </div>
                </div>

                <div
                  onClick={() => setShippingMethod('express')}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    shippingMethod === 'express'
                      ? 'border-[#B88E28] bg-[#FAF5EB]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold text-stone-900 flex items-center justify-between">
                    <span>Same-Day VIP Courier</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Delivered within 6 hours (Dubai)</div>
                  <div className="text-xs font-bold text-[#B88E28] mt-1">
                    +{formatPrice(30)}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#B88E28]" />
                3. Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#B88E28] bg-[#FAF5EB] font-bold'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="text-stone-900 font-semibold">Credit / Debit Card</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Visa, Mastercard, Amex</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('tabby')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    paymentMethod === 'tabby'
                      ? 'border-[#00E5FF] bg-cyan-50 font-bold'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="text-[#00B4D8] font-bold">tabby</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">4 interest-free payments</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#B88E28] bg-[#FAF5EB] font-bold'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="text-stone-900 font-semibold">Cash on Delivery</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Pay upon handover</div>
                </button>
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-500">Total payable</p>
                <p className="text-xl font-bold font-serif text-stone-900">
                  {formatPrice(totalAmountAED)}
                </p>
              </div>

              <button
                type="submit"
                className="bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs tracking-widest px-8 py-3.5 uppercase rounded transition-all shadow-xl cursor-pointer"
              >
                CONFIRM &amp; PLACE ORDER
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
