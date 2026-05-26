---
title: Declaracion de funciones
description: Ejercicios de declaracion de funciones
---

### Ejercicio 1
Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, monto de dinero para el recreo

* Si el precio del pasaje es menor a 6 mostrar el mensaje de "Aceptar viaje", si el monto del recreo es menor a 3 mostrar el mensaje de "Llevar fruta"
* El valor de retorno sera el monto total utilizado en el precio del pasaje mas el monto del recreo

#### Solucion
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

### Ejercicio 2
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

### Ejercicio 3
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

### Ejercicio 1
> Crear una funcion llamada **preparar sopa familiar** que tendra como parametros el nombre de la sopa, cantidad de platos, minutos de coccion, el valor de retorno sera la cantidad de minutos en el preparado 

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

### Ejercicio 2
> Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, direccion de colegio, el valor de retorno sera un boolean 


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

### Ejercicio 3
> Crear una funcion llamada **comprar moto**, tendra como parametros, la marca de la moto, precio, modelo, fecha de compra, el valor de retorno sera el monto total de la compra

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

### Ejercicio 4
> Crear una funcion llamada **destruir enemigo**, tendra como parametros el nombre del edificio, cantidad de bombas, fecha, el valor de retorno mensaje de "destruido"

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

### Ejercicio 5
> Crear una funcion llamada **vender producto** tendra de parametros el producto, precio, estaVencido y  el valor de retorno sera un boolean

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

### Ejercicio 6
> Crear una funcion que se llame *solicitar pedido*, tendra como parametros el nombre del producto, precio, hora del pedido y cantidad, el valor de retorno sera el monto total

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

### Ejercicio 7
> Crear una funcion que se llame **guardar archivo** tendra como parametros el nombre de archivo, tamaño, fecha y el valor de retorno sera un boolean

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

### Ejercicio 8
> Crear una funcion llamada *funcion vacia* sin valor de retorno y con un parametro de tipo texto y un parametro de tipo boolean

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

### Ejercicio 9
> Crear una funcion llamada **solicitar licencia**, tendra como parametros el nombre del estudiante, motivo, fecha, carrera y el valor de retorno sera un texto si fue aceptada o no

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