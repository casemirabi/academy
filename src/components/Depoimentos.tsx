import React from 'react';
import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Maria Silva',
    profissao: 'Empresária',
    foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    texto: 'A Academia DespertaFit mudou minha vida! Perdi 15kg em 6 meses e me sinto muito mais disposta. Os professores são excelentes e sempre motivam a gente.',
    avaliacao: 5
  },
  {
    nome: 'João Santos',
    profissao: 'Engenheiro',
    foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    texto: 'Ambiente top, equipamentos modernos e horários flexíveis. Consegui ganhar massa muscular e melhorar muito meu condicionamento. Recomendo!',
    avaliacao: 5
  },
  {
    nome: 'Ana Costa',
    profissao: 'Professora',
    foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    texto: 'As aulas de pilates são fantásticas! Melhorei muito minha postura e as dores nas costas sumiram. O atendimento é personalizado e carinhoso.',
    avaliacao: 5
  }
];

const Depoimentos = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de pessoas reais. Veja como a Academia DespertaFit tem transformado vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-6 text-orange-200" size={32} />
              
              <div className="flex items-center mb-6">
                <img 
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{depoimento.nome}</h4>
                  <p className="text-gray-600 text-sm">{depoimento.profissao}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{depoimento.texto}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-white font-medium">4.9/5 baseado em 200+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;