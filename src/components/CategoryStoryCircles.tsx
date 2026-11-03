import React from 'react';
import { Percent } from 'lucide-react';
import { STORY_CATEGORIES } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const CategoryStoryCircles: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleSelectCategory = (catName: string) => {
    setActiveCategory(catName);
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-6 md:py-8 border-b border-stone-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 md:gap-8 overflow-x-auto pb-2 scrollbar-none">
          {STORY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.name)}
              className="flex flex-col items-center gap-2 group flex-shrink-0 cursor-pointer text-center focus:outline-none"
            >
              {/* Outer Golden Ring / Border */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#DFC16E] via-[#E8D197] to-[#DFC16E] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center border-2 border-white">
                  {cat.isSpecial ? (
                    /* The Red 8th Circle: Offers with % */
                    <div className="w-full h-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white">
                      <Percent className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5] drop-shadow" />
                    </div>
                  ) : (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              {/* Title below circle */}
              <span className="text-xs sm:text-sm font-medium text-stone-800 group-hover:text-[#B88E28] transition-colors whitespace-nowrap">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
