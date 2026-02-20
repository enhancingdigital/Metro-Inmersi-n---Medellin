
import React from 'react';
import { PLATFORM_FEATURES } from '../constants';
import { ShieldCheck, Heart, Zap, MapPin } from 'lucide-react';

const icons = [ShieldCheck, Heart, Zap, MapPin];

const Features: React.FC = () => {
  return (
    <section id="eficiencia" className="py-24 px-6 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
          {PLATFORM_FEATURES.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="cyber-card p-10 group h-full">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#FF7500]/20 transition-all duration-500 rounded-2xl border border-white/10">
                  <Icon size={24} className="text-[#4FB0B3] group-hover:text-[#FF7500]" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed font-bold italic">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
               alt="Interactive Lobby Tour" 
               className="w-full h-auto opacity-80" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
             
             {/* Tag Overlay Simulation */}
             <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-[#FF7500] shadow-[0_0_15px_#FF7500] animate-pulse"></div>
             <div className="absolute top-1/2 left-2/3 w-4 h-4 rounded-full bg-[#4FB0B3] shadow-[0_0_15px_#4FB0B3] animate-pulse delay-700"></div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4FB0B3]/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
