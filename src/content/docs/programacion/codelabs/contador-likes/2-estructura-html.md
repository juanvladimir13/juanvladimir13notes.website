---
title: 3. Estructura de un documento HTML
description: Contador con HTML y JS
---

```html title="index.html" showLineNumbers
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Tecnico medio</title>
  </head>
  <body>
    <header></header>
    <h1>Contador de likes</h1>
    <main></main>
    <footer></footer>
  </body>
</html>
```

## Funciones de javascript/typescript

```js title="counter.js"
alert("Hola mundo");
```

### Enlazar archivos javascript/typescript a HTML
Agregar el archivo `counter.js` al archivo `index.html`, incluir el siguiente contenido antes de la etiqueta `</body>`

```html title="index.html" 
<script src="counter.js"></script>
```

:::note 
**Verificar el resultado del algoritmo**, abriendo el archivo `index.html` en el navegador **google chrome**
:::
