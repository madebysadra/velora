import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, ChevronRight, ArrowRight, Package, Cpu, Layers } from 'lucide-react';
import { Product } from '../types';
import { content } from '../translations';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectNext: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectNext,
}) => {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'inthebox'>('overview');
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [preordered, setPreordered] = useState(false);

  const handlePreorder = () => {
    setPreordered(true);
    setTimeout(() => {
      setPreordered(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Main Modal Surface */}
      <div className="relative w-full max-w-4xl bg-white text-[#0A0A0B] rounded-3xl border border-black/[0.1] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-6 sm:px-8 border-b border-black/[0.06] flex items-center justify-between shrink-0 bg-[#F8F8F6]">
          <div className="flex items-center gap-3 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#4F67FF] font-semibold">
              {product.category}
            </span>
            <span className="text-[#8E8E93] text-xs">/</span>
            <h3 className="text-lg font-bold tracking-tight">
              {product.name}
            </h3>
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#6E6E73] bg-black/[0.04] px-2 py-0.5 rounded-full">
              {product.modelNumber}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSelectNext}
              className="text-xs font-mono text-[#6E6E73] hover:text-[#0A0A0B] inline-flex items-center gap-1 transition-colors cursor-pointer px-2 py-1"
            >
              <span>Next Item</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-black/[0.08] hover:bg-black/[0.04] transition-colors cursor-pointer"
              aria-label={content.modal.close}
            >
              <X className="w-4 h-4 text-[#6E6E73]" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image View */}
            <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F8F6] border border-black/[0.06]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Price Tag in corner */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-[#0A0A0B]/85 text-[#F8F8F6] backdrop-blur-md text-xs font-mono font-bold shadow-md">
                {product.price}
              </div>
            </div>

            {/* Right Summary Info */}
            <div className="md:col-span-6 space-y-5 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {product.name}
                  </span>
                  <span className="text-xs font-mono text-[#4F67FF] bg-[#4F67FF]/10 px-2 py-0.5 rounded-md font-semibold">
                    {product.sku}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#4F67FF]">
                  {product.tagline}
                </p>
                <p className="text-sm text-[#6E6E73] leading-relaxed pt-1">
                  {product.shortDescription}
                </p>
              </div>

              {/* Color Selector */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6E73]">
                  {content.modal.colorOptions}: <strong className="text-[#0A0A0B] font-semibold">{product.colors[selectedColorIdx].name}</strong>
                </span>

                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`relative w-7 h-7 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                        selectedColorIdx === idx
                          ? 'ring-2 ring-offset-2 ring-[#4F67FF] ring-offset-white scale-110'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.name}
                    >
                      {selectedColorIdx === idx && (
                        <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pre-order action button */}
              <div className="pt-2">
                <button
                  onClick={handlePreorder}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0A0A0B] text-[#F8F8F6] text-sm font-semibold tracking-wide hover:bg-black/85 active:scale-[0.99] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  {preordered ? (
                    <>
                      <Check className="w-4 h-4 text-[#4F67FF]" />
                      <span>Pre-Order Secured</span>
                    </>
                  ) : (
                    <>
                      <span>{content.modal.addToOrder} · {product.price}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-center text-[#8E8E93] pt-2.5 flex items-center justify-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#4F67FF]" />
                  <span>{content.modal.shippingTime}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-black/[0.08] gap-6 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-[#4F67FF] text-[#0A0A0B] font-bold'
                  : 'border-transparent text-[#6E6E73] hover:text-[#0A0A0B]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{content.modal.overviewTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'border-[#4F67FF] text-[#0A0A0B] font-bold'
                  : 'border-transparent text-[#6E6E73] hover:text-[#0A0A0B]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{content.modal.specsTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('inthebox')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'inthebox'
                  ? 'border-[#4F67FF] text-[#0A0A0B] font-bold'
                  : 'border-transparent text-[#6E6E73] hover:text-[#0A0A0B]'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>{content.modal.inTheBoxTab}</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-left">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-[#0A0A0B]/85 leading-relaxed font-light">
                  {product.fullStory}
                </p>

                {/* Materials & Compatibility */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/[0.06] space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#4F67FF] font-semibold">
                      {content.modal.materialsTitle}
                    </span>
                    <p className="text-xs text-[#0A0A0B] font-medium">
                      {product.materials.primary}
                    </p>
                    <p className="text-[11px] text-[#6E6E73]">
                      {product.materials.acoustic}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/[0.06] space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#4F67FF] font-semibold">
                      {content.modal.compatibilityTitle}
                    </span>
                    <p className="text-xs text-[#0A0A0B] font-medium">
                      {product.compatibility}
                    </p>
                  </div>
                </div>

                {/* Warranty Banner */}
                <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.06] flex items-center gap-3 text-xs font-mono text-[#6E6E73]">
                  <ShieldCheck className="w-4 h-4 text-[#4F67FF] shrink-0" />
                  <span>{product.warranty}</span>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="divide-y divide-black/[0.06]">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="font-mono text-[#6E6E73]">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-[#0A0A0B]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'inthebox' && (
              <div className="space-y-4">
                <div className="divide-y divide-black/[0.06]">
                  {product.inTheBox.map((item, idx) => (
                    <div key={idx} className="py-3.5 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0A0A0B]">
                        {item.name}
                      </span>
                      <span className="font-mono text-[#4F67FF] font-semibold">
                        {item.qty}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 p-4 rounded-2xl bg-[#F8F8F6] border border-black/[0.06] text-xs text-[#6E6E73] flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#4F67FF] shrink-0" />
                  <span>
                    Packaged in 100% plastic-free recycled molded pulp fiber printed with organic soy ink.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
