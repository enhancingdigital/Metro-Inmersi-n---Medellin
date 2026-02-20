import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'top' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Experiencia', id: 'portafolio' },
    { name: 'Planes', id: 'servicios' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Area - Much more prominent */}
          <div 
            className="flex items-center select-none cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo 
              size="sm" 
              className="group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-16">
            <div className="flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.4em] text-white/40">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="hover:text-white hover:text-glow-white transition-all relative group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#4FB0B3] transition-all group-hover/link:w-full"></span>
                </a>
              ))}
            </div>

            <a 
              href="#calculadora"
              onClick={(e) => scrollToSection(e, 'calculadora')}
              className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#4FB0B3] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#020617] transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden flex items-center justify-center`}>
        <div className="flex flex-col items-center space-y-12 px-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-4xl font-black uppercase tracking-[0.2em] text-white/20 hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#calculadora"
            onClick={(e) => scrollToSection(e, 'calculadora')}
            className="text-2xl font-black uppercase tracking-[0.3em] text-[#4FB0B3]"
          >
            Cotizar Proyecto
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;