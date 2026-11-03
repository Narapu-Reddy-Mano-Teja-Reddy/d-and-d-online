import React from 'react';
import { ArrowRight, Percent, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const DualPromoBanners: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleOffers = () => {
    setActiveCategory('Offers');
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRamadan = () => {
    setActiveCategory('Gifts');
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-14 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Exclusive Offers */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#FDEEE7] via-[#FFF5F1] to-[#FDE8DF] border border-rose-200/60 p-6 sm:p-8 flex items-center justify-between shadow-md">
            <div className="relative z-10 max-w-[65%]">
              <span className="text-[11px] font-bold tracking-widest text-rose-600 uppercase">
                Limited Time Promotion
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 tracking-tight mt-1 mb-2">
                Exclusive Offers
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 font-medium">
                A little something special for you.
              </p>
              <button
                onClick={handleOffers}
                className="bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] text-xs font-bold tracking-widest px-5 py-3 uppercase rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow"
              >
                <span>SHOP THE OFFERS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3D Graphic / % Box */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-[#DFC16E] to-[#B88E28] rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
              <div className="absolute inset-1.5 border-2 border-white/40 rounded-xl flex items-center justify-center">
                <Percent className="w-14 h-14 sm:w-16 sm:h-16 text-white stroke-[2.5] drop-shadow" />
              </div>
            </div>
          </div>

          {/* Right Card: Ramadan & Eid Edit */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#171410] via-[#211A12] to-[#120F0C] border border-[#D4AF37]/30 p-6 sm:p-8 flex items-center justify-between shadow-xl">
            {/* Background Lantern Atmosphere */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#DFC16E_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 max-w-[65%]">
              <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#DFC16E] uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Festive Season Celebration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight leading-tight mb-2">
                RAMADAN &amp; EID EDIT
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mb-6 font-light">
                Festive fashion, beauty and gifts.
              </p>
              <button
                onClick={handleRamadan}
                className="bg-gradient-to-r from-[#DFC16E] to-[#B88E28] hover:from-[#EBD084] hover:to-[#CBA33D] text-stone-950 font-bold text-xs tracking-widest px-5 py-3 uppercase rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#DFC16E]/20"
              >
                <span>EXPLORE NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Glowing Lantern Aesthetic Image */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-[#DFC16E]/40 shadow-2xl flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80"
                alt="Festive Lanterns"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
