
import React from 'react';

const ImmersiveDivider: React.FC = () => {
  return (
    <section className="relative h-[65vh] flex items-center overflow-hidden border-y border-white/10 bg-black">
      {/* Imagen de fondo de alta calidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 grayscale saturate-0 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600")' }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/20 to-slate-950"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 opacity-90">
          Resultados <span className="text-[#4FB0B3] text-glow-teal">Medibles</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
           <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#4FB0B3]/20 transition-all group">
              <div className="text-3xl md:text-5xl font-black text-[#FF7500] mb-2 group-hover:scale-110 transition-transform">300%</div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">Más Engagement <br/> en Portales</div>
           </div>
           <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#4FB0B3]/20 transition-all group">
              <div className="text-3xl md:text-5xl font-black text-[#4FB0B3] mb-2 group-hover:scale-110 transition-transform">31%</div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">Venta Más <br/> Rápida (NAR)</div>
           </div>
           <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#4FB0B3]/20 transition-all group">
              <div className="text-3xl md:text-5xl font-black text-[#FF7500] mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">Consultas de <br/> Mayor Calidad</div>
           </div>
           <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#4FB0B3]/20 transition-all group">
              <div className="text-3xl md:text-5xl font-black text-[#4FB0B3] mb-2 group-hover:scale-110 transition-transform">74%</div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">Cierre de <br/> Agentes Top</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveDivider;
