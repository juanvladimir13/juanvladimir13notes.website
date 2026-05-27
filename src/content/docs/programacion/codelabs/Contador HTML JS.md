---
title: Contador
description: Contador
---
## Preparar el entorno

```bash title="Crear una carpeta"
mkdir contador5
```

```bash title="Ingresar a la carpeta"
cd contador5
```

Crear los archivos `index.html` y `counter.js`

```bash title="Crea uno o varios archivos"
touch index.html counter.js
```

Abrir el `Editor de codigo` **Visual Studio Code**

```bash title="Abrir VSCode en la carpeta actual"
code .
```

## Entregable 1
### Estructura HTML

Crear la `estructura de un documento HTML`

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

### Probar el resultado del algoritmo
Abrir el archivo `index.html` en **google chrome**

## Entregable 2

Borrar todo el contenido de `counter.js`

### Agregar un titulo para la pagina web
Agregar en `index.html` dentro de la etiqueta `main` una etiqueta para el titulo de la pagina web

```html title="index.html"
<h1>Contador</h1>
```

### Etiqueta para **mostrar** datos del **contador**
Agregar en `index.html` debajo de la etiqueta `h1` una etiqueta para mostrar datos

```html title="index.html"
<h3>0</h3>
```

Agregar a la etiqueta `h3` un **atributo** `id` con el **valor** de `salida`

```html title="index.html"
<h3 id="salida">0</h3>
```

### Etiqueta para **incrementar** el **contador**

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

## Entregable 3
### Declarar una **variable global** para el contador

```js title="counter.js"
let contador = 0;
```

### Obtener referencia a las etiquetas HTML
```js title="counter.js"
const outSalida = document.getElementById("salida");
const btnIncrementar = document.getElementById("btn-incrementar");
```

### Agregar un **listener** a una etiqueta **button**
```js title="counter.js" showLineNumbers
btnIncrementar.addEventListener("click", ()=>{
  contador = contador + 1;
  outSalida.textContent = String(contador);
});
```

### Prueba del algoritmo

Abrir el archivo `index.html` en **google chrome**, _al presionar el boton debe incrementar el valor del contador_

## Practico

### Crear un boton **decrementar**
- Editar el archivo `index.html`
- Agregar una nueva etiqueta `button` con el **atributo** `id` con el **valor** de `btn-decrementar`
- Editar el archivo `counter.js` 
- Obtener referencia a la etiqueta HTML `botton` decrementar
- Agregar un `listener` a la etiqueta `button` decrementar
- Abrir el archivo `index.html` para realizar pruebas
