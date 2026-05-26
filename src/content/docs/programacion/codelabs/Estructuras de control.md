---
title: Estructuras de control
description: Estructuras de control condicionales y repetitiva
---
## Preparar el entorno

Crear una carpeta para el proyecto

```bash
mkdir structure-control
```

Ingresar a la carpeta

```bash
cd structure-control
```

Crear los archivos `index.html`, `conditional.js` y `repeat.js`

```bash
touch index.html conditional.js repeat.js
```

Abrir el `Editor de codigo` **Visual Studio Code**

```bash
code .
```

## Entregable 1
### Estructura HTML

Crear la `estructura de un documento HTML`

```html
<html lang="es">
	<head>
	    <meta charset="UTF-8">
	    <title>Sistemas Informaticos</title>
	</head>
	<body>
	   <header></header>
	   <main>
      <h1>Estructuras de control</h1>
     </main>
	   <footer></footer>
	</body>
</html>
```
### Funciones dinamicas de javascript/typescript
Agregar el siguiente contenido a `conditional.js`

```js
console.log("Hola mundo conditional");
```

Agregar el siguiente contenido a `repeat.js`

```js
console.log("Hola mundo repeat");
```

### Agregar javascript/typescript a HTML
Agregar el archivo `conditional.js` y `repeat.js` al archivo `index.html`

Incluir el siguiente contenido antes de la etiqueta `</body>` en el archivo `index.html`

```html
<script src="conditional.js"></script>
<script src="repeat.js"></script>
```

### Probar el resultado del algoritmo
Abrir el archivo `index.html` en **google chrome**

## Entregable 2

### Etiqueta para **mostrar** datos
Agregar en `index.html` debajo de la etiqueta `h1` una etiqueta para mostrar datos

Agregar a la etiqueta `h3` un **atributo** `id` con el **valor** de `out-salida`

```html
<h3 id="out-salida">0</h3>
```
### Etiqueta para **insertar datos**

Agregar a la etiqueta `input` un **atributo** `id` con el **valor** de `inp-one`

```html
<input type="text" id="inp-one" placeholder="Ingrese datos">
```

Agregar a la etiqueta `input` un **atributo** `id` con el **valor** de `inp-two`

```html
<input type="text" id="inp-two" placeholder="Ingrese datos">
```

### Etiqueta para **procesar datos**

Agregar a la etiqueta `button` un **atributo** `id` con el **valor** de `btn-conditional`

```html
<button id="btn-conditional">Procesar</button>
```

## Entregable 3

Agregar los siguientes contenidos en el archivo `conditional.js`

### Declarar las siguientes **variables globales**
```js
let parametroOne = "";
let parametroTwo = "";
```

### Obtener referencia a las etiquetas HTML
```js
const outSalida = document.getElementById("out-salida");
const inpOne = document.getElementById("inp-one");
const inpTwo = document.getElementById("inp-two");

const btnConditional = document.getElementById("btn-conditional");
```

### Crear una funcion para procesar datos
```js
function calcularEdad(anioNacimiento){
    return 2026 - anioNacimiento;
}
```

### Agregar un **listener** a una etiqueta **button**
```js
btnConditional.addEventListener("click", () => {
  parametroOne = Number(inpOne.value);
  const edad = calcularEdad(parametroOne);

  outSalida.textContent = String(edad);
});
```

### Prueba del algoritmo

Abrir el archivo `index.html` en **google chrome**, _al presionar el boton debe mostrar el valor calculado_

## Evaluacion
1. Agregar un nuevo `button` con el atributo `id` con el valor `btn-examen` en `index.html`
2. Agregar su **listener** en `conditional.js`
3. Agregar en el **listener** la funcion `console.log("examen")`
4. Probar el algoritmo en google chrome

## Ejercicios propuestos

### Estructura de control condicional

1. Mayor de dos números
2. Par o impar
3. Aprobado o suspendido
4. Validación de acceso 
5. Descuento condicional

### Estructura de control repetitiva while

1. Contador descendente
2. Calcular la potencia con un numero base y exponente
3. Tabla de multiplicar

### Estructura de control repetitiva for

1. Contador descendente
2. Calcular la potencia con un numero base y exponente
3. Tabla de multiplicar