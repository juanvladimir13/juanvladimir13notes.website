---
title: 4. Funciones
description: Estructuras de control condicionales y repetitiva
---
Agregar los siguientes contenidos en el archivo `conditional.js`

### Variables globales
```js title="conditional.js"
let parametroOne = "";
let parametroTwo = "";
```

### Obtener referencias a las etiquetas HTML
```js title="conditional.js" showLineNumbers
const outSalida = document.getElementById("out-salida");

const inpOne = document.getElementById("inp-one");
const inpTwo = document.getElementById("inp-two");

const btnProcess = document.getElementById("btn-process");
```

### Crear una funcion para procesar datos
```js title="conditional.js"
function calcularEdad(anioNacimiento){
    return 2026 - anioNacimiento;
}
```

### Estructura de un listener
```js del="click" "(evt) => { }" ins="btnProcess"
btnProcess.addEventListener("click", (evt) => { } );
```
- **btnProcess** -> Etiqueta HTML a la que se le va a agregar el listener
- **click** -> Indica el tipo de evento a escuchar
- **(evt) => { }** -> Funcion a ejecutar cuando se detecta el evento

### Agregar un listener a una etiqueta
```js title="conditional.js" showLineNumbers
btnProcess.addEventListener("click", (evt) => {
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
