---
title: Estructura de control if
description: Ejercicios de estructura de control if
---


## Ejercicios propuestos

## Ejercicio 1

Descuento del 10% para clientes tipo "estudiante" en una compra

:::caution
**Ejemplo:**

_Parametros:_  `monto` = 1000 , `cliente` = "estudiante"  →  _Salida:_ 1900

_Parametros:_  `monto` = 1000 , `cliente` = "normal"  →  _Salida:_ 1000
:::

### Solucion

```javascript showlineNumbers
function descuentoCliente(monto, tipoCliente){
  let montoTotal = 0;
  if (tipoCliente == 'estudiante'){
    montoTotal = monto - (monto * 0.10);
  }
  return montoTotal;
}
```

### Resultado correcto 😎

```js showlineNumbers
const monto = 1000;
const tipoCliente = 'estudiante';

const cliente = descuentoCliente(monto, tipoCliente);
console.log(cliente);
```

```js showlineNumbers
const monto = 1000; 
const tipoCliente = 'normal';

const cliente = descuentoCliente(monto, tipoCliente);
console.log(cliente);
```

## Ejercicio 2

Estado academico de un estudiante segun su nota obtenida

:::caution
**Ejemplo:** 

_Parametros:_  `nota` = 94  →  _Salida:_ Destacado

_Parametros:_  `nota` = 51  →  _Salida:_ Aprobado

_Parametros:_  `nota` = 20  →  _Salida:_ Reprobado
:::

### Solucion
```js showlineNumbers
function estadoAcademico(nota){
  let estado = 'Reprobado';

  if (nota >= 90){
    estado = 'Destacado';
  }

  if (nota >= 51){
    estado = 'Aprobado';
  }

  if (nota < 51) {
    estado = 'Reprobado';
  }
  return estado;
}
```

### Resultado correcto 😎

```js showlineNumbers
const nota = 94;
const estado = estadoAcademico(nota);
console.log(estado);
```

```js showlineNumbers
const nota = 51;
const estado = estadoAcademico(nota);
console.log(estado);
```

```js showlineNumbers
const nota = 20;
const estado = estadoAcademico(nota);
console.log(estado);
```

## Ejercicio 3

Validación de usuario y contraseña para acceso a un sistema

:::caution
**Ejemplo:**

_Parametros:_  `usuario` = "ana" , `password` = "123456"  →  _Salida:_ Acceso concedido

_Parametros:_  `usuario` = "cracker" , `password` = "123456"  →  _Salida:_ Acceso denegado
:::

```js showlineNumbers
function validarUsuario(usuario, password){
  if (usuario == 'admin' && password == '123456'){
    return 'Acceso concedido';
  }
  return 'Acceso denegado';
}
```

### Resultado correcto 😎

```js showlineNumbers
const usuario = 'admin';
const password = '123456';

const acceso = validarUsuario(usuario, password);
console.log(acceso);
```

```js showlineNumbers
const usuario = 'cracker';
const password = '123456';

const acceso = validarUsuario(usuario, password);
console.log(acceso);
```

## Ejercicio 4

Mayor de dos números

:::caution
**Ejemplo:** 

_Parametros:_  `num1` = 5 , `num2` = 10  →  _Salida:_ 10

_Parametros:_  `num1` = 10 , `num2` = 5  →  _Salida:_ 10

_Parametros:_  `num1` = 10 , `num2` = 10  →  _Salida:_ 10
:::


### Solucion
```js showlineNumbers
function mayorDeDosNumeros(num1, num2){
  if (num1 > num2){
    return num1;
  }

  if (num2 > num1){
    return num2;
  }

  return num1;
}
```

#### Resultado correcto 😎

```js showlineNumbers
const num1 = 5;
const num2 = 10;
const mayor = mayorDeDosNumeros(num1, num2);
console.log(mayor);
```

```js showlineNumbers
const num1 = 10;
const num2 = 5;
const mayor = mayorDeDosNumeros(num1, num2);
console.log(mayor);
```

```js showlineNumbers
const num1 = 10;
const num2 = 10;
const mayor = mayorDeDosNumeros(num1, num2);
console.log(mayor);
```

## Ejercicio 5
> Crear una funcion llamada **preparar sopa familiar** que tendra como parametros la cantidad de platos, minutos de coccion, si los minutos de coccion es mayor a 60 minutos mostrar un mensaje de "Ver tiktoks"

### Solucion
```typescript
function preparaSopaFamiliar(
  cantidadPlatos: number,
  minCoccion: number
): void {
  if (minCoccion > 60) {
    console.log('Ver tiktoks');
  }
}
```

### Llamada a la funcion

```typescript
prepararSopaFamiliar(5, 50);
prepararSopaFamiliar(10, 95);
```

## Ejercicio 6
> Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, si el precio del pasaje es menor a 6 Bs mostrar el mensaje de "Aceptar viaje" 


### Solucion
```typescript
function irAlColegio(
  horaIngreso: string,
  precioPasaje: number
): void {
  if (precioPasaje < 6) {
    console.log('Aceptar viaje');
  }
}
```

