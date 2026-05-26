---
title: Contador
description: Contador
---
## Preparar el entorno

Crear una carpeta para el proyecto

```bash
mkdir contador5
```

Ingresar a la carpeta

```bash
cd contador5
```

Crear los archivos `index.html` y `counter.js`

```bash
touch index.html counter.js
```

Abrir el `Editor de codigo` **Visual Studio Code**

```bash
code .
```

## Entregable 1
### Estructura HTML

1. Crear la `estructura de un documento HTML`

```html
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
2. Agregar el siguiente contenido a `counter.js`

```js
alert("Hola mundo");
```

### Agregar javascript/typescript a HTML
3. Agregar el archivo `counter.js` al archivo `index.html`

Incluir el siguiente contenido antes de la etiqueta `</body>` en el archivo `index.html`

```html
<script src="counter.js"></script>
```

### Probar el resultado del algoritmo
4. Abrir el archivo `index.html` en **google chrome**

## Entregable 2

Borrar todo el contenido de `counter.js`

### Agregar un titulo para la pagina web
Agregar en `index.html` dentro de la etiqueta `main` una etiqueta para el titulo de la pagina web

```html
<h1>Contador</h1>
```

### Etiqueta para **mostrar** datos del **contador**
Agregar en `index.html` debajo de la etiqueta `h1` una etiqueta para mostrar datos

```html
<h3>0</h3>
```

Agregar a la etiqueta `h3` un **atributo** `id` con el **valor** de `salida`

```html
<h3 id="salida">0</h3>
```

### Etiqueta para **incrementar** el **contador**

Agregar una etiqueta `button` debajo de la etiqueta `h3`

```html
<button>Incrementar</button>
```

Agregar a la etiqueta `button` un **atributo** `id` con el **valor** de `btn-incrementar`

```html
<button id="btn-incrementar">Incrementar</button>
```

## Entregable 3

Los siguiente contenidos se deben agregar en el archivo `counter.js`

### Declarar una **variable global** para el contador
```js
let contador = 0;
```

### Obtener referencia a las etiquetas HTML
```js
const outSalida = document.getElementById("salida");
const btnIncrementar = document.getElementById("btn-incrementar");
```

### Agregar un **listener** a una etiqueta **button**
```js
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