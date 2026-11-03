import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TECH_EVERYDAY } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const UpgradeEverydaySection: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleSelect = () => {
    setActiveCategory('Electronics');
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              Upgrade Your Everyday
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
              Discover the technology that keeps you connected, productive and entertained.
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

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_EVERYDAY.map((item, idx) => (
            <div
              key={idx}
              onClick={handleSelect}
              className="group bg-[#FAF9F6] rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-square p-4 flex items-center justify-center bg-white/60 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3">
                <h3 className="font-bold text-stone-900 text-xs sm:text-sm group-hover:text-[#B88E28] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 group-hover:text-stone-900 transition-colors mt-0.5 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
