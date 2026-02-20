
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppFAB: React.FC = () => {
  const handleWhatsAppClick = () => {
    const msg = "Hola Metro Virtual Tours! 👋 Me gustaría recibir más información sobre sus recorridos virtuales 3D para mi propiedad.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center">
      {/* Tooltip text */}
      <div className="mr-4 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-[#4FB0B3]/20 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4FB0B3]">Hablemos ahora</span>
      </div>

      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#4FB0B3] text-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-12 active:scale-95 group relative overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-white/20 animate-ping opacity-0 group-hover:opacity-100 rounded-full"></div>
        
        {/* Icon */}
        <MessageCircle size={28} className="md:size-[32px] relative z-10" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default WhatsAppFAB;
