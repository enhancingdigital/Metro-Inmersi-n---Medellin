import React from 'react';
import { Cpu, Zap, MapPin } from 'lucide-react';

// AboutUs component definition
const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="bg-[#020617] relative overflow-hidden">
      {/* Background Medellín Lights for the whole block */}
      <div 
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center grayscale pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593012651037-9755494d93d5?auto=format&fit=crop&q=80&w=1600")' }}
      ></div>
      
      <div className="grid lg:grid-cols-2 relative z-10 border-y border-white/5">
        
        {/* LADO IZQUIERDO: Filosofía Metro */}
        <div className="relative min-h-[600px] flex items-center px-6 py-20 lg:px-24 border-b lg:border-b-0 lg:border-r border-white/5">
           <div className="absolute inset-0 bg-cover bg-center brightness-[0.2] opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200")' }}></div>
           
           <div className="relative max-w-xl">
             <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.6em] mb-8 flex items-center gap-4">
               <span className="w-12 h-[1px] bg-[#4FB0B3]"></span>
               Filosofía Metro
             </h2>
             <h3 className="text-white text-4xl md:text-6xl font-black leading-[1] uppercase tracking-tighter mb-10">
               Venda con <br/>
               <span className="text-glow-teal text-[#4FB0B3]">Excelencia</span>
             </h3>
             <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed italic border-l-2 border-[#FF7500] pl-8 mb-10">
               Nuestra visión es simple: que su propiedad hable por sí misma. No vendemos tecnología, vendemos la libertad de cerrar negocios sin fronteras ni pérdidas de tiempo.
             </p>
             <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-[#4FB0B3] shadow-[0_0_15px_#4FB0B3]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FF7500] shadow-[0_0_15px_#FF7500]"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
             </div>
           </div>
        </div>

        {/* LADO DERECHO: Compromiso Medellín */}
        <div className="relative min-h-[600px] flex items-center px-6 py-20 lg:px-24 bg-slate-900/20 backdrop-blur-sm">
           <div className="relative w-full">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FB0B3]/10 border border-[#4FB0B3]/20 mb-6">
               <MapPin size={12} className="text-[#4FB0B3]" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4FB0B3]">Medellín: Valle de Innovación</span>
             </div>
             
             <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
               Compromiso con la <br/>
               <span className="text-glow-teal text-[#4FB0B3]">Innovación Local</span>
             </h3>
             
             <p className="text-slate-400 text-base mb-12 font-medium leading-relaxed max-w-lg">
               Ubicados en el corazón de Antioquia, nos enorgullece ser parte del ecosistema tecnológico que transforma el sector inmobiliario de nuestra ciudad con herramientas de vanguardia mundial. En Metro Virtual Tours impulsamos el talento local.
             </p>
             
             <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#4FB0B3]/30 transition-all group">
                 <Cpu className="text-[#4FB0B3] mb-4 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 text-[10px]">Ecosistema TI</h4>
                 <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">Impulsando la transformación digital regional.</p>
               </div>
               <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF7500]/30 transition-all group">
                 <Zap className="text-[#FF7500] mb-4 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 text-[10px]">Visión Antioquia</h4>
                 <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">Activos digitales para la Medellín del futuro.</p>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// Explicit default export
export default AboutUs;
