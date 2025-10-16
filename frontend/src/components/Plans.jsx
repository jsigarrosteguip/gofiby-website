import React, { useState } from 'react';
import { Check, Zap, Star } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Plans = () => {
  const [selectedTab, setSelectedTab] = useState('promotional');

  const handleContactPlan = (speed, planType) => {
    const message = `Hola, estoy interesado en el plan de ${speed} Mbps (${planType}). ¿Pueden darme más información?`;
    window.open(
      `https://wa.me/51942117296?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const renderPlanCard = (plan, isPromotional = false) => (
    <Card
      key={plan.id}
      className={`relative overflow-hidden transition-all duration-300 ${
        plan.popular
          ? 'border-2 border-[#fd2d4f] shadow-2xl scale-105'
          : 'border hover:shadow-xl hover:scale-105'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] text-white px-4 py-1 text-sm font-bold">
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current" />
            MÁS POPULAR
          </div>
        </div>
      )}
      <CardHeader className="text-center pb-4 pt-8">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-4 rounded-full">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-5xl font-bold text-gray-900 mb-2">
          {plan.speed}
          <span className="text-2xl text-gray-600"> Mbps</span>
        </h3>
        {isPromotional && plan.duration && (
          <div className="inline-block bg-gradient-to-r from-[#fdab2b]/10 to-[#f80d76]/10 px-3 py-1 rounded-full border border-[#fd2d4f]/20">
            <span className="text-sm text-[#fd2d4f] font-semibold">Promoción {plan.duration}</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-gray-600 text-xl">S/</span>
            <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-600 text-xl">/mes</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <div className="bg-gradient-to-r from-[#fdab2b] to-[#f80d76] p-1 rounded-full mr-3">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => handleContactPlan(plan.speed, isPromotional ? 'Promocional' : 'Regular')}
          className={`w-full py-6 text-lg font-semibold ${
            plan.popular
              ? 'bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90'
              : 'bg-gray-900 hover:bg-gray-800'
          } transition-all`}
        >
          Contratar Ahora
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <span className="text-[#fd2d4f] text-sm font-semibold">PLANES Y PRECIOS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Elige el Paquete
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent"> Perfecto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fibra óptica 100% con instalación gratuita y TV incluida
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="promotional"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#fdab2b] data-[state=active]:via-[#fd2d4f] data-[state=active]:to-[#f80d76] data-[state=active]:text-white"
            >
              Promocionales
            </TabsTrigger>
            <TabsTrigger
              value="regular"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#fdab2b] data-[state=active]:via-[#fd2d4f] data-[state=active]:to-[#f80d76] data-[state=active]:text-white"
            >
              Regulares
            </TabsTrigger>
            <TabsTrigger
              value="internet-only"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#fdab2b] data-[state=active]:via-[#fd2d4f] data-[state=active]:to-[#f80d76] data-[state=active]:text-white"
            >
              Solo Internet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="promotional" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.promotionalPlans.map((plan) => renderPlanCard(plan, true))}
            </div>
          </TabsContent>

          <TabsContent value="regular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.regularPlans.map((plan) => renderPlanCard(plan, false))}
            </div>
          </TabsContent>

          <TabsContent value="internet-only" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.internetOnlyPlans.map((plan) => renderPlanCard(plan, false))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Promociones sujetas a disponibilidad de cobertura. Instalación gratuita aplica para planes con TV incluida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;