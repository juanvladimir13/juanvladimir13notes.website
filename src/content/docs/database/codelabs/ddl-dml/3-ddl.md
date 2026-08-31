---
title: '4. Ejercicios de DDL'
description: 'Guía práctica de consultas y manipulación de datos con SQL: sentencias SELECT, INSERT, UPDATE y DELETE en SQLite.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '4. Ejercicios de DDL'
  - tag: meta
    attrs:
      property: og:description
      content: 'Guía práctica de consultas y manipulación de datos con SQL: sentencias SELECT, INSERT, UPDATE y DELETE en SQLite.'
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
      content: '4. Ejercicios de DDL'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Guía práctica de consultas y manipulación de datos con SQL: sentencias SELECT, INSERT, UPDATE y DELETE en SQLite.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
## SELECT

Visualizar **todas las columnas** de la tabla `paises`

```sql title="ddl-select.sql"
SELECT * 
FROM paises;
```

Visualizar **columnas especificas** de la tabla `paises`

```sql title="ddl-select.sql"
SELECT nombre, id_pais 
FROM paises;
```

## INSERT
Insertar **un registro** en la tabla `paises` asignando **valor en todas sus columnas**

```sql title="ddl-insert1.sql" wrap
INSERT INTO paises (id_pais, nombre, codigo_iso)
VALUES (null, 'Colombia', 'CO');
```

Insertar **varios registros** de una sola vez, asignando **valor en todas sus columnas** que no permiten `valores nulos`

```sql title="ddl-insert2.sql" wrap
INSERT INTO paises (id_pais, nombre, codigo_iso) 
VALUES (null, 'Mexico', 'MX'), 
(null, 'Argentina', 'AR'), 
(null, 'Peru', 'PE');
```

## UPDATE
Actualizar un registro de la tabla `paises`

**Buscar el registro** a actualizar

```sql
SELECT * 
FROM paises;
```

Resultado de la busqueda
```bash
+--------+---------+------------+
| id_pais|  nombre | codigo_iso |
+--------+---------+------------+
| 13     | Colombia| CO         |
| 2      | Mexico  | MX         |
+--------+---------+------------+
```

- Seleccionar la **llave primaria** del registro a modificar del resultado de la busqueda
- Seleccionar **dos columnas** para modificar sus valores, en este caso se va a modificar el `codigo_iso` y `nombre`

```sql title="ddl-update.sql" wrap
UPDATE paises 
SET nombre = 'Colombina', codigo_iso = '00' 
WHERE id_pais = 113;
```

Verificar el registro actualizado

```sql
SELECT * 
FROM paises;
```

Resultado de la ejecucion
```bash
+--------+----------+------------+
| id_pais|   nombre | codigo_iso |
+--------+----------+------------+
| 2      | Mexico   | MX         |
| 113    | Colombina| 00         |
+--------+----------+------------+
```

## DELETE

**Buscar el registro** a eliminar, identificar la **llave primaria** del registro

```sql
SELECT *
FROM paises;
```

Resultado de la ejecucion
```bash
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 113    | Colombina  | CO         |
| 2      | Mexico     | MX         |
+--------+------------+------------+
```

Eliminar el registro identificado como `Mexico` mediante su llave primaria `2`

```sql title="ddl-delete.sql"
DELETE FROM paises 
WHERE id_pais = 2;
```

Verificar el registro eliminado
```sql
SELECT *
FROM paises;
```

Resultado de la ejecucion
```bash
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 113    | Colombina  | CO         |
+--------+------------+------------+
```
