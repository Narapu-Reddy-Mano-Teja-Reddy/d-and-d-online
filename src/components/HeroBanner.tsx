import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { DivineDropsLogo } from './DivineDropsLogo';
import { useStore } from '../context/StoreContext';

const HERO_SLIDES = [
  {
    id: 1,
    title1: 'YOUR WORLD',
    title2: 'YOUR STYLE',
    title3: 'ALL IN ONE PLACE',
    subcategories: 'Fashion | Beauty | Electronics | Accessories | Home | Gifts',
    kicker: 'PREMIUM PRODUCTS FOR A BETTER EVERYDAY',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85', // Dubai architectural luxury / golden hour
    modelImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 2,
    title1: 'RAMADAN & EID',
    title2: 'FESTIVE EDIT',
    title3: 'TIMELESS LUXURY',
    subcategories: 'Artisanal Perfumes | Gold Jewelry | Embellished Abayas | Luxury Hampers',
    kicker: 'CELEBRATE TRADITIONS IN ELEVATED SPLENDOR',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85',
    modelImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 3,
    title1: 'MODERN TECH',
    title2: 'SMART LIVING',
    title3: 'DESIGNED FOR YOU',
    subcategories: 'Flagship Phones | Spatial Audio | Smart Watches | Home Automation',
    kicker: 'NEXT-GENERATION PERFORMANCE IN REFINED DESIGNS',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    modelImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85',
  },
];

export const HeroBanner: React.FC = () => {
  const { setActiveCategory } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  const handleShopNow = () => {
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplore = () => {
    const el = document.getElementById('categories-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EFEAE2] via-[#F5F0E8] to-[#EBE2D3] border-b border-stone-200">
      {/* Background Architectural Ambient Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </div>

      {/* Luxury Golden Glow / Radial Light */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#DFC16E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          {/* Left Column: Brand Lockup & Headline */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            {/* Monogram Crest in Gold */}
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <DivineDropsLogo variant="gold-full" showTagline={false} />
              </div>
            </div>

            {/* Giant Luxury Headlines */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.08] font-serif uppercase mb-3">
              <span className="block">{slide.title1}</span>
              <span className="block text-stone-900">{slide.title2}</span>
              <span className="block text-stone-700 font-normal text-2xl sm:text-3xl md:text-4xl mt-1 tracking-wide">
                {slide.title3}
              </span>
            </h1>

            {/* Sub-category list */}
            <p className="text-xs sm:text-sm font-medium tracking-wider text-stone-600 uppercase mb-8 pb-1 border-b border-stone-300/60">
              {slide.subcategories}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleShopNow}
                className="bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs sm:text-sm tracking-widest px-8 py-3.5 uppercase transition-all duration-300 shadow-xl shadow-stone-950/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#DFC16E]" />
              </button>

              <button
                onClick={handleExplore}
                className="bg-transparent hover:bg-stone-900/5 text-stone-900 font-semibold text-xs sm:text-sm tracking-widest px-6 py-3.5 uppercase border border-stone-800 hover:border-stone-950 transition-all duration-300 cursor-pointer"
              >
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>

          {/* Right Column: Luxury Dubai Model, High-End Products & Kicker */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Top Right Luxury Kicker Badge */}
            <div className="absolute top-0 right-0 z-20 text-right hidden sm:block">
              <span className="text-[11px] font-bold tracking-[0.2em] text-stone-700 uppercase font-sans border-r-2 border-[#D4AF37] pr-3 py-1">
                {slide.kicker}
              </span>
            </div>

            {/* Central Showcase Composition */}
            <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
              {/* Soft Golden Arch Backdrop */}
              <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-[#E7DCBA]/70 to-[#D4C39B]/30 border border-[#D4AF37]/40 shadow-inner" />

              {/* Main Model & Luxury Composition */}
              <div className="relative z-10 w-4/5 h-full flex items-end justify-center overflow-hidden rounded-t-full">
                <img
                  src={slide.modelImage}
                  alt="Divine Drops Luxury Ambassador"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Luxury Product Accents in Front */}
              {/* Perfume Bottle */}
              <div className="absolute -bottom-4 left-0 sm:left-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-xl border border-white/60 w-28 sm:w-32 hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80"
                  alt="Extrait de Parfum"
                  className="w-full h-20 object-cover rounded-lg"
                />
                <p className="text-[10px] font-semibold text-stone-900 mt-1 truncate">
                  Eau de Parfum
                </p>
                <p className="text-[10px] font-bold text-[#B88E28]">AED 199</p>
              </div>

              {/* Designer Handbag */}
              <div className="absolute -bottom-6 right-2 sm:right-6 z-20 bg-white/85 backdrop-blur-md p-2.5 rounded-xl shadow-xl border border-white/60 w-32 sm:w-36 hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=300&q=80"
                  alt="Elegant Handbag"
                  className="w-full h-20 object-cover rounded-lg"
                />
                <p className="text-[10px] font-semibold text-stone-900 mt-1 truncate">
                  Leather Shoulder Bag
                </p>
                <p className="text-[10px] font-bold text-[#B88E28]">AED 149</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slider Controls (Left/Right Arrows & Dots) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-all z-20 cursor-pointer shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? 'w-7 bg-[#B88E28]'
                  : 'w-2 bg-stone-400 hover:bg-stone-600'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
