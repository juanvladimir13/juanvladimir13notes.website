---
title: '3. Conexion a base de datos'
description: 'Generar codigo a partir de la base de datos'
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

