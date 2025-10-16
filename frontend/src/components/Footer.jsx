import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.svg" alt="Gofiby" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-400 mb-4">{mockData.company.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {mockData.slogans[1]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#fd2d4f] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('plans')}
                  className="text-gray-400 hover:text-[#fd2d4f] transition-colors"
                >
                  Paquetes de Internet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('iptv')}
                  className="text-gray-400 hover:text-[#fd2d4f] transition-colors"
                >
                  IPTV
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#fd2d4f] transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#fd2d4f] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#fd2d4f] mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">{mockData.company.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#fd2d4f] mr-2" />
                <a href="tel:942117296" className="text-gray-400 hover:text-white transition-colors">
                  +51 {mockData.company.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#fd2d4f] mr-2" />
                <a href={`mailto:${mockData.company.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {mockData.company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="/privacidad" className="text-gray-400 hover:text-[#fd2d4f] transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="/libro-reclamaciones" className="text-gray-400 hover:text-[#fd2d4f] transition-colors">
                  Libro de Reclamaciones
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#fdab2b] hover:to-[#f80d76] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#fdab2b] hover:to-[#f80d76] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Cobertura</h4>
              <p className="text-gray-400 text-sm">
                {mockData.coverage.main}
                <br />
                {mockData.coverage.city}, {mockData.coverage.country}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Gofiby. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Página desarrollada por <span className="text-[#fd2d4f] font-semibold">Jean Carlo Sigarrostegui</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;