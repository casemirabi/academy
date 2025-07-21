import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const mensagem = `Olá! Vim do site da Academia Performance.
    
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a começar sua jornada fitness. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Informações de contato
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Rua das Flores, 123 - Centro<br />
                    Mogi das Cruzes - SP, 08780-000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-300">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">contato@academiaperformance.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Horário de funcionamento</h4>
                  <div className="text-gray-300">
                    <p>Segunda a Sexta: 6h às 22h</p>
                    <p>Sábado: 8h às 18h</p>
                    <p>Domingo: 8h às 14h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-white font-semibold mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 p-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="text-white" size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-purple-500 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center group"
              >
                Enviar mensagem
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Nossa localização
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58512.89174022969!2d-46.21453582167969!3d-23.523085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63ddb8d1e93f%3A0x1b7c67b9cf1f0c3a!2sMogi%20das%20Cruzes%2C%20SP!5e0!3m2!1spt!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;