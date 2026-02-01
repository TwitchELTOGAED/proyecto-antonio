# DELTA TIME - Proyecto F1 (Entrega 3: Desarrollo Fase 2)

Este repositorio contiene la evolución del proyecto "Delta Time" para la asignatura de Desarrollo de Interfaces. En esta **Fase 2**, el foco principal ha sido la implementación fiel del diseño visual (Pixel Perfect) utilizando **Next.js** y **Tailwind CSS**, transformando el prototipo funcional anterior en una aplicación con una interfaz profesional y responsiva.

## Descripción del Proyecto

Delta Time es una plataforma digital y foro diseñado exclusivamente para la comunidad de Fórmula 1. El objetivo de esta entrega ha sido aplicar una capa de estilos visuales robusta que respete la identidad de marca definida en Figma (paleta de colores "Dark Mode", tipografías Racing y componentes interactivos).

La aplicación cuenta ahora con un diseño totalmente estilizado que incluye:
* **Landing Page:** Portada inmersiva con acceso para invitados o usuarios registrados.
* **Home (Inicio):** Panel principal con rejilla responsiva de noticias y widgets laterales.
* **Navegación Inteligente:** Menú que se oculta automáticamente en pantallas de acceso.
* **Comunidad:** Secciones completas de Foro, Noticias y Perfil de usuario.

## Tecnologías de Estilos Utilizadas

Siguiendo los requisitos de la entrega, se ha priorizado el uso de Frameworks modernos:

* **Tailwind CSS (v3):** Herramienta principal de estilado. Se ha configurado el archivo `tailwind.config.js` para extender el tema con los colores corporativos:
    * `racing-red` (#E10600)
    * `racing-gray` (#2E2E2E)
* **Fuentes Personalizadas:** Integración de `Montserrat` (texto principal) y `Russo One` (títulos/logo) vía `next/font/google`.
* **CSS Grid & Flexbox:** Implementados a través de las clases de utilidad de Tailwind para la maquetación responsiva.

## Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado en tu ordenador:

* **Node.js** (Versión 18 o superior).
* **NPM** (Gestor de paquetes).
* **Visual Studio Code** (Recomendado).

## Instalación y Despliegue

Sigue estos pasos para visualizar el proyecto en tu equipo local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TwitchELTOGAED/proyecto-antonio.git](https://github.com/TwitchELTOGAED/proyecto-antonio.git)
    ```

2.  **Instalar dependencias:**
    Abre una terminal en la carpeta raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Ver en el navegador:**
    Abre tu navegador web y entra en la siguiente dirección:
    ```text
    http://localhost:3000
    ```

## Estructura del Proyecto y Componentes

Se ha mantenido una arquitectura limpia separando lógica y presentación:

* **`src/app`**: Rutas de la aplicación (App Router):
    * `/landing`: Portada de bienvenida (Ruta raíz redirigida).
    * `/home`: Pantalla principal con el resumen de actualidad.
    * `/login` y `/signup`: Formularios de acceso y registro.
    * `/noticias` y `/noticia-detalle`: Listado y vista completa de artículos.
    * `/foro` y `/foro-detalle`: Listado de temas y conversación.
    * `/wallpapers`: Galería de imágenes.
    * `/perfil`: Vista de usuario.
* **`src/components`**: Componentes visuales reutilizables:
    * `Header.js`: Barra de navegación fija (*sticky*) con lógica de renderizado condicional.
    * `NewsCard.js`: Tarjeta de noticias con efectos de interacción.
    * `ForumRow.js`: Fila de debate estilizada para los listados.
    * `SectionTitle.js`: Títulos estandarizados con decoración corporativa.
* **`tailwind.config.js`**: Archivo de configuración con los tokens de diseño (colores y fuentes).

## Autor

* **Alumno:** Antonio Jurado Ferreira
* **Asignatura:** Desarrollo de Interfaces
* **Curso:** 2025/2026
* **Centro:** IES Laguna de Tollón