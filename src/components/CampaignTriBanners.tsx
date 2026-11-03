import React from 'react';
import { useStore } from '../context/StoreContext';

const BANNERS = [
  {
    id: 'fashion-banner',
    title: 'FASHION',
    titleSecond: 'FOR EVERY YOU',
    subtitle: 'Trendy Styles for Every Occasion',
    category: 'Fashion',
    buttonText: 'SHOP NOW',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
    bgGradient: 'from-stone-900/90 via-stone-900/60 to-transparent',
  },
  {
    id: 'beauty-banner',
    title: 'BEAUTY',
    titleSecond: 'THAT INSPIRES',
    subtitle: 'Skincare | Makeup | Fragrance',
    category: 'Beauty',
    buttonText: 'SHOP NOW',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    bgGradient: 'from-[#2B2317]/95 via-[#3B2F1F]/60 to-transparent',
  },
  {
    id: 'tech-banner',
    title: 'LATEST',
    titleSecond: 'ELECTRONICS',
    subtitle: 'Smarter Living, Every Day',
    category: 'Electronics',
    buttonText: 'SHOP NOW',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80',
    bgGradient: 'from-[#14171E]/95 via-[#1A202C]/65 to-transparent',
  },
];

export const CampaignTriBanners: React.FC = () => {
  const { setActiveCategory } = useStore();

  const handleShop = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 md:py-8 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md group border border-stone-200/60"
            >
              {/* Background Image with hover zoom */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient}`}
              />

              {/* Content overlay */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-center items-start max-w-[70%]">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight uppercase leading-tight drop-shadow-sm">
                  {banner.title}
                  <span className="block text-amber-200/90 font-light text-lg sm:text-xl">
                    {banner.titleSecond}
                  </span>
                </h3>
                <p className="text-xs text-stone-200 mt-2 mb-4 font-medium tracking-wide">
                  {banner.subtitle}
                </p>
                <button
                  onClick={() => handleShop(banner.category)}
                  className="bg-[#DFC16E] hover:bg-[#F2DC9B] text-stone-950 font-bold text-[11px] sm:text-xs tracking-widest px-4 py-2 uppercase rounded-sm transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  {banner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
