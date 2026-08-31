---
title: 2. Caracteristicas de los arrays
description: 2. Caracteristicas de los arrays
---

## ¿Qué es un array?
Un array es una estructura de datos que permite almacenar **múltiples elementos del mismo tipo** bajo un **mismo nombre**, a los cuales se accede mediante un **índice numérico**

## Usos comunes
- Almacenar grandes conjuntos de datos del mismo tipo.
- Implementar algoritmos que requieren acceso rápido a elementos basados en su posición.
- Representar matrices y otras estructuras de datos multidimensionales.

## Caracteristicas
- **Homogeneidad**: Todos los elementos de un array deben ser del mismo tipo de dato.
- **Orden**: Los elementos se almacenan en un orden específico.
- **Tamaño**: Cantidad de elementos
- **Acceso por índice**: Se accede a un elemento de un array mediante su índice, que generalmente **comienza en 0 para el primer elemento**.

## Declaracion de arrays
- El nombre de la constante/variable debe estar en **plural** porque almacena múltiples elementos.
- Se utiliza corchetes `[ ]` para declarar un array y los elementos se separan por comas `,`.

```javascript
const hoobies = ["jugar", "cantar", "estudiar"];
```

Array vacio, sin datos
```javascript
const friends = [ ];
```

## Acceso a los elementos
Se accede a los elementos de un array mediante su índice, que comienza en 0.

```javascript
const hooby0 = hoobies[0];
console.log(hooby0);

const hooby2 = hoobies[2];
console.log(hooby2);
```

:::tip
**hoobies.length** representa la cantidad de elementos del array, es decir, `hoobies.length` es 3. Por lo tanto, el último índice del array es **2**, porque el índice comienza en **0**.
:::

## Recorrido de un array
### Usando un bucle while clásico

```javascript
let i = 0;
while (i < hoobies.length) {
  const item = hoobies[i];
  console.log(item);
  i++;
}
```

### Usando un bucle for clásico

```javascript
for (let i = 0; i < hoobies.length; i++) {
  const item = hoobies[i];
  console.log(item);
}
```



