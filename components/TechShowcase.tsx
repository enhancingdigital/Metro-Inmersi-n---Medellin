
import React from 'react';
import { Shield, Target, Cpu, Zap } from 'lucide-react';

const TechShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square group">
                   <img src="https://r.jina.ai/i/78f2ec6204c944729f2da5be309a473d" alt="Precision Camera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                   <Target className="text-[#4FB0B3] mb-4" size={32} />
                   <h4 className="text-white font-black uppercase text-sm mb-2 tracking-widest">Precisión Láser</h4>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">Margen de error menor al 1% en medidas.</p>
                </div>
             </div>
             <div className="space-y-6 pt-12">
                <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                   <Shield className="text-[#FF7500] mb-4" size={32} />
                   <h4 className="text-white font-black uppercase text-sm mb-2 tracking-widest">Certificación</h4>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">Activos digitales verificados para real estate.</p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square group">
                   <img src="https://r.jina.ai/i/52c676f44d8544fc903f56f35ea9a5ec" alt="Laser Scanner in Action" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
             </div>
          </div>

          <div>
            <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.6em] mb-6">Equipamiento de Vanguardia</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
              Ingeniería Aplicada al <span className="text-glow-orange text-[#FF7500] italic">Real Estate</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              No utilizamos cámaras convencionales. Empleamos escáneres láser LIDAR que proyectan millones de puntos para construir un mapa exacto de su espacio.
            </p>
            
            <div className="space-y-8">
               {[
                 { title: "Nube de Puntos", desc: "Digitalización volumétrica completa del espacio.", icon: Cpu },
                 { title: "Procesamiento Cloud", desc: "Renderizado instantáneo en servidores de alta potencia.", icon: Zap }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#4FB0B3]/10 rounded-2xl flex items-center justify-center shrink-0">
                       <item.icon className="text-[#4FB0B3]" size={20} />
                    </div>
                    <div>
                       <h5 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-2">{item.title}</h5>
                       <p className="text-slate-500 text-[11px] uppercase tracking-widest font-bold">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
