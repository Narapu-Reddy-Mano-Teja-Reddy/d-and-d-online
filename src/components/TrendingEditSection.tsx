import React from 'react';
import { Heart, ShoppingBag, Star, ArrowRight, Eye } from 'lucide-react';
import { TRENDING_PRODUCTS } from '../data/storeData';
import { useStore } from '../context/StoreContext';

export const TrendingEditSection: React.FC = () => {
  const {
    formatPrice,
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct,
    activeCategory,
    setActiveCategory,
  } = useStore();

  const filteredProducts =
    activeCategory === 'All' || activeCategory === 'Home'
      ? TRENDING_PRODUCTS
      : TRENDING_PRODUCTS.filter((p) => p.category === activeCategory);

  const displayList = filteredProducts.length > 0 ? filteredProducts : TRENDING_PRODUCTS;

  return (
    <section id="the-edit" className="py-10 md:py-14 bg-white border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
                The Edit: Trending Now
              </h2>
              {activeCategory !== 'All' && (
                <span className="text-xs bg-[#DFC16E]/20 text-[#8F6A18] font-bold px-2.5 py-1 rounded-full uppercase">
                  Filtered: {activeCategory}
                  <button
                    onClick={() => setActiveCategory('All')}
                    className="ml-1.5 text-stone-500 hover:text-stone-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
              The styles, essentials and everyday favourites worth discovering.
            </p>
          </div>

          <button
            onClick={() => setActiveCategory('All')}
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#B88E28] transition-colors group self-start md:self-end"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5-Column Responsive Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {displayList.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-[#FAF9F6] rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Top Badges Area */}
                <div className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer">
                  {/* Badge: Best Seller (Red) or New (Green) */}
                  {product.badge && (
                    <div
                      className={`absolute top-2.5 left-2.5 z-10 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-white shadow-sm ${
                        product.badgeColor === 'green'
                          ? 'bg-emerald-600'
                          : product.badgeColor === 'gold'
                          ? 'bg-[#B88E28]'
                          : 'bg-rose-600'
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                      isWishlisted
                        ? 'bg-rose-50 text-rose-600'
                        : 'bg-white/90 text-stone-600 hover:text-stone-950 hover:bg-white'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? 'fill-rose-600 text-rose-600' : ''
                      }`}
                    />
                  </button>

                  {/* Main Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => setQuickViewProduct(product)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Quick View Overlay button */}
                  <div
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
                  >
                    <span className="bg-white/95 text-stone-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-[#DFC16E] transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title */}
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs sm:text-sm font-semibold text-stone-900 line-clamp-1 hover:text-[#B88E28] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Subtitle / Volume */}
                    {product.subtitle && (
                      <p className="text-[11px] text-stone-500 truncate mt-0.5 font-light">
                        {product.subtitle}
                      </p>
                    )}

                    {/* Star Rating and Review Count */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span className="text-[11px] font-bold text-stone-800 ml-1">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-400">
                        ({product.reviewCount > 999 ? `${(product.reviewCount / 1000).toFixed(1)}k` : product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Cart Area */}
                  <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-stone-900 tabular-nums">
                          {formatPrice(product.priceAED)}
                        </span>
                        {product.originalPriceAED && (
                          <span className="text-[10px] text-stone-400 line-through tabular-nums">
                            {formatPrice(product.originalPriceAED)}
                          </span>
                        )}
                      </div>
                      {product.discountPercent && (
                        <span className="text-[10px] font-bold text-emerald-600 block">
                          {product.discountPercent}% off
                        </span>
                      )}
                    </div>

                    {/* Quick Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-8 h-8 rounded-md bg-stone-900 hover:bg-[#B88E28] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm hover:shadow"
                      title="Add to Cart"
                      aria-label="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
