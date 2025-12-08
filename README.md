# DELTA TIME - Proyecto F1 (Entrega 2)

Este repositorio contiene el prototipo funcional desarrollado en React (Next.js) para la asignatura de Desarrollo de Interfaces.
Delta Time es una aplicación web diseñada para una comunidad de Fórmula 1, incluyendo secciones de noticias, foros y contenido multimedia.

## Descripción del Proyecto

El objetivo de esta entrega es implementar la estructura de componentes en React basándose en el diseño previo de Figma, priorizando la funcionalidad, la comunicación entre componentes (props) y el manejo de estados (useState).

La aplicación consta de las siguientes vistas independientes:
* **Login y Registro:** Formularios funcionales con validación básica.
* **Dashboard:** Vista principal con resumen de contenidos.
* **Noticias:** Listado de noticias y vista de detalle de una noticia.
* **Foro:** Listado de hilos de discusión y vista de detalle de un post.
* **Wallpapers:** Galería de imágenes con funcionalidad simulada de compartir.
* **Perfil:** Visualización de datos de usuario simulados.

## Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado en tu ordenador:

* **Node.js** (Versión 18 o superior recomendada).
* **NPM** (Viene instalado junto con Node.js).
* Un editor de código como **Visual Studio Code**.

## Instalación y Despliegue

Sigue estos pasos para visualizar el proyecto en tu equipo local:

1.  **Clonar el repositorio** (o descargar el ZIP y descomprimirlo):
    ```bash
    git clone https://github.com/TwitchELTOGAED/proyecto-antonio.git
    ```

2.  **Instalar dependencias:**
    Abre una terminal en la carpeta raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```
    *(Esto descargará la carpeta `node_modules` necesaria para que React funcione).*

3.  **Ejecutar el servidor de desarrollo:**
    Una vez instaladas las dependencias, lanza el proyecto con:
    ```bash
    npm run dev
    ```

4.  **Ver en el navegador:**
    Abre tu navegador web y entra en la siguiente dirección:
    ```
    http://localhost:3000
    ```

## Estructura del Proyecto

La navegación entre las distintas páginas se realiza de forma manual o a través del índice principal, ya que se han desarrollado como páginas independientes según los requisitos.

* **`src/components`**: Contiene los componentes reutilizables (`Header`, `Card`).
* **`src/app`**: Contiene las páginas del proyecto organizadas por carpetas (`login`, `dashboard`, `noticias`, etc.).
* **`src/datos.js`**: Archivo con los arrays de datos simulados.

##  Autor

* **Alumno:** Antonio Jurado Ferreira
* **Asignatura:** Desarrollo de Interfaces
* **Curso:** 2025/2026
