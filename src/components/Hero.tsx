import React, { useState } from 'react';
import { ArrowDown, Volume2, ShieldCheck, Zap, Eye } from 'lucide-react';
import { Product } from '../types';
import { content } from '../translations';
import { PRODUCTS } from '../data/products';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverBrand: () => void;
  onSelectProduct: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onDiscoverBrand,
  onSelectProduct,
}) => {
  const heroProduct = PRODUCTS[0]; // VELORA Air
  const [showLifestyle, setShowLifestyle] = useState(false);

  const features = [
    { icon: Volume2, label: 'Spatial Audio' },
    { icon: ShieldCheck, label: 'Grade-5 Titanium' },
    { icon: Zap, label: '36h Playback' },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#F8F8F6]">
      {/* Subtle Ambient Lighting Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#4F67FF]/5 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column: Headline, Description & Actions */}
          <div className="lg:col-span-6 space-y-8 text-left z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E6E73] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
              <span>{content.hero.tag}</span>
              <span className="text-black/20">·</span>
              <span className="text-[#0A0A0B] font-semibold">{content.hero.designedIn}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A0A0B] tracking-tight leading-[1.08]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {content.hero.headline}
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl">
              {content.hero.description}
            </p>

            {/* Hardware Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-black/[0.07] bg-white text-[#0A0A0B] shadow-2xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#4F67FF]" />
                    <span>{feat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0A0A0B] text-[#F8F8F6] text-sm font-semibold tracking-wide hover:bg-black/85 active:scale-[0.99] transition-all duration-200 shadow-sm cursor-pointer group"
              >
                <span>{content.hero.exploreBtn}</span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-y-0.5">
                  ↓
                </span>
              </button>

              <button
                onClick={onDiscoverBrand}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/[0.14] bg-white text-[#0A0A0B] text-sm font-semibold tracking-wide hover:bg-black/[0.03] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <span>{content.hero.discoverBtn}</span>
              </button>
            </div>

            {/* Status Micro-copy */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8E8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
              <span>{content.hero.status}</span>
              <span className="text-black/15">|</span>
              <span className="font-semibold text-[#0A0A0B]">{heroProduct.modelNumber}</span>
            </div>
          </div>

          {/* Right Visual Column: Realistic manufactured product photography */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* View Switcher: Product Studio vs In Use */}
            <div className="w-full max-w-[520px] flex items-center justify-between pb-3 px-2 text-xs font-mono text-[#6E6E73]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0A0A0B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {heroProduct.sku} · {heroProduct.name}
              </span>

              {heroProduct.lifestyleImage && (
                <div className="flex items-center rounded-full border border-black/[0.08] bg-white p-0.5 shadow-2xs">
                  <button
                    onClick={() => setShowLifestyle(false)}
                    className={`px-3 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                      !showLifestyle
                        ? 'bg-black/[0.06] text-[#0A0A0B] font-semibold'
                        : 'text-[#6E6E73]'
                    }`}
                  >
                    Product
                  </button>
                  <button
                    onClick={() => setShowLifestyle(true)}
                    className={`px-3 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                      showLifestyle
                        ? 'bg-black/[0.06] text-[#0A0A0B] font-semibold'
                        : 'text-[#6E6E73]'
                    }`}
                  >
                    In Use
                  </button>
                </div>
              )}
            </div>

            {/* Product Card Container */}
            <div
              onClick={() => onSelectProduct(heroProduct)}
              className="relative group w-full max-w-[520px] cursor-pointer"
            >
              {/* Image Frame with soft shadows and tactile materials */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-black/[0.07] shadow-xl transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-2xl">
                <img
                  src={showLifestyle && heroProduct.lifestyleImage ? heroProduct.lifestyleImage : heroProduct.image}
                  alt="VELORA Air Wireless Headphones in natural environment"
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-103"
                  loading="eager"
                />

                {/* Corner Price Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0B]/85 backdrop-blur-md text-[#F8F8F6] text-xs font-mono tracking-wider shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
                    <span>{heroProduct.name} · {heroProduct.price}</span>
                  </div>
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4F67FF] text-white text-xs font-semibold tracking-wide shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Details</span>
                  </span>
                </div>
              </div>

              {/* Realistic Soft Contact Shadow */}
              <div className="w-[88%] h-5 mx-auto mt-2 bg-black/[0.07] blur-xl rounded-full transform -translate-y-1 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="text-center pt-8">
        <button
          onClick={onExploreCollection}
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#8E8E93] hover:text-[#0A0A0B] transition-colors cursor-pointer"
        >
          <span className="text-[10px]">Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#4F67FF]" />
        </button>
      </div>
    </section>
  );
};
