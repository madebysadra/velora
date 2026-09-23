import React from 'react';
import { content } from '../translations';
import { REVIEWS } from '../data/products';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-36 bg-[#EEEEEC]/60 border-t border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl pb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#4F67FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
            <span>{content.reviews.label}</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0B] tracking-tight leading-[1.12]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {content.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            {content.reviews.subtitle}
          </p>
        </div>

        {/* Minimal Typography-Driven Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-3xl bg-white border border-black/[0.07] p-8 sm:p-10 transition-all duration-300 hover:border-black/[0.18] hover:shadow-md text-left"
            >
              {/* Product Association Tag */}
              <div className="pb-6">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#F8F8F6] text-[#4F67FF] font-semibold border border-black/[0.05]">
                  {rev.productTag}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="my-auto py-2">
                <p className="text-base sm:text-lg text-[#0A0A0B] font-light leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="pt-8 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#6E6E73]">
                <span className="font-semibold text-[#0A0A0B]">
                  — {rev.author}
                </span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider">
                  Verified Owner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
