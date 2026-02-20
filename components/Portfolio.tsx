
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-24 px-6 bg-[#020617] relative flex items-center overflow-hidden border-y border-white/5">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4FB0B3]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF7500]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#4FB0B3]/10 border border-[#4FB0B3]/20 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4FB0B3]">Experiencia de Usuario Inmersiva</span>
          </div>
          <h2 className="text-white max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-black leading-[1] md:leading-[0.9] uppercase tracking-tighter">
            La Realidad <br/> <span className="text-glow-orange text-[#FF7500] italic">Digitalizada</span> en Alta Definición
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto relative group">
          {/* Marco decorativo "Cyber" */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4FB0B3]/20 via-transparent to-[#FF7500]/20 rounded-[2.5rem] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-auto lg:aspect-video bg-slate-900 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden rounded-[2.5rem]">
            <iframe 
              src="https://my.matterport.com/show/?m=2jrAF6ymFya" 
              frameBorder="0" 
              className="w-full h-full block opacity-100 transition-opacity duration-1000" 
              allowFullScreen 
              allow="xr-spatial-tracking"
              title="Recorrido Virtual Interactivo"
            ></iframe>
            
            {/* Overlay de banner removido por requerimiento */}
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4FB0B3]/30 to-transparent opacity-30"></div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
           {[
             { label: 'Visitas Ilimitadas', color: '#4FB0B3' },
             { label: 'Interacción Táctil', color: '#FF7500' },
             { label: 'Vista de Maqueta', color: '#4FB0B3' },
             { label: 'Carga Ultrarrápida', color: '#FF7500' }
           ].map(item => (
             <div key={item.label} className="flex items-center gap-3 transition-transform hover:translate-y-[-2px]">
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{item.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
