import React, { useState } from 'react';
import { X, User, Crown, Package, Heart, LogIn } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountModal: React.FC = () => {
  const {
    isAccountModalOpen,
    setIsAccountModalOpen,
    showToast,
    setIsCartOpen,
    setIsWishlistOpen,
  } = useStore();

  const [email, setEmail] = useState('vip.member@divinedrops.ae');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isAccountModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Logged in as Divine Drops VIP Member');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Header */}
        <div className="bg-[#121216] px-5 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#DFC16E]/20 flex items-center justify-center text-[#DFC16E]">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">Divine Drops Club</h3>
              <p className="text-[11px] text-[#DFC16E]">Exclusive Member Benefits</p>
            </div>
          </div>
          <button
            onClick={() => setIsAccountModalOpen(false)}
            className="text-stone-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isLoggedIn ? (
          <div className="p-6 space-y-5">
            <div className="flex items-center gap-3 p-3.5 bg-[#FAF8F5] rounded-xl border border-stone-200">
              <div className="w-12 h-12 rounded-full bg-stone-950 text-[#DFC16E] flex items-center justify-center font-bold text-lg font-serif">
                NA
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Noura Al-Maktoum</h4>
                <p className="text-xs text-[#B88E28] font-semibold flex items-center gap-1">
                  <Crown className="w-3 h-3" /> Gold Tier · 4,250 Points
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">{email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => {
                  setIsAccountModalOpen(false);
                  setIsCartOpen(true);
                }}
                className="p-3 rounded-lg border border-stone-200 hover:border-stone-900 flex flex-col items-center gap-1.5 transition-colors"
              >
                <Package className="w-5 h-5 text-stone-700" />
                <span className="font-semibold text-stone-900">Track Orders</span>
                <span className="text-[10px] text-stone-400">1 active shipment</span>
              </button>

              <button
                onClick={() => {
                  setIsAccountModalOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="p-3 rounded-lg border border-stone-200 hover:border-stone-900 flex flex-col items-center gap-1.5 transition-colors"
              >
                <Heart className="w-5 h-5 text-rose-600" />
                <span className="font-semibold text-stone-900">Saved Items</span>
                <span className="text-[10px] text-stone-400">View Wishlist</span>
              </button>
            </div>

            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200/80 text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <span>🌟 Active VIP Perks:</span>
              </div>
              <ul className="text-[11px] list-disc list-inside space-y-0.5 text-amber-800">
                <li>Complimentary White-Glove Courier Delivery in Dubai</li>
                <li>Early access to Ramadan &amp; Eid Haute Collections</li>
                <li>Dedicated Personal Shopper on WhatsApp</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setIsLoggedIn(false);
                showToast('Signed out successfully');
              }}
              className="w-full py-2.5 text-xs text-stone-500 hover:text-stone-900 transition-colors font-medium text-center"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#DFC16E]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-stone-200 rounded p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#DFC16E]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs tracking-widest py-3 uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <LogIn className="w-4 h-4 text-[#DFC16E]" />
              <span>SIGN IN TO VIP ACCOUNT</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
