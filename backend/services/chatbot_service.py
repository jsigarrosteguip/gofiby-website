import os
from emergentintegrations.llm.chat import LlmChat, UserMessage
from typing import Dict, List
import logging

logger = logging.getLogger(__name__)

class ChatbotService:
    def __init__(self):
        self.llm_key = os.environ.get('EMERGENT_LLM_KEY')
        if not self.llm_key:
            logger.warning("Emergent LLM Key not found")
            self.llm = None
            return
        
        # Contexto del chatbot sobre Gofiby
        self.system_message = """
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
    
    async def get_response(self, user_message: str, session_id: str = "default", chat_history: List[Dict] = None) -> str:
        """Obtiene respuesta del chatbot"""
        if not self.llm_key:
            return "Lo siento, el servicio de chatbot no está disponible en este momento. Por favor, contáctanos por WhatsApp al +51 942 117 296"
            
        try:
            # Crear instancia de chat
            chat = LlmChat(
                api_key=self.llm_key,
                session_id=session_id,
                system_message=self.system_message
            ).with_model("openai", "gpt-4o-mini")
            
            # Crear mensaje de usuario
            message = UserMessage(text=user_message)
            
            # Obtener respuesta
            response = await chat.send_message(message)
            
            logger.info(f"Bot response generated for session: {session_id}")
            return response
            
        except Exception as e:
            logger.error(f"Error generating bot response: {str(e)}")
            return "Disculpa, estoy teniendo problemas técnicos. Por favor, contáctanos directamente por WhatsApp al +51 942 117 296 o email a gofibyinternet@gmail.com"

chatbot_service = ChatbotService()