---
title: 4. Ejercicios de DDL
description: Ejercicios de DDL Y DML
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
