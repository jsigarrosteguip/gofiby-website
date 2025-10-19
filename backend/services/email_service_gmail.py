import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.gmail_user = os.environ.get('GMAIL_USER')
        self.gmail_password = os.environ.get('GMAIL_APP_PASSWORD')
        
        if not self.gmail_user or not self.gmail_password:
            logger.warning("Gmail credentials not found")
            return
        
        logger.info(f"Email service initialized with Gmail: {self.gmail_user}")
    
    def _send_email(self, to_email: str, subject: str, html_content: str) -> Dict:
        """Envía un email usando Gmail SMTP"""
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = f"Gofiby <{self.gmail_user}>"
            msg['To'] = to_email
            msg['Subject'] = subject
            
            html_part = MIMEText(html_content, 'html')
            msg.attach(html_part)
            
            # Conectar a Gmail SMTP
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(self.gmail_user, self.gmail_password)
            server.send_message(msg)
            server.quit()
            
            logger.info(f"Email sent successfully to {to_email}")
            return {'success': True}
            
        except Exception as e:
            logger.error(f"Error sending email to {to_email}: {str(e)}")
            raise
    
    async def send_contact_notification(self, lead_data: Dict) -> Dict:
        """Envía notificación de nuevo contacto a la empresa"""
        try:
            email_to = os.environ.get('EMAIL_TO', self.gmail_user)
            
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
            
            return self._send_email(
                to_email=email_to,
                subject=f"🎉 Nuevo Lead: {lead_data.get('name')} - Gofiby",
                html_content=html_content
            )
            
        except Exception as e:
            logger.error(f"Error sending notification email: {str(e)}")
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
                            <li>📧 Email: contacto.gofiby@gmail.com</li>
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
            
            return self._send_email(
                to_email=lead_data.get('email'),
                subject="Gracias por contactar a Gofiby - Te responderemos pronto",
                html_content=html_content
            )
            
        except Exception as e:
            logger.error(f"Error sending auto-response: {str(e)}")
            return {'success': False, 'error': str(e)}

email_service = EmailService()
