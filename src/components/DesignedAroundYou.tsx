import React from 'react';
import { Cpu, RefreshCw, Network, CheckCircle2 } from 'lucide-react';
import { content } from '../translations';

export const DesignedAroundYou: React.FC = () => {
  const icons = [Cpu, RefreshCw, Network];

  return (
    <section id="ecosystem" className="py-24 sm:py-36 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#4F67FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F67FF]" />
            <span>{content.designedAroundYou.label}</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0B] tracking-tight leading-[1.14]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {content.designedAroundYou.title}
          </h2>

          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            {content.designedAroundYou.subtitle}
          </p>
        </div>

        {/* Three Distinct Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {content.designedAroundYou.features.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-black/[0.07] p-8 sm:p-10 transition-all duration-300 hover:border-black/[0.18] hover:-translate-y-1 hover:shadow-lg text-left"
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between pb-8">
                  <span className="text-3xl sm:text-4xl font-mono font-light tracking-tight text-[#0A0A0B]/35 group-hover:text-[#4F67FF] transition-colors">
                    {feature.num}
                  </span>

                  <div className="p-3 rounded-2xl bg-[#F8F8F6] border border-black/[0.06] text-[#0A0A0B] group-hover:scale-105 group-hover:text-[#4F67FF] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-4">
                  <div className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#4F67FF] font-semibold">
                    {feature.name}
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#0A0A0B] tracking-tight leading-snug"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {feature.headline}
                  </h3>

                  <p className="text-sm text-[#6E6E73] leading-relaxed pt-1">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Indicator bar at bottom */}
                <div className="pt-8 flex items-center gap-2 text-xs font-mono text-[#8E8E93]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F67FF]" />
                  <span>Hardware Native</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
