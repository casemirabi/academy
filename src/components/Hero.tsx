import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Academia moderna com equipamentos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/90 text-sm">Avaliação 5 estrelas dos nossos alunos</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu
            <span className="block text-orange-500">corpo e mente</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            A melhor academia de Mogi das Cruzes com equipamentos de última geração, 
            profissionais qualificados e ambiente motivador para você alcançar seus objetivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('planos')}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group"
            >
              Conheça nossos planos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('modalidades')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver modalidades
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-white/80">Alunos ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-white/80">Modalidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10</div>
              <div className="text-white/80">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;