### Llamada a la funcion

```typescript
irAlColegio('7:30 AM', 4);
irAlColegio('7:30 AM', 6);
```

## Ejercicio 7
> Crear una funcion llamada **comprar moto**, tendra como parametros, la marca de la moto, precio, si la marca de la moto es igual a ACME mostrar el mensaje de "Comprar moto"

### Solucion
```typescript
function comprarMoto(
  marca: string,
  precio: number
): void {
  if (marca == 'ACME') {
    console.log('Comprar moto');
  }
}
```

### Llamada a la funcion

```typescript
comprarMoto('KIA', 11000);
comprarMoto('ACME', 13000);
```

## Ejercicio 8
> Crear una funcion llamada **destruir enemigo**, tendra como parametros el nombre, cantidad de bombas, si la cantidad de bombas es mayor a 10 y el nombre es X mostrar el mensaje de "Enemigo destruido"

### Solucion
```typescript
function destruirEnemigo(
  nombre: string,
  cantidadBombas: number
): void {
  if (cantidadBombas > 10 && nombre == "X"){
    console.log('Enemigo destruido');
  }
}
```

### Llamada a la funcion

```typescript
destruirEnemigo('CEO', 5);
destruirEnemigo('X', 5);
```

## Ejercicio 9
> Crear una funcion llamada **vender producto** tendra de parametros el producto, precio, siEstaVencido, si el precio es mayor a 5 o el producto esta vencido mostrar el mensaje "No comprar producto"

### Solucion
```typescript
function venderProducto(
  producto: string,
  precio: number,
  siEstaVencido: boolean
): void {
  if (precio > 5 || siEstaVencido) {
    console.log('No comprar producto');
  }
}
```

### Llamada a la funcion

```typescript
venderProducto('X', 7, true);
venderProducto('X', 6, false);
```

## Ejercicio 10
> Crear una funcion que se llame **solicitar pedido**, tendra como parametros el precio y cantidad, si el precio es menor a 20 o la cantidad es menor a 2, mostrar el mensaje "El envio tiene costo"

### Solucion
```typescript
function solicitarPedido(
  precio: number,
  cantidad:number
): void {
  if (precio < 20 || cantidad < 2){
    console.log('El envio tiene costo');
  }
}
```

### Llamada a la funcion

```typescript
solicitarPedido(15, 2);
solicitarPedido(20, 1);
```

## Ejercicio 11
> Crear una funcion llamada **solicitar licencia**, tendra como parametros el motivo, carrera, si el nombre de la carrera es igual a Sistemas Informaticos y el motivo es por Salud, mostrar el mensaje de "Licencia aceptada"

### Solucion
```typescript
function solicitarLicencia(
  motivo: string,
  carrera: string
): void {
  if (motivo =="Salud" && carrera=="Sistemas Informaticos"){
    console.log('Licencia aceptada');
  }
}
```

### Llamada a la funcion

```typescript
solicitarLicencia(
  'Salud',
  'Sistemas Informaticos'
);

solicitarLicencia(
  'Olimpiadas',
  'Sistemas Informaticos'
);
```

## Ejercicio 12
Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, monto de dinero para el recreo

* Si el precio del pasaje es menor a 6 mostrar el mensaje de "Aceptar viaje", si el monto del recreo es menor a 3 mostrar el mensaje de "Llevar fruta"
* El valor de retorno sera el monto total utilizado en el precio del pasaje mas el monto del recreo

### Solucion
```typescript
function irAlColegio(
  horaIngreso: string,
  precioPasaje: number,
  montoRecreo: number
): number {
  if (precioPasaje < 6) {
    console.log('Aceptar viaje');
  }
  
  if (montoRecreo < 3) {
    console.log('Llevar fruta');
  }
  
  return precioPasaje + montoRecreo;
}
```

### Llamada a la funcion

```typescript
const res1 = irAlColegio('7:30 AM', 4, 5);
console.log(res1);
const res2 = irAlColegio('7:30 AM', 6, 3);
console.log(res2);
```

## Ejercicio 13
Crear una funcion llamada **comprar moto**, tendra como parametros, la marca de la moto y precio

* Si la marca de la moto es igual a ACME y el precio es menor a 11000, mostrar el mensaje de "Comprar moto"
* El valor de retorno sera el precio multiplicado por el impuesto de 0.13

### Solucion
```typescript
function comprarMoto(
  marca: string,
  precio: number
): number {
  if (marca == 'ACME' && precio < 11000) {
    console.log('Comprar moto');
  }
  
  return precio * 0.13;
}
```

### Llamada a la funcion

```typescript
const res1 = comprarMoto('KIA', 11000);
console.log(res1);
const res2 = comprarMoto('ACME', 13000);
console.log(res2);
```

## Ejercicio 14
Crear una funcion que se llame **solicitar pedido**, tendra como parametros el precio, cantidad, nombre del producto

* Si el precio es menor a 20 o la cantidad es menor a 2, mostrar el mensaje "El envio tiene costo", si el nombre del producto es igual a "Pollo", mostrar el mensaje de "Incluir mayonesa y aji" 
* El valor de retorno sera el monto total, el monto total es la multiplicacion de el precio por la cantidad

