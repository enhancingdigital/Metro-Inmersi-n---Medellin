import React from 'react';
import { Users, Clock, TrendingUp, Filter } from 'lucide-react';

const ValueShowcase: React.FC = () => {
  return (
    <section id="eficiencia" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square group bg-slate-800">
                   <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Home Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                   <Users className="text-[#4FB0B3] mb-4" size={32} />
                   <h4 className="text-white font-black uppercase text-sm mb-2 tracking-widest">Alcance Global</h4>
                   <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase tracking-wider">Su propiedad visible desde cualquier país, 24/7.</p>
                </div>
             </div>
             <div className="space-y-6 pt-12">
                <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                   <Filter className="text-[#FF7500] mb-4" size={32} />
                   <h4 className="text-white font-black uppercase text-sm mb-2 tracking-widest">Filtro Real</h4>
                   <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase tracking-wider">Elimine visitas de curiosos y ahorre horas de trabajo.</p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square group bg-slate-800 relative">
                   <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" alt="Modern Corporate Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                   
                   {/* Mattertags Simulation */}
                   <div className="mattertag" style={{ top: '30%', left: '40%' }} title="Escritorio Ergonómico"></div>
                   <div className="mattertag" style={{ top: '60%', left: '70%' }} title="Sala de Juntas"></div>
                   <div className="mattertag" style={{ top: '45%', left: '20%' }} title="Iluminación Natural"></div>
                   
                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>
             </div>
          </div>

          <div>
            <h2 className="text-[#4FB0B3] text-[11px] font-black uppercase tracking-[0.6em] mb-6">Eficiencia en Ventas</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
              Transforme <span className="text-glow-orange text-[#FF7500] italic">Miradas</span> en Cierres
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              No se trata de la cámara, se trata de los resultados. Propiedades con tours virtuales reciben hasta un 87% más de visualizaciones y se venden un 31% más rápido.
            </p>
            
            <div className="space-y-8">
               {[
                 { title: "Aumento de Confianza", desc: "La transparencia total genera cierres más rápidos.", icon: TrendingUp },
                 { title: "Ahorro de Tiempo", desc: "Solo atienda visitas físicas de clientes pre-convencidos.", icon: Clock }
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

export default ValueShowcase;