---
title: '3. Conexion a base de datos'
description: 'Conecta una base de datos SQLite en Django, realiza ingeniería inversa con inspectdb, ejecuta migraciones y habilita el acceso al panel de administración.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '3. Conexion a base de datos'
  - tag: meta
    attrs:
      property: og:description
      content: 'Conecta una base de datos SQLite en Django, realiza ingeniería inversa con inspectdb, ejecuta migraciones y habilita el acceso al panel de administración.'
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
      content: '3. Conexion a base de datos'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Conecta una base de datos SQLite en Django, realiza ingeniería inversa con inspectdb, ejecuta migraciones y habilita el acceso al panel de administración.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Preparacion de la base de datos

:::note
**Nota:** Copiar el archivo de la base de datos sqlite al directorio principal del proyecto, **renombar el archivo de la base de datos** a `db.sqlite3`
:::

## Generar codigo a partir de la base de datos

```bash
python manage.py inspectdb > modulo_nombre/models.py
```

:::note
**Nota:** Reemplazar **"modulo_nombre"** por el nombre del modulo creado en pasos anteriores
:::

### Verificar que el proyecto no tenga errores
```bash
python manage.py check
```

### Crear la primera migracion
```bash
python manage.py makemigrations
```

### Migrar modelos a base de datos
```bash
python manage.py migrate
```

## Activar panel de administracion
```bash
python manage.py createsuperuser
```

### Iniciar servidor

```bash
python manage.py runserver
```

Abrir en un navegador web el enlace [http://localhost:8000/admin](http://localhost:8000/admin)

