# DELTA TIME - Proyecto F1 (Entrega Final: Autenticación, Roles y Base de Datos)

Este repositorio contiene la versión final del proyecto "Delta Time" para la asignatura de Desarrollo de Interfaces. Delta Time es una plataforma y foro diseñado para la comunidad de Fórmula 1.

En esta entrega, hemos dado el paso definitivo para convertir la plataforma en una aplicación web Full-Stack completamente segura. Hemos implementado un sistema de Autenticación de Usuarios, un panel de Perfil y un Control de Acceso Basado en Roles (RBAC) conectando la web a una base de datos real en Supabase mediante un backend propio.

## Tecnologías Utilizadas

* **Frontend:** Next.js (App Router) y React.
* **Estilos:** Tailwind CSS con la paleta de colores corporativa (Dark Mode) y tipografías personalizadas.
* **Backend:** Next.js API Routes.
* **Base de Datos:** Supabase (PostgreSQL).
* **Autenticación:** Supabase Auth (Email y Contraseña).

## Arquitectura del Proyecto

Para cumplir con los requisitos de la entrega y garantizar la seguridad, el proyecto se divide en tres capas:
1. **Frontend (src/app y src/components):** Es la cara visual de la web. Captura lo que escribe el usuario y gestiona los estados de sesión, pero nunca se conecta directamente a la base de datos para modificar registros.
2. **Backend (src/app/api):** Es nuestro "puente" seguro. Son rutas de API (Endpoints) que reciben las peticiones del frontend, procesan los datos y se comunican con Supabase.
3. **Base de Datos y Auth:** Nuestro proyecto en Supabase donde se guardan los datos de forma persistente y se gestionan los tokens de sesión de los usuarios.

## Novedades y Sistema de Roles (Seguridad)

Se ha implementado una lógica de seguridad dinámica basada en el rol del usuario logueado:

* **Sistema de Cuentas y Perfil:** Los usuarios pueden registrarse, iniciar sesión y ver su telemetría (datos) en un panel de perfil privado.
* **Modo Administrador:** Acceso protegido mediante un checkbox especial y un PIN de seguridad de 4 dígitos.
* **Noticias (Admin Only):** Solo el Administrador tiene permisos para acceder al formulario de redacción y borrar noticias.
* **Wallpapers y Foro (Protección de Autoría):** Los usuarios registrados pueden crear temas de foro y subir imágenes. La base de datos registra el correo del autor (`user_email`), garantizando que **un usuario normal solo pueda borrar sus propias publicaciones**. El Administrador mantiene privilegios absolutos para moderar/borrar cualquier publicación.

## Estructura de la Base de Datos

He creado tres tablas principales en Supabase para gestionar el contenido:

1. **`foro_temas`**: `id`, `created_at`, `titulo`, `contenido`, `user_email` (Identificador del autor).
2. **`noticias`**: `id`, `created_at`, `titulo`, `contenido`, `imagen`, `autor`.
3. **`wallpapers`**: `id`, `created_at`, `titulo`, `fotografo`, `imagen`, `user_email` (Identificador del autor).

## Credenciales de Prueba (Para Evaluación)

Para probar todos los privilegios de moderación y borrado, utilice la siguiente cuenta marcando la casilla "Iniciar sesión como Administrador":
* **Correo:** `admin@deltatime.com`
* **Contraseña:** `Admin3314@#`
* **PIN de Seguridad:** `3314`

*(Para probar los permisos de un usuario estándar, puede registrar una cuenta nueva libremente).*

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

4. **Arranca el servidor:**
   npm run dev
   Abre tu navegador y entra en http://localhost:3000

## Autor

* **Alumno:** Antonio Jurado Ferreira
* **Asignatura:** Desarrollo de Interfaces
* **Curso:** 2025/2026
* **Centro:** IES Laguna de Tollón