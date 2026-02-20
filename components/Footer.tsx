
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#020617] text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo with Teal Hover */}
        <div className="flex flex-col items-center mb-12 select-none group">
          <Logo 
            variant="full"
            size="md" 
            className="text-white group-hover:text-[#4FB0B3] transition-colors duration-500" 
          />
        </div>

        <p className="text-slate-500 text-[10px] mb-12 max-w-lg mx-auto leading-loose uppercase tracking-[0.4em] font-bold">
          Digitalización de Propiedades en <span className="text-[#4FB0B3]">Medellín</span>
        </p>
        
        <div className="flex justify-center space-x-12 mb-16">
          <a href="#nosotros" className="text-slate-600 hover:text-[#4FB0B3] transition-all uppercase text-[9px] font-black tracking-[0.3em]">Nosotros</a>
          <a href="#calculadora" className="text-slate-600 hover:text-[#4FB0B3] transition-all uppercase text-[9px] font-black tracking-[0.3em]">Presupuesto</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-[#4FB0B3] hover:text-[#FF7500] transition-all uppercase text-[9px] font-black tracking-[0.3em]">WhatsApp</a>
        </div>

        <div className="text-slate-700 text-[9px] font-black uppercase tracking-[0.5em] mb-6">
          &copy; {new Date().getFullYear()} METRO VIRTUAL TOURS | <span className="text-[#4FB0B3]/40">Recorridos 3D y Activos Digitales.</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-40">
           <span className="text-[8px] font-black uppercase tracking-widest text-[#4FB0B3]">Expertos en Visualización</span>
           <div className="hidden md:block w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
           <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Medellín - Colombia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
