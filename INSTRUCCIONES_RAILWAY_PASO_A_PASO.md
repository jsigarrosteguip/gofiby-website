# 🚀 GUÍA COMPLETA: Cómo Subir tu Backend de Gofiby a Railway
## (Instrucciones para alguien que nunca ha hecho deployment)

---

## 📌 ¿QUÉ ES RAILWAY Y POR QUÉ LO USAMOS?

Railway es como una "casa en internet" donde vivirá tu backend (la parte que hace funcionar el formulario de contacto, los emails y el chatbot de tu página web).

**Piénsalo así:**
- Tu frontend (página web bonita) ya está en Vercel = ✅ Funcionando
- Tu backend (el cerebro que procesa datos) está en tu computadora = ❌ Solo funciona aquí
- **Necesitamos:** Poner el backend en Railway para que funcione 24/7 desde cualquier lugar

---

## 🎯 PASO 1: CREAR CUENTA EN RAILWAY (5 minutos)

### 1.1 Abre tu navegador
Usa Chrome, Firefox o Edge (el que prefieras)

### 1.2 Ve a Railway
Escribe en la barra de direcciones: **https://railway.app**
Presiona Enter

### 1.3 Registrarte
**Verás un botón que dice "Start a New Project" o "Login"**

- Si dice "Login", haz clic ahí
- Te preguntará: **"Sign up with GitHub"** ← Haz clic aquí
- Te llevará a GitHub (donde está tu código)
- GitHub te preguntará: **"Authorize Railway?"** ← Presiona el botón verde "Authorize"

**¿No tienes cuenta de GitHub?** 
- Ve primero a https://github.com
- Haz clic en "Sign up"
- Crea tu cuenta (te pide email, contraseña, username)
- Luego vuelve a Railway y repite el paso 1.3

### 1.4 Confirma tu email
Railway te enviará un email. Abre tu correo y haz clic en el link de confirmación.

---

## 🎯 PASO 2: PREPARAR TU BACKEND (Ya está listo - solo necesitas verificar)

✅ **Ya preparé todo por ti**, pero vamos a verificar que esté correcto:

### 2.1 Abre tu carpeta del proyecto
- Ve a la carpeta `/app/backend` en tu computadora

### 2.2 Verifica estos archivos (solo míralos, no los edites):

**Archivo 1: `Procfile`** (Dice a Railway cómo iniciar tu backend)
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

**Archivo 2: `requirements.txt`** (Lista de librerías necesarias)
- Debe tener muchas líneas (130+)
- Incluye: fastapi, uvicorn, supabase, resend, etc.

**Archivo 3: `.env`** (Configuración secreta)
- Tiene tus API keys de Supabase, Resend, Emergent LLM

---

## 🎯 PASO 3: SUBIR TU CÓDIGO A GITHUB (10 minutos)

Railway necesita que tu código esté en GitHub para poder "descargarlo" y usarlo.

### 3.1 ¿Ya tienes tu proyecto en GitHub?

**SI YA ESTÁ EN GITHUB:**
- Ve a: https://github.com/jsigarrosteguip/gofiby-website
- Si lo ves ahí, salta al PASO 4 ✅

**SI NO ESTÁ EN GITHUB (o no estás seguro):**

### 3.2 Crear repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"+"** (arriba a la derecha)
3. Selecciona **"New repository"**
4. Llena la información:
   - **Repository name:** `gofiby-backend`
   - **Description:** "Backend de Gofiby - API para contacto y chatbot"
   - **Public o Private:** Elige "Private" (más seguro)
5. Haz clic en **"Create repository"**

### 3.3 Subir tu código a GitHub

**Opción A: Usando la terminal (recomendado si sabes usar comandos)**

Abre tu terminal y ejecuta estos comandos UNO POR UNO:

```bash
cd /app/backend
git init
git add .
git commit -m "Primer commit - Backend de Gofiby"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/gofiby-backend.git
git push -u origin main
```

**Reemplaza** `TU_USUARIO` con tu username de GitHub

**Opción B: Usando GitHub Desktop (más fácil para principiantes)**

