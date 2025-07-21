import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const planos = [
  {
    nome: 'Básico',
    preco: 'R$ 89',
    periodo: '/mês',
    descricao: 'Ideal para quem está começando',
    beneficios: [
      'Acesso à musculação',
      'Avaliação física inicial',
      'Treino personalizado',
      'Horário comercial',
      'Acesso ao vestiário'
    ],
    popular: false,
    cor: 'blue'
  },
  {
    nome: 'Premium',
    preco: 'R$ 129',
    periodo: '/mês',
    descricao: 'O mais escolhido pelos nossos alunos',
    beneficios: [
      'Tudo do plano Básico',
      'Acesso a todas as modalidades',
      'Horário estendido (6h às 22h)',
      'Aulas em grupo ilimitadas',
      'Acompanhamento nutricional básico',
      'Desconto em suplementos'
    ],
    popular: true,
    cor: 'orange'
  },
  {
    nome: 'VIP',
    preco: 'R$ 199',
    periodo: '/mês',
    descricao: 'Experiência completa e exclusiva',
    beneficios: [
      'Tudo do plano Premium',
      'Personal trainer 2x por semana',
      'Acesso 24h (após liberação)',
      'Consulta nutricional completa',
      'Área VIP exclusiva',
      'Suplementação inclusa',
      'Toalhas e amenities'
    ],
    popular: false,
    cor: 'purple'
  }
];

const Planos = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos o plano ideal para seu objetivo e orçamento. Todos incluem acompanhamento profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planos.map((plano, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plano.popular ? 'ring-2 ring-orange-500 scale-105' : ''
              }`}
            >
              {plano.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 font-medium">
                  <Star className="inline mr-1" size={16} fill="currentColor" />
                  Mais Popular
                </div>
              )}

              <div className={`p-8 ${plano.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plano.nome}</h3>
                  <p className="text-gray-600 mb-4">{plano.descricao}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                    <span className="text-gray-600 ml-1">{plano.periodo}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check 
                        className={`text-green-500 mr-3 mt-0.5 flex-shrink-0`} 
                        size={20} 
                      />
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 group ${
                    plano.popular 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Começar agora
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Promoção especial para novos alunos
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              🎉 <strong>Primeira semana GRÁTIS</strong> para você experimentar nossa academia!
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-semibold">✓ Sem taxa de matrícula</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-600 font-semibold">✓ Avaliação gratuita</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-purple-600 font-semibold">✓ Treino incluso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;