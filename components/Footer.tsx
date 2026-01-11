
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-gray-100 bg-[#F8F5F2] text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Footer Tipográfico: METRO (Negro) INMERSIÓN (Acento) */}
        <div className="flex flex-col items-center mb-8 select-none">
          <div className="text-3xl font-black leading-none tracking-tighter text-[#2D2D2D] uppercase">
            METRO
          </div>
          <div className="text-[10px] font-bold tracking-[0.6em] text-[#D9A036] -mt-1 w-full uppercase">
            INMERSIÓN
          </div>
        </div>

        <p className="text-[#2D2D2D]/60 text-[10px] mb-12 max-w-lg mx-auto leading-loose uppercase tracking-[0.4em] font-bold">
          Virtual Tours para tus propiedades en Medellin
        </p>
        
        <div className="flex justify-center space-x-12 mb-16">
          <a href="#eficiencia" className="text-[#2D2D2D]/40 hover:text-[#D9A036] transition-all uppercase text-[9px] font-black tracking-[0.3em]">Beneficios</a>
          <a href="#calculadora" className="text-[#2D2D2D]/40 hover:text-[#D9A036] transition-all uppercase text-[9px] font-black tracking-[0.3em]">Presupuesto</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-[#2D2D2D]/40 hover:text-[#D9A036] transition-all uppercase text-[9px] font-black tracking-[0.3em]">WhatsApp</a>
        </div>

        <div className="text-[#2D2D2D]/20 text-[9px] font-black uppercase tracking-[0.5em] mb-6">
          &copy; {new Date().getFullYear()} METRO INMERSIÓN | Recorridos 3D y Activos Digitales.
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-40">
           <span className="text-[8px] font-black uppercase tracking-widest text-[#2D2D2D]">Expertos en Visualización</span>
           <div className="hidden md:block w-1.5 h-1.5 bg-[#D9A036] rounded-full"></div>
           <span className="text-[8px] font-black uppercase tracking-widest text-[#2D2D2D]">Medellín - Colombia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
