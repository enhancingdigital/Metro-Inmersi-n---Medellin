
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-32 px-6 bg-[#F8F5F2] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#D9A036] text-[10px] font-black uppercase tracking-[0.6em] mb-4">Portafolio Inmersivo</h2>
          <p className="text-[#2D2D2D] max-w-3xl mx-auto text-4xl md:text-6xl font-black leading-[0.9] uppercase tracking-tighter">
            Vive la <span className="text-[#D9A036] italic">Experiencia</span>
          </p>
        </div>
        
        <div className="aspect-video w-full bg-white p-2 border border-black/5 shadow-3xl relative group overflow-hidden">
          <iframe 
            src="https://my.matterport.com/show/?m=SX6bi97ST3U" 
            frameBorder="0" 
            className="w-full h-full grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
            allowFullScreen 
            allow="xr-spatial-tracking"
          ></iframe>
          
          <div className="absolute top-10 left-10 flex gap-4 pointer-events-none">
            <span className="bg-[#2D2D2D] text-white px-8 py-2.5 rounded-tight text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl">Muestra Real 4K</span>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-40">
           {['Navegación Fluida', 'Planos de Planta', 'Calidad HDR', 'Dollhouse Vision'].map(label => (
             <div key={label} className="mono text-[9px] font-black uppercase tracking-[0.4em] text-[#2D2D2D] flex items-center gap-3">
               <div className="w-1 h-1 bg-[#D9A036]"></div>
               {label}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
