import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Country,
  COUNTRIES,
  Product,
  CartItem,
  TRENDING_PRODUCTS
} from '../data/storeData';

interface StoreContextType {
  country: Country;
  setCountry: (country: Country) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCountryModalOpen: boolean;
  setIsCountryModalOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  isAccountModalOpen: boolean;
  setIsAccountModalOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  formatPrice: (priceInAED: number) => string;
  cartSubtotalAED: number;
  totalCartItems: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<Country>(COUNTRIES[0]); // Default UAE
  const [cart, setCart] = useState<CartItem[]>([
    // Initialize with 1 item so users can see the active cart right away
    {
      product: TRENDING_PRODUCTS[0],
      quantity: 1,
      selectedVariant: 'Warm Beige',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(['prod-2']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (product: Product, quantity = 1, variant?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && (!variant || item.selectedVariant === variant)
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedVariant: variant || product.variants?.[0] }];
    });
    showToast(`Added "${product.name}" to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist');
        return [...prev, productId];
      }
    });
  };

  const formatPrice = (priceInAED: number) => {
    const converted = priceInAED * country.rate;
    // Formatting with currency
    if (country.currency === 'KWD' || country.currency === 'BHD' || country.currency === 'OMR') {
      return `${country.symbol} ${converted.toFixed(2)}`;
    }
    return `${country.symbol} ${Math.round(converted)}`;
  };

  const cartSubtotalAED = cart.reduce(
    (sum, item) => sum + item.product.priceAED * item.quantity,
    0
  );

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        country,
        setCountry,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        isCountryModalOpen,
        setIsCountryModalOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        isAccountModalOpen,
        setIsAccountModalOpen,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        formatPrice,
        cartSubtotalAED,
        totalCartItems,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
