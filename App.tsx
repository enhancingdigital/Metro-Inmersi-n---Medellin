
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-[#D9A036] selection:text-white overflow-x-hidden bg-[#F8F5F2]">
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Portfolio />
        <Features />
        <Services />
        <HowItWorks />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
