
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { Zap, X, ShieldCheck, Cpu, Camera, Maximize, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  const handleSpecialQuote = () => {
    const msg = "Hola Metro Virtual Tours! 👋 Me interesa vender mi propiedad más rápido con un tour virtual.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const openTechModal = () => {
    setIsTechModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTechModal = () => {
    setIsTechModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden hero-mesh">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
          {/* Badge del Hero - AHORA ES UN TRIGGER DE MODAL */}
          <button 
            onClick={openTechModal}
            className="relative inline-flex items-center gap-5 px-7 py-4 rounded-full bg-white/[0.03] border border-white/10 mb-10 group/hero-badge backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-[#4FB0B3]/40 transition-all duration-500 cursor-pointer outline-none"
          >
            {/* Shimmer effect interno */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
            </div>
            
            {/* Radar Dot Animation - Espaciado extra para evitar cortes */}
            <div className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute w-8 h-8 rounded-full bg-[#4FB0B3]/20 animate-ping"></span>
              <span className="relative w-3 h-3 rounded-full bg-[#4FB0B3] shadow-[0_0_15px_#4FB0B3] border border-white/30"></span>
            </div>
            
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#4FB0B3] text-glow-teal flex items-center gap-2 relative z-10">
              <Zap size={12} fill="currentColor" /> Visualización en Alta Definición
            </span>
          </button>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white uppercase">
            Venda más <br/>
            <span className="text-[#4FB0B3] text-glow-teal">Sin Esfuerzo</span> 
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl font-medium leading-relaxed border-l-4 border-[#FF7500] pl-8">
            Filtre clientes reales y ahorre tiempo eliminando visitas innecesarias. Creamos virtual tours y gemelos digitales que cierran ventas por usted 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#calculadora" 
              className="w-full sm:w-auto btn-cyber px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] text-center"
            >
              Cotizar Ahora
            </a>
            <button 
              onClick={handleSpecialQuote}
              className="w-full sm:w-auto bg-white/5 border border-white/20 text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all text-center"
            >
              Hablar con un Experto
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 bg-slate-900">
             <img 
               src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
               alt="Tablet Interaction" 
               className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
             />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4FB0B3]/20 blur-3xl rounded-full group-hover:bg-[#4FB0B3]/40 transition-all"></div>
          </div>
        </div>
      </div>

      {/* MODAL TÉCNICO DE ALTA DEFINICIÓN */}
      {isTechModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-[#0F172A] border border-[#4FB0B3]/30 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(79,176,179,0.2)] animate-in zoom-in-95 duration-500">
            
            <button 
              onClick={closeTechModal}
              className="absolute top-8 right-8 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="p-10 md:p-16">
               <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 bg-[#4FB0B3] text-white rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(79,176,179,0.5)]">
                     <Camera size={32} />
                  </div>
                  <div>
                     <h4 className="text-[10px] font-black text-[#4FB0B3] uppercase tracking-[0.5em] mb-2">Estándar de Calidad</h4>
                     <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">Captura Inmersiva 8K</h3>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: Maximize, title: "LIDAR de Precisión", desc: "Escaneo por nubes de puntos con 99% de exactitud métrica." },
                    { icon: Cpu, title: "Renderizado Cloud", desc: "Procesamiento HDR inteligente para luces y sombras realistas." },
                    { icon: ShieldCheck, title: "Activo Verificado", desc: "Gemelo digital compatible con portales premium mundiales." },
                    { icon: Zap, title: "Carga Adaptativa", desc: "Visualización fluida incluso en conexiones móviles limitadas." }
                  ].map((tech, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                       <tech.icon className="text-[#4FB0B3] shrink-0" size={20} />
                       <div>
                          <h5 className="text-white text-[11px] font-black uppercase tracking-widest mb-1">{tech.title}</h5>
                          <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase">{tech.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                     <CheckCircle2 size={16} className="text-[#4FB0B3]" />
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Tecnología Certificada Metro Tours</span>
                  </div>
                  <button 
                    onClick={closeTechModal}
                    className="w-full md:w-auto px-10 py-4 bg-[#4FB0B3] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-[#3d8c8f] transition-all"
                  >
                    Entendido
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
