---
title: Lenguaje PHP
description: Lenguaje PHP
---

### Tipos de dato

|  Nombre | Ejemplo |
| --- |-- |
| `int` | gestion=2025, edad=15|
| `float` | peso=55.500, latitud=15.541|
| `string`| nombre='Juan', cena='Pollo' |
| `bool`| habilitado=false, top=true |

### Variables
Se puede asignar valores luego de ser definida
```php
$anio = 2025;
$latitud = 34.8514; 
$mes = 'Agosto';
$repobado = false;
```

### Constantes
No pueden cambiar su valor una vez definida
```php
const NOMBRE = 'Juan';
const EDAD = 15;
const PESO = 46.500;
const BUENO = false;
```

::: error
En los siguientes ejemplos se producirán errores porque se declara una **constante** y luego se intenta cambiar su valor, lo cual no está permitido
:::

```typescript
const NOMBRE = 'Ana';
NOMBRE = 'Anita';

const NOTA_FINAL = 95;
NOTA_FINAL = 100;
```

::: success
Para corregir el error, se debe evitar utilizar la palabra `const` para variables que cambian de valor durante el algoritmo
:::

### Estructura de una funcion

**Nombre**: Este nombre debe ser descriptivo para indicar qué hace la función.

**Parámetros**: Son cero, uno o más valores de entrada, que la función utiliza para realizar su tarea.

**Sentencias/Bloque de codigo**: Es el conjunto de instrucciones que se ejecutan cuando la función es llamada.

**Valor de retorno**: Valor como resultado de la tarea.

**Llamada a la función**: Para usar una función, se "llama" por su **nombre** seguido de paréntesis. Si la función requiere parámetros, estos se colocan dentro de los paréntesis.

### Declaracion de funciones
Funcion con **valor de retorno** `int`

```php
function sumar(
  int $numX,
  int $numY
): int { 
  return 0; 
}
```

Funcion con **valor de retorno** `float`

```php
function sumarDecimales(
  float $numX,
  float $numY
): float { 
  return 0.99; 
}
```

Funcion con **valor de retorno** `string`

```php
function enviarSaludo(
  string $usuario
): string { 
  return 'Hola'; 
}
```

Funcion con **valor de retorno** `bool`

```php
function registrarUsuario(
  string $persona
): bool { 
  return false; 
}
```

Funcion con **valor de retorno** `void`

```php
function destruirEnemigo(
  int $cantidadBombas
): void { 

}
```

[Ejercicios de examen](https://bthsanjulian.website:8021/index.php/s/6WZASF2G3KafbXp)