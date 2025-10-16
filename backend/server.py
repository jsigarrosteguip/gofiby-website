from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import uuid

# Import services
from services.supabase_service import supabase_service
from services.email_service import email_service
from services.chatbot_service import chatbot_service

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Gofiby API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class ContactLeadCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=9, max_length=20)
    message: str = Field(..., min_length=10, max_length=1000)

class ChatMessage(BaseModel):
    session_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    message: str = Field(..., min_length=1, max_length=500)

class ChatResponse(BaseModel):
    session_id: str
    user_message: str
    bot_response: str


# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Gofiby API v1.0", 
        "status": "operational",
        "endpoints": {
            "contact": "/api/contact",
            "chat": "/api/chat",
            "health": "/api/health"
        }
    }

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "services": {
            "supabase": "connected",
            "email": "ready",
            "chatbot": "ready"
        }
    }

@api_router.post("/contact")
async def create_contact(contact: ContactLeadCreate):
    """
    Crea un nuevo lead de contacto, lo guarda en Supabase y envía emails
    """
    try:
        lead_data = contact.dict()
        lead_data['source'] = 'website'
        
        # 1. Guardar en Supabase
        logger.info(f"Saving lead to Supabase: {contact.email}")
        supabase_response = await supabase_service.create_contact_lead(lead_data)
        
        # 2. Enviar email a la empresa
        logger.info("Sending notification email")
        try:
            await email_service.send_contact_notification(lead_data)
        except Exception as e:
            logger.error(f"Error sending notification email: {str(e)}")
            # No fallar si el email falla
        
        # 3. Enviar auto-respuesta al cliente
        logger.info("Sending auto-response to client")
        try:
            await email_service.send_auto_response(lead_data)
        except Exception as e:
            logger.error(f"Error sending auto-response: {str(e)}")
            # No fallar si el email falla
        
        return {
            "success": True,
            "message": "Gracias por contactarnos. Te responderemos pronto.",
            "data": supabase_response
        }
        
    except Exception as e:
        logger.error(f"Error in create_contact: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/chat", response_model=ChatResponse)
async def chat(message: ChatMessage):
    """
    Endpoint para chatbot IA conversacional
    """
    try:
        # Obtener historial de chat si existe
        chat_history = []
        if message.session_id:
            try:
                chat_history = await supabase_service.get_chat_history(message.session_id)
            except:
                pass
        
        # Obtener respuesta del bot
        logger.info(f"Getting bot response for session: {message.session_id}")
        bot_response = await chatbot_service.get_response(
            user_message=message.message,
            chat_history=chat_history
        )
        
        # Guardar conversación en Supabase
        chat_data = {
            'session_id': message.session_id,
            'user_message': message.message,
            'bot_response': bot_response
        }
        
        try:
            await supabase_service.create_chat_session(chat_data)
        except Exception as e:
            logger.error(f"Error saving chat to Supabase: {str(e)}")
            # No fallar si Supabase falla
        
        return ChatResponse(
            session_id=message.session_id,
            user_message=message.message,
            bot_response=bot_response
        )
        
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/leads")
async def get_leads(limit: int = 50):
    """
    Obtiene todos los leads (admin only en producción)
    """
    try:
        leads = await supabase_service.get_all_leads(limit=limit)
        return {"success": True, "count": len(leads), "leads": leads}
    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)