import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/logo.svg" alt="Gofiby" className="h-10 sm:h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('plans')}
              className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium"
            >
              Planes
            </button>
            <button
              onClick={() => scrollToSection('iptv')}
              className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium"
            >
              IPTV
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:942117296" className="flex items-center text-gray-700 hover:text-[#fd2d4f] transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">942 117 296</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity"
            >
              Contratar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-lg shadow-lg p-4 mb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('plans')}
                className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium text-left"
              >
                Planes
              </button>
              <button
                onClick={() => scrollToSection('iptv')}
                className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium text-left"
              >
                IPTV
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#fd2d4f] transition-colors font-medium text-left"
              >
                Contacto
              </button>
              <a href="tel:942117296" className="flex items-center text-gray-700 hover:text-[#fd2d4f] transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">942 117 296</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity w-full"
              >
                Contratar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;