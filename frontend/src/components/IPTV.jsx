import React from 'react';
import { Tv, Check, Play } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const IPTV = () => {
  const handleContactIPTV = () => {
    const message = 'Hola, estoy interesado en el servicio de IPTV / Cable Go TV. ¿Pueden darme más información?';
    window.open(
      `https://wa.me/51942117296?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="iptv" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#fdab2b] to-[#f80d76] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#fd2d4f] to-[#f80d76] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <span className="text-[#fd2d4f] text-sm font-semibold">TELEVISIÓN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cable Go TV
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent"> IPTV</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Televisión sobre internet con contenido HD en todos tus dispositivos
          </p>
        </div>

        {/* IPTV Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://customer-assets.emergentagent.com/job_smart-fiber-peru/artifacts/2lmlorto_Gemini_Generated_Image_8ehray8ehray8ehr.png"
                  alt="IPTV Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-3 rounded-lg mr-4">
                      <Tv className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Cable Go TV</h3>
                      <p className="text-gray-600">Servicio IPTV Premium</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-gray-600 text-xl">S/</span>
                      <span className="text-5xl font-bold text-gray-900">{mockData.iptvPlan.price}</span>
                      <span className="text-gray-600 text-xl">/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {mockData.iptvPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="bg-gradient-to-r from-[#fdab2b] to-[#f80d76] p-1 rounded-full mr-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleContactIPTV}
                    className="w-full bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity text-lg py-6"
                  >
                    Contratar Cable Go TV
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    También incluido GRATIS en planes de internet
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Disfruta de tus programas favoritos en TV, tablet, smartphone y computadora
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPTV;