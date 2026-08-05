---
title: Instalacion de OpenCode
description: 'Instalacion de OpenCode'

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
OpenCode es una herramienta diseñada para facilitar el desarrollo y la escritura de código, brindando diversas funcionalidades y entornos optimizados.

## Instalación en Windows

### Instalar Bun

Para instalar [Bun](https://bun.sh/) en sistemas operativos Windows, abre `PowerShell` y ejecuta el siguiente comando:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verifica la instalación correcta ejecutando el siguiente comando:
```bash
bun --version
```

### Instalar OpenCode

Una vez que tengas instalado `Bun`, abre tu terminal `PowerShell`, `CMD` o `Git Bash` y ejecuta el siguiente comando para instalar `OpenCode` de manera global:

```bash
bun install -g opencode
```

Verifica la instalación correcta ejecutando el siguiente comando:
```bash
opencode --version
```

Para ver la lista de todos los comandos disponibles y las opciones de ayuda:
```bash
opencode --help
```
