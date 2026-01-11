
import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (isScrolled ? 60 : 80);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(whatsappUrl, '_blank');
    e.preventDefault();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Tipográfico: METRO (Negro) INMERSIÓN (Acento) */}
        <div 
          className="flex flex-col items-start select-none cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-2xl md:text-3xl font-black leading-none tracking-tighter text-[#2D2D2D] uppercase">
            METRO
          </div>
          <div className="text-[7px] md:text-[9px] font-bold tracking-[0.55em] text-[#D9A036] -mt-0.5 w-full text-justify uppercase">
            INMERSIÓN
          </div>
        </div>
        
        <div className={`hidden lg:flex space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-[#2D2D2D]/60`}>
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, 'top')}
            className="hover:text-[#D9A036] transition-all"
          >
            Inicio
          </a>
          <a 
            href="#portafolio" 
            onClick={(e) => scrollToSection(e, 'portafolio')}
            className="hover:text-[#D9A036] transition-all"
          >
            Portafolio
          </a>
          <a 
            href="#eficiencia" 
            onClick={(e) => scrollToSection(e, 'eficiencia')}
            className="hover:text-[#D9A036] transition-all"
          >
            Eficiencia
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => scrollToSection(e, 'servicios')}
            className="hover:text-[#D9A036] transition-all"
          >
            Servicios
          </a>
          <a 
            href="#calculadora" 
            onClick={(e) => scrollToSection(e, 'calculadora')}
            className="hover:text-[#D9A036] transition-all"
          >
            Presupuesto
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="#"
            onClick={handleContactClick}
            className="hidden sm:block bg-[#2D2D2D] text-white px-10 py-3.5 rounded-tight font-black text-[10px] uppercase tracking-widest hover:bg-[#D9A036] transition-all transform shadow-lg active:scale-95"
          >
            CONTACTAR
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
