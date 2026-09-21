---
title: 'Creacion de archivos y directorios'
description: 'Comandos de terminal indispensables (mkdir, touch, cd, ls) para crear y gestionar proyectos de desarrollo web.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Creacion de archivos y directorios'
  - tag: meta
    attrs:
      property: og:description
      content: 'Comandos de terminal indispensables (mkdir, touch, cd, ls) para crear y gestionar proyectos de desarrollo web.'
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
      content: 'Creacion de archivos y directorios'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Comandos de terminal indispensables (mkdir, touch, cd, ls) para crear y gestionar proyectos de desarrollo web.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Ingresar a la consola de comandos (CMD)

- Presionar la tecla `Windows`
- Escribir `git bash` y presionar `Enter`

### Crear una carpeta

Este comando crea una carpeta `estudiante` en el directorio actual

```bash
mkdir estudiante
```

:::tip
El comando se ejecuta sin mostrar mensajes en pantalla
:::

:::danger
Si la carpeta `estudiante` ya existe, se mostrará un mensaje de error
:::

### Acceder a una carpeta

Permite ingresar a la carpeta `estudiante`

```bash
cd estudiante
```
:::tip
El comando se ejecuta sin mostrar mensajes en pantalla
:::

:::danger
Si el nombre de la carpeta está mal escrito o no existe, se mostrará un mensaje de error
:::

### Crear un archivo de texto plano

Crea un archivo vacío con el nombre especificado. Por ejemplo, `nombre-archivo.txt`

```bash
touch nombre-archivo.txt
```

:::tip
El comando se ejecuta sin mostrar mensajes en pantalla
:::

:::danger
Si el archivo ya existe o el comando está mal escrito, se mostrará un mensaje de error
:::

### Listado de archivos y directorios

Muestra un listado de todos los archivos y carpetas en el directorio actual.

```bash
ls
```
[Ejercicios de examen](https://bthsanjulian.website:8021/index.php/s/YwMtCyxPgnR9p5m)
