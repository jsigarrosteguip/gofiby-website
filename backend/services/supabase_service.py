from supabase import create_client, Client
import os
from typing import Dict, List, Optional
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class SupabaseService:
    def __init__(self):
        supabase_url = os.environ.get('SUPABASE_URL')
        supabase_key = os.environ.get('SUPABASE_KEY')
        
        if not supabase_url or not supabase_key:
            raise ValueError("Supabase credentials not found in environment variables")
        
        self.client: Client = create_client(supabase_url, supabase_key)
        logger.info("Supabase client initialized successfully")
    
    async def create_contact_lead(self, data: Dict) -> Dict:
        """Crea un nuevo lead de contacto"""
        try:
            lead_data = {
                'name': data.get('name'),
                'email': data.get('email'),
                'phone': data.get('phone'),
                'message': data.get('message'),
                'source': data.get('source', 'website'),
                'created_at': datetime.utcnow().isoformat()
            }
            
            response = self.client.table('contact_leads').insert(lead_data).execute()
            logger.info(f"Lead created successfully: {data.get('email')}")
            return {'success': True, 'data': response.data}
        except Exception as e:
            logger.error(f"Error creating lead: {str(e)}")
            raise
    
    async def get_all_leads(self, limit: int = 100) -> List[Dict]:
        """Obtiene todos los leads"""
        try:
            response = self.client.table('contact_leads').select('*').order('created_at', desc=True).limit(limit).execute()
            return response.data
        except Exception as e:
            logger.error(f"Error fetching leads: {str(e)}")
            raise
    
    async def create_chat_session(self, data: Dict) -> Dict:
        """Crea una nueva sesión de chat"""
        try:
            session_data = {
                'session_id': data.get('session_id'),
                'user_message': data.get('user_message'),
                'bot_response': data.get('bot_response'),
                'created_at': datetime.utcnow().isoformat()
            }
            
            response = self.client.table('chat_sessions').insert(session_data).execute()
            logger.info(f"Chat session created: {data.get('session_id')}")
            return {'success': True, 'data': response.data}
        except Exception as e:
            logger.error(f"Error creating chat session: {str(e)}")
            raise
    
    async def get_chat_history(self, session_id: str) -> List[Dict]:
        """Obtiene historial de chat por sesión"""
        try:
            response = self.client.table('chat_sessions').select('*').eq('session_id', session_id).order('created_at', desc=False).execute()
            return response.data
        except Exception as e:
            logger.error(f"Error fetching chat history: {str(e)}")
            raise

supabase_service = SupabaseService()