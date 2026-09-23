import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../translations';

interface NavbarProps {
  onScrollTo: (id: string) => void;
  onOpenProduct: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollTo,
  onOpenProduct,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F8F6]/90 backdrop-blur-md border-b border-black/[0.06] shadow-2xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 tracking-tight focus:outline-none"
        >
          <span
            className="text-xl sm:text-2xl font-extrabold tracking-[0.22em] uppercase text-[#0A0A0B] transition-opacity duration-300 group-hover:opacity-75"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            VELORA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF] opacity-90 transition-transform group-hover:scale-125" />
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-semibold tracking-wider uppercase text-[#6E6E73]">
          <button
            onClick={() => onScrollTo('collection')}
            className="hover:text-[#0A0A0B] transition-colors cursor-pointer py-1"
          >
            {content.nav.collection}
          </button>
          <button
            onClick={() => onScrollTo('philosophy')}
            className="hover:text-[#0A0A0B] transition-colors cursor-pointer py-1"
          >
            {content.nav.philosophy}
          </button>
          <button
            onClick={() => onScrollTo('ecosystem')}
            className="hover:text-[#0A0A0B] transition-colors cursor-pointer py-1"
          >
            {content.nav.ecosystem}
          </button>
          <button
            onClick={() => onScrollTo('reviews')}
            className="hover:text-[#0A0A0B] transition-colors cursor-pointer py-1"
          >
            {content.nav.reviews}
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenProduct}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A0A0B] text-[#F8F8F6] text-xs font-semibold tracking-wide hover:bg-black/85 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
          >
            <span>{content.nav.discover}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
