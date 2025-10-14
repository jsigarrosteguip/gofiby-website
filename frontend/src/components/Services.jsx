import React from 'react';
import { Users, Gamepad2, Video, BookOpen } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Users: Users,
  Gamepad2: Gamepad2,
  Video: Video,
  BookOpen: BookOpen
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <span className="text-[#fd2d4f] text-sm font-semibold">NUESTROS SERVICIOS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Internet Para Cada
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent"> Necesidad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectividad diseñada para tu estilo de vida, desde familias hasta profesionales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-3 rounded-lg">
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#fd2d4f] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿No estás seguro qué plan es mejor para ti?
          </p>
          <a
            href="https://wa.me/51942117296?text=Hola,%20necesito%20ayuda%20para%20elegir%20mi%20plan%20de%20internet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Chatea con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;