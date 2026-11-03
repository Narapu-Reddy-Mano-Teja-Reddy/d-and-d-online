import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { TRENDING_PRODUCTS } from '../data/storeData';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
    setQuickViewProduct,
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = TRENDING_PRODUCTS.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
                <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Your Wishlist</h3>
                <p className="text-xs text-stone-500">
                  {wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-200/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-stone-800 font-bold text-base mb-1">
                  Your wishlist is empty
                </h4>
                <p className="text-xs text-stone-500 mb-6">
                  Save your favourite items by tapping the heart icon on any product.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="bg-stone-950 text-white text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#DFC16E] hover:text-stone-950 transition-colors"
                >
                  EXPLORE COLLECTIONS
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4 first:pt-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => {
                      setQuickViewProduct(product);
                      setIsWishlistOpen(false);
                    }}
                    className="w-20 h-20 rounded-lg object-cover bg-stone-100 shrink-0 border border-stone-200 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setQuickViewProduct(product);
                            setIsWishlistOpen(false);
                          }}
                          className="text-xs sm:text-sm font-semibold text-stone-900 truncate hover:text-[#B88E28] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-stone-900 mt-1">
                        {formatPrice(product.priceAED)}
                      </p>
                    </div>

                    <div className="mt-2">
                      <button
                        onClick={() => {
                          addToCart(product, 1);
                          toggleWishlist(product.id);
                        }}
                        className="w-full bg-stone-900 hover:bg-[#B88E28] text-white text-xs font-bold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistedProducts.length > 0 && (
            <div className="p-4 bg-[#FAF8F5] border-t border-stone-200">
              <button
                onClick={() => {
                  wishlistedProducts.forEach((p) => addToCart(p, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full bg-stone-950 hover:bg-stone-800 text-white hover:text-[#DFC16E] font-bold text-xs tracking-widest py-3 uppercase rounded transition-all cursor-pointer shadow-md"
              >
                MOVE ALL TO BAG
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
