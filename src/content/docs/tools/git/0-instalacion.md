---
title: Instalacion y configuracion de Git
description: 'Instalacion y configuracion de Git'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Git'
  - tag: meta
    attrs:
      property: og:description
      content: 'Control de versiones con Git'
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
      content: 'Git'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Control de versiones con Git'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Introducción a Git

Git es un sistema de control de versiones distribuido, de código abierto y gratuito, diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia.

## Instalación en Windows

Para instalar Git en tu sistema operativo **Windows**, sigue estos pasos detallados:

### Descargar el instalador
Ve a la página oficial de descargas de Git: [descargar Git](https://git-scm.com/download/win).
El sitio detectará automáticamente tu sistema y comenzará la descarga del instalador `.exe` (normalmente de 64-bit).

Haz clic en **Install** y espera a que termine el proceso.

### Verificar la instalación
Para asegurarte de que Git se ha instalado correctamente, abre tu terminal (`CMD`, `PowerShell` o `Git Bash`) y escribe el siguiente comando:

```bash
git --version
```
Si la instalación fue exitosa, verás la versión instalada de Git en la pantalla.

## Configuración Básica

Después de instalar Git, es fundamental realizar una configuración inicial para que tus *commits* estén correctamente identificados. Abre tu terminal (`CMD`, `PowerShell` o `Git Bash`) y ejecuta los siguientes comandos:

### Identidad de Usuario
Establece tu nombre y correo electrónico. Estos datos se asociarán a cada uno de tus cambios:

```bash
git config --global user.name "tu nombre"
git config --global user.email "tu.email@ejemplo.com"
```

### Rama por Defecto
Históricamente, Git utilizaba `master` como rama principal. Hoy en día, la buena práctica es utilizar `main`. Configura Git para que la utilice por defecto en nuevos proyectos:

```bash
git config --global init.defaultBranch main
```

### Editor de Código
Si prefieres usar Visual Studio Code como tu editor predeterminado para mensajes de commits y resolución de conflictos:

```bash
git config --global core.editor "code --wait"
```

### Verificar la Configuración
Para comprobar que los valores se guardaron correctamente, puedes listar tu configuración actual:

```bash
git config --list
```
