# Juan Vladimir | Trainer - Codelabs & Notes

Plataforma de documentación educativa interactiva construida con Astro Starlight. 
Este proyecto aloja material de estudio, codelabs y exámenes sobre diversas áreas de la informática y el desarrollo web.

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) (con la integración [Starlight](https://starlight.astro.build/))
- **Gestor de Paquetes**: [Bun](https://bun.sh/)
- **Diagramas**: `astro-mermaid` (basado en Mermaid.js)
- **Despliegue**: Firebase Hosting

## 💻 Desarrollo Local

Para ejecutar este proyecto en tu entorno local, asegúrate de tener [Bun](https://bun.sh/) instalado.

```bash
# 1. Instalar las dependencias
bun install

# 2. Iniciar el servidor de desarrollo local (localhost:4321)
bun run dev
```

## 🏗️ Construcción y Despliegue

El proyecto está configurado para ser compilado estáticamente y desplegado en Firebase Hosting.

```bash
# 1. Compilar el proyecto para producción
bun run build

# 2. Previsualizar la compilación localmente
bun run preview

# 3. Desplegar en Firebase Hosting
firebase deploy
```

## 📚 Estructura de Contenido

Explora el contenido estructurado en tres secciones principales:

- **Database**: Diseño de bases de datos, SGBD, SQLite, comandos DDL y DML.
- **Programación**: Conceptos fundamentales, Álgebra de Boole, funciones y estructuras de control.
- **Web Design**: Diseño responsivo, HTML, CSS (Flexbox) y selectores.

Todo el contenido Markdown se encuentra dentro del directorio `src/content/docs/`.
