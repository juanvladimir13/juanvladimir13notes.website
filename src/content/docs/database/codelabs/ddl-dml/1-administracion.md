---
title: '2. Comandos SQLite'
description: 'Aprende los comandos esenciales de sesión interactiva en SQLite: .tables, .schema, .mode y creación de bases de datos.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '2. Comandos SQLite'
  - tag: meta
    attrs:
      property: og:description
      content: 'Aprende los comandos esenciales de sesión interactiva en SQLite: .tables, .schema, .mode y creación de bases de datos.'
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
      content: '2. Comandos SQLite'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Aprende los comandos esenciales de sesión interactiva en SQLite: .tables, .schema, .mode y creación de bases de datos.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
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
