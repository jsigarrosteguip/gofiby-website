import React, { useState } from 'react';
import { FileText, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const ClaimsBook = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Datos del consumidor
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    dni: '',
    // Datos del bien/servicio
    tipoProducto: 'servicio',
    descripcionProducto: '',
    montoReclamado: '',
    // Detalle del reclamo
    tipoReclamacion: 'reclamo',
    detalle: '',
    pedido: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aquí se enviaría al backend
    toast({
      title: "Reclamo registrado",
      description: "Tu reclamo ha sido registrado correctamente. Te contactaremos en 15 días hábiles.",
    });

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      dni: '',
      tipoProducto: 'servicio',
      descripcionProducto: '',
      montoReclamado: '',
      tipoReclamacion: 'reclamo',
      detalle: '',
      pedido: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fdab2b]/10 via-[#fd2d4f]/10 to-[#f80d76]/10 rounded-full border border-[#fd2d4f]/20 mb-6">
            <FileText className="w-5 h-5 text-[#fd2d4f] mr-2" />
            <span className="text-[#fd2d4f] text-sm font-semibold">LIBRO DE RECLAMACIONES</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Libro de Reclamaciones Virtual</h1>
          <p className="text-gray-600">Conforme a la Ley N° 29571 - Código de Protección y Defensa del Consumidor</p>
        </div>

        {/* Info Card */}
        <Card className="border-0 shadow-lg mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Información Importante</h3>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Este libro está a disposición de todos nuestros clientes</li>
                  <li>La empresa responderá en un plazo máximo de 15 días hábiles</li>
                  <li><strong>Reclamo:</strong> Disconformidad con un producto o servicio</li>
                  <li><strong>Queja:</strong> Malestar por la atención al cliente</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Datos del Consumidor */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fd2d4f]">1. Datos del Consumidor</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                    <Input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">DNI *</label>
                    <Input
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      required
                      placeholder="12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                    <Input
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dirección *</label>
                    <Input
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                      placeholder="Tu dirección completa"
                    />
                  </div>
                </div>
              </div>

              {/* Datos del Bien/Servicio */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fd2d4f]">2. Identificación del Bien o Servicio</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo *</label>
                    <select
                      name="tipoProducto"
                      value={formData.tipoProducto}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd2d4f]"
                      required
                    >
                      <option value="servicio">Servicio</option>
                      <option value="producto">Producto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Monto Reclamado (S/)</label>
                    <Input
                      type="number"
                      name="montoReclamado"
                      value={formData.montoReclamado}
                      onChange={handleChange}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Servicio *</label>
                    <Textarea
                      name="descripcionProducto"
                      value={formData.descripcionProducto}
                      onChange={handleChange}
                      required
                      placeholder="Describe el servicio contratado"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Detalle del Reclamo */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#fd2d4f]">3. Detalle de la Reclamación</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Solicitud *</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="tipoReclamacion"
                          value="reclamo"
                          checked={formData.tipoReclamacion === 'reclamo'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Reclamo
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="tipoReclamacion"
                          value="queja"
                          checked={formData.tipoReclamacion === 'queja'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Queja
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detalle *</label>
                    <Textarea
                      name="detalle"
                      value={formData.detalle}
                      onChange={handleChange}
                      required
                      placeholder="Describe tu reclamo o queja de forma detallada"
                      rows={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pedido del Consumidor *</label>
                    <Textarea
                      name="pedido"
                      value={formData.pedido}
                      onChange={handleChange}
                      required
                      placeholder="¿Qué solicitas que se haga al respecto?"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Datos de la Empresa</h3>
                <p className="text-sm text-gray-700"><strong>Razón Social:</strong> Gofiby</p>
                <p className="text-sm text-gray-700"><strong>RUC:</strong> [NÚMERO DE RUC]</p>
                <p className="text-sm text-gray-700"><strong>Dirección:</strong> Jr. Monte Cedro #521, Santiago de Surco, Lima 15039</p>
                <p className="text-sm text-gray-700"><strong>Teléfono:</strong> +51 942 117 296</p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#fdab2b] via-[#fd2d4f] to-[#f80d76] hover:opacity-90 transition-opacity text-lg py-6"
              >
                Enviar Reclamo
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Success Info */}
        <Card className="border-0 shadow-lg mt-8 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Después de Enviar tu Reclamo</h3>
                <p className="text-green-800 text-sm">
                  Recibirás una copia de tu reclamo por email. Gofiby responderá en un plazo máximo de 15 días hábiles. Si no estás satisfecho con la respuesta, puedes acudir a Indecopi para resolver tu caso.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClaimsBook;