---
title: 'Creacion de archivos y carpetas'
description: 'Modelo de examen práctico sobre comandos de consola para creación de estructuras de archivos y carpetas.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Creacion de archivos y carpetas'
  - tag: meta
    attrs:
      property: og:description
      content: 'Modelo de examen práctico sobre comandos de consola para creación de estructuras de archivos y carpetas.'
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
      content: 'Creacion de archivos y carpetas'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Modelo de examen práctico sobre comandos de consola para creación de estructuras de archivos y carpetas.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

### Ejercicio 1
> Crear una carpeta  **examen**
> Crear una carpeta **ejercicios**
> Ingresar a la carpeta **examen**
> Crear un archivo de texto **main.ts**

### Solucion
```bash
mkdir examen
mkdir ejercicios
cd examen
touch main.ts
```

### Ejercicio 2
> Crear una carpeta **templates**
> Crear un archivo **.env**
> Ingresar a la carpeta **templates**
> Crear un archivo **base.html**
> Listar los archivos y directorios

### Solucion
```bash
mkdir templates
touch .env
cd templates
touch base.html
ls
```

### Ejercicio 3
> Crear una carpeta **public**
> Ingresar a la carpeta **public**
> Crear una carpeta **css**
> Crear un archivo **robots.txt**
> Crear una carpeta **js**
> Crear una carpeta **img**
> Listar archivos y directorios

### Solucion
```bash
mkdir public
cd public
mkdir css
touch robots.txt
mkdir js
mkdir img
ls
```

### Ejercicio 4
> Crear una carpeta **src**
> Ingresar a la carpeta **src**
> Crear una carpeta **Models**
> Ingresar a la carpeta **Models**
> Crear un archivo **BaseModel.php**
> Crear una carpeta **Admin**
> Ingresar a la carpeta **Admin**
> Crear un archivo **BaseController.php** en la carpeta **src**

### Solucion
```bash
mkdir src
cd src
mkdir Models
cd Models
touch BaseModel.php
mkdir Admin
cd Admin
cd ../../
touch BaseController.php
```

Estructura final de archivos y carpetas
```
src
├── BaseController.php
└── Models
    ├── Admin
    └── BaseModel.php
```

Explicacion del comando `cd ../../`

Si nos encontramos dentro de la carpeta `Admin`, y se nos solicita crear un archivo dentro de la carpeta `src`, debemos movernos hacia los directorios superiores para acceder a ella.

A continuación se detalla el recorrido paso a paso:

**Paso 1:** Desde la carpeta `Admin`, se sube un nivel al directorio `Models`
```bash
cd ..
```

**Paso 2:** Desde `Models`, se sube otro nivel y se ubica en el directorio raíz `src`
```bash
cd ../../
```

### Ejercicio 5

> Crear una carpeta **public**
> Ingresar a la carpeta **public**
> Crear una carpeta **reports**
> Crear una carpeta **assets**
> Ingresar a la carpeta **assets**
> Crear una carpeta **css**
> Ingresar a la carpeta **css**
> Crear un archivo **base.css**
> Crear un archivo **notas.txt** en la carpeta **reports**

### Solucion
```bash
mkdir public
cd public
mkdir reports
mkdir assets
cd assets
mkdir css
touch base.css
cd ../../reports
touch notas.txt
```

Estructura final de archivos y carpetas

```
public/
├── assets
│   └── css
│       └── base.css
└── reports
    └── notas.txt
```

Explicacion del comando `cd ../../reports`

Si nos encontramos dentro de la carpeta `css`, y se nos solicita crear un archivo dentro de la carpeta `reports`, debemos movernos hacia los directorios superiores para acceder a ella.

A continuación se detalla el recorrido paso a paso:

**Paso 1:** Desde la carpeta `css`, se sube un nivel al directorio `assets`
```bash
cd ..
```

**Paso 2:** Desde `assets`, se sube otro nivel y se ubica en el directorio raíz `public`
```bash
cd ../../
```

**Paso 3:** Desde `css`, este comando accede directamente a la carpeta `reports`, ubicada en el mismo nivel que `assets` dentro de `public`
```bash
cd ../../reports
```