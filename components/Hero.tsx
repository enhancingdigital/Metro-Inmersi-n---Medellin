
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const handleSpecialQuote = () => {
    const msg = "Hola Metro Inmersión! 👋 Vi su sitio web y me interesa digitalizar un espacio. ¿Podemos hablar?";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('calculadora');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden scanline">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D9A036]/[0.02] border-l border-black/[0.03] -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-left">
          <div className="text-[9px] font-black text-[#D9A036] uppercase tracking-[0.7em] mb-6">Tus espacios, ahora digitales</div>
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black mb-8 leading-[0.8] tracking-tighter text-[#2D2D2D] uppercase">
            Abre tus <br/>
            <span className="text-[#D9A036] block mt-2">Puertas</span> 
            <span className="text-[#2D2D2D]/60 text-5xl md:text-7xl block tracking-tight font-normal lowercase italic mt-4">al mundo entero.</span>
          </h1>

          <div className="flex items-start gap-8 mb-12">
            <div className="w-12 h-[1px] bg-[#D9A036] mt-2 shrink-0"></div>
            <p className="mono text-[10px] font-black uppercase tracking-[0.4em] text-[#2D2D2D]/50 leading-loose">
              Medellín • Envigado • Sabaneta<br/>
              Tours Virtuales 3D Increíbles<br/>
              Calidad que se siente
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-[#2D2D2D]/70 mb-14 max-w-xl font-medium leading-snug border-l-4 border-[#D9A036] pl-8">
            Ayudamos a que tus clientes visiten tu propiedad sin salir de casa. Más cierres rápidos, menos visitas innecesarias y una imagen profesional impecable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#calculadora" 
              onClick={scrollToCalculator}
              className="w-full sm:w-auto bg-[#2D2D2D] text-[#F8F5F2] px-12 py-7 rounded-tight font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#D9A036] transition-all btn-shadow text-center"
            >
              Ver Precios
            </a>
            <button 
              onClick={handleSpecialQuote}
              className="w-full sm:w-auto border border-[#2D2D2D]/20 text-[#2D2D2D] px-12 py-7 rounded-tight font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#2D2D2D] hover:text-white transition-all text-center"
            >
              Hablemos por WhatsApp
            </button>
          </div>
        </div>

        <div className="relative group hidden lg:block pr-8">
          <div className="absolute inset-0 bg-[#D9A036]/5 transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="p-1 border border-[#2D2D2D]/5 bg-white rounded-tight shadow-xl relative overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden rounded-tight border border-black/5">
               <img 
                 src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05] transition duration-700 group-hover:scale-105" 
                 alt="Espacio Digitalizado" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
