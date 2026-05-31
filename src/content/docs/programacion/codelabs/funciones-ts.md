---
title: Estructuras de control
description: Estructuras de control condicionales y repetitiva
---

## Preparar el entorno

```bash title="Crear una carpeta"
mkdir structure-control
```

```bash title="Ingresar a la carpeta"
cd structure-control
```

Crear los archivos `index.html`, `conditional.js` y `repeat.js`

```bash title="touch: crea uno o varios archivos"
touch index.html conditional.js repeat.js
```

Abrir el `Editor de codigo` **Visual Studio Code**

```bash title="Abre VSCode en la carpeta actual"
code .
```

## Entregable 1
### Estructura HTML

Crear la **estructura de un documento HTML**

```html title="index.html" showLineNumbers
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

```js title="conditional.js"
console.log("Hola mundo conditional");
```

```js title="repeat.js"
console.log("Hola mundo repeat");
```

### Agregar javascript/typescript a HTML
Agregar el archivo `conditional.js` y `repeat.js` al archivo `index.html`

Incluir el siguiente contenido antes de la etiqueta `</body>` en el archivo `index.html`

```html title="index.html"
  <script src="conditional.js"></script>
  <script src="repeat.js"></script>
```

### Probar el resultado del algoritmo

:::note
Abrir el archivo `index.html` en **google chrome**
:::

## Entregable 2

### Etiqueta para mostrar datos
Agregar en `index.html` debajo de la etiqueta `h1` una etiqueta para mostrar datos

Agregar una etiqueta `h3` con un **atributo** `id` con el **valor** de `out-salida`

```html title="index.html"
<h3 id="out-salida">0</h3>
```
### Etiqueta para insertar datos

Agregar una etiqueta `input` con un **atributo** `id` con el **valor** de `inp-one`

```html title="index.html"
<input type="text" id="inp-one" placeholder="Ingrese datos">
```

Agregar una etiqueta `input` con un **atributo** `id` con el **valor** de `inp-two`

```html title="index.html"
<input type="text" id="inp-two" placeholder="Ingrese datos">
```

### Etiqueta para procesar datos

Agregar una etiqueta `button` con un **atributo** `id` con el **valor** de `btn-conditional`

```html title="index.html"
<button id="btn-conditional">
  Procesar
</button>
```

## Entregable 3

Agregar los siguientes contenidos en el archivo `conditional.js`

### Declarar las siguientes variables globales
```js title="conditional.js"
let parametroOne = "";
let parametroTwo = "";
```

### Obtener referencia a las etiquetas HTML
```js title="conditional.js" showLineNumbers
const outSalida = document.getElementById("out-salida");

const inpOne = document.getElementById("inp-one");
const inpTwo = document.getElementById("inp-two");

const btnConditional = document.getElementById("btn-conditional");
```

### Crear una funcion para procesar datos
```js title="conditional.js"
function calcularEdad(anioNacimiento){
    return 2026 - anioNacimiento;
}
```

### Estructura de un listener
```js del="click" "(evt) => { }" ins="btnConditional"
btnConditional.addEventListener("click", (evt) => { } );
```
- **btnConditional** -> Etiqueta HTML a la que se le va a agregar el listener
- **click** -> Indica el tipo de evento a escuchar
- **(evt) => { }** -> Funcion a ejecutar cuando se detecta el evento

### Agregar un listener a una etiqueta
```js title="conditional.js" showLineNumbers
btnConditional.addEventListener("click", (evt) => {
  parametroOne = Number(inpOne.value);
  const edad = calcularEdad(parametroOne);
  outSalida.textContent = String(edad);
});
```

- **inpOne.value** obtiene el valor de la etiqueta input con el atributo `id` igual a `inp-one`
- **Number(inpOne.value)** convierte el valor de **inpOne.value** a numero
- **calcularEdad(parametroOne)** llama a la funcion `calcularEdad` con el valor del parametro `parametroOne`
- **String(edad)** convierte el valor de **edad** a texto/String
- **outSalida.textContent** muestra el valor de **edad** en la etiqueta `outSalida` con el atributo `id` igual a `out-salida`

### Prueba del algoritmo
:::note
Abrir el archivo `index.html` en **google chrome**, _al presionar el boton debe mostrar el valor calculado_
:::

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
