
import React from 'react';
import { PLATFORM_FEATURES } from '../constants';
import { Eye, Ruler, Clock, Globe } from 'lucide-react';

const icons = [Eye, Ruler, Clock, Globe];

const Features: React.FC = () => {
  return (
    <section id="eficiencia" className="py-32 px-6 bg-[#F8F5F2] border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#D9A036] text-xs font-black uppercase tracking-[0.5em] mb-4">¿Por qué elegirnos?</h2>
          <p className="text-[#2D2D2D] text-3xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
            Impulsa tu <span className="text-[#D9A036] italic">Negocio o Propiedad.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLATFORM_FEATURES.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="industrial-card p-12 flex flex-col group h-full">
                <div className="w-14 h-14 bg-[#2D2D2D] flex items-center justify-center mb-10 shadow-lg group-hover:bg-[#D9A036] transition-all duration-500">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-[#2D2D2D] mb-5 uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-[#2D2D2D]/60 text-sm leading-relaxed font-bold italic">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
