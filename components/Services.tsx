
import React from 'react';
import { PLANS, ADDONS } from '../constants';
import { Check, Plus, Star } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('calculadora');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicios" className="py-32 px-6 bg-white relative">
      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[#D9A036] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Opciones para cada necesidad</h2>
          <p className="text-[#2D2D2D] max-w-2xl mx-auto text-4xl md:text-6xl font-black leading-[0.9] uppercase tracking-tighter">
            Planes hechos <br/><span className="text-[#D9A036] italic">a tu medida</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-32">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`industrial-card relative flex flex-col p-8 transition-all duration-500 ${
                plan.popular ? 'border-l-[#D9A036] bg-[#F8F5F2]/30 shadow-xl scale-[1.02] z-10' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#D9A036] text-white text-[8px] font-black px-4 py-1.5 uppercase tracking-widest">
                  Nuestra recomendación
                </div>
              )}
              
              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-black mb-3 uppercase tracking-tighter text-[#2D2D2D] leading-none">
                  {plan.name}
                </h3>
                <p className="text-[10px] leading-relaxed font-bold text-[#2D2D2D]/50 italic">
                  {plan.description}
                </p>
              </div>
              
              <div className="space-y-3.5 mb-10 flex-1 relative z-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${feature.includes('🎁') || feature.includes('🚁') ? 'bg-[#D9A036]/5 p-2.5 border border-dashed border-[#D9A036]/20' : ''}`}>
                    {feature.includes('🎁') || feature.includes('🚁') ? (
                      <Star size={12} className="text-[#D9A036] shrink-0 mt-0.5" />
                    ) : (
                      <Check size={12} className="text-[#D9A036] mt-1 shrink-0" />
                    )}
                    <span className={`text-[9px] font-black tracking-tight uppercase leading-snug ${feature.includes('🎁') || feature.includes('🚁') ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]/60'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-100 relative z-10">
                <div className="text-[8px] uppercase tracking-[0.4em] font-black mb-1 text-[#2D2D2D]/30">Inversión</div>
                <div className="text-3xl font-black flex items-baseline gap-1.5 text-[#2D2D2D] tracking-tighter">
                   {plan.price > 0 ? (
                     <>
                      <span>${plan.price.toLocaleString('es-CO')}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#2D2D2D]/30">COP</span>
                     </>
                   ) : (
                     <span className="text-lg text-[#D9A036]">Bajo Cotización</span>
                   )}
                </div>
                <a 
                  href="#calculadora" 
                  onClick={scrollToCalculator}
                  className={`mt-8 w-full block py-4 text-center rounded-tight font-black text-[9px] uppercase tracking-widest transition-all ${
                    plan.popular ? 'bg-[#D9A036] text-white hover:bg-[#2D2D2D]' : 'bg-[#2D2D2D] text-white hover:bg-[#D9A036]'
                  }`}
                >
                  Configurar mi Tour
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#2D2D2D] p-12 md:p-24 rounded-tight text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full marble-overlay opacity-[0.05]"></div>
          <div className="relative z-10">
            <div className="text-[9px] font-black text-[#D9A036] uppercase tracking-[0.6em] mb-4">Lleva tu tour al siguiente nivel</div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 leading-none">
              Servicios <br/><span className="text-[#D9A036]">Adicionales</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ADDONS.map((addon, idx) => (
                <div 
                  key={idx} 
                  className="group relative border border-white/5 p-8 rounded-tight hover:border-[#D9A036]/50 transition-all duration-500 bg-white/[0.01] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-8 h-8 bg-white/5 group-hover:bg-[#D9A036] transition-all duration-500 flex items-center justify-center">
                        <Plus size={14} className="text-white" />
                      </div>
                      <div className="text-[10px] font-black text-[#D9A036] tracking-widest">
                        {addon.price > 0 ? `$${addon.price.toLocaleString('es-CO')}` : 'A Cotizar'}
                      </div>
                    </div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-2">
                      {addon.name}
                    </h4>
                    <p className="text-[9px] text-white/30 uppercase tracking-wider font-bold italic leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
