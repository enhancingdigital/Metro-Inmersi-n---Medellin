
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import ValueShowcase from './components/ValueShowcase';
import ImmersiveDivider from './components/ImmersiveDivider';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export interface PlanSelection {
  area: number;
  trigger: number;
}

function App() {
  const [planSelection, setPlanSelection] = useState<PlanSelection | null>(null);

  const handlePlanSelect = (area: number) => {
    setPlanSelection({ area, trigger: Date.now() });
  };

  return (
    <div className="min-h-screen selection:bg-[#4FB0B3] selection:text-white overflow-x-hidden bg-[#020617] text-white">
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Portfolio />
        
        {/* Sección Nosotros: Filosofía y Compromiso Medellín */}
        <AboutUs />

        <ValueShowcase />
        <Features />
        <ImmersiveDivider />
        <Services onPlanSelect={handlePlanSelect} />
        <HowItWorks />
        <Calculator externalSelection={planSelection} />
      </main>
      
      <Footer />
      
      <WhatsAppFAB />
    </div>
  );
}

export default App;
