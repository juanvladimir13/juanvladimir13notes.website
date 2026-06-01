---
title: 2. Comandos SQLite
description: Ejercicios de DDL Y DML
---

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

Consultar estructura de una tabla
```bash
pragma table_info(nombre_tabla);
```
