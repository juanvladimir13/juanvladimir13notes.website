---
title: 'Funciones de PHP'
description: 'Modelo de examen sobre declaración de funciones en PHP, tipado de parámetros y valores de retorno.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Funciones de PHP'
  - tag: meta
    attrs:
      property: og:description
      content: 'Modelo de examen sobre declaración de funciones en PHP, tipado de parámetros y valores de retorno.'
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
      content: 'Funciones de PHP'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Modelo de examen sobre declaración de funciones en PHP, tipado de parámetros y valores de retorno.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
### Ejercicio 1
> Crear una funcion llamada **preparar sopa familiar** que tendra como parametros el nombre de la sopa, cantidad de platos, minutos de coccion, el valor de retorno sera la cantidad de minutos en el preparado 

### Solucion
```php
function prepararSopaFamiliar(
  string $nombre,
  int $cantidadPlatos,
  int $minCoccion
): int {
    return 75;
}
```

### Llamada a la funcion

```php
$res = prepararSopaFamiliar(
  'Sopa de mani', 7, 75
);
var_dump($res);
```

### Ejercicio 2
> Crear una funcion llamada **ir al colegio**, tendra como parametros la hora de ingreso, precio de pasaje, direccion de colegio, el valor de retorno sera un boolean 


### Solucion
```php
function irAlColegio(
  string $horaIngreso,
  int $precioPasaje,
  string $direccion
): bool {
    return false;
}
```

### Llamada a la funcion

```php
$res = irAlColegio(
  '7:30 AM', 4, 'Av Principal'
);
var_dump($res);
```

### Ejercicio 3
> Crear una funcion llamada **comprar moto**, tendra como parametros, la marca de la moto, precio, modelo, fecha de compra, el valor de retorno sera el monto total de la compra

### Solucion
```php
function comprarMoto(
  string $marca, 
  int $precio, 
  string $modelo, 
  string $fecha
): int {
    return 11000;
}
```

### Llamada a la funcion

```php
$res = comprarMoto(
  'KIA', 11000, 'N1', '06-ago'
);
var_dump($res);
```

### Ejercicio 4
> Crear una funcion llamada **destruir enemigo**, tendra como parametros el nombre del edificio, cantidad de bombas, fecha, el valor de retorno mensaje de "destruido"

### Solucion
```php
function destruirEnemigo(
  string $nombreEdificio,
  int $cantidadBombas,
  string $fecha
): string {
    return "destruido";
}
```

### Llamada a la funcion

```php
$res = destruirEnemigo(
  'CAO', 13, '06-ago'
);
var_dump($res);
```

### Ejercicio 5
> Crear una funcion llamada **vender producto** tendra de parametros el producto, precio, estaVencido y  el valor de retorno sera un boolean

### Solucion
```php
function venderProducto(
  string $nombreProducto,
  int $precio,
  bool $estaVencido
): bool {
    return true;
}
```

### Llamada a la funcion

```php
$res = venderProducto(
  'Fresa con crema', 10, false 
);
var_dump($res);
```

### Ejercicio 6
> Crear una funcion que se llame *solicitar pedido*, tendra como parametros el nombre del producto, precio, hora del pedido y cantidad, el valor de retorno sera el monto total

### Solucion
```php
function solicitarPedido(
  string $producto, 
  int $precio,
  string $horaPedido,
  int $cantidad
): int {
    return $precio * $cantidad;
}
```
### Llamada a la funcion

```php
$res = solicitarPedido(
  'Pollo', 15, '8:00 PM', 2
);
var_dump($res);
```

### Ejercicio 7
> Crear una funcion que se llame **guardar archivo** tendra como parametros el nombre de archivo, tamaño, fecha y el valor de retorno sera un boolean

### Solucion
```php
function guardarArchivo(
  string $nombreArchivo,
  int $tamanio,
  string $fecha
): bool {
    return false;
}
```

### Llamada a la funcion

```php
$res = guardarArchivo(
  'examen.txt', 5, '06-ago'
);
var_dump($res);
```

### Ejercicio 8
> Crear una funcion llamada *funcion vacia* sin valor de retorno y con un parametro de tipo texto y un parametro de tipo boolean

### Solucion
```php
function funcionVacia(
  string $parametro0,
  bool $parametro1
): void {

}
```

### Llamada a la funcion

```php
funcionVacia('Parameto0', true);
```

### Ejercicio 9
> Crear una funcion llamada **solicitar licencia**, tendra como parametros el nombre del estudiante, motivo, fecha, carrera y el valor de retorno sera un texto si fue aceptada o no

### Solucion
```php
function solicitarLicencia(
  string $estudiante,
  string $motivo,
  string $fecha,
  string $carrera
): string {
    return "Aceptada";
}
```

### Llamada a la funcion

```php
$res = solicitarLicencia(
  'Ana', 
  'Salud',
  '06-ago',
  'Sistemas Informaticos'
);
var_dump($res);
```