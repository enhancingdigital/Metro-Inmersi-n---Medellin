
import React, { useState } from 'react';
import { ShieldCheck, Star, X, CheckCircle2, Award, Zap, Shield, Sparkles } from 'lucide-react';

interface TrustBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ className = "", size = 'md' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'scale-75',
    md: 'scale-90 sm:scale-100',
    lg: 'scale-110 md:scale-150'
  };

  const toggleModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <div className={`relative flex items-center justify-center ${className} transition-all duration-500 z-30`}>
        {/* Sello Principal Interactivo */}
        <div 
          onClick={toggleModal}
          className={`group relative flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-500 active:scale-95 ${sizeClasses[size]}`}
        >
          {/* Anillos de luz exterior animados */}
          <div className="absolute inset-0 rounded-full bg-[#4FB0B3]/20 blur-xl group-hover:bg-[#4FB0B3]/40 transition-all duration-1000 animate-pulse"></div>
          
          {/* Anillo giratorio de gradiente perimetral */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#4FB0B3] via-[#FF7500] to-[#4FB0B3] animate-[spin_8s_linear_infinite] opacity-40 blur-[1px]"></div>

          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-slate-900 p-1.5 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative flex items-center justify-center transition-all overflow-hidden border border-white/5">
            
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-white/10 group-hover:border-[#4FB0B3]/40 transition-colors">
              
              {/* Brillo dinámico interno */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4FB0B3]/10 to-transparent"></div>

              <div className="flex gap-1 mb-2 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={8} fill="#4FB0B3" className="text-[#4FB0B3]" />
                ))}
              </div>

              <ShieldCheck size={42} className="text-white drop-shadow-glow mb-1 relative z-10 transition-transform group-hover:scale-110" strokeWidth={1.2} />

              <div className="bg-[#FF7500] text-white text-[8px] font-black px-4 py-1.5 uppercase tracking-widest absolute bottom-4 shadow-xl rounded-full border border-white/20 z-20 group-hover:scale-105 transition-transform">
                Garantía
              </div>
            </div>
          </div>
          
          {/* Etiqueta flotante con Shimmer - Corregida para no ser tapada */}
          <div className="absolute -bottom-8 bg-slate-900 border border-[#4FB0B3]/40 text-white text-[7.5px] font-black px-6 py-3 rounded-full uppercase tracking-widest animate-bounce shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap flex items-center gap-2 z-40 group-hover:bg-[#4FB0B3] transition-colors overflow-visible">
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
            </div>
            <Zap size={9} fill="currentColor" /> INFO RIESGO CERO
          </div>
        </div>
      </div>

      {/* MODAL DE GARANTÍA (TIPO POP-UP PANTALLA COMPLETA) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#020617] border border-[#4FB0B3]/30 rounded-[3.5rem] overflow-hidden shadow-[0_0_120px_rgba(79,176,179,0.15)] animate-in zoom-in-95 duration-500">
            
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4FB0B3]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <button 
              onClick={toggleModal}
              className="absolute top-8 right-8 z-[210] p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="p-12 md:p-16">
               <div className="flex items-center gap-8 mb-12">
                  <div className="w-20 h-20 bg-[#4FB0B3] text-white rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(79,176,179,0.4)]">
                     <Shield size={40} />
                  </div>
                  <div>
                     <h4 className="text-[11px] font-black text-[#4FB0B3] uppercase tracking-[0.5em] mb-3">Política de Transparencia</h4>
                     <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Riesgo Cero Metro</h3>
                  </div>
               </div>

               <div className="grid gap-4 mb-12">
                  {[
                    { title: "Sin Anticipos", desc: "Agendamos su cita sin solicitar pagos previos o depósitos de seguridad." },
                    { title: "Aprobación Final", desc: "Usted solo paga el servicio si el tour virtual final cumple con sus expectativas." },
                    { title: "Visita Técnica Gratis", desc: "Si al llegar al lugar determinamos que no se puede realizar, no hay cobro." },
                    { title: "Garantía de Impacto", desc: "Soporte técnico y actualizaciones menores incluidas durante el hosting." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group/item">
                       <div className="w-10 h-10 rounded-2xl bg-[#4FB0B3]/20 flex items-center justify-center text-[#4FB0B3] group-hover/item:bg-[#4FB0B3] group-hover/item:text-white transition-all">
                          <CheckCircle2 size={20} />
                       </div>
                       <div>
                          <h5 className="text-white text-[12px] font-black uppercase tracking-widest mb-1">{item.title}</h5>
                          <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                     <Sparkles size={16} className="text-[#FF7500]" />
                     <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em]">Certificación Medellín v4.0</span>
                  </div>
                  <button 
                    onClick={toggleModal}
                    className="px-12 py-5 bg-[#4FB0B3] text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[1.5rem] hover:bg-[#3d8c8f] shadow-lg transition-all active:scale-95"
                  >
                    Entendido
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrustBadge;
