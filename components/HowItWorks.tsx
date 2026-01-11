
import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white border-y border-[#2D2D2D]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-32">
          <h2 className="text-[#D9A036] text-xs font-black uppercase tracking-[0.5em] mb-6">Flujo de Operaciones</h2>
          <p className="text-[#2D2D2D] max-w-2xl text-4xl md:text-6xl font-black leading-[0.9] uppercase tracking-tighter">
            Del Terreno <br/><span className="text-[#D9A036] italic">al Activo Digital</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#2D2D2D]/5 z-0"></div>
          
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="relative z-10 text-left flex flex-col group p-10 bg-[#F8F5F2] border border-[#2D2D2D]/5 rounded-tight hover:border-[#D9A036] transition-all duration-500">
              <div className="w-16 h-16 bg-[#2D2D2D] text-[#F8F5F2] flex items-center justify-center text-xl font-black mb-10 shadow-[4px_4px_0px_#D9A036]">
                {step.step}
              </div>
              <h3 className="text-xl font-black text-[#2D2D2D] mb-6 uppercase tracking-tight leading-tight">{step.title}</h3>
              <p className="text-[#2D2D2D]/50 font-bold leading-relaxed max-w-xs text-sm italic">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
