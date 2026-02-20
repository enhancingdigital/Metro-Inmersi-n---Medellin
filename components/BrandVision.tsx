import React from 'react';

const BrandVision: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.25] saturate-[1.2] bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1600")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl bg-black/40 backdrop-blur-2xl border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-2xl">
          <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.6em] mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#4FB0B3]"></span>
            Filosofía M²
          </h2>
          <p className="text-white text-4xl md:text-6xl font-black leading-[1] uppercase tracking-tighter mb-10">
            Venda con <br/>
            <span className="text-glow-teal text-[#4FB0B3]">Excelencia</span>
          </p>
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed italic mb-10 border-l-2 border-[#FF7500] pl-8">
            Nuestra visión es simple: que su propiedad hable por sí misma. No vendemos tecnología, vendemos la libertad de cerrar negocios sin fronteras ni pérdidas de tiempo.
          </p>
          <div className="flex gap-4">
             <div className="w-4 h-4 rounded-full bg-[#4FB0B3] shadow-[0_0_15px_#4FB0B3]"></div>
             <div className="w-4 h-4 rounded-full bg-[#FF7500] shadow-[0_0_15px_#FF7500]"></div>
             <div className="w-4 h-4 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVision;