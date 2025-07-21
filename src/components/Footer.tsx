import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-sm text-gray-400">Mogi das Cruzes</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 10 anos transformando vidas em Mogi das Cruzes. 
              Sua melhor versão começa aqui, com equipamentos modernos e profissionais qualificados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="#" 
                className="bg-purple-500 p-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('modalidades')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Modalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quem-somos')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1" size={16} />
                <p className="text-gray-300 text-sm">
                  Rua das Flores, 123<br />
                  Centro - Mogi das Cruzes/SP
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500" size={16} />
                <p className="text-gray-300 text-sm">(11) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={16} />
                <p className="text-gray-300 text-sm">contato@academiaperformance.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Academia Performance. Todos os direitos reservados. | 
            <span className="text-orange-500"> Desenvolvido com ❤️ para transformar vidas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;