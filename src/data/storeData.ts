export interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  rate: number; // relative to AED
  flag: string;
  freeShippingThreshold: number;
}

export const COUNTRIES: Country[] = [
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED', symbol: 'AED', rate: 1, flag: '🇦🇪', freeShippingThreshold: 200 },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', rate: 1.02, flag: '🇸🇦', freeShippingThreshold: 220 },
  { code: 'QA', name: 'Qatar', currency: 'QAR', symbol: 'QAR', rate: 0.99, flag: '🇶🇦', freeShippingThreshold: 200 },
  { code: 'KW', name: 'Kuwait', currency: 'KWD', symbol: 'KWD', rate: 0.083, flag: '🇰🇼', freeShippingThreshold: 18 },
  { code: 'BH', name: 'Bahrain', currency: 'BHD', symbol: 'BHD', rate: 0.102, flag: '🇧🇭', freeShippingThreshold: 22 },
  { code: 'OM', name: 'Oman', currency: 'OMR', symbol: 'OMR', rate: 0.105, flag: '🇴🇲', freeShippingThreshold: 23 },
];

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: 'Fashion' | 'Beauty' | 'Electronics' | 'Shoes' | 'Accessories' | 'Home & Living' | 'Gifts' | 'Offers';
  subCategory?: string;
  priceAED: number;
  originalPriceAED?: number;
  discountPercent?: number;
  badge?: 'Best Seller' | 'New' | 'Trending' | '40% off' | 'Limited';
  badgeColor?: 'red' | 'green' | 'gold';
  rating: number;
  reviewCount: number;
  image: string;
  secondaryImage?: string;
  description: string;
  features: string[];
  inStock: boolean;
  variants?: string[];
  variantType?: 'Size' | 'Color' | 'Volume' | 'Storage';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export const STORY_CATEGORIES = [
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    color: 'from-amber-100 to-amber-200'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    color: 'from-rose-100 to-amber-100'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
    color: 'from-slate-100 to-slate-200'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
    color: 'from-amber-50 to-orange-100'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
    color: 'from-pink-50 to-rose-100'
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80',
    color: 'from-yellow-50 to-amber-100'
  },
  {
    id: 'gifts',
    name: 'Gifts',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80',
    color: 'from-amber-100 to-yellow-200'
  },
  {
    id: 'offers',
    name: 'Offers',
    isSpecial: true,
    image: '',
    color: 'from-rose-500 to-red-600'
  }
];

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Elegant Shoulder Handbag',
    subtitle: 'Crafted in premium textured vegan leather with polished gold hardware',
    category: 'Accessories',
    subCategory: 'Handbags',
    priceAED: 149,
    originalPriceAED: 249,
    discountPercent: 40,
    badge: 'Best Seller',
    badgeColor: 'red',
    rating: 5.0,
    reviewCount: 1200,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    description: 'A timeless silhouette designed to elevate every look. Features a structured body, dual top handles, detachable crossbody strap, and protective metal feet.',
    features: ['Premium textured finish', 'Interior zippered compartment', 'Detachable gold chain shoulder strap', 'Dimensions: 28cm x 20cm x 12cm'],
    inStock: true,
    variantType: 'Color',
    variants: ['Warm Beige', 'Noir Black', 'Camel Rose', 'Ivory Cream']
  },
  {
    id: 'prod-2',
    name: 'Signature Eau de Parfum',
    subtitle: '100ml / 3.4 fl. oz. Extrait de Parfum',
    category: 'Beauty',
    subCategory: 'Fragrance',
    priceAED: 199,
    originalPriceAED: 299,
    discountPercent: 33,
    badge: 'New',
    badgeColor: 'green',
    rating: 5.0,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    description: 'An intoxicating fusion of rare Arabian amber, Damascus rose, and creamy sandalwood. Created by master perfumers for lingering luxury.',
    features: ['Top notes: Bergamot, Pink Peppercorn', 'Heart notes: Damascus Rose, Cashmere Wood', 'Base notes: Amber Royale, Vanilla Bourbon, White Oud', 'Long-lasting 14+ hour projection'],
    inStock: true,
    variantType: 'Volume',
    variants: ['50ml', '100ml', 'Gift Edition 100ml + Travel Spray']
  },
  {
    id: 'prod-3',
    name: 'Wireless Headphones',
    subtitle: 'Active Noise Cancellation Pro & Spatial Audio',
    category: 'Electronics',
    subCategory: 'Audio',
    priceAED: 249,
    originalPriceAED: 399,
    discountPercent: 38,
    rating: 4.8,
    reviewCount: 671,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    description: 'Studio-grade acoustics with hybrid active noise cancellation, memory-foam ear cushions, and up to 45 hours of playtime on a single fast charge.',
    features: ['Active Noise Cancellation (ANC)', 'Spatial Audio with dynamic head tracking', 'Fast USB-C charging (10 min = 5 hours)', 'Dual beamforming microphones for crystal calls'],
    inStock: true,
    variantType: 'Color',
    variants: ['Midnight Black', 'Starlight Champagne', 'Silver Frost']
  },
  {
    id: 'prod-4',
    name: 'Classic Lifestyle Sneakers',
    subtitle: 'Breathable knit upper with cushioned cloud-comfort sole',
    category: 'Shoes',
    subCategory: 'Sneakers',
    priceAED: 179,
    originalPriceAED: 299,
    discountPercent: 40,
    rating: 5.0,
    reviewCount: 960,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    description: 'Designed for effortless everyday motion. Blends vintage street aesthetics with contemporary orthopedic comfort and responsive energy return.',
    features: ['Ultra-lightweight shock-absorbing EVA midsole', 'Reinforced heel stabilizer', 'Anti-slip rubber tread', 'Breathable organic cotton lining'],
    inStock: true,
    variantType: 'Size',
    variants: ['EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44']
  },
  {
    id: 'prod-5',
    name: 'Premium Skincare Set',
    subtitle: '5-Piece Botanical Glow & Anti-Aging Ritual',
    category: 'Beauty',
    subCategory: 'Skincare',
    priceAED: 129,
    originalPriceAED: 199,
    discountPercent: 35,
    rating: 4.7,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Complete daily indulgence. Contains Gentle Cleanser, Hydrating Toner, Vitamin C Radiance Serum, Multi-Peptide Cream, and Nourishing Eye Balm.',
    features: ['Dermatologist tested & hypoallergenic', 'Infused with Niacinamide & Hyaluronic Acid', 'Free of parabens, sulfates, and cruelty-free', 'Suitable for all skin types'],
    inStock: true,
    variantType: 'Volume',
    variants: ['Full Collection (5 Pieces)', 'Travel Set (Mini 5 Pieces)']
  }
];

