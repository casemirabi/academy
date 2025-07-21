import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Performance</h1>
              <p className="text-xs text-gray-600">Mogi das Cruzes</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('modalidades')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Modalidades
            </button>
            <button onClick={() => scrollToSection('quem-somos')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Planos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contato
            </button>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('modalidades')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left">
                Modalidades
              </button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left">
                Planos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left">
                Contato
              </button>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors text-center"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;