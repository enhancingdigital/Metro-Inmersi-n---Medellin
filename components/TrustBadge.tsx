
import React, { useState } from 'react';
import { ShieldCheck, Star, X, Info, CheckCircle2 } from 'lucide-react';

interface TrustBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ className = "", size = 'md' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizeClasses = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-125 md:scale-150'
  };

  return (
    <div className={`relative flex items-center justify-center ${className} transition-all duration-500`}>
      {/* Panel de Expansión (Detalles de Garantía) */}
      <div 
        className={`absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-full mr-0 md:mr-8 transition-all duration-700 ease-out z-50 ${
          isExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-10 pointer-events-none'
        }`}
      >
        <div className="bg-[#1A2B44] border-2 border-[#D9A036] p-6 rounded-tight shadow-2xl w-[280px] relative">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            className="absolute top-2 right-2 text-[#D9A036] hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
          
          <h4 className="text-[#D9A036] font-black text-[9px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <Info size={10} /> Política Cero Riesgo
          </h4>
          
          <ul className="space-y-3">
            {[
              "Agendamiento y visita 100% Gratis.",
              "Sin anticipos ni cargos ocultos.",
              "Pagas al recibir tu proyecto listo.",
              "Garantía total de satisfacción."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={10} className="text-[#D9A036] mt-0.5 shrink-0" />
                <span className="text-white/80 text-[8px] font-bold uppercase tracking-wider leading-tight">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sello Principal */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-500 active:scale-95 ${sizeClasses[size]} ${isExpanded ? 'ring-4 ring-[#D9A036]/20 rounded-full' : ''}`}
      >
        {/* Círculo Dorado Exterior con Resplandor */}
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#D9A036] via-[#F2C94C] to-[#8A6420] p-1 shadow-[0_0_30px_rgba(217,160,54,0.3)] relative flex items-center justify-center group-hover:shadow-[0_0_50px_rgba(217,160,54,0.5)] transition-shadow duration-500">
          
          {/* Borde dentado animado */}
          <div className="absolute inset-1 rounded-full border-2 border-white/20 border-dashed animate-[spin_30s_linear_infinite]"></div>
          
          {/* Fondo Azul Marino Interior */}
          <div className="w-full h-full rounded-full bg-[#1A2B44] flex flex-col items-center justify-center relative overflow-hidden p-2 text-center border-4 border-[#D9A036]/50">
            
            {/* 5 Estrellas en la parte superior */}
            <div className="absolute top-6 w-full flex flex-col items-center">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={8} fill="#D9A036" className="text-[#D9A036] drop-shadow-md" />
                ))}
              </div>
            </div>

            {/* Icono de Casa y Escudo */}
            <div className="mt-4 mb-2 text-[#D9A036] flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
               <ShieldCheck size={40} strokeWidth={1} className="drop-shadow-lg" />
            </div>

            {/* Cinta de Pago Contra Entrega */}
            <div className="absolute left-[-15%] right-[-15%] top-[55%] -translate-y-1/2 bg-[#1A2B44] border-y-2 border-[#D9A036] py-2 shadow-xl z-10 transition-all group-hover:bg-[#1e3250]">
               <div className="flex items-center justify-center gap-2">
                  <Star size={6} fill="#D9A036" className="text-[#D9A036]" />
                  <span className="text-[8px] font-black text-white uppercase tracking-tighter">Pago Contra Entrega</span>
                  <Star size={6} fill="#D9A036" className="text-[#D9A036]" />
               </div>
            </div>

            {/* Texto Inferior */}
            <div className="absolute bottom-5 w-full flex flex-col items-center">
               <span className="text-[7.5px] font-black text-[#D9A036] tracking-[0.15em] uppercase leading-tight px-4">Garantía de Satisfacción</span>
            </div>
          </div>
        </div>
        
        {/* Indicador de Click (Pulso) */}
        {!isExpanded && (
          <div className="absolute -bottom-2 bg-[#D9A036] text-[#1A2B44] text-[6.5px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-bounce shadow-md">
            Click para ver
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustBadge;
