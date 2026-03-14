# DELTA TIME - Proyecto F1 (Entrega 4: Backend y Base de Datos)

Este repositorio contiene la Fase 2 del proyecto "Delta Time" para la asignatura de Desarrollo de Interfaces. Delta Time es una plataforma y foro diseñado para la comunidad de Fórmula 1.

En esta entrega, hemos dado el gran salto: pasamos de tener una interfaz visual estática a una aplicación web más completa y funcional (Full-Stack). Hemos implementado una arquitectura Cliente-Servidor conectando la web a una base de datos real en Supabase mediante un backend propio.

## Tecnologías Utilizadas

* **Frontend:** Next.js (App Router) y React.
* **Estilos:** Tailwind CSS con la paleta de colores corporativa (Dark Mode) y tipografías personalizadas.
* **Backend:** Next.js API Routes.
* **Base de Datos:** Supabase (PostgreSQL).

## Arquitectura del Proyecto

Para cumplir con los requisito de la entrega, hemos separado el proyecto en tres capas:
1. **Frontend (src/app y src/components):** Es la cara visual de la web. Captura lo que escribe el usuario, pero nunca se conecta directamente a la base de datos por seguridad.
2. **Backend (src/app/api):** Es nuestro "puente" seguro. Son rutas de API que reciben las peticiones del frontend, validan que todo esté bien y se conectan con Supabase.
3. **Base de Datos:** Nuestro proyecto en Supabase donde se guardan los datos de forma persistente.

## El CRUD del Foro (Endpoints)

He desarrollado un CRUD completo (Crear, Leer, Actualizar y Borrar) para que el foro funcione de verdad. Todo se controla desde el archivo `/api/foro/route.js`:
* **GET /api/foro**: Lee y devuelve todos los temas guardados, ordenados del más nuevo al más antiguo.
* **POST /api/foro**: Recibe los datos del formulario (título, autor, categoría y contenido), comprueba que no falte nada y crea el tema en la base de datos.
* **PUT /api/foro**: Recibe los datos de un tema que ya existe y lo actualiza (Editar).
* **DELETE /api/foro?id=X**: Busca un tema por su ID y lo elimina de la base de datos.

## Estructura de la Base de Datos

He creado una tabla en Supabase llamada `foro_temas` con estas columnas:
* `id` (Clave primaria autogenerada, tipo UUID)
* `created_at` (Fecha de creación)
* `titulo` (Texto)
* `autor` (Texto)
* `categoria` (Texto)
* `contenido` (Texto)

## Instalación y Ejecución

Si quieres probar el proyecto en tu ordenador, sigue estos pasos:

1. **Clona el repositorio:**
   git clone https://github.com/TwitchELTOGAED/proyecto-antonio.git

2. **Instala las dependencias:**
   Abre una terminal en la carpeta del proyecto y ejecuta:
   npm install

3. **Configura las Variables de Entorno:**
   Crea un archivo llamado exactamente `.env.local` en la carpeta principal del proyecto y pega las claves de Supabase:
   NEXT_PUBLIC_SUPABASE_URL="..."
   NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
""
4. **Arranca el servidor:**
   npm run dev
   Abre tu navegador y entra en http://localhost:3000

## Autor

* **Alumno:** Antonio Jurado Ferreira
* **Asignatura:** Desarrollo de Interfaces
* **Curso:** 2025/2026
* **Centro:** IES Laguna de Tollón