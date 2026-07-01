---
title: 2. Entorno de desarrollo
description: Entorno de desarrollo

head:
  - tag: meta
    attrs:
      property: og:title
      content: '2. Entorno de desarrollo'
  - tag: meta
    attrs:
      property: og:description
      content: 'Entorno de desarrollo'
  - tag: meta
    attrs:
      property: og:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
  - tag: meta
    attrs:
      property: og:image:width
      content: '1200'
  - tag: meta
    attrs:
      property: og:image:height
      content: '630'
  - tag: meta
    attrs:
      property: og:locale
      content: 'es_BO'
  - tag: meta
    attrs:
      property: og:type
      content: 'article'
  - tag: meta
    attrs:
      property: twitter:card
      content: 'summary_large_image'
  - tag: meta
    attrs:
      property: twitter:title
      content: '2. Entorno de desarrollo'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Entorno de desarrollo'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Estructura de archivos y carpetas

Crear una carpeta
```bash
mkdir maquetacion-html-css
```

Ingresar a la carpeta
```bash
cd maquetacion-html-css
```

Crear los archivos `index.html`, `app.css` y `main.js`
```bash
touch index.html app.css main.js
```

Abrir el editor de codigo **Visual Studio Code** en la carpeta actual
```bash
code .
```

## Estructura basica de un documento HTML

```html title="index.html" showLineNumbers
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>HTML y CSS</title>
  </head>
  <body>
    <header></header>
    <h1>
      Maquetacion de una pagina web
    </h1>
    <main></main>
    <footer>
      <p>Copyright 2026</p>
    </footer>
  </body>
</html>
```
