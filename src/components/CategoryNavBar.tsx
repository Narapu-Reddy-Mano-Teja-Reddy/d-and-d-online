import React, { useState } from 'react';
import { Menu, ChevronDown, Sparkles } from 'lucide-react';
import { NAVIGATION_DEPARTMENTS } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const CategoryNavBar: React.FC = () => {
  const { setActiveCategory } = useStore();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false);

  return (
    <nav className="bg-[#18181E] text-stone-200 border-b border-white/5 relative z-30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between text-xs md:text-sm">
        {/* All Categories Toggle */}
        <div className="relative">
          <button
            onClick={() => setIsAllCategoriesOpen(!isAllCategoriesOpen)}
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C775] text-stone-950 font-bold px-4 py-2.5 transition-all text-xs uppercase tracking-wider"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
            <span>All Categories</span>
          </button>

          {/* All Categories Mega Flyout */}
          {isAllCategoriesOpen && (
            <div
              className="absolute left-0 top-full w-64 bg-[#1C1C22] border border-white/10 shadow-2xl py-2 z-50 rounded-b-md"
              onMouseLeave={() => setIsAllCategoriesOpen(false)}
            >
              {NAVIGATION_DEPARTMENTS.map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => {
                    setActiveCategory(dept.category);
                    setIsAllCategoriesOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-stone-300 hover:text-stone-950 hover:bg-[#DFC16E] transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">{dept.name}</span>
                  {dept.isHot && (
                    <span className="bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                      HOT
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Menu Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-4 overflow-x-auto py-1 scrollbar-none">
          {NAVIGATION_DEPARTMENTS.map((dept) => (
            <div
              key={dept.name}
              className="relative"
              onMouseEnter={() => dept.hasDropdown && setOpenDropdown(dept.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => {
                  setActiveCategory(dept.category);
                  const el = document.getElementById('the-edit');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-1 px-3 py-2 text-stone-300 hover:text-[#DFC16E] transition-colors font-medium whitespace-nowrap cursor-pointer"
              >
                <span>{dept.name}</span>
                {dept.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#DFC16E]" />
                )}
                {dept.isHot && (
                  <span className="bg-rose-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-sm ml-1 tracking-wider uppercase shadow-sm">
                    HOT
                  </span>
                )}
              </button>

              {/* Subcategory Dropdown */}
              {openDropdown === dept.name && dept.sublinks && (
                <div className="absolute left-0 top-full w-56 bg-[#1A1A20] border border-white/10 shadow-xl py-2 z-50 rounded-b-md">
                  <div className="px-3 py-1.5 text-[10px] text-amber-300/70 uppercase tracking-widest border-b border-white/5 font-semibold">
                    {dept.name} Collections
                  </div>
                  {dept.sublinks.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => {
                        setActiveCategory(dept.category);
                        setOpenDropdown(null);
                        const el = document.getElementById('the-edit');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-stone-300 hover:text-stone-900 hover:bg-[#DFC16E] transition-colors"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right quick link: Ramadan Special / VIP perks */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-[#DFC16E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-medium tracking-wide">Ramadan & Eid Festive Edit</span>
        </div>
      </div>
    </nav>
  );
};
