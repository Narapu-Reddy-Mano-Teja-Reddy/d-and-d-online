import React from 'react';
import { CATEGORY_CARDS } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const ShopByCategorySection: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleSelect = (catName: string) => {
    setActiveCategory(catName);
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories-grid" className="py-12 md:py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-left mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
            Explore the collections that match your style, your lifestyle and everything in between.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {CATEGORY_CARDS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.category)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/70 hover:border-[#DFC16E] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="aspect-[4/4] overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-750"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text content below */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm md:text-base group-hover:text-[#B88E28] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-2 text-[11px] sm:text-xs font-medium text-stone-500 group-hover:text-stone-950 flex items-center transition-colors">
                  <span>{item.actionText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
