import React, { useState } from 'react';
import { Gift, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const NewsletterSection: React.FC = () => {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    showToast('Welcome to Divine Drops VIP! Use code DIVINE10 for 10% off.');
  };

  return (
    <section className="py-12 md:py-16 bg-[#F6F1E7] border-b border-stone-200 relative overflow-hidden">
      {/* Decorative Golden Ribbon Element */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Ribbon / Gift & Title */}
          <div className="flex items-center gap-5 max-w-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#DFC16E] to-[#B88E28] p-4 text-white shadow-xl flex items-center justify-center shrink-0">
              <Gift className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.8]" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 tracking-tight leading-tight uppercase">
                A LITTLE LUXURY IN YOUR INBOX
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
                Be the first to discover new collections, exclusive offers and the latest from Divine Drops.
              </p>
            </div>
          </div>

          {/* Right Input Form */}
          <div className="w-full lg:max-w-md">
            {isSubscribed ? (
              <div className="bg-white p-4 rounded-lg border border-emerald-300 shadow-sm flex items-center gap-3 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold">Thank you for joining our VIP circle!</p>
                  <p className="text-stone-600 mt-0.5">
                    Your exclusive 10% discount code is <span className="font-mono font-bold text-stone-950">DIVINE10</span>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 border border-stone-300 rounded-sm focus:outline-none focus:border-[#DFC16E] shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs tracking-widest px-6 py-3 uppercase rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md"
                >
                  JOIN THE COMMUNITY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
