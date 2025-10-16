-- Script SQL para crear tablas en Supabase para Gofiby
-- Ejecutar en: Supabase Dashboard → SQL Editor → New Query → Pegar y Run

-- 1. Tabla para leads de contacto
CREATE TABLE IF NOT EXISTS contact_leads (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    source VARCHAR(50) DEFAULT 'website',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para mejorar performance
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON contact_leads(email);
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);

-- 2. Tabla para sesiones de chat
CREATE TABLE IF NOT EXISTS chat_sessions (
    id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(100) NOT NULL,
    user_message TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para chat
CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_created_at ON chat_sessions(created_at DESC);

-- Comentarios para documentación
COMMENT ON TABLE contact_leads IS 'Almacena todos los leads que llegan desde el formulario de contacto';
COMMENT ON TABLE chat_sessions IS 'Almacena el historial de conversaciones del chatbot IA';

-- Verificar que las tablas se crearon correctamente
SELECT 
    table_name,
    (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) as column_count
FROM information_schema.tables t
WHERE table_schema = 'public' 
AND table_name IN ('contact_leads', 'chat_sessions');
