import React from 'react';
import { X, Check } from 'lucide-react';
import { COUNTRIES, Country } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const CountryModal: React.FC = () => {
  const {
    isCountryModalOpen,
    setIsCountryModalOpen,
    country: currentCountry,
    setCountry,
    showToast,
  } = useStore();

  if (!isCountryModalOpen) return null;

  const handleSelect = (c: Country) => {
    setCountry(c);
    setIsCountryModalOpen(false);
    showToast(`Region set to ${c.name} (${c.currency})`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Header */}
        <div className="bg-[#121216] px-5 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div>
            <h3 className="font-bold text-sm tracking-wide">Select Shipping Destination</h3>
            <p className="text-[11px] text-stone-400">
              Prices and delivery charges will update automatically
            </p>
          </div>
          <button
            onClick={() => setIsCountryModalOpen(false)}
            className="text-stone-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Countries List */}
        <div className="p-4 space-y-2">
          {COUNTRIES.map((c) => {
            const isSelected = c.code === currentCountry.code;
            return (
              <div
                key={c.code}
                onClick={() => handleSelect(c)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#B88E28] bg-[#FAF5EB]'
                    : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{c.name}</h4>
                    <p className="text-xs text-stone-500">
                      Currency: <span className="font-semibold">{c.currency}</span> · Free delivery over {c.symbol} {c.freeShippingThreshold}
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-[#B88E28] text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-stone-200 text-center text-[11px] text-stone-500">
          All duties and taxes are calculated at checkout. Express courier tracking included.
        </div>
      </div>
    </div>
  );
};
