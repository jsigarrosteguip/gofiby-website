import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <Shield className="w-5 h-5 text-[#fd2d4f] mr-2" />
            <span className="text-[#fd2d4f] text-sm font-semibold">POLÍTICAS DE PRIVACIDAD</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad y Protección de Datos Personales</h1>
          <p className="text-gray-600">Última actualización: Enero 2025</p>
        </div>

        {/* Content */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gofiby, con RUC [NÚMERO DE RUC], ubicada en Jr. Monte Cedro #521, Santiago de Surco, Lima 15039, Perú, es responsable del tratamiento de los datos personales que nos proporciones a través de nuestro sitio web www.gofiby.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidad cumple con la Ley N° 29733, Ley de Protección de Datos Personales, y su Reglamento aprobado por Decreto Supremo N° 016-2024-JUS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Recopilamos los siguientes datos personales:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección (cuando solicitas el servicio)</li>
                <li>Datos de navegación (cookies, dirección IP)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad del Tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Utilizamos tus datos personales para:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Procesar y responder a tus consultas y solicitudes de servicios</li>
                <li>Brindarte atención al cliente</li>
                <li>Enviarte información sobre nuestros productos y servicios</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consentimiento</h2>
              <p className="text-gray-700 leading-relaxed">
                Al proporcionar tus datos personales a través de nuestro sitio web, otorgas tu consentimiento libre, previo, expreso e informado para el tratamiento de los mismos conforme a esta Política de Privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Tienes derecho a:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Actualizar o corregir tus datos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Portabilidad:</strong> Solicitar tus datos en formato estructurado</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer tus derechos, contacta con nosotros en: gofibyinternet@gmail.com o al teléfono +51 942 117 296.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas, organizativas y legales para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación, conforme a los estándares de seguridad requeridos por la legislación peruana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Conservación de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades establecidas y mientras existan obligaciones legales que lo requieran.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferencia Internacional</h2>
              <p className="text-gray-700 leading-relaxed">
                Tus datos pueden ser almacenados en servidores ubicados fuera del Perú (Supabase - Estados Unidos). Garantizamos que dichos proveedores cumplen con estándares adecuados de protección de datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
              <div className="bg-gradient-to-r from-[#fdab2b]/10 to-[#f80d76]/10 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Gofiby</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Jr. Monte Cedro #521, Santiago de Surco, Lima 15039
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Email: gofibyinternet@gmail.com
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Teléfono: +51 942 117 296
                </p>
              </div>
            </section>

            <section>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Autoridad de Protección de Datos</h3>
                    <p className="text-blue-800 text-sm">
                      Si consideras que tus derechos han sido vulnerados, puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales (ANPD) del Ministerio de Justicia.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;