---
title: '4. Formulario de datos'
description: 'Diseño de elementos HTML para mostrar y procesar datos: uso de etiquetas h3, atributos id y botones de acción.'

head:
  - tag: meta
    attrs:
      property: og:title
      content: '4. Formulario de datos'
  - tag: meta
    attrs:
      property: og:description
      content: 'Diseño de elementos HTML para mostrar y procesar datos: uso de etiquetas h3, atributos id y botones de acción.'
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
      content: '4. Formulario de datos'
  - tag: meta
    attrs:
      property: twitter:description
      content: 'Diseño de elementos HTML para mostrar y procesar datos: uso de etiquetas h3, atributos id y botones de acción.'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

:::danger
Borrar todo el contenido de `counter.js`
:::

## Etiqueta para mostrar datos
Agregar debajo de la etiqueta `h1` una etiqueta `h3` para mostrar datos

```html title="index.html"
<h3>0</h3>
```

Agregar a la etiqueta `h3` un **atributo** `id` con el **valor** de `salida`

```html title="index.html"
<h3 id="salida">0</h3>
```

## Etiqueta para procesar datos

Debajo de la etiqueta `h3`, agregar una etiqueta `button` 

```html title="index.html"
<button>
  Incrementar
</button>
```

Agregar a la etiqueta `button` un **atributo** `id` con el **valor** de `btn-incrementar`

```html title="index.html"
<button id="btn-incrementar">
  Incrementar
</button>
```

## Verificar el avance
### Resultado correcto 😎
**Abrir o recargar** el archivo `index.html` en el navegador **google chrome**

![Resultado correcto](./../../../../../assets/docs/contador-likes/formulario.png)
