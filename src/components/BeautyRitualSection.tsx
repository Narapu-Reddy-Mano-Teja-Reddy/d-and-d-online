import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BEAUTY_RITUALS } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const BeautyRitualSection: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleSelect = () => {
    setActiveCategory('Beauty');
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              Your Beauty. Your Ritual.
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
              Discover beauty essentials and fragrances that make every day feel special.
            </p>
          </div>

          <button
            onClick={handleSelect}
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#B88E28] transition-colors group self-start sm:self-end"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {BEAUTY_RITUALS.map((ritual, idx) => (
            <div
              key={idx}
              onClick={handleSelect}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-rose-50/40 relative">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#B88E28] transition-colors">
                  {ritual.title}
                </h3>
                <p className="text-xs text-stone-500 group-hover:text-stone-900 transition-colors mt-0.5">
                  {ritual.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
