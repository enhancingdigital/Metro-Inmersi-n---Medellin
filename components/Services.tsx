
import React, { useState } from 'react';
import { PLANS, ADDONS } from '../constants';
import { Check, Plus, Camera, Layout, Globe, Plane, Video, Codepen, Cloud, Code, ShieldCheck, Sparkles, Eraser, Share2, FileCode, X, Info, Zap, Gift, ArrowRight } from 'lucide-react';
import { ServicePlan } from '../types';

const addonIcons: Record<string, any> = {
  'Fotos HDR (10)': Camera,
  'Planos de Planta': Layout,
  'Google Street View': Globe,
  'Toma con Dron': Plane,
  'Recorrido de Video 4K': Video,
  'Mes de Hosting Extra': Cloud,
  'APIs, Embed': Code,
  'Badge Digital': ShieldCheck,
  'Archivo BIM': Codepen,
  'Desmueblar': Eraser,
  'Recorrido Vrbo 360': Share2,
  'Archivo CAD (.DWG)': FileCode
};

interface ServicesProps {
  onPlanSelect: (area: number) => void;
}

const Services: React.FC<ServicesProps> = ({ onPlanSelect }) => {
  const [activePlanDetail, setActivePlanDetail] = useState<ServicePlan | null>(null);

  const handlePlanClick = (e: React.MouseEvent, area: number) => {
    e.preventDefault();
    e.stopPropagation(); // Evita que se abra el modal al presionar el botón de cotizar
    onPlanSelect(area);
    
    const element = document.getElementById('calculadora');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openDetail = (plan: ServicePlan) => {
    setActivePlanDetail(plan);
    // Bloquear scroll del body al abrir modal
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setActivePlanDetail(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="servicios" className="py-32 px-6 bg-[#020617] relative">
      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="text-center mb-20 lg:mb-32">
          <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.8em] mb-6 flex items-center justify-center gap-4 text-glow-teal">
             <span className="w-12 h-px bg-[#4FB0B3]/30"></span>
             Planes de Impacto
             <span className="w-12 h-px bg-[#4FB0B3]/30"></span>
          </h2>
          <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase tracking-tighter mb-8">
            Diseñados para <br/><span className="text-[#FF7500] italic">Acelerar Ventas</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-normal uppercase tracking-[0.1em] italic">
            Sin suscripciones mensuales. Pague por lo que necesita, venda como los mejores del mundo.
          </p>
        </div>
        
        {/* Grilla de Planes Principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              onClick={() => openDetail(plan)}
              className={`relative group cyber-card !overflow-visible p-8 md:p-10 flex flex-col transition-all duration-700 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
                plan.popular ? 'border-[#FF7500]/40 bg-slate-900 shadow-[0_30px_60px_-15px_rgba(255,117,0,0.15)]' : 'bg-white/5 hover:bg-white/[0.07]'
              }`}
            >
              {(plan.popular || plan.id === 'express') && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4FB0B3] text-white text-[9px] font-black px-6 py-2 uppercase tracking-[0.2em] rounded-full shadow-2xl z-30 flex items-center gap-2 whitespace-nowrap border border-white/20">
                  <Gift size={12} /> {plan.id === 'express' ? 'PROMO ACTIVA' : 'EL MÁS VENDIDO'}
                </div>
              )}
              
              <div className="mb-10">
                <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white leading-none group-hover:text-[#4FB0B3] transition-colors">
                  {plan.name}
                </h4>
                <p className="text-[10px] leading-relaxed font-normal text-slate-500 italic uppercase tracking-[0.15em]">
                  {plan.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className={`flex items-start gap-3 p-3 rounded-2xl border transition-all duration-300 ${
                    feature.includes('🎁') || feature.includes('🚁') 
                    ? 'bg-[#4FB0B3]/10 border-[#4FB0B3]/30' 
                    : 'bg-white/5 border-transparent group-hover:border-white/10'
                  }`}>
                    <Check size={14} className="text-[#4FB0B3] mt-0.5 shrink-0" />
                    <span className={`text-[9px] font-medium tracking-tight uppercase leading-tight ${
                      feature.includes('🎁') || feature.includes('🚁') ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
                <div className="text-[8px] font-black uppercase text-[#4FB0B3] tracking-widest pt-2 flex items-center gap-2">
                   <Plus size={10} /> Ver ficha técnica
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-white/10 space-y-6">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.4em] font-black mb-2 text-[#4FB0B3]/60">Desde</div>
                  <div className="text-4xl font-black text-white tracking-tighter flex items-baseline gap-2">
                    {plan.price > 0 ? (
                      <>
                        <span>${plan.price.toLocaleString('es-CO')}</span>
                        <span className="text-[10px] font-black uppercase text-[#4FB0B3]">COP</span>
                      </>
                    ) : (
                      <span className="text-2xl text-[#FF7500] italic">A Cotizar</span>
                    )}
                  </div>
                </div>

                <button 
                  onClick={(e) => handlePlanClick(e, plan.maxArea || 60)}
                  className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#4FB0B3] hover:border-transparent transition-all group/btn"
                >
                  Me interesa <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalle de Plan - Optimizado para Scroll en Móvil */}
        {activePlanDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto sm:overflow-hidden">
            <div className="relative w-full max-w-5xl bg-[#0F172A] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] flex flex-col md:flex-row animate-in zoom-in-95 duration-500 max-h-[none] sm:max-h-[90vh]">
              
              <button 
                onClick={closeDetail}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2.5 bg-slate-900/80 hover:bg-white/10 rounded-full text-slate-300 transition-all border border-white/10 backdrop-blur-sm"
                aria-label="Cerrar detalles"
              >
                <X size={20} />
              </button>

              {/* Lado Izquierdo: Resumen Compacto */}
              <div className="md:w-1/3 p-8 md:p-12 bg-gradient-to-b from-slate-900 to-slate-950 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between shrink-0">
                <div>
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4FB0B3]/20 text-[#4FB0B3] rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                      <Zap size={28} strokeWidth={2.5} />
                   </div>
                   <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{activePlanDetail.name}</h4>
                   <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest leading-relaxed italic">{activePlanDetail.description}</p>
                </div>
                
                <div className="mt-8 md:mt-10">
                   <div className="text-[9px] font-black text-[#4FB0B3] uppercase tracking-[0.4em] mb-2">Inversión Estimada</div>
                   <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                      {activePlanDetail.price > 0 ? `$${activePlanDetail.price.toLocaleString('es-CO')}` : "Por Cotizar"}
                   </div>
                   <div className="text-[8px] text-slate-500 mt-2 font-black uppercase tracking-widest">Un solo pago | Medellín & Área Metro</div>
                </div>
              </div>

              {/* Lado Derecho: Características en Grid - Asegurando scroll en móvil */}
              <div className="md:w-2/3 p-8 md:p-12 bg-slate-950 flex flex-col overflow-hidden">
                 <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-500 mb-6 md:mb-8 flex items-center gap-3">
                    <Info size={14} className="text-[#4FB0B3]" /> Características del Plan
                 </h5>
                 
                 {/* Lista de características: En móvil se expande, en desktop tiene scroll interno si es necesario */}
                 <div className="grid sm:grid-cols-2 gap-3 md:gap-4 flex-1 md:overflow-y-auto pr-0 md:pr-2 custom-scrollbar">
                    {activePlanDetail.features.map((feature, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border transition-all group ${
                        feature.includes('🎁') || feature.includes('🚁') 
                        ? 'bg-[#4FB0B3]/10 border-[#4FB0B3]/20' 
                        : 'bg-white/5 border-transparent hover:border-white/10'
                      }`}>
                         <Check size={14} className={`shrink-0 mt-0.5 ${feature.includes('🎁') || feature.includes('🚁') ? 'text-white' : 'text-[#4FB0B3]'}`} />
                         <span className={`text-[10px] font-medium uppercase tracking-tight leading-snug ${
                            feature.includes('🎁') || feature.includes('🚁') ? 'text-white' : 'text-slate-400'
                         }`}>{feature}</span>
                      </div>
                    ))}
                 </div>

                 {/* Botonera inferior: Siempre visible al final de la ficha */}
                 <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={(e) => { handlePlanClick(e, activePlanDetail.maxArea || 60); closeDetail(); }}
                      className="flex-1 btn-cyber py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-lg order-1 sm:order-none"
                    >
                      Lo quiero
                    </button>
                    <button 
                      onClick={closeDetail}
                      className="px-8 bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all"
                    >
                      Volver
                    </button>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* Sección de Servicios Adicionales */}
        <div className="relative p-10 md:p-24 rounded-[4rem] bg-slate-900 border border-white/5 shadow-2xl overflow-hidden group/addons">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4FB0B3]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover/addons:bg-[#4FB0B3]/10 transition-colors duration-1000"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16 lg:mb-24">
              <h3 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.8em] mb-8">Opciones Adicionales</h3>
              <p className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1]">
                Maximice la <span className="italic text-[#FF7500]">Visibilidad</span>
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ADDONS.map((addon, idx) => {
                const Icon = addonIcons[addon.name] || Plus;
                const isObtener = addon.name === 'Archivo BIM';
                const isIncluded = addon.price === 0 && !isObtener;
                return (
                  <div 
                    key={idx} 
                    className="group/addon cyber-card p-10 flex flex-col justify-between hover:bg-slate-800/80 hover:border-[#4FB0B3]/40 transition-all duration-500 hover:-translate-y-2 cursor-default"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-10">
                        <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover/addon:bg-[#4FB0B3] group-hover/addon:border-transparent group-hover/addon:shadow-[0_0_20px_rgba(79,176,179,0.4)] transition-all duration-500 flex items-center justify-center rounded-2xl">
                          <Icon size={24} className="text-[#4FB0B3] group-hover/addon:text-white transition-colors" />
                        </div>
                        <div className={`px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border ${
                          isObtener ? 'text-[#4FB0B3] border-[#4FB0B3]/20' :
                          isIncluded ? 'text-[#FF7500] border-[#FF7500]/20' : 'text-[#4FB0B3] border-[#4FB0B3]/20 group-hover/addon:border-[#4FB0B3]/40'
                        }`}>
                          {isObtener ? 'OBTENER' : isIncluded ? 'GRATIS' : `$${(addon.price/1000)}K`}
                        </div>
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-tighter text-white mb-4 group-hover/addon:text-[#4FB0B3] transition-colors">
                        {addon.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 uppercase tracking-widest font-normal italic leading-relaxed">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
