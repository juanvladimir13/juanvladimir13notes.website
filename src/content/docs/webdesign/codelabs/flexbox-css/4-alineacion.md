---
title: 4. Alineación de elementos
description: 4. Alineación de elementos

head:
  - tag: meta
    attrs:
      property: og:title
      content: '4. Alineación de elementos'
  - tag: meta
    attrs:
      property: og:description
      content: '4. Alineación de elementos'
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
      content: '4. Alineación de elementos'
  - tag: meta
    attrs:
      property: twitter:description
      content: '4. Alineación de elementos'
  - tag: meta
    attrs:
      property: twitter:image
      content: 'https://juanvladimir13codelabs.web.app/og-programming.jpg'
---

```css title="app.css"
#nav-container {
    display: flex;
}
```
### Resultado correcto 😎
![menu flex](./../../../../../assets/docs/flexbox/menu-flex.png)

## Alineacion horizontal justify-content

![justify content](./../../../../../assets/docs/flexbox/justify-content.png)

```css title="app.css"
#nav-container {
    justify-content: space-between;
}
```

### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/result-justify.png)

## Alineacion vertical align-items

![alineacion vertical items](./../../../../../assets/docs/flexbox/align-items.png)

```css title="app.css"
#nav-container {
    align-items: center;
}
```

### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/result-align.png)

## Alineacion de item align-self

![alineacion self ](./../../../../../assets/docs/flexbox/align-self.png)

```css title="app.css"
.items {
    align-self: start;
}
```

## gap, row-gap y column-gap

Espacio entre elementos de fila y columna

### gap

Notacion resumida, esta propiedad permite establecer el espacio entre elementos de fila y columnas, el **primer** valor es para la **fila**, el **segundo** valor es para la **columna**

```css title="app.css" showLineNumbers
#container {
    display: flex;
    gap: 15px 20px;
}
```

### row-gap y column-gap

```css title="app.css" showLineNumbers
#container {
  display: flex;
  row-gap: 15px;
  column-gap: 20px;
}
```

Agregar en la class `nav-item` la siguiente linea

```css title="app.css"
.nav-item {
  column-gap: 16px;
}
```

### Resultado correcto 😎
![Resultado correcto](./../../../../../assets/docs/flexbox/result-gap.png)


## Flex wrap
![flex wrap ](./../../../../../assets/docs/flexbox/flex-wrap.png)

```css title="app.css"
.container-one {
    flex-wrap: wrap;
}

.container-two {
    flex-wrap: nowrap;
}
```
