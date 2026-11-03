import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    formatPrice,
    addToCart,
    wishlist,
    toggleWishlist,
  } = useStore();

  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    quickViewProduct?.variants?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string | undefined>(
    quickViewProduct?.image
  );

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedVariant || quickViewProduct.variants?.[0]);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-stone-100 text-stone-600 hover:text-stone-950 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="bg-[#FAF8F5] p-6 flex flex-col justify-between">
            <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-stone-200/60 relative">
              <img
                src={activeImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector if secondary image exists */}
            {quickViewProduct.secondaryImage && (
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setActiveImage(quickViewProduct.image)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    (activeImage || quickViewProduct.image) === quickViewProduct.image
                      ? 'border-[#B88E28]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={quickViewProduct.image}
                    alt="Thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setActiveImage(quickViewProduct.secondaryImage)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === quickViewProduct.secondaryImage
                      ? 'border-[#B88E28]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={quickViewProduct.secondaryImage}
                    alt="Thumbnail 2"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-[11px] font-bold text-[#B88E28] uppercase tracking-wider">
                {quickViewProduct.category} · {quickViewProduct.subCategory}
              </span>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mt-1">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-bold text-stone-900 ml-1">
                    {quickViewProduct.rating}
                  </span>
                </div>
                <span className="text-xs text-stone-400">
                  ({quickViewProduct.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="text-2xl font-bold text-stone-950 font-serif tabular-nums">
                  {formatPrice(quickViewProduct.priceAED)}
                </span>
                {quickViewProduct.originalPriceAED && (
                  <span className="text-sm text-stone-400 line-through tabular-nums">
                    {formatPrice(quickViewProduct.originalPriceAED)}
                  </span>
                )}
                {quickViewProduct.discountPercent && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save {quickViewProduct.discountPercent}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Variant Picker */}
              {quickViewProduct.variants && quickViewProduct.variants.length > 0 && (
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <label className="block text-xs font-semibold text-stone-800 mb-2">
                    Select {quickViewProduct.variantType || 'Option'}:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`text-xs px-3 py-1.5 rounded border transition-all ${
                          (selectedVariant || quickViewProduct.variants?.[0]) === v
                            ? 'border-stone-950 bg-stone-950 text-white font-semibold'
                            : 'border-stone-200 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet Features */}
              <ul className="mt-4 space-y-1 text-[11px] text-stone-500">
                {quickViewProduct.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B88E28]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="mt-6 pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-stone-300 rounded">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs tracking-widest py-3 uppercase rounded transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#DFC16E]" />
                  <span>ADD TO BAG</span>
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded border transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'border-rose-300 bg-rose-50 text-rose-600'
                      : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 text-[10px] text-stone-500 text-center pt-2">
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3 h-3 text-[#B88E28]" />
                  <span>Free UAE Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RotateCcw className="w-3 h-3 text-[#B88E28]" />
                  <span>14-Day Returns</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B88E28]" />
                  <span>100% Genuine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
