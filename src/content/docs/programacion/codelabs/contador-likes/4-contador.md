---
title: 5. Contador de likes
description: Contador con HTML y JS
---
## Implementar la lógica del contador

- Declarar una variable global
- Obtener referencias de las etiquetas **HTML** en **JavaScript**
- Agregar un **listener** para ejecutar la funcion del contador

### Declarar una variable global para el contador

```js title="counter.js"
let contador = 0;
```

### Obtener referencias de las etiquetas HTML

```js title="counter.js"
const outSalida = document.getElementById("salida");
const btnIncrementar = document.getElementById("btn-incrementar");
```

### Agregar un listener a una etiqueta HTML

**Estructura de un listener**
```js del="click" "(evt) => { }" ins="btnIncrementar"
btnIncrementar.addEventListener("click", (evt) => { } );
```

- **btnIncrementar** -> Etiqueta HTML a la que se le va a agregar el listener
- **click** -> Indica el tipo de evento a escuchar
- **(evt) => { }** -> Funcion a ejecutar cuando se detecta el evento

**Agregar el listener a la etiqueta HTML**

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
