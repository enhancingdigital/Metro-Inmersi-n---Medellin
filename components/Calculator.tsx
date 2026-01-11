
import React, { useState, useMemo, useEffect } from 'react';
import { PLANS, WHATSAPP_NUMBER } from '../constants';
import { MapPin, Sparkles, CheckCircle2, Gift } from 'lucide-react';
import TrustBadge from './TrustBadge';

const Calculator: React.FC = () => {
  const [area, setArea] = useState(60);
  const [rooms, setRooms] = useState(1);
  const [hostingMonths, setHostingMonths] = useState(2);
  const [paymentType, setPaymentType] = useState<'anticipado' | 'entrega'>('entrega');

  useEffect(() => {
    if (area <= 45) setRooms(1);
    else if (area <= 75) setRooms(2);
    else if (area <= 110) setRooms(3);
    else if (area <= 180) setRooms(4);
    else if (area <= 280) setRooms(5);
    else if (area <= 350) setRooms(6);
    else setRooms(8);
  }, [area]);

  const selectedPlan = useMemo(() => {
    if (area <= 60) return PLANS[0];
    if (area <= 160) return PLANS[1];
    if (area <= 360) return PLANS[2];
    return PLANS[3];
  }, [area]);

  const isACotizar = useMemo(() => area > 360, [area]);

  const totalPrice = useMemo(() => {
    if (isACotizar) return 0;
    let base = selectedPlan.price;
    const includedHosting = selectedPlan.id === 'express' ? 2 : selectedPlan.id === 'inmobiliario' ? 6 : 12;
    if (hostingMonths > includedHosting) {
      base += (hostingMonths - includedHosting) * 20000;
    }
    return base;
  }, [selectedPlan, hostingMonths, isACotizar]);

  const handleWhatsApp = () => {
    let msg = `Hola Metro Inmersión! 👋\n\nMe gustaría agendar un tour virtual para mi propiedad:\n\n📏 Área: ${area}m²\n💰 Plan: ${selectedPlan.name}\n💳 Pago: ${paymentType === 'anticipado' ? 'Anticipado (Dron Gratis)' : 'Contra Entrega'}\n\n¿Qué disponibilidad tienen?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-40 px-6 bg-[#2D2D2D] text-[#F8F5F2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#D9A036]/5 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>

      <div className={`max-w-5xl mx-auto p-10 md:p-24 bg-[#F8F5F2] text-[#2D2D2D] relative z-10 rounded-tight border border-[#2D2D2D]/10 transition-all duration-500 ${isACotizar ? 'shadow-[12px_12px_0px_#D9A036]' : 'shadow-[12px_12px_0px_#2D2D2D]'}`}>
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="text-left relative w-full lg:w-3/5">
            <div className="text-[9px] font-black text-[#D9A036] uppercase tracking-[0.6em] mb-4">Descubre tu inversión</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-[#2D2D2D] leading-none">
              Calcula tu <br/>
              <span className={isACotizar ? 'text-[#D9A036]' : ''}>Presupuesto</span>
            </h2>
            <div className="flex items-center gap-3 mt-4 text-[10px] font-black text-[#2D2D2D]/40 uppercase tracking-widest">
               <CheckCircle2 size={14} className="text-[#D9A036]" /> Pagas solo cuando estés feliz con el resultado
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
             <TrustBadge size="lg" />
          </div>
        </div>
        
        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between items-end mb-8">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D2D2D]/40">¿Qué tan grande es tu espacio?</label>
              <div className="flex items-baseline gap-2">
                <div className={`text-6xl font-black tracking-tighter transition-colors ${isACotizar ? 'text-[#D9A036]' : 'text-[#2D2D2D]'}`}>
                  {area}
                </div>
                <span className="text-[#D9A036] text-[10px] font-black uppercase tracking-widest">m²</span>
              </div>
            </div>
            <input 
              type="range" 
              min="30" 
              max="600" 
              step="5" 
              value={area} 
              onChange={(e) => setArea(parseInt(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D2D2D]/40 block">Número de ambientes</label>
              <div className="flex items-center gap-4 bg-white px-4 py-3 border border-black/5 rounded-tight">
                <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="w-8 h-8 flex items-center justify-center font-black hover:bg-[#D9A036] hover:text-white transition-colors">-</button>
                <div className="flex-1 text-center font-black text-xl">{rooms}</div>
                <button onClick={() => setRooms(Math.min(25, rooms + 1))} className="w-8 h-8 flex items-center justify-center font-black hover:bg-[#D9A036] hover:text-white transition-colors">+</button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2D2D2D]/40 block">Tiempo en línea</label>
              <select 
                value={hostingMonths}
                onChange={(e) => setHostingMonths(parseInt(e.target.value))}
                className="w-full bg-white border border-black/5 px-6 py-4 font-black uppercase tracking-widest text-[10px] appearance-none cursor-pointer rounded-tight outline-none focus:border-[#D9A036]"
              >
                <option value={2}>2 Meses (Venta Rápida)</option>
                <option value={6}>6 Meses (Recomendado)</option>
                <option value={12}>12 Meses (Empresarial)</option>
                <option value={24}>24 Meses (Permanente)</option>
              </select>
            </div>
          </div>

          {selectedPlan.id === 'inmobiliario' && (
            <div className="bg-[#D9A036]/5 p-8 rounded-tight border border-dashed border-[#D9A036]/20">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="text-[#D9A036]" size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D2D2D]/60">Beneficios especiales para ti</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setPaymentType('entrega')}
                  className={`p-5 rounded-tight text-[9px] font-black uppercase tracking-widest border transition-all ${paymentType === 'entrega' ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]' : 'bg-white text-[#2D2D2D] border-black/10'}`}
                >
                  Pago Contra Entrega (Addon Digital Gratis)
                </button>
                <button 
                  onClick={() => setPaymentType('anticipado')}
                  className={`p-5 rounded-tight text-[9px] font-black uppercase tracking-widest border transition-all ${paymentType === 'anticipado' ? 'bg-[#D9A036] text-white border-[#D9A036]' : 'bg-white text-[#2D2D2D] border-black/10'}`}
                >
                  Pago Anticipado (Toma con Dron Gratis)
                </button>
              </div>
            </div>
          )}

          <div className="bg-[#2D2D2D] p-12 md:p-16 rounded-tight text-left flex flex-col md:flex-row items-center justify-between gap-12 mt-16 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex-1">
              <div className="text-[10px] font-black text-[#D9A036] uppercase tracking-[0.5em] mb-4">Inversión estimada para {selectedPlan.name}</div>
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                {isACotizar ? (
                  <span className="text-[#D9A036]">Lo hablamos</span>
                ) : (
                  `$${totalPrice.toLocaleString('es-CO')}`
                )}
              </div>
              {!isACotizar && <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mt-3 italic">Tranquilo, pagas solo al recibir tu tour listo.</div>}
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-auto relative z-10">
              <button 
                onClick={handleWhatsApp}
                className="px-14 py-8 bg-[#D9A036] text-white rounded-tight font-black text-[11px] uppercase tracking-[0.4em] transition-all transform btn-shadow active:scale-95 hover:bg-white hover:text-[#2D2D2D]"
              >
                Agenda tu visita gratis
              </button>
              <p className="text-center md:text-right text-[8px] font-black text-white/30 uppercase tracking-[0.3em]">Operamos en Medellín y el Valle de Aburrá</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
