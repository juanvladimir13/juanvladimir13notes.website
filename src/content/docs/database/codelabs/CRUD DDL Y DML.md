---
title: Ejercicios de DDL Y DML
description: Ejercicios de DDL Y DML
---
## Comandos de administracion del SGBD sqlite

Ingresar a la base de datos: 

```bash
sqlite3 tiktoker.sqlite
```

Verificar existencia de tablas:

```bash
.tables
```

Ver la esctructura de la base de datos
```bash
.fullschema
```

Modificar modo de visualizacion de datos: `table`, `line`, `csv`
```bash
.mode table
```

Ver la esctructura de una tabla especifica
```sql
PRAGMA table_info(nombre_tabla);
```
## Preparacion del entorno para resolver los ejercicios

- Seleccionar una `base de datos`
- Seleccionar **una tabla sencilla** con `minimo 3 columnas`

```bash
sqlite3 tiktoker.sqlite
.tables
.fullschema
.mode table
```

- Para los ejercicios se utiliza la tabla `paises`
- Verificar la estructura de la tabla `paises`

```bash
PRAGMA table_info(paises);
```

- Resultado de la ejecucion de `PRAGMA table_info(paises);`

```bash
+-----+------------+---------+---------+------------+----+
| cid |    name    |  type   | notnull | dflt_value | pk |
+-----+------------+---------+---------+------------+----+
| 0   | id_pais    | INTEGER | 0       |            | 1  |
| 1   | nombre     | TEXT    | 1       |            | 0  |
| 2   | codigo_iso | TEXT    | 1       |            | 0  |
+-----+------------+---------+---------+------------+----+
```

## Ejercicios de DDL

### SELECT

Visualizar **todas las columnas** de la tabla `paises`

```sql
SELECT * FROM paises;
```

Visualizar **columnas especificas** de la tabla `paises`

```sql
SELECT nombre, id_pais FROM paises;
```

### INSERT
Insertar **un registro** en la tabla `paises` asignando **valor en todas sus columnas**

```sql
INSERT INTO paises (id_pais, nombre, codigo_iso)
VALUES (null, 'Colombia', 'CO');
```

Insertar **varios registros** de una sola vez, asignando **valor en todas sus columnas** que no permiten `valores nulos`

```sql
INSERT INTO paises (id_pais, nombre, codigo_iso) 
VALUES (null, 'Mexico', 'MX'), 
(null, 'Argentina', 'AR'), 
(null, 'Peru', 'PE');
```

### UPDATE
Actualizar un registro de la tabla `paises`

**Buscar el registro a actualizar**, se debe buscar la `llave primaria` del registro, ejemplo: Buscar el registro del pais de **Colombia**

```sql
SELECT * FROM paises;
```

Resultado de la ejecucion:

```bash
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 113    | Colombia   | CO         |
| 2      | Mexico     | MX         |
+--------+------------+------------+
```

Seleccionar `dos columnas` para modificar sus valores, en este caso se va a modificar el `codigo_iso` y `nombre`

```sql
UPDATE paises 
SET nombre = 'Colombina', codigo_iso = 'OO' 
WHERE id_pais = 113;
```

Verificar el registro actualizado

```sql
SELECT * 
FROM paises;
```

Resultado de la ejecucion:

```bash
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 2      | Mexico     | MX         |
| 113    | Colombina  | CO         |
+--------+------------+------------+
```

### DELETE

**Eliminar un registro** de la tabla `paises`, en este caso se eliminara un registro a eleccion, se recomienda buscar primero el registro a eliminar

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

```sql
DELETE FROM paises 
WHERE id_pais = 2;
```

## Ejercicios de DML

### ALTER

**Agregar una columna**, analizar la `tabla` paises y agregar una columna relevante

```sql
alter table paises
add moneda varchar(3);
```

```sql
alter table paises
add poblacion int;
```

```sql
alter table paises
add fundacion date;
```

```sql
alter table paises
add acceso_maritimo boolean;
```

## Recursos

[Ver web](https://juanvladimir13.web.app/bth/database/)