### Solucion
```typescript
function solicitarPedido(
  precio: number,
  cantidad:number,
  nombreProducto: string
): number {
  if (precio < 20 || cantidad < 2){
    console.log('El envio tiene costo');
  }
  
  if (nombreProducto == 'Pollo'){
    console.log('Incluir mayonesa y aji');
  }
  
  return precio * cantidad;
}
```

### Llamada a la funcion
```typescript
const res1 = solicitarPedido(15, 2, 'Pollo');
console.log(res1);
const res2 = solicitarPedido(20, 1, 'Coca Cola');
console.log(res2);
```

## Ejercicio 15

Crear una funcion llamada **preparar sopa familiar** que tendra como parametros el nombre de la sopa, cantidad de platos, minutos de coccion, el valor de retorno sera la cantidad de minutos en el preparado 

### Solucion
```typescript
function preparaSopaFamiliar(
  nombre: string,
  cantidadPlatos: number,
  minCoccion: number
): number {
  return 75;
}
```

### Llamada a la funcion

```typescript
const res = prepararSopaFamiliar(
  'Sopa de mani', 7, 75
);
console.log(res);
```

## Ejercicio 16

Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, direccion de colegio, el valor de retorno sera un boolean 


### Solucion
```typescript
function irAlColegio(
  horaIngreso: string,
  precioPasaje: number,
  direccion: string
): boolean {
  return false;
}
```

### Llamada a la funcion

```typescript
const res = irAlColegio(
  '7:30 AM', 4, 'Av Principal'
);
console.log(res);
```

## Ejercicio 17
Crear una funcion llamada **comprar moto**, tendra como parametros, la marca de la moto, precio, modelo, fecha de compra, el valor de retorno sera el monto total de la compra

### Solucion
```typescript
function comprarMoto(
  marca: string,
  precio: number,
  modelo: string,
  fecha: string
): number {
  return 11000;
}
```

### Llamada a la funcion

```typescript
const res = comprarMoto(
  'KIA', 11000, 'N1', '06-ago'
);
console.log(res);
```

## Ejercicio 18

Crear una funcion llamada **destruir enemigo**, tendra como parametros el nombre del edificio, cantidad de bombas, fecha, el valor de retorno mensaje de "destruido"

### Solucion
```typescript
function destruirEnemigo(
  nombreEdificio: string,
  cantidadBombas: number,
  fecha: string
): string {
  return "destruido";
}
```

### Llamada a la funcion

```typescript
const res = destruirEnemigo(
  'CAO', 13, '06-ago'
);
console.log(res);
```

## Ejercicio 19
Crear una funcion llamada **vender producto** tendra de parametros el producto, precio, estaVencido y  el valor de retorno sera un boolean

### Solucion
```typescript
function venderProducto(
  nombreProducto: string,
  precio: number,
  estaVencido: boolean
): boolean {
  return true;
}
```

### Llamada a la funcion

```typescript
const res = venderProducto(
  'Fresa con crema', 10, false 
);
console.log(res);
```

## Ejercicio 20
Crear una funcion que se llame **solicitar pedido**, tendra como parametros el nombre del producto, precio, hora del pedido y cantidad, el valor de retorno sera el monto total

### Solucion
```typescript
function solicitarPedido(
  producto: string,
  precio: number,
  horaPedido: string,
  cantidad:number
): number {
  return precio * cantidad;
}
```

### Llamada a la funcion

```typescript
const res = solicitarPedido(
  'Pollo', 15, '8:00 PM', 2
);
console.log(res);
```

## Ejercicio 21
Crear una funcion que se llame **guardar archivo** tendra como parametros el nombre de archivo, tamaño, fecha y el valor de retorno sera un boolean

### Solucion
```typescript
function guardarArchivo(
  nombreArchivo: string,
  tamanio: number,
  fecha: string
): boolean {
  return false;
}
```

### Llamada a la funcion

```typescript
const res = guardarArchivo(
  'examen.txt', 5, '06-ago'
);
console.log(res);
```

## Ejercicio 22
Crear una funcion llamada **funcion vacia** sin valor de retorno y con un parametro de tipo texto y un parametro de tipo boolean

### Solucion
```typescript
function funcionVacia(
  parametor0: string,
  parametro1: boolean
): void {

}
```

### Llamada a la funcion

```typescript
funcionVacia('Parameto0', true);
```

### Ejercicio 23
Crear una funcion llamada **solicitar licencia**, tendra como parametros el nombre del estudiante, motivo, fecha, carrera y el valor de retorno sera un texto si fue aceptada o no

### Solucion
```typescript
function solicitarLicencia(
  estudiante: string,
  motivo: string,
  fecha: string,
  carrera: string
): string {
	return "Aceptada";
}
```

### Llamada a la funcion

```typescript
const res = solicitarLicencia(
  'Ana', 
  'Salud',
  '06-ago',
  'Sistemas Informaticos'
);
console.log(res);
```
