# Juan Vladimir | Trainer - Codelabs & Notes

Plataforma de documentación educativa interactiva y codelabs construida con **Astro Starlight**. 
Este proyecto aloja material de estudio, codelabs guiados paso a paso y modelos de examen sobre diversas áreas de la informática y el desarrollo web.

---

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) (con la integración [Starlight](https://starlight.astro.build/))
- **Gestor de Paquetes**: [Bun](https://bun.sh/)
- **Diagramas**: `astro-mermaid` (basado en Mermaid.js)
- **Resaltado de Código**: Expressive Code con `@expressive-code/plugin-line-numbers`
- **Despliegue**: Firebase Hosting

---

## 💻 Desarrollo Local

Para ejecutar este proyecto en tu entorno local, asegúrate de tener [Bun](https://bun.sh/) instalado.

```bash
# 1. Instalar las dependencias
bun install

# 2. Iniciar el servidor de desarrollo local (localhost:4321)
bun run dev
```

---

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

---

## 📚 Estructura de Contenido

El contenido educativo está estructurado en 4 secciones principales dentro de `src/content/docs/`:

- **Programación**: Fundamentos esenciales, TypeScript, funciones, manipulación del DOM y codelabs de arrays (primitivos y de objetos).
- **Web Design**: Maquetación HTML/CSS, Flexbox CSS, selectores y propiedades CSS.
- **Base de Datos**: Diseño relacional, SQLite, sentencias y ejercicios de DDL y DML.
- **Herramientas**: Flujos de trabajo con Git, conexión a repositorios remotos y OpenCode.

Para detalles sobre convenciones de desarrollo y pautas de agentes de IA, consultar `AGENTS.md` o `.clinerules`.
