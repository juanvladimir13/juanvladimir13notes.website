---
title: Ejercicios de CRUD DDL Y DML
description: Ejercicios de CRUD DDL Y DML
---

## Recursos

[Ver web](https://juanvladimir13.web.app/bth/database/)

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

Ver la esctructura de una tabla especifica
```sql
PRAGMA table_info(nombre_tabla);
```
## Preparacion del entorno para ejercicios de DDL y DML

1. Seleccionar una `base de datos`
2. Seleccionar **una tabla sencilla** con `minimo 3 columnas`

```bash
sqlite3 tiktoker.sqlite
.tables
.fullschema
.mode table
```

3. Se decidio utilizar la tabla `paises`
4. Verificar la estructura de la tabla `paises`

```bash
PRAGMA table_info(paises);
```

   4.1. Resultado de la ejecucion

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

### Ejercicio: ddl-select.sql
#### SELECT

1. Visualizar **todas las columnas** de la tabla `paises`

```sql
SELECT * FROM paises;
```

2. Visualizar **columnas especificas** de la tabla `paises`

```sql
SELECT nombre, id_pais FROM paises;
```

### Ejercicio: ddl-insert.sql
#### INSERT
1. Insertar **un registro** en la tabla `paises` asignando **valor en todas sus columnas**

```sql
INSERT INTO paises (id_pais, nombre, codigo_iso)
VALUES (null, 'Colombia', 'CO');
```

2. Insertar **varios registros** de una sola vez, asignando **valor en todas sus columnas** que no permiten `valores nulos`

```sql
INSERT INTO paises (id_pais, nombre, codigo_iso) 
VALUES (null, 'Mexico', 'MX'), 
(null, 'Argentina', 'AR'), 
(null, 'Peru', 'PE');
```

### Ejercicio: ddl-update.sql
#### UPDATE
Actualizar un registro de la tabla `paises`

1. **Buscar el registro a actualizar**, se debe buscar la `llave primaria` del registro, ejemplo: Buscar el registro del pais de **Colombia**

```sql
SELECT * FROM paises;
```

Resultado de la ejecucion:

```bash
+-----+------------+------------+
| id_pais |   nombre   | codigo_iso |
+-----+------------+------------+
| 113   | Colombia   | CO         |
| 2   | Mexico     | MX         |
| 3   | Argentina  | AR         |
| 4   | Peru       | PE         |
+-----+------------+------------+
```

2. Seleccionar `dos columnas` para modificar sus valores, en este caso se va a modificar el `codigo_iso` y `nombre`

```sql
UPDATE paises 
SET nombre = 'Colombina', codigo_iso = 'OO' 
WHERE id_pais = 113;
```

3. Verificar el registro actualizado

```sql
SELECT * FROM paises;
```

   3.1. Resultado de la ejecucion:

```bash
+-----+------------+------------+
| id_pais |   nombre   | codigo_iso |
+-----+------------+------------+
| 2   | Mexico     | MX         |
| 3   | Argentina  | AR         |
| 4   | Peru       | PE         |
| 113   | Colombina   | CO         |
+-----+------------+------------+
```

### Ejercicio: ddl-delete.sql
#### DELETE

1. **Eliminar un registro** de la tabla `paises`, en este caso se eliminara un registro a eleccion, se recomienda buscar primero el registro a eliminar

```sql
SELECT * FROM paises;
```

    1.1 Resultado de la ejecucion

```bash
+-----+------------+------------+
| id_pais |   nombre   | codigo_iso |
+-----+------------+------------+
| 113   | Colombia   | CO         |
| 2   | Mexico     | MX         |
| 3   | Argentina  | AR         |
| 4   | Peru       | PE         |
+-----+------------+------------+
```

```sql
DELETE FROM paises WHERE id_pais = 2;
```

### DML - Data Manipulation Language

#### Ejercicio: dml-alter.sql

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