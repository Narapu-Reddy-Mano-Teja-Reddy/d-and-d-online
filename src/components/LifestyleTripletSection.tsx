import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LIFESTYLE_COLLECTIONS } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const LifestyleTripletSection: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleAction = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-14 bg-white border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LIFESTYLE_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-md group border border-stone-200/80"
            >
              {/* Background Image */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
              />

              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

              {/* Text & Button Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start z-10">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight drop-shadow">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 mb-4">
                  {col.tagline}
                </p>
                <button
                  onClick={() => handleAction(col.category)}
                  className="bg-stone-900/95 hover:bg-[#DFC16E] text-white hover:text-stone-950 text-xs font-bold tracking-widest px-5 py-2.5 uppercase transition-all duration-300 flex items-center gap-1.5 rounded-sm shadow-md cursor-pointer border border-white/20"
                >
                  <span>{col.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
