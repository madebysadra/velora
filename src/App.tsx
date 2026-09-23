import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { DesignedAroundYou } from './components/DesignedAroundYou';
import { CustomerReviews } from './components/CustomerReviews';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { PRODUCTS } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = 'en';
    html.dir = 'ltr';
    document.body.style.backgroundColor = '#F8F8F6';
    document.body.style.color = '#0A0A0B';
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNextProduct = () => {
    if (!selectedProduct) return;
    const currentIndex = PRODUCTS.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % PRODUCTS.length;
    setSelectedProduct(PRODUCTS[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#0A0A0B] selection:bg-[#4F67FF]/15 selection:text-[#0A0A0B] font-sans antialiased">
      {/* 0. Top Navigation Bar: Minimal and clean */}
      <Navbar
        onScrollTo={scrollTo}
        onOpenProduct={() => setSelectedProduct(PRODUCTS[0])}
      />

      <main>
        {/* 1. HERO SECTION: Launch hero with manufactured VELORA Air photography */}
        <Hero
          onExploreCollection={() => scrollTo('collection')}
          onDiscoverBrand={() => scrollTo('philosophy')}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 2. FEATURED COLLECTION: VELORA Air, Atmos, Core, Link */}
        <FeaturedCollection
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 3. BRAND PHILOSOPHY: Warm white & soft gray luxury editorial section */}
        <BrandPhilosophy />

        {/* 4. DESIGNED AROUND YOU: Three foundational pillars (01 Smart, 02 Seamless, 03 Connected) */}
        <DesignedAroundYou />

        {/* 5. IMPRESSIONS / REVIEWS: Minimal typography-driven authentic owner reviews */}
        <CustomerReviews />

        {/* 6. NEWSLETTER: Minimal luxury dispatch subscription */}
        <Newsletter />
      </main>

      {/* 7. FOOTER: Wordmark, Products, Collections, Technology, About, Telegram link & Sadra attribution */}
      <Footer onScrollTo={scrollTo} />

      {/* Interactive Hardware Inspection Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectNext={handleNextProduct}
      />
    </div>
  );
}