1. Descarga GitHub Desktop: https://desktop.github.com
2. Instálalo y abre la aplicación
3. Haz clic en "File" → "Add local repository"
4. Selecciona la carpeta `/app/backend`
5. Haz clic en "Publish repository"
6. Marca "Keep this code private"
7. Haz clic en "Publish repository"

---

## 🎯 PASO 4: CREAR TU PROYECTO EN RAILWAY (10 minutos)

Ahora viene lo emocionante: ¡conectar Railway con tu código!

### 4.1 Ve a tu Dashboard de Railway
- Abre: https://railway.app/dashboard
- Deberías ver una pantalla con "Create New Project"

### 4.2 Crear nuevo proyecto
1. Haz clic en el botón **"New Project"**
2. Verás varias opciones, selecciona **"Deploy from GitHub repo"**

### 4.3 Conectar tu repositorio
**Verás una lista de tus repositorios de GitHub**

- Busca: `gofiby-backend` (o `gofiby-website` si subiste todo junto)
- Haz clic en el nombre del repositorio

**¿No ves tu repositorio?**
- Haz clic en "Configure GitHub App"
- Asegúrate de que Railway tenga acceso a tu repositorio
- Vuelve y intenta de nuevo

### 4.4 Seleccionar la carpeta correcta
Si subiste TODO tu proyecto (frontend + backend), Railway te preguntará qué carpeta usar:

- Haz clic en **"Add variables"** (lo veremos en el paso 5)
- En "Root Directory" escribe: `backend`

### 4.5 Esperar el deployment inicial
Railway empezará a "construir" tu backend:

**Verás una pantalla con logs (mensajes) que dicen algo como:**
```
Building...
Installing dependencies...
Starting server...
```

⏱️ **Esto puede tardar 2-5 minutos** - ¡Es normal! Railway está instalando todas las librerías.

---

## 🎯 PASO 5: CONFIGURAR VARIABLES DE ENTORNO (15 minutos)

Las variables de entorno son información secreta (API keys) que tu backend necesita.

### 5.1 Ir a configuración
En Railway, en tu proyecto:
1. Haz clic en tu servicio (debería llamarse "gofiby-backend" o "backend")
2. Ve a la pestaña **"Variables"** (arriba)

### 5.2 Agregar TODAS estas variables una por una

**Haz clic en "+ New Variable"** y agrega cada una de estas:

#### Variable 1: SUPABASE_URL
- **Name:** `SUPABASE_URL`
- **Value:** `https://vcsiwqaxoukguumimtrs.supabase.co`
- Haz clic en "Add"

#### Variable 2: SUPABASE_KEY
- **Name:** `SUPABASE_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjc2l3cWF4b3VrZ3V1bWltdHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NjgzNDgsImV4cCI6MjA3NjE0NDM0OH0.mMhusq24kvEg_1gShJqIMVKbqyCI5-KWjwyeVtPIq80`
- Haz clic en "Add"

#### Variable 3: EMERGENT_LLM_KEY
- **Name:** `EMERGENT_LLM_KEY`
- **Value:** `sk-emergent-e035d096aF5959172F`
- Haz clic en "Add"

#### Variable 4: RESEND_API_KEY
- **Name:** `RESEND_API_KEY`
- **Value:** `re_H3vs9j3Y_Pk8SBBFviSQCW2oA1JmLx3uk`
- Haz clic en "Add"

#### Variable 5: EMAIL_FROM
- **Name:** `EMAIL_FROM`
- **Value:** `onboarding@resend.dev`
- Haz clic en "Add"

#### Variable 6: EMAIL_TO
- **Name:** `EMAIL_TO`
- **Value:** `gofibyinternet@gmail.com`
- Haz clic en "Add"

#### Variable 7: COMPANY_NAME
- **Name:** `COMPANY_NAME`
- **Value:** `Gofiby`
- Haz clic en "Add"

#### Variable 8: COMPANY_PHONE
- **Name:** `COMPANY_PHONE`
- **Value:** `942117296`
- Haz clic en "Add"

#### Variable 9: WHATSAPP_NUMBER
- **Name:** `WHATSAPP_NUMBER`
- **Value:** `51942117296`
- Haz clic en "Add"

#### Variable 10: CORS_ORIGINS
- **Name:** `CORS_ORIGINS`
- **Value:** `*`
- Haz clic en "Add"

