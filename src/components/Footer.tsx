import React from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { content } from '../translations';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="pt-24 pb-16 bg-[#EEEEEC]/60 border-t border-black/[0.08] text-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/[0.08]">
          {/* Brand Info & Attribution */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span
                className="text-2xl font-extrabold tracking-[0.22em] uppercase"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                VELORA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
            </div>

            <p className="text-sm text-[#6E6E73] leading-relaxed max-w-sm">
              "{content.footer.tagline}"
            </p>

            {/* Required Creator Attribution */}
            <div className="pt-2 space-y-1 text-xs font-mono text-[#6E6E73] border-l-2 border-[#4F67FF]/40 pl-3">
              <p className="text-[#0A0A0B] font-semibold tracking-wide">
                {content.footer.brandConcept}
              </p>
              <p className="text-[#6E6E73]">
                {content.footer.craftedBy}
              </p>
            </div>
          </div>

          {/* Links Columns: Products, Collections, Technology, About */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-left">
            {/* Products */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0B]">
                {content.footer.productsTitle}
              </p>
              <ul className="space-y-2 text-[#6E6E73] text-xs">
                <li>
                  <button
                    onClick={() => onScrollTo('collection')}
                    className="hover:text-[#0A0A0B] transition-colors cursor-pointer"
                  >
                    {content.footer.links.air}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollTo('collection')}
                    className="hover:text-[#0A0A0B] transition-colors cursor-pointer"
                  >
                    {content.footer.links.atmos}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollTo('collection')}
                    className="hover:text-[#0A0A0B] transition-colors cursor-pointer"
                  >
                    {content.footer.links.core}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollTo('collection')}
                    className="hover:text-[#0A0A0B] transition-colors cursor-pointer"
                  >
                    {content.footer.links.link}
                  </button>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0B]">
                {content.footer.collectionsTitle}
              </p>
              <ul className="space-y-2 text-[#6E6E73] text-xs">
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    Audio Systems
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    Acoustic Objects
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    Wearable Tech
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    Local Controls
                  </span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0B]">
                {content.footer.technologyTitle}
              </p>
              <ul className="space-y-2 text-[#6E6E73] text-xs">
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.audio}
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.materials}
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.biometrics}
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.sustainability}
                  </span>
                </li>
              </ul>
            </div>

            {/* About & Contact with Telegram */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0B]">
                {content.footer.aboutTitle}
              </p>
              <ul className="space-y-2 text-[#6E6E73] text-xs">
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.story}
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.careers}
                  </span>
                </li>
                <li>
                  <a
                    href="https://t.me/madebysadra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A0A0B] text-[#4F67FF] transition-colors inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Contact / Telegram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <span className="hover:text-[#0A0A0B] transition-colors cursor-pointer">
                    {content.footer.links.press}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Socials & Connect Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-black/[0.06]">
          {/* Socials: Telegram Only */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#6E6E73]">
            <span className="text-[#0A0A0B] font-semibold">{content.footer.socialTitle}:</span>
            <a
              href="https://t.me/madebysadra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4F67FF] hover:text-[#0A0A0B] font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <Send className="w-3 h-3" />
              <span>Telegram (@madebysadra)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8E93]">
          <p>© {new Date().getFullYear()} VELORA. {content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
