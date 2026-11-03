import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Lock, Smartphone, HelpCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const TopAnnouncementBar: React.FC = () => {
  const { country, setIsCountryModalOpen } = useStore();

  return (
    <div className="bg-[#0D0D10] text-[#E4D5B7] text-[11px] md:text-xs py-2 px-4 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left Value Propositions */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-1 text-stone-300">
          <div className="flex items-center gap-1.5 hover:text-[#DFC16E] transition-colors cursor-pointer" onClick={() => setIsCountryModalOpen(true)}>
            <Truck className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>Free Delivery Across {country.name.split(' ')[0]}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 hover:text-[#DFC16E] transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>100% Original Products</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 hover:text-[#DFC16E] transition-colors">
            <RotateCcw className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>Easy Returns</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 hover:text-[#DFC16E] transition-colors">
            <Lock className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>Secure Payments</span>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 text-stone-400 ml-auto">
          <a
            href="#download-app"
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>Download App</span>
          </a>
          <span className="text-stone-700">|</span>
          <a
            href="#help"
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#DFC16E]" />
            <span>Help Center</span>
          </a>
        </div>
      </div>
    </div>
  );
};
