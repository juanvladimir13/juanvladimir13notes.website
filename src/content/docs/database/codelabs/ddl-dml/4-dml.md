---
title: '5. Ejercicios de DML'
description: 'Aprende a modificar y definir estructuras de tablas con ALTER TABLE, CREATE TABLE, tipos de datos y Foreign Keys en SQLite.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '5. Ejercicios de DML'
  - tag: meta
    attrs:
      property: og:description
      content: 'Aprende a modificar y definir estructuras de tablas con ALTER TABLE, CREATE TABLE, tipos de datos y Foreign Keys en SQLite.'
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
      content: '5. Ejercicios de DML'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Aprende a modificar y definir estructuras de tablas con ALTER TABLE, CREATE TABLE, tipos de datos y Foreign Keys en SQLite.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
## ALTER

**Agregar una columna**, analizar la tabla `paises` y **agregar una columna relevante**

```sql title="dml-alter.sql"
alter table paises
add moneda varchar(3);
```

```sql title="dml-alter.sql"
alter table paises
add poblacion int;
```

```sql title="dml-alter.sql"
alter table paises
add fundacion date;
```

```sql title="dml-alter.sql"
alter table paises
add acceso_maritimo boolean;
```

## CREATE

### Tipos de datos en SQLite

| Tipo | Descripcion | Ejemplo |
|------|-------------|--------|
| INTEGER | Numeros enteros | 1, 2, 3, 4, 5 |
| REAL | Numeros con decimales | 1.7, 2.2, 3.1, 4.8, 5.9 |
| VARCHAR(n) | Texto de longitud maxima **n** | "Hola mundo" |
| TEXT | Texto de longitud indefinida | "Hola mundo" |
| BOOLEAN | Booleano | true, false |
| DATE | Fecha | 2022-31-01 |
| TIME | Tiempo | 12:00:00 |
| DATETIME | Fecha y tiempo | 2022-01-01 12:00:00 |
| BLOB | Archivos | BLOB |

### Creacion de una tabla

```sql title="ddl-create.sql"
CREATE TABLE developer (
  id integer primary key autoincrement,
  nombre varchar(100) not null,
  carnet varchar(12) not null unique,
  peso real default 0,
  fecha_nacimiento date,
  es_estudiante boolean default false
);
```

### Enlace de dos tablas

```sql title="ddl-create.sql"
CREATE TABLE celular (
  id integer primary key autoincrement,
  marca varchar(100) not null,
  modelo varchar(100),
  precio real not null,
  fecha_registro datetime default current_timestamp,
  developer_id integer not null,
  FOREIGN KEY (developer_id) REFERENCES developer (id)
);
```

### Practico
- Insertar registros en las tablas `developer` y `celular`
- Insertar datos en las columnas que **no permiten valores nulos**
