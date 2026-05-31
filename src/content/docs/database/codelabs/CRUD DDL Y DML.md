---
title: Ejercicios de DDL Y DML
description: Ejercicios de DDL Y DML
---
## Comandos de administracion del SGBD sqlite

```bash title="Ingresar a la base de datos"
sqlite3 tiktoker.sqlite
```

```bash title="Ver tablas existentes"
.tables
```

```bash title="Ver estructura de la base de datos"
.fullschema
```

Modos de visualizacion de datos: `table`, `line`, `csv`
```bash title="Modificar modo de visualizacion de datos"
.mode table
```

```bash title="Consultar estructura de una tabla"
pragma table_info(nombre_tabla);
```
## Preparar el entorno

- Seleccionar una `base de datos`
- Seleccionar **una tabla sencilla** con `minimo 3 columnas`

```bash title="Secuencia de comandos"
sqlite3 tiktoker.sqlite
.tables
.fullschema
.mode table
```

- Para los siguientes ejercicios se utilizará la tabla `paises`

```bash title="Verificar la estructura de la tabla"
pragma table_info(paises);
```

```bash title="Resultado de la ejecucion"
+-----+------------+---------+-------+----+
| cid |    name    |  type   |notnull| pk |
+-----+------------+---------+-------+----+
| 0   | id_pais    | INTEGER | 0     | 1  |
| 1   | nombre     | TEXT    | 1     | 0  |
| 2   | codigo_iso | TEXT    | 1     | 0  |
+-----+------------+---------+-------+----+
```

## Ejercicios de DDL

### SELECT

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

### INSERT
Insertar **un registro** en la tabla `paises` asignando **valor en todas sus columnas**

```sql title="ddl-insert1.sql"
INSERT INTO paises (id_pais, nombre, codigo_iso)
VALUES (null, 'Colombia', 'CO');
```

Insertar **varios registros** de una sola vez, asignando **valor en todas sus columnas** que no permiten `valores nulos`

```sql title="ddl-insert2.sql"
INSERT INTO paises (id_pais, nombre, codigo_iso) 
VALUES (null, 'Mexico', 'MX'), 
(null, 'Argentina', 'AR'), 
(null, 'Peru', 'PE');
```

### UPDATE
Actualizar un registro de la tabla `paises`

**Buscar el registro a actualizar**, se debe buscar la `llave primaria` del registro, ejemplo: Buscar el registro del pais de **Colombia**

```sql
SELECT * 
FROM paises;
```

```bash title="Resultado de la ejecucion"
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 113    | Colombia   | CO         |
| 2      | Mexico     | MX         |
+--------+------------+------------+
```

Seleccionar `dos columnas` para modificar sus valores, en este caso se va a modificar el `codigo_iso` y `nombre`

```sql title="ddl-update.sql"
UPDATE paises 
SET nombre = 'Colombina', codigo_iso = 'OO' 
WHERE id_pais = 113;
```

Verificar el registro actualizado

```sql
SELECT * 
FROM paises;
```

```bash title="Resultado de la ejecucion"
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

```bash title="Resultado de la ejecucion"
+--------+------------+------------+
| id_pais|   nombre   | codigo_iso |
+--------+------------+------------+
| 113    | Colombina  | CO         |
| 2      | Mexico     | MX         |
+--------+------------+------------+
```

```sql title="ddl-delete.sql"
DELETE FROM paises 
WHERE id_pais = 2;
```

## Ejercicios de DML

### ALTER

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

### CREATE

#### Tipos de dato de sqlite

| Tipo | Descripcion | Ejemplo |
|------|-------------|--------|
| INTEGER | Numeros enteros | 1, 2, 3, 4, 5 |
| REAL | Numeros con decimales | 1.0, 2.0, 3.0, 4.0, 5.0 |
| VARCHAR(n) | Texto de longitud maxima **n** | "Hola mundo" |
| TEXT | Texto de longitud indefinida | "Hola mundo" |
| BOOLEAN | Booleano | true, false |
| DATE | Fecha | 2022-01-01 |
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

### Vincular tablas utilizando foreign key

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

### Insertar registros en las tablas persona y celular

- Insertar datos en las columnas que **no permiten valores nulos**

## Recursos

[Ver web](https://juanvladimir13.web.app/bth/database/)
