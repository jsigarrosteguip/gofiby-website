import os
from emergentintegrations import LLM
from typing import Dict, List
import logging
import json

logger = logging.getLogger(__name__)

class ChatbotService:
    def __init__(self):
        self.llm_key = os.environ.get('EMERGENT_LLM_KEY')
        if not self.llm_key:
            raise ValueError("Emergent LLM Key not found")
        
        self.llm = LLM(api_key=self.llm_key)
        
        # Contexto del chatbot sobre Gofiby
        self.system_context = """
Eres un asistente virtual amigable de Gofiby, una empresa de internet por fibra óptica en Lima, Perú.

INFORMACIÓN DE GOFIBY:
- Nombre: Gofiby
- Slogan: "Haciendo Familias Felices"
- Ubicación: Jr. Monte Cedro #521, Santiago de Surco, Lima 15039
- Teléfono/WhatsApp: +51 942 117 296
- Email: gofibyinternet@gmail.com
- Cobertura: Santiago de Surco y expandiéndose a más zonas de Lima

PLANES PROMOCIONALES (3 meses):
- 400 Mbps: S/79/mes + TV gratis Cable Go + Instalación gratis
- 600 Mbps: S/89/mes + TV gratis Cable Go + Instalación gratis (MÁS POPULAR)
- 1000 Mbps: S/130/mes + TV gratis Cable Go + Instalación gratis

PLANES REGULARES:
- 400 Mbps: S/119/mes
- 600 Mbps: S/129/mes
- 1000 Mbps: S/159/mes

PLANES SOLO INTERNET:
- 400 Mbps: S/79/mes
- 600 Mbps: S/89/mes
- 1000 Mbps: S/130/mes

IPTV - CABLE GO TV:
- Precio: S/40/mes
- Hasta 4 dispositivos
- Canales HD
- Contenido on-demand
- Incluido GRATIS en planes con TV

SERVICIOS:
1. Internet para toda la familia - Streaming, videollamadas, navegación
2. Internet para Gamers - Baja latencia, sin lag
3. Internet para Streamers - Alta velocidad de subida
4. Internet para Homework - Estable para clases online

CARACTERÍSTICAS:
- Fibra óptica 100%
- Instalación gratuita (en planes con TV)
- Atención 24/7
- TV Cable Go incluida

TU ROL:
- Responde en español de forma amigable y profesional
- Ayuda a los clientes a elegir el plan adecuado
- Si necesitan más info específica, recomienda contactar por WhatsApp: https://wa.me/51942117296
- Enfatiza la calidad del servicio y el compromiso con las familias
- Sé breve pero informativo (máximo 3-4 párrafos)
"""
        
        logger.info("Chatbot service initialized with Emergent LLM")
    
    async def get_response(self, user_message: str, chat_history: List[Dict] = None) -> str:
        """Obtiene respuesta del chatbot"""
        try:
            # Preparar mensajes para el LLM
            messages = [
                {"role": "system", "content": self.system_context}
            ]
            
            # Agregar historial si existe
            if chat_history:
                for msg in chat_history[-5:]:  # Solo últimos 5 mensajes para contexto
                    messages.append({"role": "user", "content": msg.get('user_message', '')})
                    messages.append({"role": "assistant", "content": msg.get('bot_response', '')})
            
            # Agregar mensaje actual
            messages.append({"role": "user", "content": user_message})
            
            # Obtener respuesta
            response = self.llm.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                temperature=0.7,
                max_tokens=500
            )
            
            bot_response = response.choices[0].message.content
            logger.info(f"Bot response generated for message: {user_message[:50]}...")
            
            return bot_response
            
        except Exception as e:
            logger.error(f"Error generating bot response: {str(e)}")
            return "Disculpa, estoy teniendo problemas técnicos. Por favor, contáctanos directamente por WhatsApp al +51 942 117 296 o email a gofibyinternet@gmail.com"

chatbot_service = ChatbotService()