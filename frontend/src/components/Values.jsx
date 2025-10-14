import React from 'react';
import { Heart, Target, Award, Users, Sparkles, Shield, Handshake, SmilePlus } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';

const iconMap = {
  'Compromiso social': Heart,
  'Cercanía con la comunidad': Users,
  'Inclusión digital': Sparkles,
  'Confiabilidad': Shield,
  'Innovación': Award,
  'Solidaridad': Handshake,
  'Transparencia': Target,
  'Empatía': SmilePlus
};

const Values = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <span className="text-[#fd2d4f] text-sm font-semibold">QUIENES SOMOS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Conectando
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent"> con Propósito</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#fdab2b] to-[#fd2d4f] p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {mockData.mission[0]}
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#fd2d4f] to-[#f80d76] p-3 rounded-lg mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {mockData.vision[0]}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros <span className="text-[#fd2d4f]">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.values.map((value, index) => {
              const Icon = iconMap[value.title] || Heart;
              return (
                <Card
                  key={index}
                  className="group border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-semibold text-gray-800 italic">
              "{mockData.slogans[0]}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;