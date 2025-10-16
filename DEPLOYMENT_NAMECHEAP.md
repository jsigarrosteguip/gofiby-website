# 🚀 GUÍA COMPLETA: SUBIR GOFIBY A NAMECHEAP

## 📋 PREPARACIÓN COMPLETADA ✅

Los archivos están listos en:
- Frontend build: `/app/frontend/build/`
- Backend: `/app/backend/`

---

## 🔐 PASO 1: ACCEDER A TU NAMECHEAP (5 minutos)

### **Opción A: Acceso por cPanel (Recomendado)**

1. **Abre tu navegador**
2. **Ve a:** https://www.namecheap.com
3. **Click en "Sign In"** (arriba derecha)
4. **Ingresa tus datos:**
   - Username o email
   - Password
5. **Una vez dentro:**
   - Busca "Hosting List" o "Manage Hosting"
   - Click en tu plan "Stellar"
   - Busca y click en "Go to cPanel"

### **Opción B: Acceso directo a cPanel**

Si tienes el link directo de tu cPanel:
- Normalmente es algo como: `https://server123.web-hosting.com:2083`
- O: `https://gofiby.com:2083`

---

## 📁 PASO 2: SUBIR ARCHIVOS POR CPANEL (15 minutos)

### **2.1 - Abrir File Manager**

1. Una vez en cPanel, busca el ícono **"File Manager"**
2. Click en "File Manager"
3. Se abrirá una ventana nueva

### **2.2 - Ir a la carpeta correcta**

1. En el File Manager, verás carpetas a la izquierda
2. **Busca y abre:** `public_html`
3. Esta es la carpeta donde va tu sitio web

### **2.3 - Limpiar carpeta (si tiene archivos viejos)**

1. Si ves archivos dentro de `public_html`:
   - Selecciona todos (checkbox arriba)
   - Click en "Delete"
   - Confirma

### **2.4 - Crear estructura de carpetas**

Dentro de `public_html`, necesitamos crear:

**Opción Manual (más simple):**
1. Click en "+ Folder" (arriba)
2. Crear carpeta: `api`
3. Click "Create New Folder"

**Resultado esperado:**
```
public_html/
  ├── api/          (para el backend)
  └── (archivos frontend aquí)
```

---

## 📤 PASO 3: SUBIR FRONTEND (10 minutos)

### **3.1 - Comprimir archivos del frontend**

**Aquí en tu computadora:**

1. Yo te voy a crear un archivo ZIP con el frontend
2. Lo descargas
3. Lo subes a Namecheap

**Espera mis instrucciones para descargar el ZIP** ⏸️

### **3.2 - Subir ZIP a cPanel**

1. En File Manager, asegúrate estar en `public_html`
2. Click en "Upload" (arriba)
3. Click en "Select File"
4. Busca el archivo `frontend.zip` que descargaste
5. Espera que suba (verás barra de progreso)
6. Cuando termine, cierra la ventana de upload

### **3.3 - Extraer archivos**

1. Vuelve a File Manager
2. Busca el archivo `frontend.zip` que subiste
3. Click derecho sobre `frontend.zip`
4. Click en "Extract"
5. Click en "Extract Files"
6. Espera que termine
7. **Elimina el ZIP:** Click derecho → Delete

**Deberías ver archivos como:**
```
public_html/
  ├── index.html
  ├── logo.svg
  ├── static/
  ├── api/
  └── otros archivos...
```

---

## ⚙️ PASO 4: SUBIR BACKEND (15 minutos)

### **4.1 - Comprimir backend**

**Yo te crearé un archivo ZIP con el backend**

### **4.2 - Subir a la carpeta api/**

1. En File Manager, **abre la carpeta `api`**
2. Click en "Upload"
3. Selecciona `backend.zip` que descargaste
4. Espera que suba
5. Click derecho → "Extract"
6. Elimina el ZIP

**Estructura final:**
```
public_html/
  ├── index.html (frontend)
  ├── static/
  ├── api/
  │   ├── server.py
  │   ├── services/
  │   ├── .env
  │   └── requirements.txt
```

---

## 🔧 PASO 5: CONFIGURAR PYTHON Y BACKEND (20 minutos)

### **5.1 - Verificar Python en tu hosting**

**Volver a cPanel:**

1. Busca "Setup Python App" o "Python"
2. Si NO lo encuentras:
   - Busca "Select PHP Version" 
   - Busca cualquier opción de Python

**SI TU HOSTING NO TIENE PYTHON:**
- Namecheap Stellar compartido a veces no tiene Python
- En ese caso, necesitaremos usar **Opción B: Vercel/Railway**

**IMPORTANTE:** Dime si encuentras "Setup Python App" en tu cPanel

---

## 🌐 PASO 6: CONFIGURAR DOMINIO (5 minutos)

### **6.1 - Verificar dominio gofiby.com**

1. En cPanel, busca "Domains" o "Addon Domains"
2. Verifica que `gofiby.com` esté listado
3. Debe apuntar a `public_html`

### **6.2 - Configurar SSL/HTTPS**

1. En cPanel, busca "SSL/TLS Status"
2. Busca `gofiby.com`
3. Click en "Run AutoSSL"
4. Espera que se active (puede tardar 5-10 minutos)

---

## ✅ PASO 7: PROBAR LA PÁGINA

1. Abre tu navegador
2. Ve a: **https://gofiby.com**
3. Deberías ver tu página funcionando

**Si ves errores, no te preocupes, los solucionamos juntos**

---

## 📞 PRÓXIMOS PASOS AHORA

**ANTES DE CONTINUAR, NECESITO QUE:**

1. **Intentes acceder a tu cPanel de Namecheap**
   - Opción 1: Desde Namecheap.com → Hosting List → Go to cPanel
   - Opción 2: Link directo si lo tienes

2. **Me digas si logras entrar a cPanel**

3. **Una vez dentro, busca y dime:**
   - ¿Ves "File Manager"? ✅ o ❌
   - ¿Ves "Setup Python App" o algo de Python? ✅ o ❌

**Cuando me confirmes eso, te preparo los archivos ZIP para subir** 📦

---

## 🆘 SI TIENES PROBLEMAS PARA ACCEDER

**Me puedes compartir (de forma segura):**
1. Tu email de Namecheap
2. Yo te guío cómo recuperar acceso

**O si prefieres:**
- Podemos usar la Opción B (Vercel/Railway) que es más simple
- No necesitas acceso FTP/cPanel
- Solo GitHub

**¿Qué prefieres intentar primero?** 👇
