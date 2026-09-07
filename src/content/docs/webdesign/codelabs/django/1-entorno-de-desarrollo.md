---
title: '1. Entorno de desarrollo para Django'
description: 'Configura el entorno de desarrollo para Django: creación y activación de entorno virtual (venv), instalación de paquetes y gestión de dependencias.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '1. Entorno de desarrollo para Django'
  - tag: meta
    attrs:
      property: og:description
      content: 'Configura el entorno de desarrollo para Django: creación y activación de entorno virtual (venv), instalación de paquetes y gestión de dependencias.'
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
      content: '1. Entorno de desarrollo para Django'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Configura el entorno de desarrollo para Django: creación y activación de entorno virtual (venv), instalación de paquetes y gestión de dependencias.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
## Verificar instalacion de python y sqlite

Ejecutar los siguientes comandos en `CMD` o `Git Bash`

```bash
python --version
sqlite3 --version
```

:::danger
En caso de mostrar "command not found" al ejecutar los comandos, volver a la seccion anterior y seguir los pasos necesarios para realizar la instalacion correspondiente.
:::

## Crear el directorio para el proyecto

```bash
mkdir project_name
cd project_name
```

:::note
El nombre del directorio no debe contener espacios ni caracteres especiales.

Utiliza `snake_case` que es una convención de nomenclatura en programación donde las palabras se escriben en minúsculas y se separan entre sí con un guión bajo ( _ ).
:::

### Crear entorno virtual
```bash
python -m venv .venv
```

### Activar entorno virtual
```bash
.venv\Scripts\activate
```

### Instalar dependencias de Django
```bash
python -m pip install Django==5.2
```

### Generar archivo de dependencias
```bash
pip freeze > requirements.txt
```

### Instalar dependencias del proyecto
Solo si se va publicar en un servidor o cambiar de equipo

```bash
pip install -r requirements.txt
```

