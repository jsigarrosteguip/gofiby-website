import os
import resend
from typing import Dict
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.api_key = os.environ.get('RESEND_API_KEY')
        if not self.api_key:
            raise ValueError("Resend API key not found")
        
        resend.api_key = self.api_key
        logger.info("Email service initialized with Resend")
    
    async def send_contact_notification(self, lead_data: Dict) -> Dict:
        """Envía notificación de nuevo contacto a la empresa"""
        try:
            email_to = os.environ.get('EMAIL_TO', 'gofibyinternet@gmail.com')
            
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                    .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: linear-gradient(135deg, #fdab2b 0%, #fd2d4f 50%, #f80d76 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                    .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                    .field {{ margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }}
                    .label {{ font-weight: bold; color: #fd2d4f; }}
                    .footer {{ text-align: center; margin-top: 20px; color: #666; font-size: 12px; }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🎉 Nuevo Lead de Gofiby.com</h1>
                    </div>
                    <div class="content">
                        <p>Has recibido un nuevo contacto desde la página web:</p>
                        
                        <div class="field">
                            <span class="label">Nombre:</span><br>
                            {lead_data.get('name')}
                        </div>
                        
                        <div class="field">
                            <span class="label">Email:</span><br>
                            <a href="mailto:{lead_data.get('email')}">{lead_data.get('email')}</a>
                        </div>
                        
                        <div class="field">
                            <span class="label">Teléfono:</span><br>
                            <a href="tel:{lead_data.get('phone')}">{lead_data.get('phone')}</a>
                        </div>
                        
                        <div class="field">
                            <span class="label">Mensaje:</span><br>
                            {lead_data.get('message')}
                        </div>
                        
                        <div style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 5px;">
                            <strong>💡 Acción recomendada:</strong><br>
                            Contactar al cliente en las próximas 24 horas para máxima conversión.
                        </div>
                    </div>
                    <div class="footer">
                        <p>Este email fue generado automáticamente desde gofiby.com</p>
                        <p>Gofiby - Haciendo Familias Felices</p>
                    </div>
                </div>
            </body>
            </html>
            """
            
            params = {
                "from": "Gofiby Website <onboarding@resend.dev>",
                "to": [email_to],
                "subject": f"🎉 Nuevo Lead: {lead_data.get('name')} - Gofiby",
                "html": html_content
            }
            
            response = resend.Emails.send(params)
            logger.info(f"Email sent successfully to {email_to}")
            return {'success': True, 'email_id': response.get('id')}
            
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            raise
    
    async def send_auto_response(self, lead_data: Dict) -> Dict:
        """Envía respuesta automática al cliente"""
        try:
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                    .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: linear-gradient(135deg, #fdab2b 0%, #fd2d4f 50%, #f80d76 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                    .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                    .cta {{ background: linear-gradient(135deg, #fdab2b 0%, #fd2d4f 50%, #f80d76 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>¡Gracias por contactarnos!</h1>
                    </div>
                    <div class="content">
                        <p>Hola {lead_data.get('name')},</p>
                        
                        <p>Recibimos tu mensaje y queremos agradecerte por tu interés en Gofiby.</p>
                        
                        <p>Nuestro equipo revisará tu consulta y te contactará en las próximas 24 horas para brindarte la mejor atención.</p>
                        
                        <p><strong>¿Necesitas atención inmediata?</strong></p>
                        <p>Puedes contactarnos directamente por:</p>
                        <ul>
                            <li>📱 WhatsApp: <a href="https://wa.me/51942117296">+51 942 117 296</a></li>
                            <li>📧 Email: gofibyinternet@gmail.com</li>
                        </ul>
                        
                        <div style="text-align: center;">
                            <a href="https://wa.me/51942117296?text=Hola,%20me%20gustaría%20más%20información" class="cta">Chatear por WhatsApp</a>
                        </div>
                        
                        <p style="margin-top: 30px; color: #666; font-size: 14px;">
                            <em>"No solo conectamos dispositivos, conectamos personas, sueños y futuro."</em>
                        </p>
                    </div>
                    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                        <p>Gofiby - Haciendo Familias Felices</p>
                        <p>Santiago de Surco, Lima - Perú</p>
                    </div>
                </div>
            </body>
            </html>
            """
            
            params = {
                "from": "Gofiby <onboarding@resend.dev>",
                "to": [lead_data.get('email')],
                "subject": "Gracias por contactar a Gofiby - Te responderemos pronto",
                "html": html_content
            }
            
            response = resend.Emails.send(params)
            logger.info(f"Auto-response sent to {lead_data.get('email')}")
            return {'success': True, 'email_id': response.get('id')}
            
        except Exception as e:
            logger.error(f"Error sending auto-response: {str(e)}")
            return {'success': False, 'error': str(e)}

email_service = EmailService()