### 5.3 Verificar que todas estén agregadas
Deberías ver 10 variables en total. Cuenta para asegurarte.

---

## 🎯 PASO 6: OBTENER LA URL DE TU BACKEND (5 minutos)

### 6.1 Generar dominio público
En Railway, en tu proyecto:

1. Ve a la pestaña **"Settings"** (Configuración)
2. Busca la sección **"Networking"** o **"Domains"**
3. Haz clic en **"Generate Domain"**

**Railway creará una URL como:**
```
https://gofiby-backend-production.up.railway.app
```

### 6.2 Copiar tu URL
**MUY IMPORTANTE:** Copia esta URL completa (desde https:// hasta .app)

**Formato correcto:**
```
https://tu-proyecto-production.up.railway.app
```

### 6.3 Verificar que funcione
Abre una nueva pestaña en tu navegador y pega tu URL + `/api/health`

**Ejemplo:**
```
https://gofiby-backend-production.up.railway.app/api/health
```

**Deberías ver algo como:**
```json
{
  "status": "healthy",
  "services": {
    "supabase": "connected",
    "email": "ready",
    "chatbot": "ready"
  }
}
```

✅ **Si ves esto, ¡tu backend está funcionando!**

---

## 🎯 PASO 7: CONECTAR TU FRONTEND CON EL BACKEND (5 minutos)

Ahora necesitamos decirle a tu página web (frontend en Vercel) dónde está tu backend.

### 7.1 Ir a Vercel
1. Abre: https://vercel.com
2. Busca tu proyecto **"gofiby-website"**
3. Haz clic en él

### 7.2 Agregar variable de entorno
1. Haz clic en la pestaña **"Settings"** (arriba)
2. En el menú de la izquierda, haz clic en **"Environment Variables"**
3. Verás una variable existente llamada `REACT_APP_BACKEND_URL`

### 7.3 Actualizar la URL del backend
1. Haz clic en los **3 puntitos** (•••) al lado de `REACT_APP_BACKEND_URL`
2. Haz clic en **"Edit"**
3. **Borra** el valor antiguo
4. **Pega** tu URL de Railway (la que copiaste en el paso 6.2)

**Ejemplo:**
```
https://gofiby-backend-production.up.railway.app
```

⚠️ **IMPORTANTE:** NO pongas `/api` al final. Solo la URL base.

5. Haz clic en **"Save"**

### 7.4 Hacer re-deploy del frontend
1. Ve a la pestaña **"Deployments"** en Vercel
2. Busca el deployment más reciente (arriba)
3. Haz clic en los **3 puntitos** (•••) a la derecha
4. Selecciona **"Redeploy"**
5. Confirma haciendo clic en **"Redeploy"**

⏱️ Espera 1-2 minutos mientras Vercel actualiza tu sitio.

---

## 🎯 PASO 8: PROBAR QUE TODO FUNCIONE (10 minutos)

¡Momento de la verdad! Vamos a probar cada función.

### 8.1 Probar el formulario de contacto

1. Abre tu página: **https://www.gofiby.com**
2. Baja hasta la sección **"Contacto"**
3. Llena el formulario con datos de prueba:
   - **Nombre:** Juan Pérez Test
   - **Email:** tuprueba@gmail.com (usa tu email real)
   - **Teléfono:** 987654321
   - **Mensaje:** Esta es una prueba del formulario
4. Haz clic en **"Enviar"**

**¿Qué debería pasar?**
- ✅ Ver un mensaje: "Gracias por contactarnos. Te responderemos pronto."
- ✅ Recibir un email en `gofibyinternet@gmail.com` con la información del lead
- ✅ Recibir un email de confirmación en tu email personal

### 8.2 Probar el chatbot

1. En la misma página, busca el **icono del chatbot** (generalmente abajo a la derecha)
2. Haz clic en él
3. Escribe: **"Hola, ¿qué planes tienen disponibles?"**
4. Presiona Enter

**¿Qué debería pasar?**
- ✅ El chatbot responde con información sobre los planes de Gofiby
- ✅ La respuesta es coherente y en español
- ✅ Menciona precios y opciones de planes

### 8.3 Verificar datos en Supabase

1. Ve a: https://supabase.com
2. Abre tu proyecto (vcsiwqaxoukguumimtrs)
3. Ve a **"Table Editor"** en el menú izquierdo
4. Haz clic en la tabla **"contact_leads"**

**Deberías ver:**
- ✅ Tu mensaje de prueba guardado con todos los datos
- ✅ Fecha y hora de creación

5. Haz clic en la tabla **"chat_sessions"**

**Deberías ver:**
- ✅ Tu conversación con el chatbot guardada

---

## 🎯 PASO 9: MONITOREO Y MANTENIMIENTO

### 9.1 Ver logs en Railway (para debugging)

Si algo no funciona:
1. Ve a tu proyecto en Railway
2. Haz clic en tu servicio
3. Ve a la pestaña **"Logs"**
4. Verás mensajes en tiempo real de lo que está pasando

**Busca líneas rojas = errores**

### 9.2 Reiniciar el servicio

Si necesitas reiniciar:
1. En Railway, en tu proyecto
2. Haz clic en los **3 puntitos** (•••) arriba a la derecha
3. Selecciona **"Restart"**

### 9.3 Costos de Railway

Railway te da **$5 USD gratis al mes**

Tu backend consume aproximadamente **$3-4 USD/mes**, así que tienes suficiente.

**Para ver tu uso:**
1. Ve a https://railway.app/account/usage
2. Verás cuánto has gastado este mes

---

## ✅ CHECKLIST FINAL

Marca cada item cuando lo completes:

- [ ] Cuenta de Railway creada
- [ ] Código subido a GitHub
- [ ] Proyecto creado en Railway
- [ ] Variables de entorno agregadas (10 variables)
- [ ] Dominio generado en Railway
- [ ] URL del backend copiada
- [ ] Frontend actualizado en Vercel con nueva URL
- [ ] Frontend re-deployado
- [ ] Formulario de contacto probado ✅
- [ ] Email de notificación recibido ✅
- [ ] Email de auto-respuesta recibido ✅
- [ ] Chatbot probado ✅
- [ ] Datos visibles en Supabase ✅

---

## 🆘 PROBLEMAS COMUNES Y SOLUCIONES

### Problema 1: "Build Failed" en Railway

**Solución:**
- Ve a logs
- Busca el error específico
- Generalmente es por una dependencia faltante
- Avísame el error y lo resolvemos

### Problema 2: "502 Bad Gateway" al visitar la URL

**Solución:**
- El backend está iniciando, espera 30 segundos
- Si persiste, reinicia el servicio en Railway
- Verifica que todas las variables de entorno estén correctas

### Problema 3: Formulario no envía datos

**Solución:**
- Abre la consola del navegador (F12)
- Busca errores rojos
- Verifica que `REACT_APP_BACKEND_URL` en Vercel sea correcta
- Asegúrate de haber re-deployado el frontend

### Problema 4: Chatbot no responde

**Solución:**
- Verifica que `EMERGENT_LLM_KEY` esté en Railway
- Ve a logs de Railway y busca errores relacionados con "chatbot"
- La primera respuesta puede tardar 5-10 segundos (normal)

### Problema 5: No llegan los emails

**Solución:**
- Verifica que `RESEND_API_KEY` esté correcta en Railway
- Revisa la carpeta de SPAM en tu email
- Ve a logs de Railway y busca "Email sent successfully"
- Si dice "Error sending email", avísame el error específico

---

## 📞 ¿NECESITAS AYUDA?

Si te atascas en algún paso:

1. **Toma una captura de pantalla** del error
2. **Copia el mensaje de error** (si lo hay)
3. **Dime en qué paso estás**
4. **Comparte los logs** de Railway (si aplica)

Y te ayudaré inmediatamente.

---

## 🎉 ¡FELICIDADES!

Si llegaste hasta aquí y todo funciona, ¡lo lograste! 

Ahora tu página web está 100% funcional con:
- ✅ Frontend en Vercel
- ✅ Backend en Railway
- ✅ Base de datos en Supabase
- ✅ Emails con Resend
- ✅ Chatbot IA funcionando

**¡Tu aplicación está en producción y lista para recibir clientes reales!** 🚀

---

**Creado por:** AI Engineer
**Fecha:** Enero 2025
**Para:** Proyecto Gofiby
