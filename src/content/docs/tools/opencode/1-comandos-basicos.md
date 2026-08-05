---
title: Comandos Básicos de OpenCode
description: 'Guía de los comandos esenciales y opciones para utilizar OpenCode'
head:
  - tag: meta
    attrs:
      property: og:title
      content: 'Comandos Básicos de OpenCode'
  - tag: meta
    attrs:
      property: og:description
      content: 'Guía de los comandos esenciales y opciones para utilizar OpenCode'
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
      content: 'Comandos Básicos de OpenCode'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Guía de los comandos esenciales y opciones para utilizar OpenCode'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---
## Modelos disponibles

A continuación, se listan los modelos disponibles que puedes utilizar en la versión gratuita:

| Modelo | Descripción |
| :--- | :--- |
| `deepseek` | Modelo avanzado y altamente optimizado para el desarrollo de software, depuración y tareas técnicas complejas. |
| `qwen` | Modelo especializado en código, excelente para asistencia en programación y generación de algoritmos. |

## Comandos Básicos

Para inicializar la configuración de OpenCode en un nuevo proyecto en tu directorio actual, ejecuta el siguiente comando:
```bash
opencode init
```

Para iniciar el entorno de OpenCode, ejecuta el siguiente comando:
```bash
opencode
```

## Modos de trabajo

OpenCode ofrece distintos modos de trabajo o formas de interactuar según el caso de uso. Los más importantes son el **Modo Plan** y el **Modo Build**.

> **Nota:** Puedes cambiar rápidamente entre el Modo Plan y el Modo Build durante una sesión interactiva presionando la tecla **Tab** o **Tabulador**.

### Modo Plan (Planificación)
Este modo está orientado a la investigación, diseño de arquitectura y análisis. Cuando OpenCode opera en modo plan:
- **Analiza el estado actual** del proyecto y sus dependencias.
- **Propone soluciones y diseña arquitecturas** sin modificar el código fuente de forma automática.
- **Genera estrategias o pasos a seguir antes de la ejecución**, solicitando confirmación al usuario (creando un plan de implementación). Es ideal para definir *qué* y *cómo* se va a construir.

### Modo Build (Construcción)

El modo build (o de ejecución) está orientado a la acción y a la implementación directa. En este modo, OpenCode:
- **Escribe y edita código** directamente en los archivos de tu proyecto.
- **Ejecuta comandos** en la terminal (como instalaciones de paquetes o scripts de configuración).
- **Transforma la estrategia definida previamente en código funcional**, aplicando los cambios de manera directa y creando nuevos archivos o modificando los existentes.

## Selección de modelos

OpenCode permite especificar qué modelo de inteligencia artificial utilizarás para procesar las solicitudes. Dentro de una sesión interactiva de OpenCode, puedes cambiar el modelo utilizando el comando `/model`. Simplemente escribe:

```bash
/model
```

## Búsqueda de archivos

En OpenCode, el símbolo `@` (arroba) se utiliza para buscar y mencionar archivos rápidamente dentro de tu proyecto. 

Al escribir `@` seguido del nombre de un archivo o directorio en la sesión interactiva (por ejemplo, `@index.js`), OpenCode te mostrará sugerencias. Al seleccionar un archivo, su contenido se agrega automáticamente como contexto para tu instrucción.

Esto es muy útil porque te permite:
- **Añadir contexto preciso:** Asegura que la inteligencia artificial analice exactamente los archivos sobre los que quieres trabajar.
- **Ahorrar tiempo:** Evitas tener que abrir los archivos manualmente para copiar y pegar su contenido en el chat.

### Ejemplo de uso

Supongamos que quieres que OpenCode revise un archivo llamado `calculadora.js` para corregir un error. En lugar de intentar explicar cómo es el código, puedes usar `@` para incluirlo directamente en tu instrucción:

> *"Por favor, revisa el archivo @calculadora.js y dime por qué la función de dividir está fallando."*

En este escenario:
1. Al empezar a escribir `@calc...`, la interfaz te sugerirá automáticamente el archivo.
2. Al seleccionarlo, OpenCode adjunta internamente todo el contenido del archivo a tu mensaje.
3. El modelo de inteligencia artificial analizará el código exacto y te dará una respuesta precisa porque ahora "ve" tu archivo.

## Prompt multilinea o en formato archivo

Cuando necesitas enviar instrucciones complejas o extensas, escribir en una sola línea puede resultar incómodo. OpenCode te permite manejar requerimientos largos de dos formas principales:

### Prompt Multilínea

Dentro de la sesión interactiva, es común necesitar explicar detalles paso a paso. Para enviar un prompt de varias líneas:
- Puedes **copiar y pegar** bloques enteros de texto directamente en la terminal.
- En muchas terminales, puedes usar atajos como **Shift + Enter** para hacer un salto de línea sin enviar el mensaje. 

### Prompt desde un archivo

Si tienes un conjunto de reglas muy extenso (como documentación, directrices del proyecto o estándares de código), lo mejor es guardar tus instrucciones en un archivo de texto (por ejemplo, `prompt.txt`).

**Desde la sesión interactiva:**
Puedes pedirle directamente a OpenCode que lea el archivo y actúe en consecuencia:
> *"Lee los requerimientos en el archivo prompt.txt y crea la estructura base del proyecto."*

## Instalación de skills

Una **skill** (o habilidad) es un paquete de instrucciones y configuraciones predefinidas que le enseña a OpenCode cómo realizar tareas específicas de manera óptima. Por ejemplo, existen skills para trabajar con frameworks particulares (como React o Astro), aplicar estándares de código o integrarse con otras herramientas.
### Instalacion del skill `git-commit`

A continuación, veremos cómo instalar el skill oficial para generar mensajes de commit estructurados siguiendo la documentación de [skills.sh](https://www.skills.sh/github/awesome-copilot/git-commit).

#### Instalacion Global

Para instalar el skill `git-commit` desde el repositorio `awesome-copilot` de GitHub, abre tu terminal y ejecuta el siguiente comando utilizando `bun`:

```bash
bun skills add https://github.com/github/awesome-copilot --skill git-commit
```

Esto descargará e instalará el skill, dejándolo listo para su uso en cualquier repositorio donde utilices el asistente.

#### Uso en la sesión interactiva

Este skill se encarga de ejecutar un `git commit` aplicando el estándar de *Conventional Commits*. Analiza el `diff` de forma inteligente, agrupa archivos y genera el mensaje de forma automática.
