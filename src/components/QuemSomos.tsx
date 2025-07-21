import React from 'react';
import { Users, Award, Heart, Target, CheckCircle } from 'lucide-react';

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Conheça a Academia Performance
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Há mais de 10 anos transformando vidas em Mogi das Cruzes, a Academia Performance 
              é referência em qualidade, inovação e resultados. Nossa missão é proporcionar 
              um ambiente completo para você alcançar seus objetivos de forma saudável e sustentável.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                  <Target className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Missão</h3>
                  <p className="text-gray-600 text-sm">Transformar vidas através do exercício físico e bem-estar.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visão</h3>
                  <p className="text-gray-600 text-sm">Ser a academia líder em qualidade e inovação na região.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Heart className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Valores</h3>
                  <p className="text-gray-600 text-sm">Respeito, dedicação, excelência e comprometimento.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="text-purple-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Comunidade</h3>
                  <p className="text-gray-600 text-sm">Mais de 500 alunos ativos em nossa família fitness.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Profissionais certificados e experientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Equipamentos de última geração</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Ambiente climatizado e higienizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Acompanhamento nutricional disponível</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1552188/pexels-photo-1552188.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Interior da Academia Performance"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Anos de</div>
                <div className="text-gray-600 text-sm">Experiência</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Alunos</div>
                <div className="text-gray-600 text-sm">Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;