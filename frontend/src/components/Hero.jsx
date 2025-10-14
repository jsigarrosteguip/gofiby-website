import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wifi, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video_lima.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-[#fdab2b] mr-2" />
            <span className="text-white text-sm font-medium">Fibra Óptica 100% en Lima</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Internet Ultra Rápido
            <br />
            <span className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] bg-clip-text text-transparent">
              Para Toda Tu Familia
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Conectamos personas, hogares y comunidades. Tu mundo más cerca, más rápido, más humano.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
              <Wifi className="w-5 h-5 text-[#fdab2b] mr-2" />
              <span className="text-white font-medium">Hasta 1000 Mbps</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
              <Shield className="w-5 h-5 text-[#fd2d4f] mr-2" />
              <span className="text-white font-medium">Instalación Gratis</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
              <Zap className="w-5 h-5 text-[#f80d76] mr-2" />
              <span className="text-white font-medium">TV Cable Incluida</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('plans')}
              className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity text-lg px-8 py-6 group"
            >
              Ver Planes y Precios
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              Consulta tu Cobertura
            </Button>
          </div>

          {/* Promotion Banner */}
          <div className="mt-12 inline-block bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] p-1 rounded-full">
            <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full">
              <p className="text-white font-semibold">
                🎉 Promoción por 3 meses desde <span className="text-[#fdab2b]">S/79</span> + TV Gratis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;