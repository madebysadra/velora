import React from 'react';
import { Layers, Sliders } from 'lucide-react';
import { content } from '../translations';
import macroImg from '../assets/images/velora_philosophy_macro_1790150954708.jpg';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-28 sm:py-40 bg-[#EEEEEC]/60 border-t border-b border-black/[0.07] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Editorial Label */}
        <div className="text-left pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#4F67FF] pb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
            <span>{content.philosophy.label}</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0B] tracking-tight max-w-4xl leading-[1.12]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            "{content.philosophy.headline}"
          </h2>

          <p className="pt-6 text-lg sm:text-2xl font-light text-[#6E6E73] max-w-2xl leading-relaxed">
            {content.philosophy.lead}
          </p>
        </div>

        {/* Narrative Split: Macro Detail Image & Storytelling Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
          {/* Left: Cinematic Close-Up Macro Image */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border border-black/[0.08] bg-white shadow-lg">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={macroImg}
                  alt="VELORA Titanium Metallurgy & Acoustic Precision"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
                <span>VELORA Atelier · Grade-5 Titanium & Synthetic Sapphire</span>
              </div>
            </div>
          </div>

          {/* Right: Two Deep Pillars */}
          <div className="lg:col-span-5 space-y-10 text-left">
            {/* Pillar 01 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#4F67FF]">
                <Layers className="w-4 h-4 text-[#4F67FF]" />
                <span>01 · {content.philosophy.point1Title}</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#0A0A0B]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {content.philosophy.point1Title}
              </h3>
              <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                {content.philosophy.point1Desc}
              </p>
            </div>

            <div className="w-full h-px bg-black/[0.08]" />

            {/* Pillar 02 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#4F67FF]">
                <Sliders className="w-4 h-4 text-[#4F67FF]" />
                <span>02 · {content.philosophy.point2Title}</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#0A0A0B]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {content.philosophy.point2Title}
              </h3>
              <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                {content.philosophy.point2Desc}
              </p>
            </div>

            {/* Quote Credit */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-[#8E8E93]">
              <span>—</span>
              <span>VELORA Industrial Design Studio · Zurich & San Francisco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
