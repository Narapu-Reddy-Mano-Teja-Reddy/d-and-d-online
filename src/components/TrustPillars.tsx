import React from 'react';
import { Award, ShoppingBag, ShieldCheck, Headphones } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Carefully Selected Products',
      subtitle: 'Premium quality and trusted brands',
    },
    {
      icon: ShoppingBag,
      title: 'A Direct Shopping Experience',
      subtitle: 'No third-party sellers',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      subtitle: 'Safe and reliable checkout',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      subtitle: "We're here to help",
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-white border-y border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#FAF5EB] border border-[#DFC16E]/40 flex items-center justify-center shrink-0 text-[#B88E28]">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
