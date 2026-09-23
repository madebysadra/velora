import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';
import { Product } from '../types';
import { content } from '../translations';
import { PRODUCTS } from '../data/products';

interface FeaturedCollectionProps {
  onSelectProduct: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onSelectProduct,
}) => {
  return (
    <section id="collection" className="py-24 sm:py-36 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-black/[0.08]">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#4F67FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
              <span>{content.collection.label}</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0B] tracking-tight leading-[1.12]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {content.collection.title}
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
              {content.collection.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#8E8E93]">
            <Shield className="w-3.5 h-3.5 text-[#4F67FF]" />
            <span>Hardware Architecture</span>
          </div>
        </div>

        {/* 2x2 Curated Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-16">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-black/[0.07] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-black/[0.18] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] cursor-pointer overflow-hidden text-left"
            >
              {/* Top Card Header */}
              <div className="relative z-10 flex items-start justify-between gap-4 pb-6">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8E8E93]">
                      {product.category}
                    </span>
                    <span className="text-black/15 text-xs">·</span>
                    <span className="text-[10px] font-mono text-[#4F67FF] font-semibold">
                      {product.sku}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0B] tracking-tight group-hover:text-[#4F67FF] transition-colors duration-200"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Price Tag */}
                <div className="text-right shrink-0">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#F8F8F6] text-[#0A0A0B] border border-black/[0.06] shadow-2xs">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Center Realistic Product Photo */}
              <div className="relative my-4 aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F8F6] flex items-center justify-center border border-black/[0.04]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                />

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Bottom Row: Description, Available Finishes, & CTA */}
              <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div className="space-y-3 max-w-sm text-left">
                  <p className="text-sm text-[#6E6E73] leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Color Swatch Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase text-[#8E8E93] mr-1">
                      Finishes:
                    </span>
                    {product.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-black/15"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-semibold tracking-wider text-[#0A0A0B] group-hover:text-[#4F67FF] transition-colors whitespace-nowrap self-end">
                  <span>{content.collection.viewSpecs}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
