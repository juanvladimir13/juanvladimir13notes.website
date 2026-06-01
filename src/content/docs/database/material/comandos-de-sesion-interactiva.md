---
title: Comandos de sesion interactiva SQLite
description: Comandos de sesion interactiva
---

## Comandos de Administración
| Comando | Descripcion |
|---|---|
| `.help` | muestra comandos de ayuda|
| `.show` | muestra los valores actuales de configuracion |
| `.quit` | sale del programa|
| `.exit` | sale del programa |

## Comandos de manejo de tablas

| Comando | Descripcion |
|---|---|
| `.tables` | lista los nombres de todas las tablas|
| `.schema TABLE` | muestra las sentencias SQL de creacion de la tabla|
| `PRAGMA table_info(TABLE);` |  muestra la estructura de la tabla |
| `.fullschema` | muestra la sentencia SQL de creacion de toda la base de datos|
| `.stats on` |  activa las estadisticas |
| `.stats off` | desactiva las estadisticas |

Muestran la estructura de la `tabla`,  reemplazar `TABLE` por el nombre de la tabla a utilizar

### Ejemplos

Ingresar a la base de datos
```bash
sqlite3 tiktoker.sqlite
```

Ver tablas existentes
```bash
.tables
```

Ver estructura de la base de datos
```bash
.fullschema
```

Modificar modos de visualizacion de datos: `table`, `line`, `csv`
```bash
.mode table
```

Estructura actual de la tabla
```bash
PRAGMA table_info(TABLE);
```

## Comandos para ver la salida de datos
| Comando | Descripcion |
|---|---|
| `.mode MODE TABLE` | Salida de datos de consulta|
| `MODE` |  table, csv, list, json |

### Ejemplos
Utilizar el modo `line` para **tablas con varias columnas**
```bash
.mode line
```

Utilizar el modo `table` para **tablas con pocas columnas**
```bash
.mode table
```

## Comandos para cargar/ejecutar archivos

| Comando | Descripcion |
|---|---|
|`.import FILE TABLE` | importa datos del archivo a la tabla|
|`.read FILENAME` | ejecuta el archivo que contiene código SQL|

### Ejemplos
:::note
El archivo debe encontrarse en el mismo directorio que la base de datos para evitar utilizar rutas absolutas o relativas
:::

**Ejecuta el codigo SQL que tiene el archivo**, reemplazar `FILENAME` por el nombre de archivo
```bash
.read FILENAME
```

**Importa o carga datos a una tabla desde un archivo** `.csv`, reemplazar `FILENAME` por el nombre de archivo y `TABLE` por el nombre de la tabla, 
```bash
.import FILENAME TABLE
```
