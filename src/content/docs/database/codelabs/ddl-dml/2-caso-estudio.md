---
title: 3. Caso de estudio
description: Ejercicios de DDL Y DML
---
## Actividades

- Seleccionar una `base de datos`
- Seleccionar **una tabla sencilla** con `minimo 3 columnas`

Secuencia de comandos sugeridos
```bash
sqlite3 tiktoker.sqlite
.tables
.fullschema
.mode table
```
:::note
Para los siguientes ejercicios se utilizará la tabla `paises`
:::

Ver la estructura de la tabla
```bash
pragma table_info(paises);
```

Resultado de la ejecucion
```bash
+-----+------------+---------+-------+----+
| cid |    name    |  type   |notnull| pk |
+-----+------------+---------+-------+----+
| 0   | id_pais    | INTEGER | 0     | 1  |
| 1   | nombre     | TEXT    | 1     | 0  |
| 2   | codigo_iso | TEXT    | 1     | 0  |
+-----+------------+---------+-------+----+
```
