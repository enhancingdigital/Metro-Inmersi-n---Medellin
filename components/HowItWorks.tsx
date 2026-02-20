
import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] relative overflow-hidden">
      {/* Background Blueprint - Imagen 4 */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: 'url("https://r.jina.ai/i/6d7a46f9011e403487c9f8602b9e843c")' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-20">
          <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.5em] mb-4">Flujo de Trabajo</h2>
          <p className="text-white max-w-2xl text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
            Del espacio físico al <br/><span className="text-[#FF7500] italic">activo digital</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="cyber-card p-10 group">
              <div className="w-16 h-16 bg-[#4FB0B3]/10 border border-[#4FB0B3]/30 text-[#4FB0B3] flex items-center justify-center text-xl font-black mb-10 rounded-2xl shadow-lg transition-all group-hover:bg-[#4FB0B3] group-hover:text-white">
                {step.step}
              </div>
              <h3 className="text-white text-xl font-black mb-6 uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-400 font-bold leading-relaxed text-[13px] italic">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
