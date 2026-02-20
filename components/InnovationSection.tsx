import React from 'react';
import { Cpu, Zap, MapPin } from 'lucide-react';

const InnovationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] relative overflow-hidden">
      {/* Background Medellín Lights */}
      <div 
        className="absolute inset-0 opacity-[0.1] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593012651037-9755494d93d5?auto=format&fit=crop&q=80&w=1600")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FB0B3]/10 border border-[#4FB0B3]/20 mb-6">
              <MapPin size={12} className="text-[#4FB0B3]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4FB0B3]">Distrito de Innovación</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Compromiso con el <br/>
              <span className="text-glow-teal text-[#4FB0B3]">Valle del Software</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed max-w-xl">
              Medellín es epicentro de ciencia y tecnología. En M² | Virtual Tours, nos enorgullece ser parte del ecosistema de innovación local, utilizando herramientas de última generación para transformar el sector inmobiliario de nuestra ciudad.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#4FB0B3]/30 transition-all group">
                <Cpu className="text-[#4FB0B3] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Tecnología Local</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Impulsando la transformación digital de Antioquia.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF7500]/30 transition-all group">
                <Zap className="text-[#FF7500] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Visión de Futuro</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Creando los activos digitales que la ciudad merece.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#4FB0B3]/20 blur-[100px] rounded-full group-hover:bg-[#4FB0B3]/30 transition-all duration-1000"></div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=1200" 
                alt="Medellín Innovation Hub" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="text-white font-black text-2xl uppercase tracking-tighter">Medellín</div>
                <div className="text-[#4FB0B3] text-[10px] font-black uppercase tracking-[0.4em]">Ciudad del Conocimiento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;