---
title: 5. Retos
description: Estructuras de control condicionales y repetitiva
---

## Ejercicios propuestos

### Estructura de control condicional

1. Descuento del 10% para clientes tipo "estudiante" en una compra
:::caution
**Ejemplo:**

_Entrada:_  `monto` = 1000 , `cliente` = "estudiante"  →  _Salida:_ 1900

_Entrada:_  `monto` = 1000 , `cliente` = "normal"  →  _Salida:_ 1000
:::

```javascript
function descuentoCliente(monto, tipoCliente){
  let montoTotal = 0;
  if (tipoCliente == 'estudiante'){
    montoTotal = monto - (monto * 0.10);
  }
  return montoTotal;
}
```

2. Estado academico de un estudiante
:::caution
**Ejemplo:** 

_Entrada:_  `nota` = 94  →  _Salida:_ Destacado

_Entrada:_  `nota` = 51  →  _Salida:_ Aprobado

_Entrada:_  `nota` = 20  →  _Salida:_ Reprobado
:::

3. Validación de acceso a un sistema
:::caution
**Ejemplo:**

_Entrada:_  `usuario` = "ana" , `password` = "123456"  →  _Salida:_ Acceso concedido

_Entrada:_  `usuario` = "cracker" , `password` = "123456"  →  _Salida:_ Acceso denegado
:::

4. Mayor de dos números
:::caution
**Ejemplo:** 

_Entrada:_  `num1` = 5 , `num2` = 10  →  _Salida:_ 10

_Entrada:_  `num1` = 10 , `num2` = 5  →  _Salida:_ 10

_Entrada:_  `num1` = 10 , `num2` = 10  →  _Salida:_ 10
:::

### Estructura de control repetitiva while

1. Contador descendente
2. Calcular la potencia con un numero base y exponente
3. Tabla de multiplicar

### Estructura de control repetitiva for

1. Contador descendente
2. Calcular la potencia con un numero base y exponente
3. Tabla de multiplicar
