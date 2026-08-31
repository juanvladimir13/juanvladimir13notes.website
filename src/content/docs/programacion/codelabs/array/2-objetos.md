---
title: 3. Objetos
description: 3. Objetos
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
