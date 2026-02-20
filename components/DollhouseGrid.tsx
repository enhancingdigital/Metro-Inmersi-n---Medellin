
import React from 'react';

const examples = [
  { img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800", title: "Residencial", desc: "Venda su hogar en tiempo récord" },
  { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", title: "Comercial", desc: "Atraiga clientes a su negocio" },
  { img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", title: "Lujo", desc: "Exclusividad en cada detalle" }
];

const DollhouseGrid: React.FC = () => {
  return (
    <section id="portafolio" className="py-24 bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[#FF7500] text-[11px] font-black uppercase tracking-[0.6em] mb-4">Herramientas de Venta</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Entendimiento <span className="italic text-[#4FB0B3]">Total</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((item, i) => (
            <div key={i} className="cyber-card group">
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 relative">
                 <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-2">{item.title}</h4>
                 <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.desc}</p>
                 <div className="mt-6 flex gap-2">
                    <span className="w-8 h-1 bg-[#4FB0B3] rounded-full"></span>
                    <span className="w-2 h-1 bg-white/20 rounded-full"></span>
                    <span className="w-2 h-1 bg-white/20 rounded-full"></span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DollhouseGrid;
