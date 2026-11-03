import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DivineDropsLogo } from './DivineDropsLogo';

export const BrandStoryBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#E8DEC8] via-[#F2EADB] to-[#E3D6BC] py-12 md:py-16 border-b border-stone-200">
      {/* Subtle Golden Pattern / Bokeh */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#DFC16E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-stone-900 font-serif uppercase tracking-tight leading-tight mb-4">
              <span>MORE THAN SHOPPING.</span>
              <span className="block text-stone-700">A WAY OF LIFE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans max-w-xl mb-6">
              At Divine Drops, we bring fashion, beauty, electronics, accessories,
              home essentials and gifts together in one carefully curated shopping
              destination. One destination. Countless ways to express yourself.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById('the-edit');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs sm:text-sm tracking-widest px-7 py-3.5 uppercase transition-all duration-300 shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>DISCOVER DIVINE DROPS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#DFC16E]" />
            </button>
          </div>

          {/* Right Portrait & Brand Emblem */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative flex items-center gap-4">
              {/* Model Portrait */}
              <div className="w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Divine Drops Lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Brand Emblem Card */}
              <div className="bg-[#141418]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#DFC16E]/40 shadow-2xl flex flex-col items-center justify-center text-center">
                <DivineDropsLogo variant="gold-full" showTagline={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
