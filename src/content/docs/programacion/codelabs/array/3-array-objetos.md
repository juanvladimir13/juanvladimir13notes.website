---
title: 4. Array de objetos
description: 4. Array de objetos
---

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

### Bucle for...in
```javascript
for (const key in users) {
  console.log(users[key]);
}
