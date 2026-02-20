
import React, { useState, useMemo, useEffect } from 'react';
import { PLANS, ADDONS, WHATSAPP_NUMBER } from '../constants';
import { CheckCircle2, Plus, Minus, Check } from 'lucide-react';
import { PlanSelection } from '../App';
import TrustBadge from './TrustBadge';

interface CalculatorProps {
  externalSelection: PlanSelection | null;
}

const Calculator: React.FC<CalculatorProps> = ({ externalSelection }) => {
  const [area, setArea] = useState(60);
  const [rooms, setRooms] = useState(1);
  const [hostingMonths, setHostingMonths] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (externalSelection !== null) {
      if (externalSelection.area >= 9999) {
        setArea(600);
      } else {
        setArea(externalSelection.area);
      }
    }
  }, [externalSelection]);

  // Sugerencia automática pero manualizable
  useEffect(() => {
    let suggested = 1;
    if (area <= 45) suggested = 1;
    else if (area <= 75) suggested = 2;
    else if (area <= 110) suggested = 3;
    else if (area <= 180) suggested = 4;
    else if (area <= 280) suggested = 5;
    else if (area <= 350) suggested = 6;
    else suggested = 8;
    setRooms(suggested);
  }, [area]);

  const selectedPlan = useMemo(() => {
    if (area <= 60) return PLANS[0];
    if (area <= 160) return PLANS[1];
    if (area <= 360) return PLANS[2];
    return PLANS[3];
  }, [area]);

  const isACotizar = useMemo(() => area >= 600 || selectedPlan.id === 'corporativo', [area, selectedPlan]);

  // Colores únicos por plan
  const planTheme = useMemo(() => {
    switch (selectedPlan.id) {
      case 'express': return { color: '#4FB0B3', bg: 'bg-[#4FB0B3]', border: 'border-[#4FB0B3]/30', text: 'text-[#4FB0B3]', glow: 'text-glow-teal' };
      case 'inmobiliario': return { color: '#FF7500', bg: 'bg-[#FF7500]', border: 'border-[#FF7500]/30', text: 'text-[#FF7500]', glow: 'text-glow-orange' };
      case 'commercial': return { color: '#10B981', bg: 'bg-[#10B981]', border: 'border-[#10B981]/30', text: 'text-[#10B981]', glow: 'text-glow-green' };
      case 'corporativo': return { color: '#8B5CF6', bg: 'bg-[#8B5CF6]', border: 'border-[#8B5CF6]/30', text: 'text-[#8B5CF6]', glow: 'text-glow-purple' };
      default: return { color: '#4FB0B3', bg: 'bg-[#4FB0B3]', border: 'border-[#4FB0B3]/30', text: 'text-[#4FB0B3]', glow: '' };
    }
  }, [selectedPlan]);

  const includedServices = useMemo(() => {
    const included = new Set<string>();
    
    // Servicios específicos por plan
    if (selectedPlan.id === 'inmobiliario') {
      included.add('Desmueblar');
      included.add('Recorrido Vrbo 360');
    }
    
    if (selectedPlan.id === 'commercial') {
      included.add('Toma con Dron');
      included.add('Fotos HDR (10)');
      included.add('Google Street View');
      included.add('Planos de Planta');
    }
    
    // Servicios globales gratuitos
    ADDONS.forEach(addon => {
      if (addon.price === 0 && addon.name !== 'Archivo BIM') included.add(addon.name);
    });

    return included;
  }, [selectedPlan]);

  const toggleAddon = (name: string) => {
    if (includedServices.has(name)) return;
    const next = new Set(selectedAddons);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setSelectedAddons(next);
  };

  const totalPrice = useMemo(() => {
    if (isACotizar) return 0;
    let base = selectedPlan.price;
    const includedHosting = selectedPlan.id === 'express' ? 2 : selectedPlan.id === 'inmobiliario' ? 6 : 12;
    if (hostingMonths > includedHosting) {
      base += (hostingMonths - includedHosting) * 20000;
    }
    selectedAddons.forEach(addonName => {
      if (!includedServices.has(addonName)) {
        const addon = ADDONS.find(a => a.name === addonName);
        if (addon && addon.price > 0) base += addon.price;
      }
    });
    return base;
  }, [selectedPlan, hostingMonths, isACotizar, selectedAddons, includedServices]);

  const handleWhatsApp = () => {
    const detail = isACotizar ? "de Proyectos Especiales (+600m²)" : `de ${area}m²`;
    const addonsList = Array.from(selectedAddons).join(', ') || 'Ninguno';
    const msg = `¡Hola Metro Virtual Tours! 👋 Estoy interesado en digitalizar mi propiedad. Estos son los detalles de mi cotización:
🏠 Plan Seleccionado: ${selectedPlan.name}
📐 Área estimada: ${area} m²
📸 Ubicaciones de captura: ${rooms}
☁️ Meses de hosting: ${hostingMonths}
✨ Adicionales: ${addonsList}
💰 Inversión total estimada: ${isACotizar ? "A Cotizar" : `$${totalPrice.toLocaleString('es-CO')} COP`}

Me gustaría agendar una visita técnica en Medellín para iniciar con mi tour virtual.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 px-6 bg-[#020617] relative">
      <div className={`max-w-7xl mx-auto p-10 md:p-16 bg-slate-900 text-white rounded-[4rem] border border-white/10 transition-all duration-700 shadow-2xl relative overflow-hidden ${isACotizar ? 'ring-4 ring-[#8B5CF6]/30' : ''}`}>
        
        {/* Adorno de fondo adaptativo */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-[100px] pointer-events-none" style={{ backgroundColor: planTheme.color }}></div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 border-b border-white/10 pb-16">
          <div className="w-full lg:w-3/5">
            <div className={`text-[10px] font-black uppercase tracking-[0.6em] mb-4 ${planTheme.text}`}>
              Sistema de Cotización Inteligente v3.5
            </div>
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              Presupuesto <br/> <span className={`italic transition-colors ${planTheme.text}`}>{selectedPlan.name}</span>
            </h2>
          </div>
          <div className={`flex items-center gap-4 bg-white/5 px-8 py-4 rounded-3xl border transition-all duration-500 ${planTheme.border}`}>
             <div className={`w-3 h-3 rounded-full animate-pulse`} style={{ backgroundColor: planTheme.color }}></div>
             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">Garantía Riesgo Cero Metro</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-20">
            <div>
              <div className="flex justify-between items-end mb-10">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Área de Digitalización</label>
                <div className={`text-8xl font-black tracking-tighter ${planTheme.text}`}>
                  {area >= 600 ? '+600' : area} <span className="text-xl opacity-40 ml-2">m²</span>
                </div>
              </div>
              <input 
                type="range" min="30" max="600" step="5" value={area} 
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 cursor-pointer bg-white/10 rounded-full appearance-none"
                style={{ accentColor: planTheme.color }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Alojamiento Cloud</label>
                  <select 
                    value={hostingMonths} onChange={(e) => setHostingMonths(parseInt(e.target.value))}
                    className="w-full bg-slate-800 border border-white/10 px-8 py-6 font-black uppercase tracking-[0.2em] text-[12px] rounded-3xl outline-none focus:border-[#4FB0B3] transition-all hover:bg-slate-700"
                  >
                    <option value={2}>Plan Express (2 Meses)</option>
                    <option value={6}>Plan Inmobiliario Pro (6 Meses)</option>
                    <option value={12}>Plan Comercial (12 Meses)</option>
                  </select>
               </div>
               <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Puntos de Captura</label>
                  <div className={`w-full bg-white/5 border border-white/10 px-4 py-4 font-black text-center text-2xl rounded-3xl flex items-center justify-between`}>
                    <button 
                      onClick={() => setRooms(prev => Math.max(1, prev - 1))}
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                    >
                      <Minus size={18} className={planTheme.text} />
                    </button>
                    <div className="flex items-baseline gap-2">
                      <span className={planTheme.text}>{rooms}</span>
                      <span className="text-[10px] uppercase opacity-60">Ubicaciones</span>
                    </div>
                    <button 
                      onClick={() => setRooms(prev => prev + 1)}
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                    >
                      <Plus size={18} className={planTheme.text} />
                    </button>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Potenciadores de Venta</label>
            <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-6 custom-scrollbar">
              {ADDONS.map((addon) => {
                const isIncluded = includedServices.has(addon.name);
                const isSelected = selectedAddons.has(addon.name);
                const isObtener = addon.name === 'Archivo BIM';
                return (
                  <button
                    key={addon.name} onClick={() => toggleAddon(addon.name)} disabled={isIncluded}
                    className={`flex items-center justify-between p-6 border text-[11px] font-black uppercase tracking-widest transition-all rounded-[1.5rem] group/btn ${
                      isIncluded ? 'bg-white/10 text-slate-400 border-transparent cursor-default' : 
                      isSelected ? 'text-white border-transparent shadow-lg' : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                    style={{ backgroundColor: isSelected ? planTheme.color : undefined }}
                  >
                    <div className="flex items-center gap-4">
                      {isIncluded ? <Check size={16} /> : isSelected ? <Check size={16} /> : <Plus size={16} className="group-hover/btn:rotate-90 transition-transform" />}
                      <span>{addon.name}</span>
                    </div>
                    {!isIncluded && addon.price > 0 && <span className="opacity-60 text-[10px]">+${addon.price/1000}k</span>}
                    {!isIncluded && addon.price === 0 && isObtener && <span className="opacity-60 text-[10px]">OBTENER</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Barra de precio final - SE ELIMINÓ OVERFLOW-HIDDEN PARA EVITAR CORTES */}
        <div className="bg-slate-950 p-12 md:p-16 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 mt-20 border border-white/5 relative shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-12 w-full md:w-auto">
            <div className="text-center md:text-left relative z-10">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] mb-4">Inversión Final Estimada</div>
              <div className="text-6xl lg:text-8xl font-black tracking-tighter text-white flex items-baseline gap-4">
                {isACotizar ? "A Cotizar" : `$${totalPrice.toLocaleString('es-CO')}`}
                {!isACotizar && <span className="text-[12px] uppercase opacity-40 font-bold tracking-widest">COP</span>}
              </div>
            </div>
            
            <div className="hidden lg:block shrink-0 relative z-20">
               <TrustBadge size="sm" />
            </div>
          </div>
          
          <button 
            onClick={handleWhatsApp} 
            className="w-full md:w-auto px-16 py-8 rounded-3xl font-black text-[14px] uppercase tracking-[0.6em] text-white bg-[#FF7500] shadow-[0_20px_40px_rgba(255,117,0,0.3)] transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 relative z-10"
          >
            Agendar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