export const CATEGORY_CARDS = [
  {
    id: 'cat-fashion',
    title: 'Fashion',
    actionText: 'Explore Fashion →',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated abayas, evening couture, and contemporary modest silhouettes.'
  },
  {
    id: 'cat-beauty',
    title: 'Beauty',
    actionText: 'Discover Beauty →',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal fragrances, radiant skincare, and luxury beauty essentials.'
  },
  {
    id: 'cat-electronics',
    title: 'Electronics',
    actionText: 'Shop Electronics →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship smartphones, high-fidelity audio, and modern smart living.'
  },
  {
    id: 'cat-shoes-acc',
    title: 'Shoes & Accessories',
    actionText: 'Find Your Style →',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted leather goods, designer footwear, and gold accessories.'
  },
  {
    id: 'cat-home',
    title: 'Home & Living',
    actionText: 'Refresh Your Space →',
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Warm gold tableware, ambient diffusers, and luxury home decor.'
  },
  {
    id: 'cat-gifts',
    title: 'Gifts',
    actionText: 'Find a Gift →',
    category: 'Gifts',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    description: 'Curated gift sets, celebratory hampers, and elegant keepsakes.'
  }
];

export const LIFESTYLE_COLLECTIONS = [
  {
    id: 'womens',
    title: "Women's Collection",
    tagline: 'From everyday to extraordinary',
    buttonText: 'SHOP WOMEN →',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mens',
    title: "Men's Collection",
    tagline: 'Style for every move',
    buttonText: 'SHOP MEN →',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'occasion',
    title: 'The Occasion Edit',
    tagline: 'Make every moment special',
    buttonText: 'EXPLORE NOW →',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80'
  }
];

export const BEAUTY_RITUALS = [
  {
    title: 'Skincare',
    subtitle: 'Healthy, radiant skin →',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Makeup',
    subtitle: 'Enhance your natural beauty →',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Fragrance',
    subtitle: 'Signature scents for every you →',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Beauty Tools',
    subtitle: 'For your perfect look →',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80'
  }
];

export const TECH_EVERYDAY = [
  {
    title: 'Smartphones',
    subtitle: 'Latest Models →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Laptops',
    subtitle: 'Work & Play →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Audio',
    subtitle: 'Headphones & Speakers →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Smartwatches',
    subtitle: 'Stay Connected →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Accessories',
    subtitle: 'Chargers & More →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Smart Home',
    subtitle: 'Modern Living →',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80'
  }
];

export const NAVIGATION_DEPARTMENTS: {
  name: string;
  category: Product['category'];
  hasDropdown: boolean;
  isHot?: boolean;
  sublinks?: string[];
}[] = [
  { name: 'Home', category: 'Fashion', hasDropdown: false },
  { name: 'Fashion', category: 'Fashion', hasDropdown: true, sublinks: ["Women's Abayas", 'Evening Dresses', 'Modest Wear', "Men's Luxury", 'Designer Suits'] },
  { name: 'Beauty', category: 'Beauty', hasDropdown: true, sublinks: ['Signature Perfumes', 'Oud & Bakhoor', 'Skincare Rituals', 'Makeup & Glow', 'Beauty Tools'] },
  { name: 'Electronics', category: 'Electronics', hasDropdown: true, sublinks: ['Smartphones', 'Audio & ANC', 'Laptops & Work', 'Smartwatches', 'Smart Home'] },
  { name: 'Shoes', category: 'Shoes', hasDropdown: true, sublinks: ['Designer Heels', 'Lifestyle Sneakers', 'Leather Loafers', 'Embellished Sandals'] },
  { name: 'Accessories', category: 'Accessories', hasDropdown: true, sublinks: ['Handbags & Totes', 'Gold & Diamond Jewelry', 'Designer Watches', 'Sunglasses'] },
  { name: 'Home & Living', category: 'Home & Living', hasDropdown: true, sublinks: ['Tableware & Trays', 'Luxury Fragrance Diffusers', 'Velvet Cushion Covers', 'Wall Decor'] },
  { name: 'Gifts', category: 'Gifts', hasDropdown: true, sublinks: ['Eid & Ramadan Hampers', 'Perfume Gift Boxes', 'For Her', 'For Him'] },
  { name: 'Offers', category: 'Offers', hasDropdown: false, isHot: true },
];
