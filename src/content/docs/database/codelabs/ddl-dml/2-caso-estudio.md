---
title: '3. Caso de estudio'
description: 'Análisis y preparación de un caso de estudio real con la tabla países para practicar sentencias SQL en SQLite.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '3. Caso de estudio'
  - tag: meta
    attrs:
      property: og:description
      content: 'Análisis y preparación de un caso de estudio real con la tabla países para practicar sentencias SQL en SQLite.'
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
      content: '3. Caso de estudio'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Análisis y preparación de un caso de estudio real con la tabla países para practicar sentencias SQL en SQLite.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
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
