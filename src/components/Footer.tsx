import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { DivineDropsLogo } from './DivineDropsLogo';
import { COUNTRIES } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { setCountry, setActiveCategory, showToast } = useStore();

  const handleCountryClick = (c: typeof COUNTRIES[0]) => {
    setCountry(c);
    showToast(`Shipping country updated to ${c.name}`);
  };

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById('the-edit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D10] text-stone-300 pt-14 pb-8 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Lockup & Socials */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 sm:pr-4">
            <DivineDropsLogo variant="gold-on-dark" />
            <p className="text-xs text-stone-400 mt-4 leading-relaxed max-w-sm">
              Your one destination for fashion, beauty, electronics, accessories,
              home and gifts across the UAE and Gulf region.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFC16E] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFC16E] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFC16E] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#tiktok"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFC16E] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Shop */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {['Fashion', 'Beauty', 'Electronics', 'Shoes & Accessories', 'Home & Living', 'Gifts', 'Offers'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleCategoryClick(item.split(' ')[0])}
                    className="hover:text-[#DFC16E] transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Customer Care */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {['Contact Us', 'FAQ', 'Track My Order', 'Shipping Information', 'Returns & Refunds', 'Warranty Information'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#DFC16E] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: About Divine Drops */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              About Divine Drops
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#DFC16E] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Shop by Country */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Shop by Country
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {COUNTRIES.map((c) => (
                <li key={c.code}>
                  <button
                    onClick={() => handleCountryClick(c)}
                    className="flex items-center gap-2 hover:text-[#DFC16E] transition-colors cursor-pointer text-left w-full"
                  >
                    <span className="text-base">{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Payment Methods & App Store Badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <div>
            © 2026 Divine Drops. All rights reserved.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-[#1C1C22] text-stone-300 font-bold text-[10px] rounded border border-white/10">
              VISA
            </span>
            <span className="px-2.5 py-1 bg-[#1C1C22] text-stone-300 font-bold text-[10px] rounded border border-white/10">
              Mastercard
            </span>
            <span className="px-2.5 py-1 bg-[#1C1C22] text-[#00E5FF] font-bold text-[10px] rounded border border-white/10">
              tabby
            </span>
            <span className="px-2.5 py-1 bg-[#1C1C22] text-stone-300 font-bold text-[10px] rounded border border-white/10">
              Apple Pay
            </span>
            <span className="px-2.5 py-1 bg-[#1C1C22] text-stone-300 font-bold text-[10px] rounded border border-white/10">
              G Pay
            </span>
          </div>

          {/* App Store and Google Play Download Buttons */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1C1C22] border border-white/10 rounded-lg hover:border-white/30 cursor-pointer transition-colors">
              <span className="text-[10px] leading-tight text-left">
                <span className="text-[9px] text-stone-400 block">Download on the</span>
                <span className="font-bold text-white block">App Store</span>
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1C1C22] border border-white/10 rounded-lg hover:border-white/30 cursor-pointer transition-colors">
              <span className="text-[10px] leading-tight text-left">
                <span className="text-[9px] text-stone-400 block">GET IT ON</span>
                <span className="font-bold text-white block">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
