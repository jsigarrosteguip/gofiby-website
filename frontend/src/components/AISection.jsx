import React from 'react';
import { Sparkles, Brain, MessageSquare, Zap } from 'lucide-react';
import { Button } from './ui/button';

const AISection = () => {
  return (
    <section id="ai-services" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#fdab2b] to-[#f80d76] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#fd2d4f] to-[#f80d76] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-6 rounded-full">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#fdab2b] mr-2" />
            <span className="text-sm font-semibold">PRÓXIMAMENTE</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Servicios de
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent"> Inteligencia Artificial</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Estamos trabajando con inteligencia artificial de última generación para mejorar tu servicio y atención al cliente, porque tú te lo mereces.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
              <MessageSquare className="w-10 h-10 text-[#fdab2b] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Chatbot Inteligente</h3>
              <p className="text-gray-400 text-sm">Atención 24/7 con IA conversacional</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
              <Zap className="w-10 h-10 text-[#fd2d4f] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Optimización de Red</h3>
              <p className="text-gray-400 text-sm">IA para mejorar tu conexión</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
              <Brain className="w-10 h-10 text-[#f80d76] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Soporte Predictivo</h3>
              <p className="text-gray-400 text-sm">Resolvemos problemas antes de que ocurran</p>
            </div>
          </div>

          {/* CTA */}
          <div className="inline-block">
            <Button
              onClick={() => {
                const message = 'Hola, me interesa conocer más sobre los servicios de IA que estarán disponibles.';
                window.open(
                  `https://wa.me/51942117296?text=${encodeURIComponent(message)}`,
                  '_blank'
                );
              }}
              size="lg"
              className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Quiero Saber Más
            </Button>
          </div>

          {/* Bottom text */}
          <p className="mt-8 text-gray-400 text-sm">
            Pronto nuevas novedades en tecnología e innovación
          </p>
        </div>
      </div>
    </section>
  );
};

export default AISection;