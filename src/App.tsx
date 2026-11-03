/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StoreProvider } from './context/StoreContext';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Header } from './components/Header';
import { CategoryNavBar } from './components/CategoryNavBar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryStoryCircles } from './components/CategoryStoryCircles';
import { CampaignTriBanners } from './components/CampaignTriBanners';
import { TrendingEditSection } from './components/TrendingEditSection';
import { ShopByCategorySection } from './components/ShopByCategorySection';
import { BrandStoryBanner } from './components/BrandStoryBanner';
import { LifestyleTripletSection } from './components/LifestyleTripletSection';
import { BeautyRitualSection } from './components/BeautyRitualSection';
import { UpgradeEverydaySection } from './components/UpgradeEverydaySection';
import { DualPromoBanners } from './components/DualPromoBanners';
import { TrustPillars } from './components/TrustPillars';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickViewModal } from './components/QuickViewModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CountryModal } from './components/CountryModal';
import { AccountModal } from './components/AccountModal';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#C5A059] selection:text-white">
        {/* 1. Top Announcement Bar */}
        <TopAnnouncementBar />

        {/* 2. Main Luxury Header */}
        <Header />

        {/* 3. Category Navigation Bar & Flyouts */}
        <CategoryNavBar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 4. Opulent Dubai Hero Banner */}
          <HeroBanner />

          {/* 5. Circular Category Story Bubbles */}
          <CategoryStoryCircles />

          {/* 6. Promotional Tri-Banners */}
          <CampaignTriBanners />

          {/* 7. The Edit: Trending Now (5-product carousel/grid) */}
          <TrendingEditSection />

          {/* 8. Shop by Category (6 cards) */}
          <ShopByCategorySection />

          {/* 9. Brand Story: "More Than Shopping. A Way of Life." */}
          <BrandStoryBanner />

          {/* 10. Lifestyle Triplet: Women's, Men's & Occasion Edit */}
          <LifestyleTripletSection />

          {/* 11. Beauty Rituals */}
          <BeautyRitualSection />

          {/* 12. Upgrade Your Everyday Tech */}
          <UpgradeEverydaySection />

          {/* 13. Dual Promotional Banners (Exclusive Offers & Ramadan/Eid) */}
          <DualPromoBanners />

          {/* 14. Trust / Authenticity Pillars */}
          <TrustPillars />

          {/* 15. Newsletter VIP Club Signup */}
          <NewsletterSection />
        </main>

        {/* 16. Comprehensive Luxury Footer */}
        <Footer />

        {/* Interactive Modals & Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <QuickViewModal />
        <WishlistDrawer />
        <CountryModal />
        <AccountModal />
        <ToastNotification />
      </div>
    </StoreProvider>
  );
}
