---
title: Estructura de control if
description: Ejercicios de estructura de control if
---

### Ejercicio 1
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

### Ejercicio 2
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

### Ejercicio 3
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

### Ejercicio 4
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

### Ejercicio 5
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

### Ejercicio 6
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

### Ejercicio 7
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