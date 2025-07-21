import React from 'react';
import { Dumbbell, Users, Heart, Clock, Target, Zap } from 'lucide-react';

const modalidades = [
  {
    icon: Dumbbell,
    title: 'Musculação',
    description: 'Equipamentos modernos e treinos personalizados para todos os níveis.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Segunda a Sexta: 6h às 22h | Sábado: 8h às 18h'
  },
  {
    icon: Users,
    title: 'Treino Funcional',
    description: 'Exercícios que melhoram a funcionalidade do corpo no dia a dia.',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Segunda, Quarta, Sexta: 7h, 17h, 19h'
  },
  {
    icon: Heart,
    title: 'Pilates',
    description: 'Fortalecimento do core e melhora da postura com exercícios controlados.',
    image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Terça e Quinta: 8h, 14h, 18h'
  },
  {
    icon: Zap,
    title: 'HIIT',
    description: 'Treino intervalado de alta intensidade para queima máxima de gordura.',
    image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Segunda, Quarta, Sexta: 6h30, 18h30'
  },
  {
    icon: Target,
    title: 'Crossfit',
    description: 'Condicionamento físico geral com movimentos funcionais variados.',
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Terça e Quinta: 7h, 17h30, 19h30'
  },
  {
    icon: Clock,
    title: 'Alongamento',
    description: 'Sessões de alongamento para relaxamento e flexibilidade.',
    image: 'https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    horarios: 'Diariamente: 12h, 20h'
  }
];

const Modalidades = () => {
  return (
    <section id="modalidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Modalidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de atividades para atender todos os objetivos e níveis de condicionamento físico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalidades.map((modalidade, index) => {
            const Icon = modalidade.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={modalidade.image}
                    alt={modalidade.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 p-3 rounded-full">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {modalidade.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {modalidade.description}
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 font-medium">
                      <Clock size={16} className="inline mr-2" />
                      {modalidade.horarios}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            Agende sua aula experimental
            <Target className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Modalidades;