import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, User, Heart, ShoppingBag, X } from 'lucide-react';
import { DivineDropsLogo } from './DivineDropsLogo';
import { useStore } from '../context/StoreContext';
import { TRENDING_PRODUCTS } from '../data/storeData';

export const Header: React.FC = () => {
  const {
    country,
    setIsCountryModalOpen,
    cart,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsAccountModalOpen,
    searchQuery,
    setSearchQuery,
    setQuickViewProduct,
  } = useStore();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Close search suggestions when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim()
    ? TRENDING_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="bg-[#121216] border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex-shrink-0 group">
          <DivineDropsLogo variant="gold-on-dark" />
        </a>

        {/* Search Bar */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-xl mx-2 md:mx-6 hidden sm:block">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search for fashion, beauty, electronics and more..."
              className="w-full bg-[#1C1C22] text-stone-100 placeholder-stone-400 text-xs md:text-sm rounded-l-md py-2.5 pl-4 pr-10 border border-r-0 border-white/10 focus:outline-none focus:border-[#DFC16E]/70 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-14 text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              className="bg-gradient-to-r from-[#D4AF37] to-[#B88E28] hover:from-[#E5C775] hover:to-[#C5A059] text-stone-950 px-5 py-2.5 rounded-r-md transition-all flex items-center justify-center font-medium shadow-md shadow-[#D4AF37]/20"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-stone-950 stroke-[2.5]" />
            </button>
          </div>

          {/* Autocomplete / Live Search Results Popup */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-[#1C1C22] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
              <div className="p-3 border-b border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span>Matching Products ({searchResults.length})</span>
                <span className="text-[#DFC16E]">Press ESC to close</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-white/5">
                {searchResults.length > 0 ? (
                  searchResults.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setQuickViewProduct(prod);
                        setIsSearchFocused(false);
                      }}
                      className="p-3 flex items-center gap-3 hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-10 h-10 rounded object-cover bg-stone-800"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-stone-100 font-medium truncate">
                          {prod.name}
                        </p>
                        <p className="text-xs text-[#DFC16E]">
                          AED {prod.priceAED} · {prod.category}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-stone-400 text-xs">
                    No matching luxury items found for "{searchQuery}".
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions: Deliver to, Language, Account, Wishlist, Cart */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Deliver to Country Selector */}
          <button
            onClick={() => setIsCountryModalOpen(true)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-left transition-colors border border-transparent hover:border-white/10"
          >
            <span className="text-xl leading-none">{country.flag}</span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                Deliver to
              </span>
              <span className="text-xs font-semibold text-stone-200 flex items-center gap-1">
                {country.name.split(' ')[0]}
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </span>
            </div>
          </button>

          {/* Arabic Language Toggle */}
          <button
            onClick={() => {}}
            className="hidden lg:flex items-center gap-1 text-xs text-stone-300 hover:text-[#DFC16E] font-medium transition-colors px-2 py-1"
          >
            <span className="font-serif">العربية</span>
          </button>

          {/* Account Button */}
          <button
            onClick={() => setIsAccountModalOpen(true)}
            className="flex items-center gap-1.5 text-stone-300 hover:text-[#DFC16E] transition-colors py-1 px-1.5"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium hidden md:inline">Account</span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative flex items-center gap-1.5 text-stone-300 hover:text-[#DFC16E] transition-colors py-1 px-1.5"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium hidden md:inline">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-stone-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#DFC16E] hover:text-[#FFE899] px-3 py-1.5 rounded-full border border-[#D4AF37]/30 transition-all shadow-sm"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#DFC16E]" />
            <span className="text-xs font-semibold hidden sm:inline">Cart</span>
            <span className="bg-[#D4AF37] text-stone-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {totalCartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="px-4 pb-2.5 sm:hidden">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fashion, beauty, electronics..."
            className="w-full bg-[#1C1C22] text-stone-100 placeholder-stone-400 text-xs rounded-l-md py-2 pl-3 pr-8 border border-r-0 border-white/10 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#B88E28] text-stone-950 px-3.5 py-2 rounded-r-md">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
