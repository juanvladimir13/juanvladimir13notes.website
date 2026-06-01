---
title: 3. Formulario HTML
description: Estructuras de control condicionales y repetitiva
---

## Diseño de formulario HTML

```html title="index.html" showLineNumbers
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Sistemas Informaticos</title>
  </head>
  <body>
    <header></header>
    <main>
      <h1>Funciones</h1>
    </main>
    <footer></footer>
  </body>
</html>
```

### Etiqueta para mostrar datos
Debajo de la etiqueta `h1` agregar una etiqueta `h3` para mostrar datos, con un **atributo** `id` con el **valor** de `out-salida`

```html title="index.html"
<h3 id="out-salida">0</h3>
```

### Etiqueta para insertar datos

Debajo de la etiqueta `h3` agregar una etiqueta `input` con un **atributo** `id` con el **valor** de `inp-one`

```html title="index.html"
<input type="text" id="inp-one" placeholder="Ingrese datos">
```

Debajo de la etiqueta `input` agregar una etiqueta `input` con un **atributo** `id` con el **valor** de `inp-two`

```html title="index.html"
<input type="text" id="inp-two" placeholder="Ingrese datos">
```

### Etiqueta para procesar datos

Agregar una etiqueta `button` con un **atributo** `id` con el **valor** de `btn-process`

```html title="index.html"
<button id="btn-process">
  Procesar
</button>
```

## Funciones de javascript

```js title="conditional.js"
console.log("Hola mundo conditional");
```

```js title="repeat.js"
console.log("Hola mundo repeat");
```

### Agregar javascript/typescript a HTML
Agregar el archivo `conditional.js` y `repeat.js` antes de la etiqueta `</body>` en el archivo `index.html`

```html title="index.html"
  <script src="conditional.js"></script>
  <script src="repeat.js"></script>
```

### Probar el resultado del algoritmo

:::note
Abrir el archivo `index.html` en **google chrome**
:::
