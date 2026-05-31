---
title: Contador con HTML y JS
description: Contador con HTML y JS
---

## Descripcion general


## Que aprenderas
## Objetivos
## Requisitos
## Resultado

tiempo estimado

**Construir una pequeña aplicación web** que muestra y controla un contador mediante **HTML estático**, **JavaScript básico** y **event listeners**.

Etapas

1. **Estructura y conexión** de archivos.
2. **Manipulación del DOM** (etiquetas `<h3>` y `<button>`).  
3. **Lógica de estado** (variable `contador` y actualización de la vista).  
4. **Extensión** (añadir un botón de decremento).

## Resultado
Al final, el alumno habrá practicado y fundamentos esenciales para el desarrollo frontend la:
- [x] Creación de proyectos
- [x] la inserción de scripts, la 
- [x] obtención de referencias DOM y la respuesta a eventos

## Preparar el entorno de desarrollo

```bash title="Crear una carpeta"
mkdir contador5
```

```bash title="Ingresar a la carpeta"
cd contador5
```

Crear los archivos `index.html` y `counter.js`

```bash title="touch: Crea uno o varios archivos"
touch index.html counter.js
```

Abrir el `Editor de codigo` **Visual Studio Code**

```bash title="Abrir VSCode en la carpeta actual"
code .
```

## Entregable 1

### Objetivo
Definir el documento HTML con `<html>`, `<head>`, `<body>`.<br>
- Añadir `<h1>Contador` y contenedores `<header>`, `<main>`, `<footer>`.<br>
- Incluir el archivo `counter.js` mediante `<script src="counter.js"></script>`.<br>
- Agregar un `alert("Hola mundo")` en `counter.js` para comprobar la carga.

### Estructura HTML

Crear la **estructura de un documento HTML**

```html title="index.html" showLineNumbers
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Tecnico medio</title>
  </head>
  <body>
    <header></header>
    <h1>Contador</h1>
    <main></main>
    <footer></footer>
  </body>
</html>
```

### Funciones dinamicas de javascript/typescript
Agregar el siguiente contenido a `counter.js`

```js title="counter.js"
alert("Hola mundo");
```

### Agregar javascript/typescript a HTML
Agregar el archivo `counter.js` al archivo `index.html`

Incluir el siguiente contenido antes de la etiqueta `</body>` en el archivo `index.html`

```html title="index.html" 
<script src="counter.js"></script>
```

:::note 
**Verificar el resultado del algoritmo**, abriendo el archivo `index.html` en el navegador **google chrome**
:::

## Entregable 2

### Objetivo
Agregar los elementos visuales y la interacción inicial
- Vaciar `counter.js`.<br>
- En `index.html` colocar un `<h3 id="salida">0</h3>` bajo el `<h1>` para mostrar el valor.<br>
- Insertar un `<button id="btn‑incrementar">Incrementar</button>` bajo el `<h3>`.<br>
- En `counter.js` obtener referencias `document.getElementById("salida")` y `document.getElementById("btn‑incrementar")`.<br>
- Añadir un listener `click` al botón que incremente una variable y actualice `salida`. 

:::danger
Borrar todo el contenido de `counter.js`
:::

### Etiqueta para mostrar datos
Agregar en `index.html` debajo de la etiqueta `h1` una etiqueta `h3` para mostrar datos

```html title="index.html"
<h3>0</h3>
```

Agregar a la etiqueta `h3` un **atributo** `id` con el **valor** de `salida`

```html title="index.html"
<h3 id="salida">0</h3>
```

### Etiqueta para incrementar el contador

Agregar una etiqueta `button` debajo de la etiqueta `h3`

```html title="index.html"
<button>Incrementar</button>
```

Agregar a la etiqueta `button` un **atributo** `id` con el **valor** de `btn-incrementar`

```html title="index.html"
<button id="btn-incrementar">
  Incrementar
</button>
```
:::note 
Abrir el archivo `index.html` en el navegador **google chrome**
:::

## Entregable 3

### Objetivo
Implementar la lógica del contador
- Declarar una variable global `let contador = 0;`.<br>
- En el listener: `contador = contador + 1; outSalida.textContent = String(contador);`

### Declarar una variable global para el contador

```js title="counter.js"
let contador = 0;
```

### Obtener referencia a las etiquetas HTML
```js title="counter.js"
const outSalida = document.getElementById("salida");
const btnIncrementar = document.getElementById("btn-incrementar");
```

### Estructura de un listener
```js del="click" "(evt) => { }" ins="btnIncrementar"
btnIncrementar.addEventListener("click", (evt) => { } );
```

- **btnIncrementar** -> Etiqueta HTML a la que se le va a agregar el listener
- **click** -> Indica el tipo de evento a escuchar
- **(evt) => { }** -> Funcion a ejecutar cuando se detecta el evento

### Agregar un **listener** a una etiqueta **button**
```js title="counter.js" showLineNumbers
btnIncrementar.addEventListener("click", (evt) => {
  contador = contador + 1;
  outSalida.textContent = String(contador);
});
```

### Prueba del algoritmo
:::note
Abrir el archivo `index.html` en **google chrome**, _al presionar el **boton** debe incrementar el valor del contador_
:::

## Practico

### Objetivo
Extender la funcionalidad con un botón de decremento
- Añadir `<button id="btn‑decrementar">Decrementar</button>` en `index.html`.<br>
- Obtener su referencia en `counter.js`.<br>
- Crear otro listener que reste 1 al contador y actualice `salida`.

### Crear un boton **decrementar**
- Editar el archivo `index.html`
- Agregar una nueva etiqueta `button` con el **atributo** `id` con el **valor** de `btn-decrementar`
- Editar el archivo `counter.js` 
- Obtener referencia a la etiqueta HTML `botton` decrementar
- Agregar un `listener` a la etiqueta `button` decrementar
- Abrir el archivo `index.html` para realizar pruebas
