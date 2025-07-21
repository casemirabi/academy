import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Modalidades from './components/Modalidades';
import QuemSomos from './components/QuemSomos';
import Planos from './components/Planos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Depoimentos from './components/Depoimentos';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <QuemSomos />
        <Depoimentos />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;