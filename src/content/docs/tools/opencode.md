---
title: OpenCode
description: 'Uso de OpenCode'

head:
  - tag: meta
    attrs:
      property: og:title
      content: 'OpenCode'
  - tag: meta
    attrs:
      property: og:description
      content: 'Uso de OpenCode'
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
      content: 'OpenCode'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Uso de OpenCode'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

## Introducción a OpenCode

OpenCode es una herramienta diseñada para facilitar el desarrollo y la escritura de código, brindando diversas funcionalidades y entornos optimizados.

## Instalación en Windows

### 1. Instalar Bun

Para instalar [Bun](https://bun.sh/) en sistemas operativos Windows, abre PowerShell y ejecuta el siguiente comando:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Instalar OpenCode

Una vez que tengas instalado Bun, abre tu terminal y ejecuta el siguiente comando para instalar OpenCode de manera global:

```bash
bun install -g opencode
```

## Comandos Básicos

A continuación, se presentan algunos de los comandos más comunes para comenzar a utilizar OpenCode:

### Ayuda y Versión

Para verificar que OpenCode se ha instalado correctamente y ver la versión actual, ejecuta:

```bash
opencode --version
```

Para ver la lista de todos los comandos disponibles y las opciones de ayuda:

```bash
opencode --help
```

### Iniciar y Ejecutar

Para inicializar la configuración o un nuevo proyecto en tu directorio actual (dependiendo de la herramienta):

```bash
opencode init
```

Para iniciar OpenCode o ejecutar su entorno:

```bash
opencode
```

### Opciones Esenciales

Al ejecutar OpenCode, puedes pasar diferentes opciones o *flags* para personalizar su comportamiento. Algunas de las más esenciales son:

#### Seleccionar un modelo (`--model`)

Permite especificar qué modelo de inteligencia artificial se utilizará para procesar las solicitudes.

```bash
opencode --model gemini-1.5-pro
```

#### Enviar una solicitud directamente (`--prompt`)

Puedes enviar instrucciones rápidas o consultas sin necesidad de entrar a un modo interactivo.

```bash
opencode --prompt "Crea un script en Python para leer un archivo JSON"
```

#### Otras opciones útiles

- `--temperature`: Ajusta la creatividad del modelo (ejemplo: `--temperature 0.7`).
- `--workspace`: Define el directorio de trabajo donde OpenCode tendrá permisos de acceso y edición.
