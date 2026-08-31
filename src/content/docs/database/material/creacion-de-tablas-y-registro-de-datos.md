---
title: 'Creacion de tablas y registro de datos'
description: 'Guía paso a paso sobre creación de tablas con restricciones de integridad, inserción de registros y consultas SQL.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Creacion de tablas y registro de datos'
  - tag: meta
    attrs:
      property: og:description
      content: 'Guía paso a paso sobre creación de tablas con restricciones de integridad, inserción de registros y consultas SQL.'
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
      content: 'Creacion de tablas y registro de datos'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Guía paso a paso sobre creación de tablas con restricciones de integridad, inserción de registros y consultas SQL.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

1. Presionar la tecla `windows`
2. Escribir `git bash` y presionar `enter`
3. Crear una carpeta para la base de datos `mkdir practica_db`
4. Crear la base de datos `sqlite3 sindicato_transporte.db`

## Tabla autobus
### Creacion de la tabla
```sql
create table autobus (
  id int not null,
  modelo varchar(10) not null,
  placa varchar(9) not null,
  unique(placa),
  primary key(id)
);
```

### Insercion de datos
**Crear datos** en la tabla `autobus` _(con **todos** los datos de la columna)_
```sql
insert into autobus 
values(1,'LEITO','ABC 123');
```

**Crear datos** en la tabla `autobus` _(con **algunos** datos de la columna)_
```sql
insert into autobus (placa, modelo, id) 
values ('ABC 456', 'VOLVO',3);
```

### Visualizacion de datos
Mostrar **todos** los _datos y columnas_ de la tabla `autobus`
```sql
select * 
from autobus;
```

## Tabla asiento
### Creacion de la tabla
```sql
create table asiento (
  id int not null,
  numero varchar(2) not null,
  precio int not null default 20,
  autobus_id int not null,
  primary (id, autobus_id),
  unique(numero, autobus_id),
  foreign key(autobus_id) references autobus(id)
);
```

### Insercion de datos
**Crear datos** en la tabla `asiento` _(con **todos** los datos de la columna)_
```sql
insert into asiento 
values (1, '12', 50, 1);
```

**Crear datos** en la tabla `asiento` _(con **algunos** datos de la columna)_
```sql
insert into asiento (id, numero,autobus_id) 
values (2,'5',1);
```

### Visualizacion de datos
Mostrar **todos** los _datos y columnas_ de la tabla `asiento`
```sql
select * 
from asiento;
```

Mostrar los datos de **algunas** _columnas_  de la tabla `asiento`
```sql
select precio, numero 
from asiento;
```

[Ver videos en youtube](https://www.youtube.com/playlist?list=PLJGxuT2YtlhjUUuADW4b66gjJ1wX_Zkla)
