import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { content } from '../translations';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F8F8F6]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="rounded-3xl bg-white border border-black/[0.07] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xs">
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#4F67FF] font-semibold">
                VELORA DISPATCH
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0B] tracking-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {content.newsletter.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                {content.newsletter.description}
              </p>
            </div>

            {/* Subscription Form */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-[#4F67FF]/30 flex items-center justify-center gap-2.5 text-sm font-medium text-[#0A0A0B] animate-fade-in">
                <Check className="w-4 h-4 text-[#4F67FF]" />
                <span>{content.newsletter.successMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.newsletter.placeholder}
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-[#F8F8F6] border border-black/[0.08] text-sm text-[#0A0A0B] placeholder-[#8E8E93] focus:outline-none focus:border-[#4F67FF] focus:ring-1 focus:ring-[#4F67FF] transition-all text-left"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0A0A0B] text-[#F8F8F6] text-sm font-semibold tracking-wide hover:bg-black/85 transition-all shrink-0 cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
                >
                  <span>{content.newsletter.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Privacy note */}
            <p className="text-xs font-mono text-[#8E8E93]">
              {content.newsletter.privacyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
