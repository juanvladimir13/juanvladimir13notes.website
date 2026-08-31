---
title: '4. Objetos en javascript'
description: 'Aprende la estructura de objetos en JavaScript: propiedades clave-valor, notación de punto y corchetes, y bucles for...of.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '4. Objetos en javascript'
  - tag: meta
    attrs:
      property: og:description
      content: 'Aprende la estructura de objetos en JavaScript: propiedades clave-valor, notación de punto y corchetes, y bucles for...of.'
  - tag: meta
    attrs:
      property: og:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
  - tag: meta
    attrs:
      property: og:image:width
      content: '1200'
  - tag: meta
    attrs:
      property: og:image:height
      content: '630'
  - tag: meta
    attrs:
      property: og:locale
      content: 'es_BO'
  - tag: meta
    attrs:
      property: og:type
      content: 'article'
  - tag: meta
    attrs:
      property: twitter:card
      content: 'summary_large_image'
  - tag: meta
    attrs:
      property: twitter:title
      content: '4. Objetos en javascript'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Aprende la estructura de objetos en JavaScript: propiedades clave-valor, notación de punto y corchetes, y bucles for...of.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## ¿Qué es un objeto?
Un objeto es una colección de **propiedades**, donde cada propiedad tiene un **nombre** (clave) y un **valor**.

## Caracteristicas
- El nombre de la constante debe estar en **singular** porque almacena un solo elemento.
- La propiedad siempre va en **singular**.
- El valor de la propiedad puede ser de cualquier tipo de dato, inclusive otro objeto.
- Los nombres de las propiedades no pueden contener **espacios ni caracteres especiales**.
- Los nombres de las propiedades deben estar escritos en **camelCase**.
- No puede haber coma `,` despues del ultimo elemento.

```javascript
const user = {
  firstName: "Maria",
  lastName: "Jose",
  age: 18,
  activated: false,
};
```

## Acceso a las propiedades
Se accede a las propiedades de un objeto mediante su nombre.

### Notacion de punto
```javascript
const firstName = user.firstName;
console.log(firstName);
```

### Notacion de corchetes
```javascript
const firstName = user["firstName"];
console.log(firstName);
```

## Modificación de propiedades
Se modifica una propiedad de un objeto mediante su nombre y el operador de asignación.

### Notacion de punto
```javascript
user.firstName = "Juan";
user.lastName = "Vladimir";
user.age = 22;
user.activated = true;
```

### Notacion de corchetes
```javascript
user["firstName"] = "Juan";
user["lastName"] = "Vladimir";
user["age"] = 22;
user["activated"] = true;
```

## Array de objetos
Un array de objetos es un array que contiene objetos como elementos.

### Ejemplo de array de objetos:
```javascript
const users = [
  { name: "Maria", age: 18, activated: false },
  { name: "Jose", age: 22, activated: true },
  { name: "Ana", age: 18, activated: false },
];
```

## Recorrido

### Bucle for...of
```javascript
for (const user of users) {
  console.log(user);
}
```
